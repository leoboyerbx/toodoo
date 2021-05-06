<template>
  <div>
    <div>{{ mission.name }}</div>
    <div @click="sendMissionCompletion">
      {{ completed ? 'Terminée' : 'Fait' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PonctualMissionLine',
  props: {
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
  methods: {
    sendMissionCompletion() {
      const currentDate = new Date()
      this.$store.dispatch('apiService/postMissionCompletion', {
        missionId: this.mission.id,
        completeBy: this.$store.getters['apiService/currentPlayer'].id,
        completeDay: currentDate,
      })
      this.$data.completed = true
    },
  },
}
</script>

<style scoped></style>
