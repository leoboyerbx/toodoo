<template>
  <div
    class="pin absolute"
    :style="'top:' + position.y + '%; left:' + position.x + '%'"
  >
    <div
      class="pin__marker"
      @click="clickPopUp($event)"
      v-click-outside="hide"
    ></div>
    <div
      class="pin__content"
      :style="'top:' + position.y + '%; left: calc(' + position.x + '% + 30px)'"
      :class="{ active: isActive }"
    >
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

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

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },

  // do not forget this section
  directives: {
    ClickOutside,
  },

  methods: {
    clickPopUp(event) {
      this.isActive = true
      this.$emit('open')
    },

    hide() {
      this.isActive = false
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.pin {
  height: 5%;
  aspect-ratio: 1 / 1;
}
.pin__marker {
  height: 100%;
  width: 100%;
  background-color: red;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 50px;
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
