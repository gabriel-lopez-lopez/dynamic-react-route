const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extract_CSS = new ExtractTextPlugin("assets/css/bundle.css");
const exclude = [/node_modules/];

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '/build/'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /(\.js|jsx)$/,
                exclude,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude,
                use: extract_CSS.extract({
                    use: 'css-loader'
                })
            }
        ]
    },

    devtool: '#source-map',

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        extract_CSS
    ]
};