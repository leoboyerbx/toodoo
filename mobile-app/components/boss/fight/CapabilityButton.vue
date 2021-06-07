<template>
  <a
    class="text-theme-dark px-6 py-4 w-72 rounded-3xl flex flex-col border-4"
    :class="[disabled ? 'bg-gray-400' : 'bg-white', 'border-' + color]"
    @click="use"
  >
    <div class="font-display text-xl mb-2">
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
    color() {
      const effect = Object.keys(this.effect)[0]
      switch (effect) {
        case 'attack':
          return 'pink'
      }
      return 'pink'
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
