<template>
  <div class="bg-white rounded-lg flex">
    {{ capability.name }}
  </div>
</template>
<script>
export default {
  props: {
    capability: {
      type: Object,
      required: true,
    },
  },
}
</script>
