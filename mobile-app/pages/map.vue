<template>
  <div class="fullscreen">
    <InteractiveMap />
  </div>
</template>

<script>
import InteractiveMap from '../components/InteractiveMap'
export default {
  components: { InteractiveMap },
  async beforeCreate() {
    await this.$store.dispatch('fetchAll')
  },
}
</script>

<style></style>
