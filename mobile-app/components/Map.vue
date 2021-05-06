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
        ></Character>
      </MapBackground>
      <MissionPin
        v-for="(pin, index) in pinList"
        :key="index + 'pin'"
        :position="pin.position"
        :mission="pin.mission"
        @open="moveCurrentCharacter(pin.position)"
      />
      <DailyGuide />
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import Character from './Character'
import MissionPin from './MissionPin'
import DailyGuide from './DailyGuide'

export default {
  name: 'Map',
  components: { MissionPin, Character, DailyGuide },
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
      const rawCharacters = cloneDeep(this.characters)
      const positions = {}
      rawCharacters.forEach((character) => {
        if (positions[`${character.position.x}:${character.position.y}`]) {
          positions[`${character.position.x}:${character.position.y}`].push(
            character
          )
        } else {
          positions[`${character.position.x}:${character.position.y}`] = [
            character,
          ]
        }
      })
      const resultCharacters = []
      Object.values(positions).forEach((position) => {
        if (position.length > 1) {
          position[0].position.x += 0.2
          position[1].position.x -= 0.7
          position.forEach((character) => resultCharacters.push(character))
        } else {
          resultCharacters.push(position[0])
        }
      })
      return resultCharacters
    },
    pinList() {
      return this.$store.state.viewModel.mapViewData.pinList
    },
  },
  methods: {
    onLoadMap(mapDiv) {
      this.mapWidth = mapDiv.offsetWidth
      this.mapImg = mapDiv
      console.log(mapDiv)
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
