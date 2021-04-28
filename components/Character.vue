<template>
  <div class="character">
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
  },
}
</script>

<style scoped>
.character {
  width: 50px;
  top: 0;
  left: 0;
  transition: transform 1s ease-in-out;
  @apply absolute;
}
</style>
