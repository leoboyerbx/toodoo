<template>
  <div class="w-full h-full flex items-center justify-center">
    <section class="max-w-lg flex flex-wrap">
      <CapabilityButton
        v-for="capability in capabilities"
        :key="capability.name"
        :capability="capability"
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
}
</script>
