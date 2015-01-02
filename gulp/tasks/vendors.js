var
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
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
  gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.outputName))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
});
