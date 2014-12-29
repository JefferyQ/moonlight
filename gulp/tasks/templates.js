var gulp = require('gulp');
var swig = require('gulp-swig');
var data = require('gulp-data');
var prettify = require('gulp-prettify');
var config = require('../config').templates;


var getJsonData = function(file) {
  var jsonFile = file.path.replace('.html', '.json');
  try {
    return require(jsonFile);
  } catch (err) {
    console.log(err);
    return
  }
};


gulp.task('templates', function () {
  var opts = {
    defaults: {
      cache: false,
      locals: {}
    }
  }
  return gulp.src(config.src, {base: config.path})
    .pipe(data(getJsonData))
    .pipe(swig(opts))
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest(config.dest));
});
