<template>
  <div class="flex flex-col mx-3 justify-end items-center w-20 relative">
    <img
      :src="require(`assets/img/avatars/${player.img.character}`)"
      alt="Avatar image"
      class="w-16"
      :class="{
        blink:
          gameContext.bossAttack &&
          gameContext.bossAttack.capabilityResult.capability.target !==
            'self' &&
          (gameContext.bossAttack.capabilityResult.effectiveTarget.player.id ===
            player.player.id ||
            gameContext.bossAttack.capabilityResult.capability.target ===
              'allPlayers'),
      }"
    />
    <SmallBar
      class="mt-3"
      :color="player.color"
      :value="player.hp"
      :max-value="player.initialHp"
    />
    <img
      v-if="player.protected"
      class="absolute top-11 right-2 transition-transform duration-200 w-5"
      src="~assets/img/shield.svg"
      :style="{
        transform: index === gameContext.turnIndex ? 'translateY(5vh)' : 'none',
      }"
    />
  </div>
</template>
<script>
import gameContext from '../../mixins/gameContext'
import SmallBar from './SmallBar'

export default {
  components: { SmallBar },
  mixins: [gameContext],
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.blink {
  animation: blink 0.4s infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
