const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new HtmlWebpackPlugin({
        inject: true,
        template: './src/index.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        }
    }),
    new CopyWebpackPlugin([{
        from: './src/asset',
        to: 'asset'
    }], {
        ignore: ['.DS_Store']
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    }))
}

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            ]
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }],
    },
    plugins: plugins,
    devServer: {
        contentBase: 'build',
        devtool: 'eval',
        hot: true,
        inline: true,
        port: 8080,
        outputPath: 'build',
        historyApiFallback: true,
    },
};
