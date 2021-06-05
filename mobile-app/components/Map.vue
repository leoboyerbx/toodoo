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
          :name="character.player.name"
          :url="character.avatar.img.character"
          :position="character.position"
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
      <NuxtLink to="/missions-manager">
        <DailyGuide class="left-96 sticky top-5" />
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

export default {
  name: 'Map',
  components: { MapBackground, MissionPin, Character, DailyGuide },
  data: () => {
    return {
      mapWidth: 0,
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
