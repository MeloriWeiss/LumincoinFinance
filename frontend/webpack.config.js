const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
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
                { from: "./node_modules/jquery/dist/jquery.min.js", to: "lib/js/jquery.min.js" },
                { from: "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js", to: "lib/js/jquery.magnific-popup.min.js" },
                { from: "./node_modules/jquery-ui/dist/jquery-ui.min.js", to: "lib/js/jquery-ui.min.js" },
                { from: "./node_modules/chart.js/dist/chart.js", to: "lib/js/chart.js" },
                { from: "./lib", to: "lib" },
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