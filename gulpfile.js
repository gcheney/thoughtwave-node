var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    imagemin    = require('gulp-imagemin'),
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
    runSequence = require('run-sequence'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream');

var config = {
    bowerDir: './public/lib',
    jsDest: 'public/dist/js',
    jsSrc: 'public/js/scripts.js',
    jsDir: 'public/js',
    jsBundle: './public/dist/js/bundle.js',
    jsAssets: ['*.js', 'app_server/**/*.js', 'public/js/*.js'],
    cssDest: 'public/dist/css',
    cssSrc: 'public/css/*.css',
    fontSrc: [ 'public/lib/font-awesome/fonts/**.*', 
              'public/lib/bootstrap/fonts/**.*'],
    fontDest: 'public/dist/fonts',
    imageSrc: './public/img/**',
    imageDest: './public/dist/img',
    injectFiles: ['./public/dist/**/*.min.js', './public/dist/**/*.css'],
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

	gulp.src(bowerFiles().concat(config.cssSrc))
		.pipe(filter('**/*.css'))
        .pipe(debug({title: 'css'}))
		.pipe(order(['normalize.css', '*']))
		.pipe(concat('main.css'))
		.pipe(cssnano())
        .pipe(rename('main.min.css'))
		.pipe(gulp.dest(config.cssDest));
});

gulp.task('browserify', function() {
    console.log('Bundling JS files...');
    
    return browserify(config.jsSrc)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.jsDest));
});

gulp.task('uglify', ['browserify'], function() {
    console.log('Minifying JS files...');
    
    return gulp.src(config.jsBundle)
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest(config.jsDest));
});

gulp.task('fonts', function() {    
    return gulp.src(config.fontSrc)
        .pipe(debug({title: 'fonts'}))
        .pipe(gulp.dest(config.fontDest));
});

gulp.task('images', function(){
    return gulp.src(config.imageSrc)
        .pipe(imagemin())
        .pipe(debug({title: 'images'}))
        .pipe(gulp.dest(config.imageDest));
});


gulp.task('inject', function () {
    console.log('Injecting minified files...');
    
    var files = gulp.src(config.injectFiles, {read: false});
    
    var options = { ignorePath: '/public' };
 
    return gulp.src(config.injectSrc)
        .pipe(inject(files, options))
        .pipe(gulp.dest(config.injectDest));
});

gulp.task('build', function (callback) {
    console.log('Building files...');
    runSequence('jslint', ['css', 'uglify', 'fonts', 'images'], 
                'inject', callback);
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(config.jsAssets, ['jslint', 'build']);
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