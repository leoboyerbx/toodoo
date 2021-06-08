<template>
  <div class="bg-white rounded-md mt-6 pt-2 pb-2 pl-4 pr-4 flex-nowrap flex">
    <span class="w-4/6 font-body text-black font-light">
      {{ mission.mission.name }}</span
    >
    <span class="w-2/6 font-body text-black font-light"> 12 énergies </span>
  </div>
</template>

<script>
export default {
  name: 'ScoreCompletionLine',
  props: {
    mission: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
