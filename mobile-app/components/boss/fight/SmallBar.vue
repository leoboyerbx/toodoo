<template>
  <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
    <div
      class="absolute w-full top-0 left-0 w-full h-full transition-transform duration-300 origin-left"
      :style="{
        transform: `scaleX(${value / maxValue})`,
        backgroundColor: color,
        transitionDelay: '1s',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#f00',
    },
    value: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
  },
}
</script>
