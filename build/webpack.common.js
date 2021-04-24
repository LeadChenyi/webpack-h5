const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/pages/app/index.js',
        home: './src/pages/home/index.js'
    },
    output: {
        path: Path.resolve(__dirname, '../dist'),
        clean: true,                                            // 内置 clean-webpack-plugin
        filename: '[name].[chunkhash:16].bundle.js',
        assetModuleFilename: "static/[hash][ext][query]"        // 内置 file-loader
    },
    resolve: {
        alias: {
            '@': Path.resolve(__dirname, '../src'),
            '~': Path.resolve(__dirname, '../src/assets/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: [
                    'style-loader', 
                    {
                        loader:'css-loader',
                        options:{
                            modules:false,      // 是否开启样式作用域（动态变量名）
                            importLoaders:2
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'app',
            template: './src/pages/app/index.html',
            filename: 'app.html',
            chunks: ['app'],
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new HtmlWebpackPlugin({
            title:'home',
            template: './src/pages/home/index.html',
            filename: 'home.html',
            chunks: ['home'],
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        })
    ]
};