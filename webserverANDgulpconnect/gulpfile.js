//����gulp
// var gulp = require('gulp');
// //����webserver���
// var webserver = require('gulp-webserver');
// gulp.task('webserver', function(){
//     gulp.src('myapp')
//         .pipe(webserver({
//             port: 80,//�˿�
//             livereload: true,//ʵʱˢ�´��롣����f5ˢ��
//             directoryListing: {
//                 path: 'myapp/index.html',
//                 enable: true
//             },
//             open:true
//         }))
// });
//



var gulp = require('gulp'),
	connect = require('gulp-connect');
gulp.task('connect', function() {
  connect.server({
    root: 'myapp',
    livereload: true
  });
});
gulp.task('html', function () {
  gulp.src('myapp/index.html')
    .pipe(connect.reload());
});
gulp.task('watch', function () {
  gulp.watch(['myapp/index.html'], ['html']);
});
gulp.task('default', ['connect', 'watch']);






