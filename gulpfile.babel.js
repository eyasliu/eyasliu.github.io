import gulp from "gulp";
import util from "gulp-util";
import eslint from "gulp-eslint";
import webpack from "webpack";
import run from "run-sequence";
import WebpackDevServer from "webpack-dev-server";
import webpackDevConfig from "./config/webpack.dev.js";
import webpackProConfig from "./config/webpack.pro.js";
import webpackServerConfig from "./config/webpack.server.js";
import config from "./config/config.client";
import nodemon from "nodemon";
import fse from "fs-extra";
import {exec} from "child_process";

gulp.task('dev', ['client'], () => {
  
})


gulp.task('server', ['server-watch'], () => {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: './build/server.js',
    ignore: ['*'],
    ext: 'noop'
  }).on('restart', () => {
    console.log('restart server ok.');
  })
})

gulp.task('server-watch', () => {
  webpack(webpackServerConfig).watch(100, (err, stats) => {
    console.log(stats.toString({
      chunks: false,
      colors: true,
    }));
    run('lint');
    !err && nodemon.restart();
  })
})

// dev server
gulp.task('client', ()=> {
  const compiler = webpack(webpackDevConfig);
  
  compiler.plugin('done', (stats) => {
    run('lint');
  });
  
  new WebpackDevServer(compiler, {
    contentBase: './',
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    quiet: false,
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    }
  }).listen(config.clientPort, config.host, (err, stats) => {
    if (err) util.log(err);
    util.log(`webpack was listenning: http://${config.host}:${config.clientPort}`);
  });
});

gulp.task('lint', () => {
  /* eslint-disabled */
  return gulp
    .src([
      "./*.js",
      'app/**/*.js',
      'app/**/*.jsx',
      '!app/vendor/**/*',
      '!karma.conf.js',
      '!app/client/node_modules/**/*',
      '!app/server/node_modules/**/*'
    ])
    .pipe(eslint())
    .pipe(eslint.formatEach());
});

// build
gulp.task('build-client', ()=> {
  webpack(webpackProConfig, (err, stats) => {
    console.log('=============================================================')
    console.log('client package completed!')
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
    fse.copySync('./build/client', './public/assets')
  });
});
gulp.task('build-server', ()=> {
  webpack(webpackServerConfig, (err, stats) => {
    console.log('=============================================================')
    console.log('server package completed!')
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
  });
});


// build on save
gulp.task('build', () => {
  exec('rm -rf public/assets build', (err, stats) => {
    console.log('clean success');
    run('build-client');
    run('build-server');
  })
});
