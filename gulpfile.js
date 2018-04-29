let gulp = require('gulp'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
autoprefixer = require('gulp-autoprefixer'),
cleanCSS = require('gulp-clean-css'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
notify = require('gulp-notify'),
plumber = require('gulp-plumber'),
browserSync = require('browser-sync').create(),
reload= browserSync.reload,
fileinclude = require('gulp-file-include'),
spritesmith = require("gulp.spritesmith"),
inlinesource = require('gulp-inline-source'),
sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babelify = require("babelify"),
    babel = require("gulp-babel");
//当前开发目录
let devPath = 'projects/0template/';// /zhuanti/codoljxsl/
let config = {
    path:{
        root:devPath,
        css: devPath+'css',
        scss:devPath+'scss/',
        gslib: 'gslib/',
        src: devPath+'src/',
        js:  devPath+'js/',
        tpl: devPath+'tpl/',
        res: devPath+'gsres/',
        csprite:devPath+'csprite/'
    }
};
gulp.task('csprite',function () {
    return gulp.src(config.path.csprite + '*.png')
        .pipe(spritesmith({
            imgName:'csprite.png',
            cssName:'../scss/_csprite.scss',
            cssFormat:'scss',
            padding:8,
            imgPath :'../gsres/csprite.png'
        }))
        .pipe(gulp.dest(config.path.res))
        .pipe(reload({stream: true}));
});
gulp.task('fileinclude', function() {
    gulp.src(config.path.tpl + '*.html')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest(config.path.root));
});
gulp.task('dosass',function(){
    return gulp.src(config.path.scss+'*.scss')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sass({outputStyle: 'compact'}).on('error',sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 5%','ios >= 5','Firefox >= 20','android >= 2.3','opera >= 23','ie >= 7','ie_mob >= 10','safari >= 6','chrome >= 30','opera >= 23','ff >= 30','bb >= 10'],
            cascade: true,
            remove:false
        }))
        .pipe(cleanCSS({compatibility: 'ie8',format: 'keep-breaks'}))
        .pipe(gulp.dest(config.path.css))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.path.css))
        .pipe(reload({stream: true}));
});
gulp.task('jsmin', function() {
  return gulp.src(config.path.src+'*.js')
	  .pipe(sourcemaps.init())
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest(config.path.js))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.path.js));
});
gulp.task('bsfy', function() {
    browserify({
        //先处理依赖，入口文件
        entries: [config.path.src+'main.js']
    })
        //.transform('babelify', {presets: ['es2015']})
        .bundle()
        .on('error', function(err){
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(config.path.js))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.path.js));
});
gulp.task('auto', function() {
	browserSync.init({
        server: config.path.root,
        open:'external'
    });
	gulp.watch([config.path.csprite + '*.png'],['csprite','dosass']);
	gulp.watch([config.path.scss+'*.scss'], ['dosass']);
    gulp.watch([config.path.tpl + "*.html",config.path.tpl + "*/*.html"], ['fileinclude']);
	gulp.watch([config.path.gslib+'*/*/*.js',config.path.src + '*.js',config.path.src + "component/*.js"], ['bsfy']);
	gulp.watch([config.path.js + "*.js"]).on('change', reload);
	gulp.watch([config.path.root + "*.html"]).on('change', reload);
});
gulp.task('build',function(){
	let options = {
        compress: true
    };
	return gulp.src(config.path.root + "*.html")
		.pipe(inlinesource(options))
		.pipe(rename({extname:".shtml"}))
		.pipe(gulp.dest(config.path.root + 'build'));
});
gulp.task('dev',['auto']);
gulp.task('pub',['build']);