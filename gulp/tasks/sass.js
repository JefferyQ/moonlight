var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  minify = require('gulp-minify-css'),
  util = require('gulp-util'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').sass,
  buildMode = require('../config').buildMode
  ;


gulp.task('sass', function() {
  var cssName = buildMode.dist === false ?
    config.outputName : config.outputNameMinified;
  gulp.src(config.src)
    .pipe(buildMode.dist === false ? sourcemaps.init() : util.noop())
    .pipe(sass()
      .on('error', handleErrors)
    )
    .pipe(concat(cssName))
    .pipe(buildMode.dist === true ? minify() : util.noop())
    .pipe(buildMode.dist === false ?
      sourcemaps.write('.') : util.noop()
    )
    .pipe(gulp.dest(config.dest));
});
