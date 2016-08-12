var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: path.resolve(ROOT_PATH, 'app'),
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [{
          test: /\.jsx?$/,
          loader:'babel',
          query: {
              presets: ['es2015','react'],
              cacheDirectory: true
          }
      }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'reditor'
        })
    ]
};