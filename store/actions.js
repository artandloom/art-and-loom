export default {
    // async nuxtServerInit ({ commit, state, dispatch }, { route, req, app, error }) {
    async nuxtServerInit({ commit }, context) {
        try {
            const response = await context.$axios.get(process.env.baseUrl + '/settings?single=1&fields=*.*.*.*');
            commit('SET_CONFIGS', response.data.data)
        } catch (error) {
            console.log('error', error);
        }
    },
    // async nuxtClientInit({ commit, state }, context) {}
    async nuxtClientInit({ dispatch }, context) {

    },
}