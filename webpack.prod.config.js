var path= require('path');

module.exports = {
  entry: "./src/select-box.js",
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-select-box.js',
    sourceMapFilename: 'react-select-box.js.map',
    library: 'ReactSelectBox',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'React',
    'react/addons': 'React'
  },
  debug: true,
  devtool: '#source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
