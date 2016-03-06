var gulp = require('gulp'),
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

gulp.task('test', function(){
  gulp.src(specPattern)
      .pipe(jasmine({
        helpers: [
            codePattern
        ]
      }));
});

gulp.task('default', function(){
  runSequence('compile'/*, 'test'*/);
  
  gulp.watch(tsSource, ['compile']);
  //gulp.watch(specPattern, ['test']);
});