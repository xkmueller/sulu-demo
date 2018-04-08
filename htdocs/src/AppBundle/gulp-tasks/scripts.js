var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

/**
 * scripts
 */

gulp.task('scripts', function() {

    var uglifyConfig = {
        mangle: true,           // rename variables, turn off if bugs appear
        compress: {
            hoist_funs: false   // do not sort code
        }
    },
    files = [
        'node_modules/jquery/dist/jquery.min.js',
        'sulu-demo/scripts/scripts.js'
    ];

    gulp.src(files)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify(uglifyConfig))
        .pipe(gulp.dest('./dist/'));
});
