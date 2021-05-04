<template>
  <div class="h-full w-full">
    <Map></Map>
    <MapOverlay class="absolute left-0 top-0"></MapOverlay>
  </div>
</template>

<script>
import Map from './Map'
import MapOverlay from './MapOverlay'

export default {
  components: { Map, MapOverlay },
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
