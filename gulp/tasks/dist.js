var gulp = require('gulp');


gulp.task('dist', [
  'browserify',
  'sass',
  'templates',
  'vendors'
]);
