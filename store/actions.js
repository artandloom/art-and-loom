export default {
    // async nuxtServerInit ({ commit, state, dispatch }, { route, req, app, error }) {
    async nuxtServerInit({ commit }, context) {
        const fields = [
            'collections_description',
            'company_type',
            'contact_phone',
            'contact_email',
            'contact_whatsapp',
            'contact_instagram',
            'contact_phone_link',
            'contact_address',
            'contact_address_link',
            'collection_cover.*',
            'collaboration_cover.*',
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