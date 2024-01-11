// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/main.css'],
    modules: ['@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Inter: [500, 700],
        }
    }
})
