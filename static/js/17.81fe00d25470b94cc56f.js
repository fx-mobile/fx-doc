webpackJsonp([17],{191:function(s,t,a){s.exports=a(309)},309:function(s,t,a){var v=a(2)(null,a(403),null,null);s.exports=v.exports},403:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Swipe")]),s._v(" "),a("blockquote",[a("p",[s._v("轮播图，可自定义轮播时间间隔、动画时长等。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("引入")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Swipe, SwipeItem } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(Swipe.name, Swipe);\nVue.component(SwipeItem.name, SwipeItem);\n")])]),s._v(" "),a("h2",[s._v("例子")]),s._v(" "),a("p",[s._v("基础用法")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":auto")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"4000"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("1"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("2"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("3"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("隐藏 indicators")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":show-indicators")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("1"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("2"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("3"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("取消自动播放")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":auto")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"0"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("1"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("2"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("3"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe-item")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-swipe")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("speed")]),s._v(" "),a("td",[s._v("动画持时（毫秒）")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("300")])]),s._v(" "),a("tr",[a("td",[s._v("auto")]),s._v(" "),a("td",[s._v("自动播放的时间间隔（毫秒）")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("3000")])]),s._v(" "),a("tr",[a("td",[s._v("continuous")]),s._v(" "),a("td",[s._v("是否可以循环播放")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("showIndicators")]),s._v(" "),a("td",[s._v("是否显示 indicators")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("prevent")]),s._v(" "),a("td",[s._v("是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("h3",[s._v("mt-swipe")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("一个或多个 "),a("code",[s._v("mt-swipe-item")]),s._v(" 组件")])])])])]),a("h3",[s._v("mt-swipe-item")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("单个轮播图的内容")])])])])])])}]}}});
//# sourceMappingURL=17.81fe00d25470b94cc56f.js.map