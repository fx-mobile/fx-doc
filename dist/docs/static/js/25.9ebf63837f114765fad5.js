webpackJsonp([25],{189:function(s,t,a){s.exports=a(301)},301:function(s,t,a){var v=a(2)(null,a(350),null,null);s.exports=v.exports},350:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Search")]),s._v(" "),a("blockquote",[a("p",[s._v("搜索框，可显示搜索结果列表。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("引入")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Search } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(Search.name, Search);\n")])]),s._v(" "),a("h2",[s._v("例子")]),s._v(" "),a("p",[s._v("基础用法")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":value.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("设置显示文字")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":value.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("cancel-text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"取消"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"搜索"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("带搜索结果")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":value.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":result.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"result"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("自定义搜索结果")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":value.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in result"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item.title"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item.value"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("搜索结果绑定值")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("cancel-text")]),s._v(" "),a("td",[s._v("取消按钮文字")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("取消")])]),s._v(" "),a("tr",[a("td",[s._v("placeholder")]),s._v(" "),a("td",[s._v("搜索框占位内容")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("搜索")])]),s._v(" "),a("tr",[a("td",[s._v("result")]),s._v(" "),a("td",[s._v("搜索结果列表")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td")])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("自定义搜索结果列表")])])])])])])}]}}});
//# sourceMappingURL=25.9ebf63837f114765fad5.js.map