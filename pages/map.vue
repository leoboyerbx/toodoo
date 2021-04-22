<template>
  <div>
    <InteractiveMap></InteractiveMap>
    {{ $store.state.interactiveMap.counter }}
    <button @click="$store.commit('interactiveMap/increment')">Plus</button>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
