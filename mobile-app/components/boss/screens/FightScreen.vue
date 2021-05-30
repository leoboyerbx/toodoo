<template>
  <div
    class="controller-screen w-full h-screen text-white flex flex-col justify-center items-center"
  >
    <Controller
      v-if="gameContext.turnIndex > -1"
      :capabilities="capabilities"
    />
    <p v-else>Au tour du boss</p>
  </div>
</template>
<script>
import Controller from '../fight/Controller'
export default {
  components: { Controller },
  computed: {
    gameContext() {
      return this.$store.state.bossSync.gameContext
    },
    boss() {
      return this.gameContext.boss
    },
    players() {
      return this.gameContext.players
    },
    capabilities() {
      return this.gameContext.turnEntity.capabilities
    },
  },
}
</script>
<style scoped>
.controller-screen {
  background-image: url('assets/img/controller-bg.svg');
  background-size: cover;
}
</style>
