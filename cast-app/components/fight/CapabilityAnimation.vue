<template>
  <LottieAnimation
    ref="lottie"
    class="intro-lottie"
    :path="'lottiefiles/' + animationData.lottieFile"
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
    animationData: {
      type: Object,
      required: true,
    },
    currentCapabilitySegment: {
      type: Array,
      default: null,
    },
    hit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      segmentMarkers: null,
    }
  },
  watch: {
    currentCapabilitySegment() {
      this.onAnimationChange()
    },
    hit() {
      console.log('hey')
      this.onAnimationChange()
    },
  },
  methods: {
    onAnimationChange() {
      if (this.hit) {
        this.segmentMarkers = this.animationData.hitAnimationSegment
      } else if (this.currentCapabilitySegment) {
        this.segmentMarkers = this.currentCapabilitySegment
      } else {
        this.segmentMarkers = this.animationData.idleAnimationSegment
      }
      this.updatePlayingSegment(true)
    },
    setBossAnimController(controller) {
      this.anim = controller
      window.anim = controller
      this.onAnimationChange()
    },
    updatePlayingSegment(playImmediately = false) {
      if (this.anim) {
        const startMark = this.anim.markers.find((marker) => {
          return marker.payload.name.cm === this.segmentMarkers[0]
        })
        const endMark = this.anim.markers.find((marker) => {
          return marker.payload.name.cm === this.segmentMarkers[1]
        })
        if (startMark && endMark) {
          this.anim.playSegments(
            [startMark.time, endMark.time],
            playImmediately
          )
        }
      }
    },
  },
}
</script>
