var gulp = require('gulp')
var sass = require('gulp-sass')

// Compile sass to regular css
gulp.task('sass', function () {
  return gulp.src('assets/sass/**/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('assets/css'));
});
