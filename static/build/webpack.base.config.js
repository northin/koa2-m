const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const path = require('path')

const sourcePath = path.join(__dirname, './static/src')

const outputPath = path.join(__dirname, './../output/dist/')


module.exports = {
	//入口文件
	entry: {
		'admin' : './static/src/pages/admin.js',
		'work' : './static/src/pages/work.js',
		'index' : './static/src/pages/index.js',
		'error' : './static/src/pages/error.js',
		vendor: ['react', 'react-dom', 'whatwg-fetch']
	},
	output: {
		path: outputPath,
		publicPath: '/static/output/dist/',
		filename: 'js/[name].js'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				user: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: ['css-loader']	
					}
				)
			},
			{
				test: /\.scss$/,
				user: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: ['scss-loader','css-loader']	
					}
				)
			},
			{
				test: /\.less$/,
				user: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: ['less-loader','css-loader']	
					}
				)
			},
		]
	},
	reslove: {
		extensions: ['.js','.jsx'],
		modules: [
			sourcePath,
			'node_modules'
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor'],
	        minChunks: Infinity,
	        filename: 'js/[name].js'
	    }),
	]


}








