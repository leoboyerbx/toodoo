<template>
  <foreignObject
    class="character"
    :style="`transform: translateX(${position.x - 0.45 + '%'}) translateY(${
      position.y - 5 + '%'
    });`"
    height="150"
    width="150"
    transform-origin="100% 50%"
  >
    <img
      class="absolute z-15 pointer-events-none"
      :src="require(`assets/img/avatars/${url}`)"
      alt=""
      xmlns="http://www.w3.org/1999/xhtml"
    />
  </foreignObject>
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
  transition: 1s ease-in-out;
}
</style>
