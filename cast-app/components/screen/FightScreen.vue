<template>
  <div class="w-full h-full">
    <!--    <div class="w-full relative text-white">-->
    <!--      <p v-if="gameContext.turnIndex >= 0">-->
    <!--        Au tour de {{ gameContext.turnEntity.player.name }}-->
    <!--      </p>-->
    <!--      <p v-else>Au tour du boss !</p>-->
    <!--      <p v-for="player in players" :key="player.player.id">-->
    <!--        {{ player.player.name }} a {{ player.hp }} pv et-->
    <!--        {{ player.energy }} points d'énergie-->
    <!--      </p>-->
    <!--      <br />-->
    <!--      <p>Le boss a {{ boss.hp }} PV et {{ boss.energy }} points d'énergie</p>-->
    <!--      <p v-if="gameContext.bossMessage">{{ gameContext.bossMessage }}</p>-->
    <!--    </div>-->
    <img
      :src="require(`assets/img/boss/${boss.img.decor}`)"
      alt=""
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <LifeBar
      class="absolute right-16 top-24"
      :name="boss.name"
      :entity="boss"
      align="right"
    />
    <img
      :src="require(`assets/img/boss/${boss.img.character}`)"
      alt="Boss image"
      class="absolute w-64"
      :style="{
        left: boss.img.positionInDecor.x + '%',
        top: boss.img.positionInDecor.y + '%',
      }"
    />
    <TurnIndicator class="absolute top-10 left-12" />
    <LifeBar
      v-if="gameContext.turnIndex > -1"
      class="absolute left-16 top-72"
      name="Vie"
      :entity="gameContext.turnEntity"
    />
    <LifeBar
      v-else-if="gameContext.bossAttack"
      class="absolute left-16 top-72"
      name="Vie"
      :entity="gameContext.bossAttack.capabilityResult.effectiveTarget"
      :animate-from="
        gameContext.bossAttack.capabilityResult.targetPreviousState.hp
      "
    />
    <!--    <div class="absolute left-0 bottom-0 w-1/2 h-1/4 flex">-->
    <!--      <div-->
    <!--        v-for="player in players"-->
    <!--        :key="player.player.id"-->
    <!--        class="flex flex-col mx-5 justify-end items-center"-->
    <!--      >-->
    <!--        <img-->
    <!--          :src="require(`assets/img/avatars/${player.img.character}`)"-->
    <!--          alt="Avatar image"-->
    <!--          class="h-full"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
<script>
import LifeBar from '../fight/LifeBar'
import TurnIndicator from '../fight/TurnIndicator'
export default {
  components: { TurnIndicator, LifeBar },
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
  },
}
</script>
