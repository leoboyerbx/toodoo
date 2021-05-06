<template>
  <div>
    <h1>Missions ponctuelles</h1>
  </div>
</template>

<script>
export default {
  name: 'PonctualMissions',
  computed: {
    missions() {
      return this.$store.state.viewModel.mapViewData.characters
    },
  },
}
</script>

<style scoped></style>
