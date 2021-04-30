<template>
  <div class="fullscreen">
    <InteractiveMap></InteractiveMap>
  </div>
</template>

<script>
export default {
  async beforeCreate() {
    await this.$store.dispatch('apiService/getGame')
    await this.$store.dispatch('apiService/getPlayers')
    await this.$store.dispatch('apiService/getMissions')
  },
}
</script>

<style></style>
