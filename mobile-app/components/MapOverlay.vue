<template>
  <div class="fixed top-0 left-0 right-0 h-full pointer-events-none">
    <PlayersList :players="players" class="pointer-events-auto"></PlayersList>
    <NuxtLink to="/score" class="pointer-events-auto">
      <CircleButton
        id="stats-btn"
        :icon-name="'chart-growth-alt'"
      ></CircleButton>
    </NuxtLink>
    <NuxtLink to="/missions-manager" class="pointer-events-auto">
      <CircleButton id="calendar-btn" :icon-name="'schedule'"></CircleButton>
    </NuxtLink>
    <DailyGuide class="left-72 fixed top-5" />
    <!--    warning: demo only hidden button-->
    <div
      class="absolute pointer-events-auto top-0 right-0 w-16 h-16"
      @click="demoNextDay"
    ></div>
    <div
      class="absolute pointer-events-auto top-0 right-16 w-16 h-16"
      @click="$router.push('/onboarding')"
    ></div>
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
  methods: {
    demoNextDay() {
      // Mesdames et messieux, l'enfumage !
      const currentDay = this.$store.state.currentDay
      if (currentDay === 0) {
        this.$store.commit('setCurrentDay', 1)
      } else if (currentDay === 1) {
        this.$store.commit('setCurrentDay', 6)
      }
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
