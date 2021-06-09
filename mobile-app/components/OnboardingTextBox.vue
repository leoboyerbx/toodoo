<template>
  <div class="flex flex-nowrap w-4/6 bg-white rounded-2xl p-8 items-center">
    <div class="text-content w-5/6">{{ textToDisplay }}</div>
    <div class="w-1/6">
      <button
        class="flex mx-auto rounded-full bg-theme p-3"
        @click="emmitClick"
      >
        <unicon name="arrow-right" fill="#fff" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnboardingTextBox',
  props: {
    textToDisplay: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    emmitClick() {
      this.$emit('increment-counter')
    },
  },
}
</script>

<style scoped></style>
