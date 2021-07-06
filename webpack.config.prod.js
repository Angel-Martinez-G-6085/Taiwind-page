const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const MinimizerWebpackPlugin=require('css-minimizer-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');

module.exports={
    mode:'production',
    devtool:'source-map',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name].[contenthash].js',
    },
    resolve:{
        extensions:['.js'],
        alias:{
            '@styles': path.resolve(__dirname,'./src/scss/'),
        }
    },

    module:{
        rules:[
            {
                test:/\m?.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.scss$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: '../',
                    outputpath:'./assets/images',
                    name: 'assets/images/[name].[ext]',
                }
            },
            {
                test:/\.(woff|woff2|ttf|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '../',
                    outputpath:'./assets/fonts',
                    name: 'assets/fonts/[name].[ext]',
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:'body',
            template:'./public/index.html',
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:'./styles/[name].[contenthash].css'
        }),
    ],
    optimization:{
        minimize:true,
        minimizer:[
            new MinimizerWebpackPlugin(),
            new TerserPlugin(),
            new CleanWebpackPlugin()
        ]
    }
}