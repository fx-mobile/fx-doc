webpackJsonp([87],{174:function(s,t,a){s.exports=a(239)},239:function(s,t,a){var v=a(2)(null,a(427),null,null);s.exports=v.exports},427:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Header")]),s._v(" "),a("blockquote",[a("p",[s._v("顶部导航栏，支持显示按钮、自定义文字和固定在顶部。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("引入")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Header } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(Header.name, Header);\n")])]),s._v(" "),a("h2",[s._v("例子")]),s._v(" "),a("p",[s._v("固定在页面顶部")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-header")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("fixed")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"固定在顶部"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-header")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("设置 "),a("code",[s._v("left")]),s._v(" 或 "),a("code",[s._v("right")]),s._v(" slot")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-header")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题过长会隐藏后面的内容啊哈哈哈哈"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-link")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"'/'\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"back"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left"')]),s._v(">")]),s._v("返回"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"more"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-header")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("设置多个按钮")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-header")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"多个按钮"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-link")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"'/'\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"back"')]),s._v(">")]),s._v("返回"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClose"')]),s._v(">")]),s._v("关闭"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"more"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-header")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("fixed")]),s._v(" "),a("td",[s._v("固定在页面顶部")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("标题")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("left")]),s._v(" "),a("td",[s._v("左边显示元素")])]),s._v(" "),a("tr",[a("td",[s._v("right")]),s._v(" "),a("td",[s._v("右边显示元素")])])])])])])}]}}});
//# sourceMappingURL=87.3949c67598b9b4f50f8c.js.map