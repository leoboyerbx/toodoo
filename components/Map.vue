<template>
  <div class="map--container h-full z-0 flex" @wheel="onWheel">
    <div class="relative">
      <img class="map--container__img h-full" src="~/assets/img/map1.svg" />
      <Character
        v-for="(character, index) in characters"
        :key="index"
        :name="character.name"
        :url="character.url"
        :style="{
          transform: `translateY(${character.position.y}px) translateX(calc(-100% + ${character.position.x}px))`,
        }"
      ></Character>
      <Pin
        v-for="pin in pinList"
        :key="pin.text"
        :text="pin.text"
        :position="pin.position"
        @open="moveCurrentCharacter(pin.position)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',

  data: () => {
    return {
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
            x: 650,
            y: 360,
          },
        },
        {
          text: 'Pin3',
          position: {
            x: 120,
            y: 528,
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
  max-width: fit-content;
  overflow: auto;
}

.map--container__img {
  max-width: none;
}
</style>
