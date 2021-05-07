<template>
  <div class="flex flex-col text-lg text-white">
    <p v-if="gameContext.turnIndex >= 0">
      Au tour de <strong>{{ gameContext.turnEntity.player.name }}</strong>
    </p>
    <p v-else>Au tour du boss !</p>
    <div class="flex mt-10">
      <div
        v-for="(player, index) in players"
        :key="player.player.id"
        class="flex flex-col mx-5 justify-end items-center w-20 relative"
        :class="{
          blink:
            gameContext.bossAttack &&
            gameContext.bossAttack.capabilityResult.capability.target !==
              'self' &&
            (gameContext.bossAttack.capabilityResult.effectiveTarget.player
              .id === player.player.id ||
              gameContext.bossAttack.capabilityResult.capability.target ===
                'allPlayers'),
        }"
      >
        <div
          class="border-theme-light triangle transition-opacity"
          :style="{ opacity: +(index === gameContext.turnIndex) }"
        ></div>
        <img
          :src="require(`assets/img/avatars/${player.img.character}`)"
          alt="Avatar image"
          class="w-20 absolute top-0 left-0 w-full transition-transform duration-200"
          :style="{
            transform:
              index === gameContext.turnIndex ? 'translateY(5vh)' : 'none',
          }"
        />
        <img
          v-if="player.protected"
          class="absolute top-14 right-2 transition-transform duration-200 w-5"
          src="~assets/img/shield.svg"
          :style="{
            transform:
              index === gameContext.turnIndex ? 'translateY(5vh)' : 'none',
          }"
        />
      </div>
    </div>
  </div>
</template>
<script>
import gameContext from '../../mixins/gameContext'

export default {
  mixins: [gameContext],
}
</script>
<style scoped>
.triangle {
  border: solid 3vh;
  width: 0;
  height: 0;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}
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
