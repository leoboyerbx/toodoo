<template>
  <div class="daily-guide">
    <img src="~/assets/img/kiki.svg" alt="Cloudy le petit nuage" />
    <NuxtLink
      to="/ponctual-missions"
      class="link absolute h-24 w-36 top-10 left-5 pointer-events-auto"
    />
  </div>
</template>

<script>
export default {
  name: 'DailyGuide',
}
</script>

<style scoped>
.daily-guide {
  position: absolute;
  height: auto;
  width: 200px;
}
.daily-guide img {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 200px;
  object-fit: cover;
  object-position: center;
  animation: float 6s ease-in-out infinite;
}
.link {
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
