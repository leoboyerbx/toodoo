<template>
  <div>
    <component :is="`${$store.state.bossSync.currentScreen}-screen`" />
  </div>
</template>
<script>
import PairingScreen from '../components/boss/screens/PairingScreen'
import IntroScreen from '../components/boss/screens/IntroScreen'

export default {
  components: { PairingScreen, IntroScreen },
  beforeCreate() {
    this.$store.commit('bossSync/setCastType', 'player')
    this.$nuxtSocket({
      name: 'game-sync',
      persist: true,
    })
  },
}
</script>
