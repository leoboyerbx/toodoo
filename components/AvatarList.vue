<template>
  <div class="avatar-container">
    <div
      v-for="avatar in avatarArray"
      :key="avatar.name"
      class="avatar"
      @click="makeAvatarCurrent($event)"
    >
      <img :src="avatar.avatarUrl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarList',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    avatarArray: {
      type: Array,
    },
  },
  methods: {
    makeAvatarCurrent: (event) => {
      document.querySelectorAll('.avatar').forEach((element) => {
        element.classList.remove('focus')
      })
      event.path[1].classList.toggle('focus')
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
  height: 55px;
  width: 55px;
}
.avatar.focus {
  border: #2583db 4px solid;
}
</style>
