<template>
  <div class="fixed top-0 left-0 right-0 h-full pointer-events-none">
    <PlayersList :players="players" class="pointer-events-auto"></PlayersList>
    <NuxtLink to="/score">
      <CircleButton
        id="stats-btn"
        :icon-name="'chart-growth-alt'"
      ></CircleButton>
    </NuxtLink>
    <NuxtLink to="/missions-manager">
      <CircleButton id="calendar-btn" :icon-name="'schedule'"></CircleButton>
    </NuxtLink>
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
