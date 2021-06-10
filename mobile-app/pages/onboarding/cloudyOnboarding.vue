<template>
  <div class="gradient-bg h-screen flex flex-col justify-center">
    <div class="onBoarding-shape-container">
      <img
        src="~assets/img/assets-onboarding/shape/shape6.svg"
        alt=""
        class="onBoarding-shape-content"
      />
    </div>

    <img
      src="~assets/img/kiki.svg"
      alt="Kiki le petit nuage"
      class="w-1/3 mx-auto mb-6 daily-guide"
    />
    <OnboardingTextBox
      v-show="!showLast"
      class="mx-auto z-10"
      :text-to-display="textBoxText[screenCounter]"
      @increment-counter="incrementCounter()"
    />
    <div v-show="showLast" class="flex flex-col items-center">
      <p class="font-display text-3xl text-white">L’aventure va commencer !</p>
      <button class="w-16 h-16 bg-white rounded-full mt-12">
        <unicon
          name="arrow-right"
          fill="#AE91FF"
          width="50px"
          height="50px"
          style="transform: translateY(4px)"
          @click="$router.push('/map')"
        />
      </button>
    </div>
  </div>
</template>

<script>
import OnboardingTextBox from '../../components/OnboardingTextBox'
export default {
  name: 'cloudyOnboarding.vue',

  components: { OnboardingTextBox },
  data() {
    return {
      screenCounter: 0,
      showLast: false,
      textBoxText: [
        `Salut ${this.$store.state.apiService.team.name} ! Moi c’est Cloudy, je serai votre guide tout au long de l’aventure !`,
        'Nous allons passer 1 mois ensemble, alors j’espère que vous êtes déterminés à aider les TooDoos à retrouver la tranquilité sur leurs îles!',
        'Nous allons nous préparer ensemble pour défier les Electro à chaque fin de semaine.',
        'Pour cela, il va falloir effectuer des missions qui vous permettront de transformer toute cette poussière en énergie ! Alors j’espère que vous avez la pêche !',
        'Venez me voir chaque jour pour connaître vos missions !',
      ],
    }
  },
  methods: {
    incrementCounter() {
      this.screenCounter++
      if (this.screenCounter > 4) {
        this.showLast = true
        this.screenCounter = 4
      }
    },
  },
}
</script>

<style scoped>
.gradient-bg {
  background: transparent
    linear-gradient(127deg, #1f0a62 0%, #6e62b4 68%, #b5b1fe 100%) 0% 0%
    no-repeat padding-box;
}

button {
  box-shadow: 0px 3px 6px #00000029;
}

.daily-guide {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
