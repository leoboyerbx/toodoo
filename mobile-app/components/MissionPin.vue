<template>
  <Pin
    ref="pin"
    :position="position"
    :mission-complete="completed"
    @open="$emit('open', $event)"
  >
    <p class="text-center">
      {{ completed ? 'Tâche ' + mission.name + ' effectuée' : mission.name }}
    </p>
    <button
      v-if="!completed && goodAssign"
      class="flex mx-auto mt-6 rounded-full p-2 bg-theme"
      @click="sendMissionCompletion"
    >
      <unicon name="check" fill="#fff" />
    </button>
  </Pin>
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
  computed: {
    goodAssign() {
      const currentPlayer = this.$store.getters['apiService/currentPlayer']
      if (!currentPlayer || this.mission.assignTo === null) return true
      if (
        this.mission.assignTo ===
        this.$store.getters['apiService/currentPlayer'].id
      ) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    sendMissionCompletion() {
      const currentDate = new Date()
      this.$store.dispatch('apiService/postMissionCompletion', {
        missionId: this.mission.id,
        completeBy: this.$store.getters['apiService/currentPlayer'].id,
        completeDay: currentDate,
      })
      this.$refs.pin.hide()
      this.completed = true
    },
  },
}
</script>

<style scoped></style>
