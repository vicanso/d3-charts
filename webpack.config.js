const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      "d3",
      "react",
      "react-dom",
      "react-enroute",
      "moment",
    ],
    app: "./examples/assets/index.js",
  },
  output: {
    path: __dirname + '/examples/assets',
    filename: 'bundle.[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      // filename: "vendor.js"
      // (Give the chunk a different name)
      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    // }),
  ],
};
