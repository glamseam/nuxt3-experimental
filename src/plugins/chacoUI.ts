import { defineNuxtPlugin } from '#app'
import pluginChacoUI from '@glamseam/chaco-ui/nuxt'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(pluginChacoUI, {
        imgixBaseUrl: 'https://chaco.imgix.net',
        isRipple: true
    })
})
