module.exports = {
  entry: './src/phosphor-layout/index.js',
  output: {
    filename: './src/public/phosphor-layout.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
}
