<template>
  <div class="w-full h-full relative">
    <img
      :src="require(`assets/img/boss/${boss.img.decor}`)"
      alt=""
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <span
      class="absolute top-10 left-0 w-full flex justify-center text-xl font-bold"
    >
      {{ boss.name }}
    </span>
    <p class="absolute top-1/3 text-right right-36 text-md w-96">
      {{ boss.introSentence }}
    </p>
    <img
      :src="require(`assets/img/boss/${boss.img.character}`)"
      alt="Boss image"
      class="absolute w-96 bottom-10 right-10"
    />
  </div>
</template>
<script>
export default {
  computed: {
    gameContext() {
      return this.$store.state.bossSync.gameContext
    },
    boss() {
      return this.gameContext.boss
    },
  },
}
</script>
