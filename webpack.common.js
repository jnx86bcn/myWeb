const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './src/components/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name]' + '.js',
        sourceMapFilename: 'scripts/[name]' + '.map'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: 
                [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                use: 'file-loader?name=fonts/[name].[ext]',
            },
        ]
    },
    plugins: [

        new CleanWebpackPlugin(),

        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css'
        })

    ]
};