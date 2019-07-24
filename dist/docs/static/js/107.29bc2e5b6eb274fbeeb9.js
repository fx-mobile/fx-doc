webpackJsonp([107],{170:function(s,t,a){s.exports=a(219)},219:function(s,t,a){var l=a(2)(null,a(417),null,null);s.exports=l.exports},417:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Cell")]),s._v(" "),a("blockquote",[a("p",[s._v("单元格，可用作展示列表信息、链接或者表单等。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("引入")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Cell } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(Cell.name, Cell);\n")])]),s._v(" "),a("h2",[s._v("例子")]),s._v(" "),a("p",[s._v("基础用法")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"说明文字"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("可点击的链接")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"//github.com"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"带链接"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("带图标")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"more"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"带 icon"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("带自定义图标")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("icon 是图片"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"icon"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"../assets/100x100.png"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"24"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"24"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("自定义内容")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"color: green"')]),s._v(">")]),s._v("这里是元素"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("带备注信息")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"描述信息"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("图标")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("back, more")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("标题")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("内容")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("label")]),s._v(" "),a("td",[s._v("备注信息，显示在标题下方")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("is-link")]),s._v(" "),a("td",[s._v("链接，会显示箭头图标。搭配 href 属性使用")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td")])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("自定义显示内容")])]),s._v(" "),a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("自定义标题")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("自定义图标")])])])])])])}]}}});
//# sourceMappingURL=107.29bc2e5b6eb274fbeeb9.js.map