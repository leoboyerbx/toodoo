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
    const response = await axios.get('http://localhost:7554/games/2')
    commit('SET_GAME', response.data[0])
  },
  async getPlayers({ commit, state }) {
    const response = await axios.get(
      `http://localhost:7554/players/team/${state.game.teamId}`
    )
    commit('SET_PLAYERS', response.data)
  },
  async getMissions({ commit, state }) {
    const response = await axios.get(
      `http://localhost:7554/missions/game/${state.game.id}`
    )
    commit('SET_MISSIONS', response.data)
  },
  async fetchAll() {
    await this.$store.dispatch('apiService/getGame')
    await this.$store.dispatch('apiService/getPlayers')
    await this.$store.dispatch('apiService/getMissions')
  },
}
