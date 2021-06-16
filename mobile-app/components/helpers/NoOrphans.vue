<template>
  <fragment v-html="correctedText"></fragment>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    correctedText() {
      return this.text.replace(/ ([^ ]*) ([^ ]*)$/, ' $1&nbsp;$2')
    },
  },
}
</script>
