<template>
  <div class="absolute w-auto h-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 8191.7 582.91"
    >
      <g id="paths">
        <path
          id="path-g-h"
          class="cls-2"
          d="M1010.5,291.45c57-23.15,129.74-44.82,216-22.88"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-f-g"
          class="cls-2"
          d="M794.44,317.91c37.47,8.27,100.58,18.38,141.4,4.52,20.63-7,45.62-19.18,74.66-31"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-e-f"
          class="cls-2"
          d="M676.68,296.85c30.57,2.85,60.22,8,86.77,13.29,0,0,12.31,3.66,31,7.77"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-d-e"
          class="cls-2"
          d="M568.17,307.89a130,130,0,0,1,21.19-7.65v.1a170.12,170.12,0,0,1,48.09-5.7c13.13.21,26.27,1,39.23,2.21"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-c-d"
          class="cls-2"
          d="M496.8,350c28.93-7.62,41.33-28.15,71.37-42.14"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-b-c"
          class="cls-2"
          d="M384.77,350c28.89,8.2,79.84,8.6,112,0"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-a-b"
          class="cls-2"
          d="M253.37,301.29s86.39,23.35,100.1,36S371.35,350,384.77,350"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-2-b"
          class="cls-2"
          d="M419.24,294.56c-1.2,13.7-10.89,49.09-34.47,55.47"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-1-a"
          class="cls-2"
          d="M226.07,218.29c-2,6.7-13.7,28.7,10.7,41s-9,43.6,16.7,42"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-3-a"
          class="cls-2"
          d="M334.07,424.58c5.7-48.3-11-71.4-50-75s-31-26.3-30.7-48.29"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-4-d"
          class="cls-2"
          d="M597.48,181c-2.6,29.74-58.09,100.26-29.31,126.86"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-5-c"
          class="cls-2"
          d="M535.19,419c0-25.84-31.88-38.51-38.39-68.92"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-6-e"
          class="cls-2"
          d="M667.62,324.28c2.24-9.16,11-10.43,9.06-27.43"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-7-f"
          class="cls-2"
          d="M815.19,237.14c0,18.52-20.75,61.66-20.75,80.77"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-8-f"
          class="cls-2"
          d="M800,384.49c0-21.66-8.39-38.6-5.6-66.58"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-9-g"
          class="cls-2"
          d="M1046.49,198.6c0,24.47-50.13,51.19-36,92.85"
          transform="translate(-0.08 0)"
        />
        <path
          id="path-10-g"
          class="cls-2"
          d="M1057.85,363.69c-9.61-56.78-33.2-30.57-47.34-72.24"
          transform="translate(-0.08 0)"
        />
      </g>

      <image
        width="10849"
        height="772"
        xlink:href="~assets/img/maps/map1.png"
        transform="translate(0 0) scale(0.76)"
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
.cls-2 {
  fill: none;
  stroke: red;
  stroke-miterlimit: 7.55;
  stroke-width: 0.76px;
}
</style>
