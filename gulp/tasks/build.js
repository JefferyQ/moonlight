var gulp = require('gulp');


gulp.task('build', [
  'browserify',
  'sass',
  'icons',
  'templates',
  'vendors'
]);
