(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"4paH":function(e,t,r){"use strict";r.r(t);var i=r("KHd+"),a=r("UQSp"),o=r("oCYn");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var n={VueRemarkRoot:a.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(n).forEach((function(e){"object"===s(n[e])&&"function"==typeof n[e].render||"function"==typeof n[e]&&"function"==typeof n[e].options.render?t[e]=n[e]:r[e]=function(){return n[e]}}))},v=o.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",_={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> File"};var p=function(e){e.options[c]&&(e.options[c]=_),o.a.util.defineReactive(e.options,c,_),e.options.computed=v.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},h=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-file"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-file","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" File")]),r("div",{staticClass:"overview"},[e._v("The "),r("strong",[r("code",[e._v("File")])]),e._v(" interface provides information about files and allows JavaScript in a web page to access their content.")]),r("div",{staticClass:"overview"},[r("code",[e._v("File")]),e._v(" objects are generally retrieved from a "),r("code",[e._v("FileList")]),e._v(" object returned as a result of a user selecting files using the "),r("code",[e._v("<input>")]),e._v(" element, from a drag and drop operation's "),r("code",[e._v("DataTransfer")]),e._v(" object, or from the "),r("code",[e._v("mozGetAsFile()")]),e._v(" API on an "),r("code",[e._v("HTMLCanvasElement")]),e._v(".")]),r("div",{staticClass:"overview"},[e._v("A "),r("code",[e._v("File")]),e._v(" object is a specific kind of a "),r("code",[e._v("Blob")]),e._v(", and can be used in any context that a Blob can. In particular, "),r("code",[e._v("FileReader")]),e._v(", "),r("code",[e._v("URL.createObjectURL()")]),e._v(", "),r("code",[e._v("createImageBitmap()")]),e._v(", and "),r("code",[e._v("XMLHttpRequest.send()")]),e._v(" accept both "),r("code",[e._v("Blob")]),e._v("s and "),r("code",[e._v("File")]),e._v("s.")]),r("div",{staticClass:"overview"},[e._v("See Using files from web applications for more information and examples.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"lastModified"}},[r("a",{attrs:{href:"#lastModified","aria-hidden":"true"}},[e._v("#")]),e._v(".lastModified "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the last modified time of the file, in millisecond since the UNIX epoch (January 1st, 1970 at Midnight).")]),r("h4",{attrs:{id:"type-promisenumber"}},[r("a",{attrs:{href:"#type-promisenumber","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h3",{attrs:{id:"name"}},[r("a",{attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(".name "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the name of the file referenced by the "),r("code",[e._v("File")]),e._v(" object.")]),r("h4",{attrs:{id:"type-promisestring"}},[r("a",{attrs:{href:"#type-promisestring","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h3",{attrs:{id:"size"}},[r("a",{attrs:{href:"#size","aria-hidden":"true"}},[e._v("#")]),e._v(".size "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The size, in bytes, of the data contained in the "),r("code",[e._v("Blob")]),e._v(" object.")]),r("h4",{attrs:{id:"type-promisenumber-1"}},[r("a",{attrs:{href:"#type-promisenumber-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h3",{attrs:{id:"type"}},[r("a",{attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(".type "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A string indicating the MIME type of the data contained in the "),r("code",[e._v("Blob")]),e._v(". If the type is unknown, this string is empty.")]),r("h4",{attrs:{id:"type-promisestring-1"}},[r("a",{attrs:{href:"#type-promisestring-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"arrayBuffer"}},[r("a",{attrs:{href:"#arrayBuffer","aria-hidden":"true"}},[e._v("#")]),e._v(".arrayBuffer"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a promise that resolves with an "),r("code",[e._v("ArrayBuffer")]),e._v(" containing the entire contents of the "),r("code",[e._v("Blob")]),e._v(" as binary data.")]),r("h4",{attrs:{id:"returns-promisearraybuffer"}},[r("a",{attrs:{href:"#returns-promisearraybuffer","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<ArrayBuffer>")])]),r("h3",{attrs:{id:"slice"}},[r("a",{attrs:{href:"#slice","aria-hidden":"true"}},[e._v("#")]),e._v(".slice"),r("em",[e._v("(start?, end?, contentType?)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a new "),r("code",[e._v("Blob")]),e._v(" object containing the data in the specified range of bytes of the blob on which it's called.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("start "),r("code",{pre:!0},[e._v("number")]),e._v(". An index into the "),r("code",[e._v("Blob")]),e._v(" indicating the first byte to include in the new "),r("code",[e._v("Blob")]),e._v(". If you specify a negative value, it's treated as an offset from the end of the "),r("code",[e._v("Blob")]),e._v(" toward the beginning. For example, -10 would be the 10th from last byte in the "),r("code",[e._v("Blob")]),e._v(". The default value is 0. If you specify a value for "),r("code",[e._v("start")]),e._v(" that is larger than the size of the source "),r("code",[e._v("Blob")]),e._v(", the returned "),r("code",[e._v("Blob")]),e._v(" has size 0 and contains no data.")]),r("li",[e._v("end "),r("code",{pre:!0},[e._v("number")]),e._v(". An index into the "),r("code",[e._v("Blob")]),e._v(" indicating the first byte that will "),r("em",[e._v("not")]),e._v(" be included in the new "),r("code",[e._v("Blob")]),e._v(" (i.e. the byte exactly at this index is not included). If you specify a negative value, it's treated as an offset from the end of the "),r("code",[e._v("Blob")]),e._v(" toward the beginning. For example, -10 would be the 10th from last byte in the "),r("code",[e._v("Blob")]),e._v(". The default value is "),r("code",[e._v("size")]),e._v(".")]),r("li",[e._v("contentType "),r("code",{pre:!0},[e._v("string")]),e._v(". The content type to assign to the new "),r("code",[e._v("Blob")]),e._v("; this will be the value of its "),r("code",[e._v("type")]),e._v(" property. The default value is an empty string.")])]),r("h4",{attrs:{id:"returns-promiseblob"}},[r("a",{attrs:{href:"#returns-promiseblob","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Blob>")])]),r("h3",{attrs:{id:"text"}},[r("a",{attrs:{href:"#text","aria-hidden":"true"}},[e._v("#")]),e._v(".text"),r("em",[e._v("()")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a promise that resolves with a "),r("code",{pre:!0},[e._v("string")]),e._v(" containing the entire contents of the "),r("code",[e._v("Blob")]),e._v(" interpreted as UTF-8 text.")]),r("h4",{attrs:{id:"returns-promisestring"}},[r("a",{attrs:{href:"#returns-promisestring","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h2",{attrs:{id:"unimplemented-specs"}},[r("a",{attrs:{href:"#unimplemented-specs","aria-hidden":"true"}},[e._v("#")]),e._v("Unimplemented Specs")]),r("h4",{attrs:{id:"methods-1"}},[r("a",{attrs:{href:"#methods-1","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("table",[r("thead",[r("tr",[r("th"),r("th")])]),r("tbody",[r("tr",[r("td",[r("code",{pre:!0},[e._v("stream()")])]),r("td")])])])])}),[],!1,null,null,null);"function"==typeof d&&d(h),"function"==typeof p&&p(h);t.default=h.exports},UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);