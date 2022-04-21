(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{Bi9d:function(e,o,t){"use strict";t.r(o);var n=t("KHd+"),i=t("UQSp"),r=t("oCYn");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var c={VueRemarkRoot:i.a},s=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(c).forEach((function(e){"object"===a(c[e])&&"function"==typeof c[e].render||"function"==typeof c[e]&&"function"==typeof c[e].options.render?o[e]=c[e]:t[e]=function(){return c[e]}}))},l=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:null,title:"Basic Concepts"};var p=function(e){e.options[u]&&(e.options[u]=d),r.a.util.defineReactive(e.options,u,d),e.options.computed=l.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("VueRemarkRoot",[t("h1",{attrs:{id:"basic-concepts"}},[t("a",{attrs:{href:"#basic-concepts","aria-hidden":"true"}},[e._v("#")]),e._v("Basic Concepts")]),t("h2",{attrs:{id:"zero-configuration-required"}},[t("a",{attrs:{href:"#zero-configuration-required","aria-hidden":"true"}},[e._v("#")]),e._v("Zero Configuration Required")]),t("p",[e._v("Out of the box, Ulixee Server doesn't need any configuration. It will find a local port to run on and will register all the Ulixee tools you have installed. Each tool defines it's own mechanism for interaction, so you just use the tools you expect.")]),t("h2",{attrs:{id:"each-tool-provides-the-details"}},[t("a",{attrs:{href:"#each-tool-provides-the-details","aria-hidden":"true"}},[e._v("#")]),e._v("Each Tool Provides the Details")]),t("p",[e._v("Ulixee tools like Databox, Hero, ChromeAlive! and Runner are all built with a similar structure that allows them to plug-in to Ulixee Server.")]),t("ul",[t("li",[t("code",{pre:!0},[e._v("/client")]),e._v(": Each project has a Client module with details on how to encode/decode Payloads and handle Websocket connection details.  ")]),t("li",[t("code",{pre:!0},[e._v("/core")]),e._v(": Each project also has a Core module with details on how to route specific commands to the tool in question, but details of handling new WebSockets and encoding/decoding messages is handled by Server "),t("code",{pre:!0},[e._v("Connectors")]),e._v(" (below).")])]),t("p",[t("code",{pre:!0},[e._v("Connectors")]),e._v(" are in the Server project, with one for each tool that needs it's own connection. "),t("code",{pre:!0},[e._v("Connectors")]),e._v(' define how to start and close a "Tool" and how to create new connections and decode/encode payloads.s')])])}),[],!1,null,null,null);"function"==typeof s&&s(f),"function"==typeof p&&p(f);o.default=f.exports},UQSp:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);