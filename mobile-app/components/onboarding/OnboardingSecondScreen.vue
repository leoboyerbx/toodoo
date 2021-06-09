<template>
  <div>
    <img
      class="h-screen w-screen object-cover object-center"
      :src="require('assets/img/assets-onboarding/screen2/ecran_2.svg')"
      alt=""
    />
    <img
      class="vinou"
      :src="require('assets/img/assets-onboarding/screen2/vinou.svg')"
      alt=""
    />
    <img
      class="maylo"
      :src="require('assets/img/assets-onboarding/screen2/maylo.svg')"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'OnboardingSecondScreen',
}
</script>

<style scoped>
.vinou,
.maylo {
  position: absolute;
  height: 25vh;
  animation-name: jump;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.13, -0.15, 0.61, 0.7);
}

.maylo {
  left: 30vh;
  top: 25vh;
  animation-duration: 2.8s;
}
.vinou {
  animation-delay: 0.2s;
  left: 46vh;
  top: 28vh;
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
