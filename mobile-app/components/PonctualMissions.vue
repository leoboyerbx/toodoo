<template>
  <div>
    <div class="text-4xl relative font-semibold">
      <p class="text-center text-gray-50 mt-10">Missions ponctuelles</p>
      <p class="Text-shadow text-center w-full">Missions ponctuelles</p>
    </div>
    <PonctualMissionLine
      v-for="mission in missions"
      :key="mission.id"
      :mission="mission"
    />
  </div>
</template>

<script>
import PonctualMissionLine from '../components/PonctualMissionLine'

export default {
  name: 'PonctualMissions',
  components: { PonctualMissionLine },
  computed: {
    missions() {
      return this.$store.state.viewModel.ponctualMissionsListData.missionsList
    },
  },
}
</script>

<style scoped></style>
