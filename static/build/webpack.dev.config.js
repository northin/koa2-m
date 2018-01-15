
var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWepackConfig = require('./webpack.base.config')


module.exports = merge(baseWepackConfig,[
	devtools: 'source-map',
	plugins: [
		new webpack.DefinePlugins({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
	]
])




















