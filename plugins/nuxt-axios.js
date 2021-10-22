import hash from 'object-hash'
import sizeof from 'object-sizeof'
import lruCache from 'lru-cache'

const cacheEnabled = true
const cacheMaxAge = 30 * 60 * 1000
const cacheMaxSize = 128 * 1000 * 1000

const getCacheKey = (obj) => hash(obj);

const getCacheKeyObjRequest = (config) => {
    return {
        method: config.method,
        url: config.baseURL + (config.url ? config.url : ''),
        params: config.params,
        data: config.data,
    }
};

const getCacheKeyObjResponse = (config) => {
    return {
        method: config.method,
        url: config.url,
        params: config.params,
        data: config.data,
    }
};

const cache = new lruCache({
    maxAge: cacheMaxAge,
    max: cacheMaxSize,
    length: (item) => sizeof(item),
});

const searchURLs = [
    'https://admin.artandloom.com/art-and-loom/items/artists?fields=*.*.*&filter[name][contains]',
    'https://admin.artandloom.com/art-and-loom/items/collections?fields=*.*.*&filter[name][contains]',
    'https://admin.artandloom.com/art-and-loom/items/products?fields=*.*.*&filter[name][contains]',
];

const currentExecutingRequests = {};


export default async ({ app }) => {
    const axios = app.$axios

    axios.defaults.timeout = 10000

    if (!cacheEnabled) {
        return
    }

    axios.interceptors.request.use(
        (request) => {
            if (request.method === 'get' && cacheEnabled && process.client) {
                const key = getCacheKey(getCacheKeyObjRequest(request))

                if (cache.has(key)) {
                    const { data, headers } = cache.get(key)

                    request.data = data

                    // Set the request adapter to send the cached response
                    // and prevent the request from actually running
                    request.adapter = () =>
                        Promise.resolve({
                            data,
                            status: request.status,
                            statusText: request.statusText,
                            headers: headers,
                            config: request,
                            request,
                        })
                }
            }


            let url = request.url;

            if (searchURLs.find(searchURL => url.startsWith(searchURL))) {
                url = url.substr(0, url.lastIndexOf("filter[name][contains]"));
            }

            if (currentExecutingRequests[url]) {
                const source = currentExecutingRequests[url];
                delete currentExecutingRequests[url];
                source.cancel();
            }

            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
            request.cancelToken = source.token;
            currentExecutingRequests[url] = source;

            return request
        },
        (error) => Promise.reject(error)
    )

    axios.interceptors.response.use(
        (response) => {
            let bypassCache = false

            try {
                // eslint-disable-next-line
                bypassCache = JSON.parse(response.config.params.__cache) === false
            } catch (error) {
                //
            }

            if (currentExecutingRequests[response.request.responseURL]) {
                // here you clean the request
                delete currentExecutingRequests[response.request.responseURL];
            }

            if (
                cacheEnabled &&
                !bypassCache &&
                response.config.method === 'get' &&
                process.client
            ) {
                const key = getCacheKey(getCacheKeyObjResponse(response.config))
                cache.set(key, { data: response.data, headers: response.headers })
            }

            return response
        },
        (error) => {
            if (error.response) {
                console.log('interceptors.response', error.config)
            }


            if (axios.isCancel(error)) {
                // here you check if this is a cancelled request to drop it silently (without error)
                return new Promise(() => { });
            }

            const originalRequest = error.config;
            let url = originalRequest.url;

            if (searchURLs.find(searchURL => url.startsWith(searchURL))) {
                url = url.substr(0, url.lastIndexOf("filter[name][contains]"));
            }
            
            if (currentExecutingRequests[url]) {
                // here you clean the request
                delete currentExecutingRequests[url];
            }

            return Promise.reject(error)
        }
    )
}