<template>
  <LottieAnimation
    ref="lottie"
    class="intro-lottie"
    :path="animationFile"
    :auto-play="true"
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
  },
  methods: {
    setBossAnimController(controller) {
      this.bossAnimation = controller
      window.anim = controller
    },
  },
}
</script>
