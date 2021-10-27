const TerserPlugin = require('terser-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: './dist/src/index.js',
  target: 'node',
  externals: [
    nodeExternals({
      allowlist: ['chalk', 'is-interactive']
    })
  ],
  output: {
    path: path.resolve(__dirname, 'export'),
    filename: 'frontbook-cli.js',
    publicPath: './dist/src/index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}
