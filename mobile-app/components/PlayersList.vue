<template>
  <div class="avatar-container">
    <div
      v-for="player in players"
      :key="player.id"
      class="avatar"
      :class="{ focus: currentPlayer === player }"
      @click="currentPlayer = player"
    >
      <AvatarImg :avatar-name="player.avatar" avatar-type="portrait" />
    </div>
  </div>
</template>

<script>
import AvatarImg from '@/components/avatar/AvatarImg'
export default {
  name: 'AvatarList',
  components: { AvatarImg },
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
        return this.$store.getters['apiService/currentPlayer']
      },
      set(player) {
        this.$store.commit('setCurrentPlayer', player)
      },
    },
  },
  methods: {
    returnSelected(avatar) {
      this.$emit('select', avatar)
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
  background-color: #fff;
}
.avatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
.avatar.focus {
  border: #2583db 4px solid;
}
</style>
