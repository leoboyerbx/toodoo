<template>
  <div
    class="character"
    :style="{
      top: `${position.y}%`,
      left: `${position.x}%`,
    }"
  >
    <img :src="require(`~/assets/img/${url}`)" alt="" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    position: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.character {
  width: 50px;
  top: 0;
  left: 0;
  transition: 1s ease-in-out;
  @apply absolute;
}
</style>
