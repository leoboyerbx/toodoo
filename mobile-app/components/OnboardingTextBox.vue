<template>
  <div class="flex flex-nowrap w-4/6 bg-white rounded-2xl p-8 items-center">
    <div class="text-content w-5/6">
      <NoOrphans :text="textToDisplay" />
    </div>
    <div class="w-1/6">
      <button class="flex mx-auto rounded-full bg-pink p-3" @click="emmitClick">
        <unicon name="arrow-right" fill="#fff" />
      </button>
    </div>
  </div>
</template>

<script>
import NoOrphans from './helpers/NoOrphans'
export default {
  name: 'OnboardingTextBox',
  components: { NoOrphans },
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
