<template>
  <div
    class="flex flex-col w-80 text-md text-white"
    :class="align === 'left' ? 'items-start' : 'items-end'"
  >
    <div class="text-lg font-bold mb-5">
      {{ name }}
    </div>
    <div class="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        class="absolute w-full top-0 left-0 w-full h-full bg-theme-light"
        :style="{
          transform: `scaleX(${scale})`,
          transformOrigin: `${align}`,
        }"
      ></div>
    </div>
    <div class="mt-4 text-lg">{{ animateHp }} / {{ entity.initialHp }}</div>
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
    entity: {
      type: Object,
      required: true,
    },
    align: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value),
    },
  },
  data() {
    return {
      tweenedHp: this.entity.hp,
    }
  },
  computed: {
    hp() {
      return this.entity.hp
    },
    scale() {
      return this.tweenedHp / this.entity.initialHp
    },
    animateHp() {
      return this.tweenedHp.toFixed(0)
    },
  },
  watch: {
    hp(newVal, oldVal) {
      const duration = (Math.abs(oldVal - newVal) / this.entity.initialHp) * 3
      console.log(duration)
      gsap.to(this.$data, {
        tweenedHp: newVal,
        duration,
        delay: 2.3,
      })
    },
  },
}
</script>
