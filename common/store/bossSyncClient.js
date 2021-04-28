export const state = {
    currentScreen: 'pairing',
    clientType: '',
}

export const mutations = {
    setCastType(state, set = true) {
        state. clientType = set
    },
}

export const actions = {
    socketStart() {},
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
