<template>
  <div class="container bg-theme-dark">
    <div class="flex flex-nowrap">
      <div class="bg-theme-light mr-3 p-10 rounded-md max-w-7xl">
        <NuxtLink class="text-blue-50 font-bold" to="/map">
          Carte interactive MVP
        </NuxtLink>
      </div>
      <div class="bg-theme-light p-10 rounded-md max-w-7xl">
        <NuxtLink class="text-blue-50 font-bold" to="/boss">
          Boss de fin de semaine MVP
        </NuxtLink>
      </div>
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
