import { defineNuxtConfig } from 'nuxt3'
import path from 'path'

export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: false,
    css: [
        '@scss/style.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@scss/override-variables";'
                }
            }
        },
        optimizeDeps: {
            include: [
                'lottie-web',
                'prismjs'
            ]
        },
        resolve: {
            alias: {
                '@scss': path.join(__dirname, 'src/assets/scss'),
                '@sparrow': '@glamseam/sparrow'
            }
        }
    }
})
