const path = require('path');


module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 3000,
        static: './public',
        historyApiFallback: true,
        hot: false
    },
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
    }
}
