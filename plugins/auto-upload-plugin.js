const { NodeSSH } = require("node-ssh");

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
        const outputPath = compilation.outputOptions.path;
        await this.connectServer();

        const serverDir = this.options.remotePath;
        await this.ssh.execCommand(`rm -rf ${serverDir}/*`);

        await this.uploadFiles(outputPath, serverDir);

        this.ssh.dispose();
        callback();
      }
    );
  }

  async connectServer() {
    await this.ssh.connect({
      host: this.options.host,
      username: this.options.username,
      password: this.options.password,
    });
  }

  async uploadFiles(localPath, remotePath) {
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      recursive: true,
      concurrency: 10,
    });
    console.log("upload" + status ? "success" : "failed");
  }
}

module.exports = AutoUploadPlugin;
