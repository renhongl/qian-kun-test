const path = require('path');
const packageName = require('./package.json').name;

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'source-map',
    output: {
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        globalObject: 'window',
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
        publicPath: 'http://localhost:3003',
        filename: 'bundle.js'
    },
    devServer: {
        port: '3003',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        static: path.join(__dirname, 'public'),
        allowedHosts: 'all',
        historyApiFallback: true,
    }
}
