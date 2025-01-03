const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        clean: true,
        publicPath: './'  // Change this line
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new Dotenv({
            systemvars: true,
            defaults: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: 'src/css',
                    to: 'css'
                }
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/'
        },
        historyApiFallback: true,
        port: 3001,
        hot: true,
        compress: true
    }
};