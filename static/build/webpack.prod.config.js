
var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWepackConfig = require('./webpack.base.config')


module.exports = merge(baseWepackConfig,[
	plugins: [
		new webpack.DefinePlugins({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugins({
			minimize: true,
			compress: {
				warning: false
			}
		})
	]
])




















