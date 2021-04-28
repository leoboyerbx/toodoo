<template>
  <div class="bg-theme-light">
    <component :is="`${$store.state.bossSync.currentScreen}-screen`" />
  </div>
</template>

<script>
import PairingScreen from '../components/screen/PairingScreen'

export default {
  components: { PairingScreen },
  layout: 'tv-screen',
  beforeCreate() {
    this.$store.commit('bossSync/setCastType', 'cast')
  },
}
</script>
