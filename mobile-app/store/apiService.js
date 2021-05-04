import axios from 'axios'

export const state = () => ({
  players: [],
  game: null,
  missions: [],
})

export const mutations = {
  SET_PLAYERS(state, players) {
    state.players = players
  },
  SET_GAME(state, game) {
    state.game = game
  },
  SET_MISSIONS(state, missions) {
    state.missions = missions
  },
}

export const getters = {}

export const actions = {
  async getGame({ commit }) {
    const response = await axios.get(`${this.$config.API_URL}/games/2`)
    commit('SET_GAME', response.data[0])
  },
  async getPlayers({ commit, state }) {
    const response = await axios.get(
      `${this.$config.API_URL}/players/team/${state.game.teamId}`
    )
    commit('SET_PLAYERS', response.data)
  },
  async getMissions({ commit, state }) {
    const response = await axios.get(
      `${this.$config.API_URL}/missions/game/${state.game.id}`
    )
    commit('SET_MISSIONS', response.data)
  },
  async fetchAll({ dispatch }) {
    await dispatch('getGame')
    await dispatch('getPlayers')
    await dispatch('getMissions')
  },
  async postMissionCompletion(context, { missionId, completeBy, completeDay }) {
    console.log('Bonne blague')
    const response = await axios.post(
      `${this.$config.API_URL}/mission-completion`,
      {
        missionId,
        completeBy,
        completeDay,
      }
    )
    console.log(response)
  },
}
