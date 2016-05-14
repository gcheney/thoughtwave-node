var gulp      = require('gulp'),
    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),
    nodemon   = require('gulp-nodemon'),
    useref    = require('gulp-useref'),
    gulpif    = require('gulp-if'),
    uglify    = require('gulp-uglify'),
    cssnano   = require('gulp-cssnano'),
    del       = require('del');

var jsFiles = ['*.js', 'src/**/*.js', 'public/js/*.js'],
    myFiles = ['./public/css/*.css', './public/js/*.js'];

gulp.task('style', function() {
   return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('inject', function () {
    var widedep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(myFiles, {
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

    return gulp.src('./app_server/views/partials/*.ejs')
        .pipe(widedep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./app_server/views/partials'));
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('serve', ['style', 'inject', 'useref'], function () {
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