const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        index: './src/index.js',
    },
    devServer: {
        static: './dist',
    },
    //devtool: 'inline-source-map',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management',
    //     }),
    // ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },

        ],
    },

};