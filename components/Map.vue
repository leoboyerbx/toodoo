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
        v-for="(character, index) in characters"
        :key="index"
        :name="character.name"
        :url="character.url"
        :style="{
          top: `${character.position.y}%`,
          left: `${character.position.x}%`,
        }"
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
      characters: [
        {
          name: 'firstCharacter',
          url: 'character.png',
          position: {
            x: 0,
            y: 0,
          },
        },
      ],
      pinList: [
        {
          text: 'Pin1',
          position: {
            x: 8.995,
            y: 26.75,
          },
        },
        {
          text: 'Pin3',
          position: {
            x: 7.41,
            y: 47.7,
          },
        },
      ],
      currentCharacter: null,
    }
  },
  mounted() {
    this.currentCharacter = this.characters[0]
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
