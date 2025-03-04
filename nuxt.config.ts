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
  // echo: {
  //   broadcaster: 'pusher',
  //   host: 'localhost',
  //   key: 'e3060d09ca004eeff12d',
  //   cluster: 'ap1',
  //   port: 8080,
  //   scheme: 'https',
  //   transports: ['ws', 'wss'],

  //   // authentication: {
  //   //   mode: 'cookie',
  //   //   baseUrl: 'http://localhost:80',
  //   //   authEndpoint: '/broadcasting/auth',
  //   //   csrfEndpoint: '/sanctum/csrf-cookie',
  //   //   csrfCookie: 'XSRF-TOKEN',
  //   //   csrfHeader: 'X-XSRF-TOKEN',
  //   // },
  //   logLevel: 3,
  //   properties: undefined,
  // },
  /**
   * Key hoang anh
   */
  // echo: {
  //   broadcaster: 'pusher',
  //   key: '164f84f4be1929fae865', 
  //   cluster: 'ap1',
  //   host: '127.0.0.1', 
  //   port: 6001,
  //   scheme: 'https',
  //   transports: ['websocket'],
  // },

  echo: {
    broadcaster: 'reverb',
    key: 'r6f2xqvoz9942lfwjser',
    host: 'alphacinema.me',
    port: 8080,
    scheme: 'http',
    transports: ['ws'],
    properties: {
      encrypted: true,
      rejectUnauthorized: false,
    },
  },

  // echo: {
  //   broadcaster: 'pusher',          // ✅ Dùng 'pusher' vì laravel-websockets tương thích
  //   key: '164f84f4be1929fae865',   // ✅ Trùng với PUSHER_APP_KEY trong .env
  //   host: '127.0.0.1',            // ✅ Trỏ đến laravel-websockets
  //   port: 6001,                   // ✅ Port mặc định
  //   scheme: 'https',                 // ✅ Dùng 'http' để khớp với backend local
  //   transports: ['ws', 'wss'],             // ✅ Chỉ dùng WebSocket không an toàn
  //   cluster: 'ap1',

  //   // authentication: {
  //   //   mode: 'cookie',               // ✅ Dùng cookie cho Sanctum
  //   //   baseUrl: 'http://127.0.0.1:8000', // ✅ URL backend local (đổi port nếu khác)
  //   //   authEndpoint: '/broadcasting/auth',
  //   //   csrfEndpoint: '/sanctum/csrf-cookie',
  //   //   csrfCookie: 'XSRF-TOKEN',
  //   //   csrfHeader: 'X-XSRF-TOKEN',
  //   // },

  //   // logLevel: 2,                    // ✅ Giảm log để tối ưu
  //   // properties: {},                 // ✅ Dùng object rỗng thay vì undefined
  // },

  // echo: {
  //   broadcaster: "pusher",
  //   key: "164f84f4be1929fae865",
  //   host: "alphacinema.me",
  //   port: 6001,
  //   cluster: 'mt1',
  //   scheme: "https", // Dùng "https" nếu server có SSL
  //   transports: ["ws", "wss"], // Chỉ sử dụng WebSocket
  // },


  vite: {
    optimizeDeps: {
      include: ['pusher-js']
    }
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})