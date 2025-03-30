// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

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
    'nuxt-lucide-icons',
    '@primevue/nuxt-module',
    'nuxt-marquee',
    'nuxt-auth-sanctum',
  ],
  primevue: {
    autoImport: false,
    components: {
      prefix: 'Prime',
      include: ['Button', 'DataTable', 'InputOtp']
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }
  },
  lucide: {
    namePrefix: 'Lux'
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
      BackEndUrl: process.env.NUXT_URL_ADMIN
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
        { rel: 'icon', type: 'image/x-icon', href: '/logo-alphacinema.svg' },
      ]
    }
  },
  echo: {
    broadcaster: 'reverb',
    key: process.env.NUXT_ECHO_KEY,
    host: process.env.NUXT_ECHO_HOST,
    port: 8080,
    scheme: 'http',
    transports: ['ws'],
    properties: {
      encrypted: true,
      rejectUnauthorized: false,
    },
    authentication: {
      mode: 'token',
      baseUrl: 'https://alphacinema.me',
      authEndpoint: '/broadcasting/auth',
      csrfEndpoint: '/sanctum/csrf-cookie',
      csrfCookie: 'XSRF-TOKEN',
      csrfHeader: 'X-XSRF-TOKEN',
    }
  },
  // sanctum: {
  //   baseUrl: 'https://alphacinema.me',
  //   mode: 'token',
  //   endpoints: {
  //     csrf: '/sanctum/csrf-cookie',
  //     login: '/api/v1/signin',
  //     logout: '/logout',
  //     user: '/api/user',
  //   }
  // },
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