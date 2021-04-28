export const state = () => ({
  currentScreen: 'pairing',
  isCast: true,
})

export const mutations = {
  setCastType(state, set = true) {
    state.isCast = set
  },
}

export const actions = {
  socketStart(context) {
    console.log('hey')
  },
}
