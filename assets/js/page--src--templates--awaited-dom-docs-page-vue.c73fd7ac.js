(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+faR":function(e,t){e.exports=[{title:"Overview",items:["Introduction","Configuration"]},{title:"Basic Interfaces",items:["Server","ChromeAlive"]},{title:"Contribute",items:["How to contribute","Code of conduct"]},{title:"Help",items:["Prerequisites","How to upgrade","Troubleshooting"]}]},"0lG+":function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var n=i("M4XY"),r=i.n(n),o=i("fkaQ");function u(e,t){for(var i,n=[],u=null===(i=o.plugins.find((function(e){var i;return(null===(i=e.options)||void 0===i?void 0:i.typeName)===t})))||void 0===i?void 0:i.options,a=function(e){var t="".concat(u.pathPrefix,"/").concat(r()(e.title)),i="".concat(u.editingDomain,"/").concat(e.title),o={title:e.title,link:t,items:e.items.map((function(e){return function e(t,i,n){var o="string"==typeof n?n:n.title,u="".concat(i,"/").concat(o),a={title:o,link:"".concat(t,"/").concat(r()(o)),editLink:"".concat(u,".md")},s=n.items;s&&(a.items=s.map((function(t){return e(a.link,u,t)})));return a}(t,i,e)}))};n.push(o)},s=0,c=e;s<c.length;s++){a(c[s])}return n}},"840O":function(e,t,i){},BBuV:function(e,t,i){"use strict";i("840O")},M4XY:function(e,t,i){(function(t){var i=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",u="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",a="\\d+",s="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",p="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+c+"|"+l+")",g="(?:"+p+"|"+l+")",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?"+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,d].join("|")+")[\\ufe0e\\ufe0f]?"+b+")*"),x="(?:"+[s,f,d].join("|")+")"+h,v=RegExp("['’]","g"),k=RegExp(u,"g"),y=RegExp([p+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,p,"$"].join("|")+")",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,p+m,"$"].join("|")+")",p+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",a,x].join("|"),"g"),_=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,j="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,D=j||O||Function("return this")();var C,w=(C={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==C?void 0:C[e]});var A=Object.prototype.toString,E=D.Symbol,P=E?E.prototype:void 0,L=P?P.toString:void 0;function R(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==A.call(e)}(e))return L?L.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function S(e){return null==e?"":R(e)}var H,I=(H=function(e,t,i){return e+(i?"-":"")+t.toLowerCase()},function(e){return function(e,t,i,n){var r=-1,o=e?e.length:0;for(n&&o&&(i=e[++r]);++r<o;)i=t(i,e[r],r,e);return i}(function(e,t,n){return e=S(e),void 0===(t=n?void 0:t)?function(e){return _.test(e)}(e)?function(e){return e.match(y)||[]}(e):function(e){return e.match(i)||[]}(e):e.match(t)||[]}(function(e){return(e=S(e))&&e.replace(n,w).replace(k,"")}(e).replace(v,"")),H,"")});e.exports=I}).call(this,i("yLpj"))},dMDx:function(e,t,i){"use strict";i.r(t);var n,r=i("G0B5"),o=i("Jh9P"),u=i("0lG+"),a=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),s=function(e,t,i,n){var r,o=arguments.length,u=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(u=(o<3?r(u):o>3?r(t,i,u):r(t,i))||u);return o>3&&u&&Object.defineProperty(t,i,u),u},c=i("+faR"),l=Object(u.a)(c,"AwaitedDom"),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.links=l,t}return a(t,e),Object.defineProperty(t.prototype,"subtitles",{get:function(){return this.$page.record.subtitles.filter((function(e,t,i){return[2,3].includes(e.depth)}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"currentPath",{get:function(){return this.$route.matched[0].path},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"editLink",{get:function(){var e=this.currentPath;return 1==(e.match(new RegExp("/","g"))||[]).length&&(e+="/README"),"https://github.com/ulixee/hero/tree/main/docs/awaited-dom".concat(e,".md")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"items",{get:function(){for(var e=[],t=0,i=this.links;t<i.length;t++){var n=i[t];e.push({title:n.title,link:n.link});for(var r=0,o=n.items;r<o.length;r++){var u=o[r];e.push({title:u.title,link:u.link}),u.items&&e.push.apply(e,u.items)}}return e},enumerable:!1,configurable:!0}),t=s([Object(r.a)({metaInfo:function(){var e=this.$page.record,t=e.title,i=e.headings;return{title:t||(i.length?i[0].value:void 0)}},components:{GithubLogo:o.a}})],t)}(r.b),d=(i("BBuV"),i("KHd+")),p=null,m=Object(d.a)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("CoreLayout",{staticClass:"has-sidebar AwaitedDomPage",attrs:{footer:!1}},[i("div",{staticClass:"container flex flex-align-top"},[i("div",{staticClass:"sidebar"},[e._l(e.links,(function(t,n){return e.links?[i("h3",{key:"title-"+n,staticClass:"menu-item"},[e._v(e._s(t.title))]),e._l(t.items,(function(t,r){return[t.items?[i("h4",{key:"title-"+n+"-"+r,staticClass:"menu-item"},[e._v(e._s(t.title))]),e._l(t.items,(function(t,o){return[i("g-link",{key:"link-"+n+"-"+r+"-"+o,staticClass:"menu-item menu-link",attrs:{exact:"/docs/"==t.link,to:t.link}},[e._v(e._s(t.title))])]}))]:[i("g-link",{key:"link-"+n+"-"+r,staticClass:"menu-item menu-link",attrs:{exact:"/docs/"==t.link,to:t.link}},[e._v(e._s(t.title))])]]}))]:e._e()}))],2),i("Section",{staticClass:"doc-content flex-fit",attrs:{container:"base"}},[i("VueRemarkContent",{staticClass:"post mb"}),i("p",[i("a",{staticClass:"github-edit-link",attrs:{href:e.editLink,target:"_blank"}},[i("GithubLogo"),i("span",[e._v("Edit this page on GitHub")])],1)])],1),i("div",{staticClass:"sidebar sidebar--right hide-for-small"},[e.subtitles.length>0&&3!==e.subtitles[0].depth?[i("h3",[e._v("On this page")]),e.subtitles.length?i("ul",{staticClass:"menu-item submenu"},e._l(e.subtitles,(function(t){return i("li",{key:t.value,staticClass:"submenu__item",class:"submenu__item-depth-"+t.depth},[i("a",{staticClass:"submenu__link",attrs:{href:t.anchor}},[e._v(e._s(t.value.replace(" W3C","")))])])})),0):e._e()]:e._e()],2)],1)])}),[],!1,null,null,null);"function"==typeof p&&p(m);t.default=m.exports},fkaQ:function(e,t){e.exports={titleTemplate:"Ulixee - The Scraping Toolkit",siteUrl:"https://docs.ulixee.org",pathPrefix:"/",outputDir:"../build-dist/docs",templates:{},chainWebpack:function(e){var t=e.module.rule("svg");t.uses.clear(),t.use("vue-svg-loader").loader("vue-svg-loader")},plugins:[{use:"gridsome-plugin-pug",options:{pug:{},pugLoader:{}}},{use:"gridsome-plugin-typescript"},{use:"@gridsome/vue-remark",options:{baseDir:"../hero/docs/main",pathPrefix:"/docs/hero",typeName:"HeroDocs",editingDomain:"https://github.com/ulixee/hero/tree/main/docs/main",template:"./src/templates/HeroDoc.vue",plugins:["@gridsome/remark-prismjs"],remark:{autolinkHeadings:{content:{type:"text",value:"#"}}}}},{use:"@gridsome/vue-remark",options:{baseDir:"../server/docs",pathPrefix:"/docs/server",typeName:"ServerDocs",editingDomain:"https://github.com/ulixee/ulixee/tree/main/server/docs",template:"./src/templates/ServerDoc.vue",plugins:["@gridsome/remark-prismjs"],remark:{autolinkHeadings:{content:{type:"text",value:"#"}}}}},{use:"@gridsome/vue-remark",options:{baseDir:"../databox/docs",pathPrefix:"/docs/databox",typeName:"DataboxDocs",editingDomain:"https://github.com/ulixee/ulixee/tree/main/databox/docs",template:"./src/templates/DataboxDoc.vue",plugins:["@gridsome/remark-prismjs"],remark:{autolinkHeadings:{content:{type:"text",value:"#"}}}}},{use:"@gridsome/vue-remark",options:{baseDir:"../hero/docs/awaited-dom",pathPrefix:"/docs/awaited-dom",typeName:"AwaitedDom",template:"./src/templates/AwaitedDomDocsPage.vue",plugins:["@gridsome/remark-prismjs"],remark:{autolinkHeadings:{content:{type:"text",value:"#"}}}}}]}}}]);