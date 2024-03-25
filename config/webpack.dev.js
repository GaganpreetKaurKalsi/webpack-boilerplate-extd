const { merge } = require('webpack-merge')
const webpack = require('webpack')

const common = require('./webpack.common')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin({
      activeModules: true,
      entries: false,
      modules: true,
      // modulesCount: 5000,
      profile: false,
      dependencies: false,
      // dependenciesCount: 10000,
      percentBy: 'modules',
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    removeAvailableModules: false,
    removeEmptyChunks: false,
    usedExports: true,
    sideEffects: true,
    // concatenateModules: true,
    // occurrenceOrder: true,
    flagIncludedChunks: true,
    splitChunks: {
      chunks: 'all',
      minSize: 50000,
      maxAsyncRequests: 12,
      maxInitialRequests: 12,
      cacheGroups: {
        default: false,
        compapp: {
          test: /[\\/]src[\\/](AppComponents)[\\/]/,
          chunks: 'all',
          enforce: true,
          filename: 'compapp.[contenthash].js',
        },
        compapp2: {
          test: /[\\/]src[\\/](AppComponents2)[\\/]/,
          chunks: 'all',
          enforce: true,
          filename: 'compapp2.[contenthash].js',
        },
        compapp3: {
          test: /[\\/]src[\\/](AppComponents3)[\\/]/,
          chunks: 'all',
          enforce: true,
          filename: 'compapp3.[contenthash].js',
        },
        compapp4: {
          test: /[\\/]src[\\/](AppComponents4)[\\/]/,
          chunks: 'all',
          enforce: true,
          filename: 'compapp4.[contenthash].js',
        },
        uicomp: {
          test: /[\\/]src[\\/](UIComponents\d+)[\\/]/,
          chunks: 'all',
          enforce: true,
          filename: 'uicomp.[contenthash].js',
        },
        svgcomp: {
          test: /[\\/]src[\\/](SvgComponents)[\\/]/,
          chunks: 'all',
          enforce: true,
          filename: 'svgcomp.[contenthash].js',
        },
        dspkg: {
          test: /[\\/]node_modules[\\/]@toddle-edu[\\/](doc-editor|ds-icons|ds-theme|ds-web)[\\/]/,
          chunks: 'all',
          priority: 10,
          enforce: true,
          filename: 'dspkg.[contenthash].js',
        },
        reldep: {
          test: /[\\/]node_modules[\\/](@sentry|@sentry-internal)[\\/]/,
          chunks: 'all',
          priority: 9,
          enforce: true,
          filename: 'reldep.[contenthash].js',
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 5,
          enforce: true,
          filename: 'vendor.[contenthash].js',
        },
      },
    },
  },
})
