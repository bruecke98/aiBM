// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    modules: [
        'nuxt-icon', 
        '@pinia/nuxt',
        // '@nuxt/devtools',
        '@nuxtjs/supabase',
    ],
    plugins: [
        { src: './plugins/oruga.js' },
    ],
    runtimeConfig: {
        supabaseKey: process.env.SUPABASE_KEY,

        private: {
            stripePK: process.env.STRIPE_PK,
        },
        public: {
            appDomain: process.env.APP_DOMAIN,
        }
    },
    pinia: {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    }
})
