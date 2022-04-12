const { defineConfig } = require('@vue/cli-service')

const webpack = require('webpack')

// const coreExternals = require('./build/apiSpecExportTools').coreExternals()
const coreAliases = require('./build/apiSpecExportTools').coreAliases()

/* This is straight from kolibri-tools/lib/webpack.config.base.js. I have no
 * idea what its problem is.
 */
const data = {
    name: "kolibri-web-frontend",
    version: "0.0~devel",
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: coreAliases
    },
    plugins: [
      // Plugins know their own name, by having a variable that we define here, based on the name
      // they are given in kolibri_plugins.py inside their relevant module.
      // Also define the current plugin version (for kolibri plugins bundled with kolibri, this is
      // the kolibri version).
      // Also add the copyright year for auto updated copyright footers.
      new webpack.DefinePlugin({
        __kolibriModuleName: JSON.stringify(data.name),
        __version: JSON.stringify(data.version),
        __copyrightYear: new Date().getFullYear(),
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
    // <https://github.com/vueuse/vueuse/issues/718>
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }]
    }
  }
})
