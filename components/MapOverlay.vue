<template>
  <div>
    <AvatarList :avatar-array="avatars"></AvatarList>
  </div>
</template>

<script>
export default {
  name: 'MapOverlay',
  data: () => {
    return {
      avatars: [
        {
          name: 'Vincent',
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        },
        {
          name: 'Jojo',
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        },
        {
          name: 'Léo',
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        },
        {
          name: 'Billy',
          avatarUrl:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
