const gulp  = require('gulp')

const tasks = require('./tools/tasks')

gulp.task('clean', tasks.clean)
gulp.task('views', tasks.views);
gulp.task('styles', tasks.styles);
gulp.task('scripts', tasks.scripts)
gulp.task('images', tasks.images)
gulp.task('fonts', tasks.fonts)
gulp.task('sprite', tasks.sprite)
gulp.task('serve', tasks.serve);

gulp.task('build', gulp.series('clean', gulp.parallel('views', 'styles', 'scripts', 'images', 'sprite', 'fonts')))

gulp.task('default', gulp.series('clean', gulp.parallel('views', 'styles', 'scripts', 'images', 'sprite', 'fonts'), 'serve'))