<template>
  <div
    class="w-full h-screen bg-theme-dark text-white flex flex-col justify-center items-center"
  >
    <p v-if="gameContext.winner === 'boss'">Le boss a gagné !</p>
    <p v-else>Bravo ! Vous avez battu le boss !</p>
  </div>
</template>
<script>
export default {
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
