var
  gulp = require('gulp'),
  swig = require('gulp-swig'),
  data = require('gulp-data'),
  prettify = require('gulp-prettify'),
  config = require('../config').templates,
  buildMode = require('../config').buildMode
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
        css: {
          vendors: buildMode.dist === true ?
            'vendors.min.css' : 'vendors.css',
          moonlight: buildMode.dist === true ? 'moonlight.min.css' : 'moonlight.css'
        },
        js: {
          vendors: buildMode.dist === true ?
            'vendors.min.js' : 'vendors.js',
          moonlight: buildMode.dist === true ? 'moonlight.min.js' : 'moonlight.js'
        },
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
