<template>
  <div>
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
