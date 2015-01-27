/* browserify task
   ---------------
   Bundle javascripty things with browserify!
   This task is set up to generate multiple separate bundles, from
   different sources, and to use Watchify when run from the default task.
   See browserify.bundleConfigs in gulp/config.js
*/

var
  browserify = require('browserify'),
  watchify = require('watchify'),
  gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  streamify = require('gulp-streamify'),
  util = require('gulp-util'),
  exorcist = require('exorcist'),
  source = require('vinyl-source-stream'),
  bundleLogger = require('../util/bundleLogger'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').browserify,
  buildMode = require('../config').buildMode
  ;


gulp.task('browserify', function(callback) {

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    var jsName = buildMode.dist === false ?
        bundleConfig.outputName : bundleConfig.outputNameMinified;

    var bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: false,
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // Add file extentions to make optional in your requires
      extensions: config.extensions,
      // Enable source maps!
      debug: config.debug,
      //
      bundleExternal: config.bundleExternal
    });

    var bundle = function() {
      // Log when bundling starts
      bundleLogger.start(jsName);

      return bundler
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        .pipe(buildMode.dist === false ?
          exorcist(
            bundleConfig.dest + '/' + jsName + '.map'
          ) : util.noop()
        )
        .pipe(source(jsName))
        .pipe(buildMode.dist === true ?
          streamify(uglify()) : util.noop()
        )
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if(global.isWatching) {
      // Wrap with watchify and rebundle on changes
      bundler = watchify(bundler);
      // Rebundle on update
      bundler.on('update', bundle);
    }

    var reportFinished = function() {
      // Log when bundling completes
      bundleLogger.end(bundleConfig.outputName)

      if(bundleQueue) {
        bundleQueue--;
        if(bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis);
});
