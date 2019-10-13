'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-a535ca7c.js');
require('./chunk-63cbbdfd.js');
require('./chunk-98a92ff2.js');
require('./chunk-7c4ae4d9.js');
require('./chunk-917cb730.js');
var __chunk_6 = require('./chunk-13e039f5.js');
require('./chunk-6418aa9f.js');
var __chunk_8 = require('./chunk-16e31835.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_8.Autocomplete);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
