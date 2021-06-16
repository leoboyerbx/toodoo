<template>
  <div class="fullscreen bg-theme-darkBlue pl-6 pr-6">
    <MissionsControl />
  </div>
</template>

<script>
import MissionsControl from '../components/MissionsControl'
export default {
  name: 'MissionsManager',
  components: { MissionsControl },
  async beforeCreate() {
    await this.$store.dispatch('fetchAll')
    await this.$store.dispatch('viewModel/fetchMissionsManagerData')
  },
}
</script>

<style scoped></style>
