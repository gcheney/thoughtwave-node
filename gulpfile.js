var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    nodemon     = require('gulp-nodemon'),
    inject      = require('gulp-inject'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    cssnano     = require('gulp-cssnano'),
    runSequence = require('run-sequence');

var jsFiles = ['*.js', 'src/**/*.js', 'public/js/*.js'];

var source = './app_server/views/partials/*.ejs';
var dest = './app_server/views/partials';

gulp.task('style', function() {
    console.log('Checking coding style...');
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('inject', function () {
    console.log('Injecting static files...');
    var minFiles = ['./public/css/*.min.css', './public/js/*.min.js'];

    var injectSrc = gulp.src(minFiles, { read: false });
    
    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };
    
    var wiredep = require('wiredep').stream;

    return gulp.src(source)
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest(dest));
});

gulp.task('css', function() {
    console.log('Compressing CSS...');
    return gulp.src('public/css/*.css')
        .pipe(cssnano())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
    console.log('Compressing JS...');
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('build', function (callback) {
    console.log('Building files...');
    runSequence(['style', 'css', 'js'],
                'inject',
                callback);
});

gulp.task('serve', ['build'], function () {
    console.log('Serving a gulp...');
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