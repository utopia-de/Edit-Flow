!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);n(5),n(6);var o=wp.i18n.__,r=wp.editPost.PluginPostStatusInfo,u=wp.plugins.registerPlugin,s=wp.data,i=s.subscribe,l=s.dispatch,a=s.select,c=s.withSelect,d=s.withDispatch,f=wp.compose.compose,p=wp.components.SelectControl,m=window.EditFlowCustomStatuses.map(function(t){return{label:t.name,value:t.slug}}),b=function(t){return m.find(function(e){return e.value===t}).label},w=function(t){document.querySelector(".editor-post-save-draft")&&(document.querySelector(".editor-post-save-draft").innerText="".concat(o("Save")," ").concat(t))};i(function(){var t=a("core/editor").getEditedPostAttribute("status");void 0!==t&&"publish"!==t&&w(b(t))}),l("core/editor").editPost({status:ef_default_custom_status});u("edit-flow-custom-status",{icon:"edit-flow",render:f(c(function(t){return{status:t("core/editor").getEditedPostAttribute("status")}}),d(function(t){return{onUpdate:function(e){t("core/editor").editPost({status:e}),w(b(e))}}}))(function(t){var e=t.onUpdate,n=t.status;return wp.element.createElement(r,{className:"edit-flow-extended-post-status edit-flow-extended-post-status-".concat(n)},wp.element.createElement("h4",null,o("publish"!==n?"Extended Post Status":"Extended Post Status Disabled.","edit-flow")),"publish"!==n?wp.element.createElement(p,{label:"",value:n,options:m,onChange:e}):null,wp.element.createElement("small",{className:"edit-flow-extended-post-status-note"},o("publish"!==n?"Note: this will override all status settings above.":"To select a custom status, please unpublish the content first.","edit-flow")))})})},,,,function(t,e){},function(t,e){}]);
//# sourceMappingURL=custom-status.build.js.map