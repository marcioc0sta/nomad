var gulp       = require('gulp'),
    connect    = require('gulp-connect'),
    sass       = require('gulp-sass'),
    uglify     = require('gulp-uglify'),
    notify     = require('gulp-notify'),
    imagemin   = require('gulp-imagemin'),
    htmlmin    = require('gulp-htmlmin'),
    sourcemaps = require('gulp-sourcemaps');


//error log
function errorLog(error){
  console.error.bind(error);
  this.emit('end');
}

//connect
gulp.task('connect', function() {
  connect.server({
    root: 'app/',
    livereload: true
  });
});

//js minify
gulp.task('compressJS', function(){
  gulp.src('./app/js/nomad.js')
  .pipe(uglify())
  .pipe(gulp.dest('./app/dist/js/'))
  .pipe(sourcemaps.write('.'))
  .pipe(notify({ message: "js compressed" }))
  .pipe(connect.reload());
});

//sass compile
gulp.task('sass', function () {
  gulp.src('./app/scss/styles.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'compressed',
        errLogToConsole: true
      }))
    .pipe(sourcemaps.write('.'))
    .on('error', errorLog)
    .pipe(gulp.dest('./app/dist/css/'))
    .pipe(notify({ message: "css minified", onLast: true }))
    .pipe(connect.reload());
});

// image compress
gulp.task('imagemin', function(){
  gulp.src('app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/dist/img/'))
});

gulp.task('watch', function () {
  gulp.watch(['app/scss/*'], ['sass']);
  gulp.watch(['app/js/nomad.js'], ['compressJS']);
  gulp.watch(['app/img/*'], ['imagemin']);
});

gulp.task('default', ['connect', 'sass', 'compressJS', 'imagemin', 'watch']);
