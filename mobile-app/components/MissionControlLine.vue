<template>
  <div class="flex flex-row flex-nowrap justify-between max-w-4xl mx-auto">
    <div
      class="flex w-10 h-10 rounded-lg bg-white mt-5 justify-center items-center text-lg"
      @click="addMissionToActive"
    >
      <unicon
        :class="{ 'hidden-check': isActive === false }"
        name="check"
        fill="#b5b1fe"
      />
    </div>
    <div
      class="relative max-w-3xl w-full mx-auto mt-5 flex flex-row flex-nowrap justify-between rounded-lg bg-white pl-5 pt-2.5 pb-1"
    >
      <span class="text-base">{{ mission.name }}</span>
      <div
        class="absolute right-16 top-0 bottom-0 text-1xl font-bold text-theme-lightPurple flex items-center"
        :class="{ 'hidden-check': isActive === false }"
      >
        <span v-if="!$data.isAssign">Attribuer à quelqu'un</span>
      </div>
      <div
        class="absolute flex justify-center right-0 top-0 bottom-0 w-10 bg-theme-light rounded-lg"
        :class="{ 'hidden-check': isActive === false }"
      >
        <div class="text-blue-50 font-bold font text-3xl text-before">
          <div
            v-if="!$data.isAssign && !$data.listOfCharacterOpen"
            class="add-button"
            @click="displayPlayerList"
          >
            +
          </div>
          <span v-if="$data.listOfCharacterOpen" @click="removeAssignement"
            >-</span
          >
          <div
            v-if="$data.isAssign && !$data.listOfCharacterOpen"
            class="bg-theme-light pl-1 pr-1 rounded-b-lg z-10 avatar h-5/6 w-5/6 mx-auto mt-1"
            @click="displayPlayerList"
          >
            <AvatarImg
              :avatar-name="assignPlayerAvatarComp"
              avatar-type="portrait"
            />
          </div>
        </div>
        <div
          class="absolute top-8 bg-theme-light pl-1 pr-1 pt-1.5 rounded-b-lg z-10"
          :class="{ hidden: listOfCharacterOpen === false }"
        >
          <div
            v-for="player in players"
            :key="player.id"
            class="avatar w-8"
            @click="queueNewAssignement(player.id, player.avatar)"
          >
            <AvatarImg :avatar-name="player.avatar" avatar-type="portrait" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MissionControlLine',
  props: {
    mission: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      isActive: false,
      listOfCharacterOpen: false,
      assignPlayerAvatar: 'clomo',
      isAssign: false,
    }
  },
  computed: {
    players() {
      return this.$store.state.apiService.players
    },
    assignPlayerAvatarComp() {
      return this.assignPlayerAvatar
    },
  },
  mounted() {
    this.$data.isActive = this.$props.mission.active
    if (this.$props.mission.assignTo) {
      this.isAssign = true
    }
    if (this.$props.mission.assignTo) {
      this.assignPlayerAvatar = this.$props.mission.assignPlayer.avatar
    }
  },
  methods: {
    addMissionToActive() {
      this.isActive = !this.isActive
      const missionId = this.$props.mission.id
      const active = !this.$props.mission.active
      this.$parent.addToActiveMissionQueue({ missionId, active })
    },
    displayPlayerList() {
      this.listOfCharacterOpen = !this.listOfCharacterOpen
    },
    queueNewAssignement(playerId, playerAvatar) {
      this.assignPlayerAvatar = playerAvatar
      this.isAssign = true
      const missionId = this.$props.mission.id
      this.$parent.addToPlayerAssignQueue({ missionId, playerId })
      this.listOfCharacterOpen = false
    },
    removeAssignement() {
      const missionId = this.$props.mission.id
      const playerId = null
      this.$parent.addToPlayerAssignQueue({ missionId, playerId })
      this.isAssign = false
      this.listOfCharacterOpen = false
    },
  },
}
</script>

<style scoped>
.hidden-check {
  display: none;
}
.avatar {
  margin-bottom: 10px;
  border-radius: 50%;
  border: #13538b 2px solid;
  cursor: pointer;
  transition: all 0.1s;
  overflow: hidden;
  background-color: #fff;
}
.avatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
.add-button {
  padding-top: 5px;
}
</style>
