<template>
  <div class="flex flex-col w-64 text-lg">
    <div class="flex">
      <img :src="require(`~/assets/img/${icon}`)" alt="" class="w-5" />
      <span class="text-white font-bold ml-2">{{ name }}</span>
    </div>
    <div class="ml-6 w-56 my-3">
      <SmallBar :max-value="maxValue" :value="value" :color="color" />
    </div>
    <div class="ml-auto mt-2 font-bold text-white">
      {{ value }} / {{ maxValue }}
    </div>
  </div>
</template>

<script>
import SmallBar from './SmallBar'
export default {
  components: { SmallBar },
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    value: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
