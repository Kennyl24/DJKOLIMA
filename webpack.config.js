var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
  // module: {
  //   rules: [
  //     {
  //       test: /.jsx?$/,
  //       loader: 'babel-loader',
  //       exclude: /node_modules/,      
  //       query: {
  //         presets: [ 'react', 'es2015', 'stage-0']
  //       }
  //     }, {
  //       test: /\.scss$/,
  //       loaders: ['style-loader', 'css-loader', 'sass-loader'],
  //       include: path.resolve(__dirname, '../')
  //     }
  //   ]
  // }
};