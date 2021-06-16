function updateForegroundState(commit) {
  commit('setAppForeground', document.visibilityState === 'visible')
}
export default function ({ store }) {
  updateForegroundState(store.commit)
  document.addEventListener('visibilitychange', () => {
    updateForegroundState(store.commit)
  })
}
