<template>
  <div>
    <div class="flex-nowrap justify-center flex">
      <ScoreSliderItem
        v-for="player in players"
        :key="player.id"
        :player="player"
        :current-item="player.id === activeId"
        class="item"
        :class="{ active: activeId === player.id }"
        @click.native="changeCurrent(player.id)"
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
          <div class="missions-completed"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreSliderItem from '../components/ScoreSliderItem'
export default {
  name: 'ScoreSlider',
  components: { ScoreSliderItem },
  data: () => {
    return {
      activeId: 0,
    }
  },
  computed: {
    players() {
      return this.$store.state.viewModel.scoreData.playerList
    },
  },
  mounted() {
    this.activeId = this.players[0].id
  },
  methods: {
    changeCurrent(id) {
      this.activeId = id
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
</style>
