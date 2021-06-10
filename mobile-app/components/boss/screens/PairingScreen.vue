<template>
  <div
    v-if="!$config.devPair"
    class="w-full h-full flex justify-center items-center bg-controller relative overflow-hidden"
  >
    <div
      id="step1"
      class="absolute bg-white p-10 rounded-2xl text-center flex flex-col items-center"
      :class="{ scanQrCode }"
    >
      <p class="font-display">
        Connectez-vous à un appareil<br />
        pour affronter le boss !
      </p>
      <h2 class="mt-7 font-bold text-xl">Téléviseur</h2>
      <p class="italic text-gray-500">
        Aucun téléviseur détecté. Recherche en cours...
      </p>
      <h2 class="mt-5 font-bold text-xl">Ordinateur</h2>
      <a
        href="#"
        class="bg-theme text-white px-4 py-2 rounded-xl mt-2"
        @click.prevent="scanQrCode = true"
        >Se connecter à un ordinateur</a
      >
    </div>
    <div
      id="step2"
      class="absolute bg-white p-10 rounded-2xl text-center flex flex-col items-center"
      :class="{ scanQrCode }"
    >
      <a
        href="#"
        class="absolute top-3 left-3"
        @click.prevent="scanQrCode = false"
        ><unicon width="35" height="35" name="arrow-left"></unicon
      ></a>
      <p>Rendez vous sur</p>
      <p class="text-xl font-bold underline text-theme">boss.toodoo.games</p>
      <p>et scannez le code affiché</p>
      <div class="w-64 h-64 m-5 mt-10 relative">
        <QrcodeStream
          class="rounded-lg overflow-hidden"
          @decode="onDecode"
        ></QrcodeStream>
        <div class="corner topleft"></div>
        <div class="corner topright"></div>
        <div class="corner bottomleft"></div>
        <div class="corner bottomright"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import { v4 as uuid } from 'uuid'

export default {
  components: { QrcodeStream },
  data() {
    return {
      castDeviceAvailable: false,
      scanQrCode: false,
    }
  },
  beforeMount() {
    if (this.$config.devPair) {
      this.pairSocket('devroom')
    } else {
      window.__onGCastApiAvailable = (isAvailable) => {
        if (isAvailable) {
          this.initializeCastApi()
        }
      }
    }
  },
  mounted() {
    this.castButton = this.$el.querySelector('#cast-button')
    this.mutationObserver = new window.MutationObserver(
      this.checkCastStyleDiff.bind(this)
    )
    if (this.castButton) {
      this.mutationObserver.observe(this.castButton, {
        attributes: true,
        attributeFilter: ['style'],
      })
    }
  },
  beforeDestroy() {
    this.mutationObserver.disconnect()
  },
  methods: {
    checkCastStyleDiff() {
      const display = window
        .getComputedStyle(this.castButton)
        .getPropertyValue('display')
      this.castDeviceAvailable = display === 'block'
    },
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
<style scoped>
.bg-controller {
  height: 100vh;
  background-image: url('~assets/img/controller-bg-pairing.svg');
  background-size: cover;
}

#step1,
#step2 {
  transition: transform 0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
}
#step2 {
  transform: translate3d(100vw, 0, 0);
}
#step1.scanQrCode {
  transform: translate3d(-100vw, 0, 0);
}
#step2.scanQrCode {
  transform: translate3d(0, 0, 0);
}
.corner {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  border-style: solid;
  border-width: 3px;
  border-color: #552088 transparent transparent #552088;
  border-radius: 15px 0 0 0;
  transform: translate(-15px, -15px);
}
.corner.topright {
  top: 0;
  left: auto;
  right: 0;
  transform: rotate(90deg) translate(-15px, -15px);
}
.corner.bottomleft {
  top: auto;
  bottom: 0;
  transform: rotate(-90deg) translate(-15px, -15px);
}
.corner.bottomright {
  top: auto;
  bottom: 0;
  left: auto;
  right: 0;
  transform: rotate(180deg) translate(-15px, -15px);
}
</style>
