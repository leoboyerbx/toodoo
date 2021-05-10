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
    const options = new window.cast.framework.CastReceiverOptions()
    options.disableIdleTimeout = true
    context.start(options)
  },
}
</script>
