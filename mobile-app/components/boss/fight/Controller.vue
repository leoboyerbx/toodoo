<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <section class="bg-theme-light flex w-full p-6 header-player">
      <img
        :src="require(`assets/img/avatars/${turnEntity.img.character}`)"
        alt="Perso"
        class="h-28"
      />
      <div class="flex flex-col justify-center ml-6">
        <span class="text-2xl">
          Au tour de <strong>{{ turnEntity.player.name }}</strong>
        </span>
        <span>
          Énergie: {{ turnEntity.energy }} <br />
          Vie: {{ turnEntity.hp }}
        </span>
      </div>
    </section>
    <section class="max-w-2xl mt-auto flex flex-wrap gap-4 p-10">
      <CapabilityButton
        v-for="capability in capabilities"
        :key="capability.name"
        :capability="capability"
        :disabled="capability.cost > turnEntity.energy"
        @use="useCapability(capability)"
      />
    </section>
    <section class="flex justify-end w-full mt-auto p-10">
      <button
        class="bg-gray-200 rounded-lg px-4 py-2 text-theme-dark"
        @click="skipTurn"
      >
        Passer mon tour
      </button>
    </section>
  </div>
</template>
<script>
import CapabilityButton from '@/components/boss/fight/CapabilityButton'
export default {
  components: { CapabilityButton },
  props: {
    capabilities: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    turnEntity() {
      return this.$store.state.bossSync.gameContext.turnEntity
    },
  },
  methods: {
    useCapability(capability) {
      this.$store.dispatch('bossSync/useCapability', capability)
    },
    skipTurn() {
      this.$store.dispatch('bossSync/skipTurn')
    },
  },
}
</script>
