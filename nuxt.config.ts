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
    'nuxt-laravel-echo',
    'vue3-carousel-nuxt',
    'nuxt-lucide-icons'
  ],
  lucide: {
    namePrefix: 'Lux'
  },
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

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})