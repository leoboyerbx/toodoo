<template>
  <div
    class="w-full h-full font-display flex flex-col justify-center items-center text-white"
  >
    <img
      :src="require(`assets/img/boss/${boss.img.decor}`)"
      alt=""
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
    <h1 class="text-4xl z-10 mt-5">Victoire !</h1>
    <p
      class="font-sans z-10 w-1/2 text-lg my-6 text-center"
      style="line-height: 1.2"
    >
      Grâce à cette victoire vous gagnez une chance supplémentaire de battre le
      Chef des Electros !
    </p>
    <img src="~assets/img/heart.png" alt="" class="z-10 w-28" />

    <div class="flex z-10 justify-center">
      <div
        v-for="player in players"
        :key="player.player.id"
        class="flex flex-col -mx-10 justify-end items-center"
      >
        <img
          :src="require(`assets/img/avatars/${player.img.character}`)"
          alt="Avatar image"
          class="w-64"
        />
      </div>
    </div>
  </div>
</template>
<script>
import gameContext from '../../../common/mixins/gameContext'

export default {
  mixins: [gameContext],
}
</script>
