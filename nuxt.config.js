
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Prismist_M' },
      { hid: 'og:url', property: 'og:url', content: 'https://tokiwa.netlify.com' },
      { hid: 'og:title', property: 'og:title', content: 'tokiwa' },
      { hid: 'og:description', property: 'og:description', content: 'IIDX Option Viewer' },
      { hid: 'og:image', property: 'og:image', content: 'https://tokiwa.netlify.com/twitter.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'tokiwa'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.scss'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      name: 'tokiwa',
      title: 'tokiwa',
      lang: 'ja',
      scope: '/',
    }
  }
}
