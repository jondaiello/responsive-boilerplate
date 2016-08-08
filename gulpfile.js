'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pump = require('pump');

gulp.task('sass', function () {
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/*.scss', ['sass']);
});

gulp.task('scripts', function() {
  return gulp.src('./assets/js/vendor/*.js')
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('compress-js', function (cb) {
  pump([
        gulp.src('./assets/js/*.js'),
        uglify(),
        gulp.dest('assets/js/')
    ],
    cb
  );
});
