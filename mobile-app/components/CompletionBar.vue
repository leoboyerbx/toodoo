<template>
  <div class="container">
    <div class="dot" :v-for="n in 7"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'CompletionBar',
}
</script>

<style scoped>
.line {
  width: 605px;
  height: 1px;
  background-color: #ffffff;
}
</style>
