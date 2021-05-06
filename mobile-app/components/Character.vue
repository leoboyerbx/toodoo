<template>
  <div
    class="character absolute top-0 left-0 z-15 pointer-events-none"
    :style="{
      top: `calc(${position.y}% + 3%)`,
      left: `calc(${position.x}% - 0.1%)`,
    }"
  >
    <img :src="require(`assets/img/avatars/${url}`)" alt="" />
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
