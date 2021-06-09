<template>
  <div
    :class="{ 'no-cursor': !fullScreenButtonVisible }"
    @mousemove="onMouseMove"
  >
    <component :is="`${$store.state.bossSync.currentScreen}-screen`" />
    <transition name="fade">
      <div
        v-show="fullScreenButtonVisible"
        class="cursor-pointer absolute top-5 right-5"
        @click="toggleFullScreen"
      >
        <unicon
          :name="isFullScreen ? 'compress-alt' : 'expand-alt'"
          fill="#fff"
          width="20"
          height="20"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import VictoryScreen from '@/components/screen/VictoryScreen'
import FightScreen from '../components/screen/FightScreen'
import PairingScreen from '../components/screen/PairingScreen'
import IntroScreen from '../components/screen/IntroScreen'

export default {
  components: { PairingScreen, IntroScreen, FightScreen, VictoryScreen },
  layout: 'tv-screen',
  data() {
    return {
      fullScreenButtonVisible: false,
      timeOut: null,
      isFullScreen: !!document.fullscreenElement,
    }
  },
  beforeCreate() {
    this.$store.commit('bossSync/setCastType', 'pc')
  },
  mounted() {
    document.addEventListener(
      'fullscreenchange',
      this.onfullscreenchange.bind(this)
    )
  },
  methods: {
    onMouseMove() {
      if (this.timeOut) {
        clearTimeout(this.timeOut)
        this.timeOut = null
      }
      this.timeOut = setTimeout(() => {
        this.fullScreenButtonVisible = false
      }, 1000)
      this.fullScreenButtonVisible = true
    },
    toggleFullScreen() {
      if (this.isFullScreen) {
        document.exitFullscreen()
      } else {
        document.documentElement.requestFullscreen()
      }
    },
    onfullscreenchange() {
      this.isFullScreen = !!document.fullscreenElement
    },
  },
}
</script>
<style>
.no-cursor {
  cursor: none;
}
</style>
