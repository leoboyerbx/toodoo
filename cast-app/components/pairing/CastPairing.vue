<template>
  <div class="w-full h-full flex items-center justify-center text-xl">
    Connexion en cours... <br />
  </div>
</template>
<script>
export default {
  mounted() {
    const context = window.cast.framework.CastReceiverContext.getInstance()
    context.addCustomMessageListener(
      'urn:x-cast:com.pnk.poccast',
      (customEvent) => {
        if (customEvent.data.type === 'syncID') {
          this.$emit('pair', customEvent.data.text)
        }
      }
    )
    context.start()
  },
}
</script>
