webpackJsonp([75],{145:function(s,t,a){s.exports=a(251)},251:function(s,t,a){var v=a(2)(null,a(413),null,null);s.exports=v.exports},413:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Infinite scroll")]),s._v(" "),a("blockquote",[a("p",[s._v("无限滚动指令。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("引入")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { InfiniteScroll } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.use(InfiniteScroll);\n")])]),s._v(" "),a("h2",[s._v("例子")]),s._v(" "),a("p",[s._v("为 HTML 元素添加 "),a("code",[s._v("v-infinite-scroll")]),s._v(" 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 "),a("code",[s._v("infinite-scroll-distance")]),s._v(" 设置）时，绑定到 "),a("code",[s._v("v-infinite-scroll")]),s._v(" 指令的方法就会被触发。")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("ul")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("v-infinite-scroll")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"loadMore"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("infinite-scroll-disabled")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"loading"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("infinite-scroll-distance")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in list"')]),s._v(">")]),a("span",[s._v("{{")]),s._v(" item "),a("span",[s._v("}}")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("ul")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[s._v("loadMore() {\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".loading = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(";\n  setTimeout("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" last = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".list["),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".list.length - "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("];\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("; i <= "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("; i++) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".list.push(last + i);\n    }\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".loading = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(";\n  }, "),a("span",{staticClass:"hljs-number"},[s._v("2500")]),s._v(");\n}\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("infinite-scroll-disabled")]),s._v(" "),a("td",[s._v("若为真，则无限滚动不会被触发")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("infinite-scroll-distance")]),s._v(" "),a("td",[s._v("触发加载方法的滚动距离阈值（像素）")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("infinite-scroll-immediate-check")]),s._v(" "),a("td",[s._v("若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("infinite-scroll-listen-for-event")]),s._v(" "),a("td",[s._v("一个 event，被执行时会立即检查是否需要执行加载方法。")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td"),s._v(" "),a("td")])])])])])}]}}});
//# sourceMappingURL=75.cb0c1598d41ea2019d2c.js.map