<template>
  <div>
    <Pin :position="position" @open="$emit('open', $event)">
      <p class="text-center">{{ mission.name }}</p>
      <button
        @click="sendMissionCompletion"
        class="flex mx-auto mt-6 rounded-full p-2 bg-theme"
      >
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
  methods: {
    sendMissionCompletion() {
      const currentDate = new Date()
      this.$store.dispatch('apiService/postMissionCompletion', {
        missionId: this.mission.id,
        completeBy: this.$store.state.currentPlayer.id,
        completeDay: currentDate,
      })
    },
  },
}
</script>

<style scoped></style>
