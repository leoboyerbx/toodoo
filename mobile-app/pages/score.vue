<template>
  <div class="fullscreen bg-theme-darkBlue gradient-bg pl-6 pr-6">
    <button
      class="Button-shadow absolute top-1.5 left-10 flex mx-auto mt-6 rounded-full p-2 bg-white z-10"
      @click="$router.go(-1)"
    >
      <unicon name="arrow-left" fill="#b5b1fe" />
    </button>
    <ScoreSlider />
  </div>
</template>

<script>
import ScoreSlider from '../components/ScoreSlider'

export default {
  components: { ScoreSlider },
  async beforeCreate() {
    await this.$store.dispatch('apiService/fetchScoreData')
  },
}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(
    137deg,
    rgba(72, 56, 141, 1) 40%,
    rgba(172, 168, 241, 1) 100%
  );
}
</style>
