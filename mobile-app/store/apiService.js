import axios from 'axios'

export const state = () => ({
  players: [],
  game: null,
})

export const mutations = {
  SET_PLAYERS(state, players) {
    state.players = players
  },
  SET_GAME(state, game) {
    state.game = game
  },
}

export const getters = {}

export const actions = {
  getGame({commit}) {
    axios.get('http://localhost:7554/games/2').then((response) => {
      commit('SET_GAME', response.data)
    })
  },
  getPlayers({ commit }) {
    axios.get('http://localhost:7554/players').then((response) => {
      commit('SET_PLAYERS', response.data)
    })
  },
}
