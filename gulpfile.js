var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');


var jsFiles = ['*.js', 'src/**/*.js', 'public/js/*.js'];

gulp.task('style', function() {
   return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});