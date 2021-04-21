<template>
  <div class="container">
    <div>
      <NuxtLink class="underline text-theme" to="/map">
        Carte interactive de Vincent
      </NuxtLink>
      <NuxtLink class="underline text-theme" to="/boss">
        Boss de fin de semaine
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
