<template>
  <div class="fullscreen flex items-center">
    <div class="onBoarding-shape-container">
      <img
        src="~assets/img/assets-onboarding/shape/shape1.svg"
        alt=""
        class="onBoarding-shape-content"
      />
    </div>
    <div class="content w-screen max-w-2xl mx-auto">
      <div class="title text-white font-display text-2xl">Nom de la team</div>
      <input
        v-model="newTeamName"
        class="max-w-3xl w-full mt-5 flex flex-row flex-nowrap justify-between rounded-lg bg-white pt-2.5 pb-1 pl-3 border-pink h-12"
        placeholder="Le nom de votre équipe..."
      />
      <div class="buttton-line justify-end flex mt-8">
        <div
          class="button bg-pink text-white font-display rounded-3xl text-2xl pt-4 pb-4 pr-7 pl-7 w-48 text-center"
          @click="saveNameTeam"
        >
          Valider
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamName',
  data() {
    return {
      newTeamName: '',
    }
  },
  methods: {
    saveNameTeam() {
      this.$store.dispatch('apiService/setTeam', {
        team: { name: this.newTeamName },
      })
      this.$router.push('/onboarding/addPlayer')
    },
  },
}
</script>

<style scoped>
.content {
  transform: translateY(-30px);
}
</style>
