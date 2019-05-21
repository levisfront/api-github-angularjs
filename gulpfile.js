/*========================
  Variables Dependencies
======================== */
const gulp         = require('gulp'),
      runSequence  = require('run-sequence'),
      concat       = require('gulp-concat'),
      bs           = require('browser-sync').create(),
      watch        = require('gulp-watch'),
      cache        = require('gulp-cached'),
      postcss      = require('gulp-postcss'),
      cssnext      = require('postcss-cssnext'),
      sass         = require('gulp-sass'),
      sourcemaps   = require('gulp-sourcemaps'),
      depsOrder    = require('gulp-deps-order'),
      paths        = require('./gulp.paths.json');
/*========================
  browser sync
======================== */
gulp.task('sync', () =>
  bs.init({
      server: {
          baseDir: "./dist"
      }
  })
)
/*========================
  cielo css
======================== */
gulp.task('css', () =>
    gulp.src( paths.src.css.files )
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(sourcemaps.write( '.' ))
      .pipe(gulp.dest( paths.dest.css ))
      .pipe(bs.stream())
)
/*========================
  cielo js
======================== */
gulp.task('js', () =>
  gulp.src( paths.src.js )
    .pipe(depsOrder())
    .pipe(concat('script.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest( paths.dest.js ))
    .pipe(bs.stream())
)
/*========================
  cielo html
======================== */
gulp.task('html', () =>
  gulp.src( paths.src.views.files )
    .pipe(gulp.dest( paths.dest.views ))
    .pipe(bs.stream())
)
/*========================
  cielo watch
======================== */
gulp.task('watch', () => {
  watch(paths.src.views.watch, () => gulp.start('html'))
  watch(paths.src.css.watch, () => gulp.start('css'))
  watch(paths.src.js, () => gulp.start('js'))
})
/*========================
  cielo tasks default
======================== */
gulp.task('webserver', ['sync', 'watch'])
gulp.task('build', ['html', 'css', 'js'])
gulp.task('default', () => runSequence('build', 'webserver'))
