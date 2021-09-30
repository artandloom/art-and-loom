export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // SSR: https://go.nuxtjs.dev/config-target
  ssr: true,

  // Global App headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Art & Loom | Interior Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is an awesome description of my Nuxt app',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/kng2flj.css' },
      { rel: 'preconnect', href: 'https://use.typekit.net', crossorigin: true },
      { rel: 'dns-prefetch', href: 'https://use.typekit.net' },
    ],
  },
  serverMiddleware: [
    { path: '/api/ping', handler: '~/api/ping.js' },
    { path: '/api/states', handler: '~/api/states.js' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  css: [
    // swiper style
    'swiper/swiper-bundle.css',
    '@/assets/css/global.css'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Environments variables
  env: {
    baseUrl: 'https://art-and-loom-admin.thinkapp.dev/art-and-loom/items'
  },

  googleFonts: {
    /* module options */
    families: {
      Barlow: {
        wght: [200]
      },
    },
    display: 'swap'
  },
  server: {
    host: '0.0.0.0', // default: localhost
  },
};
