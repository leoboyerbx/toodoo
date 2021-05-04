export const state = () => ({
  currentPlayer: null,
  currentCharacter: null,
})

export const mutations = {
  setCurrentPlayer(state, newPlayer) {
    state.currentPlayer = newPlayer
    state.currentCharacter =
      state.viewModel.mapViewData.characters.find((character) => {
        return character.player?.id === state.currentPlayer?.id
      }) || null
  },
  moveCurrentCharacter(state, position) {
    state.currentCharacter.position = position
  },
}

export const actions = {
  async fetchAll({ dispatch, commit, state }) {
    await dispatch('apiService/fetchAll')
    await dispatch('viewModel/fetchMapViewData', {
      weekIndex: 0,
    })
    if (!state.currentPlayer) {
      commit('setCurrentPlayer', state.apiService.players[0])
    }
  },
}
