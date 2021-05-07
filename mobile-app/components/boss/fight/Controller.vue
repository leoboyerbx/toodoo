<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-10">
    <section class="max-w-2xl mt-auto flex flex-wrap gap-4">
      <CapabilityButton
        v-for="capability in capabilities"
        :key="capability.name"
        :capability="capability"
        :disabled="capability.cost > turnEntity.energy"
        @use="useCapability(capability)"
      />
    </section>
    <section class="flex justify-end w-full mt-auto">
      <button
        class="bg-gray-200 rounded-lg px-4 py-2 text-theme-dark"
        @click="skipTurn"
      >
        Passer mon tour
      </button>
    </section>
  </div>
</template>
<script>
import CapabilityButton from '@/components/boss/fight/CapabilityButton'
export default {
  components: { CapabilityButton },
  props: {
    capabilities: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    turnEntity() {
      return this.$store.state.bossSync.gameContext.turnEntity
    },
  },
  methods: {
    useCapability(capability) {
      this.$store.dispatch('bossSync/useCapability', capability)
    },
    skipTurn() {
      this.$store.dispatch('bossSync/skipTurn')
    },
  },
}
</script>
