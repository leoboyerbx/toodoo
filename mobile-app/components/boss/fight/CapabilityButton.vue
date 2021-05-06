<template>
  <div
    class="text-theme-dark px-6 py-4 w-72 rounded-lg flex flex-col"
    :class="disabled ? 'bg-gray-400' : 'bg-white'"
    @click="use"
  >
    <div class="font-bold">
      {{ capability.name }}
    </div>
    <div class="flex justify-between">
      <div>Coût: {{ capability.cost }} énergie</div>
      <div v-if="effect.attack">Dégâts: {{ effect.attack }}</div>
      <div v-if="effect.heal">Soigne {{ effect.heal }} PV</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    capability: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    effect() {
      return this.capability.effect
    },
  },
  methods: {
    use() {
      if (!this.disabled) this.$emit('use')
    },
  },
}
</script>
