<template>
  <div class="flex flex-col items-center">
    <div class="undersocle"></div>
    <transition name="avatar" mode="out-in">
      <img
        :key="player.player.id"
        :src="require(`assets/img/avatars/${player.img.character}`)"
        alt=""
        class="w-56 block mb-5 relative z-10"
      />
    </transition>
    <transition name="player-numbers" mode="out-in">
      <div :key="player.player.id" class="flex flex-col items-center">
        <StandardBar
          icon="spiral.svg"
          name="Vie"
          :value="player.hp"
          :max-value="player.initialHp"
          :color="player.color"
        />
        <div
          class="flex items-center mr-auto"
          style="transform: translateX(-11px)"
        >
          <img src="~/assets/img/energy.png" alt="" class="w-8 h-8" />
          <p class="text-white font-bold ml-2">Energie</p>
        </div>
        <p class="text-white font-bold text-xl mr-auto ml-7">
          {{ player.energy }}
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
import gameContext from '../../mixins/gameContext'
import StandardBar from './StandardBar'

export default {
  components: { StandardBar },
  mixins: [gameContext],
  computed: {
    player() {
      return this.gameContext.players[this.gameContext.playerTurn]
    },
  },
}
</script>
<style scoped>
.player-numbers-enter-active,
.player-numbers-leave-active {
  transition: transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.avatar-enter-active,
.avatar-leave-active {
  transition: transform 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.player-numbers-enter-active {
  transition-delay: 0.6s;
}
.player-numbers-enter,
.player-numbers-leave-to {
  transform: translate(0, 150%);
}
.avatar-enter,
.avatar-leave-to {
  transform: translate(-240%, 0);
}
.undersocle {
  z-index: 1;
  background-color: #b79bfb;
  width: 100%;
  position: absolute;
  top: 20vh;
  left: 0;
  height: 40px;
  border-radius: 100%;
  opacity: 30%;
}
</style>
