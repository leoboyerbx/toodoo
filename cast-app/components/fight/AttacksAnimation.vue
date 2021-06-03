<template>
  <LottieAnimation
    ref="lottie"
    class="intro-lottie"
    :path="animationFile"
    :auto-play="false"
    :loop="true"
    @AnimControl="setBossAnimController"
  />
</template>
<script>
import LottieAnimation from '../lib/LottieAnimation'
export default {
  components: { LottieAnimation },
  props: {
    animationFile: {
      type: String,
      required: true,
    },
    startMarker: {
      type: String,
      required: true,
    },
    endMarker: {
      type: String,
      required: true,
    },
  },
  methods: {
    setBossAnimController(controller) {
      this.anim = controller
      window.anim = controller
      this.updatePlayingSegment()
    },
    updatePlayingSegment() {
      if (this.anim) {
        const startMark = this.anim.markers.find((marker) => {
          return marker.payload.name.cm === this.startMarker
        })
        const endMark = this.anim.markers.find((marker) => {
          return marker.payload.name.cm === this.endMarker
        })
        if (startMark && endMark) {
          this.anim.playSegments([startMark.time, endMark.time], true)
        }
      }
    },
  },
}
</script>
