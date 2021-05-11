<template>
  <foreignObject class="character" height="75" width="50">
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
  },
}
</script>

<style scoped></style>
