/*
 * FIXME: I don't know what this thing's problem is:
 *        <https://github.com/learningequality/kolibri-design-system/blob/main/lib/KResponsiveWindowMixin.js#L88-L89>
 */

import Vue from 'vue'
import App from './App.vue'

/* eslint-disable-next-line no-unused-vars */
import kolibriCoreAppGlobal from '@/core/core-app/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
