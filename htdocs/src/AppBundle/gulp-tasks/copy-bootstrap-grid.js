var gulp = require('gulp'),
    source = 'node_modules/bootstrap-grid/dist/grid.min.css';

/**
 * Copy the node_modules bootstrap grid to bundles folder which are
 * included in master.twig
 */

gulp.task('copy-bootstrap-grid', function() {

    gulp.src(source)
       .pipe(gulp.dest('./resources/public/css/'));
});

