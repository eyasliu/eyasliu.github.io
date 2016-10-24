import gulp from "gulp";
import util from "gulp-util";
import eslint from "gulp-eslint";
import webpack from "webpack";
import run from "run-sequence";
import WebpackDevServer from "webpack-dev-server";
import webpackClientConfig from "./config/webpack.client.js";
import webpackServerConfig from "./config/webpack.server.js";
import config from "./config/config.client";
import fs from "fs";
import {exec} from "child_process";

gulp.task('dev', ['client'], () => {
  
})


// dev server
gulp.task('client', ()=> {
  const compiler = webpack(webpackClientConfig);
  
  compiler.plugin('done', (stats) => {
    run('lint');
  });
  
  new WebpackDevServer(compiler, {
    contentBase: './',
    publicPath: webpackClientConfig.output.publicPath,
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
function setHash(hash){
  let indexHtml = fs.readFileSync('./index.html').toString();
  indexHtml = indexHtml.replace(/client\.js?(\?)\b\w{0,25}\b/g, 'client.js?' + hash);
  fs.writeFile('./index.html', indexHtml, err => {
    console.log('replace hash success, Hash:' + hash);
  })
}

gulp.task('build-client', ()=> {
  webpack(webpackClientConfig, (err, stats) => {
    console.log('=============================================================')
    console.log('client package completed!')
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
    setHash(stats.hash);
  });
});

// build server
gulp.task('build-server', () => {
  webpack(webpackServerConfig, (err, stats) => {
    console.log('=============================================================')
    console.log('server package completed!')
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
  });
})

// build on save
gulp.task('build', () => {
  exec('rm -rf public/assets build', (err, stats) => {
    console.log('clean success');
    run('build-client');
  })
});


