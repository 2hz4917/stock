import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

//按顺序进行编译打包生成文件
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'server']));