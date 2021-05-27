<template>
  <div class="flex flex-col text-lg text-white">
    <p class="ml-10">
      {{ gameContext.game.team.name }}
    </p>
    <!--    <p v-if="gameContext.turnIndex >= 0">-->
    <!--      Au tour de <strong>{{ gameContext.turnEntity.player.name }}</strong>-->
    <!--    </p>-->
    <!--    <p v-else>Au tour du boss !</p>-->
    <div class="flex mt-10 ml-10">
      <CharacterIndicator
        v-for="player in players"
        :key="player.player.id"
        :player="player"
      />
    </div>
  </div>
</template>
<script>
import gameContext from '../../mixins/gameContext'
import CharacterIndicator from './CharacterIndicator'

export default {
  components: { CharacterIndicator },
  mixins: [gameContext],
}
</script>
