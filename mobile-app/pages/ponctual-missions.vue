<template>
  <div class="h-screen pt-10 bg-theme-darkBlue bg-shape relative pl-6 pr-6">
    <button
      class="Button-shadow absolute top-1.5 left-10 flex mx-auto mt-6 rounded-full p-2 bg-white z-20"
      @click="$router.go(-1)"
    >
      <unicon name="arrow-left" fill="#b5b1fe" />
    </button>
    <PonctualMissions class="z-20 relative" />
  </div>
</template>

<script>
import PonctualMissions from '../components/PonctualMissions'

export default {
  components: { PonctualMissions },
  async beforeCreate() {
    await this.$store.dispatch('viewModel/fetchPonctualMissionsListData')
  },
}
</script>

<style scoped>
.bg-shape {
  background: linear-gradient(
    137deg,
    rgba(72, 56, 141, 1) 30%,
    rgba(172, 168, 241, 1) 100%
  );
}
.bg-shape::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  clip-path: ellipse(45% 35% at 0% 0%);
  width: 100vw;
  height: 75vh;
  background-color: #ae91ff;
  z-index: 0;
}
</style>
