<template>
  <div
    class="controller-screen w-full h-screen text-white flex flex-col justify-center items-center overflow-hidden"
  >
    <section class="w-full h-1/3">
      <TurnIndicator class="mt-7 ml-7" />
    </section>
    <section class="w-full h-2/3 flex items-center justify-around">
      <CurrentPlayer class="mx-10" />
      <div class="relative w-full h-full">
        <div
          class="controller absolute w-full h-full top-0 left-0 flex justify-center items-center"
          :class="{
            'controller-disabled': !playerCanPlay,
            'pick-player': pickPlayerCb,
          }"
        >
          <Controller
            :player-id="currentPlayer.player.id"
            :capabilities="capabilities"
            @use-capability="useCapability"
          />
        </div>
        <div v-if="pickPlayerCb" class="absolute w-full h-full top-0 left-0">
          <PlayerPicker :players="otherPlayers" @pick-player="pickPlayerCb" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import gameContext from 'common/mixins/gameContext'
import CurrentPlayer from 'components/boss/fight/CurrentPlayer'
import Controller from '../fight/Controller'
import TurnIndicator from '../fight/TurnIndicator'
import PlayerPicker from '../fight/PlayerPicker'

export default {
  components: { PlayerPicker, TurnIndicator, Controller, CurrentPlayer },
  mixins: [gameContext],
  data() {
    return {
      pickPlayerCb: null,
    }
  },
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
    otherPlayers() {
      return this.players.filter((player) => {
        return player.player.id !== this.currentPlayer.player.id
      })
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
  methods: {
    async useCapability(capability) {
      const payload = { capability }
      if (capability.target === 'specificPlayer') {
        payload.player = await this.pickPlayer()
      }
      await this.$store.dispatch('bossSync/useCapability', payload)
    },
    pickPlayer() {
      return new Promise((resolve) => {
        this.pickPlayerCb = (player) => {
          this.pickPlayerCb = null
          resolve(player)
        }
      })
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
  transition: all 0.2s 0.5s;
}
.controller-disabled {
  opacity: 0.5;
  pointer-events: none;
  transition-delay: 0s;
}

.pick-player {
  opacity: 0.1;
  pointer-events: none;
  filter: blur(10px);
  transition-delay: 0s;
}
</style>
