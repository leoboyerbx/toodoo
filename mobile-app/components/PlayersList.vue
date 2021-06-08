<template>
  <div class="avatar-container">
    <div
      v-for="player in players"
      :key="player.id"
      class="avatar"
      :class="{ focus: currentPlayer === player }"
      :style="{
        borderColor: color[player.id],
      }"
      @click="currentPlayer = player"
    >
      <AvatarImg
        :avatar-name="player.avatar"
        avatar-type="portrait"
        class="rounded-3xl"
        @avatar-loaded="color[player.id] = $event.color"
      />
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
      default: () => {},
    },
  },
  data() {
    return {
      playersProfiles: [],
      color: [],
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
  margin-left: 20px;
  margin-top: 20px;
  width: fit-content;
}
.avatar {
  height: 55px;
  width: 55px;
  margin-bottom: 20px;
  border-radius: 50%;
  border: 3px solid;
  cursor: pointer;
  transition: all 0.1s;
  background-color: #291d66;
  position: relative;
  z-index: 3;
}
.avatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #291d66;
}
.avatar.focus::before {
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.3;
  position: absolute;
  transform-origin: center;
  transform: scale(1.4);
  z-index: -1;
  transition: all 0.5s;
}
</style>
