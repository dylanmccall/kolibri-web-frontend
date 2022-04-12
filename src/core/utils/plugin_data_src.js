/*
 * Note - this module is not meant to be imported directly. Instead, use the global
 * alias 'plugin_data', which is provided by apiSpecExportTools.js
 */

// FIXME: This should be replaced automatically from vue.config.js?!!!

const __kolibriModuleName = "kolibri-web-frontend"
export default (global['kolibriPluginDataGlobal'] || {})[__kolibriModuleName] || {};
