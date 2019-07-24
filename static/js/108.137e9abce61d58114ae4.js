webpackJsonp([108],{218:function(s,t,a){var l=a(2)(null,a(422),null,null);s.exports=l.exports},422:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Cell")]),s._v(" "),a("blockquote",[a("p",[s._v("A cell to display list, link or form.")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("Import")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Cell } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(Cell.name, Cell);\n")])]),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("p",[s._v("Basic usage")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"说明文字"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("Clickable link")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("to")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"//github.com"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"带链接"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("With icon")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"more"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"带 icon"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("With custom icon")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("icon 是图片"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"icon"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"../assets/100x100.png"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"24"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"24"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("Custom content")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题文字"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"color: green"')]),s._v(">")]),s._v("这里是元素"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("With description")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"描述信息"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("option")]),s._v(" "),a("th",[s._v("description")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("acceptable values")]),s._v(" "),a("th",[s._v("default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("cell icon")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("back, more")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("title of the cell")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("to")]),s._v(" "),a("td",[s._v("link")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("content of the cell")]),s._v(" "),a("td",[s._v("*")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("label")]),s._v(" "),a("td",[s._v("a description shown underneath the title")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("is-link")]),s._v(" "),a("td",[s._v("if the cell is a link, works with the "),a("code",[s._v("to")]),s._v(" attribute")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td")])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("custom content")])]),s._v(" "),a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("custom title")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("custom icon")])])])])])])}]}},75:function(s,t,a){s.exports=a(218)}});
//# sourceMappingURL=108.137e9abce61d58114ae4.js.map