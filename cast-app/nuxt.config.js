import io from '../common/io.config'

const nodeEnv = process.env.NODE_ENV
let publicRuntimeConfig
if (nodeEnv === 'tunnel') {
  publicRuntimeConfig = {
    API_URL: 'https://apivert.tn.leoboyer.dev',
    baseUrl: 'https://cast.tn.leoboyer.dev',
  }
} else if (nodeEnv === 'dev') {
  publicRuntimeConfig = {
    API_URL: 'http://localhost:7554',
    baseUrl: 'http://localhost:3000',
    devPair: true,
  }
} else if (nodeEnv === 'lan') {
  const ip = process.env.IP
  publicRuntimeConfig = {
    API_URL: `http://${ip}:7554`,
    baseUrl: `http://${ip}:3001`,
    devPair: true,
  }
} else {
  publicRuntimeConfig = {
    API_URL: 'https://api.toodoo.games',
    baseUrl: 'https://boss.toodoo.games',
  }
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  publicRuntimeConfig,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cast-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        hid: 'cast',
        src:
          'https://www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js',
        defer: false,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/layouts/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-unicons.js', mode: 'client' },
    { src: '~/plugins/socketio-setup.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-socket-io'],
  io: io(publicRuntimeConfig.API_URL),
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 3001, // Port différend de l'app mobile pour pouvoir avoir les 2 à la fois
    host: '0', // on ouvre le serveur de dev au réseau local
  },
}
