'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-a535ca7c.js');
require('./chunk-63cbbdfd.js');
require('./chunk-98a92ff2.js');
require('./chunk-917cb730.js');
var __chunk_6 = require('./chunk-13e039f5.js');
var __chunk_19 = require('./chunk-b195fc56.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_19.Pagination);
    __chunk_6.registerComponent(Vue, __chunk_19.PaginationButton);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
