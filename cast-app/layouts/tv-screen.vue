<template>
  <div
    id="screen-wrapper"
    class="fixed top-0 left-0 flex justify-center items-center"
  >
    <div class="relative overflow-hidden" :style="{ width, height }">
      <Nuxt class="absolute top-0 left-0 w-full h-full" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: '100%',
      height: '100%',
      aspectRatio: 16 / 9,
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.onresize.bind(this))
    this.onresize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onresize.bind(this))
  },
  methods: {
    onresize() {
      const clientWidth = document.documentElement.clientWidth
      const clientHeight = document.documentElement.clientHeight
      if (clientWidth / clientHeight < this.aspectRatio) {
        this.width = '100%'
        this.height = clientWidth * (1 / this.aspectRatio) + 'px'
      } else {
        this.height = '100%'
        this.width = clientHeight * this.aspectRatio + 'px'
      }
    },
  },
}
</script>

<style lang="scss">
#screen-wrapper {
  height: 100vh;
  width: 100vw;
}
</style>
