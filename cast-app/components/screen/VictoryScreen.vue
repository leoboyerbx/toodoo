<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-full h-full relative text-white">
      <p v-if="gameContext.winner === 'boss'">Le boss a gagné !</p>
      <p v-else>Bravo ! Vous avez battu le boss !</p>
      <!--      <img-->
      <!--        :src="require(`assets/img/boss/${boss.img.decor}`)"-->
      <!--        alt=""-->
      <!--        class="absolute top-0 left-0 w-full h-full object-cover"-->
      <!--      />-->
      <!--      <span-->
      <!--        class="absolute top-10 left-0 w-full flex justify-center text-xl font-bold"-->
      <!--      >-->
      <!--        {{ boss.name }}-->
      <!--      </span>-->
      <!--      <img-->
      <!--        :src="require(`assets/img/boss/${boss.img.character}`)"-->
      <!--        alt="Boss image"-->
      <!--        class="absolute w-64"-->
      <!--        :style="{-->
      <!--          left: boss.img.positionInDecor.x + '%',-->
      <!--          top: boss.img.positionInDecor.y + '%',-->
      <!--        }"-->
      <!--      />-->
      <!--      <div class="absolute left-0 bottom-0 w-1/2 h-1/4 flex">-->
      <!--        <div-->
      <!--          v-for="player in players"-->
      <!--          :key="player.player.id"-->
      <!--          class="flex flex-col mx-5 justify-end items-center"-->
      <!--        >-->
      <!--          <img-->
      <!--            :src="require(`assets/img/avatars/${player.img.character}`)"-->
      <!--            alt="Avatar image"-->
      <!--            class="h-full"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>
<script>
import gameContext from '../../../common/mixins/gameContext'

export default {
  mixins: [gameContext],
}
</script>
