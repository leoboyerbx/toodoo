<template>
  <a
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
      <div v-if="effect.heal">
        Soigne {{ effect.heal }} PV
        <span v-if="capability.target === 'allPlayers'">
          chez tout le monde
        </span>
        <span v-else-if="capability.target === 'randomPlayer'">
          chez un joueur au hasard
        </span>
      </div>
      <div v-if="effect.protect">
        Protège
        <span v-if="capability.target === 'allPlayers'"> tout le monde </span>
        <span v-else-if="capability.target === 'randomPlayer'">
          un joueur au hasard
        </span>
      </div>
    </div>
  </a>
</template>
<script>
import haptic from 'common/helpers/haptic'

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
      haptic.vibrate(30)
      if (!this.disabled) this.$emit('use')
    },
  },
}
</script>
