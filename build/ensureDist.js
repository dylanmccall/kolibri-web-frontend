const path = require('path');
const mkdirp = require('mkdirp');

/*
 * From <https://github.com/learningequality/kolibri/blob/develop/packages/kolibri-tools/lib/ensureDist.js>
 */

function ensureDist() {
  mkdirp.sync(path.resolve(__dirname, '../dist'));
}

module.exports = ensureDist;
