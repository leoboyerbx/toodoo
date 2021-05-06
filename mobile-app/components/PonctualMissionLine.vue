<template>
  <div
    class="max-w-3xl mx-auto mt-5 flex flex-row flex-nowrap justify-between rounded-lg"
    :class="{ 'bg-white': completed === true }"
  >
    <div class="p-2.5 px-8 bg-white w-10/12 rounded-lg">{{ mission.name }}</div>
    <div
      class="py-2.5 px-8 font-bold bg-white rounded-lg"
      :class="{ 'bg-theme-lightPurple text-white': completed === false }"
      @click="sendMissionCompletion"
    >
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
