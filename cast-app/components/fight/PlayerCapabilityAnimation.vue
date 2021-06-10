<template>
  <LottieAnimation
    ref="lottie"
    class="intro-lottie"
    :path="capabilitiesLottie"
    :auto-play="false"
    :loop="false"
    :style="{
      filter: `hue-rotate(${hue}deg) brightness(${brightness})`,
    }"
    @AnimControl="setAnimController"
  />
</template>
<script>
import gameContext from '../../../common/mixins/gameContext'
import capabilitiesAnimations from '../../../common/entities/capabilitiesAnimations.json'
import getCapabilityAnimation from '../../../common/helpers/getCapabilityAnimation'
import LottieAnimation from '../lib/LottieAnimation'

export default {
  components: { LottieAnimation },
  mixins: [gameContext],
  props: {
    capability: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      segmentMarkers: null,
      capabilitiesLottie: capabilitiesAnimations.lottieFile,
      hue: 0,
      brightness: 1,
    }
  },
  watch: {
    capability(newVal, oldVal) {
      if (newVal === null || oldVal !== null) return
      const effect = Object.keys(this.capability.capability.effect)[0]
      const target = this.capability.capability.target
      if (effect && target) {
        if (effect === 'attack') {
          this.hue = this.gameContext.players[this.gameContext.playerTurn].hue
          this.brightness = 1.5
        } else {
          this.hue = 0
          this.brightness = 1
        }
        const segment = getCapabilityAnimation(
          effect,
          target,
          this.gameContext.players.length
        )
        if (segment) {
          this.segmentMarkers = segment
          this.updatePlayingSegment(true)
        }
      }
    },
  },
  methods: {
    setAnimController(controller) {
      this.anim = controller
      window.anim = controller
    },
    updatePlayingSegment(playImmediately = false) {
      if (this.anim) {
        // const startMark = this.anim.markers.find((marker) => {
        //   return marker.payload.name.cm === this.segmentMarkers[0]
        // })
        // const endMark = this.anim.markers.find((marker) => {
        //   return marker.payload.name.cm === this.segmentMarkers[1]
        // })
        let startMark = null
        let endMark = null
        for (const marker of this.anim.markers) {
          if (marker.payload.name.cm.trim() === this.segmentMarkers[0].trim()) {
            startMark = marker
          } else if (
            marker.payload.name.cm.trim() === this.segmentMarkers[1].trim()
          ) {
            endMark = marker
          }
          if (startMark && endMark) break
        }
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
