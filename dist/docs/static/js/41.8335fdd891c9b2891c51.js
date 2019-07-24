webpackJsonp([41],{185:function(s,t,a){s.exports=a(285)},285:function(s,t,a){var n=a(2)(null,a(406),null,null);s.exports=n.exports},406:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("快速上手")]),s._v(" "),a("p",[s._v("本节将介绍如何在项目中使用 Mint UI。")]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("使用 vue-cli")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm install -g vue-cli\n\nvue init webpack projectname\n")])]),s._v(" "),a("h2",[s._v("引入 Mint UI")]),s._v(" "),a("p",[s._v("你可以引入整个 Mint UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Mint UI。")]),s._v(" "),a("h3",[s._v("完整引入")]),s._v(" "),a("p",[s._v("在 main.js 中写入以下内容：")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MintUI "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui/lib/style.css'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" App "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./App.vue'")]),s._v("\n\nVue.use(MintUI)\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n  "),a("span",{staticClass:"hljs-attr"},[s._v("el")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(",\n  "),a("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": { App }\n})\n")])]),s._v(" "),a("p",[s._v("以上代码便完成了 Mint UI 的引入。需要注意的是，样式文件需要单独引入。")]),s._v(" "),a("h3",[s._v("按需引入")]),s._v(" "),a("p",[s._v("借助 "),a("a",{attrs:{href:"https://github.com/QingWei-Li/babel-plugin-component"}},[s._v("babel-plugin-component")]),s._v("，我们可以只引入需要的组件，以达到减小项目体积的目的。")]),s._v(" "),a("p",[s._v("首先，安装 babel-plugin-component：")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm install babel-plugin-component -D\n")])]),s._v(" "),a("p",[s._v("然后，将 .babelrc 修改为：")]),s._v(" "),a("pre",[a("code",{staticClass:"language-json"},[s._v("{\n  "),a("span",{staticClass:"hljs-attr"},[s._v('"presets"')]),s._v(": [\n    ["),a("span",{staticClass:"hljs-string"},[s._v('"es2015"')]),s._v(", { "),a("span",{staticClass:"hljs-attr"},[s._v('"modules"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(" }]\n  ],\n  "),a("span",{staticClass:"hljs-attr"},[s._v('"plugins"')]),s._v(": [["),a("span",{staticClass:"hljs-string"},[s._v('"component"')]),s._v(", [\n    {\n      "),a("span",{staticClass:"hljs-attr"},[s._v('"libraryName"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"fx-mui"')]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v('"style"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    }\n  ]]]\n}\n")])]),s._v(" "),a("p",[s._v("如果你只希望引入部分组件，比如 Button 和 Cell，那么需要在 main.js 中写入以下内容：")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Button, Cell } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'fx-mui'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" App "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./App.vue'")]),s._v("\n\nVue.component(Button.name, Button)\nVue.component(Cell.name, Cell)\n"),a("span",{staticClass:"hljs-comment"},[s._v("/* 或写为\n * Vue.use(Button)\n * Vue.use(Cell)\n */")]),s._v("\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n  "),a("span",{staticClass:"hljs-attr"},[s._v("el")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(",\n  "),a("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": { App }\n})\n")])]),s._v(" "),a("h2",[s._v("开始使用")]),s._v(" "),a("p",[s._v("至此，一个基于 Vue 和 Mint UI 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm run dev\n")])]),s._v(" "),a("p",[s._v("编译：")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm run build\n")])]),s._v(" "),a("p",[s._v("各个组件的使用方法请参阅它们各自的文档。")])])}]}}});
//# sourceMappingURL=41.8335fdd891c9b2891c51.js.map