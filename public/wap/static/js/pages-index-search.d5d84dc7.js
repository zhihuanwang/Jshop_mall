(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-search"],{"16d3":function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"search"},[i("v-uni-view",{staticClass:"search-c",class:t.$store.state.searchStyle},[i("v-uni-image",{staticClass:"icon search-icon",attrs:{src:"/static/image/zoom.png"}}),i("v-uni-input",{staticClass:"search-input",attrs:{"placeholder-class":"search-input-p",placeholder:"请输入关键字搜索",focus:!0,"auto-focus":t.focus,fixed:t.focus},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1),i("v-uni-button",{staticClass:"btn btn-g",attrs:{"hover-class":"btn-hover2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜索")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.keys.length>0,expression:"keys.length > 0"}],staticClass:"history-c"},[i("v-uni-view",{staticClass:"history-title"},[i("v-uni-view",{staticClass:"ht-left"},[t._v("历史记录")]),i("v-uni-view",{staticClass:"ht-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteKey.apply(void 0,arguments)}}},[t._v("清除")])],1),i("v-uni-view",{staticClass:"history-body"},t._l(t.keys,function(e,a){return i("v-uni-view",{key:a,staticClass:"hb-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toNav(e)}}},[t._v(t._s(e||""))])}),1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.recommend&&t.recommend.length>0,expression:"recommend && recommend.length > 0"}],staticClass:"history-c"},[i("v-uni-view",{staticClass:"history-title"},[i("v-uni-view",{staticClass:"ht-left"},[t._v("搜索发现")])],1),i("v-uni-view",{staticClass:"history-body"},t._l(t.recommend,function(e,a){return i("v-uni-view",{key:a,staticClass:"hb-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toNav(e)}}},[t._v(t._s(e||""))])}),1)],1)],1)},n=[];i.d(e,"b",function(){return s}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return a})},"33f5":function(t,e,i){"use strict";var a=i("a5ef"),s=i.n(a);s.a},"3e3a":function(t,e,i){"use strict";i.r(e);var a=i("9cfb"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},"4d3f":function(t,e,i){"use strict";i.r(e);var a=i("16d3"),s=i("3e3a");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("33f5");var o,r=i("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"74571f60",null,!1,a["a"],o);e["default"]=c.exports},"9cfb":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{keys:[],key:"",navType:"toNav",focus:!0}},computed:{recommend:function(){return this.$store.state.config.recommend_keys}},methods:{search:function(){var t=this.key;if(""!=t){var e=this.$db.get("search_key");e||(e=[]);var i=!0;for(var a in e)e[a]==t&&(i=!1);i&&e.unshift(t),this.$db.set("search_key",e),this.$db.set("search_term",t),this.$common.navigateTo("/pages/classify/index?key="+t)}},deleteKey:function(){this.keys=[],this.$db.del("search_key")},toNav:function(t){this.$db.set("search_term",t);var e=this.$db.get("search_key");e||(e=[]);var i=!0;for(var a in e)e[a]==t&&(i=!1);i&&e.unshift(t),this.$db.set("search_key",e),this.$common.navigateTo("/pages/classify/index?key="+t)}},onShow:function(t){this.keys=this.$db.get("search_key"),this.key=this.$db.get("search_term"),this.focus=!0},onUnload:function(){this.$db.set("search_term","")}};e.default=a},a5ef:function(t,e,i){var a=i("a865");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("ba9e5f90",a,!0,{sourceMap:!1,shadowMode:!1})},a865:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".search[data-v-74571f60]{display:-webkit-box;display:-webkit-flex;display:flex}.search-c[data-v-74571f60]{width:80%;margin-right:2%}.search-input-p[data-v-74571f60]{padding:0!important}.search .btn[data-v-74571f60]{width:18%;border:none;background-color:#f1f1f1;font-size:%?28?%;color:#333;border-radius:%?6?%;line-height:%?72?%}.history-c[data-v-74571f60]{padding:%?20?% %?26?%}.history-title[data-v-74571f60]{overflow:hidden}.ht-left[data-v-74571f60]{float:left;font-size:%?28?%;color:#333}.ht-right[data-v-74571f60]{float:right;color:#999;font-size:%?26?%}.history-body[data-v-74571f60]{overflow:hidden;margin-top:%?20?%;min-height:%?200?%}.hb-item[data-v-74571f60]{display:inline-block;float:left;background-color:#fff;color:#888;margin-right:%?20?%;margin-bottom:%?14?%;font-size:%?26?%;padding:%?10?% %?20?%}.square[data-v-74571f60]{border-radius:0}.radius[data-v-74571f60]{border-radius:%?12?%}",""])}}]);