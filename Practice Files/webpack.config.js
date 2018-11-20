var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        loaders: [
                    {
                        //skips file names that have a js extension
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        loader: ["babel-loader"],
                        query: {
                            presets: ["env", "stage-0", "react"]
                        }
                    }
                ]
        }
}