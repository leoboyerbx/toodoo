<template>
  <image
    :xlink:href="require(`assets/img/avatars/${url}`)"
    x="0"
    y="0"
    width="110"
    height="110"
    :transform="`translate(${position.x}, ${position.y})`"
  ></image>
  <!--  <foreignObject-->
  <!--    class="character"-->
  <!--    height="110"-->
  <!--    width="110"-->
  <!--    transform-origin="100% 50%"-->
  <!--  >-->
  <!--    &lt;!&ndash;    :style="`transform: translateX(${position.x - 0.45 + '%'}) translateY(${&ndash;&gt;-->
  <!--    &lt;!&ndash;    position.y - 5 + '%'&ndash;&gt;-->
  <!--    &lt;!&ndash;    });`"&ndash;&gt;-->
  <!--    <img-->
  <!--      class="absolute z-15 pointer-events-none"-->
  <!--      :src="require(`assets/img/avatars/${url}`)"-->
  <!--      alt=""-->
  <!--      xmlns="http://www.w3.org/1999/xhtml"-->
  <!--    />-->
  <!--  </foreignObject>-->
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
  watch: {
    timeline(newVal) {
      console.log(newVal)
    },
  },
}
</script>

<style scoped>
.character {
  transition: 1s ease-in-out;
}
</style>
