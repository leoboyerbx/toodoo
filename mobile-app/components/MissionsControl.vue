<template>
  <div>
    <div class="max-h-1/4 overflow-scroll relative bg-shape">
      <button
        class="absolute top-1.5 left-10 flex mx-auto mt-6 rounded-full p-2 bg-white z-10"
        @click="$router.go(-1)"
      >
        <unicon name="arrow-left" fill="#b5b1fe" />
      </button>
      <DailyGuide class="right-1/4 top-10" />
      <div
        class="flex flex-row flex-nowrap justify-between max-w-4xl mt-60 mx-auto"
      >
        <div
          class="flex flex-row flex-nowrap justify-between bg-white rounded-lg p-1 shadow-2xl"
        >
          <div
            class="pt-2 pb-2 pl-4 pr-4 rounded-lg"
            :class="{ 'text-white bg-theme-light': displayPonctual === false }"
            @click="changeListFilter"
          >
            Quotidien
          </div>
          <div
            class="pt-2 pb-2 pl-4 pr-4 rounded-lg"
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
          @click="toggleAddLine"
        >
          <span class="text-blue-50 font-bold font text-3xl"> + </span>
        </div>
      </div>
      <div
        class="flex flex-row flex-nowrap max-w-4xl mx-auto"
        :class="{ hidden: addLineOpen === false }"
      >
        <input
          class="max-w-3xl w-full mt-5 flex flex-row flex-nowrap justify-between rounded-lg bg-white pt-2.5 pb-1 pl-3"
          placeholder="Ajouter une tâche |"
          v-model="newMissionName"
        />
        <div
          class="w-16 h-10 rounded-lg bg-theme-light mt-5 flex justify-center ml-5"
          @click="addNewMission"
        >
          <span class="font-bold font text-3xl my-auto">
            <unicon name="check" fill="#ffffff" />
          </span>
        </div>
      </div>
      <MissionControlLine
        v-for="mission in missions"
        :key="mission.id"
        :mission="mission"
      />
    </div>
    <button
      class="absolute bottom-7 right-7 flex mx-auto mt-6 rounded-full p-2 bg-white z-10"
      @click="makeAllQueries"
    >
      <unicon name="check" fill="#b5b1fe" />
    </button>
  </div>
</template>

<script>
import MissionControlLine from '../components/MissionControlLine'
import DailyGuide from '../components/DailyGuide'

export default {
  name: 'MissionsControl',
  components: { MissionControlLine, DailyGuide },
  data: () => {
    return {
      displayPonctual: false,
      addLineOpen: false,
      newMissionName: '',
      assignPlayerQueue: [],
      activeMissionQueue: [],
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
    toggleAddLine() {
      this.addLineOpen = !this.addLineOpen
    },
    addNewMission() {
      if (this.newMissionName !== '') {
        this.$store.dispatch('apiService/postMission', {
          name: this.newMissionName,
          ponctual: this.displayPonctual,
        })
        this.toggleAddLine()
        this.newMissionName = ''
      } else {
        alert('Vous devez renseigner un nom pour ajouter une mission')
      }
    },
    addToPlayerAssignQueue(queryParam) {
      for (let i = 0; i < this.assignPlayerQueue.length; i++) {
        if (this.assignPlayerQueue[i].missionId === queryParam.missionId) {
          this.assignPlayerQueue[i].playerId = queryParam.missionId
          return
        }
      }
      this.assignPlayerQueue.push(queryParam)
    },
    addToActiveMissionQueue(queryParam) {
      for (let i = 0; i < this.activeMissionQueue.length; i++) {
        if (this.activeMissionQueue[i].missionId === queryParam.missionId) {
          this.activeMissionQueue[i].active = queryParam.active
          return
        }
      }
      this.activeMissionQueue.push(queryParam)
    },
    makeAllQueries() {
      this.assignPlayerQueue.forEach((data) => {
        this.$store.dispatch('apiService/assignPlayer', {
          playerId: data.playerId,
          missionId: data.missionId,
        })
      })
      this.activeMissionQueue.forEach((data) => {
        this.$store.dispatch('apiService/activateMission', {
          active: data.active,
          missionId: data.missionId,
        })
      })
    },
  },
}
</script>

<style scoped>
.bg-shape::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  clip-path: ellipse(45% 35% at 0% 0%);
  width: 100vw;
  height: 75vh;
  background-color: #ae91ff;
}
</style>
