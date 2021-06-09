<template>
  <div class="bg-theme-darkBlue fullscreen flex-nowrap flex">
    <div class="nav w-3/12 h-screen bg-theme-lightPurple">
      <div
        v-for="player in players"
        :key="player.name"
        :class="{ active: playerNameSelect === player.name }"
        class="w-full text-center pt-6 pb-8 text-white font-display text-2xl relative"
        @click="changeSelectPlayer(player.name)"
      >
        {{ player.name }}
      </div>
    </div>
    <div class="content w-9/12 h-screen overflow-scroll pl-24 pr-24">
      <div class="title teamName mt-4 font-display">Choisissez vos Toodoo</div>
      <div class="description text-white mt-6">
        Tour à tour choisissez un TooDoo, faites attention aux pouvoirs choisis
        dans l’équipe, car ils vous seront d’une grande aide pour collabore face
        aux méchants.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddAvatar',
  data() {
    return {
      playerNameSelect: '',
    }
  },
  computed: {
    players() {
      return this.$store.state.apiService.team.players
    },
  },
  mounted() {
    this.playerNameSelect = this.players[0].name
  },
  methods: {
    changeSelectPlayer(name) {
      this.playerNameSelect = name
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 30px;
  background: -webkit-linear-gradient(#eec389, #fd8486);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.active {
  background-color: #ffffff;
  color: #1f0a62;
  box-shadow: 0px 3px 20px rgb(0 0 0 / 30%);
  transition: all 0.3s;
}
.active::after {
  content: '';
  position: absolute;
  width: 30px;
  background-color: #ffffff;
  right: -15px;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  transition: all 0.3s;
}
</style>
