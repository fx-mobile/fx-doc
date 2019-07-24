webpackJsonp([126],{133:function(s,t,a){s.exports=a(200)},200:function(s,t,a){var n=a(2)(null,a(404),null,null);s.exports=n.exports},404:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Mint UI 使用文档")]),s._v(" "),a("p",[s._v("本文将介绍 Mint UI 的安装方式和基本的用法。")]),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("npm 安装")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),a("h3",[s._v("CDN")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("h3",[s._v("Hello world")]),s._v(" "),a("p",[s._v("通过 CDN 的方式我们可以很容易地使用 Mint UI 写出一个 Hello world 页面。")]),s._v(" "),s._m(4),s._v(" "),a("iframe",{attrs:{width:"100%",height:"300",src:"//jsfiddle.net/cinwell_li/Lr75y28t/1/embedded/",allowfullscreen:"allowfullscreen",frameborder:"0"}}),s._v(" "),a("p",[s._v("如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节："),a("router-link",{attrs:{to:"/zh-cn2/quickstart"}},[s._v("快速上手。")])],1),s._v(" "),a("br"),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10)])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("推荐使用 npm 的方式安装，它能更好地和 "),a("a",{attrs:{href:"https://webpack.js.org/"}},[s._v("webpack")]),s._v(" 打包工具配合使用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-shell"},[s._v("npm i fx-mui -S\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("目前可以通过 "),a("a",{attrs:{href:"https://unpkg.com/fx-mui/"}},[s._v("unpkg.com/fx-mui")]),s._v(" 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- 引入样式 --\x3e")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/fx-mui/lib/style.css"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- 引入组件库 --\x3e")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/fx-mui/lib/index.js"')]),s._v(">")]),a("span",{staticClass:"undefined"}),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-meta"},[s._v("<!DOCTYPE html>")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("meta")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("charset")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- 引入样式 --\x3e")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/fx-mui/lib/style.css"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"app"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClick"')]),s._v(">")]),s._v("按钮"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- 先引入 Vue --\x3e")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/vue/dist/vue.js"')]),s._v(">")]),a("span",{staticClass:"undefined"}),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- 引入组件库 --\x3e")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/fx-mui/lib/index.js"')]),s._v(">")]),a("span",{staticClass:"undefined"}),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"actionscript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n      el: "),a("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(",\n      methods: {\n        handleClick: "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$toast("),a("span",{staticClass:"hljs-string"},[s._v("'Hello world!'")]),s._v(")\n        }\n      }\n    })\n  ")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("strong",[s._v("关于事件绑定")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 "),a("code",[s._v(".native")]),s._v(" 修饰符：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("my-component")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClick"')]),s._v(">")]),s._v("Click Me"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("my-component")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("从易用性的角度出发，我们对 "),a("code",[s._v("Button")]),s._v(" 组件进行了处理，使它可以监听 "),a("code",[s._v("click")]),s._v(" 事件：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleButtonClick"')]),s._v(">")]),s._v("Click Me"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-button")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("但是对于其他组件，还是需要添加 "),a("code",[s._v(".native")]),s._v(" 修饰符。")])}]}}});
//# sourceMappingURL=126.f30cfcb9fdf16d0d66b9.js.map