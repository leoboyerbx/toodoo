<template>
  <div>
    <component :is="`${$store.state.bossSync.currentScreen}-screen`" />
    <div class="cursor-pointer w-12 h-12 bg-white absolute top-0 right-0"></div>
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
  beforeCreate() {
    this.$store.commit('bossSync/setCastType', 'pc')
  },
}
</script>
