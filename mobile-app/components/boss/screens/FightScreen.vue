<template>
  <div
    class="controller-screen w-full h-screen text-white flex flex-col justify-center items-center overflow-hidden"
  >
    <section class="w-full h-1/3">
      <TurnIndicator class="mt-7 ml-7" />
    </section>
    <section class="w-full h-2/3 flex items-center justify-around">
      <CurrentPlayer class="mx-10" />
      <div
        class="controller w-full h-auto"
        :class="{ 'controller-disabled': !playerCanPlay }"
      >
        <Controller
          :player-id="currentPlayer.player.id"
          :capabilities="capabilities"
        />
      </div>
    </section>
  </div>
</template>
<script>
import gameContext from 'common/mixins/gameContext'
import CurrentPlayer from 'components/boss/fight/CurrentPlayer'
import Controller from '../fight/Controller'
import TurnIndicator from '../fight/TurnIndicator'
export default {
  components: { TurnIndicator, Controller, CurrentPlayer },
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
    currentPlayer() {
      return this.gameContext.players[this.gameContext.playerTurn]
    },
    capabilities() {
      return this.currentPlayer.capabilities
    },
    playerCanPlay() {
      return this.gameContext.turnIndex > -1 && !this.gameContext.playerAttack
    },
  },
}
</script>
<style scoped>
.controller-screen {
  background-image: url('assets/img/controller-bg.svg');
  background-size: cover;
}
.controller {
  transition: opacity 0.2s 0.5s;
}
.controller-disabled {
  opacity: 0.5;
  pointer-events: none;
  transition-delay: 0s;
}
</style>
