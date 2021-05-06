<template>
  <div>
    <component :is="`${$store.state.bossSync.currentScreen}-screen`" />
  </div>
</template>

<script>
import FightScreen from '@/components/screen/FightScreen'
import PairingScreen from '../components/screen/PairingScreen'
import IntroScreen from '../components/screen/IntroScreen'

export default {
  components: { PairingScreen, IntroScreen, FightScreen },
  layout: 'tv-screen',
  beforeCreate() {
    this.$store.commit('bossSync/setCastType', 'cast')
  },
}
</script>
