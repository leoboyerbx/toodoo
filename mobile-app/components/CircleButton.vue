<template>
  <div class="circle-button">
    <unicon :name="$props.iconName" fill="#4e0b6c" height="30" width="30" />
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
  height: 55px;
  width: 55px;
  border-radius: 50%;
  border: #4e0b6c 2px solid;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-button:hover {
  transition: all 0.2s;
  border: #4e0b6c 4px solid;
}
</style>
