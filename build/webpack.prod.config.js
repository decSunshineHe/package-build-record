const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const AutoUploadPlugin = require("../plugins/auto-upload-plugin");

const webpackConfig = merge(baseConfig, {
  mode: "production",
  devtool: "hidden-source-map",
  output: {
    filename: "js/[name].[chunkhash:4].js",
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    // new AutoUploadPlugin({
    //   host: "192.168.0.1",
    //   username: "root",
    //   password: "123456",
    //   remotePath: "/home/",
    // }),
  ],
});

console.log("222", process.argv);

module.exports = webpackConfig;
