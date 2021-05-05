export const state = () => ({
    currentScreen: 'pairing',
    clientType: '',
})

export const mutations = {
    setCastType(state, set = true) {
        state.clientType = set
    },
    changeScreen(state, screen) {
        state.currentScreen = screen
    }
}

export const actions = {
    // common
    socketStart() {},
    ready({ commit }) {
        commit('changeScreen', 'intro')
    },
    async pair(context, pairData) {
        await context.dispatch(
            '$nuxtSocket/emit',
            {
                label: 'game-sync',
                evt: 'pair',
                msg: pairData
            },
            { root: true }
        )
    },

    // mobile app specific
    sendConfig({ dispatch, rootState }) {
        dispatch(
            '$nuxtSocket/emit',
            {
                label: 'game-sync',
                evt: 'config',
                msg: {
                    gameId: rootState.apiService.game.id
                }
            },
            { root: true }
        )
    },
}
