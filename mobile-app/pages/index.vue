<template>
  <div class="container">
    <div>
      <NuxtLink
        class="underline text-white px-4 py-2 bg-blue-400 block rounded my-4 no-underline"
        to="/map"
      >
        Carte interactive
      </NuxtLink>
      <NuxtLink
        class="underline text-white px-4 py-2 bg-blue-400 block rounded my-4 no-underline"
        to="/boss"
      >
        Boss de fin de semaine
      </NuxtLink>
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
