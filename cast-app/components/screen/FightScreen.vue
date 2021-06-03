<template>
  <div class="w-full h-full font-display">
    <img
      :src="require(`assets/img/boss/${boss.img.decor}`)"
      alt=""
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div class="absolute right-14 top-14 flex justify-end items-center">
      <LifeBar class="" :name="boss.name" :entity="boss" align="right" />
      <img
        :src="require(`assets/img/boss/${boss.img.lifeBarIcon}`)"
        alt=""
        class="w-24 h-24 ml-6"
      />
    </div>
    <!--    <img-->
    <!--      :src="require(`assets/img/boss/${boss.img.character}`)"-->
    <!--      alt="Boss image"-->
    <!--      class="absolute w-56"-->
    <!--      :style="{-->
    <!--        left: boss.img.positionInDecor.x + '%',-->
    <!--        top: boss.img.positionInDecor.y + '%',-->
    <!--      }"-->
    <!--    />-->
    <TurnIndicator class="absolute top-10 left-12" />
    <CurrentPlayer class="absolute left-72 bottom-10" />

    <AttacksAnimation
      class="absolute top-0 left-0 h-full w-full z-50"
      animation-file="lottiefiles/boss1.json"
    />
    <p
      v-if="gameContext.bossAttack && gameContext.bossAttack.message"
      class="text-lg absolute w-96 text-white bottom-10 left-1/2"
    >
      {{ gameContext.bossAttack.message }}
    </p>
  </div>
</template>
<script>
import LifeBar from '../fight/LifeBar'
import TurnIndicator from '../fight/TurnIndicator'
import CurrentPlayer from '../fight/CurrentPlayer'
import AttacksAnimation from '../fight/AttacksAnimation'
export default {
  components: { AttacksAnimation, CurrentPlayer, TurnIndicator, LifeBar },
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
