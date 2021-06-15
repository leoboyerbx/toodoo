<template>
  <div class="container">
    <div class="dots-container">
      <div
        v-for="n in 7"
        :key="n"
        class="dot"
        :class="{ active: n <= currentDay }"
      ></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompletionBar',
  data() {
    return {
      currentDay: 1,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.line {
  width: 605px;
  height: 1px;
  background-color: #ffffff;
  position: absolute;
  transform: translateY(9.5px);
  z-index: 1;
}
.dots-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 605px;
  position: relative;
}
.dot {
  width: 19px;
  height: 19px;
  background-color: #fff;
  border-radius: 50%;
  border: solid 1px #ffffff;
  z-index: 2;
}
.dot.active {
  background-color: #fd797a;
}
</style>
