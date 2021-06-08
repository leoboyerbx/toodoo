<template>
  <div class="fullscreen bg-theme-darkBlue gradient-bg">
    <button
      class="absolute top-1.5 left-10 flex mx-auto mt-6 rounded-full p-2 bg-white z-10"
      @click="$router.go(-1)"
    >
      <unicon name="arrow-left" fill="#b5b1fe" />
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(
    137deg,
    rgba(72, 56, 141, 1) 40%,
    rgba(172, 168, 241, 1) 100%
  );
}
</style>
