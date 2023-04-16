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
        '@nuxtjs/supabase'
    ],
    plugins: [
        { src: './plugins/oruga.js' },
    ],
    runtimeConfig: {
        private: {
            stripePK: process.env.STRIPE_PK,
        },
        public: {
            appDomain: process.env.APP_DOMAIN,
        }
    },
})
