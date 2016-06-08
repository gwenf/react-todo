var webpack = require('webpack');
var path = require('path');

module.exports = {
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    sourceMapFilename: "./public/bundle.map"
  },
  resolve: {
    root: __dirname,
    alias: {

    },
    extensions: ['', '.js', '.jsx']
  },
  alias: {
    Clock: 'app/components/Clock.jsx'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
      includePaths: [
          path.resolve(__dirname,'./node_modules/foundation-sites/scss')
      ]
  }
};
