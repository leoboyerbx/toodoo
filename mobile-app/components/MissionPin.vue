<template>
  <div>
    <Pin
      ref="pin"
      :position="position"
      :missionComplete="completed"
      @open="$emit('open', $event)"
    >
      <p class="text-center">{{ mission.name }}</p>
      <button
        class="flex mx-auto mt-6 rounded-full p-2 bg-theme"
        @click="sendMissionCompletion"
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
  data: () => {
    return {
      completed: false,
    }
  },
  methods: {
    sendMissionCompletion() {
      const currentDate = new Date()
      this.$store.dispatch('apiService/postMissionCompletion', {
        missionId: this.mission.id,
        completeBy: this.$store.state.currentPlayer.id,
        completeDay: currentDate,
      })
      this.$refs.pin.hide()
      this.completed = true
    },
  },
  mounted() {
    this.mission.missionCompletion.forEach((completion) => {
      const completionDate = new Date(completion.completeDay)
      const currentDate = new Date()
      if (
        completionDate.getDate() === currentDate.getDate() &&
        completionDate.getFullYear() === currentDate.getFullYear()
      ) {
        this.completed = true
      }
    })
  },
}
</script>

<style scoped></style>
