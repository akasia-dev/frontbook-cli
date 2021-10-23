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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}
