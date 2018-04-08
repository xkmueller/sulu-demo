var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');
    autoprefixer = require('gulp-autoprefixer');

/**
 * styles
 */
gulp.task('styles', function() {

    var filename = 'sulu-demo/styles/build_main.scss'
   gulp.src(filename)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(rename('styles.min.css'))
      .pipe(autoprefixer())
      .pipe(gulp.dest('../../web/bundles/'));
});
