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


var src = [];
for(var key in PACKAGE.browser) {
  if(!buildMode.dist || dist.pruneVendors.indexOf(key) < 0) {
    src.push(PACKAGE.browser[key]);
  }
}


gulp.task('vendors', function() {
  gulp.src(config.css.src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.css.outputNameMinified))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.css.dest))
  gulp.src(config.js.src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.js.outputNameMinified))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.js.dest))
  gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest))
});
