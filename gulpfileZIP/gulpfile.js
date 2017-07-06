var gulp=require('gulp'),
    minifycss=require('gulp-minify-css'),
    concat=require('gulp-concat'),
    uglify=require('gulp-uglify'),
    rename=require('gulp-rename'),
    jshint=require('gulp-jshint'),
    notify=require('gulp-notify'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin');

//css压缩
gulp.task('minifycss',function(){
    return gulp.src('css/*.css')//所有css文件
        .pipe(concat('main.css'))//合并文件
        .pipe(rename({suffix:'.min'})) //重命名
        .pipe(minifycss()) //压缩
        .pipe(gulp.dest('dist/css/')) //输出目录
        .pipe(notify({message:'css task ok'})); //提示成功
});

// js压缩
gulp.task('minifyjs',function(){
    return gulp.src("js/*.js")
        .pipe(concat('index.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({message:"js task ok"}));
});

//html压缩
gulp.task('minifyhtml', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/html'));
});

//img压缩
gulp.task('imagemin', function () {
    gulp.src('img/pic1.jpg')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/images'));
});












