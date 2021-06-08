<template>
  <div class="absolute w-auto h-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 8191.7 582.91"
    >
      <image
        width="10849"
        height="772"
        xlink:href="~assets/img/maps/map1.png"
        transform="translate(0 0) scale(0.76)"
      />
      <g id="paths">
        <path
          id="path-c-d"
          class="cls-2"
          d="M586.66,275a170.12,170.12,0,0,1,48.09-5.7c44.1.7,88.2,8,126,15.5"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-b-c"
          class="cls-2"
          d="M382.07,324.68c28.89,8.2,64.49,10.5,96.69,1.9,34.9-9.19,61.1-39.09,107.9-51.69"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-2-a"
          class="cls-2"
          d="M334.07,424.58c5.7-48.3-11-71.4-50-75s-31-26.3-30.7-48.29"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-1-a"
          class="cls-2"
          d="M226.07,218.29c-2,6.7-13.7,28.7,10.7,41s-9,43.6,16.7,42"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-a-b"
          class="cls-2"
          d="M253.47,301.29s66.6-6.6,97.3,10.7a148,148,0,0,0,31.3,12.69"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-3-b"
          class="cls-2"
          d="M419.24,294.56q-1.8,20.55-37.17,30.12"
          transform="translate(-0.08 0)"
        />
      </g>

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
.cls-2 {
  fill: none;
  stroke: red;
  stroke-miterlimit: 7.55;
  stroke-width: 0.76px;
}
</style>
