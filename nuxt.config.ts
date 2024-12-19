// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Copy of Hôtel Beau-Rivage Palace - Hôtel 5-étoiles - PIC au Beau-Rivage Palace - Anne Sophie Pic - Lausanne, Suisse',
        },
    },
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
    nitro: {
        prerender: {
            routes: ['/', '/spa', '/restaurants-bars', '/rooms-suites'],
            ignore: ['/rooms/**'],
        },
    },
});
