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
        light: '#AE91FF',
        DEFAULT: '#552088',
        dark: '#1F0A62',
      },
    },
    zIndex: {
      0: 0,
      10: 10,
      12: 12,
      15: 15,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      '-1': '-1',
    },
  },
}
