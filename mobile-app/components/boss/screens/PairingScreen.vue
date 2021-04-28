<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-64 h-64">
      <QrcodeStream @decode="onDecode"></QrcodeStream>
    </div>
  </div>
</template>
<script>
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  components: { QrcodeStream },
  methods: {
    onDecode(decodedString) {
      if (decodedString.length === 36) {
        this.$store.dispatch('bossSync/pair', {
          id: decodedString,
          type: 'player',
        })
      }
    },
  },
}
</script>
