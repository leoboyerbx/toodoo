import { resolve } from 'path'
import io from '../common/io.config'

const nodeEnv = process.env.NODE_ENV
let publicRuntimeConfig
if (nodeEnv === 'tunnel') {
  publicRuntimeConfig = {
    API_URL: 'https://apivert.tn.leoboyer.dev',
    baseUrl: 'https://vert.tn.leoboyer.dev',
  }
} else if (nodeEnv === 'dev') {
  publicRuntimeConfig = {
    API_URL: 'http://localhost:7554',
    baseUrl: 'http://localhost:3002',
    // devPair: true,
  }
} else if (nodeEnv === 'lan') {
  const ip = process.env.IP
  publicRuntimeConfig = {
    API_URL: `http://${ip}:7554`,
    baseUrl: `http://${ip}:3002`,
    devPair: true,
  }
} else {
  publicRuntimeConfig = {
    API_URL: 'https://api.toodoo.games',
    baseUrl: 'https://app.toodoo.games',
  }
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  publicRuntimeConfig,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Toodoo App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/layouts/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-unicons', mode: 'client' },
    { src: '~/plugins/gsap', mode: 'client' },
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
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-socket-io',
  ],
  io: io(publicRuntimeConfig.API_URL),

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
    },
    meta: {
      description: 'Toodoo App !',
      lang: 'fr',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0', // on ouvre le serveur de dev au réseau local
    port: 3002,
  },
  alias: {
    components: resolve(__dirname, 'components'),
    common: resolve(__dirname, '../common'),
  },
}
