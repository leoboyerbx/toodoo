<template>
  <div
    class="pin absolute"
    :style="'top:' + position.y + '%; left:' + position.x + '%'"
    :class="isActive ? 'z-20' : 'z-10'"
  >
    <div
      v-click-outside="hide"
      class="h-full w-full bg-theme border border-theme-dark box-border cursor-pointer rounded-full relative z-10"
      @click="clickPopUp($event)"
    ></div>
    <div
      class="pin__content hidden absolute right-2/4 text-theme z-20 -translate-y-full p-6 rounded-xl"
      :class="[
        isActive ? 'active' : '',
        position.y > 20 ? 'top-0' : 'bottom-0',
      ]"
      :style="
        position.y > 20
          ? 'transform: translateY(calc(-100% - 20px)) translateX(50%)'
          : 'transform: translateY(calc(100% + 20px)) translateX(50%)'
      "
    >
      <slot />
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Pin',

  // do not forget this section
  directives: {
    ClickOutside,
  },

  props: {
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
  transform: translateY(-50%) translateX(-50%);
}

.pin__content {
  width: 200px;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.8);
}

/*.pin__content::after {*/
/*  content: '';*/
/*  height: 20px;*/
/*  width: 30px;*/
/*  transform: translateY(98%) translateX(-50%);*/
/*  backdrop-filter: blur(10px);*/
/*  background-color: rgba(255, 255, 255, 0.7);*/
/*  @apply absolute block bottom-0 left-2/4 -z-1;*/
/*}*/

.pin__content.active {
  display: block;
}
</style>
