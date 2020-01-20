const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    }
};