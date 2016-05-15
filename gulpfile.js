var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    nodemon     = require('gulp-nodemon'),
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
var cssDir = 'public/dist/css';
var jsAssets = ['*.js', 'app_server/**/*.js', 'public/js/*.js'];

gulp.task('lint', function() {
    console.log('Checking javascript coding style...');
    
    return gulp.src(jsAssets)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('css', function() {
    console.log('Minifying and concatenating CSS...');
	var cssFiles = ['public/css/*'];

	gulp.src(bowerFiles().concat(cssFiles))
        .pipe(debug({title: 'debug'}))
		.pipe(filter('*.css'))
		.pipe(order(['normalize.css', '*']))
		.pipe(concat('main.css'))
        .pipe(gulp.dest(cssDir))
        .pipe(rename('main.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest(cssDir));
});

gulp.task('js', function () {
    console.log('Minifying and concatenating JS...');
    var jsFiles = ['public/js/*'];

	gulp.src(bowerFiles().concat(jsFiles))
		.pipe(filter('*.js'))
        .pipe(order(['jquery.min.js', '*']))
		.pipe(concat('main.js'))
        .pipe(gulp.dest(jsDir))
        .pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDir));
});

/*
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
*/

gulp.task('build', function (callback) {
    console.log('Building files...');
    runSequence('lint', ['css', 'js'], callback);
});

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch(jsAssets, ['lint', 'js']);
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