<template>
  <section class="max-w-2xl flex flex-wrap gap-x-4 gap-y-10 gap p-10">
    <CapabilityButton
      v-for="capability in capabilities"
      :key="capability.name"
      :capability="capability"
      :disabled="capability.cost > turnEntity.energy"
      @use="useCapability(capability)"
    />
  </section>
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
  },
}
</script>
