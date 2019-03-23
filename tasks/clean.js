import gulp from 'gulp';
import del from 'del';
import args from './util/args';

//先清理上一次打包的文件
gulp.task('clean', () => {
    return del(['server/public', 'server/views'])
});