var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    bower       = require('gulp-bower'),
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

var config = {
    bowerDir: './public/lib',
    jsDir: 'public/dist/js',
    jsFiles: 'public/js/*.js',
    cssDir: 'public/dist/css',
    cssFiles: 'public/css/*.css',
    jsAssets: ['*.js', 'app_server/**/*.js', 'public/js/*.js'],
    fontSrc: [ 'public/lib/font-awesome/fonts/**.*', 
              'public/lib/bootstrap/fonts/**.*'],
    fontDir: 'public/dist/fonts',
    injectFiles: ['./public/dist/**/*.js', './public/dist/**/*.css'],
    injectSrc: './app_server/views/partials/*.ejs',
    injectDest: './app_server/views/partials'
};

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});

gulp.task('jslint', function() {
    console.log('Checking coding style...');
    
    return gulp.src(config.jsAssets)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});


gulp.task('css', function() {
    console.log('Minifying and concatenating CSS...');

	gulp.src(bowerFiles().concat(config.cssFiles))
		.pipe(filter('**/*.css'))
        .pipe(debug({title: 'css'}))
		.pipe(order(['normalize.css', '*']))
		.pipe(concat('main.css'))
		.pipe(cssnano())
        .pipe(rename('main.min.css'))
		.pipe(gulp.dest(config.cssDir));
});

gulp.task('js', function () {
    console.log('Minifying and concatenating JS...');

	gulp.src(bowerFiles().concat(config.jsFiles))
		.pipe(filter('**/*.js'))
        .pipe(debug({title: 'js'}))
        .pipe(order(['jquery.min.js', '*']))
		.pipe(concat('main.js'))
		.pipe(uglify())
        .pipe(rename('main.min.js'))
		.pipe(gulp.dest(config.jsDir));
});

gulp.task('fonts', function() {
    
    return gulp.src(config.fontSrc)
        .pipe(debug({title: 'fonts'}))
        .pipe(gulp.dest(config.fontDir));
});


gulp.task('inject', function () {
    console.log('Injecting minified files...');
    
    var files = gulp.src(config.injectFiles, {read: false});
    
    var options = {
        ignorePath: '/public'
    };
 
    return gulp.src(config.injectSrc)
        .pipe(inject(files, options))
        .pipe(gulp.dest(config.injectDest));
});


gulp.task('build', function (callback) {
    console.log('Building files...');
    runSequence('jslint', ['css', 'js', 'fonts'], 
                'inject', callback);
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(config.jsAssets, ['jslint']);
});

gulp.task('serve', ['build'], function () {
    console.log('Serving it up...');

    return nodemon({
            script: './bin/www',
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