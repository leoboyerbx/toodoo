<template>
  <Pin
    v-if="!completed"
    ref="pin"
    :position="position"
    :mission-complete="completed"
    @open="$emit('open', $event)"
  >
    <div class="text-center">
      <span class="font-bold text-xl"> {{ mission.name }} </span> <br />
      <div v-if="!goodAssign">
        Cette mission est attribué à
        <div
          class="bg-theme rounded-3xl z-10 avatar h-12 w-12 mx-auto mt-1 overflow-hidden border-2"
          :style="{
            borderColor: color,
          }"
        >
          <AvatarImg
            :avatar-name="mission.assignPlayer.avatar"
            avatar-type="portrait"
            @avatar-loaded="color = $event.color"
          />
        </div>
      </div>
    </div>
    <button
      v-if="!completed && goodAssign"
      class="flex mx-auto mt-6 rounded-full p-2 bg-theme"
      @click="sendMissionCompletion"
    >
      <unicon name="check" fill="#fff" />
    </button>
  </Pin>
</template>

<script>
import Pin from './Pin'
import AvatarImg from './avatar/AvatarImg'
export default {
  name: 'MissionPin',
  components: { Pin, AvatarImg },
  props: {
    position: {
      type: Object,
      required: true,
    },
    mission: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      completed: false,
      color: '#fff',
    }
  },
  computed: {
    goodAssign() {
      const currentPlayer = this.$store.getters['apiService/currentPlayer']
      if (!currentPlayer || this.mission.assignTo === null) return true
      if (
        this.mission.assignTo ===
        this.$store.getters['apiService/currentPlayer'].id
      ) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    this.mission.missionCompletion.forEach((completion) => {
      const completionDate = new Date(completion.completeDay)
      const currentDate = new Date()
      if (
        completionDate.getDate() === currentDate.getDate() &&
        completionDate.getFullYear() === currentDate.getFullYear()
      ) {
        this.completed = true
      }
    })
  },
  methods: {
    sendMissionCompletion() {
      const currentDate = new Date()
      this.$store.dispatch('apiService/postMissionCompletion', {
        missionId: this.mission.id,
        completeBy: this.$store.getters['apiService/currentPlayer'].id,
        completeDay: currentDate,
      })
      this.$refs.pin.hide()
      this.completed = true
    },
  },
}
</script>

<style scoped>
.avatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
</style>
