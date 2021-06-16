<template>
  <div class="main bg-theme-dark flex-wrap" @click="demoMode = true">
    <img src="../assets/img/logo.png" alt="logo" class="w-2/5" />
    <div class="flex flex-nowrap w-full justify-center">
      <NuxtLink
        class="bg-theme-light mr-3 py-4 px-8 rounded-md max-w-7xl text-blue-50 font-bold"
        to="/onboarding"
      >
        Commencer !
      </NuxtLink>
      <NuxtLink
        v-if="demoMode"
        class="bg-theme-light mr-3 py-4 px-8 rounded-md max-w-7xl text-blue-50 font-bold"
        to="/map"
      >
        Carte interactive MVP
      </NuxtLink>
      <NuxtLink
        v-if="demoMode"
        class="bg-theme-light py-4 px-8 rounded-md max-w-7xl text-blue-50 font-bold"
        to="/boss"
      >
        Boss de fin de semaine MVP
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banana: 5,
      demoMode: false,
    }
  },
  beforeCreate() {
    // const didOnboarding = localStorage.getItem('didOnboarding')
    // if (didOnboarding) {
    //   this.$router.push('/map')
    // }
  },
}
</script>

<style scoped>
.main {
  @apply min-h-screen flex justify-center items-center text-center w-full;
}
</style>
