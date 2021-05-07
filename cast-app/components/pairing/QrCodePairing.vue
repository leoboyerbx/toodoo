<template>
  <div class="w-full h-full bg-white flex items-center justify-center">
    <QrcodeVue
      id="qrcode"
      :value="sessionId"
      size="800"
      class="relative w-64"
    />
  </div>
</template>
<script>
import { v4 as uuid } from 'uuid'
import QrcodeVue from './QrCodeVue'

export default {
  components: { QrcodeVue },
  data() {
    return {
      sessionId: uuid(),
      unsubscribe: null,
    }
  },
  beforeCreate() {
    // lets pair the cast with the server right after the socket connection is established
    this.unsubscribe = this.$store.subscribeAction((action) => {
      if (action.type === 'bossSync/socketStart') {
        this.$emit('pair', this.sessionId)
      }
    })
  },
  beforeDestroy() {
    this.unsubscribe?.call()
  },
}
</script>
<style>
#qrcode canvas {
  width: 100%;
}
</style>
