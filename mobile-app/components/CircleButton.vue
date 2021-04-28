<template>
  <div class="circle-button">
    <img :src="iconUrl" :alt="iconAlt" />
  </div>
</template>

<script>
export default {
  name: 'CircleButton',
  props: {
    iconUrl: {
      type: String,
      default: '@/assets/ionic-md-stats.png',
    },
    iconAlt: {
      type: String,
      default: 'Texte alternatif',
    },
  },
}
</script>

<style scoped>
.circle-button {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  border: #2583db 2px solid;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
}
.circle-button:hover {
  transition: all 0.2s;
  border: #2583db 4px solid;
}
.circle-button img {
  object-fit: contain;
  object-position: center;
  height: 25px;
  width: 25px;
  margin: 15px auto;
}
</style>
