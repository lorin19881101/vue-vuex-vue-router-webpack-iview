webpackJsonp([1],{66:function(e,t,n){"use strict";function a(e){n(72)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(68),u=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);var o=n(74),i=n(0),s=a,l=i(u.a,o.a,!1,s,null,null);t.default=l.exports},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(4),u=n(5),c=(0,r.createNamespacedHelpers)("detail"),o=c.mapState,i=c.mapMutations;t.default={computed:a({path:function(){return"/detal"}},o({name:function(e){return e.name}})),methods:a({},i({updateName:u.UPDATE_DETAIL_NAME}))}},72:function(e,t,n){var a=n(73);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(3)("cdd980c0",a,!0)},73:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,"",""])},74:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("path: "+e._s(e.path))]),e._v("\n\t"+e._s(e.name)+"\n\t"),n("button",{on:{click:e.updateName}},[e._v("change name")])])},r=[],u={render:a,staticRenderFns:r};t.a=u}});