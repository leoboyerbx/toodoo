<template>
  <div>
    <PonctualMissions />
  </div>
</template>

<script>
import PonctualMissions from '../components/PonctualMissions'

export default {
  components: { PonctualMissions },
  name: 'ponctual-missions',
  async beforeCreate() {
    await this.$store.dispatch('viewModel/fetchPonctualMissionsListData')
  },
}
</script>

<style scoped></style>
