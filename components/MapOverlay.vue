<template>
  <div>
    <AvatarList :avatar-array="avatars"></AvatarList>
    <CircleButton
      id="stats-btn"
      :icon-url="require(`@/assets/ionic-md-stats.png`)"
      icon-alt="Texte alternatif"
    ></CircleButton>
    <CircleButton
      id="calendar-btn"
      :icon-url="require(`@/assets/awesome-calendar-plus.png`)"
      icon-alt="Texte alternatif"
    ></CircleButton>
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

<style scoped>
#stats-btn,
#calendar-btn {
  position: absolute;
  bottom: 15px;
}
#stats-btn {
  left: 15px;
}
#calendar-btn {
  right: 15px;
}
</style>
