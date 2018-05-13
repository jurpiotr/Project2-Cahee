var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function(){
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('./scss/**/*.scss', ['sass']); 
  gulp.watch('./*.html', browserSync.reload); 
  gulp.watch('./js/**/*.js', browserSync.reload);
})

gulp.task('cssmini', function(){
	return gulp.src('./*.html')
		.pipe(useref())
    	.pipe(gulpIf('*.css', cssnano()))
    	.pipe(gulp.dest('./dist/'))
});

gulp.task('img', function(){
  return gulp.src('./img/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
});