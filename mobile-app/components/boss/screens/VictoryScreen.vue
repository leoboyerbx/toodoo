<template>
  <div
    class="controller-screen w-full h-screen flex justify-center items-center overflow-hidden"
  >
    <div class="rounded-2xl bg-white py-16 px-24 flex flex-col items-center">
      <h1 v-if="victory" class="font-display text-4xl text-pink">Victoire !</h1>
      <h1 v-else class="font-display text-4xl text-sky">Vous avez perdu...</h1>
      <p
        v-if="victory"
        class="block w-96 text-center text-lg my-5"
        style="line-height: 1.2"
      >
        Grâce à cette victoire vous gagnez une chance supplémentaire de battre
        le Chef des Electros !
      </p>
      <p
        v-else
        class="block w-96 text-center text-lg my-5"
        style="line-height: 1.2"
      >
        Malheureusement vous ne gagnez pas de vie supplémentaire mais vous
        prendrez votre revanche la semaine prochaine !
      </p>
      <div v-if="victory" class="flex flex-col w-full mt-5">
        <NuxtLink
          to="/map"
          class="block text-white text-xl font-display bg-pink rounded-xl p-3 w-full text-center mb-5"
          @click.native="endSession"
        >
          On continue !
        </NuxtLink>
        <NuxtLink
          to="/map"
          class="block text-white text-xl font-display bg-pink rounded-xl p-3 w-full text-center"
          @click.native="endSession"
        >
          Youhou !
        </NuxtLink>
      </div>
      <div v-else class="flex flex-col w-full mt-5">
        <NuxtLink
          to="/map"
          class="block text-white text-xl font-display bg-sky rounded-xl p-3 w-full text-center mb-5"
          @click.native="endSession"
        >
          Hàte d’être la semaine prochaine...
        </NuxtLink>
        <NuxtLink
          to="/map"
          class="block text-white text-xl font-display bg-sky rounded-xl p-3 w-full text-center"
          @click.native="endSession"
        >
          On va pas se laisser faire !
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import gameContext from 'common/mixins/gameContext'

export default {
  mixins: [gameContext],
  computed: {
    victory() {
      return this.gameContext.winner !== 'boss'
    },
  },
  methods: {
    endSession() {
      console.log('should end cast session here')
    },
  },
}
</script>
