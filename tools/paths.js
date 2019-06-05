const paths = {
  src: {
    html: 'src/html/**/[^_]*.html',
    css: 'src/sass/styles.scss',
    js: 'src/js/**/*.js',
    images: 'src/img/**/*.{jpg,jpeg,png,gif,webp}',
    icons: 'src/img/icons/**/*.svg',
    fonts: 'src/fonts/**/*.{woff,woff2}'
  },
  watch: {
    html: 'src/html/**/*.html',
    css: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/img/**/*.{jpg,jpeg,png,gif,webp}',
    icons: 'src/img/icons/**/*.svg',
    fonts: 'src/fonts/**/*.{woff,woff2}'
  },
  dist: {
    html: 'dist',
    css: 'dist/css',
    js: 'dist/js',
    images: 'dist/img',
    fonts: 'dist/fonts'
  }
}

module.exports = paths