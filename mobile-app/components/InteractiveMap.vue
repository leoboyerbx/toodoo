<template>
  <div class="h-full w-full">
    <Map></Map>
    <MapOverlay class="map-overlay"></MapOverlay>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Vincent',
    },
  },
  data() {
    return {
      selectedAvatar: null,
    }
  },
}
</script>

<style scoped>
.map-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>
