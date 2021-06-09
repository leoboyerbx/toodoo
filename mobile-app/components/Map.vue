<template>
  <div class="map--container h-full w-full z-0 overflow-x-scroll">
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
      <transition-group name="pin-appear">
        <MissionPin
          v-for="pin in filteredPinList"
          :key="pin.id"
          :position="pin.position"
          :mission="pin.mission"
          @open="characterPathToPin(pin, $event)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap, { Power3 } from 'gsap'
import charactersAutoPlace from '@/helpers/charactersAutoPlace'
import getTimelineFromPoints from '@/helpers/getTimelineFromPoints'
import pathFinder from '@/helpers/pathFinder'
import Character from './Character'
import MissionPin from './MissionPin'
import MapBackground from './MapBackground'

export default {
  name: 'Map',
  components: { MapBackground, MissionPin, Character },
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
    filteredPinList() {
      return this.pinList.filter(
        (pin) => pin.day <= this.$store.state.currentDay
      )
    },
    currentDay() {
      return this.$store.state.currentDay
    },
  },
  watch: {
    currentDay(newVal) {
      const movePlayersTo = this.$store.state.viewModel.mapViewData
        ?.dayStarts?.[newVal]
      if (movePlayersTo) {
        this.moveAllCharactersToPoint(movePlayersTo)
        this.scrollMapTo(newVal * 1610)
      }
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
    scrollMapTo(x) {
      gsap.to(this.$el, {
        scrollTo: { x },
        duration: 3,
        ease: Power3.easeInOut,
      })
    },
    moveCurrentCharacter(position) {
      this.$store.commit('moveCurrentCharacter', Object.assign({}, position))
    },
    moveAllCharactersToPoint(point) {
      this.characters.forEach((character, i) => {
        this.moveCharacterToPoint(character, point, i / 5, 5)
      })
    },
    characterPathToPin(pin, component) {
      const currentCharacter = this.$store.getters['viewModel/currentCharacter']
      const tl = this.moveCharacterToPoint(currentCharacter, pin.id)
      setTimeout(() => {
        component.isActive = true
      }, tl.duration() * 1000)
    },
    moveCharacterToPoint(character, point, delay = 0, duration = null) {
      const fromPoint = character.pin
      const toPoint = point

      const path = pathFinder(fromPoint, toPoint)
      const id = '#character-' + character.player.id
      const tl = getTimelineFromPoints(path, id)

      gsap.to(tl, {
        time: tl.duration(),
        duration: duration ?? tl.duration(),
        ease: 'power1.inOut',
        delay,
      })

      const index = this.characters.findIndex(
        (c) => c.player.id === character.player.id
      )
      this.$store.commit('setCharacterPin', { pin: toPoint, index })
      return tl
    },
  },
}
</script>

<style scoped>
.map--container::-webkit-scrollbar {
  display: none;
}
.pin-appear-enter-active,
.pin-appear-leave-active {
  transition: opacity 0.3s;
}

.pin-appear-enter-active {
  transition-delay: 2.9s;
}
.pin-appear-enter,
.pin-appear-leave-to {
  opacity: 0;
}
</style>
