webpackJsonp([56],{119:function(s,t,a){s.exports=a(270)},270:function(s,t,a){var v=a(2)(null,a(429),null,null);s.exports=v.exports},429:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Picker")]),s._v(" "),a("blockquote",[a("p",[s._v("A picker with multi-slot interaction.")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("Import")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Picker } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v(";\n\nVue.component(Picker.name, Picker);\n")])]),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("p",[s._v("Configure "),a("code",[s._v("slots")]),s._v(". When any picked value changes，the "),a("code",[s._v("change")]),s._v(" event triggers. "),a("code",[s._v("change")]),s._v(" event has two parameters: the vue instance of the "),a("code",[s._v("picker")]),s._v(" and an array made up of the picked values of each slot")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-picker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":slots")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"slots"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onValuesChange"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-picker")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    onValuesChange(picker, values) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (values["),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("] > values["),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("]) {\n        picker.setSlotValue("),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", values["),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]);\n      }\n    }\n  },\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("slots")]),s._v(": [\n        {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("flex")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("values")]),s._v(": ["),a("span",{staticClass:"hljs-string"},[s._v("'2015-01'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-02'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-03'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-04'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-05'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-06'")]),s._v("],\n          "),a("span",{staticClass:"hljs-attr"},[s._v("className")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'slot1'")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("textAlign")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'right'")]),s._v("\n        }, {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("divider")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'-'")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("className")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'slot2'")]),s._v("\n        }, {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("flex")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("values")]),s._v(": ["),a("span",{staticClass:"hljs-string"},[s._v("'2015-01'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-02'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-03'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-04'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-05'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'2015-06'")]),s._v("],\n          "),a("span",{staticClass:"hljs-attr"},[s._v("className")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'slot3'")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("textAlign")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'left'")]),s._v("\n        }\n      ]\n    };\n  }\n};\n")])]),s._v(" "),a("h2",[a("code",[s._v("change")]),s._v(" event")]),s._v(" "),a("p",[s._v("In "),a("code",[s._v("change")]),s._v(" event you can use some methods:")]),s._v(" "),a("ul",[a("li",[s._v("getSlotValue(index): get the picked value of a specific slot")]),s._v(" "),a("li",[s._v("setSlotValue(index, value): set the picked value of a specific slot. The second parameter "),a("code",[s._v("value")]),s._v(" must be in this slot's "),a("code",[s._v("value")]),s._v(" array")]),s._v(" "),a("li",[s._v("getSlotValues(index): get the "),a("code",[s._v("value")]),s._v(" array of a specific slot")]),s._v(" "),a("li",[s._v("setSlotValues(index, values): set the "),a("code",[s._v("value")]),s._v(" array of a specific slot")]),s._v(" "),a("li",[s._v("getValues(): returns an array made up of the picked values of each slot")]),s._v(" "),a("li",[s._v("setValues(values): set the picked values for each slot. "),a("code",[s._v("values")]),s._v(" is an array and each value in "),a("code",[s._v("values")]),s._v(" should be in the corresponding slot's "),a("code",[s._v("value")]),s._v(" array")])]),s._v(" "),a("h2",[a("code",[s._v("slots")])]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("slots")]),s._v(" array is made up of objects. Each object represents a slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("key")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("divider")]),s._v(" "),a("td",[s._v("if the corresponding slot is a divider")])]),s._v(" "),a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("the text of the divider slot")])]),s._v(" "),a("tr",[a("td",[s._v("values")]),s._v(" "),a("td",[s._v("array of acceptable values of the corresponding slot")])]),s._v(" "),a("tr",[a("td",[s._v("defaultIndex")]),s._v(" "),a("td",[s._v("the index of the default picked value for the corresponding slot. Default is 0")])]),s._v(" "),a("tr",[a("td",[s._v("textAlign")]),s._v(" "),a("td",[s._v("alignment of the corresponding slot")])]),s._v(" "),a("tr",[a("td",[s._v("flex")]),s._v(" "),a("td",[s._v("value of CSS "),a("code",[s._v("flex")]),s._v(" for the corresponding slot")])]),s._v(" "),a("tr",[a("td",[s._v("className")]),s._v(" "),a("td",[s._v("class name of the corresponding slot")])])])])]),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("option")]),s._v(" "),a("th",[s._v("description")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("acceptable values")]),s._v(" "),a("th",[s._v("default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("slots")]),s._v(" "),a("td",[s._v("the object array for slots")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("[]")])]),s._v(" "),a("tr",[a("td",[s._v("showToolbar")]),s._v(" "),a("td",[s._v("if a toolbar is shown above the slots. Its content can be customized")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("visibleItemCount")]),s._v(" "),a("td",[s._v("the amount of visible values in each slot")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("5")])])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("the content of the toolbar when "),a("code",[s._v("showToolbar")]),s._v(" is "),a("code",[s._v("true")])])])])])])])}]}}});
//# sourceMappingURL=56.098b6cf65f12792250bc.js.map