<template>
  <div class="w-full h-full flex items-center justify-center">
    <section class="max-w-2xl flex flex-wrap gap-4">
      <CapabilityButton
        v-for="capability in capabilities"
        :key="capability.name"
        :capability="capability"
        @click.native="useCapability(capability)"
      />
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
  methods: {
    useCapability(capability) {
      console.log(capability)
    },
  },
}
</script>
