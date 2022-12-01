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
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        globalObject: 'window',
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
        publicPath: 'http://localhost:3001',
        filename: 'bundle.js'
    },
    devServer: {
        port: '3001',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        static: path.join(__dirname, 'public'),
        allowedHosts: 'all',
        historyApiFallback: true,
    }
}
