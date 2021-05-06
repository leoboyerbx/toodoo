<template>
  <div>
    <div>{{ mission.name }}</div>
    <div>{{ completed ? 'Terminée' : 'Fait' }}</div>
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
}
</script>

<style scoped></style>
