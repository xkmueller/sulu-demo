var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp-tasks');

/**
 * watch
 */

gulp.task('watch', function() {
   var watchFiles = {
       'styles': [
           './resources/scscc/**/*.scss'
       ],
       'scripts': [
           './resources/scripts/**/*.js'
       ]
   }

   gulp.watch(watchFiles.styles, ['styles']);
   gulp.watch(watchFiles.scripts, ['scripts']);
});

/**
 * run on first gulp call the build and then watch task
 */
gulp.task('build', ['styles', 'scripts','copy-bootstrap-grid']);
gulp.task('default', ['build','watch']);
