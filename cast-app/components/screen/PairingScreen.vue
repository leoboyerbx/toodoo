<template>
  <div class="w-full h-full">
    <CastPairing
      v-if="$store.state.bossSync.clientType === 'cast'"
      @pair="onPair"
    />
    <QrCodePairing v-else @pair="onPair" />
  </div>
</template>
<script>
import CastPairing from '../pairing/CastPairing'
import QrCodePairing from '../pairing/QrCodePairing'

export default {
  components: { QrCodePairing, CastPairing },
  props: {
    isCast: {
      type: Boolean,
      require: true,
    },
  },
  beforeMount() {
    if (this.$config.devPair) {
      this.onPair('devroom')
    }
  },
  methods: {
    onPair(sessionId) {
      this.$store.dispatch('bossSync/pair', {
        id: sessionId,
        type: 'cast',
      })
    },
  },
}
</script>
