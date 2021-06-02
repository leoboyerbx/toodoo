<template>
  <div>
    <div class="max-h-1/4 overflow-scroll">
      <button
        class="absolute top-1.5 left-10 flex mx-auto mt-6 rounded-full p-2 bg-white"
        @click="$router.go(-1)"
      >
        <unicon name="arrow-left" fill="#b5b1fe" />
      </button>
      <div class="flex flex-row flex-nowrap justify-between max-w-4xl mx-auto">
        <div
          class="w-10 h-10 rounded-lg bg-theme-light mt-5 flex justify-center"
        >
          <span class="text-blue-50 font-bold font text-3xl"> + </span>
        </div>
      </div>
      <MissionControlLine
        v-for="mission in missions"
        :key="mission.id"
        :mission="mission"
      />
    </div>
  </div>
</template>

<script>
import MissionControlLine from '../components/MissionControlLine'

export default {
  name: 'MissionsControl',
  components: { MissionControlLine },
  computed: {
    missions() {
      return this.$store.state.viewModel.missionsManagerData.missionsList
    },
  },
}
</script>

<style scoped></style>
