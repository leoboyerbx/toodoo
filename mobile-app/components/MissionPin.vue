<template>
  <div>
    <Pin :position="position" @open="$emit('open', $event)">
      <p class="text-center">{{ mission.name }}</p>
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
