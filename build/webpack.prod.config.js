const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const UploadServerPlugin = require("upload-server-webpack-plugin");

const isUpload = process.env.npm_config_upload;
const webpackConfig = merge(baseConfig, {
  mode: "production",
  devtool: "hidden-source-map",
  output: {
    filename: "js/[name].[chunkhash:4].js",
    path: path.resolve(__dirname, "../dist"),
  },
});

if (isUpload) {
  webpackConfig.plugins.push(
    new UploadServerPlugin({
      host: "192.168.0.99",
      username: "root",
      password: "123456",
      remotePath: "/home/",
    })
  );
}

module.exports = webpackConfig;
