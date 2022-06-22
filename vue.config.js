module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    externals: ["vue", "vue-router"],
    output: {
      libraryTarget: "system",
    },
  },
  filenameHashing: false,
}
