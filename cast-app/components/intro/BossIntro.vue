<template>
  <div
    class="bg-gradient-intro w-full h-full relative text-white flex flex-col justify-center items-center"
  >
    <!--    <span-->
    <!--      class="absolute top-10 left-0 w-full flex justify-center text-xl font-bold"-->
    <!--    >-->
    <!--      {{ boss.name }}-->
    <!--    </span>-->
    <!--    <p class="absolute top-1/3 text-right right-36 text-md w-96">-->
    <!--      {{ boss.introSentence }}-->
    <!--    </p>-->
    <h1 class="text-2xl font-bold">Vous êtes prêts ?</h1>
    <div class="grid grid-cols-3 w-full justify-items-center items-center my-8">
      <div class="flex w-96 flex-wrap">
        <div
          v-for="player in players"
          :key="player.player.id"
          class="flex flex-col mx-5 justify-end items-center"
        >
          <img
            :src="require(`assets/img/avatars/${player.img.character}`)"
            alt="Avatar image"
            class="w-36"
          />
        </div>
      </div>
      <div class="text-3xl text-center font-bold">VS</div>
      <img
        :src="require(`assets/img/boss/${boss.img.character}`)"
        alt="Boss image"
        class="w-64"
        :style="{
          left: boss.img.positionInDecor.x + '%',
          top: boss.img.positionInDecor.y + '%',
        }"
      />
    </div>
    <p class="text-lg text-center">
      Affrontez le boss chacun à votre tour en utilisant vos différentes
      attaques. <br />
      Attention chaque attaque vous coute des points d'énergie ! <br />
      Dépensez-les bien pour gagner un vie supplémentaire !
    </p>
  </div>
</template>
<script>
import gameContext from '@/mixins/gameContext'

export default {
  mixins: [gameContext],
}
</script>
<style scoped>
.bg-gradient-intro {
  background: linear-gradient(to bottom right, #1f0a62, #6e62b4 67%, #b5b1fe);
}
</style>
