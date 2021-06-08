<template>
  <a
    class="text-theme-dark px-6 py-4 w-80 rounded-3xl flex flex-col border-4"
    :class="[disabled ? 'bg-gray-400' : 'bg-white', 'border-' + color]"
    @click="use"
  >
    <div class="flex justify-between items-baseline">
      <div class="font-display text-xl mb-2">
        {{ capability.name }}
      </div>
      <div class="font-display uppercase" :class="'text-' + color">
        {{ typeName }}
      </div>
    </div>
    <div class="flex justify-between">
      <div class="whitespace-nowrap">
        Coût: -{{ capability.cost }}
        <img src="~assets/img/energy.png" class="h-4 -ml-1 inline" alt="e" />
      </div>
      <div v-if="effect.attack">
        -<strong>{{ effect.attack }}</strong> pv
        <span class="transform inline-block translate-y-0.5">&rarr;</span>
        <strong>boss</strong>
      </div>
      <div v-else-if="effect.heal">
        +<strong>{{ effect.heal }}</strong> pv
        <span v-if="capability.target === 'self'">
          <span class="transform inline-block translate-y-0.5">&rarr;</span>
          <strong>toi</strong>
        </span>
        <span v-else-if="capability.target === 'allPlayers'"
          ><span class="transform inline-block translate-y-0.5">&rarr;</span>
          <strong>tous</strong></span
        >
        <span v-else-if="capability.target.toLowerCase().includes('player')">
          <span class="transform inline-block translate-y-0.5">&rarr;</span>
          <strong>coéquipier</strong>
        </span>
      </div>
      <div v-else-if="effect.protect">
        <span v-if="capability.target === 'self'"> Te protège </span>
        <span v-else-if="capability.target === 'allPlayers'">
          Protège <strong>tout le monde</strong>
        </span>
        <span v-else-if="capability.target.toLowerCase().includes('player')">
          Protège un <strong>coéquipier</strong>
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
    type() {
      return Object.keys(this.effect)[0]
    },
    color() {
      switch (this.type) {
        case 'attack':
          return 'pink'
        case 'heal':
          return 'tradewind'
        case 'protect':
          return 'sky'
      }
      return 'pink'
    },
    typeName() {
      switch (this.type) {
        case 'attack':
          return 'Attaque'
        case 'heal':
          return 'Soin'
        case 'protect':
          return 'Protection'
      }
      return 'Attaque'
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
