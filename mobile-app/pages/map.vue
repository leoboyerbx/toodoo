<template>
  <div class="fullscreen">
    <InteractiveMap></InteractiveMap>
  </div>
</template>

<script>
export default {
  async beforeCreate() {
    await this.$store.dispatch('fetchAll')
  },
}
</script>

<style></style>
