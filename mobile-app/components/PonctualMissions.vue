<template>
  <div>
    <h1 class="text-center text-gray-50 text-4xl font-semibold mt-10">
      Missions ponctuelles
    </h1>
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
