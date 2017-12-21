/**
 * task 1: specify entry point
 * task 2: specify output file
 */

const path = require('path');

// the way to expose something
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public")
      }
};