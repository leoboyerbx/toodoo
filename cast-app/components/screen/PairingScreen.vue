<template>
  <div class="w-full h-full">
    <CastPairing v-if="$store.state.isCast" />
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
  beforeCreate() {
    this.socket = this.$nuxtSocket({})
  },
  methods: {
    onPair(sessionId) {
      this.socket.emit('pair', {
        id: sessionId,
        type: 'player',
      })
      // this.$socket.client.emit('pair', {
      //   id: sessionId,
      //   type: 'player',
      // })
    },
  },
}
</script>
