<template>
  <div>
    <img
      v-click-outside="hide"
      :src="
        missionComplete
          ? require('~/assets/img/soclefini.svg')
          : require('~/assets/img/socle_violet.png')
      "
      alt=""
      class="pin absolute cursor-pointer mx-auto"
      :style="'top:' + position.y + '%; left:' + position.x + '%'"
      @click="clickPopUp($event)"
    />
    <transition name="slide-fade">
      <div
        v-show="isActive"
        class="pin__content absolute text-theme z-20 p-6 rounded-xl"
        :class="position.y > 20 ? 'pin-top' : 'pin-bottom'"
        :style="
          position.y > 20
            ? 'top: calc(' + position.y + '% - 20px); left:' + position.x + '%'
            : 'top: calc(' +
              position.y +
              '% + 10% + 20px); left:' +
              position.x +
              '%'
        "
      >
        <slot />
      </div>
    </transition>
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
    missionComplete: {
      type: Boolean,
      required: true,
      default: false,
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
  height: 10%;
  /*aspect-ratio: 1 / 1;*/
  transform: translateX(-50%);
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

.pin-top {
  transform: translateY(-100%) translateX(-50%);
}
.pin-bottom {
  transform: translateY(0) translateX(-50%);
}

.slide-fade-enter-active {
  transition: all 0.3s ease 1s;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter.pin-top,
.slide-fade-leave-to.pin-top {
  transform: translateY(-70%) translateX(-50%) scale(0.2);
}
.slide-fade-enter.pin-bottom,
.slide-fade-leave-to.pin-bottom {
  transform: translateY(-30%) translateX(-50%) scale(0.2);
}
</style>
