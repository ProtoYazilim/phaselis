const path = require("path");

module.exports = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(__dirname, `node_modules/${name}`),
      },
    ),
  },
  watchFolders: [path.resolve(__dirname, "example")],
};
