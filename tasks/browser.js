import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import livereload from 'gulp-livereload';
import args from './util/args';

//浏览器监听
gulp.task('browser', (cb) => {
    if (!args.watch) return cb();
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});