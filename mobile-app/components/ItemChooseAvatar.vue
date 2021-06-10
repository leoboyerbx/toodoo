<template>
  <div class="relative" :class="{ selected: isSelected }">
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
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {}
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
