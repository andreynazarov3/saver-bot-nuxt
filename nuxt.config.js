module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tell The World',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' }
    ],
      script: [
          { src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js' },
          { src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js' }
      ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

}