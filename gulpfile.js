var pug=require('gulp-pug');
var gulp=require('gulp');

gulp.task('pug',function(){
	return gulp.src('./pug/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('pug:watch',['pug'],function(){
	gulp.watch('./pug/*.pug',['pug',reload]);
});