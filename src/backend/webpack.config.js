const path = require('path')
const nodeExternals = require('webpack-node-externals')


const {
  NODE_ENV = 'development',
} = process.env
module.exports = {
  entry: './src/index.ts',
  watch: NODE_ENV === 'development',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve('../../public'),
    filename: 'backend.js'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        'ts-loader',
      ]
    }]
  }
}