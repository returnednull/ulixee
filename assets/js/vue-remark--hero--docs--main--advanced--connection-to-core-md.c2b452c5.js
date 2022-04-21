(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{DTkY:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),s=n("UQSp"),a=n("oCYn");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var c={VueRemarkRoot:s.a},p=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===r(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:n[t]=function(){return c[t]}}))},i=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"ConnectionToCore"};var v=function(t){t.options[l]&&(t.options[l]=u),a.a.util.defineReactive(t.options,l,u),t.options.computed=i.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},_=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h1",{attrs:{id:"connectiontocore"}},[n("a",{attrs:{href:"#connectiontocore","aria-hidden":"true"}},[t._v("#")]),t._v("ConnectionToCore")]),n("blockquote",[n("p",[t._v("ConnectionToCore is a built-in mechanism to stream commands to local and remote instances of Hero using the same simple interface.")])]),n("p",[t._v('When you install Hero, it comes ready to run locally with a Chrome engine and client all in your local codebase. However, as you begin to scale the number of concurrent scrapes, you will end up needing to manage a fleet of "engines" running on a number of computers.')]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",{pre:!0,attrs:{class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Hero")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("BaseHero")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/hero'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Hero")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("FullHero")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" local "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FullHero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// connects to full, local installation")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseHero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    connectionToCore"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteConnectionToCore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      host"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.1.1:3444'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token console class-name"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),n("p",[t._v("There are 2 built-in connections in Hero:")]),n("ul",[n("li",[n("code",{pre:!0},[t._v("Default")]),t._v(" - instantiates and connects to a locally install Hero "),n("code",{pre:!0},[t._v("Core")]),t._v(" (used by "),n("code",{pre:!0},[t._v("@ulixee/hero-fullstack")]),t._v(")")]),n("li",[n("code",{pre:!0},[t._v("RemoteConnectionToCore")]),t._v(" - takes a host to dial over a Websocket. See more "),n("a",{attrs:{href:"/docs/hero/advanced/remote"}},[t._v("here")])])]),n("h3",{attrs:{id:"configuration"}},[n("a",{attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v("Configuration")]),n("p",[t._v("When you provide a connectionToCore to a "),n("a",{attrs:{href:"/docs/hero/basic-interfaces/hero"}},[t._v("Hero")]),t._v(" instance, Hero will accept either an "),n("code",{pre:!0},[t._v("options")]),t._v(" object or a "),n("code",{pre:!0},[t._v("ConnectionToCore")]),t._v(" instance.")]),n("h3",{attrs:{id:"options"}},[n("a",{attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v("Options")]),n("p",[t._v("The provided settings configure the connection to "),n("code",{pre:!0},[t._v("Core")]),t._v(". Note: some configurations will apply to all connected Heroes ( "),n("code",{pre:!0},[t._v("dataDir")]),t._v(").")]),n("ul",[n("li",[t._v("options "),n("code",{pre:!0},[t._v("object")]),t._v('. A set of settings that controls the creation of a "connection" to a '),n("code",{pre:!0},[t._v("Hero Core")]),t._v("."),n("ul",[n("li",[t._v("host "),n("code",{pre:!0},[t._v("string")]),t._v(". An optional "),n("code",{pre:!0},[t._v("hostname:port")]),t._v(' url that will be used to establish a connection to a Hero Core running on another machine. If no host is provided, a connection to a "locally" running '),n("code",{pre:!0},[t._v("Core")]),t._v(" will be attempted.")]),n("li",[t._v("maxConcurrency "),n("code",{pre:!0},[t._v("number")]),t._v('. The max number of Heroes to allow to be dispatched and created at the same time. Heroes are "active" until the dispatchHero callback is complete, or the created Hero is closed. If not provided, this number will match the max allowed by a '),n("code",{pre:!0},[t._v("Core")]),t._v(".")]),n("li",[t._v("heroTimeoutMillis "),n("code",{pre:!0},[t._v("number")]),t._v(". The number of milliseconds to give each Hero in this connection to complete a session. A TimeoutError will be thrown if this time is exceeded.")]),n("li",[t._v("dataDir "),n("code",{pre:!0},[t._v("string")]),t._v(" defaults to "),n("code",{pre:!0},[t._v("os.tmpdir()/.ulixee")]),t._v(". Directory to store session files and mitm certificates.")])])]),n("li",[t._v("connection "),n("code",{pre:!0},[t._v("CoreClientConnection")]),t._v(". A pre-initialized connection to a "),n("code",{pre:!0},[t._v("Hero Core")]),t._v(". You can use this option to pre-check your connection to a remote connection, or to provide customization to the connection.")])]),n("h2",{attrs:{id:"methods"}},[n("a",{attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v("Methods")]),n("h3",{attrs:{id:"connect"}},[n("a",{attrs:{href:"#connect","aria-hidden":"true"}},[t._v("#")]),t._v("connection.connect"),n("em",[t._v("()")])]),n("p",[t._v("Initializes the connection to the specified core. You can use this function if you would like to pre-connect to your remote host and ensure connections are properly established before continuing.")]),n("p",[t._v("NOTE: this will be automatically called when you pass in a connection to Hero.")]),n("h4",{attrs:{id:"returns-promise"}},[n("a",{attrs:{href:"#returns-promise","aria-hidden":"true"}},[t._v("#")]),n("strong",[t._v("Returns")]),t._v(": "),n("code",{pre:!0},[t._v("Promise")])]),n("h3",{attrs:{id:"disconnect"}},[n("a",{attrs:{href:"#disconnect","aria-hidden":"true"}},[t._v("#")]),t._v("connection.disconnect"),n("em",[t._v("()")])]),n("p",[t._v("Closes the connection and stops all pending requests.")]),n("h4",{attrs:{id:"returns-promise-1"}},[n("a",{attrs:{href:"#returns-promise-1","aria-hidden":"true"}},[t._v("#")]),n("strong",[t._v("Returns")]),t._v(": "),n("code",{pre:!0},[t._v("Promise")])])])}),[],!1,null,null,null);"function"==typeof p&&p(_),"function"==typeof v&&v(_);e.default=_.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);