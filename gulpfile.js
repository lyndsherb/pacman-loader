var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('scss', function () {
    return gulp.src('./scss/main.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./scss/main.scss', ['scss']);
});

gulp.task('default', ['scss']);
