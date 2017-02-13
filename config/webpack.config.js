const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            ASSET_FOLDER: JSON.stringify(
                'production' === process.env.NODE_ENV ? 'build/asset' : 'asset'
            )
        },
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            context: __dirname,
            postcss: [
                autoprefixer
            ]
        }
    }),
    new HtmlWebpackPlugin({
        inject: true,
        filename: 'index.html',
        template: './src/index.html',
        excludeChunks: ['404'],
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
    new HtmlWebpackPlugin({
        inject: true,
        filename: '404.html',
        template: './404.html',
        excludeChunks: ['bundle'],
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
    new CleanWebpackPlugin(['build'], {
        root: path.resolve(__dirname, '../'),
        verbose: true,
        dry: false,
        exclude: []
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
    entry: {
        bundle: './src/index.jsx',
        '404': './src/404.js',
    },
    output: {
        path: 'build',
        filename: '[name].js'
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
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 
                'postcss-loader',
            ]
        }, {
            test: /\.(jpg|png|svg|ttf)$/,
            loader: 'url-loader?limit=1024000',
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
