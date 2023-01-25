const path =require('path')
const Hmltwebpackplugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const minicssextraplugin = require ('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output :{
        path : path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    resolve:{
        extensions:['.js', '.jsx'],
   
    },
    mode:'development',
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use:[
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                ]
                
            }
        ],
        
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename: './index.html'
        }),
        new minicssextraplugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        static:{
            directory:path.join(__dirname,'dist'),
        },
        watchFiles: path.join(__dirname, "./**"),
        compress: true,
        historyApiFallback:true,
        port:3007,
        open:true 
    },

}