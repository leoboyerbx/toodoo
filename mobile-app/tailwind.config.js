const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      theme: {
        light: '#65bbdd',
        DEFAULT: '#319dc4',
        dark: '#1f657e',
      },
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      '-1': '-1',
    },
  },
}
