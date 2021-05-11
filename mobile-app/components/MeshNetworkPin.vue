<template>
  <div
    class="mesh--content"
    :style="'top:' + position.y + '%; left:' + position.x + '%'"
  ></div>
</template>

<script>
export default {
  name: 'MeshNetworkPin',
  props: {
    position: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
div {
  height: 20px;
  width: 20px;
  background-color: red;
  z-index: 20;
  /*transform: translateX(-50%);*/
  @apply absolute;
}
</style>
