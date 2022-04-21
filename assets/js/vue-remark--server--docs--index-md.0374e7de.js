(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{UQSp:function(t,s,e){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},"l+DG":function(t,s,e){"use strict";e.r(s);var a=e("KHd+"),n=e("UQSp"),o=e("oCYn");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var s=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===r(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?s[t]=p[t]:e[t]=function(){return p[t]}}))},i=o.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Introduction"};var v=function(t){t.options[l]&&(t.options[l]=u),o.a.util.defineReactive(t.options,l,u),t.options.computed=i.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},_=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("VueRemarkRoot",[e("h1",{attrs:{id:"introduction"}},[e("a",{attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v("Introduction")]),e("blockquote",[e("p",[t._v("Ulixee is a Scraping Data Collection Network ready to run out of the box. Server is a Websocket server-side protocol to allow communication from multiple machines.")])]),e("h2",{attrs:{id:"how-it-works"}},[e("a",{attrs:{href:"#how-it-works","aria-hidden":"true"}},[t._v("#")]),t._v("How It Works")]),e("p",[t._v("Each Ulixee tool creates connection details to handle its internal connections.")]),e("p",[t._v("Server currently uses Websockets and allows each tool's Core to handle details of what is transported. Connections can optionally be shared by many operations. For instance, Hero allows a single connection to host multiple "),e("a",{attrs:{href:"/docs/hero/advanced/session"}},[t._v("Sessions")]),t._v(" if the "),e("a",{attrs:{href:"/docs/hero/advanced/connection-to-core"}},[e("code",{pre:!0},[t._v("ConnectionToCore")])]),t._v(" is reused by many Hero instances.")]),e("h2",{attrs:{id:"installation"}},[e("a",{attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v("Installation")]),e("p",[t._v("To use Server in your project, install it with npm or yarn:")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save @ulixee/server")])]),e("p",[t._v("or")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @ulixee/server")])]),e("p",[t._v("When you install Server, it requires a PeerDependency of "),e("a",{attrs:{href:"/docs/hero"}},[e("code",{pre:!0},[t._v("Hero")])]),t._v(".")]),e("p",[t._v("It will also optionally use a PeerDependency "),e("code",{pre:!0},[t._v("ChromeAlive!")]),t._v(" core. This tool enhances the Hero Development process.")]),e("h2",{attrs:{id:"usage-example"}},[e("a",{attrs:{href:"#usage-example","aria-hidden":"true"}},[t._v("#")]),t._v("Usage Example")]),e("p",[t._v("Starting a Ulixee Server is very similar to starting a NodeJs Http Server, except it is promise-based.")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token imports"}},[e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/server'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("p",[t._v("To refer to this server in a Hero client, you would use the connection you created in the Hero constructor.")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token imports"}},[e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Hero")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/hero'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hero "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connectionToCore"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.org'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);s.default=_.exports}}]);