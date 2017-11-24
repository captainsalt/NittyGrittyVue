const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Webpack = require("Webpack");

var isProduction = process.env.NODE_ENV == "production";

module.exports = {
    entry: {
        main: [
            "./boot.js",
            "./assets/style/app.scss"
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [{
                test: /\.vue\.html$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        js: "ts-loader",
                        sass: ["vue-style-loader", "css-loader", "sass-loader"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                loader: (isProduction) ?
                    ExtractTextPlugin.extract(["css-loader", "sass-loader"]) : //extract for production
                    ["style-loader", "css-loader", "sass-loader"] //inline styline for dev
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            minify: {
                collapseWhitespace: isProduction,
                minifyJS: isProduction,
                minifyCSS: isProduction,
                collapseInlineTagWhitespace: isProduction,
                collapseBooleanAttributes: isProduction
            }
        }),
    ].concat((isProduction) ?
        //production only plugins
        [
            new CleanWebpackPlugin(["dist"], {
                root: __dirname,
                verbose: false,
            }),
            new ExtractTextPlugin("[name].css"),
            new Webpack.optimize.UglifyJsPlugin(),
            new Webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ] :
        //dev only plugins
        [])
}