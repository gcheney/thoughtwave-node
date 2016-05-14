var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var nodemon = require('gulp-nodemon');


var jsFiles = ['*.js', 'src/**/*.js', 'public/js/*.js'];

gulp.task('style', function() {
   return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('inject', function () {
    var widedep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css',
                              './public/js/*.js'], {
        read: false
    });
    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/partials/*.ejs')
        .pipe(widedep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views/partials'));
});

gulp.task('serve', ['style', 'inject'], function () {
    var options = {
        script: './bin/www',
        delayTime: 1,
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function (en) {
            console.log('Restarting...');
        });
});