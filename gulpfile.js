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
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('./site/css'))
    .pipe(gulp.dest('./documentation/css'))
    .pipe(browserSync.stream());
});

gulp.task('copy', function () {
  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(gulp.dest('./site/fonts'))
    .pipe(gulp.dest('./documentation/fonts'));
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dist/images'))
    .pipe(gulp.dest('./site/images'))
    .pipe(gulp.dest('./documentation/images'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(changed('./dist/js', {
      extension: '.js'
    }))
    .pipe(uglify())
    .pipe(concat('gob.cl.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(gulp.dest('./site/js'))
    .pipe(gulp.dest('./documentation/js'));
});

gulp.task('serve', ['default'], function() {
  browserSync.init({
    server: {
      baseDir: ['./dist', './', './site'],
      index: 'index.html',
      routes: {
        './node_modules': 'node_modules',
        '../css': 'css'
      }
    },
    port: 5000
  });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);

  gulp.watch('./site/**/*.html').on('change', browserSync.reload);
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
    },
    port: 5000
  });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);

  gulp.watch('./documentation/**/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('clean', function () {
  return gulp.src('./dist')
    .pipe(clean());
});

gulp.task('default', gulpSequence(['clean'], ['sass', 'copy', 'js']));