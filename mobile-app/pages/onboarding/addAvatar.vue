<template>
  <div class="bg-theme-darkBlue fullscreen flex-nowrap flex">
    <div class="nav w-3/12 h-screen bg-theme-lightPurple relative">
      <div
        v-for="player in players"
        :key="player.name"
        :class="{ active: playerNameSelect === player.name }"
        class="w-full text-center pt-6 pb-8 text-white font-display text-2xl relative"
        @click="changeSelectPlayer(player.name)"
      >
        {{ player.name }}
      </div>
      <div class="btn-container absolute bottom-4 right-0 left-0">
        <div
          class="font-display button border-white border pl-4 pr-4 pt-2 pb-2 rounded-2xl w-48 mx-auto text-white text-center"
          @click="updatePlayers"
        >
          Valider
        </div>
      </div>
    </div>
    <div class="content w-9/12 h-screen overflow-scroll pl-24 pr-24">
      <div class="title teamName mt-4 font-display">Choisissez vos Toodoo</div>
      <div class="description text-white mt-6">
        Tour à tour choisissez un TooDoo, faites attention aux pouvoirs choisis
        dans l’équipe, car ils vous seront d’une grande aide pour collabore face
        aux méchants.
      </div>
      <div class="avatar-grid">
        <ItemChooseAvatar
          v-for="avatarName in avatarNames"
          :key="avatarName"
          :avatar-name="avatarName"
          class="grid-item"
          @click.native="makeAvatarActiveForPlayer(avatarName)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemChooseAvatar from '../../components/ItemChooseAvatar'

export default {
  name: 'AddAvatar',
  components: { ItemChooseAvatar },
  data() {
    return {
      playerNameSelect: '',
      playersUpdate: {},
      avatarNames: [
        'Clomo',
        'Romi',
        'Lyo',
        'Boun',
        'Maylo',
        'Nami',
        'Jujub',
        'Joy',
        'Vinou',
      ],
    }
  },
  computed: {
    players() {
      return this.$store.state.apiService.team.players
    },
  },
  mounted() {
    this.playerNameSelect = this.players[0].name
    this.playersUpdate = this.players
  },
  methods: {
    changeSelectPlayer(name) {
      this.playerNameSelect = name
    },
    makeAvatarActiveForPlayer(avatarName) {
      this.playersUpdate.forEach((player) => {
        if (player.name === this.playerNameSelect) {
          player.avatar = avatarName.toLowerCase()
        }
      })
    },
    updatePlayers() {
      this.$store.dispatch('apiService/setTeam', {
        team: { players: this.playersUpdate },
      })
      this.$router.push('/map')
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
.avatar-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
.grid-item {
  grid-row: auto;
  grid-column: auto;
}
</style>
