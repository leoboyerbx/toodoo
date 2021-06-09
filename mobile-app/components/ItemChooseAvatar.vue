<template>
  <div class="relative" :class="{ selected: isSelected }" @click="beSelected">
    <AvatarImg
      :avatar-name="avatarName.toLowerCase()"
      avatar-type="character"
      class="h-72 object-cover object-center"
    />
    <div class="name absolute bottom-8 left-0 right-0 text-center text-white">
      {{ avatarName }}
    </div>
  </div>
</template>

<script>
import AvatarImg from '../components/avatar/AvatarImg'

export default {
  name: 'ItemChooseAvatar',
  components: { AvatarImg },
  props: {
    avatarName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    beSelected() {
      this.isSelected = !this.isSelected
    },
  },
}
</script>

<style scoped>
.selected::after {
  content: '';
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  border: solid 1px #fff;
}
</style>
