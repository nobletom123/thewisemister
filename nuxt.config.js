
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cheap Flights Worldwide | The Wise Miser',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Wise Miser are experts in finding cheap flights, search and book online.' }
    ],
    script: [
      { src: "https://kit.fontawesome.com/022af6abb5.js", crossorigin: "anonymous"},
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
    'bulma',
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/v-calendar', ssr: false},
    { src: "@/plugins/vClickOutside", ssr: false },
    { src: '~plugins/vue-scrollto.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
  ],
  styleResources: {
   // your settings here
   scss: ['@/assets/scss/main.scss']
 },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
