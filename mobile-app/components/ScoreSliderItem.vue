<template>
  <div class="item-container">
    <div
      class="avatar"
      :style="{
        borderColor: color,
      }"
    >
      <AvatarImg
        :avatar-name="player.avatar"
        avatar-type="portrait"
        @avatar-loaded="color = $event.color"
      />
    </div>
    <div v-if="currentItem" class="text-center text-white mt-5">
      {{ player.name }}
    </div>
  </div>
</template>

<script>
import AvatarImg from '../components/avatar/AvatarImg'
export default {
  name: 'ScoreSliderItem',
  components: { AvatarImg },
  props: {
    player: {
      type: Object,
      require: true,
    },
    currentItem: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      color: '#fff',
    }
  },
}
</script>

<style scoped>
.avatar {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid;
  cursor: pointer;
  transition: all 0.1s;
  background-color: #291d66;
  z-index: 3;
  overflow: hidden;
}
.avatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #291d66;
}
</style>
