<template>
  <div>
    <div class="flex flex-row flex-nowrap justify-between max-w-4xl mx-auto">
      <div class="w-10 h-10 rounded-lg bg-theme-light mt-5 flex justify-center">
        <span class="text-blue-50 font-bold font text-3xl"> + </span>
      </div>
    </div>
    <MissionControlLine
      v-for="mission in missions"
      :key="mission.id"
      :mission="mission"
    />
  </div>
</template>

<script>
import MissionControlLine from '../components/MissionControlLine'

export default {
  name: 'MissionsControl',
  components: { MissionControlLine },
  computed: {
    missions() {
      return this.$store.state.viewModel.missionsManagerData.missionsList
    },
  },
}
</script>

<style scoped></style>
