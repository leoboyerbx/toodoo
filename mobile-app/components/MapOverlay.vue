<template>
  <div class="fixed top-0 left-0 h-full pointer-events-none">
    <AvatarList
      :avatar-array="avatars"
      class="pointer-events-auto"
      @select="$store.commit('setCurrentPlayer', $event)"
    ></AvatarList>
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
export default {
  name: 'MapOverlay',
  data: () => {
    return {}
  },
  computed: {
    avatars() {
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
