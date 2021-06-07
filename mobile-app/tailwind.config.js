const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      display: ['DongwhacaekR'],
      body: ['LeagueSpartan'],
      sans: ['LeagueSpartan'],
    },
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
        darkBlue: '#1f0A62',
        lightPurple: '#b5b1fe',
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
    maxHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
  },
}
