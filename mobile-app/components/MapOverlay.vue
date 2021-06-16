<template>
  <div class="fixed top-0 left-0 right-0 h-full pointer-events-none">
    <PlayersList :players="players" class="pointer-events-auto"></PlayersList>
    <NuxtLink to="/score" class="pointer-events-auto">
      <CircleButton id="stats-btn" :icon-name="'icon_stats.svg'"></CircleButton>
    </NuxtLink>
    <NuxtLink to="/missions-manager" class="pointer-events-auto">
      <CircleButton
        id="calendar-btn"
        :icon-name="'icon_calendrier.svg'"
      ></CircleButton>
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
    <transition name="fade">
      <MapChosePlayer
        v-if="$store.state.viewModel.showMapChosePlayer"
        :players="players"
        class="z-50"
      />
    </transition>
    <CompletionBar
      :current-day="$store.state.currentDay + 1"
      class="absolute bottom-10 w-screen"
    />
  </div>
</template>

<script>
import PlayersList from './PlayersList'
import CircleButton from './CircleButton'
import MapChosePlayer from './MapChosePlayer'
import CompletionBar from './CompletionBar'

export default {
  name: 'MapOverlay',
  components: { MapChosePlayer, CircleButton, PlayersList, CompletionBar },
  data: () => {
    return {}
  },
  computed: {
    players() {
      return this.$store.state.apiService.players
    },
    appForeground() {
      return this.$store.state.appIsForeground
    },
  },
  watch: {
    appForeground(newVal, oldVal) {
      if (!oldVal && newVal) {
        this.$store.commit('viewModel/setShowMapChosePlayer', true)
      }
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
