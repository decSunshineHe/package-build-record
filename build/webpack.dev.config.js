const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-source-map",
  output: {
    filename: "[name].[chunkhash:4].js",
    path: path.resolve(__dirname, "../dist"),
  },

  devServer: {
    port: 9999,
    open: true,
    static: {
      directory: path.join(__dirname, "../dist"),
    },
  },
  plugins: [],
});
