// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vee-validate/nuxt',
    'nuxt-svgo',
    'vue-sonner/nuxt',
    'nuxt-lodash',
    '@ant-design-vue/nuxt',
    'nuxt-laravel-echo'
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Alpha Cinema',
      meta: [
        { name: 'description', content: 'Online Ticket Booking Website' },
        { name: 'keywords', content: 'ticket, booking, online' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/theme/img/favicon.png' },
        { rel: 'stylesheet', href: '/theme/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/theme/css/fontawesome.min.css' },
        { rel: 'stylesheet', href: '/theme/css/animate.css' },
        { rel: 'stylesheet', href: '/theme/css/magnific-popup.css' },
        { rel: 'stylesheet', href: '/theme/css/odometer.css' },
        { rel: 'stylesheet', href: '/theme/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/theme/css/owl.theme.default.min.css' },
        { rel: 'stylesheet', href: '/theme/css/nice-select.css' },
        { rel: 'stylesheet', href: '/theme/css/jquery.animatedheadline.css' },
        { rel: 'stylesheet', href: '/theme/css/style.css' }
      ],
      script: [
        { src: '/theme/js/jquery-3.6.0.min.js', defer: true },
        { src: '/theme/js/modernizr-3.6.0.min.js', defer: true },
        { src: '/theme/js/plugins.js', defer: true },
        { src: '/theme/js/bootstrap.bundle.min.js', defer: true },
        { src: '/theme/js/heandline.js', defer: true },
        { src: '/theme/js/isotope.pkgd.min.js', defer: true },
        { src: '/theme/js/magnific-popup.min.js', defer: true },
        { src: '/theme/js/owl.carousel.min.js', defer: true },
        { src: '/theme/js/wow.min.js', defer: true },
        { src: '/theme/js/countdown.min.js', defer: true },
        { src: '/theme/js/odometer.min.js', defer: true },
        { src: '/theme/js/viewport.jquery.js', defer: true },
        { src: '/theme/js/nice-select.js', defer: true },
        { src: '/theme/js/main.js', defer: true }
      ]
    }
  },
  echo: {
    broadcaster: 'pusher', // available: reverb, pusher
    host: 'localhost',
    key: 'e3060d09ca004eeff12d',
    cluster: 'ap1',
    port: 8080,
    scheme: 'https', // available: http, https
    transports: ['ws', 'wss'],
    // authentication: {
    //   mode: 'cookie',
    //   baseUrl: 'http://localhost:80',
    //   authEndpoint: '/broadcasting/auth',
    //   csrfEndpoint: '/sanctum/csrf-cookie',
    //   csrfCookie: 'XSRF-TOKEN',
    //   csrfHeader: 'X-XSRF-TOKEN',
    // },
    logLevel: 3,
    properties: undefined,
  },
  vite: {
    optimizeDeps: {
      include: ['pusher-js']
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})