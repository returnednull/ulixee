(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{UQSp:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},WF7E:function(t,a,s){"use strict";s.r(a);var e=s("KHd+"),n=s("UQSp"),r=s("oCYn");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?a[t]=p[t]:s[t]=function(){return p[t]}}))},l=r.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",u={excerpt:null,title:"Hero Extensions"};var _=function(t){t.options[v]&&(t.options[v]=u),r.a.util.defineReactive(t.options,v,u),t.options.computed=l.computed({$frontmatter:function(){return t.options[v]}},t.options.computed)},i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h1",{attrs:{id:"hero-extensions"}},[s("a",{attrs:{href:"#hero-extensions","aria-hidden":"true"}},[t._v("#")]),t._v("Hero Extensions")]),s("blockquote",[s("p",[t._v("Databox adds extraction functionality onto Hero DOM Elements and Resources to simplify extraction. All extension methods start with a $.")])]),s("h2",{attrs:{id:"constructor"}},[s("a",{attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v("Constructor")]),s("p",[t._v("Extensions cannot be constructed. They're additions automatically added to the following Super classes and collections.")]),s("p",[t._v("Nodes")]),s("ul",[s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-element"}},[s("code",{pre:!0},[t._v("SuperElement")])])]),s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-html-element"}},[s("code",{pre:!0},[t._v("SuperHTMLElement")])])])]),s("p",[t._v("Node Collections")]),s("ul",[s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-node-list"}},[s("code",{pre:!0},[t._v("SuperNodeList")])])]),s("li",[s("a",{attrs:{href:"/docs/awaited-dom/super-html-collection"}},[s("code",{pre:!0},[t._v("SuperHTMLCollection")])])])]),s("p",[t._v("Resources")]),s("ul",[s("li",[s("a",{attrs:{href:"/docs/hero/advanced/resource"}},[s("code",{pre:!0},[t._v("Resource")])])])]),s("h2",{attrs:{id:"node-methods"}},[s("a",{attrs:{href:"#node-methods","aria-hidden":"true"}},[t._v("#")]),t._v("Node Methods")]),s("h3",{attrs:{id:"extract"}},[s("a",{attrs:{href:"#extract","aria-hidden":"true"}},[t._v("#")]),t._v("node.$extract<T>"),s("em",[t._v("(extractFn, options?)")])]),s("p",[t._v("Runs an extraction function inline after collecting the HTML of the given Element. The Dom Element this method is called on will be frozen at its current state, and the outerHTML will be extracted.")]),s("p",[t._v("You can run this inline if you need access to your extracted data during your "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/runner"}},[t._v("Runner")]),t._v(' script. For instance, if you wanted to calculate an "id" field for each row of a results page, and you wanted to re-use the logic across your '),s("a",{attrs:{href:"/docs/databox/basic-interfaces/runner"}},[t._v("Runner")]),t._v(" script as well as your "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/extractor"}},[t._v("Extractor")]),t._v(".")]),s("h4",{attrs:{id:"arguments"}},[s("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("extractFn: "),s("code",{pre:!0},[t._v("function")]),t._v("(element: "),s("code",{pre:!0},[t._v("Element")]),t._v(", extractor: "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/extractor"}},[s("code",{pre:!0},[t._v("Extractor")])]),t._v("): "),s("code",{pre:!0},[t._v("Promise<any>")]),t._v(". A callback that will be called once the element outerHTML has been retrieved."),s("ul",[s("li",[t._v("element "),s("code",{pre:!0},[t._v("Element")]),t._v(". The collected element, available with synchronous DOM APIs.")]),s("li",[t._v("extractor "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/extractor"}},[s("code",{pre:!0},[t._v("Extractor")])]),t._v(". Access to the Extractor that will run in your Databox "),s("code",{pre:!0},[t._v("extract")]),t._v(" step.")])])]),s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(". Optional settings to apply to this extraction"),s("ul",[s("li",[t._v("name "),s("code",{pre:!0},[t._v("string")]),t._v(". A name to give to the "),s("a",{attrs:{href:"/docs/databox/advanced/collected-elements"}},[t._v("CollectedElement")]),t._v(" during final extraction. It does not need to be unique - items with the same name will be added to a list.")])])])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token imports"}},[s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Databox")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/databox-for-hero'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Databox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hero "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ulixee.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h1Children "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$extract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelectorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("textContent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("h4",{attrs:{id:"returns-promiset-returns-the-return-value-of-the-extractfn-once-completed"}},[s("a",{attrs:{href:"#returns-promiset-returns-the-return-value-of-the-extractfn-once-completed","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<T>")]),t._v(". Returns the return value of the extractFn once completed.")]),s("h3",{attrs:{id:"extract-later"}},[s("a",{attrs:{href:"#extract-later","aria-hidden":"true"}},[t._v("#")]),t._v("node.$extractLater"),s("em",[t._v("(name)")])]),s("p",[t._v("Collect an Element for extraction during the "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/extractor"}},[t._v("Extractor")]),t._v(" callback. The advantage of "),s("code",{pre:!0},[t._v("$extractLater")]),t._v(" is you can defer extraction until later, where you can write your logic and re-run your extraction quickly as you fix it.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token imports"}},[s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Databox")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/databox-for-hero'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Databox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hero "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ulixee.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$extractLater")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" collectedElements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" collectedElements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h1Children "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelectorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("textContent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("h4",{attrs:{id:"arguments-1"}},[s("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("name "),s("code",{pre:!0},[t._v("string")]),t._v(". The name given to this extracted HTML Element. This name will be used to retrieve the "),s("a",{attrs:{href:"/docs/databox/advanced/collected-element"}},[t._v("CollectedElement")]),t._v(" in your "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/databox#constructor"}},[t._v("extract")]),t._v(" function.")])]),s("h4",{attrs:{id:"returns-promisevoid"}},[s("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<void>")])]),s("h2",{attrs:{id:"collection-methods"}},[s("a",{attrs:{href:"#collection-methods","aria-hidden":"true"}},[t._v("#")]),t._v("Collection Methods")]),s("h3",{attrs:{id:"list-extract"}},[s("a",{attrs:{href:"#list-extract","aria-hidden":"true"}},[t._v("#")]),t._v("nodeList.$extract<T>"),s("em",[t._v("(extractFn, options?)")])]),s("p",[t._v("Runs an extraction function inline after collecting the HTML of the all HTML elements matching this NodeList.")]),s("p",[t._v("This function is the same as "),s("code",{pre:!0},[t._v("node.extract")]),t._v(", except the callback is provided a list of "),s("code",{pre:!0},[t._v("Elements")]),t._v(".")]),s("h4",{attrs:{id:"arguments-2"}},[s("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("extractFn: "),s("code",{pre:!0},[t._v("function")]),t._v("(elements: "),s("code",{pre:!0},[t._v("Element[]")]),t._v(", extractor: "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/extractor"}},[s("code",{pre:!0},[t._v("Extractor")])]),t._v("): "),s("code",{pre:!0},[t._v("Promise<any>")]),t._v(". A callback that will be called once the element's outerHTML have been retrieved.")]),s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(". Optional settings to apply to this extraction"),s("ul",[s("li",[t._v("name "),s("code",{pre:!0},[t._v("string")]),t._v(". A name to give to the "),s("a",{attrs:{href:"/docs/databox/advanced/collected-elements"}},[t._v("CollectedElements")]),t._v(" during final extraction. It does not need to be unique - items with the same name will be added to a list.")])])])]),s("h4",{attrs:{id:"returns-promiset-returns-the-return-value-of-the-extractfn-once-completed-1"}},[s("a",{attrs:{href:"#returns-promiset-returns-the-return-value-of-the-extractfn-once-completed-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<T>")]),t._v(". Returns the return value of the extractFn once completed.")]),s("h3",{attrs:{id:"list-extract-later"}},[s("a",{attrs:{href:"#list-extract-later","aria-hidden":"true"}},[t._v("#")]),t._v("nodeList.$extractLater"),s("em",[t._v("(name)")])]),s("p",[t._v("Collect the Node HTML for all Elements of a NodeList or HTMLElementCollection. They will be available for extraction during the "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/extractor"}},[t._v("Extractor")]),t._v(" callback.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token imports"}},[s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Databox")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/databox-for-hero'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Databox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hero "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ulixee.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelectorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1 div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$extractLater")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1 divs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" collectedElements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" collectedElements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("getAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1 divs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will have 2 entries")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h1Divs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("textContent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("h4",{attrs:{id:"arguments-3"}},[s("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("name "),s("code",{pre:!0},[t._v("string")]),t._v(". The name given to all extracted HTML Elements. This name will be used to retrieve the "),s("a",{attrs:{href:"/docs/databox/advanced/collected-element"}},[t._v("CollectedElement")]),t._v(" in your "),s("a",{attrs:{href:"/docs/databox/basic-interfaces/databox#constructor"}},[t._v("extract")]),t._v(" function.")])]),s("h4",{attrs:{id:"returns-promisevoid-1"}},[s("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<void>")])]),s("h2",{attrs:{id:"resource-methods"}},[s("a",{attrs:{href:"#resource-methods","aria-hidden":"true"}},[t._v("#")]),t._v("Resource Methods")]),s("h3",{attrs:{id:"list-extract-later-1"}},[s("a",{attrs:{href:"#list-extract-later-1","aria-hidden":"true"}},[t._v("#")]),t._v("resource.$extractLater"),s("em",[t._v("(name)")])]),s("p",[t._v("Collect the Resource and all metadata (including body) for later extraction.")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token imports"}},[s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Databox")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ulixee/databox-for-hero'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Databox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hero "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ulixee.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" firstData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("findResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    firstData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("$extractLater")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" collectedResources "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword control-flow"}},[t._v("await")]),t._v(" collectedResources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// all resource methods are synchronous")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" indexJson "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get headers (application/json)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contentType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("h4",{attrs:{id:"arguments-4"}},[s("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("name "),s("code",{pre:!0},[t._v("string")]),t._v(". The name given to this "),s("a",{attrs:{href:"/docs/databox/advanced/CollectedResources"}},[t._v("CollectedResource")]),t._v(". It does not need to be unique - items with the same name will be added to a list.")])]),s("h4",{attrs:{id:"returns-promisevoid-2"}},[s("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof c&&c(i),"function"==typeof _&&_(i);a.default=i.exports}}]);