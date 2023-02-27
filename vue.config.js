const path = require("path");

const { defineConfig } = require("@vue/cli-service");
module.exports = {
  ...defineConfig({
    transpileDependencies: true,
  }),
  configureWebpack: {
    resolve: {
      alias: {
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
  },
};
