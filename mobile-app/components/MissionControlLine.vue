<template>
  <div class="flex flex-row flex-nowrap justify-between max-w-4xl mx-auto">
    <div class="w-10 h-10 rounded-lg bg-white mt-5"></div>
    <div
      class="max-w-3xl w-full mx-auto mt-5 flex flex-row flex-nowrap justify-between rounded-lg bg-white pl-5 pt-2.5 pb-1"
    >
      {{ mission.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MissionControlLine',
  props: {
    mission: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
