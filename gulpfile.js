var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var env = require('gulp-env');
var gulpMocha = require('gulp-mocha');
var supertest = require('supertest');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['build'], function() {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: {
      PORT: 9000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function(){
      console.log('server restarting');
  })
});
gulp.task('test', function(){
    env({vars: {ENV: 'Test'}});
    gulp.src('test/*.js', {read: false})
       .pipe(gulpMocha({reporter: 'spec'}))
});

gulp.task('build', [
  'copy',
  'scripts'
])

gulp.task('copy', function() {
  return gulp.src('source/**/*')
    .pipe(gulp.dest('build'))
})

gulp.task('scripts', function() {
  var scripts = [
    'node_modules/angular/angular.js',
    'node_modules/angular-route/angular-route.js',
    'scripts/**/*.js'
  ]
  return gulp.src(scripts)
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js'))
})
