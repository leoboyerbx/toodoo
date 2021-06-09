<template>
  <div class="w-full h-full flex p-10 justify-center items-center flex-wrap">
    <div
      v-for="player in players"
      :key="player.id"
      class="flex flex-col items-center font-display"
      @click="pick(player)"
    >
      <img
        :src="require(`assets/img/avatars/${player.img.character}`)"
        class="-mx-14 -my-8 w-72"
        alt="c"
      />
      {{ player.player.name }}
      <div class="w-28">
        <SmallBar
          class="mt-3"
          :color="player.color"
          :value="player.hp"
          :max-value="player.initialHp"
        />
        <div class="mt-1">
          <img src="~assets/img/energy.png" class="h-4 -ml-1 inline" alt="e" />
          {{ player.energy }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SmallBar from './SmallBar'
export default {
  components: { SmallBar },
  props: {
    players: {
      type: Array,
      required: true,
    },
  },
  methods: {
    pick(player) {
      this.$emit('pick-player', player)
    },
  },
}
</script>
