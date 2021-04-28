<template>
  <div class="h-full w-full">
    <Map></Map>
    <MapOverlay></MapOverlay>
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
}
</script>
