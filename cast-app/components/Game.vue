<template>
  <main class="w-full h-full">
    <component :is="currentStep" v-bind="currentStepProps" />
  </main>
</template>

<script>
export default {
  props: {
    isCast: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentStep: 'pairing-step',
      currentStepProps: {
        isCast: this.isCast,
      },
    }
  },
}
</script>
