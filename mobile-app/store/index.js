import Vue from 'vue'
export const state = () => ({
  currentPlayerIndex: null,
  currentDay: 0,
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
  setCurrentCharacterPin(state, pin) {
    const character =
      state.viewModel.mapViewData.characters[state.currentPlayerIndex]
    character.pin = pin
    Vue.set(
      state.viewModel.mapViewData.characters,
      state.currentPlayerIndex,
      character
    )
  },
  setCharacterPin(state, { pin, index }) {
    const character = state.viewModel.mapViewData.characters[index]
    character.pin = pin
    Vue.set(state.viewModel.mapViewData.characters, index, character)
  },
  setCurrentDay(state, day) {
    state.currentDay = day
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
