<template>
  <div class="circle-button">
    <img :src="require('assets/img/' + iconName)" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CircleButton',
  props: {
    iconName: {
      type: String,
      default: 'schedule',
    },
  },
}
</script>

<style scoped>
.circle-button {
  height: 75px;
  width: 75px;
  border-radius: 50%;
  border: #4e0b6c 2px solid;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.43);
}

.circle-button img {
  height: 33px;
}
.circle-button:hover {
  transition: all 0.2s;
  border: #4e0b6c 4px solid;
}
</style>
