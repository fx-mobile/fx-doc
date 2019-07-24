webpackJsonp([35],{156:function(s,t,a){s.exports=a(291)},291:function(s,t,a){var v=a(2)(null,a(345),null,null);s.exports=v.exports},345:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Range")]),s._v(" "),a("blockquote",[a("p",[s._v("滑块，支持自定义步长、区间等。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("引入")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Range } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(Range.name, Range);\n")])]),s._v(" "),a("h2",[s._v("例子")]),s._v(" "),a("p",[s._v("将一个本地变量与 "),a("code",[s._v("range")]),s._v(" 的 "),a("code",[s._v("value")]),s._v(" 属性同步即可实现双向绑定")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rangeValue"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("更多的配置项")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rangeValue"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"90"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":step")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":bar-height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"5"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("可在滑块两侧显示文字")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rangeValue"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"start"')]),s._v(">")]),s._v("0"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"end"')]),s._v(">")]),s._v("100"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("滑块的值")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("min")]),s._v(" "),a("td",[s._v("最小值")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("max")]),s._v(" "),a("td",[s._v("最大值")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("100")])]),s._v(" "),a("tr",[a("td",[s._v("step")]),s._v(" "),a("td",[s._v("步长")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("1")])]),s._v(" "),a("tr",[a("td",[s._v("disabled")]),s._v(" "),a("td",[s._v("是否禁用")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("barHeight")]),s._v(" "),a("td",[s._v("滑槽的线宽（像素）")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("1")])])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("start")]),s._v(" "),a("td",[s._v("滑块左侧 DOM")])]),s._v(" "),a("tr",[a("td",[s._v("end")]),s._v(" "),a("td",[s._v("滑块右侧 DOM")])])])])])])}]}}});
//# sourceMappingURL=35.8f17a69d91007b979220.js.map