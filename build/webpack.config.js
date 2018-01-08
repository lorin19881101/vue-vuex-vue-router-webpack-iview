const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const NODE_ENV = process.env.NODE_ENV;

const webpackEnvConfig = {
    development: require('./webpack.dev.config.js'),
    production: require('./webpack.prod.config.js')
};

const GLOBAL_CONFIG = {
	development: require('../config/dev.env.js'),
	production: require('../config/prod.env.js')
}

let commonConfig = {
	entry: {
		app: path.resolve(SRC_PATH, 'main.js'),
		vendor: ['vue', 'vuex', 'vue-router', 'iview']
	},
	output: {
		path: path.resolve(ROOT_PATH, 'dist'),
		filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkHash].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(vue|jsx?)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
						options: {
		          loaders: {
		            css: ExtractTextPlugin.extract({
		              use: 'css-loader',
                  fallback: 'vue-style-loader'
		            })
		          }							
						}
					},
					{
						loader: 'iview-loader',
						options: {
							prefix: false
						}
					}
				]
			},
      {
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
      },
      {
      	test: /\.less$/,
      	loader: 'style-loader!css-loader!less-loader'
      },
			{
				test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader'],
            fallback: 'style-loader'
        })	
      },
			{
				test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: path.resolve(ROOT_PATH, 'favicon.ico'),
      template: path.resolve(ROOT_PATH, 'index.html'), //source
      chunks: ['app', 'vendor'],
      hash: true
		}),
		new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin(GLOBAL_CONFIG[NODE_ENV])
	],
	resolve: {
    extensions: ['.js', '.vue', '.less', '.json'],
		alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': SRC_PATH
		}
	}
};

module.exports = webpackMerge(
	commonConfig,
	webpackEnvConfig[NODE_ENV]
);