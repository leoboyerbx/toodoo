<template>
  <div class="container">
    <div>
      <NuxtLink class="underline text-theme" to="/map">
        Carte interactive de Vincent
      </NuxtLink>
      <br />
      <NuxtLink class="underline text-theme" to="/boss">
        Boss de fin de semaine
      </NuxtLink>
      {{ $store.state.counter }}
      <button @click="$store.commit('increment')">Plus</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banana: 5,
    }
  },
  methods: {
    test() {},
  },
}
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
