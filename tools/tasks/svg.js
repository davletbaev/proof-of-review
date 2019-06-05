const gulp   = require('gulp')  
const sprite = require('gulp-svg-sprite')
 
const paths = require('../paths')

function processingSvgSprite() {
  return gulp.src(paths.src.icons)
    .pipe(sprite({
      mode: {
          stack: {
              sprite: "../icons.svg"
          }
      },
    }))
    .pipe(gulp.dest(paths.dist.images));
}

module.exports = processingSvgSprite