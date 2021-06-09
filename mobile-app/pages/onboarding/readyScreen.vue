<template>
  <div class="gradient-bg fullscreen flex items-center">
    <div class="content w-screen">
      <div class="title text-center text-white font-display text-5xl">
        Etes-vous prêts ?
      </div>
      <div
        class="button pt-3 pb-3 pr-6 pl-6 w-7/12 bg-pink rounded-3xl text-center text-white font-display text-3xl mt-20 mx-auto"
        @click="$router.push('/onboarding')"
      >
        Aider les TooDoos
      </div>
      <div
        class="button pt-3 pb-3 pr-6 pl-6 w-7/12 bg-pink rounded-3xl text-center text-white font-display text-3xl mt-12 mx-auto"
        @click="$router.push('/onboarding')"
      >
        Que l'aventure commence
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadyScreen',
}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(
    137deg,
    rgba(72, 56, 141, 1) 40%,
    rgba(172, 168, 241, 1) 100%
  );
}
.content {
  transform: translateY(-30px);
}
</style>
