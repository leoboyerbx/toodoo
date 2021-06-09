<template>
  <div class="bg-theme fullscreen">
    <OnboardingTextBox
      class="absolute bottom-5 right-5"
      :text-to-display="textBoxText[screenCounter]"
      @increment-counter="incrementCounter()"
    />
  </div>
</template>

<script>
import OnboardingTextBox from '../components/OnboardingTextBox'
export default {
  components: { OnboardingTextBox },
  data() {
    return {
      screenCounter: 0,
      textBoxText: [
        'Les TooDoos sont des petites créatures fantastiques qui vivent sur 4 îles voisines.',
        'Ils vivent en harmonie et prennent soins les uns des autres. Tous ont des rôles différents, qui leur permettent de s’entraider au sein de leur grande famille.',
        "Un soir une violente tempête fait rage sur l'archipel. Le tonnerre gronde et un vent impressionnant fait débarquer une tonne de poussière sur les îles avec d’étranges créatures...",
        "Les électros ont déversés des tonnes de poussières sur les îles des Toodoos et essayent de rompre l'harmonie qui est au coeur de l'archipel.",
      ],
    }
  },
  methods: {
    incrementCounter() {
      this.screenCounter++
      if (this.screenCounter > 3) {
        // TODO Go to next page
        this.screenCounter = 3
      }
    },
  },
}
</script>

<style scoped></style>
