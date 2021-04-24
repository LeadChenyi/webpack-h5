const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/pages/app/index.js',
        home: './src/pages/home/index.js'
    },
    output: {
        path: Path.resolve(__dirname, '../dist'),
        clean: true,
        filename: '[name].[chunkhash:8].bundle.js',
        assetModuleFilename:"static/[chunkhash:8][ext][query]"
    },
    resolve: {                                          
        alias: {                                       
          '@': Path.resolve(__dirname, 'src/'),
          '~': Path.resolve(__dirname, 'src/assets/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/app/index.html',
            filename: 'app.html',
            chunks:['app'],
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/home/index.html',
            filename: 'home.html',
            chunks:['home'],
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
            }
        })
    ]
};