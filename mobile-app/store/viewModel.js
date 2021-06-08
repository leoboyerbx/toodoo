import gsap from 'gsap'
import { getAvatar } from '../../common/entities/getEntity'

export const state = () => ({
  mapViewData: {
    pinList: [],
    characters: [],
  },
  ponctualMissionsListData: {
    missionsList: [],
  },
  missionsManagerData: {
    missionsList: [],
  },
})

export const getters = {
  currentCharacter: (state, getters, rootState) => {
    return state.mapViewData.characters[rootState.currentPlayerIndex]
  },
}

export const mutations = {
  setMapViewData(state, set) {
    state.mapViewData = set
  },
  setCharacters(state, characters) {
    state.mapViewData.characters = characters
  },
  setPonctualMissionsList(state, set) {
    state.ponctualMissionsListData.missionsList = set.missionsFiltered
  },
  setMissionsManagerList(state, set) {
    state.missionsManagerData.missionsList = set.missions
  },
}

export const actions = {
  async fetchMapViewData({ commit, rootState }, { weekIndex }) {
    // eslint-disable-next-line no-unused-vars
    const missions = rootState.apiService.missions
    const missionsToPin = []
    missions.forEach((mission) => {
      if (!mission.ponctual && mission.active) {
        missionsToPin.push(mission)
      }
    })
    const players = rootState.apiService.players
    const mapData = await import(
      `~/assets/data/maps/map-week-${weekIndex}.json`
    )
    const characters = await Promise.all(
      players.map(async (player) => {
        const avatar = await getAvatar(player.avatar)
        return {
          player,
          avatar,
          position: Object.assign({}, mapData.startCoords),
          timeline: gsap.timeline(),
          pin: 'a',
        }
      })
    )

    const pinList = []

    mapData.pinPlaces.forEach((pinPlacesOfDay) => {
      pinPlacesOfDay.forEach((pinPlace, index) => {
        if (index >= missionsToPin.length) return
        pinList.push({
          position: pinPlace.coords,
          id: pinPlace.id,
          mission: missionsToPin[index],
        })
      })
    })

    commit('setMapViewData', {
      pinList,
      characters,
    })
  },
  fetchPonctualMissionsListData({ commit, rootState }) {
    const missions = rootState.apiService.missions
    const missionsFiltered = []

    missions.forEach((mission) => {
      if (mission.ponctual) {
        missionsFiltered.push(mission)
      }
    })
    commit('setPonctualMissionsList', {
      missionsFiltered,
    })
  },
  fetchMissionsManagerData({ commit, rootState }) {
    const missions = rootState.apiService.missions
    commit('setMissionsManagerList', {
      missions,
    })
  },
}
