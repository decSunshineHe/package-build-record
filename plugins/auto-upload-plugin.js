const { NodeSSH } = require("node-ssh");
const chalk = require("chalk");
class AutoUploadPlugin {
  constructor(options) {
    debugger;
    this.ssh = new NodeSSH();
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      "AutoUploadPlugin",
      async (compilation, callback) => {
        console.log(chalk.green("auto-upload-plugin connet server..."));
        const outputPath = compilation.outputOptions.path;
        this.ssh
          .connect({
            host: this.options.host,
            username: this.options.username,
            password: this.options.password,
          })
          .then(async (res) => {
            const serverDir = this.options.remotePath;
            await this.ssh.execCommand(`rm -rf ${serverDir}/*`);
            await this.uploadFiles(outputPath, serverDir);
            this.ssh.dispose();
            callback();
          })
          .catch((err) => {
            console.log(
              chalk.red(
                `Error: auto-upload-plugin connect sever ${this.options.host} failed. \n`
              )
            );
            callback();
          });
      }
    );
  }

  async uploadFiles(localPath, remotePath) {
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      recursive: true,
      concurrency: 10,
    });
    if (status) {
      console.log(chalk.green("upload success!"));
    } else {
      console.log(chalk.red("upload failed!"));
    }
  }
}

module.exports = AutoUploadPlugin;
