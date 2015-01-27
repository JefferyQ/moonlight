var
  browserify = require('browserify');
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-minify-css'),
  streamify = require('gulp-streamify'),
  util = require('gulp-util'),
  source = require('vinyl-source-stream'),
  bundleLogger = require('../util/bundleLogger'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').vendors,
  buildMode = require('../config').buildMode
  ;


gulp.task('vendors', function () {
  // CSS
  var cssName = buildMode.dist === false ?
    config.css.outputName : config.css.outputNameMinified;
  gulp.src(config.css.src)
    .pipe(concat(cssName))
    .pipe(buildMode.dist === true ?
      minify() : util.noop()
    )
    .pipe(gulp.dest(config.css.dest))
  // MAPS
  if (buildMode.dist === false) {
    gulp.src(config.css.map)
      .pipe(gulp.dest(config.css.dest))
  }
  // FONTS
  gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest))
  // JS
  var jsName = buildMode.dist === false ?
    config.js.outputName : config.js.outputNameMinified;
  var bundler = browserify({debug: false});
  config.js.lib.forEach(function (lib) {
    bundler.require(lib);
  });
  bundleLogger.start(jsName);
  bundler
    .bundle()
    .on('error', handleErrors)
    .pipe(source(jsName))
    .pipe(buildMode.dist === true ?
      streamify(uglify()) : util.noop()
    )
    .pipe(gulp.dest(config.js.dest))
    .on('end', function() {
      bundleLogger.end(jsName)
    });
});
