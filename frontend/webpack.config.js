const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/templates", to: "templates" },
                { from: "./lib", to: "lib" },
                { from: "./src/styles", to: "css" },
                { from: "./src/static", to: "static" },
                { from: "./src/components", to: "js" },
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};