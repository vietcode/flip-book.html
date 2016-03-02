'use strict';
var gulp = require('gulp'),
  changed = require('gulp-changed'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  less = require('gulp-less'),
  riot = require('gulp-riot'),
  jade = require('gulp-jade'),
  uglify = require('gulp-uglify');

var paths = {
  "src": "./src/",
  "dist": "./dist/"
};

paths.styles = paths.src + 'styles/*.less';
paths.scripts = paths.src + 'scripts/*.js';
paths.templates = paths.src + '*.jade';
paths.tag = paths.dist + '*.html';

// Compile LESS files to CSS in the same folder.
gulp.task('min:css', function() {
  gulp.src([paths.styles])
    .pipe(changed('.'))
    .pipe(sourcemaps.init())
    .pipe(less({
      "paths": [paths.styles],
      "strictImports": true,
      "cleanCss": true,
      "compress": true
    }))
    // .pipe(concat(paths.concatCssDest))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.src + 'styles'));
});

// Generate tag file based on template into `dist`.
gulp.task('min:templates', ['min:css'], function() {
  return gulp.src([paths.templates])
  .pipe(changed('.'))
  .pipe(jade({
    "doctype": "html",
    "pretty": true
  }))
  .pipe(gulp.dest(paths.dist))
});

// Compile tag file into JS in `dist`.
gulp.task('min:tag', ['min:templates'], function() {
  gulp.src([paths.tag])
  .pipe(changed('.'))
  .pipe(sourcemaps.init())
  .pipe(riot({
    "compact": true
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.dist));
});

gulp.task('min', ['min:css', 'min:templates', 'min:tag']);

gulp.task('build', ['min:tag']);

gulp.task("watch", ["build"], function() {
  gulp.watch(paths.styles, ["build"]);
  gulp.watch(paths.scripts, ["build"]);
  gulp.watch(paths.templates, ["build"]);
});