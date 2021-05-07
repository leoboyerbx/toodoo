<template>
  <div
    class="flex flex-col w-96 text-md text-white"
    :class="align === 'left' ? 'items-start' : 'items-end'"
  >
    <div class="text-md font-bold mb-5">
      {{ name }}
    </div>
    <div class="relative w-full h-4 bg-gray-200 rounded overflow-hidden">
      <div
        class="absolute w-full top-0 left-0 w-full h-full transition-transform duration-300 bg-theme-light"
        :style="{
          transform: `scaleX(${hp / entity.initialHp})`,
          transformOrigin: `${align}`,
        }"
      ></div>
    </div>
    <div class="mt-4">{{ hp }} / {{ entity.initialHp }}</div>
  </div>
</template>
<script>
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
    animateFrom: {
      type: Number,
      default: null,
    },
  },
  data() {
    return { isInitial: true }
  },
  computed: {
    hp() {
      if (this.animateFrom && this.isInitial) {
        return this.animateFrom
      }
      return this.entity.hp
    },
  },
  updated() {
    if (this.animateFrom) {
      setTimeout(() => (this.isInitial = false), 100)
    }
  },
}
</script>
