var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')

// Compile sass to regular css
gulp.task('sass', function () {
  return gulp.src('assets/sass/**/*.sass')
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(gulp.dest('assets/css'));
});

// Use this to watch all the sass files and compile
// them to css automatically when changed.
gulp.task('sass:watch', function () {
  gulp.watch('assets/sass/**/*.sass', ['sass'])
})

// Use this to minify the generated css in the
// assets/css directory.
gulp.task('minify-css', function () {
  return gulp.src('assets/css/**/*.css')
      .pipe(cleanCSS())
      .pipe(rename(function (path) {
        path.extname = '.min.css'
      }))
      .pipe(gulp.dest('assets/css'))
})
