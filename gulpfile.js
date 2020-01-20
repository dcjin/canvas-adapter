const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const webpackConfig = require('./webpack.config');

const clean = (done) => {
    del.sync(['./dist/**']);
    done();
};

const build = () => gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));

exports.default = gulp.series(clean, build);