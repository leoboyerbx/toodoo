<template>
  <div
    class="absolute w-full h-full top-0 left-0 bg-theme-dark flex flex-col items-center justify-center p-10 pointer-events-auto"
  >
    <h1 class="font-display text-2xl text-white mb-10">Qui est-ce ?</h1>
    <div class="flex items-center justify-center">
      <div
        v-for="player in players"
        :key="player.id"
        class="avatar-wp flex flex-col items-center"
      >
        <div
          class="avatar mx-3"
          :style="{
            borderColor: color[player.id],
          }"
          @click="chose(player)"
        >
          <AvatarImg
            :avatar-name="player.avatar"
            avatar-type="portrait"
            class="rounded-3xl"
            @avatar-loaded="loadColor(player.id, $event.color)"
          />
        </div>
        <p class="text-white mt-3">{{ player.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarImg from 'components/avatar/AvatarImg'
export default {
  name: 'MapChosePlayer',
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
  methods: {
    returnSelected(avatar) {
      this.$emit('select', avatar)
    },
    chose(player) {
      this.$store.commit('setCurrentPlayer', player)
      this.$store.commit('viewModel/setShowMapChosePlayer', false)
    },
    loadColor(id, color) {
      this.color[id] = color
      this.$forceUpdate()
    },
  },
}
</script>

<style scoped lang="scss">
.avatar {
  height: 90px;
  width: 90px;
  border-radius: 999px;
  border: 3px solid;
  cursor: pointer;
  transition: all 0.1s;
  background-color: #291d66;
  position: relative;
  z-index: 3;
  overflow: hidden;
}
.avatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #291d66;
}

@for $i from 1 through 6 {
  .avatar-wp:nth-child(#{$i}) {
    animation: fadein 0.5s both $i * 0.03s;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
