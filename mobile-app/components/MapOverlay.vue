<template>
  <div class="fixed top-0 left-0 right-0 h-full pointer-events-none">
    <PlayersList :players="players" class="pointer-events-auto"></PlayersList>
    <CircleButton
      id="stats-btn"
      :icon-url="require(`@/assets/ionic-md-stats.png`)"
      icon-alt="Texte alternatif"
    ></CircleButton>
    <CircleButton
      id="calendar-btn"
      :icon-url="require(`@/assets/awesome-calendar-plus.png`)"
      icon-alt="Texte alternatif"
    ></CircleButton>
  </div>
</template>

<script>
import PlayersList from './PlayersList'
import CircleButton from './CircleButton'

export default {
  name: 'MapOverlay',
  components: { CircleButton, PlayersList },
  data: () => {
    return {}
  },
  computed: {
    players() {
      return this.$store.state.apiService.players
    },
  },
}
</script>

<style scoped>
#stats-btn,
#calendar-btn {
  position: absolute;
  bottom: 15px;
}
#stats-btn {
  left: 15px;
}
#calendar-btn {
  right: 15px;
}
</style>
