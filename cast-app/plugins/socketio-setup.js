export default (context) => {
  context.$nuxtSocket({
    name: 'game-sync',
    persist: true,
  })
}
