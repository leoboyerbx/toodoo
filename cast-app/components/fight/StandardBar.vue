<template>
  <div class="flex flex-col">
    <div class="flex">
      <img :src="icon" alt="" />
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
  },
}
</script>
