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
          :id="'character-' + character.player.id"
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
        @open="characterPathToPin(pin)"
      />
      <NuxtLink to="/ponctual-missions">
        <DailyGuide class="left-96 sticky top-5" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import charactersAutoPlace from '@/helpers/charactersAutoPlace'
import getTimelineFromPoints from '@/helpers/getTimelineFromPoints'
import pathFinder from '@/helpers/pathFinder'
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
    characterPathToPin(pin) {
      const currentCharacter = this.$store.getters['viewModel/currentCharacter']
      const fromPoint = currentCharacter.pin
      const toPoint = pin.id
      const path = pathFinder(fromPoint, toPoint)

      const id = '#character-' + currentCharacter.player.id
      const tl = getTimelineFromPoints(path, id)
      gsap.to(tl, {
        time: tl.duration(),
        duration: tl.duration(),
        ease: 'power1.inOut',
      })
      this.$store.commit('setCurrentCharacterPin', pin.id)
    },
  },
}
</script>

<style scoped>
.map--container::-webkit-scrollbar {
  display: none;
}
</style>
