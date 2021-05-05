<template>
  <div
    class="map--container h-full w-full z-0 flex overflow-x-scroll"
    @wheel="onWheel"
  >
    <div
      class="relative"
      :style="{
        width: mapWidth + 'px',
      }"
    >
      <img
        class="h-full max-w-none w-auto"
        src="~/assets/img/map1.svg"
        alt="Carte"
        @load="onLoadMap"
      />
      <Character
        v-for="character in characters"
        :key="character.player.id"
        :name="character.player.name"
        :url="character.avatar.img.character"
        :position="character.position"
      ></Character>
      <MissionPin
        v-for="(pin, index) in pinList"
        :key="index + 'pin'"
        :position="pin.position"
        :mission="pin.mission"
        @open="moveCurrentCharacter(pin.position)"
      />
    </div>
  </div>
</template>

<script>
import Character from './Character'
import MissionPin from './MissionPin'

export default {
  name: 'Map',
  components: { MissionPin, Character },
  data: () => {
    return {
      mapWidth: 0,
    }
  },
  computed: {
    characters() {
      return this.$store.state.viewModel.mapViewData.characters
    },
    // charactersAutoPlace() {
    //   const rawCharacters = this.characters
    // },
    pinList() {
      return this.$store.state.viewModel.mapViewData.pinList
    },
  },
  methods: {
    onLoadMap(e) {
      this.mapWidth = e.currentTarget.offsetWidth
      this.mapImg = e.currentTarget
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
      this.$store.commit('moveCurrentCharacter', position)
    },
  },
}
</script>

<style scoped>
.map--container::-webkit-scrollbar {
  display: none;
}
</style>
