<template>
  <div>Là y'aura le cast</div>
</template>
<script>
export default {
  beforeCreate() {
    this.$nuxtSocket({
      name: 'game-sync',
      persist: true,
    })
  },
}
</script>
