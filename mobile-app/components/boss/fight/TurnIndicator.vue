<template>
  <div class="flex flex-col text-lg text-white">
    <p class="text-xl font-display">
      {{ gameContext.game.team.name }}
    </p>
    <transition-group name="players-list" tag="div" class="flex mt-5">
      <CharacterIndicator
        v-for="player in sortedPlayers"
        :key="player.player.id"
        :player="player"
      />
    </transition-group>
  </div>
</template>
<script>
import gameContext from 'common/mixins/gameContext'
import CharacterIndicator from './CharacterIndicator'

export default {
  components: { CharacterIndicator },
  mixins: [gameContext],
  computed: {
    sortedPlayers() {
      const players = this.gameContext.players
      const sorted = []
      const dead = []
      for (let i = this.gameContext.playerTurn; i < players.length; i++) {
        if (players[i].hp <= 0) {
          dead.push(players[i])
        } else {
          sorted.push(players[i])
        }
      }
      for (let i = 0; i < this.gameContext.playerTurn; i++) {
        if (players[i].hp <= 0) {
          dead.push(players[i])
        } else {
          sorted.push(players[i])
        }
      }
      return [...sorted, ...dead]
    },
  },
}
</script>
<style scoped>
.players-list-move {
  transition: transform 0.8s;
}
</style>
