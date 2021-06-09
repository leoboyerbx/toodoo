<template>
  <div class="fullscreen">
    <img
      class="h-screen w-screen object-cover object-center"
      :src="require('assets/img/assets-onboarding/screen4/ecran_4.svg')"
      alt=""
    />
    <img
      class="vinou absolute"
      :src="require('assets/img/assets-onboarding/screen4/vinou.svg')"
      alt=""
    />
    <img
      class="boun absolute"
      :src="require('assets/img/assets-onboarding/screen4/boun.svg')"
      alt=""
    />
    <img
      class="lyo absolute"
      :src="require('assets/img/assets-onboarding/screen4/lyo.svg')"
      alt=""
    />
    <img
      class="maylo absolute"
      :src="require('assets/img/assets-onboarding/screen4/maylo.svg')"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'OnboardingFourthScreen',
}
</script>

<style scoped>
.vinou {
  left: 30px;
  bottom: 20vh;
}
.boun {
  left: 110px;
  bottom: 17vh;
}
.lyo {
  left: -25px;
  bottom: 18vh;
}
.maylo {
  left: -70px;
  bottom: 15vh;
}
</style>
