(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{"M/dt":function(e,t,r){"use strict";r.r(t);var l=r("KHd+"),a=r("UQSp"),n=r("oCYn");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var s={VueRemarkRoot:a.a},h=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===m(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:r[e]=function(){return s[e]}}))},o=n.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",i={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> SuperElement"};var f=function(e){e.options[d]&&(e.options[d]=i),n.a.util.defineReactive(e.options,d,i),e.options.computed=o.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},v=Object(l.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-superelement"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-superelement","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" SuperElement")]),r("div",{staticClass:"overview"},[r("span",{staticClass:"seoSummary"},[r("strong",[r("code",[e._v("Element")])]),e._v(" is the most general base class from which all element objects (i.e. objects that represent elements) in a "),r("code",[e._v("Document")]),e._v(" inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from "),r("code",[e._v("Element")]),e._v(".")]),e._v(" For example, the "),r("code",[e._v("HTMLElement")]),e._v(" interface is the base interface for HTML elements, while the "),r("code",[e._v("SVGElement")]),e._v(" interface is the basis for all SVG elements. Most functionality is specified further down the class hierarchy.")]),r("div",{staticClass:"overview"},[e._v("Languages outside the realm of the Web platform, like XUL through the "),r("code",[e._v("XULElement")]),e._v(" interface, also implement "),r("code",[e._v("Element")]),e._v(".")]),r("h2",{attrs:{id:"dependencies"}},[r("a",{attrs:{href:"#dependencies","aria-hidden":"true"}},[e._v("#")]),e._v("Dependencies")]),r("p",[e._v("SuperElement implements all the properties and methods of the following classes:")]),r("table",[r("thead",[r("tr",[r("th"),r("th")])]),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"./element"}},[e._v("Element")])]),r("td",[r("a",{attrs:{href:"./event-target"}},[e._v("EventTarget")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-anchor-element"}},[e._v("HTMLAnchorElement")])]),r("td",[r("a",{attrs:{href:"./html-area-element"}},[e._v("HTMLAreaElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-audio-element"}},[e._v("HTMLAudioElement")])]),r("td",[r("a",{attrs:{href:"./html-base-element"}},[e._v("HTMLBaseElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-body-element"}},[e._v("HTMLBodyElement")])]),r("td",[r("a",{attrs:{href:"./htmlbr-element"}},[e._v("HTMLBRElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-button-element"}},[e._v("HTMLButtonElement")])]),r("td",[r("a",{attrs:{href:"./html-canvas-element"}},[e._v("HTMLCanvasElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-data-element"}},[e._v("HTMLDataElement")])]),r("td",[r("a",{attrs:{href:"./html-data-list-element"}},[e._v("HTMLDataListElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-details-element"}},[e._v("HTMLDetailsElement")])]),r("td",[r("a",{attrs:{href:"./html-dialog-element"}},[e._v("HTMLDialogElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-directory-element"}},[e._v("HTMLDirectoryElement")])]),r("td",[r("a",{attrs:{href:"./html-div-element"}},[e._v("HTMLDivElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./htmld-list-element"}},[e._v("HTMLDListElement")])]),r("td",[r("a",{attrs:{href:"./html-element"}},[e._v("HTMLElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-embed-element"}},[e._v("HTMLEmbedElement")])]),r("td",[r("a",{attrs:{href:"./html-field-set-element"}},[e._v("HTMLFieldSetElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-font-element"}},[e._v("HTMLFontElement")])]),r("td",[r("a",{attrs:{href:"./html-form-element"}},[e._v("HTMLFormElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-frame-element"}},[e._v("HTMLFrameElement")])]),r("td",[r("a",{attrs:{href:"./html-frame-set-element"}},[e._v("HTMLFrameSetElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-head-element"}},[e._v("HTMLHeadElement")])]),r("td",[r("a",{attrs:{href:"./html-heading-element"}},[e._v("HTMLHeadingElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./htmlhr-element"}},[e._v("HTMLHRElement")])]),r("td",[r("a",{attrs:{href:"./html-html-element"}},[e._v("HTMLHtmlElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./htmli-frame-element"}},[e._v("HTMLIFrameElement")])]),r("td",[r("a",{attrs:{href:"./html-image-element"}},[e._v("HTMLImageElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-input-element"}},[e._v("HTMLInputElement")])]),r("td",[r("a",{attrs:{href:"./html-label-element"}},[e._v("HTMLLabelElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-legend-element"}},[e._v("HTMLLegendElement")])]),r("td",[r("a",{attrs:{href:"./htmlli-element"}},[e._v("HTMLLIElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-link-element"}},[e._v("HTMLLinkElement")])]),r("td",[r("a",{attrs:{href:"./html-map-element"}},[e._v("HTMLMapElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-marquee-element"}},[e._v("HTMLMarqueeElement")])]),r("td",[r("a",{attrs:{href:"./html-media-element"}},[e._v("HTMLMediaElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-menu-element"}},[e._v("HTMLMenuElement")])]),r("td",[r("a",{attrs:{href:"./html-meta-element"}},[e._v("HTMLMetaElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-meter-element"}},[e._v("HTMLMeterElement")])]),r("td",[r("a",{attrs:{href:"./html-mod-element"}},[e._v("HTMLModElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-object-element"}},[e._v("HTMLObjectElement")])]),r("td",[r("a",{attrs:{href:"./htmlo-list-element"}},[e._v("HTMLOListElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-opt-group-element"}},[e._v("HTMLOptGroupElement")])]),r("td",[r("a",{attrs:{href:"./html-option-element"}},[e._v("HTMLOptionElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-output-element"}},[e._v("HTMLOutputElement")])]),r("td",[r("a",{attrs:{href:"./html-paragraph-element"}},[e._v("HTMLParagraphElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-param-element"}},[e._v("HTMLParamElement")])]),r("td",[r("a",{attrs:{href:"./html-picture-element"}},[e._v("HTMLPictureElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-pre-element"}},[e._v("HTMLPreElement")])]),r("td",[r("a",{attrs:{href:"./html-progress-element"}},[e._v("HTMLProgressElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-quote-element"}},[e._v("HTMLQuoteElement")])]),r("td",[r("a",{attrs:{href:"./html-script-element"}},[e._v("HTMLScriptElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-select-element"}},[e._v("HTMLSelectElement")])]),r("td",[r("a",{attrs:{href:"./html-slot-element"}},[e._v("HTMLSlotElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-source-element"}},[e._v("HTMLSourceElement")])]),r("td",[r("a",{attrs:{href:"./html-span-element"}},[e._v("HTMLSpanElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-style-element"}},[e._v("HTMLStyleElement")])]),r("td",[r("a",{attrs:{href:"./html-table-caption-element"}},[e._v("HTMLTableCaptionElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-table-cell-element"}},[e._v("HTMLTableCellElement")])]),r("td",[r("a",{attrs:{href:"./html-table-col-element"}},[e._v("HTMLTableColElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-table-element"}},[e._v("HTMLTableElement")])]),r("td",[r("a",{attrs:{href:"./html-table-row-element"}},[e._v("HTMLTableRowElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-table-section-element"}},[e._v("HTMLTableSectionElement")])]),r("td",[r("a",{attrs:{href:"./html-template-element"}},[e._v("HTMLTemplateElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-text-area-element"}},[e._v("HTMLTextAreaElement")])]),r("td",[r("a",{attrs:{href:"./html-time-element"}},[e._v("HTMLTimeElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-title-element"}},[e._v("HTMLTitleElement")])]),r("td",[r("a",{attrs:{href:"./html-track-element"}},[e._v("HTMLTrackElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./htmlu-list-element"}},[e._v("HTMLUListElement")])]),r("td",[r("a",{attrs:{href:"./html-unknown-element"}},[e._v("HTMLUnknownElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./html-video-element"}},[e._v("HTMLVideoElement")])]),r("td",[r("a",{attrs:{href:"./node"}},[e._v("Node")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./svg-element"}},[e._v("SVGElement")])]),r("td",[r("a",{attrs:{href:"./svg-graphics-element"}},[e._v("SVGGraphicsElement")])])]),r("tr",[r("td",[r("a",{attrs:{href:"./svgsvg-element"}},[e._v("SVGSVGElement")])]),r("td",[r("a",{attrs:{href:"./svg-title-element"}},[e._v("SVGTitleElement")])])])])])])}),[],!1,null,null,null);"function"==typeof h&&h(v),"function"==typeof f&&f(v);t.default=v.exports},UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);