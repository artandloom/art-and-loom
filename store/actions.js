export default {
    // async nuxtServerInit ({ commit, state, dispatch }, { route, req, app, error }) {
    async nuxtServerInit({ commit }, context) {
        const fields = [
            '*',
            'collection_cover.*',
            'contact_us_cover.*',
            'contact_us_image.*',
            'trade_cover.*'
        ];
        try {
            const response = await context.$axios.get(process.env.baseUrl + '/settings?single=1&fields=' + fields.join(','));
            commit('SET_CONFIGS', response.data.data)
        } catch (error) {
            console.log('error', error);
        }
    },
    // async nuxtClientInit({ commit, state }, context) {}
    async nuxtClientInit({ dispatch }, context) {

    },
}