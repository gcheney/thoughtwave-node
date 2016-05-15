var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    nodemon     = require('gulp-nodemon'),
    inject      = require('gulp-inject'),
    bowerFiles  = require('main-bower-files'),
    filter      = require('gulp-filter'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    cssnano     = require('gulp-cssnano'),
    order       = require('gulp-order'),
    debug       = require('gulp-debug'),
    runSequence = require('run-sequence');

var jsDir = 'public/dist/js';
var jsFiles = 'public/js/*.js';
var cssDir = 'public/dist/css';
var cssFiles = 'public/css/*.css';
var jsAssets = ['*.js', 'app_server/**/*.js', jsFiles];

gulp.task('lint', function() {
    console.log('Checking javascript coding style...');
    
    return gulp.src(jsAssets)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('css', function() {
    console.log('Minifying and concatenating CSS...');

	gulp.src(bowerFiles().concat(cssFiles))
        .pipe(debug({title: 'concat'}))
		.pipe(filter('**/*.css'))
        .pipe(debug({title: 'filter'}))
		.pipe(order(['normalize.css', '*']))
		.pipe(concat('main.css'))
        .pipe(rename('main.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest(cssDir));
});

gulp.task('js', function () {
    console.log('Minifying and concatenating JS...');

	gulp.src(bowerFiles().concat(jsFiles))
		.pipe(filter('**/*.js'))
        .pipe(order(['jquery.min.js', '*']))
		.pipe(concat('main.js'))
        .pipe(gulp.dest(jsDir))
        .pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDir));
});


gulp.task('inject', function () {
    console.log('Injecting static files...');
    var files = ['public/dist/css/*.css', 'public/dist/js/*.js'];
    var dest = 'app_server/views/partials/*.ejs';

    var injectSrc = gulp.src(files, { read: false });
    
    var injectOptions = {
        ignorePath: '/public'
    };
    
    return gulp.src(source)
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest(dest));
});


gulp.task('build', function (callback) {
    console.log('Building files...');
    runSequence('lint', 
                ['css', 'js'], 
                'inject', 
                callback);
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(jsAssets, ['build']);
});

gulp.task('serve', ['build'], function () {
    console.log('Serving it up...');

    return nodemon({
            script: './bin/www',
            ext: 'js',
            delayTime: 1,
            env: {
              'NODE_ENV': 'development'
            }
        })
        .on('start', ['watch'])
        .on('change', ['watch'])
        .on('restart', function () {
            console.log('Restarting...');
        });
});

// Default Task
gulp.task('default', ['serve']);