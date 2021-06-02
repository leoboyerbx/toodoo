<template>
  <div>
    <div class="max-h-1/4 overflow-scroll">
      <button
        class="absolute top-1.5 left-10 flex mx-auto mt-6 rounded-full p-2 bg-white"
        @click="$router.go(-1)"
      >
        <unicon name="arrow-left" fill="#b5b1fe" />
      </button>
      <div class="flex flex-row flex-nowrap justify-between max-w-4xl mt-5">
        <div
          class="flex flex-row flex-nowrap justify-between mx-auto bg-white rounded-md p-1"
        >
          <div
            class="pt-2 pb-2 pl-4 pr-4 rounded-md"
            :class="{ 'text-white bg-theme-light': displayPonctual === false }"
            @click="changeListFilter"
          >
            Quotidien
          </div>
          <div
            class="pt-2 pb-2 pl-4 pr-4 rounded-md"
            :class="{ 'text-white bg-theme-light': displayPonctual === true }"
            @click="changeListFilter"
          >
            Ponctuel
          </div>
        </div>
      </div>
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
  data: () => {
    return {
      displayPonctual: false,
    }
  },
  computed: {
    missions() {
      const arrayToReturn = []
      if (!this.displayPonctual) {
        this.$store.state.viewModel.missionsManagerData.missionsList.forEach(
          (mission) => {
            if (mission.ponctual === false) {
              arrayToReturn.push(mission)
            }
          }
        )
      } else {
        this.$store.state.viewModel.missionsManagerData.missionsList.forEach(
          (mission) => {
            if (mission.ponctual === true) {
              arrayToReturn.push(mission)
            }
          }
        )
      }

      return arrayToReturn
    },
  },
  methods: {
    changeListFilter() {
      this.displayPonctual = !this.displayPonctual
    },
  },
}
</script>

<style scoped></style>
