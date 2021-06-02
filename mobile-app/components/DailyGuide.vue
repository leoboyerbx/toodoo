<template>
  <div class="daily-guide">
    <img src="~/assets/img/kiki.svg" alt="Kiki le petit nuage" />
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
  top: 5px;
  height: auto;
  width: 200px;
}
.daily-guide img {
  height: auto;
  width: 200px;
  object-fit: cover;
  object-position: center;
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
