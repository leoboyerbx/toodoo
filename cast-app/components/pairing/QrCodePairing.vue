<template>
  <div class="w-full h-full flex items-center justify-center">
    <QrcodeVue
      id="qrcode"
      :value="sessionId"
      size="400"
      class="relative w-32"
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
    }
  },
  mounted() {
    // lets pair the cast with the server right after the component is mounted
    this.$emit('pair', this.sessionId)
  },
}
</script>
<style>
#qrcode canvas {
  width: 100%;
}
</style>
