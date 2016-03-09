var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var env = require('gulp-env');
var gulpMocha = require('gulp-mocha');
var supertest = require('supertest');

gulp.task('default', function() {
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
       .pipe(gulpMocha({reporter: 'nyan'}))
});
