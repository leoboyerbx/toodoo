export const state = () => ({
  currentPlayer: null,
})

export const mutations = {
  setCurrentPlayer(state, newPlayer) {
    state.currentPlayer = newPlayer
  },
}
