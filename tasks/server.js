import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

//启动服务命令
gulp.task('server', (cb) => {
    if (!args.watch) return cb();

    let server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], (file) => {
        server.notify.apply(server, [file]);
    });

    gulp.watch(['server/routers/**/*.js', 'server/app.js'], () => {
        server.start.bind(server)();
    });
})