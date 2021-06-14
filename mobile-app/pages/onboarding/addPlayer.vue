<template>
  <div class="gradient-bg fullscreen overflow-y-scroll">
    <div class="onBoarding-shape-container">
      <img
        src="~assets/img/assets-onboarding/shape/shape2.svg"
        alt=""
        class="onBoarding-shape-content"
      />
    </div>
    <div class="teamName mt-16 font-display max-w-2xl mx-auto">
      {{ teamName }}
    </div>
    <div class="content w-screen max-w-2xl mx-auto mt-24">
      <input
        v-for="(player, i) in players"
        :key="i"
        v-model="player.name"
        class="player-line max-w-3xl w-full mt-5 flex flex-row flex-nowrap justify-between rounded-lg bg-white pt-2.5 pb-1 pl-3 border-pink h-12"
        placeholder="Quel est votre nom ?"
      />
    </div>
    <div
      v-if="displayAddButton"
      class="content w-screen max-w-2xl mx-auto mt-5"
    >
      <div
        class="w-10 h-10 rounded-3xl bg-pink my-5 flex justify-center items-center cursor-pointer"
        @click="addNewPlayerLine"
      >
        <span class="text-blue-50 font-bold font text-3xl"> + </span>
      </div>
    </div>
    <button
      class="absolute bottom-7 right-7 flex mx-auto mt-6 rounded-full p-2 bg-pink z-10"
      @click="updatePlayersOfTeam"
    >
      <unicon name="check" width="60" height="60" fill="#fff" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddPlayer',
  data() {
    return {
      linesCounter: 1,
      displayAddButton: true,
      players: [{ name: '' }],
    }
  },
  computed: {
    teamName() {
      return this.$store.state.apiService.team.name
    },
  },
  methods: {
    addNewPlayerLine() {
      if (this.players.length < 6) {
        this.players.push({ name: '' })
        this.$nextTick(() => {
          this.$el.querySelector('.player-line:last-child')?.focus()
        })
      }
      if (this.players.length === 6) {
        this.displayAddButton = false
      }
    },
    updatePlayersOfTeam() {
      this.$store.dispatch('apiService/setTeam', {
        team: { players: this.players },
      })
      this.$router.push('/onboarding/addAvatar')
    },
  },
}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(
    137deg,
    rgba(72, 56, 141, 1) 40%,
    rgba(172, 168, 241, 1) 100%
  );
}
.teamName {
  font-size: 30px;
  background: -webkit-linear-gradient(#eec389, #fd8486);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
