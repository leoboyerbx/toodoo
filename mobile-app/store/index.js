import Vue from 'vue'
export const state = () => ({
  currentPlayerIndex: null,
})

export const mutations = {
  setCurrentPlayer(state, newPlayer) {
    const playerIndex = state.apiService.players.findIndex((player) => {
      return player.id === newPlayer.id
    })
    state.currentPlayerIndex = playerIndex >= 0 ? playerIndex : 0
  },
  moveCurrentCharacter(state, position) {
    const character =
      state.viewModel.mapViewData.characters[state.currentPlayerIndex]
    character.position = position
    Vue.set(
      state.viewModel.mapViewData.characters,
      state.currentPlayerIndex,
      character
    )
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
