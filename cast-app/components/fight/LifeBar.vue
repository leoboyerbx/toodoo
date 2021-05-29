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
        class="absolute w-full top-0 left-0 w-full h-full transition-transform duration-300 bg-theme-light"
        :style="{
          transform: `scaleX(${hp / entity.initialHp})`,
          transformOrigin: `${align}`,
        }"
      ></div>
    </div>
    <div class="mt-4 text-lg">{{ hp }} / {{ entity.initialHp }}</div>
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
  },
  computed: {
    hp() {
      return this.entity.hp
    },
  },
}
</script>
