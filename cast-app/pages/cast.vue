<template>
  <div class="bg-theme-light">
    <component :is="`${$store.state.currentScreen}-screen`" />
  </div>
</template>

<script>
import PairingScreen from '../components/screen/PairingScreen'

export default {
  components: { PairingScreen },
  layout: 'tv-screen',
}
</script>
