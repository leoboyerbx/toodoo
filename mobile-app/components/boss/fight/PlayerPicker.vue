<template>
  <div
    class="w-full h-full flex p-10 justify-center items-center flex-wrap relative"
  >
    <div
      v-if="capability"
      class="absolute top-0 left-0 w-full text-center font-display text-xl"
    >
      Qui veux-tu {{ capabilityEffect }} ?
    </div>
    <unicon
      name="times"
      fill="#fff"
      width="35"
      height="35"
      class="absolute top-0 right-10"
      @click="$emit('close')"
    />
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
    capability: {
      type: Object,
      default: null,
    },
  },
  computed: {
    capabilityEffect() {
      if (this.capability?.effect.heal) {
        return 'soigner'
      }
      if (this.capability?.effect.protect) {
        return 'protéger'
      }
      return ''
    },
  },
  methods: {
    pick(player) {
      this.$emit('pick-player', player)
    },
  },
}
</script>
