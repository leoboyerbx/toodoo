export const state = {
  mapViewData: {
    pinList: [],
    characters: [],
  },
}

export const mutations = {
  setMapViewData(state, set) {
    state.mapViewData = set
  },
}

export const actions = {
  async fetchMapViewData({ commit, rootState }, { weekIndex }) {
    // eslint-disable-next-line no-unused-vars
    const missions = rootState.apiService.missions
    const players = rootState.apiService.players
    const mapData = await import(
      `~/assets/data/maps/map-week-${weekIndex}.json`
    )
    const characters = players.map((player) => {
      return {
        player,
        position: mapData.startCoords,
      }
    })

    const pinList = []

    mapData.pinPlaces.forEach((pinPlacesOfDay) => {
      pinPlacesOfDay.forEach((pinPlace, index) => {
        if (index >= missions.length) return
        pinList.push({
          position: pinPlace.coords,
          mission: missions[index],
        })
      })
    })

    commit('setMapViewData', {
      pinList,
      characters,
    })
  },
}
