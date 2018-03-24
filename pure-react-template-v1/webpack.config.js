/**
 * This file is actually a node script.
 * Please refer to the nodejs docs.
 */

var path = require('path');

// __dirname: the absolute path of the project root folder
// __filename: he absolute path of the current file in the project

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};