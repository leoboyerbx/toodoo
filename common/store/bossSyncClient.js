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
    }
}
