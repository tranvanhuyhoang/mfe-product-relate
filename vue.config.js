const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    externals: ["vue", "vue-router", "mfe-share-lib"],
    output: {
      libraryTarget: "system",
      filename: "js/app.js",
    },
  },
  filenameHashing: false,
})
