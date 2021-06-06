class Haptic {
  constructor() {
    this.available = 'vibrate' in navigator
  }

  vibrate(pattern) {
    if (!this.available) return
    navigator.vibrate(pattern)
  }
}

export default new Haptic()
