(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"8r1+":function(t,a,e){"use strict";e.r(a);var s=e("KHd+"),n=e("UQSp"),r=e("oCYn");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var a=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?a[t]=p[t]:e[t]=function(){return p[t]}}))},i=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"Introduction"};var v=function(t){t.options[u]&&(t.options[u]=l),r.a.util.defineReactive(t.options,u,l),t.options.computed=i.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},_=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VueRemarkRoot",[e("h1",{attrs:{id:"introduction"}},[e("a",{attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v("Introduction")]),e("blockquote",[e("p",[t._v("Databoxes are a simple, yet powerful structure to write your scripts so they can be dynamically configured, tested a thousand ways and provide a unit to your data extraction efforts")])]),e("h2",{attrs:{id:"why-create-a-structure"}},[e("a",{attrs:{href:"#why-create-a-structure","aria-hidden":"true"}},[t._v("#")]),t._v("Why Create a Structure?")]),e("p",[t._v('By creating a boundary around a single "scrape", scripts are far easier to test, re-try, scale and compose. It allows us to do things like:')]),e("ul",[e("li",[t._v("Restart a script during development as you change it.")]),e("li",[t._v("Rotate inputs to try out a variety of IPs, parameters, and more to make sure you can handle edge cases.")]),e("li",[t._v("Test the extraction of 100s of different potential results pages and ensure your Output follows the same structure.")]),e("li",[t._v("Spawn new Databoxes from the current one if you need to parallelize following links.")])]),e("h2",{attrs:{id:"how-it-works"}},[e("a",{attrs:{href:"#how-it-works","aria-hidden":"true"}},[t._v("#")]),t._v("How It Works")]),e("p",[t._v("Each Databox is a wrapper for defining a composable Scraper script. Your function takes in Input provided by tooling or a CLI, performs an extraction and returns Output. A "),e("a",{attrs:{href:"/docs/hero"}},[t._v("Hero")]),t._v(" instance is automatically instantiated and passed into your function. Databoxes interact with a "),e("a",{attrs:{href:"/docs/server"}},[t._v("Servers")]),t._v(" - either on your local machine, or running remotely.")]),e("h2",{attrs:{id:"installation"}},[e("a",{attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v("Installation")]),e("p",[t._v("To use Server in your project, install it with npm or yarn:")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save @ulixee/databox")])]),e("p",[t._v("or")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",{pre:!0,attrs:{class:"language-bash"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @ulixee/databox")])]),e("p",[t._v("When you install Server, it will also install "),e("a",{attrs:{href:"/docs/hero"}},[e("code",{pre:!0},[t._v("Hero")])]),t._v(".")]),e("h2",{attrs:{id:"usage-example"}},[e("a",{attrs:{href:"#usage-example","aria-hidden":"true"}},[t._v("#")]),t._v("Usage Example")]),e("p",[t._v("Writing a Databox is very similar to writing a normal Hero script, except it must be contained within a callback, and you have make it the default export.")]),e("p",[t._v("You can run this script as a regular node script and it will run the callback. However, this structure also allows us to load it into a server and run it on demand.")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Databox")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("databox")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hero "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" databox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" title "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("title")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("body")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("textContent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);a.default=_.exports},UQSp:function(t,a,e){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);