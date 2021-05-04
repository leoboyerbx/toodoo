<template>
  <div>
    <Pin :position="position" @open="$emit('open', $event)">
      <p class="text-center">{{ mission.name }}</p>
      <button class="flex mx-auto mt-6 rounded-full p-2 bg-theme">
        <unicon name="check" fill="#fff" />
      </button>
    </Pin>
  </div>
</template>

<script>
export default {
  name: 'MissionPin',
  props: {
    position: {
      type: Object,
      required: true,
    },
    mission: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
