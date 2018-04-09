var gulp = require('gulp'),
    source = 'resources/public/**/';

/**
 * Copy the all Files to Bundles Folder
 */

gulp.task('copy-all-to-bundles', function() {

    gulp.src(source)
    .pipe(gulp.dest('../../web/bundles/'));
});
