<template>
  <div>Ici la carte interactive de {{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Vincent',
    },
  },
}
</script>
