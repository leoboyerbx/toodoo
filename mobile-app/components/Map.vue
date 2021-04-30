<template>
  <div class="map--container h-full w-full z-0 flex" @wheel="onWheel">
    <div
      class="relative"
      :style="{
        width: mapWidth + 'px',
      }"
    >
      <img
        class="h-full max-w-none w-auto"
        src="~/assets/img/map1.svg"
        @load="onLoadMap"
      />
      <Character
        v-for="character in characters"
        :key="character.player.id"
        :name="character.player.name"
        :url="character.player.avatar"
        :position="character.position"
      ></Character>
      <Pin
        v-for="pin in pinList"
        :key="pin.text"
        :text="pin.text"
        :position="pin.position"
        @open="moveCurrentCharacter(pin.position)"
      ></Pin>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data: () => {
    return {
      mapWidth: 0,
    }
  },
  computed: {
    characters() {
      return this.$store.state.viewModel.mapViewData.characters
    },
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
    moveCurrentCharacter(position) {
      this.$store.commit('moveCurrentCharacter', position)
    },
    onWheel(e) {
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
      e.currentTarget.scrollLeft -= delta * 40 // Multiplied by 40
      e.preventDefault()
    },
  },
}
</script>

<style scoped>
.map--container::-webkit-scrollbar {
  display: none;
}

.map--container {
  /*max-width: fit-content;*/
  overflow-x: scroll;
}
</style>
