const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "hidden-source-map",
  output: {
    filename: "js/[name].[chunkhash:4].js",
    path: path.resolve(__dirname, "../dist"),
  },
});
