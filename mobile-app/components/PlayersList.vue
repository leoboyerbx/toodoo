<template>
  <div class="avatar-container">
    <div
      v-for="profile in playersProfiles"
      :key="profile.player.id"
      class="avatar"
      :class="{ focus: currentPlayer === profile.player }"
      @click="currentPlayer = profile.player"
    >
      <img
        :src="require('assets/img/avatars/' + profile.avatar.img.portrait)"
        alt="avatar"
      />
    </div>
  </div>
</template>

<script>
import { getAvatar } from '../../common/entities/getEntity'

export default {
  name: 'AvatarList',
  props: {
    players: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      playersProfiles: [],
    }
  },
  computed: {
    currentPlayer: {
      get() {
        return this.$store.state.currentPlayer
      },
      set(player) {
        this.$store.commit('setCurrentPlayer', player)
      },
    },
  },
  watch: {
    players(val) {
      this.loadAvatars()
    },
  },
  beforeMount() {
    this.loadAvatars()
  },
  methods: {
    returnSelected(avatar) {
      this.$emit('select', avatar)
    },
    async loadAvatars() {
      const playersProfiles = []
      for (const player of this.players) {
        const avatar = await getAvatar(player.avatar)
        const profile = {
          player,
          avatar,
        }
        playersProfiles.push(profile)
      }
      this.playersProfiles = playersProfiles
    },
  },
}
</script>

<style scoped>
.avatar-container {
  margin-left: 10px;
  margin-top: 10px;
  width: fit-content;
}
.avatar {
  height: 55px;
  width: 55px;
  margin-bottom: 10px;
  border-radius: 50%;
  border: #13538b 2px solid;
  cursor: pointer;
  transition: all 0.1s;
  overflow: hidden;
}
.avatar img {
  object-fit: cover;
  object-position: center;
  height: 80px;
  width: 80px;
}
.avatar.focus {
  border: #2583db 4px solid;
}
</style>
