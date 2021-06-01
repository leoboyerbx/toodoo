<template>
  <div class="fullscreen bg-theme-darkBlue">
    <MissionsControl />
  </div>
</template>

<script>
import MissionsControl from '../components/MissionsControl'
export default {
  components: { MissionsControl },
  name: 'missions-manager',
  async beforeCreate() {
    await this.$store.dispatch('viewModel/fetchMissionsManagerData')
  },
}
</script>

<style scoped></style>
