import './chunk-40949afc.js';
import './chunk-bfad5a4b.js';
import { c as config } from './chunk-9d997597.js';
import { _ as __vue_normalize__, a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js';
import Vue from 'vue';
import { N as NoticeMixin } from './chunk-0bf6dc9c.js';

//
var script = {
  name: 'BToast',
  mixins: [NoticeMixin],
  data: function data() {
    return {
      newDuration: this.duration || config.defaultToastDuration
    };
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"enter-active-class":_vm.transition.enter,"leave-active-class":_vm.transition.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"toast",class:[_vm.type, _vm.position],attrs:{"aria-hidden":!_vm.isActive,"role":"alert"}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Toast = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var ToastProgrammatic = {
  open: function open(params) {
    var message;
    var parent;
    if (typeof params === 'string') message = params;
    var defaultParam = {
      message: message,
      position: config.defaultToastPosition || 'is-top'
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    var propsData = Object.assign(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue;
    var ToastComponent = vm.extend(Toast);
    return new ToastComponent({
      parent: parent,
      el: document.createElement('div'),
      propsData: propsData
    });
  }
};
var Plugin = {
  install: function install(Vue) {
    registerComponentProgrammatic(Vue, 'toast', ToastProgrammatic);
  }
};
use(Plugin);

export default Plugin;
export { ToastProgrammatic };
