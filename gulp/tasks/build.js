var gulp = require('gulp');

gulp.task('build', [
    'browserify',
    'markup',
    'sass',
    'icons',
    'partials',
    'vendors',
    'test'
]);