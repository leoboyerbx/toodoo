<template>
  <div
    class="controller-screen w-full h-screen text-white flex flex-col justify-center items-center"
  >
    <section class="w-full h-1/3"></section>
    <section class="w-full h-2/3 flex items-center">
      <div class="w-1/3">hey</div>
      <Controller
        v-if="gameContext.turnIndex > -1 && !gameContext.playerAttack"
        :capabilities="capabilities"
      />
      <p v-else>Au tour du boss</p>
    </section>
  </div>
</template>
<script>
import gameContext from 'common/mixins/gameContext'
import Controller from '../fight/Controller'
export default {
  components: { Controller },
  mixins: [gameContext],
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
