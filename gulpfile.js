var gulp = require('gulp'),
    exec = require('child_process').exec,
    typescript = require('gulp-typescript'),
    jasmine = require('gulp-jasmine'),
    runSequence = require('run-sequence');
  
var tsSource = 'katas/src/**/*.ts',
    codePattern = 'katas/built/**/code/*.js',
    specPattern = 'katas/built/**/spec/*Spec.js';
  
gulp.task('compile', function(){
  gulp.src(tsSource)
      .pipe(typescript())
      .pipe(gulp.dest('./katas/built'));
});

gulp.task('startKarma', function(){
  exec('karma start', function(err){
    if(err) console.log(err);
  })
})

gulp.task('default', function(){
  runSequence('compile', 'startKarma');
  
  gulp.watch(tsSource, ['compile']);
});