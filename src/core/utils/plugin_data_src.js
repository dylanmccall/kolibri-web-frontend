/*
 * Note - this module is not meant to be imported directly. Instead, use the global
 * alias 'plugin_data', which is provided by apiSpecExportTools.js
 */

// FIXME: __kolibriModuleName should be replaced automatically from vue.config.js?!!!
// const __kolibriModuleName = "kolibri-web-frontend"
// const __kolibriModuleName = "kolibri.core.default_frontend"
export default {
    ...global['kolibriPluginDataGlobal']["kolibri.core.default_frontend"],
    ...global['kolibriPluginDataGlobal']["kolibri.plugins.learn.app"]
}
// export default (global['kolibriPluginDataGlobal'] || {})[__kolibriModuleName] || {};
