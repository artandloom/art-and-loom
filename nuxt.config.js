// Updaate nuxt
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
        content: 'Custom Bespoke Rugs, designed in Miami, by Samantha Gallacher, crafted in India and Nepal. We ship everywhere!',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/kng2flj.css' },
      { rel: 'preconnect', href: 'https://use.typekit.net', crossorigin: true },
      { rel: 'dns-prefetch', href: 'https://use.typekit.net' },
      { rel: 'preconnect', href: 'https://cdn.lightwidget.com' },
      { rel: 'dns-prefetch', href: 'https://cdn.lightwidget.com' },
    ],
  },
  serverMiddleware: {
    '/api': '~/api'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/device', mode: 'server' },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    '~/plugins/nuxt-axios.js',
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
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Environments variables
  env: {
    baseUrl: 'https://admin.artandloom.com/art-and-loom/items'
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
  googleAnalytics: {
    id: 'UA-84355925-8'
  }
};
