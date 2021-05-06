<template>
  <div
    class="w-full h-screen bg-theme-dark text-white flex flex-col justify-center items-center"
  >
    <h1 class="text-2xl mb-5">Prêts ?</h1>
    <button
      class="bg-white px-6 py-4 text-xl rounded-lg text-gray-800"
      @click="startFight"
    >
      Lancer le combat !
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    startFight() {
      this.$store.dispatch('bossSync/sendStartFight')
    },
  },
}
</script>
