<template>
  <div
    class="w-full h-full font-display flex flex-col justify-center items-center text-white"
  >
    <img
      :src="require(`assets/img/boss/${boss.img.decor}`)"
      alt=""
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
    <h1 v-if="victory" class="text-4xl z-10 mt-5">Victoire !</h1>
    <h1 v-else class="text-4xl z-10 mt-5">Vous avez perdu...</h1>
    <p
      v-if="victory"
      class="font-sans z-10 w-1/2 text-lg my-6 text-center"
      style="line-height: 1.2"
    >
      Grâce à cette victoire vous gagnez une chance supplémentaire de battre le
      Chef des Electros !
    </p>
    <p
      v-else
      class="font-sans z-10 w-1/2 text-lg my-6 text-center"
      style="line-height: 1.2"
    >
      Malheureusement vous ne gagnez pas de vie supplémentaire mais vous
      prendrez votre revanche la semaine prochaine !
    </p>

    <img
      v-if="victory"
      src="~assets/img/heart.png"
      alt=""
      class="z-10 w-28 my-10"
    />
    <img
      v-else
      src="~assets/img/heart-broken.png"
      alt=""
      class="z-10 w-28 my-10"
    />

    <div v-if="victory" class="flex z-10 justify-center">
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
    <img
      v-else
      :src="require(`assets/img/boss/${boss.img.character}`)"
      alt=""
      class="w-64 z-10"
    />
  </div>
</template>
<script>
import gameContext from '../../../common/mixins/gameContext'

export default {
  mixins: [gameContext],
  computed: {
    victory() {
      return this.gameContext.winner !== 'boss'
    },
  },
}
</script>
