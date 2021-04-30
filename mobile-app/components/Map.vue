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
import { cloneDeep } from 'lodash'
export default {
  name: 'Map',
  data: () => {
    return {
      mapWidth: 0,
    }
  },
  computed: {
    viewData() {
      return cloneDeep(this.$store.state.viewModel.mapViewData)
    },
    characters() {
      return this.viewData.characters
    },
    pinList() {
      return this.viewData.pinList
    },
    currentPlayer() {
      return this.$store.state.currentPlayer
    },
    currentCharacter() {
      return (
        this.characters.find((character) => {
          return character.player.id === this.currentPlayer.id
        }) || null
      )
    },
  },
  beforeMount() {
    this.$store.dispatch('viewModel/fetchMapViewData', {
      weekIndex: 0,
    })
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
      this.currentCharacter.position = position
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
