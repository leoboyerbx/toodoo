<template>
  <div class="bg-theme-light">
    <component :is="`${$store.state.bossSync.currentScreen}-screen`" />
  </div>
</template>

<script>
import PairingScreen from '../components/screen/PairingScreen'
import IntroScreen from '../components/screen/IntroScreen'

export default {
  components: { PairingScreen, IntroScreen },
  layout: 'tv-screen',
  beforeCreate() {
    this.$store.commit('bossSync/setCastType', 'cast')
  },
}
</script>
