/*
 * FIXME: I don't know what this thing's problem is:
 *        <https://github.com/learningequality/kolibri-design-system/blob/main/lib/KResponsiveWindowMixin.js#L88-L89>
 */

import Vue from 'vue'

// core-app/index.js mounts the app instead.

import coreApp from '@/core/core-app/index.js'
window.kolibriCoreAppGlobal = coreApp;

Vue.config.productionTip = false

// import App from './App.vue'
import App from '@/learn/app'

const app = new App();
// FIXME: Constructing the app has side-effects; it mounts _itself_.
console.log("APP", app);
