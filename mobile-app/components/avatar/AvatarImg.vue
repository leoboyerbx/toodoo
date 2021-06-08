<template>
  <img
    v-if="avatar"
    :src="require('assets/img/avatars/' + avatar.img[avatarType])"
    alt="avatar"
  />
</template>
<script>
import { getAvatar } from 'common/entities/getEntity'

export default {
  props: {
    avatarName: {
      type: String,
      required: true,
    },
    avatarType: {
      type: String,
      default: 'character',
    },
  },
  data() {
    return {
      avatar: null,
    }
  },
  beforeMount() {
    this.loadAvatar()
  },
  watch: {
    avatarName() {
      this.loadAvatar()
    },
  },
  beforeUpdate() {
    this.loadAvatar()
  },
  methods: {
    async loadAvatar() {
      this.avatar = await getAvatar(this.avatarName)
      this.$emit('avatar-loaded', this.avatar)
    },
  },
}
</script>
