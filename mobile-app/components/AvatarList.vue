<template>
  <div class="avatar-container">
    <div
      v-for="avatar in avatarArray"
      :key="avatar.id"
      class="avatar"
      :class="{ focus: currentAvatar === avatar }"
      @click="
        currentAvatar = avatar
        returnSelected(avatar)
      "
    >
      <img :src="require(`~/assets/img/${avatar.avatar}`)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarList',
  props: {
    avatarArray: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentAvatar: null,
    }
  },
  methods: {
    returnSelected(avatar) {
      this.$emit('select', avatar)
    },
  },
}
</script>

<style scoped>
.avatar-container {
  margin-left: 10px;
  margin-top: 10px;
}
.avatar {
  height: 55px;
  width: 55px;
  margin-bottom: 10px;
  border-radius: 50%;
  border: #13538b 2px solid;
  cursor: pointer;
  transition: all 0.1s;
  overflow: hidden;
}
.avatar img {
  object-fit: cover;
  object-position: center;
  height: 80px;
  width: 80px;
}
.avatar.focus {
  border: #2583db 4px solid;
}
</style>
