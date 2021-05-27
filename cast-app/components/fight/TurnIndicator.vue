<template>
  <div class="flex flex-col text-lg text-white">
    <p class="ml-10">
      {{ gameContext.game.team.name }}
    </p>
    <!--    <p v-if="gameContext.turnIndex >= 0">-->
    <!--      Au tour de <strong>{{ gameContext.turnEntity.player.name }}</strong>-->
    <!--    </p>-->
    <!--    <p v-else>Au tour du boss !</p>-->
    <transition-group name="players-list" tag="div" class="flex mt-10 ml-10">
      <CharacterIndicator
        v-for="player in sortedPlayers"
        :key="player.player.id"
        :player="player"
      />
    </transition-group>
  </div>
</template>
<script>
import gameContext from '../../mixins/gameContext'
import CharacterIndicator from './CharacterIndicator'

export default {
  components: { CharacterIndicator },
  mixins: [gameContext],
  computed: {
    sortedPlayers() {
      const players = this.gameContext.players
      const sorted = []
      for (let i = this.gameContext.playerTurn; i < players.length; i++) {
        sorted.push(players[i])
      }
      for (let i = 0; i < this.gameContext.playerTurn; i++) {
        sorted.push(players[i])
      }
      return sorted
    },
  },
}
</script>
<style scoped>
.players-list-move {
  transition: transform 0.8s;
}
</style>
