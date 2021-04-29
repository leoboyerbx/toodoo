import axios from 'axios'

export const state = () => ({
  players: [],
})

export const mutations = {
  SET_PLAYERS(state, players) {
    state.players = players
  },
}

export const getters = {}

export const actions = {
  getPlayers({ commit }) {
    axios.get('http://localhost:7554/players').then((response) => {
      console.log(response.data)
      commit('SET_PLAYERS', response.data)
    })
  },
}
