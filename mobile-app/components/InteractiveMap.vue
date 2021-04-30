<template>
  <div class="h-full w-full">
    <Map></Map>
    <MapOverlay class="absolute left-0 top-0"></MapOverlay>
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
