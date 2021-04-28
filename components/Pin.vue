<template>
  <div class="pin">
    <span
      class="pin__marker"
      :style="'top:' + position.y + 'px; left:' + position.x + 'px'"
      @click="clickPopUp($event)"
    ></span>
    <div
      class="pin__content"
      :style="'top:' + position.y + 'px; left:' + (position.x + 30) + 'px'"
      :class="{ active: isActive }"
    >
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pin',

  props: {
    text: {
      type: String,
      required: true,
    },
    position: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isActive: false,
    }
  },

  methods: {
    clickPopUp(event) {
      this.isActive = !this.isActive
      this.$emit(this.isActive ? 'open' : 'close')
    },
  },
}
</script>

<style scoped>
.pin__marker {
  width: 30px;
  height: 30px;
  background-color: red;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 50px;
  position: absolute;
  cursor: pointer;
}

.pin__content {
  display: none;
  position: absolute;
  border: solid 1px black;
  background-color: white;
  padding: 20px 20px;
}

.pin__content.active {
  display: block;
}
</style>
