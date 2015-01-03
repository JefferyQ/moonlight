var
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-minify-css'),
  config = require('../config').vendors,
  buildMode = require('../config').buildMode,
  dist = require('../config').dist,
  PACKAGE = require('../../package.json')
  ;


gulp.task('vendors', function() {
  gulp.src(config.css.src)
    .pipe(concat(config.css.outputNameMinified))
    .pipe(minify())
    .pipe(gulp.dest(config.css.dest))
  gulp.src(config.js.src)
    .pipe(concat(config.js.outputNameMinified))
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest))
  gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest))
});
