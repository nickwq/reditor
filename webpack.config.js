var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

var ROOT_PATH = path.resolve(__dirname);

var appPath = path.resolve(ROOT_PATH, 'app');
module.exports = {
    entry: appPath,
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
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: appPath
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'reditor'
        }),
        new DashboardPlugin()
    ]
};