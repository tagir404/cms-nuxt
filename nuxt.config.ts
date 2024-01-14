// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/main.css'],
    modules: ['@nuxtjs/google-fonts', 'nuxt-vuefire'],
    googleFonts: {
        families: {
            Inter: [500, 700],
        }
    },
    vuefire: {
        config: {
            apiKey: 'AIzaSyCUR27PxFdQGI2FIUo0upNwxtxW2lmMkZk',
            authDomain: 'air-tickets-cff39.firebaseapp.com',
            databaseURL: 'https://air-tickets-cff39-default-rtdb.firebaseio.com',
            projectId: 'air-tickets-cff39',
            storageBucket: 'air-tickets-cff39.appspot.com',
            messagingSenderId: '767875244352',
            appId: '1:767875244352:web:6a4c48d4ca6640ffb85aa5',
        },
    },
})
