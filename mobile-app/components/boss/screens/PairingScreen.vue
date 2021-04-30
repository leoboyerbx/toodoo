<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-64 h-64">
      <QrcodeStream @decode="onDecode"></QrcodeStream>
    </div>

    <google-cast-launcher v-pre></google-cast-launcher>
  </div>
</template>
<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import { v4 as uuid } from 'uuid'

export default {
  components: { QrcodeStream },
  beforeMount() {
    window.__onGCastApiAvailable = (isAvailable) => {
      console.log('init', isAvailable)
      if (isAvailable) {
        this.initializeCastApi()
      }
    }
  },
  methods: {
    onDecode(decodedString) {
      if (decodedString.length === 36) {
        this.pairSocket(decodedString)
      }
    },
    initializeCastApi() {
      const cast = window.cast
      cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: '720A8D7E',
        // eslint-disable-next-line no-undef
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
      })
      cast.framework.CastContext.getInstance().addEventListener(
        cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
        (e) => {
          if (
            e.sessionState === 'SESSION_STARTED' ||
            e.sessionState === 'SESSION_RESUMED'
          ) {
            // console.log('pair ici')
            this.pairWithCast()
          }
          if (e.sessionState === 'SESSION_ENDED') {
            this.state = 'notconnected'
          }
        }
      )
    },
    pairWithCast() {
      const castSession = window.cast.framework.CastContext.getInstance().getCurrentSession()
      if (castSession) {
        const sessionId = uuid()
        castSession.sendMessage('urn:x-cast:com.pnk.poccast', {
          type: 'syncID',
          text: sessionId,
        })
        this.pairSocket(sessionId)
      }
    },
    pairSocket(id) {
      this.$store.dispatch('bossSync/pair', {
        id,
        type: 'player',
      })
    },
  },
}
</script>
