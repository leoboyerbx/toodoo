<template>
  <div class="fullscreen">
    <img
      class="h-screen w-screen object-cover object-center"
      :src="require('assets/img/assets-onboarding/screen1/ecran_1.svg')"
      alt=""
    />
    <img
      class="vinou"
      :src="require('assets/img/assets-onboarding/screen1/vinou.svg')"
      alt=""
    />
    <img
      class="clomo"
      :src="require('assets/img/assets-onboarding/screen1/clomo.svg')"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'OnboardingFirstScreen',
}
</script>

<style scoped>
.vinou {
  position: absolute;
  height: 60vh;
  animation: vinouAnimation;
  animation-duration: 5s;
  left: -3vh;
  bottom: -6vh;
  transform: translateY(-3px) translateX(30px);
}
.clomo {
  position: absolute;
  height: 40vh;
  right: -10vh;
  bottom: 5vh;
  animation: clomoAnimation;
  animation-duration: 8s;
  transform: translateY(-3px) translateX(-30px);
}

@keyframes vinouAnimation {
  0% {
    transform: translateY(-3px) translateX(-80px);
  }
  5% {
    transform: translateY(0) translateX(-75px);
  }
  10% {
    transform: translateY(-3px) translateX(-70px);
  }
  15% {
    transform: translateY(0) translateX(-65px);
  }
  20% {
    transform: translateY(-3px) translateX(-60px);
  }
  15% {
    transform: translateY(0) translateX(-55px);
  }
  20% {
    transform: translateY(-3px) translateX(-50px);
  }
  25% {
    transform: translateY(0) translateX(-45px);
  }
  30% {
    transform: translateY(-3px) translateX(-40px);
  }
  35% {
    transform: translateY(0) translateX(-35px);
  }
  40% {
    transform: translateY(-3px) translateX(-30px);
  }
  45% {
    transform: translateY(0) translateX(-25px);
  }
  50% {
    transform: translateY(-3px) translateX(-20px);
  }
  55% {
    transform: translateY(0) translateX(-15px);
  }
  60% {
    transform: translateY(-3px) translateX(-10px);
  }
  65% {
    transform: translateY(0) translateX(-5px);
  }
  70% {
    transform: translateY(-3px) translateX(0px);
  }
  75% {
    transform: translateY(0) translateX(5px);
  }
  80% {
    transform: translateY(-3px) translateX(10px);
  }
  85% {
    transform: translateY(0) translateX(15px);
  }
  90% {
    transform: translateY(-3px) translateX(20px);
  }
  95% {
    transform: translateY(0) translateX(25px);
  }
  100% {
    transform: translateY(-3px) translateX(30px);
  }
}

@keyframes clomoAnimation {
  0% {
    transform: translateY(-3px) translateX(100px);
  }
  22% {
    transform: translateY(-3px) translateX(1000px);
  }
  25% {
    transform: translateY(0) translateX(95px);
  }
  28% {
    transform: translateY(-3px) translateX(90px);
  }
  31% {
    transform: translateY(0) translateX(85px);
  }
  34% {
    transform: translateY(-3px) translateX(80px);
  }
  37% {
    transform: translateY(0) translateX(75px);
  }
  40% {
    transform: translateY(-3px) translateX(70px);
  }
  43% {
    transform: translateY(0) translateX(65px);
  }
  46% {
    transform: translateY(-3px) translateX(60px);
  }
  49% {
    transform: translateY(0) translateX(55px);
  }
  52% {
    transform: translateY(-3px) translateX(50px);
  }
  55% {
    transform: translateY(0) translateX(45px);
  }
  58% {
    transform: translateY(-3px) translateX(40px);
  }
  61% {
    transform: translateY(0) translateX(35px);
  }
  64% {
    transform: translateY(-3px) translateX(30px);
  }
  67% {
    transform: translateY(0) translateX(25px);
  }
  70% {
    transform: translateY(-3px) translateX(20px);
  }
  73% {
    transform: translateY(0) translateX(15px);
  }
  76% {
    transform: translateY(-3px) translateX(10px);
  }
  79% {
    transform: translateY(0) translateX(5px);
  }
  82% {
    transform: translateY(-3px) translateX(0px);
  }
  85% {
    transform: translateY(0) translateX(-5px);
  }
  88% {
    transform: translateY(-3px) translateX(-10px);
  }
  91% {
    transform: translateY(0) translateX(-15px);
  }
  94% {
    transform: translateY(-3px) translateX(-20px);
  }
  97% {
    transform: translateY(0) translateX(-25px);
  }
  100% {
    transform: translateY(-3px) translateX(-30px);
  }
}
</style>
