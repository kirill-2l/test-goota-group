const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      "window.jQuery": "jquery",
      jquery: "jquery",
      "window.jquery": "jquery",
      $: "jquery",
      "window.$": "jquery",
    }),
  ],

  entry: {
    main: "./src/js/index.js",
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [["@babel/preset-env", { modules: false }]],
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      "%modules%": path.resolve(__dirname, "src/blocks/modules"),
      "%components%": path.resolve(__dirname, "src/blocks/components"),
    },
  },
};
