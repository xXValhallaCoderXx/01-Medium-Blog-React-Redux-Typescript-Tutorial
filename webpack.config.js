const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Redux Typescript Example',
            template: path.join(__dirname, 'src/index.html'),
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: path.join(__dirname, './node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                    }
                ]
            },
            
            {
                test: /\.css$/,
                exclude: path.join(__dirname, './node_modules'),
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devtool: "eval-source-map",
    devServer: {
        host: process.env.HOST,
        port: process.env.PORT,
    },
};