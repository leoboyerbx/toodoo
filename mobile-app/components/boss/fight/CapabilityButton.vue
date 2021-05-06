<template>
  <div class="bg-white text-theme-dark px-6 py-4 w-72 rounded-lg flex flex-col">
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
  },
  computed: {
    effect() {
      return this.capability.effect
    },
  },
}
</script>
