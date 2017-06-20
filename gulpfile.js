var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

// Compile sass to regular css
gulp.task('sass', function () {
  return gulp.src('assets/sass/**/*.sass')
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(gulp.dest('assets/css'));
});
