<template>
  <div>
    <div class="flex-nowrap justify-center flex">
      <ScoreSliderItem
        v-for="player in players"
        :key="player.id"
        :player="player"
        :current-item="activePlayer && player.id === activePlayer.id"
        class="item"
        :class="{ active: activePlayer && activePlayer.id === player.id }"
        @click.native="changeCurrent(player)"
      />
    </div>
    <div class="ladder-part max-w-3xl mx-auto">
      <div class="text-white font-display text-2xl">
        Historique des missions
        <div class="content mr-2 ml-2 mt-6">
          <div
            class="legend flex-nowrap flex border-b-2 border-white pl-0.5 pr-0.5"
          >
            <span class="w-4/6 font-body"> Nom des missions</span>
            <span class="w-2/6 font-body"> Gain </span>
          </div>
          <div class="missions-completed overflow-scroll">
            <ScoreCompletionLine
              v-for="missionComplete in missionCompletions"
              :key="missionComplete.id"
              :mission="missionComplete"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreSliderItem from '../components/ScoreSliderItem'
import ScoreCompletionLine from '../components/ScoreCompletionLine'
export default {
  name: 'ScoreSlider',
  components: { ScoreSliderItem, ScoreCompletionLine },
  data: () => {
    return {
      activePlayer: null,
    }
  },
  computed: {
    players() {
      return this.$store.state.apiService.players
    },
    missionCompletions() {
      return (
        this.activePlayer?.completeMissions.filter(
          (missionCompletion) => !!missionCompletion.mission
        ) ?? []
      )
    },
  },
  mounted() {
    this.activePlayer = this.players[0]
  },
  methods: {
    changeCurrent(player) {
      this.activePlayer = player
    },
  },
}
</script>

<style scoped>
.item {
  margin: 80px 20px;
  transition: all 0.5s;
}
.item.active {
  transform: scale(1.5);
  transform-origin: center;
  margin: 80px 40px;
}
.item:not(.active) {
  opacity: 0.4;
}
.missions-completed {
  max-height: 40vh;
}
</style>
