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
    <button
      class="absolute top-1.5 left-10 flex mx-auto mt-6 rounded-full p-2 bg-white"
      @click="$router.go(-1)"
    >
      <unicon name="arrow-left" fill="#b5b1fe" />
    </button>
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
