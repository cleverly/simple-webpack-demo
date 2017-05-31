const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const isProd = process.env.NODE_ENV === 'production'
const config = {
    devtool: '#eval-source-map',
    entry: './src/js/index.js',
    output: {
        filename: isProd ? '[name].[chunkhash].js' : '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'buble-loader',
            exclude: /node_modules/,
            options: {
                objectAssign: 'Object.assign'
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }]
    },
    plugins: [
        new ExtractTextPlugin(isProd ? 'index.[chunkhash].css' : 'index.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new HTMLPlugin({
            template: 'src/index.template.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'stats.html',
            defaultSizes: 'parsed',
            openAnalyzer: false
        })
    ]
}

if (isProd) {
    config.devtool = '#source-map'
    config.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    )
}

module.exports = config
