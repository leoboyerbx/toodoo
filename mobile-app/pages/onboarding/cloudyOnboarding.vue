<template>
  <div class="bg-theme-dark h-screen flex flex-col justify-center">
    <img
      src="~/assets/img/kiki.svg"
      alt="Kiki le petit nuage"
      class="w-1/3 mx-auto mb-6"
    />
    <OnboardingTextBox
      class="mx-auto z-10"
      :text-to-display="textBoxText[screenCounter]"
      @increment-counter="incrementCounter()"
    />
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
      textBoxText: [
        'Salut Happy Family ! Moi c’est Cloudy, je serai votre guide tout au long de l’aventure !',
        'Nous allons passer 1 mois ensemble, alors j’espère que vous êtes déterminés à aider les TooDoo à retrouver la tranquilité sur leurs îles!',
        'Nous allons nous préparer ensemble pour défier les Electro à chaque fin de semaine.',
        'Pour cela il va falloir effectuer des missions qui vous permettront de transformer toute cette poussière en énergie ! Alors j’espère que vous avez la pêche !',
        'Venez me voir chaque jour pour connaître vos missions !',
      ],
    }
  },
  methods: {
    incrementCounter() {
      this.screenCounter++
      if (this.screenCounter > 4) {
        this.$router.push('/map')
        this.screenCounter = 4
      }
    },
  },
}
</script>

<style scoped></style>
