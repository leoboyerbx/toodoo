<template>
  <div
    class="gradient-bg bg-theme-dark fullscreen flex flex-col justify-center"
  >
    <p
      class="text-white font-display w-3/5 text-3xl mx-auto text-center mb-32 leading-10"
    >
      Voulez vous avoir la possibilité de donner une de vos missions à quelqu’un
      d’autre à l’issue du classement de fin de semaine ?
    </p>
    <div class="flex mx-auto items-center justify-center">
      <button class="w-28 h-28 bg-white rounded-full mr-32">
        <unicon
          name="times"
          fill="#AE91FF"
          width="70px"
          height="70px"
          style="transform: translateY(5px)"
          @click="$router.push('/onboarding/cloudyOnboarding')"
        />
      </button>
      <button class="w-40 h-40 bg-pink rounded-full">
        <unicon
          name="check"
          fill="white"
          width="100px"
          height="100px"
          style="transform: translateY(5px)"
          @click="$router.push('/onboarding/cloudyOnboarding')"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'priceChoice.vue',
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
button {
  box-shadow: 0px 3px 6px #00000029;
}
</style>
