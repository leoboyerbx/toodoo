<template>
  <transition name="capabilities" mode="out-in">
    <section
      :key="playerId"
      class="max-w-2xl flex flex-wrap gap-x-4 gap-y-10 gap p-10 relative"
    >
      <CapabilityButton
        v-for="capability in capabilities"
        :key="capability.id"
        :capability="capability"
        :disabled="capability.cost > turnEntity.energy"
        @use="useCapability(capability)"
      />
    </section>
  </transition>
</template>
<script>
import CapabilityButton from 'components/boss/fight/CapabilityButton'
export default {
  components: { CapabilityButton },
  props: {
    capabilities: {
      type: Array,
      default: () => [],
    },
    playerId: {
      type: Number,
      default: 0,
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
<style scoped>
.capabilities-enter-active,
.capabilities-leave-active {
  transition: transform 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.capabilities-enter,
.capabilities-leave-to {
  transform: translate(150%, 0);
}
</style>
