'use strict';


var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var webpack = require('webpack-stream');


gulp.task('sass', function() {
    return gulp.src('./app/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('inject-main', function() {
    var sources = gulp.src(['./dist/main.bundle.js', './dist/css/main.css'], {read: false});
    return gulp.src('./app/main.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('./dist/html/'))
});


gulp.task('inject-index', function() {
    var sources = gulp.src(['./dist/index.bundle.js', './dist/css/index.css'], {read: false});
    return gulp.src('./app/index.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('./dist/html/'))
});


gulp.task('webpack', function() {
    return gulp.src('./app/**/*.jsx')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'));
});

gulp.task('dev:watch', function() {
    gulp.watch('./app/css/**/*.scss', ['sass']);
    gulp.watch('./app/main.html', ['inject-main']);
    gulp.watch('./app/index.html', ['inject-index']);
    gulp.watch('./app/**/*.jsx', ['webpack']);
});
