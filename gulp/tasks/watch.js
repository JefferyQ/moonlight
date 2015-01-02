/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var
  gulp  = require('gulp'),
  config= require('../config')
  ;


gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(config.templates.src, ['templates']);
  gulp.watch(config.sass.src, ['sass']);
});
