var gulp = require('gulp'),
    slim = require('gulp-slim');

gulp.task('default', ['js', 'slim']);

gulp.task('js', function(){
    return gulp.src('app/*.js').pipe(gulp.dest('dist'));
});

gulp.task('slim', function () {
   return gulp.src('app/*.slim').pipe(slim()).pipe(gulp.dest('dist'));
});