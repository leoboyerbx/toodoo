<template>
  <div class="h-full w-full">
    <Map></Map>
    <MapOverlay @selectAvatar="selectedAvatar = $event"></MapOverlay>
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
