var gulp = require('gulp');


gulp.task('build', [
  'browserify',
  'sass',
  'templates',
  'vendors'
]);
