<template>
  <div class="select-none">
    <component :is="`${$store.state.bossSync.currentScreen}-screen`" />
  </div>
</template>
<script>
import FightScreen from 'components/boss/screens/FightScreen'
import VictoryScreen from 'components/boss/screens/VictoryScreen'
import PairingScreen from '../components/boss/screens/PairingScreen'
import IntroScreen from '../components/boss/screens/IntroScreen'

/**
 * @var cast
 */

export default {
  components: { PairingScreen, IntroScreen, FightScreen, VictoryScreen },
  head() {
    return {
      script: [
        {
          hid: 'cast',
          src:
            'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1',
          defer: true,
        },
      ],
    }
  },
  beforeCreate() {
    this.$store.commit('bossSync/setCastType', 'player')
    this.$nuxtSocket({
      name: 'game-sync',
      persist: true,
    })
    this.$store.dispatch('fetchAll')
  },
}
</script>
