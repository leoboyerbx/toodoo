<template>
  <div
    class="character absolute top-0 left-0 z-15 pointer-event-none"
    :style="{
      top: `${position.y}%`,
      left: `${position.x}%`,
    }"
  >
    <img :src="require(`assets/img/avatars/${url}`)" alt="" />
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
  transition: 1s ease-in-out;
}
</style>
