const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    module: {
        rules: [
            {
                test: /\.vue\.html$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        js: "ts-loader",
                        // ts: "ts-loader",
                        sass: ["vue-style-loader", "css-loader", "sass-loader"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CleanWebpackPlugin(["dist"], {
            root: __dirname,
            verbose: false,
        }),
        new ExtractTextPlugin("[name].css")
    ]
}