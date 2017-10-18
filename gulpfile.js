/* global require */

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const gulpSequence = require('gulp-sequence');

gulp.task('sass', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 10
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('copy', function () {
  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts'));
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('views', function () {
  return gulp.src('./src/views/*.pug')
    .pipe(changed('./dist/views', {
      extension: '.html'
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(changed('./dist/js', {
      extension: '.js'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('serve', ['default'], function() {
  browserSync.init({
    server: {
      baseDir: ['./dist/views', './dist', './'],
      index: 'index.html',
      routes: {
        './node_modules': 'node_modules',
        '../css': 'css'
      }
    }
  });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/views/**/*.pug', ['views']);
  gulp.watch('./src/js/**/*.js', ['js']);

  gulp.watch('./dist/views/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/js/**/*.js').on('change', browserSync.reload);

});

gulp.task('serve:documentation', function () {
  browserSync.init({
    server: {
      baseDir: ['./dist', './', './documentation'],
      index: 'index.html',
      routes: {
        './node_modules': 'node_modules',
        '../css': 'css'
      }
    }
  });
});

gulp.task('clean', function () {
  return gulp.src('./dist')
    .pipe(clean())
});

gulp.task('default', gulpSequence('clean', ['sass', 'copy', 'views', 'js']));