var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  minify = require('gulp-minify-css'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').sass
  ;


gulp.task('sass', function() {
  gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', handleErrors)
    )
    .pipe(concat(config.outputNameMinified))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});
