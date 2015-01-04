var
  gulp = require('gulp'),
  swig = require('gulp-swig'),
  data = require('gulp-data'),
  prettify = require('gulp-prettify'),
  config = require('../config').templates
  ;


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
      locals: {
        sidebar: require('../../src/templates/_sidebar.json')
      }
    }
  }
  return gulp.src(config.src, {base: config.path})
    .pipe(data(getJsonData))
    .pipe(swig(opts))
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest(config.dest));
});
