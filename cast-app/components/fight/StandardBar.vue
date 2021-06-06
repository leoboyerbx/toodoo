<template>
  <div class="flex flex-col w-64 text-lg">
    <div class="flex">
      <img :src="require(`~/assets/img/${icon}`)" alt="" class="w-5" />
      <span class="text-white font-bold ml-2">{{ name }}</span>
    </div>
    <div class="ml-6 w-56 my-3">
      <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="absolute w-full top-0 left-0 w-full h-full origin-left"
          :style="{
            transform: `scaleX(${animatedValue / maxValue})`,
            backgroundColor: color,
          }"
        ></div>
      </div>
    </div>
    <div class="ml-auto mt-2 font-bold text-white">
      {{ animatedValue }} / {{ maxValue }}
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    value: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
    color: {
      required: false,
      default: null,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tweenedValue: this.value,
    }
  },
  computed: {
    animatedValue() {
      return this.tweenedValue.toFixed(0)
    },
  },
  watch: {
    value(newVal, oldVal) {
      const duration = (Math.abs(oldVal - newVal) / this.maxValue) * 3

      gsap.to(this.$data, {
        tweenedValue: newVal,
        duration,
        delay: 1.8,
      })
    },
  },
}
</script>
