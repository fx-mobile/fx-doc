webpackJsonp([58],{150:function(s,t,a){s.exports=a(268)},268:function(s,t,a){var v=a(2)(null,a(340),null,null);s.exports=v.exports},340:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Palette Button")]),s._v(" "),a("blockquote",[a("p",[s._v("调色板按钮")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("引入")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { PaletteButton } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(PaletteButton.name, PaletteButton);\n")])]),s._v(" "),a("h2",[s._v("例子")]),s._v(" "),a("p",[s._v("基本用法")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-palette-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"+"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-palette-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("设置参数和事件，以及手动触发事件")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[s._v("    methods: {\n      main_log(val) {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'main_log'")]),s._v(", val);\n      },\n      sub_log(val) {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'sub_log'")]),s._v(", val);\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.target_1.collapse();\n      }\n    }\n")])]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-palette-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"+"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@expand")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"main_log('expand')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@expanded")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"main_log('expanded')\"")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@collapse")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"main_log('collapse')\"")]),s._v("\n      "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rt"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"pb"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":radius")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"80"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"target_1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("mainButtonStyle")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"color:#fff;background-color:#26a2ff;"')]),s._v("\n      "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left:30px;"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button indexicon icon-popup"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@touchstart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sub_log(1)"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button indexicon icon-popup"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@touchstart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sub_log(2)"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"my-icon-button indexicon icon-popup"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@touchstart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sub_log(3)"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-palette-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("选项")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("主按钮内容")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("offset")]),s._v(" "),a("td",[s._v("角度偏移量")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Math.PI / 4")])]),s._v(" "),a("tr",[a("td",[s._v("direction")]),s._v(" "),a("td",[s._v("按钮展开方向")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("lt, t, rt, r, rb, b, lb, l")]),s._v(" "),a("td",[s._v("lt")])]),s._v(" "),a("tr",[a("td",[s._v("radius")]),s._v(" "),a("td",[s._v("按钮展开半径")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("90")])]),s._v(" "),a("tr",[a("td",[s._v("mainButtonStyle")]),s._v(" "),a("td",[s._v("主按钮样式")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")])])])]),a("p",[a("img",{attrs:{src:"/docs/static/palette-button.png",alt:"一图胜千言"}})]),s._v(" "),a("h2",[s._v("方法")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("方法名")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("toggle")]),s._v(" "),a("td",[s._v("切换按钮展开/收起状态")])]),s._v(" "),a("tr",[a("td",[s._v("expand")]),s._v(" "),a("td",[s._v("展开按钮")])]),s._v(" "),a("tr",[a("td",[s._v("collapse")]),s._v(" "),a("td",[s._v("收起按钮")])])])])]),a("h2",[s._v("事件")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("expand")]),s._v(" "),a("td",[s._v("按钮开始展开")])]),s._v(" "),a("tr",[a("td",[s._v("expanded")]),s._v(" "),a("td",[s._v("按钮完全展开（动画效果执行结束）")])]),s._v(" "),a("tr",[a("td",[s._v("collapse")]),s._v(" "),a("td",[s._v("按钮开始收起")])])])])])])}]}}});
//# sourceMappingURL=58.af1528b81e9d8a9fac2b.js.map