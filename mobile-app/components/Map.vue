<template>
  <div
    class="map--container h-full w-full z-0 overflow-x-scroll"
    @wheel="onWheel"
  >
    <div
      class="relative h-full"
      :style="{
        width: mapWidth + 'px',
      }"
    >
      <MapBackground @mounted="onLoadMap">
        <Character
          v-for="character in charactersAutoPlace"
          :key="character.player.id"
          v-gsap.set="{
            x: character.position.x * 108.49,
            y: character.position.y * 7.72,
          }"
          v-gsap.to="{
            motionPath: {
              path: [
                { x: 0 * 108.49, y: 0 * 7.72 },
                { x: 2 * 108.49, y: 0 * 7.72 },
                { x: 5 * 108.49, y: 50 * 7.72 },
                {
                  x: character.position.x * 108.49,
                  y: character.position.y * 7.72,
                },
              ],
              type: 'cubic',
            },
            x: character.position.x * 108.49,
            y: character.position.y * 7.72,
            duration: 1,
          }"
          :name="character.player.name"
          :url="character.avatar.img.character"
        >
        </Character>
      </MapBackground>
      <MissionPin
        v-for="(pin, index) in pinList"
        :key="index + 'pin'"
        :position="pin.position"
        :mission="pin.mission"
        @open="moveCurrentCharacter(pin.position)"
      />
      <MeshNetworkPin
        v-for="meshPin in meshPinList"
        :key="meshPin.id"
        :position="meshPin.position"
      />
      <NuxtLink to="/ponctual-missions">
        <DailyGuide />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import charactersAutoPlace from '@/helpers/charactersAutoPlace'
import Character from './Character'
import MissionPin from './MissionPin'
import DailyGuide from './DailyGuide'
import MapBackground from './MapBackground'
import MeshNetworkPin from './MeshNetworkPin'

export default {
  name: 'Map',
  components: {
    MapBackground,
    MissionPin,
    Character,
    DailyGuide,
    MeshNetworkPin,
  },
  data: () => {
    return {
      mapWidth: 0,
      pointArray: [],
    }
  },
  computed: {
    characters() {
      return this.$store.state.viewModel.mapViewData.characters
    },
    charactersAutoPlace() {
      return charactersAutoPlace(this.characters)
    },
    pinList() {
      return this.$store.state.viewModel.mapViewData.pinList
    },
    meshPinList() {
      return this.$store.state.viewModel.mapViewData.meshPinList
    },
  },
  methods: {
    onLoadMap(mapDiv) {
      this.mapWidth = mapDiv.offsetWidth
      this.mapImg = mapDiv
      window.addEventListener('resize', () => {
        this.mapWidth = this.mapImg.offsetWidth
      })
    },
    onWheel(e) {
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
      e.currentTarget.scrollLeft -= delta * 40 // Multiplied by 40
      e.preventDefault()
    },
    moveCurrentCharacter(position) {
      this.$store.commit('moveCurrentCharacter', Object.assign({}, position))
    },
  },
}
</script>

<style scoped>
.map--container::-webkit-scrollbar {
  display: none;
}
</style>
