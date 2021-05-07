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
  methods: {
    sendData() {
      const currentDate = new Date()
      this.$store.dispatch('apiService/postMissionCompletion', {
        missionId: 3,
        completeBy: 2,
        completeDay: currentDate,
      })
    },
  },
}
</script>

<style scoped></style>
