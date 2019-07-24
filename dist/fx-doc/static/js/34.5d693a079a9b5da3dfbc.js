webpackJsonp([34],{292:function(s,t,a){var v=a(2)(null,a(352),null,null);s.exports=v.exports},352:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Range")]),s._v(" "),a("blockquote",[a("p",[s._v("A slide block. Custom step, min value and max value supported.")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("Import")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Range } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(Range.name, Range);\n")])]),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("p",[s._v("Sync "),a("code",[s._v("value")]),s._v(" with one of your vue instance variables")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rangeValue"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("More configurable options")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rangeValue"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"90"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":step")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":bar-height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"5"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("Show texts on both sides of "),a("code",[s._v("mt-range")])]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rangeValue"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"start"')]),s._v(">")]),s._v("0"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"end"')]),s._v(">")]),s._v("100"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-range")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("option")]),s._v(" "),a("th",[s._v("description")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("acceptable values")]),s._v(" "),a("th",[s._v("default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("value of the range")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("min")]),s._v(" "),a("td",[s._v("min possible value")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("max")]),s._v(" "),a("td",[s._v("max possible value")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("100")])]),s._v(" "),a("tr",[a("td",[s._v("step")]),s._v(" "),a("td",[s._v("step of the range")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("1")])]),s._v(" "),a("tr",[a("td",[s._v("disabled")]),s._v(" "),a("td",[s._v("if the range is disabled")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("barHeight")]),s._v(" "),a("td",[s._v("height of the slide bar")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("1")])])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("start")]),s._v(" "),a("td",[s._v("DOM on the left of the slide block")])]),s._v(" "),a("tr",[a("td",[s._v("end")]),s._v(" "),a("td",[s._v("DOM on the right of the slide block")])])])])])])}]}},93:function(s,t,a){s.exports=a(292)}});
//# sourceMappingURL=34.5d693a079a9b5da3dfbc.js.map