// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    image: {
        quality: 80,
        format: ['webp'],
        presets: {
            small: {
                modifiers: {
                    format: 'webp',
                    width: 200,
                    height: 200,
                },
            },
        },
    },
});
