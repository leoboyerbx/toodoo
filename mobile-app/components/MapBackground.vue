<template>
  <div class="absolute w-auto h-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 10849 772"
    >
      <image
        width="10849"
        height="772"
        xlink:href="~assets/img/maps/map1.png"
      />
      <slot />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MapBackground',
  mounted() {
    this.$emit('mounted', this.$el)
  },
}
</script>

<style scoped>
.st0 {
  opacity: 0;
}
</style>
