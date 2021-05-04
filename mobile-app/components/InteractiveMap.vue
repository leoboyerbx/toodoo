<template>
  <div class="h-full w-full">
    <Map></Map>
    <MapOverlay class="absolute left-0 top-0"></MapOverlay>
    <button @click="sendData">Cliquer pour envoyer</button>
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

<style>
button {
  position: absolute;
  left: 0;
  top: 50%;
}
</style>
