!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=Q.type(e);return"function"!==n&&!Q.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function r(e,t,n){if(Q.isFunction(t))return Q.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return Q.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(se.test(t))return Q.filter(t,e,n);t=Q.filter(t,e)}return Q.grep(e,function(e){return Y.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=de[e]={};return Q.each(e.match(he)||[],function(e,n){t[n]=!0}),t}function a(){J.removeEventListener("DOMContentLoaded",a,!1),e.removeEventListener("load",a,!1),Q.ready()}function s(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Q.expando+Math.random()}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(xe,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:be.test(n)?Q.parseJSON(n):n)}catch(e){}ye.set(e,t,n)}else n=void 0;return n}function l(){return!0}function c(){return!1}function f(){try{return J.activeElement}catch(e){}}function p(e,t){return Q.nodeName(e,"table")&&Q.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function h(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function d(e){var t=Re.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function v(e,t){for(var n=0,r=e.length;n<r;n++)me.set(e[n],"globalEval",!t||me.get(t[n],"globalEval"))}function g(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(me.hasData(e)&&(o=me.access(e),a=me.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)Q.event.add(t,i,l[i][n])}ye.hasData(e)&&(s=ye.access(e),u=Q.extend({},s),ye.set(t,u))}}function m(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Q.nodeName(e,t)?Q.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Se.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function b(t,n){var r,i=Q(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Q.css(i[0],"display");return i.detach(),o}function x(e){var t=J,n=Pe[e];return n||(n=b(e,t),"none"!==n&&n||(qe=(qe||Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=qe[0].contentDocument,t.write(),t.close(),n=b(e,t),qe.detach()),Pe[e]=n),n}function w(e,t,n){var r,i,o,a,s=e.style;return n=n||Be(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||Q.contains(e.ownerDocument,e)||(a=Q.style(e,t)),Ue.test(a)&&$e.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function T(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Ge.length;i--;)if(t=Ge[i]+n,t in e)return t;return r}function S(e,t,n){var r=We.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function E(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=Q.css(e,n+Te[o],!0,i)),r?("content"===n&&(a-=Q.css(e,"padding"+Te[o],!0,i)),"margin"!==n&&(a-=Q.css(e,"border"+Te[o]+"Width",!0,i))):(a+=Q.css(e,"padding"+Te[o],!0,i),"padding"!==n&&(a+=Q.css(e,"border"+Te[o]+"Width",!0,i)));return a}function k(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Be(e),a="border-box"===Q.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(i=w(e,t,o),(i<0||null==i)&&(i=e.style[t]),Ue.test(i))return i;r=a&&(V.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+E(e,t,n||(a?"border":"content"),r,o)+"px"}function N(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)r=e[a],r.style&&(o[a]=me.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Ce(r)&&(o[a]=me.access(r,"olddisplay",x(r.nodeName)))):(i=Ce(r),"none"===n&&i||me.set(r,"olddisplay",i?n:Q.css(r,"display"))));for(a=0;a<s;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function A(e,t,n,r,i){return new A.prototype.init(e,t,n,r,i)}function D(){return setTimeout(function(){Ve=void 0}),Ve=Q.now()}function _(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=Te[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function O(e,t,n){for(var r,i=(nt[t]||[]).concat(nt["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function j(e,t,n){var r,i,o,a,s,u,l,c,f=this,p={},h=e.style,d=e.nodeType&&Ce(e),v=me.get(e,"fxshow");n.queue||(s=Q._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,Q.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=Q.css(e,"display"),c="none"===l?me.get(e,"olddisplay")||x(e.nodeName):l,"inline"===c&&"none"===Q.css(e,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Ze.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(d?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;d=!0}p[r]=v&&v[r]||Q.style(e,r)}else l=void 0;if(Q.isEmptyObject(p))"inline"===("none"===l?x(e.nodeName):l)&&(h.display=l);else{v?"hidden"in v&&(d=v.hidden):v=me.access(e,"fxshow",{}),o&&(v.hidden=!d),d?Q(e).show():f.done(function(){Q(e).hide()}),f.done(function(){var t;me.remove(e,"fxshow");for(t in p)Q.style(e,t,p[t])});for(r in p)a=O(d?v[r]:0,r,f),r in v||(v[r]=a.start,d&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function M(e,t){var n,r,i,o,a;for(n in e)if(r=Q.camelCase(n),i=t[r],o=e[n],Q.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=Q.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function L(e,t,n){var r,i,o=0,a=tt.length,s=Q.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Ve||D(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:Q.extend({},t),opts:Q.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ve||D(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Q.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(M(c,l.opts.specialEasing);o<a;o++)if(r=tt[o].call(l,e,c,l.opts))return r;return Q.map(c,O,l),Q.isFunction(l.opts.start)&&l.opts.start.call(e,l),Q.fx.timer(Q.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function F(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(he)||[];if(Q.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function R(e,t,n,r){function i(s){var u;return o[s]=!0,Q.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===wt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function I(e,t){var n,r,i=Q.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Q.extend(!0,e,r),e}function H(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function q(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function P(e,t,n,r){var i;if(Q.isArray(t))Q.each(t,function(t,i){n||St.test(e)?r(e,i):P(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==Q.type(t))r(e,t);else for(i in t)P(e+"["+i+"]",t[i],n,r)}function $(e){return Q.isWindow(e)?e:9===e.nodeType&&e.defaultView}var U=[],B=U.slice,z=U.concat,W=U.push,Y=U.indexOf,X={},K=X.toString,G=X.hasOwnProperty,V={},J=e.document,Z="2.1.1",Q=function(e,t){return new Q.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ne=/-([\da-z])/gi,re=function(e,t){return t.toUpperCase()};Q.fn=Q.prototype={jquery:Z,constructor:Q,selector:"",length:0,toArray:function(){return B.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:B.call(this)},pushStack:function(e){var t=Q.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Q.each(this,e,t)},map:function(e){return this.pushStack(Q.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(B.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:W,sort:U.sort,splice:U.splice},Q.extend=Q.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||Q.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(Q.isPlainObject(r)||(i=Q.isArray(r)))?(i?(i=!1,o=n&&Q.isArray(n)?n:[]):o=n&&Q.isPlainObject(n)?n:{},a[t]=Q.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},Q.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Q.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Q.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){return"object"===Q.type(e)&&!e.nodeType&&!Q.isWindow(e)&&!(e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?X[K.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=Q.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ne,re)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;o<a&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;o<a&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?Q.merge(r,"string"==typeof e?[e]:e):W.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:Y.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;o<a;o++)i=t(e[o],o,r),null!=i&&u.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i);return z.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),Q.isFunction(e))return r=B.call(arguments,2),i=function(){return e.apply(t||this,r.concat(B.call(arguments)))},i.guid=e.guid=e.guid||Q.guid++,i},now:Date.now,support:V}),Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){X["[object "+t+"]"]=t.toLowerCase()});var ie=function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,h,d,v;if((t?t.ownerDocument||t:P)!==j&&O(t),t=t||j,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(L&&!r){if(i=ye.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&H(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!F||!F.test(e))){if(h=f=q,d=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=E(e),(f=t.getAttribute("id"))?h=f.replace(xe,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",u=l.length;u--;)l[u]=h+p(l[u]);d=be.test(e)&&c(t.parentNode)||t,v=l.join(",")}if(v)try{return Q.apply(n,d.querySelectorAll(v)),n}catch(e){}finally{f||t.removeAttribute("id")}}}return N(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[q]=!0,e}function i(e){var t=j.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||K)-(~e.sourceIndex||K);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&typeof e.getElementsByTagName!==X&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=U++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l=[$,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[q]||(t[q]={}),(s=u[r])&&s[0]===$&&s[1]===o)return l[2]=s[2];if(u[r]=l,l[2]=e(t,n,a))return!0}}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function v(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function m(e,t,n,i,o,a){return i&&!i[q]&&(i=m(i)),o&&!o[q]&&(o=m(o,a)),r(function(r,a,s,u){var l,c,f,p=[],h=[],d=a.length,m=r||v(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?m:g(m,p,e,s,u),b=n?o||(r?e:d||i)?[]:a:y;if(n&&n(y,b,s,u),i)for(l=g(b,h),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(b[h[c]]=!(y[h[c]]=f));if(r){if(o||e){if(o){for(l=[],c=b.length;c--;)(f=b[c])&&l.push(y[c]=f);o(null,b=[],l,u)}for(c=b.length;c--;)(f=b[c])&&(l=o?te.call(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else b=g(b===a?b.splice(d,b.length):b),o?o(null,a,b,u):Q.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return te.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==A)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];s<i;s++)if(n=T.relative[e[s].type])c=[h(d(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[q]){for(r=++s;r<i&&!T.relative[e[r].type];r++);return m(s>1&&d(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<r&&y(e.slice(s,r)),r<i&&y(e=e.slice(r)),r<i&&p(e))}c.push(n)}return d(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,h=0,d="0",v=r&&[],m=[],y=A,b=r||o&&T.find.TAG("*",l),x=$+=null==y?1:Math.random()||.1,w=b.length;for(l&&(A=a!==j&&a);d!==w&&null!=(c=b[d]);d++){if(o&&c){for(f=0;p=e[f++];)if(p(c,a,s)){u.push(c);break}l&&($=x)}i&&((c=!p&&c)&&h--,r&&v.push(c))}if(h+=d,i&&d!==h){for(f=0;p=n[f++];)p(v,m,a,s);if(r){if(h>0)for(;d--;)v[d]||m[d]||(m[d]=J.call(u));m=g(m)}Q.apply(u,m),l&&!r&&m.length>0&&h+n.length>1&&t.uniqueSort(u)}return l&&($=x,A=y),v};return i?r(a):a}var x,w,T,C,S,E,k,N,A,D,_,O,j,M,L,F,R,I,H,q="sizzle"+-new Date,P=e.document,$=0,U=0,B=n(),z=n(),W=n(),Y=function(e,t){return e===t&&(_=!0),0},X="undefined",K=1<<31,G={}.hasOwnProperty,V=[],J=V.pop,Z=V.push,Q=V.push,ee=V.slice,te=V.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ie.replace("w","w#"),ae="\\["+re+"*("+ie+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+re+"*\\]",se=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",ue=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),le=new RegExp("^"+re+"*,"+re+"*"),ce=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),fe=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),pe=new RegExp(se),he=new RegExp("^"+oe+"$"),de={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},ve=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,xe=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),Te=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Q.apply(V=ee.call(P.childNodes),P.childNodes),V[P.childNodes.length].nodeType}catch(e){Q={apply:V.length?function(e,t){Z.apply(e,ee.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},O=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:P,r=n.defaultView;return n!==j&&9===n.nodeType&&n.documentElement?(j=n,M=n.documentElement,L=!S(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){O()},!1):r.attachEvent&&r.attachEvent("onunload",function(){O()})),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=me.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),w.getById=i(function(e){return M.appendChild(e).id=q,!n.getElementsByName||!n.getElementsByName(q).length}),w.getById?(T.find.ID=function(e,t){if(typeof t.getElementById!==X&&L){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){var n=typeof e.getAttributeNode!==X&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==X)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==X&&L)return t.getElementsByClassName(e)},R=[],F=[],(w.qsa=me.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>",e.querySelectorAll("[msallowclip^='']").length&&F.push("[*^$]="+re+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+re+"*(?:value|"+ne+")"),e.querySelectorAll(":checked").length||F.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+re+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=me.test(I=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&i(function(e){w.disconnectedMatch=I.call(e,"div"),I.call(e,"[s!='']:x"),R.push("!=",se)}),F=F.length&&new RegExp(F.join("|")),R=R.length&&new RegExp(R.join("|")),t=me.test(M.compareDocumentPosition),H=t||me.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Y=t?function(e,t){if(e===t)return _=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!w.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===P&&H(P,e)?-1:t===n||t.ownerDocument===P&&H(P,t)?1:D?te.call(D,e)-te.call(D,t):0:4&r?-1:1)}:function(e,t){if(e===t)return _=!0,0;var r,i=0,o=e.parentNode,s=t.parentNode,u=[e],l=[t];if(!o||!s)return e===n?-1:t===n?1:o?-1:s?1:D?te.call(D,e)-te.call(D,t):0;if(o===s)return a(e,t);for(r=e;r=r.parentNode;)u.unshift(r);for(r=t;r=r.parentNode;)l.unshift(r);for(;u[i]===l[i];)i++;return i?a(u[i],l[i]):u[i]===P?-1:l[i]===P?1:0},n):j},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==j&&O(e),n=n.replace(fe,"='$1']"),w.matchesSelector&&L&&(!R||!R.test(n))&&(!F||!F.test(n)))try{var r=I.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,j,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==j&&O(e),H(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==j&&O(e);var n=T.attrHandle[t.toLowerCase()],r=n&&G.call(T.attrHandle,t.toLowerCase())?n(e,t,!L):void 0;return void 0!==r?r:w.attributes||!L?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(_=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(Y),_){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return D=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+re+")"+e+"("+re+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==X&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,h,d,v=o!==a?"nextSibling":"previousSibling",g=t.parentNode,m=s&&t.nodeName.toLowerCase(),y=!u&&!s;if(g){if(o){for(;v;){for(f=t;f=f[v];)if(s?f.nodeName.toLowerCase()===m:1===f.nodeType)return!1;d=v="only"===e&&!d&&"nextSibling"}return!0}if(d=[a?g.firstChild:g.lastChild],a&&y){for(c=g[q]||(g[q]={}),l=c[e]||[],h=l[0]===$&&l[1],p=l[0]===$&&l[2],f=h&&g.childNodes[h];f=++h&&f&&f[v]||(p=h=0)||d.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[$,h,p];break}}else if(y&&(l=(t[q]||(t[q]={}))[e])&&l[0]===$)p=l[1];else for(;(f=++h&&f&&f[v]||(p=h=0)||d.pop())&&((s?f.nodeName.toLowerCase()!==m:1!==f.nodeType)||!++p||(y&&((f[q]||(f[q]={}))[e]=[$,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[q]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=te.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=k(e.replace(ue,"$1"));return i[q]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return he.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n;do if(n=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===M},focus:function(e){return e===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return ve.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=u(x);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,E=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){r&&!(i=le.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),s=s.slice(r.length));for(a in T.filter)!(i=de[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):z(e,u).slice(0)},k=t.compile=function(e,t){var n,r=[],i=[],o=W[e+" "];if(!o){for(t||(t=E(e)),n=t.length;n--;)o=y(t[n]),o[q]?r.push(o):i.push(o);o=W(e,b(i,r)),o.selector=e}return o},N=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&E(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&L&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(we,Te),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((u=T.find[s])&&(r=u(a.matches[0].replace(we,Te),be.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Q.apply(n,r),n;break}}return(l||k(e,f))(r,t,!L,n,be.test(e)&&c(t.parentNode)||t),n},w.sortStable=q.split("").sort(Y).join("")===q,w.detectDuplicates=!!_,O(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(j.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(ne,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);Q.find=ie,Q.expr=ie.selectors,Q.expr[":"]=Q.expr.pseudos,Q.unique=ie.uniqueSort,Q.text=ie.getText,Q.isXMLDoc=ie.isXML,Q.contains=ie.contains;var oe=Q.expr.match.needsContext,ae=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,se=/^.[^:#\[\.,]*$/;Q.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Q.find.matchesSelector(r,e)?[r]:[]:Q.find.matches(e,Q.grep(t,function(e){return 1===e.nodeType}))},Q.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(Q(e).filter(function(){for(t=0;t<n;t++)if(Q.contains(i[t],this))return!0;
}));for(t=0;t<n;t++)Q.find(e,i[t],r);return r=this.pushStack(n>1?Q.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&oe.test(e)?Q(e):e||[],!1).length}});var ue,le=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=Q.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:le.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ue).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Q?t[0]:t,Q.merge(this,Q.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),ae.test(n[1])&&Q.isPlainObject(t))for(n in t)Q.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=J.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Q.isFunction(e)?"undefined"!=typeof ue.ready?ue.ready(e):e(Q):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Q.makeArray(e,this))};ce.prototype=Q.fn,ue=Q(J);var fe=/^(?:parents|prev(?:Until|All))/,pe={children:!0,contents:!0,next:!0,prev:!0};Q.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Q(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Q.fn.extend({has:function(e){var t=Q(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(Q.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=oe.test(e)||"string"!=typeof e?Q(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&Q.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Q.unique(o):o)},index:function(e){return e?"string"==typeof e?Y.call(Q(e),this[0]):Y.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Q.unique(Q.merge(this.get(),Q(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Q.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Q.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Q.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Q.dir(e,"nextSibling")},prevAll:function(e){return Q.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Q.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Q.dir(e,"previousSibling",n)},siblings:function(e){return Q.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Q.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Q.merge([],e.childNodes)}},function(e,t){Q.fn[e]=function(n,r){var i=Q.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Q.filter(r,i)),this.length>1&&(pe[e]||Q.unique(i),fe.test(e)&&i.reverse()),this.pushStack(i)}});var he=/\S+/g,de={};Q.Callbacks=function(e){e="string"==typeof e?de[e]||o(e):Q.extend({},e);var t,n,r,i,a,s,u=[],l=!e.once&&[],c=function(o){for(t=e.memory&&o,n=!0,s=i||0,i=0,a=u.length,r=!0;u&&s<a;s++)if(u[s].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,u&&(l?l.length&&c(l.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function t(n){Q.each(n,function(n,r){var i=Q.type(r);"function"===i?e.unique&&f.has(r)||u.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),r?a=u.length:t&&(i=n,c(t))}return this},remove:function(){return u&&Q.each(arguments,function(e,t){for(var n;(n=Q.inArray(t,u,n))>-1;)u.splice(n,1),r&&(n<=a&&a--,n<=s&&s--)}),this},has:function(e){return e?Q.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],a=0,this},disable:function(){return u=l=t=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,t||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||n&&!l||(t=t||[],t=[e,t.slice?t.slice():t],r?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},Q.extend({Deferred:function(e){var t=[["resolve","done",Q.Callbacks("once memory"),"resolved"],["reject","fail",Q.Callbacks("once memory"),"rejected"],["notify","progress",Q.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Q.Deferred(function(n){Q.each(t,function(t,o){var a=Q.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&Q.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Q.extend(e,r):r}},i={};return r.pipe=r.then,Q.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=B.call(arguments),a=o.length,s=1!==a||e&&Q.isFunction(e.promise)?a:0,u=1===s?e:Q.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?B.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&Q.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}});var ve;Q.fn.ready=function(e){return Q.ready.promise().done(e),this},Q.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Q.readyWait++:Q.ready(!0)},ready:function(e){(e===!0?--Q.readyWait:Q.isReady)||(Q.isReady=!0,e!==!0&&--Q.readyWait>0||(ve.resolveWith(J,[Q]),Q.fn.triggerHandler&&(Q(J).triggerHandler("ready"),Q(J).off("ready"))))}}),Q.ready.promise=function(t){return ve||(ve=Q.Deferred(),"complete"===J.readyState?setTimeout(Q.ready):(J.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",a,!1))),ve.promise(t)},Q.ready.promise();var ge=Q.access=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===Q.type(n)){i=!0;for(s in n)Q.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,Q.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(Q(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o};Q.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},s.uid=1,s.accepts=Q.acceptData,s.prototype={key:function(e){if(!s.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=s.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Q.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(Q.isEmptyObject(o))Q.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Q.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(void 0===t)this.cache[o]={};else{Q.isArray(t)?r=t.concat(t.map(Q.camelCase)):(i=Q.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(he)||[])),n=r.length;for(;n--;)delete a[r[n]]}},hasData:function(e){return!Q.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var me=new s,ye=new s,be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,xe=/([A-Z])/g;Q.extend({hasData:function(e){return ye.hasData(e)||me.hasData(e)},data:function(e,t,n){return ye.access(e,t,n)},removeData:function(e,t){ye.remove(e,t)},_data:function(e,t,n){return me.access(e,t,n)},_removeData:function(e,t){me.remove(e,t)}}),Q.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=ye.get(o),1===o.nodeType&&!me.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=Q.camelCase(r.slice(5)),u(o,r,i[r])));me.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){ye.set(this,e)}):ge(this,function(t){var n,r=Q.camelCase(e);if(o&&void 0===t){if(n=ye.get(o,e),void 0!==n)return n;if(n=ye.get(o,r),void 0!==n)return n;if(n=u(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=ye.get(this,r);ye.set(this,r,t),e.indexOf("-")!==-1&&void 0!==n&&ye.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ye.remove(this,e)})}}),Q.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=me.get(e,t),n&&(!r||Q.isArray(n)?r=me.access(e,t,Q.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=Q.queue(e,t),r=n.length,i=n.shift(),o=Q._queueHooks(e,t),a=function(){Q.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return me.get(e,n)||me.access(e,n,{empty:Q.Callbacks("once memory").add(function(){me.remove(e,[t+"queue",n])})})}}),Q.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Q.queue(this[0],e):void 0===t?this:this.each(function(){var n=Q.queue(this,e,t);Q._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Q.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Q.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Q.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=me.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var we=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Te=["Top","Right","Bottom","Left"],Ce=function(e,t){return e=t||e,"none"===Q.css(e,"display")||!Q.contains(e.ownerDocument,e)},Se=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),V.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",V.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Ee="undefined";V.focusinBubbles="onfocusin"in e;var ke=/^key/,Ne=/^(?:mouse|pointer|contextmenu)|click/,Ae=/^(?:focusinfocus|focusoutblur)$/,De=/^([^.]*)(?:\.(.+)|)$/;Q.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,d,v,g=me.get(e);if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Q.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(t){return typeof Q!==Ee&&Q.event.triggered!==t.type?Q.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(he)||[""],l=t.length;l--;)s=De.exec(t[l])||[],h=v=s[1],d=(s[2]||"").split(".").sort(),h&&(f=Q.event.special[h]||{},h=(i?f.delegateType:f.bindType)||h,f=Q.event.special[h]||{},c=Q.extend({type:h,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Q.expr.match.needsContext.test(i),namespace:d.join(".")},o),(p=u[h])||(p=u[h]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,d,a)!==!1||e.addEventListener&&e.addEventListener(h,a,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),Q.event.global[h]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,d,v,g=me.hasData(e)&&me.get(e);if(g&&(u=g.events)){for(t=(t||"").match(he)||[""],l=t.length;l--;)if(s=De.exec(t[l])||[],h=v=s[1],d=(s[2]||"").split(".").sort(),h){for(f=Q.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=u[h]||[],s=s[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&v!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,d,g.handle)!==!1||Q.removeEvent(e,h,g.handle),delete u[h])}else for(h in u)Q.event.remove(e,h+t[l],n,r,!0);Q.isEmptyObject(u)&&(delete g.handle,me.remove(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,u,l,c,f,p=[r||J],h=G.call(t,"type")?t.type:t,d=G.call(t,"namespace")?t.namespace.split("."):[];if(a=s=r=r||J,3!==r.nodeType&&8!==r.nodeType&&!Ae.test(h+Q.event.triggered)&&(h.indexOf(".")>=0&&(d=h.split("."),h=d.shift(),d.sort()),l=h.indexOf(":")<0&&"on"+h,t=t[Q.expando]?t:new Q.Event(h,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=d.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Q.makeArray(n,[t]),f=Q.event.special[h]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!Q.isWindow(r)){for(u=f.delegateType||h,Ae.test(u+h)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;s===(r.ownerDocument||J)&&p.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||h,c=(me.get(a,"events")||{})[t.type]&&me.get(a,"handle"),c&&c.apply(a,n),c=l&&a[l],c&&c.apply&&Q.acceptData(a)&&(t.result=c.apply(a,n),t.result===!1&&t.preventDefault());return t.type=h,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Q.acceptData(r)||l&&Q.isFunction(r[h])&&!Q.isWindow(r)&&(s=r[l],s&&(r[l]=null),Q.event.triggered=h,r[h](),Q.event.triggered=void 0,s&&(r[l]=s)),t.result}},dispatch:function(e){e=Q.event.fix(e);var t,n,r,i,o,a=[],s=B.call(arguments),u=(me.get(this,"events")||{})[e.type]||[],l=Q.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=Q.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(o.namespace)||(e.handleObj=o,e.data=o.data,r=((Q.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;n<s;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Q(i,this).index(u)>=0:Q.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Q.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Ne.test(i)?this.mouseHooks:ke.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new Q.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==f()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===f()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&Q.nodeName(this,"input"))return this.click(),!1},_default:function(e){return Q.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Q.extend(new Q.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Q.event.trigger(i,null,t):Q.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Q.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Q.Event=function(e,t){return this instanceof Q.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?l:c):this.type=e,t&&Q.extend(this,t),this.timeStamp=e&&e.timeStamp||Q.now(),void(this[Q.expando]=!0)):new Q.Event(e,t)},Q.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=l,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=l,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=l,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Q.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Q.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||Q.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),V.focusinBubbles||Q.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Q.event.simulate(t,e.target,Q.event.fix(e),!0)};Q.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=me.access(r,t);i||r.addEventListener(e,n,!0),me.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=me.access(r,t)-1;i?me.access(r,t,i):(r.removeEventListener(e,n,!0),me.remove(r,t))}}}),Q.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=c;else if(!r)return this;return 1===i&&(o=r,r=function(e){return Q().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Q.guid++)),this.each(function(){Q.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Q(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=c),this.each(function(){Q.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Q.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return Q.event.trigger(e,t,n,!0)}});var _e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Oe=/<([\w:]+)/,je=/<|&#?\w+;/,Me=/<(?:script|style|link)/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/^$|\/(?:java|ecma)script/i,Re=/^true\/(.*)/,Ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,He={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};He.optgroup=He.option,He.tbody=He.tfoot=He.colgroup=He.caption=He.thead,He.th=He.td,Q.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=Q.contains(e.ownerDocument,e);if(!(V.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Q.isXMLDoc(e)))for(a=m(s),o=m(e),r=0,i=o.length;r<i;r++)y(o[r],a[r]);if(t)if(n)for(o=o||m(e),a=a||m(s),r=0,i=o.length;r<i;r++)g(o[r],a[r]);else g(e,s);return a=m(s,"script"),a.length>0&&v(a,!u&&m(e,"script")),s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,h=e.length;p<h;p++)if(i=e[p],i||0===i)if("object"===Q.type(i))Q.merge(f,i.nodeType?[i]:i);else if(je.test(i)){for(o=o||c.appendChild(t.createElement("div")),a=(Oe.exec(i)||["",""])[1].toLowerCase(),s=He[a]||He._default,o.innerHTML=s[1]+i.replace(_e,"<$1></$2>")+s[2],l=s[0];l--;)o=o.lastChild;Q.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||Q.inArray(i,r)===-1)&&(u=Q.contains(i.ownerDocument,i),o=m(c.appendChild(i),"script"),u&&v(o),n))for(l=0;i=o[l++];)Fe.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=Q.event.special,a=0;void 0!==(n=e[a]);a++){if(Q.acceptData(n)&&(i=n[me.expando],i&&(t=me.cache[i]))){if(t.events)for(r in t.events)o[r]?Q.event.remove(n,r):Q.removeEvent(n,r,t.handle);me.cache[i]&&delete me.cache[i]}delete ye.cache[n[ye.expando]]}}}),Q.fn.extend({text:function(e){return ge(this,function(e){return void 0===e?Q.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Q.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Q.cleanData(m(n)),n.parentNode&&(t&&Q.contains(n.ownerDocument,n)&&v(m(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Q.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Q.clone(this,e,t)})},html:function(e){return ge(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Me.test(e)&&!He[(Oe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(_e,"<$1></$2>");try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(Q.cleanData(m(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Q.cleanData(m(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=z.apply([],e);var n,r,i,o,a,s,u=0,l=this.length,c=this,f=l-1,p=e[0],v=Q.isFunction(p);if(v||l>1&&"string"==typeof p&&!V.checkClone&&Le.test(p))return this.each(function(n){var r=c.eq(n);v&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=Q.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=Q.map(m(n,"script"),h),o=i.length;u<l;u++)a=n,u!==f&&(a=Q.clone(a,!0,!0),o&&Q.merge(i,m(a,"script"))),t.call(this[u],a,u);if(o)for(s=i[i.length-1].ownerDocument,Q.map(i,d),u=0;u<o;u++)a=i[u],Fe.test(a.type||"")&&!me.access(a,"globalEval")&&Q.contains(s,a)&&(a.src?Q._evalUrl&&Q._evalUrl(a.src):Q.globalEval(a.textContent.replace(Ie,"")))}return this}}),Q.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Q.fn[e]=function(e){for(var n,r=[],i=Q(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),Q(i[a])[t](n),W.apply(r,n.get());return this.pushStack(r)}});var qe,Pe={},$e=/^margin/,Ue=new RegExp("^("+we+")(?!px)[a-z%]+$","i"),Be=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(a,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=J.documentElement,o=J.createElement("div"),a=J.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",V.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(a),e.getComputedStyle&&Q.extend(V,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=a.appendChild(J.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),t}}))}(),Q.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var ze=/^(none|table(?!-c[ea]).+)/,We=new RegExp("^("+we+")(.*)$","i"),Ye=new RegExp("^([+-])=("+we+")","i"),Xe={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","O","Moz","ms"];Q.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=w(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=Q.camelCase(t),u=e.style;return t=Q.cssProps[s]||(Q.cssProps[s]=C(u,s)),a=Q.cssHooks[t]||Q.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Ye.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Q.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||Q.cssNumber[s]||(n+="px"),V.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,a,s=Q.camelCase(t);return t=Q.cssProps[s]||(Q.cssProps[s]=C(e.style,s)),a=Q.cssHooks[t]||Q.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=w(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),n===!0||Q.isNumeric(o)?o||0:i):i}}),Q.each(["height","width"],function(e,t){Q.cssHooks[t]={get:function(e,n,r){if(n)return ze.test(Q.css(e,"display"))&&0===e.offsetWidth?Q.swap(e,Xe,function(){return k(e,t,r)}):k(e,t,r)},set:function(e,n,r){var i=r&&Be(e);return S(e,n,r?E(e,t,r,"border-box"===Q.css(e,"boxSizing",!1,i),i):0)}}}),Q.cssHooks.marginRight=T(V.reliableMarginRight,function(e,t){if(t)return Q.swap(e,{display:"inline-block"},w,[e,"marginRight"])}),Q.each({margin:"",padding:"",border:"Width"},function(e,t){Q.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Te[r]+t]=o[r]||o[r-2]||o[0];return i}},$e.test(e)||(Q.cssHooks[e+t].set=S)}),Q.fn.extend({css:function(e,t){return ge(this,function(e,t,n){var r,i,o={},a=0;if(Q.isArray(t)){for(r=Be(e),i=t.length;a<i;a++)o[t[a]]=Q.css(e,t[a],!1,r);return o}return void 0!==n?Q.style(e,t,n):Q.css(e,t)},e,t,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ce(this)?Q(this).show():Q(this).hide()})}}),Q.Tween=A,A.prototype={constructor:A,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Q.cssNumber[n]?"":"px")},cur:function(){var e=A.propHooks[this.prop];return e&&e.get?e.get(this):A.propHooks._default.get(this)},run:function(e){var t,n=A.propHooks[this.prop];return this.options.duration?this.pos=t=Q.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):A.propHooks._default.set(this),this}},A.prototype.init.prototype=A.prototype,A.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Q.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Q.fx.step[e.prop]?Q.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Q.cssProps[e.prop]]||Q.cssHooks[e.prop])?Q.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},A.propHooks.scrollTop=A.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Q.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Q.fx=A.prototype.init,Q.fx.step={};var Ve,Je,Ze=/^(?:toggle|show|hide)$/,Qe=new RegExp("^(?:([+-])=|)("+we+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[j],nt={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Qe.exec(t),o=i&&i[3]||(Q.cssNumber[e]?"":"px"),a=(Q.cssNumber[e]||"px"!==o&&+r)&&Qe.exec(Q.css(n.elem,e)),s=1,u=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,Q.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--u)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};Q.Animation=Q.extend(L,{tweener:function(e,t){Q.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;r<i;r++)n=e[r],nt[n]=nt[n]||[],nt[n].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),Q.speed=function(e,t,n){var r=e&&"object"==typeof e?Q.extend({},e):{complete:n||!n&&t||Q.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Q.isFunction(t)&&t};return r.duration=Q.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Q.fx.speeds?Q.fx.speeds[r.duration]:Q.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){Q.isFunction(r.old)&&r.old.call(this),r.queue&&Q.dequeue(this,r.queue)},r},Q.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ce).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Q.isEmptyObject(e),o=Q.speed(t,n,r),a=function(){var t=L(this,Q.extend({},e),o);(i||me.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Q.timers,a=me.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&et.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||Q.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=me.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Q.timers,a=r?r.length:0;for(n.finish=!0,Q.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),Q.each(["toggle","show","hide"],function(e,t){var n=Q.fn[t];
Q.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_(t,!0),e,r,i)}}),Q.each({slideDown:_("show"),slideUp:_("hide"),slideToggle:_("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Q.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Q.timers=[],Q.fx.tick=function(){var e,t=0,n=Q.timers;for(Ve=Q.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Q.fx.stop(),Ve=void 0},Q.fx.timer=function(e){Q.timers.push(e),e()?Q.fx.start():Q.timers.pop()},Q.fx.interval=13,Q.fx.start=function(){Je||(Je=setInterval(Q.fx.tick,Q.fx.interval))},Q.fx.stop=function(){clearInterval(Je),Je=null},Q.fx.speeds={slow:600,fast:200,_default:400},Q.fn.delay=function(e,t){return e=Q.fx?Q.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",V.checkOn=""!==e.value,V.optSelected=n.selected,t.disabled=!0,V.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",V.radioValue="t"===e.value}();var rt,it,ot=Q.expr.attrHandle;Q.fn.extend({attr:function(e,t){return ge(this,Q.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Q.removeAttr(this,e)})}}),Q.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Ee?Q.prop(e,t,n):(1===o&&Q.isXMLDoc(e)||(t=t.toLowerCase(),r=Q.attrHooks[t]||(Q.expr.match.bool.test(t)?it:rt)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Q.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Q.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(he);if(o&&1===e.nodeType)for(;n=o[i++];)r=Q.propFix[n]||n,Q.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!V.radioValue&&"radio"===t&&Q.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),it={set:function(e,t,n){return t===!1?Q.removeAttr(e,n):e.setAttribute(n,n),n}},Q.each(Q.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ot[t]||Q.find.attr;ot[t]=function(e,t,r){var i,o;return r||(o=ot[t],ot[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,ot[t]=o),i}});var at=/^(?:input|select|textarea|button)$/i;Q.fn.extend({prop:function(e,t){return ge(this,Q.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Q.propFix[e]||e]})}}),Q.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!Q.isXMLDoc(e),o&&(t=Q.propFix[t]||t,i=Q.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||at.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),V.optSelected||(Q.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Q.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Q.propFix[this.toLowerCase()]=this});var st=/[\t\r\n\f]/g;Q.fn.extend({addClass:function(e){var t,n,r,i,o,a,s="string"==typeof e&&e,u=0,l=this.length;if(Q.isFunction(e))return this.each(function(t){Q(this).addClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(he)||[];u<l;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(st," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=Q.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(Q.isFunction(e))return this.each(function(t){Q(this).removeClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(he)||[];u<l;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(st," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?Q.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):Q.isFunction(e)?this.each(function(n){Q(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,r=0,i=Q(this),o=e.match(he)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else n!==Ee&&"boolean"!==n||(this.className&&me.set(this,"__className__",this.className),this.className=this.className||e===!1?"":me.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(st," ").indexOf(t)>=0)return!0;return!1}});var ut=/\r/g;Q.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=Q.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Q(this).val()):e,null==i?i="":"number"==typeof i?i+="":Q.isArray(i)&&(i=Q.map(i,function(e){return null==e?"":e+""})),t=Q.valHooks[this.type]||Q.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=Q.valHooks[i.type]||Q.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(ut,""):null==n?"":n)}}}),Q.extend({valHooks:{option:{get:function(e){var t=Q.find.attr(e,"value");return null!=t?t:Q.trim(Q.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(n=r[u],(n.selected||u===i)&&(V.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!Q.nodeName(n.parentNode,"optgroup"))){if(t=Q(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=Q.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=Q.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Q.each(["radio","checkbox"],function(){Q.valHooks[this]={set:function(e,t){if(Q.isArray(t))return e.checked=Q.inArray(Q(e).val(),t)>=0}},V.checkOn||(Q.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Q.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Q.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var lt=Q.now(),ct=/\?/;Q.parseJSON=function(e){return JSON.parse(e+"")},Q.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||Q.error("Invalid XML: "+e),t};var ft,pt,ht=/#.*$/,dt=/([?&])_=[^&]*/,vt=/^(.*?):[ \t]*([^\r\n]*)$/gm,gt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mt=/^(?:GET|HEAD)$/,yt=/^\/\//,bt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,xt={},wt={},Tt="*/".concat("*");try{pt=location.href}catch(e){pt=J.createElement("a"),pt.href="",pt=pt.href}ft=bt.exec(pt.toLowerCase())||[],Q.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pt,type:"GET",isLocal:gt.test(ft[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Tt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Q.parseJSON,"text xml":Q.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?I(I(e,Q.ajaxSettings),t):I(Q.ajaxSettings,e)},ajaxPrefilter:F(xt),ajaxTransport:F(wt),ajax:function(e,t){function n(e,t,n,a){var u,c,m,y,x,T=t;2!==b&&(b=2,s&&clearTimeout(s),r=void 0,o=a||"",w.readyState=e>0?4:0,u=e>=200&&e<300||304===e,n&&(y=H(f,w,n)),y=q(f,y,w,u),u?(f.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(Q.lastModified[i]=x),x=w.getResponseHeader("etag"),x&&(Q.etag[i]=x)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,m=y.error,u=!m)):(m=T,!e&&T||(T="error",e<0&&(e=0))),w.status=e,w.statusText=(t||T)+"",u?d.resolveWith(p,[c,T,w]):d.rejectWith(p,[w,T,m]),w.statusCode(g),g=void 0,l&&h.trigger(u?"ajaxSuccess":"ajaxError",[w,f,u?c:m]),v.fireWith(p,[w,T]),l&&(h.trigger("ajaxComplete",[w,f]),--Q.active||Q.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,a,s,u,l,c,f=Q.ajaxSetup({},t),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?Q(p):Q.event,d=Q.Deferred(),v=Q.Callbacks("once memory"),g=f.statusCode||{},m={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!a)for(a={};t=vt.exec(o);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return r&&r.abort(t),n(0,t),this}};if(d.promise(w).complete=v.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||pt)+"").replace(ht,"").replace(yt,ft[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=Q.trim(f.dataType||"*").toLowerCase().match(he)||[""],null==f.crossDomain&&(u=bt.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===ft[1]&&u[2]===ft[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(ft[3]||("http:"===ft[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=Q.param(f.data,f.traditional)),R(xt,f,t,w),2===b)return w;l=f.global,l&&0===Q.active++&&Q.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!mt.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(ct.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=dt.test(i)?i.replace(dt,"$1_="+lt++):i+(ct.test(i)?"&":"?")+"_="+lt++)),f.ifModified&&(Q.lastModified[i]&&w.setRequestHeader("If-Modified-Since",Q.lastModified[i]),Q.etag[i]&&w.setRequestHeader("If-None-Match",Q.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Tt+"; q=0.01":""):f.accepts["*"]);for(c in f.headers)w.setRequestHeader(c,f.headers[c]);if(f.beforeSend&&(f.beforeSend.call(p,w,f)===!1||2===b))return w.abort();x="abort";for(c in{success:1,error:1,complete:1})w[c](f[c]);if(r=R(wt,f,t,w)){w.readyState=1,l&&h.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},f.timeout));try{b=1,r.send(m,n)}catch(e){if(!(b<2))throw e;n(-1,e)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return Q.get(e,t,n,"json")},getScript:function(e,t){return Q.get(e,void 0,t,"script")}}),Q.each(["get","post"],function(e,t){Q[t]=function(e,n,r,i){return Q.isFunction(n)&&(i=i||r,r=n,n=void 0),Q.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Q.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Q.fn[t]=function(e){return this.on(t,e)}}),Q._evalUrl=function(e){return Q.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},Q.fn.extend({wrapAll:function(e){var t;return Q.isFunction(e)?this.each(function(t){Q(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Q(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return Q.isFunction(e)?this.each(function(t){Q(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Q(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Q.isFunction(e);return this.each(function(n){Q(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Q.nodeName(this,"body")||Q(this).replaceWith(this.childNodes)}).end()}}),Q.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Q.expr.filters.visible=function(e){return!Q.expr.filters.hidden(e)};var Ct=/%20/g,St=/\[\]$/,Et=/\r?\n/g,kt=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;Q.param=function(e,t){var n,r=[],i=function(e,t){t=Q.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Q.ajaxSettings&&Q.ajaxSettings.traditional),Q.isArray(e)||e.jquery&&!Q.isPlainObject(e))Q.each(e,function(){i(this.name,this.value)});else for(n in e)P(n,e[n],t,i);return r.join("&").replace(Ct,"+")},Q.fn.extend({serialize:function(){return Q.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Q.prop(this,"elements");return e?Q.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Q(this).is(":disabled")&&Nt.test(this.nodeName)&&!kt.test(e)&&(this.checked||!Se.test(e))}).map(function(e,t){var n=Q(this).val();return null==n?null:Q.isArray(n)?Q.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}}),Q.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var At=0,Dt={},_t={0:200,1223:204},Ot=Q.ajaxSettings.xhr();e.ActiveXObject&&Q(e).on("unload",function(){for(var e in Dt)Dt[e]()}),V.cors=!!Ot&&"withCredentials"in Ot,V.ajax=Ot=!!Ot,Q.ajaxTransport(function(e){var t;if(V.cors||Ot&&!e.crossDomain)return{send:function(n,r){var i,o=e.xhr(),a=++At;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete Dt[a],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(_t[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Dt[a]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),Q.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Q.globalEval(e),e}}}),Q.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Q.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=Q("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var jt=[],Mt=/(=)\?(?=&|$)|\?\?/;Q.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=jt.pop()||Q.expando+"_"+lt++;return this[e]=!0,e}}),Q.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(Mt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Mt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=Q.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Mt,"$1"+i):t.jsonp!==!1&&(t.url+=(ct.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||Q.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,jt.push(i)),a&&Q.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),Q.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||J;var r=ae.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=Q.buildFragment([e],t,i),i&&i.length&&Q(i).remove(),Q.merge([],r.childNodes))};var Lt=Q.fn.load;Q.fn.load=function(e,t,n){if("string"!=typeof e&&Lt)return Lt.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=Q.trim(e.slice(s)),e=e.slice(0,s)),Q.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&Q.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?Q("<div>").append(Q.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},Q.expr.filters.animated=function(e){return Q.grep(Q.timers,function(t){return e===t.elem}).length};var Ft=e.document.documentElement;Q.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=Q.css(e,"position"),f=Q(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=Q.css(e,"top"),u=Q.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),Q.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},Q.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Q.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;if(o)return t=o.documentElement,Q.contains(t,r)?(typeof r.getBoundingClientRect!==Ee&&(i=r.getBoundingClientRect()),n=$(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===Q.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Q.nodeName(e[0],"html")||(r=e.offset()),r.top+=Q.css(e[0],"borderTopWidth",!0),r.left+=Q.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Q.css(n,"marginTop",!0),left:t.left-r.left-Q.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Ft;e&&!Q.nodeName(e,"html")&&"static"===Q.css(e,"position");)e=e.offsetParent;return e||Ft})}}),Q.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;Q.fn[t]=function(i){return ge(this,function(t,i,o){var a=$(t);return void 0===o?a?a[n]:t[i]:void(a?a.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Q.each(["top","left"],function(e,t){Q.cssHooks[t]=T(V.pixelPosition,function(e,n){if(n)return n=w(e,t),Ue.test(n)?Q(e).position()[t]+"px":n})}),Q.each({Height:"height",Width:"width"},function(e,t){Q.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Q.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return ge(this,function(t,n,r){var i;return Q.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Q.css(t,n,a):Q.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),Q.fn.size=function(){return this.length},Q.fn.andSelf=Q.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Q});var Rt=e.jQuery,It=e.$;return Q.noConflict=function(t){return e.$===Q&&(e.$=It),t&&e.jQuery===Q&&(e.jQuery=Rt),Q},typeof t===Ee&&(e.jQuery=e.$=Q),Q}),function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,o=Function.prototype,a=r.push,s=r.slice,u=r.concat,l=i.toString,c=i.hasOwnProperty,f=r.forEach,p=r.map,h=r.reduce,d=r.reduceRight,v=r.filter,g=r.every,m=r.some,y=r.indexOf,b=r.lastIndexOf,x=Array.isArray,w=Object.keys,T=o.bind,C=function(e){return e instanceof C?e:this instanceof C?void(this._wrapped=e):new C(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=C),exports._=C):e._=C,C.VERSION="1.4.4";var S=C.each=C.forEach=function(e,t,r){if(null!=e)if(f&&e.forEach===f)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,o=e.length;i<o;i++)if(t.call(r,e[i],i,e)===n)return}else for(var a in e)if(C.has(e,a)&&t.call(r,e[a],a,e)===n)return};C.map=C.collect=function(e,t,n){var r=[];return null==e?r:p&&e.map===p?e.map(t,n):(S(e,function(e,i,o){r[r.length]=t.call(n,e,i,o)}),r)};var E="Reduce of empty array with no initial value";C.reduce=C.foldl=C.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),h&&e.reduce===h)return r&&(t=C.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(S(e,function(e,o,a){i?n=t.call(r,n,e,o,a):(n=e,i=!0)}),!i)throw new TypeError(E);return n},C.reduceRight=C.foldr=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),d&&e.reduceRight===d)return r&&(t=C.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var o=e.length;if(o!==+o){var a=C.keys(e);o=a.length}if(S(e,function(s,u,l){u=a?a[--o]:--o,i?n=t.call(r,n,e[u],u,l):(n=e[u],i=!0)}),!i)throw new TypeError(E);return n},C.find=C.detect=function(e,t,n){var r;return k(e,function(e,i,o){if(t.call(n,e,i,o))return r=e,!0}),r},C.filter=C.select=function(e,t,n){var r=[];return null==e?r:v&&e.filter===v?e.filter(t,n):(S(e,function(e,i,o){t.call(n,e,i,o)&&(r[r.length]=e)}),r)},C.reject=function(e,t,n){return C.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},C.every=C.all=function(e,t,r){t||(t=C.identity);var i=!0;return null==e?i:g&&e.every===g?e.every(t,r):(S(e,function(e,o,a){if(!(i=i&&t.call(r,e,o,a)))return n}),!!i)};var k=C.some=C.any=function(e,t,r){t||(t=C.identity);var i=!1;return null==e?i:m&&e.some===m?e.some(t,r):(S(e,function(e,o,a){if(i||(i=t.call(r,e,o,a)))return n}),!!i)};C.contains=C.include=function(e,t){return null!=e&&(y&&e.indexOf===y?e.indexOf(t)!=-1:k(e,function(e){return e===t}))},C.invoke=function(e,t){var n=s.call(arguments,2),r=C.isFunction(t);return C.map(e,function(e){return(r?t:e[t]).apply(e,n)})},C.pluck=function(e,t){return C.map(e,function(e){return e[t]})},C.where=function(e,t,n){return C.isEmpty(t)?n?null:[]:C[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},C.findWhere=function(e,t){return C.where(e,t,!0)},C.max=function(e,t,n){if(!t&&C.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&C.isEmpty(e))return-(1/0);var r={computed:-(1/0),value:-(1/0)};return S(e,function(e,i,o){var a=t?t.call(n,e,i,o):e;a>=r.computed&&(r={value:e,computed:a})}),r.value},C.min=function(e,t,n){if(!t&&C.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&C.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return S(e,function(e,i,o){var a=t?t.call(n,e,i,o):e;a<r.computed&&(r={value:e,computed:a})}),r.value},C.shuffle=function(e){var t,n=0,r=[];return S(e,function(e){t=C.random(n++),r[n-1]=r[t],r[t]=e}),r};var N=function(e){return C.isFunction(e)?e:function(t){return t[e]}};C.sortBy=function(e,t,n){var r=N(t);return C.pluck(C.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return e.index<t.index?-1:1}),"value")};var A=function(e,t,n,r){var i={},o=N(t||C.identity);return S(e,function(t,a){var s=o.call(n,t,a,e);r(i,s,t)}),i};C.groupBy=function(e,t,n){return A(e,t,n,function(e,t,n){(C.has(e,t)?e[t]:e[t]=[]).push(n)})},C.countBy=function(e,t,n){return A(e,t,n,function(e,t){C.has(e,t)||(e[t]=0),e[t]++})},C.sortedIndex=function(e,t,n,r){n=null==n?C.identity:N(n);for(var i=n.call(r,t),o=0,a=e.length;o<a;){var s=o+a>>>1;n.call(r,e[s])<i?o=s+1:a=s}return o},C.toArray=function(e){return e?C.isArray(e)?s.call(e):e.length===+e.length?C.map(e,C.identity):C.values(e):[]},C.size=function(e){return null==e?0:e.length===+e.length?e.length:C.keys(e).length},C.first=C.head=C.take=function(e,t,n){if(null!=e)return null==t||n?e[0]:s.call(e,0,t)},C.initial=function(e,t,n){return s.call(e,0,e.length-(null==t||n?1:t))},C.last=function(e,t,n){if(null!=e)return null==t||n?e[e.length-1]:s.call(e,Math.max(e.length-t,0))},C.rest=C.tail=C.drop=function(e,t,n){return s.call(e,null==t||n?1:t)},C.compact=function(e){return C.filter(e,C.identity)};var D=function(e,t,n){return S(e,function(e){C.isArray(e)?t?a.apply(n,e):D(e,t,n):n.push(e)}),n};C.flatten=function(e,t){return D(e,t,[])},C.without=function(e){return C.difference(e,s.call(arguments,1))},C.uniq=C.unique=function(e,t,n,r){C.isFunction(t)&&(r=n,n=t,t=!1);var i=n?C.map(e,n,r):e,o=[],a=[];return S(i,function(n,r){(t?r&&a[a.length-1]===n:C.contains(a,n))||(a.push(n),o.push(e[r]))}),o},C.union=function(){return C.uniq(u.apply(r,arguments))},C.intersection=function(e){var t=s.call(arguments,1);return C.filter(C.uniq(e),function(e){return C.every(t,function(t){return C.indexOf(t,e)>=0})})},C.difference=function(e){var t=u.apply(r,s.call(arguments,1));return C.filter(e,function(e){return!C.contains(t,e)})},C.zip=function(){for(var e=s.call(arguments),t=C.max(C.pluck(e,"length")),n=new Array(t),r=0;r<t;r++)n[r]=C.pluck(e,""+r);return n},C.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},C.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=C.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},C.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=r?n:e.length;i--;)if(e[i]===t)return i;return-1},C.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=0,o=new Array(r);i<r;)o[i++]=e,e+=n;return o},C.bind=function(e,t){if(e.bind===T&&T)return T.apply(e,s.call(arguments,1));var n=s.call(arguments,2);return function(){return e.apply(t,n.concat(s.call(arguments)))}},C.partial=function(e){var t=s.call(arguments,1);return function(){return e.apply(this,t.concat(s.call(arguments)))}},C.bindAll=function(e){var t=s.call(arguments,1);return 0===t.length&&(t=C.functions(e)),S(t,function(t){e[t]=C.bind(e[t],e)}),e},C.memoize=function(e,t){var n={};return t||(t=C.identity),function(){var r=t.apply(this,arguments);return C.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},C.delay=function(e,t){var n=s.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},C.defer=function(e){return C.delay.apply(C,[e,1].concat(s.call(arguments,1)))},C.throttle=function(e,t){var n,r,i,o,a=0,s=function(){a=new Date,i=null,o=e.apply(n,r)};return function(){var u=new Date,l=t-(u-a);return n=this,r=arguments,l<=0?(clearTimeout(i),i=null,a=u,o=e.apply(n,r)):i||(i=setTimeout(s,l)),o}},C.debounce=function(e,t,n){var r,i;return function(){var o=this,a=arguments,s=function(){r=null,n||(i=e.apply(o,a))},u=n&&!r;return clearTimeout(r),r=setTimeout(s,t),u&&(i=e.apply(o,a)),i}},C.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},C.wrap=function(e,t){return function(){var n=[e];return a.apply(n,arguments),t.apply(this,n)}},C.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},C.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},C.keys=w||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)C.has(e,n)&&(t[t.length]=n);return t},C.values=function(e){var t=[];for(var n in e)C.has(e,n)&&t.push(e[n]);return t},C.pairs=function(e){var t=[];for(var n in e)C.has(e,n)&&t.push([n,e[n]]);return t},C.invert=function(e){var t={};for(var n in e)C.has(e,n)&&(t[e[n]]=n);return t},C.functions=C.methods=function(e){var t=[];for(var n in e)C.isFunction(e[n])&&t.push(n);return t.sort()},C.extend=function(e){return S(s.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},C.pick=function(e){var t={},n=u.apply(r,s.call(arguments,1));return S(n,function(n){n in e&&(t[n]=e[n])}),t},C.omit=function(e){var t={},n=u.apply(r,s.call(arguments,1));for(var i in e)C.contains(n,i)||(t[i]=e[i]);return t},C.defaults=function(e){return S(s.call(arguments,1),function(t){if(t)for(var n in t)null==e[n]&&(e[n]=t[n])}),e},C.clone=function(e){return C.isObject(e)?C.isArray(e)?e.slice():C.extend({},e):e},C.tap=function(e,t){return t(e),e};var _=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof C&&(e=e._wrapped),t instanceof C&&(t=t._wrapped);var i=l.call(e);if(i!=l.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var o=n.length;o--;)if(n[o]==e)return r[o]==t;n.push(e),r.push(t);var a=0,s=!0;if("[object Array]"==i){if(a=e.length,s=a==t.length)for(;a--&&(s=_(e[a],t[a],n,r)););}else{var u=e.constructor,c=t.constructor;if(u!==c&&!(C.isFunction(u)&&u instanceof u&&C.isFunction(c)&&c instanceof c))return!1;for(var f in e)if(C.has(e,f)&&(a++,!(s=C.has(t,f)&&_(e[f],t[f],n,r))))break;if(s){for(f in t)if(C.has(t,f)&&!a--)break;s=!a}}return n.pop(),r.pop(),s};C.isEqual=function(e,t){return _(e,t,[],[])},C.isEmpty=function(e){if(null==e)return!0;if(C.isArray(e)||C.isString(e))return 0===e.length;for(var t in e)if(C.has(e,t))return!1;return!0},C.isElement=function(e){return!(!e||1!==e.nodeType)},C.isArray=x||function(e){return"[object Array]"==l.call(e)},C.isObject=function(e){return e===Object(e)},S(["Arguments","Function","String","Number","Date","RegExp"],function(e){C["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}}),C.isArguments(arguments)||(C.isArguments=function(e){return!(!e||!C.has(e,"callee"))}),"function"!=typeof/./&&(C.isFunction=function(e){return"function"==typeof e}),C.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},C.isNaN=function(e){return C.isNumber(e)&&e!=+e},C.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==l.call(e)},C.isNull=function(e){return null===e},C.isUndefined=function(e){return void 0===e},C.has=function(e,t){return c.call(e,t)},C.noConflict=function(){return e._=t,this},C.identity=function(e){return e},C.times=function(e,t,n){for(var r=Array(e),i=0;i<e;i++)r[i]=t.call(n,i);return r},C.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var O={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};O.unescape=C.invert(O.escape);var j={escape:new RegExp("["+C.keys(O.escape).join("")+"]","g"),unescape:new RegExp("("+C.keys(O.unescape).join("|")+")","g")};C.each(["escape","unescape"],function(e){C[e]=function(t){return null==t?"":(""+t).replace(j[e],function(t){return O[e][t]})}}),C.result=function(e,t){if(null==e)return null;var n=e[t];return C.isFunction(n)?n.call(e):n},C.mixin=function(e){S(C.functions(e),function(t){var n=C[t]=e[t];C.prototype[t]=function(){var e=[this._wrapped];return a.apply(e,arguments),I.call(this,n.apply(C,e))}})};var M=0;C.uniqueId=function(e){var t=++M+"";return e?e+t:t},C.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,F={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028",
"\u2029":"u2029"},R=/\\|'|\r|\n|\t|\u2028|\u2029/g;C.template=function(e,t,n){var r;n=C.defaults({},n,C.templateSettings);var i=new RegExp([(n.escape||L).source,(n.interpolate||L).source,(n.evaluate||L).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(i,function(t,n,r,i,s){return a+=e.slice(o,s).replace(R,function(e){return"\\"+F[e]}),n&&(a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(a+="';\n"+i+"\n__p+='"),o=s+t.length,t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(n.variable||"obj","_",a)}catch(e){throw e.source=a,e}if(t)return r(t,C);var s=function(e){return r.call(this,e,C)};return s.source="function("+(n.variable||"obj")+"){\n"+a+"}",s},C.chain=function(e){return C(e).chain()};var I=function(e){return this._chain?C(e).chain():e};C.mixin(C),S(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];C.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],I.call(this,n)}}),S(["concat","join","slice"],function(e){var t=r[e];C.prototype[e]=function(){return I.call(this,t.apply(this._wrapped,arguments))}}),C.extend(C.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),function(){var e,t=this,n=t.Backbone,r=[],i=r.push,o=r.slice,a=r.splice;e="undefined"!=typeof exports?exports:t.Backbone={},e.VERSION="1.0.0";var s=t._;s||"undefined"==typeof require||(s=require("underscore")),e.$=t.jQuery||t.Zepto||t.ender||t.$,e.noConflict=function(){return t.Backbone=n,this},e.emulateHTTP=!1,e.emulateJSON=!1;var u=e.Events={on:function(e,t,n){if(!c(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n,ctx:n||this}),this},once:function(e,t,n){if(!c(this,"once",e,[t,n])||!t)return this;var r=this,i=s.once(function(){r.off(e,i),t.apply(this,arguments)});return i._callback=t,this.on(e,i,n)},off:function(e,t,n){var r,i,o,a,u,l,f,p;if(!this._events||!c(this,"off",e,[t,n]))return this;if(!e&&!t&&!n)return this._events={},this;for(a=e?[e]:s.keys(this._events),u=0,l=a.length;u<l;u++)if(e=a[u],o=this._events[e]){if(this._events[e]=r=[],t||n)for(f=0,p=o.length;f<p;f++)i=o[f],(t&&t!==i.callback&&t!==i.callback._callback||n&&n!==i.context)&&r.push(i);r.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var t=o.call(arguments,1);if(!c(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&f(n,t),r&&f(r,arguments),this},stopListening:function(e,t,n){var r=this._listeners;if(!r)return this;var i=!t&&!n;"object"==typeof t&&(n=this),e&&((r={})[e._listenerId]=e);for(var o in r)r[o].off(t,n,this),i&&delete this._listeners[o];return this}},l=/\s+/,c=function(e,t,n,r){if(!n)return!0;if("object"==typeof n){for(var i in n)e[t].apply(e,[i,n[i]].concat(r));return!1}if(l.test(n)){for(var o=n.split(l),a=0,s=o.length;a<s;a++)e[t].apply(e,[o[a]].concat(r));return!1}return!0},f=function(e,t){var n,r=-1,i=e.length,o=t[0],a=t[1],s=t[2];switch(t.length){case 0:for(;++r<i;)(n=e[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o);return;case 2:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,a);return;case 3:for(;++r<i;)(n=e[r]).callback.call(n.ctx,o,a,s);return;default:for(;++r<i;)(n=e[r]).callback.apply(n.ctx,t)}},p={listenTo:"on",listenToOnce:"once"};s.each(p,function(e,t){u[t]=function(t,n,r){var i=this._listeners||(this._listeners={}),o=t._listenerId||(t._listenerId=s.uniqueId("l"));return i[o]=t,"object"==typeof n&&(r=this),t[e](n,r,this),this}}),u.bind=u.on,u.unbind=u.off,s.extend(e,u);var h=e.Model=function(e,t){var n,r=e||{};t||(t={}),this.cid=s.uniqueId("c"),this.attributes={},s.extend(this,s.pick(t,d)),t.parse&&(r=this.parse(r,t)||{}),(n=s.result(this,"defaults"))&&(r=s.defaults({},r,n)),this.set(r,t),this.changed={},this.initialize.apply(this,arguments)},d=["url","urlRoot","collection"];s.extend(h.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return s.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return s.escape(this.get(e))},has:function(e){return null!=this.get(e)},set:function(e,t,n){var r,i,o,a,u,l,c,f;if(null==e)return this;if("object"==typeof e?(i=e,n=t):(i={})[e]=t,n||(n={}),!this._validate(i,n))return!1;o=n.unset,u=n.silent,a=[],l=this._changing,this._changing=!0,l||(this._previousAttributes=s.clone(this.attributes),this.changed={}),f=this.attributes,c=this._previousAttributes,this.idAttribute in i&&(this.id=i[this.idAttribute]);for(r in i)t=i[r],s.isEqual(f[r],t)||a.push(r),s.isEqual(c[r],t)?delete this.changed[r]:this.changed[r]=t,o?delete f[r]:f[r]=t;if(!u){a.length&&(this._pending=!0);for(var p=0,h=a.length;p<h;p++)this.trigger("change:"+a[p],this,f[a[p]],n)}if(l)return this;if(!u)for(;this._pending;)this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,s.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var n in this.attributes)t[n]=void 0;return this.set(t,s.extend({},e,{unset:!0}))},hasChanged:function(e){return null==e?!s.isEmpty(this.changed):s.has(this.changed,e)},changedAttributes:function(e){if(!e)return!!this.hasChanged()&&s.clone(this.changed);var t,n=!1,r=this._changing?this._previousAttributes:this.attributes;for(var i in e)s.isEqual(r[i],t=e[i])||((n||(n={}))[i]=t);return n},previous:function(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null},previousAttributes:function(){return s.clone(this._previousAttributes)},fetch:function(e){e=e?s.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=this,n=e.success;return e.success=function(r){return!!t.set(t.parse(r,e),e)&&(n&&n(t,r,e),void t.trigger("sync",t,r,e))},I(this,e),this.sync("read",this,e)},save:function(e,t,n){var r,i,o,a=this.attributes;if(null==e||"object"==typeof e?(r=e,n=t):(r={})[e]=t,r&&(!n||!n.wait)&&!this.set(r,n))return!1;if(n=s.extend({validate:!0},n),!this._validate(r,n))return!1;r&&n.wait&&(this.attributes=s.extend({},a,r)),void 0===n.parse&&(n.parse=!0);var u=this,l=n.success;return n.success=function(e){u.attributes=a;var t=u.parse(e,n);return n.wait&&(t=s.extend(r||{},t)),!(s.isObject(t)&&!u.set(t,n))&&(l&&l(u,e,n),void u.trigger("sync",u,e,n))},I(this,n),i=this.isNew()?"create":n.patch?"patch":"update","patch"===i&&(n.attrs=r),o=this.sync(i,this,n),r&&n.wait&&(this.attributes=a),o},destroy:function(e){e=e?s.clone(e):{};var t=this,n=e.success,r=function(){t.trigger("destroy",t,t.collection,e)};if(e.success=function(i){(e.wait||t.isNew())&&r(),n&&n(t,i,e),t.isNew()||t.trigger("sync",t,i,e)},this.isNew())return e.success(),!1;I(this,e);var i=this.sync("delete",this,e);return e.wait||r(),i},url:function(){var e=s.result(this,"urlRoot")||s.result(this.collection,"url")||R();return this.isNew()?e:e+("/"===e.charAt(e.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(e){return this._validate({},s.extend(e||{},{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=s.extend({},this.attributes,e);var n=this.validationError=this.validate(e,t)||null;return!n||(this.trigger("invalid",this,n,s.extend(t||{},{validationError:n})),!1)}});var v=["keys","values","pairs","invert","pick","omit"];s.each(v,function(e){h.prototype[e]=function(){var t=o.call(arguments);return t.unshift(this.attributes),s[e].apply(s,t)}});var g=e.Collection=function(e,t){t||(t={}),t.url&&(this.url=t.url),t.model&&(this.model=t.model),void 0!==t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,s.extend({silent:!0},t))},m={add:!0,remove:!0,merge:!0},y={add:!0,merge:!1,remove:!1};s.extend(g.prototype,u,{model:h,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return e.sync.apply(this,arguments)},add:function(e,t){return this.set(e,s.defaults(t||{},y))},remove:function(e,t){e=s.isArray(e)?e.slice():[e],t||(t={});var n,r,i,o;for(n=0,r=e.length;n<r;n++)o=this.get(e[n]),o&&(delete this._byId[o.id],delete this._byId[o.cid],i=this.indexOf(o),this.models.splice(i,1),this.length--,t.silent||(t.index=i,o.trigger("remove",o,this,t)),this._removeReference(o));return this},set:function(e,t){t=s.defaults(t||{},m),t.parse&&(e=this.parse(e,t)),s.isArray(e)||(e=e?[e]:[]);var n,r,o,u,l,c=t.at,f=this.comparator&&null==c&&t.sort!==!1,p=s.isString(this.comparator)?this.comparator:null,h=[],d=[],v={};for(n=0,r=e.length;n<r;n++)(o=this._prepareModel(e[n],t))&&((u=this.get(o))?(t.remove&&(v[u.cid]=!0),t.merge&&(u.set(o.attributes,t),f&&!l&&u.hasChanged(p)&&(l=!0))):t.add&&(h.push(o),o.on("all",this._onModelEvent,this),this._byId[o.cid]=o,null!=o.id&&(this._byId[o.id]=o)));if(t.remove){for(n=0,r=this.length;n<r;++n)v[(o=this.models[n]).cid]||d.push(o);d.length&&this.remove(d,t)}if(h.length&&(f&&(l=!0),this.length+=h.length,null!=c?a.apply(this.models,[c,0].concat(h)):i.apply(this.models,h)),l&&this.sort({silent:!0}),t.silent)return this;for(n=0,r=h.length;n<r;n++)(o=h[n]).trigger("add",o,this,t);return l&&this.trigger("sort",this,t),this},reset:function(e,t){t||(t={});for(var n=0,r=this.models.length;n<r;n++)this._removeReference(this.models[n]);return t.previousModels=this.models,this._reset(),this.add(e,s.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,s.extend({at:this.length},t)),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,s.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(e,t){return this.models.slice(e,t)},get:function(e){if(null!=e)return this._byId[null!=e.id?e.id:e.cid||e]},at:function(e){return this.models[e]},where:function(e,t){return s.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),s.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(s.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},sortedIndex:function(e,t,n){t||(t=this.comparator);var r=s.isFunction(t)?t:function(e){return e.get(t)};return s.sortedIndex(this.models,e,r,n)},pluck:function(e){return s.invoke(this.models,"get",e)},fetch:function(e){e=e?s.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=e.success,n=this;return e.success=function(r){var i=e.reset?"reset":"set";n[i](r,e),t&&t(n,r,e),n.trigger("sync",n,r,e)},I(this,e),this.sync("read",this,e)},create:function(e,t){if(t=t?s.clone(t):{},!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var n=this,r=t.success;return t.success=function(i){t.wait&&n.add(e,t),r&&r(e,i,t)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof h)return e.collection||(e.collection=this),e;t||(t={}),t.collection=this;var n=new this.model(e,t);return n._validate(e,t)?n:(this.trigger("invalid",this,e,t),!1)},_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){("add"!==e&&"remove"!==e||n===this)&&("destroy"===e&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],null!=t.id&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments))}});var b=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];s.each(b,function(e){g.prototype[e]=function(){var t=o.call(arguments);return t.unshift(this.models),s[e].apply(s,t)}});var x=["groupBy","countBy","sortBy"];s.each(x,function(e){g.prototype[e]=function(t,n){var r=s.isFunction(t)?t:function(e){return e.get(t)};return s[e](this.models,r,n)}});var w=e.View=function(e){this.cid=s.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},T=/^(\S+)\s*(.*)$/,C=["model","collection","el","id","attributes","className","tagName","events"];s.extend(w.prototype,u,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,n){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=s.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var n=e[t];if(s.isFunction(n)||(n=this[e[t]]),n){var r=t.match(T),i=r[1],o=r[2];n=s.bind(n,this),i+=".delegateEvents"+this.cid,""===o?this.$el.on(i,n):this.$el.on(i,o,n)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(e){this.options&&(e=s.extend({},s.result(this,"options"),e)),s.extend(this,s.pick(e,C)),this.options=e},_ensureElement:function(){if(this.el)this.setElement(s.result(this,"el"),!1);else{var t=s.extend({},s.result(this,"attributes"));this.id&&(t.id=s.result(this,"id")),this.className&&(t.class=s.result(this,"className"));var n=e.$("<"+s.result(this,"tagName")+">").attr(t);this.setElement(n,!1)}}}),e.sync=function(t,n,r){var i=S[t];s.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var o={type:i,dataType:"json"};if(r.url||(o.url=s.result(n,"url")||R()),null!=r.data||!n||"create"!==t&&"update"!==t&&"patch"!==t||(o.contentType="application/json",o.data=JSON.stringify(r.attrs||n.toJSON(r))),r.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{}),r.emulateHTTP&&("PUT"===i||"DELETE"===i||"PATCH"===i)){o.type="POST",r.emulateJSON&&(o.data._method=i);var a=r.beforeSend;r.beforeSend=function(e){if(e.setRequestHeader("X-HTTP-Method-Override",i),a)return a.apply(this,arguments)}}"GET"===o.type||r.emulateJSON||(o.processData=!1),"PATCH"!==o.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(o.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var u=r.xhr=e.ajax(s.extend(o,r));return n.trigger("request",n,u,r),u};var S={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var E=e.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},k=/\((.*?)\)/g,N=/(\(\?)?:\w+/g,A=/\*\w+/g,D=/[\-{}\[\]+?.,\\\^$|#\s]/g;s.extend(E.prototype,u,{initialize:function(){},route:function(t,n,r){s.isRegExp(t)||(t=this._routeToRegExp(t)),s.isFunction(n)&&(r=n,n=""),r||(r=this[n]);var i=this;return e.history.route(t,function(o){var a=i._extractParameters(t,o);r&&r.apply(i,a),i.trigger.apply(i,["route:"+n].concat(a)),i.trigger("route",n,a),e.history.trigger("route",i,n,a)}),this},navigate:function(t,n){return e.history.navigate(t,n),this},_bindRoutes:function(){if(this.routes){this.routes=s.result(this,"routes");for(var e,t=s.keys(this.routes);null!=(e=t.pop());)this.route(e,this.routes[e])}},_routeToRegExp:function(e){return e=e.replace(D,"\\$&").replace(k,"(?:$1)?").replace(N,function(e,t){return t?e:"([^/]+)"}).replace(A,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){var n=e.exec(t).slice(1);return s.map(n,function(e){return e?decodeURIComponent(e):null})}});var _=e.History=function(){this.handlers=[],s.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},O=/^[#\/]|\s+$/g,j=/^\/+|\/+$/g,M=/msie [\w.]+/,L=/\/$/;_.started=!1,s.extend(_.prototype,u,{interval:50,getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(null==e)if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var n=this.root.replace(L,"");e.indexOf(n)||(e=e.substr(n.length))}else e=this.getHash();return e.replace(O,"")},start:function(t){if(_.started)throw new Error("Backbone.history has already been started");_.started=!0,this.options=s.extend({},{root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var n=this.getFragment(),r=document.documentMode,i=M.exec(navigator.userAgent.toLowerCase())&&(!r||r<=7);this.root=("/"+this.root+"/").replace(j,"/"),i&&this._wantsHashChange&&(this.iframe=e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(n)),this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!i?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=n;var o=this.location,a=o.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!a?(this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&a&&o.hash&&(this.fragment=this.getHash().replace(O,""),this.history.replaceState({},document.title,this.root+this.fragment+o.search)),this.options.silent?void 0:this.loadUrl())},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),_.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t!==this.fragment&&(this.iframe&&this.navigate(t),void(this.loadUrl()||this.loadUrl(this.getHash())))},loadUrl:function(e){var t=this.fragment=this.getFragment(e),n=s.any(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0});return n},navigate:function(e,t){if(!_.started)return!1;if(t&&t!==!0||(t={trigger:t}),e=this.getFragment(e||""),this.fragment!==e){this.fragment=e;var n=this.root+e;if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}t.trigger&&this.loadUrl(e)}},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else e.hash="#"+t}}),e.history=new _;var F=function(e,t){var n,r=this;n=e&&s.has(e,"constructor")?e.constructor:function(){return r.apply(this,arguments)},s.extend(n,r,t);var i=function(){this.constructor=n};return i.prototype=r.prototype,n.prototype=new i,e&&s.extend(n.prototype,e),n.__super__=r.prototype,n};h.extend=g.extend=E.extend=w.extend=_.extend=F;var R=function(){throw new Error('A "url" property or function must be specified')},I=function(e,t){var n=t.error;t.error=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}}}.call(this),function(){function e(e){this._value=e}function t(e,t,n,r){var i,o,a=Math.pow(10,t);return o=(n(e*a)/a).toFixed(t),r&&(i=new RegExp("0{1,"+r+"}$"),o=o.replace(i,"")),o}function n(e,t,n){var r;return r=t.indexOf("$")>-1?i(e,t,n):t.indexOf("%")>-1?o(e,t,n):t.indexOf(":")>-1?a(e,t):u(e._value,t,n)}function r(e,t){var n,r,i,o,a,u=t,l=["KB","MB","GB","TB","PB","EB","ZB","YB"],c=!1;if(t.indexOf(":")>-1)e._value=s(t);else if(t===g)e._value=0;else{for("."!==d[v].delimiters.decimal&&(t=t.replace(/\./g,"").replace(d[v].delimiters.decimal,".")),n=new RegExp("[^a-zA-Z]"+d[v].abbreviations.thousand+"(?:\\)|(\\"+d[v].currency.symbol+")?(?:\\))?)?$"),r=new RegExp("[^a-zA-Z]"+d[v].abbreviations.million+"(?:\\)|(\\"+d[v].currency.symbol+")?(?:\\))?)?$"),i=new RegExp("[^a-zA-Z]"+d[v].abbreviations.billion+"(?:\\)|(\\"+d[v].currency.symbol+")?(?:\\))?)?$"),o=new RegExp("[^a-zA-Z]"+d[v].abbreviations.trillion+"(?:\\)|(\\"+d[v].currency.symbol+")?(?:\\))?)?$"),a=0;a<=l.length&&!(c=t.indexOf(l[a])>-1&&Math.pow(1024,a+1));a++);e._value=(c?c:1)*(u.match(n)?Math.pow(10,3):1)*(u.match(r)?Math.pow(10,6):1)*(u.match(i)?Math.pow(10,9):1)*(u.match(o)?Math.pow(10,12):1)*(t.indexOf("%")>-1?.01:1)*((t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1)*Number(t.replace(/[^0-9\.]+/g,"")),e._value=c?Math.ceil(e._value):e._value}return e._value}function i(e,t,n){var r,i,o=t.indexOf("$"),a=t.indexOf("("),s=t.indexOf("-"),l="";return t.indexOf(" $")>-1?(l=" ",t=t.replace(" $","")):t.indexOf("$ ")>-1?(l=" ",t=t.replace("$ ","")):t=t.replace("$",""),i=u(e._value,t,n),o<=1?i.indexOf("(")>-1||i.indexOf("-")>-1?(i=i.split(""),r=1,(o<a||o<s)&&(r=0),i.splice(r,0,d[v].currency.symbol+l),i=i.join("")):i=d[v].currency.symbol+l+i:i.indexOf(")")>-1?(i=i.split(""),i.splice(-1,0,l+d[v].currency.symbol),i=i.join("")):i=i+l+d[v].currency.symbol,i}function o(e,t,n){var r,i="",o=100*e._value;return t.indexOf(" %")>-1?(i=" ",t=t.replace(" %","")):t=t.replace("%",""),r=u(o,t,n),r.indexOf(")")>-1?(r=r.split(""),r.splice(-1,0,i+"%"),r=r.join("")):r=r+i+"%",r}function a(e){var t=Math.floor(e._value/60/60),n=Math.floor((e._value-60*t*60)/60),r=Math.round(e._value-60*t*60-60*n);return t+":"+(n<10?"0"+n:n)+":"+(r<10?"0"+r:r)}function s(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}function u(e,n,r){var i,o,a,s,u,l,c=!1,f=!1,p=!1,h="",m=!1,y=!1,b=!1,x=!1,w=!1,T="",C="",S=Math.abs(e),E=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],k="",N=!1;if(0===e&&null!==g)return g;if(n.indexOf("(")>-1?(c=!0,n=n.slice(1,-1)):n.indexOf("+")>-1&&(f=!0,n=n.replace(/\+/g,"")),n.indexOf("a")>-1&&(m=n.indexOf("aK")>=0,y=n.indexOf("aM")>=0,b=n.indexOf("aB")>=0,x=n.indexOf("aT")>=0,w=m||y||b||x,n.indexOf(" a")>-1?(h=" ",n=n.replace(" a","")):n=n.replace("a",""),S>=Math.pow(10,12)&&!w||x?(h+=d[v].abbreviations.trillion,e/=Math.pow(10,12)):S<Math.pow(10,12)&&S>=Math.pow(10,9)&&!w||b?(h+=d[v].abbreviations.billion,e/=Math.pow(10,9)):S<Math.pow(10,9)&&S>=Math.pow(10,6)&&!w||y?(h+=d[v].abbreviations.million,e/=Math.pow(10,6)):(S<Math.pow(10,6)&&S>=Math.pow(10,3)&&!w||m)&&(h+=d[v].abbreviations.thousand,e/=Math.pow(10,3))),n.indexOf("b")>-1)for(n.indexOf(" b")>-1?(T=" ",n=n.replace(" b","")):n=n.replace("b",""),a=0;a<=E.length;a++)if(i=Math.pow(1024,a),o=Math.pow(1024,a+1),e>=i&&e<o){T+=E[a],i>0&&(e/=i);break}return n.indexOf("o")>-1&&(n.indexOf(" o")>-1?(C=" ",n=n.replace(" o","")):n=n.replace("o",""),C+=d[v].ordinal(e)),n.indexOf("[.]")>-1&&(p=!0,n=n.replace("[.]",".")),s=e.toString().split(".")[0],u=n.split(".")[1],l=n.indexOf(","),u?(u.indexOf("[")>-1?(u=u.replace("]",""),u=u.split("["),k=t(e,u[0].length+u[1].length,r,u[1].length)):k=t(e,u.length,r),s=k.split(".")[0],k=k.split(".")[1].length?d[v].delimiters.decimal+k.split(".")[1]:"",p&&0===Number(k.slice(1))&&(k="")):s=t(e,null,r),s.indexOf("-")>-1&&(s=s.slice(1),N=!0),l>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d[v].delimiters.thousands)),0===n.indexOf(".")&&(s=""),(c&&N?"(":"")+(!c&&N?"-":"")+(!N&&f?"+":"")+s+k+(C?C:"")+(h?h:"")+(T?T:"")+(c&&N?")":"")}function l(e,t){d[e]=t}function c(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)}function f(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,t){var n=c(e),r=c(t);return n>r?n:r},-(1/0))}var p,h="1.5.3",d={},v="en",g=null,m="0,0",y="undefined"!=typeof module&&module.exports;p=function(t){return p.isNumeral(t)?t=t.value():0===t||"undefined"==typeof t?t=0:Number(t)||(t=p.fn.unformat(t)),new e(Number(t))},p.version=h,p.isNumeral=function(t){return t instanceof e},p.language=function(e,t){if(!e)return v;if(e&&!t){if(!d[e])throw new Error("Unknown language : "+e);v=e}return!t&&d[e]||l(e,t),p},p.languageData=function(e){if(!e)return d[v];if(!d[e])throw new Error("Unknown language : "+e);return d[e]},p.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),p.zeroFormat=function(e){g="string"==typeof e?e:null},p.defaultFormat=function(e){m="string"==typeof e?e:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(e,t){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n,r,i=this.length>>>0,o=!1;for(1<arguments.length&&(r=t,o=!0),n=0;i>n;++n)this.hasOwnProperty(n)&&(o?r=e(r,this[n],n,this):(r=this[n],o=!0));if(!o)throw new TypeError("Reduce of empty array with no initial value");return r}),p.fn=e.prototype={clone:function(){return p(this)},format:function(e,t){return n(this,e?e:m,void 0!==t?t:Math.round)},unformat:function(e){return"[object Number]"===Object.prototype.toString.call(e)?e:r(this,e?e:m)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){function t(e,t,r,i){return e+n*t}var n=f.call(null,this._value,e);return this._value=[this._value,e].reduce(t,0)/n,this},subtract:function(e){function t(e,t,r,i){return e-n*t}var n=f.call(null,this._value,e);return this._value=[e].reduce(t,this._value*n)/n,this},multiply:function(e){function t(e,t,n,r){var i=f(e,t);return e*i*(t*i)/(i*i)}return this._value=[this._value,e].reduce(t,1),this},divide:function(e){function t(e,t,n,r){var i=f(e,t);return e*i/(t*i)}return this._value=[this._value,e].reduce(t),this},difference:function(e){return Math.abs(p(this._value).subtract(e).value())}},y&&(module.exports=p),"undefined"==typeof ender&&(this.numeral=p),"function"==typeof define&&define.amd&&define([],function(){return p})}.call(this),function(){function e(e){return e<10?"0"+e:e}function t(e){var t=e<0?"-":"+";return e=Math.abs(e),t+(e<10?"0"+e:e)}function n(e){return e<10?"00"+e:e<100?"0"+e:e}function r(e){var t=e<0?"-":"+";return e=Math.abs(e),t+(e<10?"000"+e:e<100?"00"+e:e<1e3?"0"+e:e)}function i(e){if("number"==typeof e)return[e,e in o.offsetToTz?o.offsetToTz[e][0]:""];var t=parseInt(e,10);return isNaN(t)?[o.tzToOffset[e],e]:(e=(t<0?1:-1)*(60*Math.floor(Math.abs(t)/100)+Math.abs(t)%100),[e,e in o.offsetToTz?o.offsetToTz[e][0]:""])}var o="undefined"!=typeof exports?exports:{};o.tzToOffset={ACDT:-630,ACST:-570,ACT:-480,ADT:180,AEDT:-660,AEST:-600,AFT:-270,AKDT:480,AKST:540,AMST:-300,AMT:-240,ART:180,AST:-240,AWDT:-540,AWST:-480,AZOST:60,AZT:-240,BDT:-480,BIOT:-360,BIT:720,BOT:240,BRT:180,BST:-60,BTT:-360,CAT:-120,CCT:-390,CDT:300,CEDT:-120,CEST:-120,CET:-60,CHAST:-765,ChST:-600,CIST:480,CKT:600,CLST:180,CLT:240,COST:240,COT:300,CST:-480,CST:360,CVT:60,CXT:-420,DFT:-60,EAST:360,EAT:-180,ECT:240,ECT:300,EDT:240,EEDT:-180,EEST:-180,EET:-120,EST:300,FJT:-720,FKST:240,GALT:360,GET:-240,GFT:180,GILT:-720,GIT:540,GMT:0,GST:120,GYT:240,HADT:540,HAST:600,HKT:-480,HMT:-300,HST:600,IRKT:-480,IRST:-210,IST:-120,IST:-330,IST:-60,JST:-540,KRAT:-420,KST:-540,LHST:-630,LINT:-840,MAGT:-660,MDT:360,MIT:570,MSD:-240,MSK:-180,MST:-390,MST:-480,MST:420,MUT:-240,NDT:150,NFT:-690,NPT:-345,NST:210,NT:210,NZST:-720,NZDT:-780,OMST:-360,PDT:420,PETT:-720,PHOT:-780,PKT:-300,PST:-480,PST:480,RET:-240,SAMT:-240,SAST:-120,SBT:-660,SCT:-240,SLT:-330,SST:-480,SST:660,TAHT:600,THA:-420,UTC:0,UYST:120,UYT:180,VET:270,VLAT:-600,WAT:-60,WEDT:-60,WEST:-60,YAKT:-540,YEKT:-300},o.offsetToTz={720:["BIT"],660:["SST"],600:["HST","CKT","HAST","TAHT"],570:["MIT"],540:["AKST","GIT","HADT"],480:["PST","AKDT","CIST"],420:["MST","PDT"],360:["CST","EAST","GALT","MDT"],300:["EST","CDT","COT","ECT"],270:["VET"],240:["ECT","AST","BOT","CLT","COST","EDT","FKST","GYT"],210:["NT","NST"],180:["BRT","ADT","ART","CLST","GFT","UYT"],150:["NDT"],120:["GST","UYST"],60:["AZOST","CVT"],0:["UTC","GMT"],"-60":["CET","BST","DFT","IST","WAT","WEDT","WEST"],"-120":["EET","CAT","CEDT","CEST","IST","SAST"],"-180":["MSK","AST","AST","EAT","EEDT","EEST"],"-210":["IRST"],"-240":["AST","AMT","AZT","GET","MSD","MUT","RET","SAMT","SCT"],"-270":["AFT"],"-300":["AMST","HMT","PKT","YEKT"],"-330":["IST","SLT"],"-345":["NPT"],"-360":["BIOT","BST","BTT","OMST"],"-390":["CCT","MST"],"-420":["CXT","KRAT","THA"],"-480":["ACT","AWST","BDT","CST","HKT","IRKT","MST","PST","SST"],"-540":["AWDT","JST","KST","YAKT"],"-570":["ACST"],"-600":["AEST","ChST","VLAT"],"-630":["ACDT","LHST"],"-660":["AEDT","MAGT","SBT"],"-690":["NFT"],"-720":["FJT","GILT","PETT","NZST"],"-765":["CHAST"],"-780":["PHOT","NZDT"],"-840":["LINT"]},o.weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o.weekdaysShort=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o.months=["January","February","March","April","May","June","July","August","September","October","November","December"],o.monthsShort=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o.intervals=[function(e){return 1!==e?"years":"year"},function(e){return 1!==e?"months":"month"},function(e){return 1!==e?"weeks":"week"},function(e){return 1!==e?"days":"day"},function(e){return 1!==e?"hours":"hour"},function(e){return 1!==e?"minutes":"minute"},function(e){return 1!==e?"seconds":"second"}],o.intervalFormats={ago:"% ago",in:"in %"},o.ordinals=function(e){switch(e%10){case 1:return e%100!==11?"st":"th";case 2:return e%100!==12?"nd":"th";case 3:return e%100!==13?"rd":"th";default:return"th"}},Date.prototype.interval=function(e){var t=this,n=t>e;n&&(t=e,e=this);var r=[e.getFullYear()-t.getFullYear(),e.getMonth()-t.getMonth(),0,e.getDate()-t.getDate(),e.getHours()-t.getHours(),e.getMinutes()-t.getMinutes(),e.getSeconds()-t.getSeconds()];r[6]<0&&(r[5]--,r[6]+=60),r[5]<0&&(r[4]--,r[5]+=60),r[4]<0&&(r[3]--,r[4]+=24),r[3]<0&&(r[1]--,r[3]+=t.getUTCDaysOfMonth()),r[1]<0&&(r[0]--,r[1]+=12),r[2]=r[3]/7|0,r[3]-=7*r[2];for(var i=[],a=0;a<r.length;a++)r[a]&&i.push(r[a]+" "+o.intervals[a](r[a]));return i},Date.prototype.format=function(a,s){var u=this.getTime();if(void 0===s)s=this.getTimezone(),c=this.getTimezoneName();else{var l=i(s);s=l[0];var c=l[1]}this.setTime(u-6e4*s);for(var f="",p=0;p<a.length;p++)switch(a.charAt(p)){case"d":f+=e(this.getUTCDate());break;case"D":f+=o.weekdaysShort[this.getUTCDay()];break;case"j":f+=this.getUTCDate();break;case"l":f+=o.weekdays[this.getUTCDay()];break;case"N":f+=this.getUTCDay()||7;break;case"S":f+=o.ordinals(this.getUTCDate());break;case"w":f+=this.getUTCDay();break;case"z":f+=this.getUTCDayOfYear();break;case"W":f+=e(this.getUTCISOWeek());break;case"F":f+=o.months[this.getUTCMonth()];break;case"m":f+=e(this.getUTCMonth()+1);break;case"M":f+=o.monthsShort[this.getUTCMonth()];break;case"n":f+=this.getUTCMonth()+1;break;case"t":f+=this.getUTCDaysOfMonth();break;case"L":f+=this.isLeapYear()?1:0;break;case"o":f+=this.getUTCISOFullYear();break;case"Y":
f+=this.getUTCFullYear();break;case"y":f+=e(this.getUTCFullYear()%100);break;case"a":f+=this.getUTCHours()>=12?"pm":"am";break;case"A":f+=this.getUTCHours()>=12?"PM":"AM";break;case"g":f+=this.getUTCHours()%12||12;break;case"G":f+=this.getUTCHours();break;case"h":f+=e(this.getUTCHours()%12||12);break;case"H":f+=e(this.getUTCHours());break;case"i":f+=e(this.getUTCMinutes());break;case"s":f+=e(this.getUTCSeconds());break;case"u":f+=n(this.getUTCMilliseconds());break;case"O":f+=r((s<0?1:-1)*(100*Math.floor(Math.abs(s)/60)+Math.abs(s)%60));break;case"P":f+=t((s<0?1:-1)*Math.floor(Math.abs(s)/60))+":"+e(Math.abs(s)%60);break;case"T":f+=c;break;case"Z":f+=60*-s;break;case"c":this.setTime(u),f+=this.format("Y-m-d\\TH:i:sP",s);break;case"r":this.setTime(u),f+=this.format("D, d M y H:i:s O",s);break;case"U":f+=Math.floor(this.getTime()/1e3);break;case"\\":void 0!==a.charAt(++p)&&(f+=a.charAt(p));break;default:f+=a.charAt(p)}return this.setTime(u),f},Date.prototype.isLeapYear=function(){var e=this.getUTCFullYear();return e%400===0||e%4===0&&e%100!==0},Date.prototype.getUTCISOWeek=function(){var e=new Date(this);return e.setUTCDate(e.getUTCDate()-(e.getUTCDay()||7)+4),Math.ceil((e.getTime()-Date.UTC(e.getUTCFullYear(),0))/864e5/7)},Date.prototype.getUTCISOFullYear=function(){var e=new Date(this);return e.setUTCDate(e.getUTCDate()-(e.getUTCDay()||7)+4),e.getUTCFullYear()},Date.prototype.getUTCDaysOfMonth=function(){var e=new Date(this);return e.setUTCDate(1),e.setUTCMonth(e.getUTCMonth()+1),e.setUTCDate(0),e.getUTCDate()},Date.prototype.getUTCDayOfYear=function(){return Math.floor((this.getTime()-Date.UTC(this.getUTCFullYear(),0))/864e5)},Date.prototype.getTimezone=function(){return"_tz"in this||this.setTimezone((new Date).getTimezoneOffset()),this._tz},Date.prototype.getTimezoneName=function(){return this.getTimezone(),this._tzName},Date.prototype.setTimezone=function(e){var t=i(e);this._tz=t[0],this._tzName=t[1]}}(),!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.passwordRules=e()}}(function(){return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){function r(e,t,n){void 0===e[t]&&(e[t]=n)}t.exports=function(e,t){function n(e){var t="Password must ";if(1===e.length)return t+e[0].part+".";if(2===e.length)return t+e[0].part+" and "+e[1].part+".";if(e.length>2){var n=e[e.length-1].part;return t+e.slice(0,-1).map(function(e){return e.part}).join(", ")+", and "+n+"."}}var i=[];return t=t||{},r(t,"minimumLength",8),r(t,"requireCapital",!0),r(t,"requireLower",!0),r(t,"requireNumber",!0),e.length<t.minimumLength&&i.push({reason:"minimumLength",message:"Password must be at least "+t.minimumLength+" letters long",part:"be at least "+t.minimumLength+" letters long"}),t.requireCapital&&!e.match(/[A-Z]/g)&&i.push({reason:"requireCapital",message:"Password must contain a capital letter",part:"contain a capital letter"}),t.requireLower&&!e.match(/[a-z]/g)&&i.push({reason:"requireLower",message:"Password must contain a lowercase letter",part:"contain a lowercase letter"}),t.requireNumber&&!e.match(/\d/g)&&i.push({reason:"requireNumber",message:"Password must contain a number",part:"contain a number"}),!!i.length&&{sentence:n(i),issues:i}}},{}]},{},[1])(1)}),function(e,t){"use strict";var n,r=e,i=r.document,o=r.navigator,a=r.setTimeout,s=r.encodeURIComponent,u=r.ActiveXObject,l=r.Number.parseInt||r.parseInt,c=r.Number.parseFloat||r.parseFloat,f=r.Number.isNaN||r.isNaN,p=r.Math.round,h=r.Date.now,d=r.Object.keys,v=r.Object.defineProperty,g=r.Object.prototype.hasOwnProperty,m=r.Array.prototype.slice,y=function(e){return m.call(e,0)},b=function(){var e,n,r,i,o,a,s=y(arguments),u=s[0]||{};for(e=1,n=s.length;e<n;e++)if(null!=(r=s[e]))for(i in r)g.call(r,i)&&(o=u[i],a=r[i],u!==a&&a!==t&&(u[i]=a));return u},x=function(e){var t,n,r,i;if("object"!=typeof e||null==e)t=e;else if("number"==typeof e.length)for(t=[],n=0,r=e.length;n<r;n++)g.call(e,n)&&(t[n]=x(e[n]));else{t={};for(i in e)g.call(e,i)&&(t[i]=x(e[i]))}return t},w=function(e,t){for(var n={},r=0,i=t.length;r<i;r++)t[r]in e&&(n[t[r]]=e[t[r]]);return n},T=function(e,t){var n={};for(var r in e)t.indexOf(r)===-1&&(n[r]=e[r]);return n},C=function(e){if(e)for(var t in e)g.call(e,t)&&delete e[t];return e},S=function(e,t){if(e&&1===e.nodeType&&e.ownerDocument&&t&&(1===t.nodeType&&t.ownerDocument&&t.ownerDocument===e.ownerDocument||9===t.nodeType&&!t.ownerDocument&&t===e.ownerDocument))do{if(e===t)return!0;e=e.parentNode}while(e);return!1},E={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},k="11.0.0",N={},A={},D=null,_={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},O=function(){var e,t,n,r,o="ZeroClipboard.swf";if(!i.currentScript||!(r=i.currentScript.src)){var a=i.getElementsByTagName("script");if("readyState"in a[0])for(e=a.length;e--&&("interactive"!==a[e].readyState||!(r=a[e].src)););else if("loading"===i.readyState)r=a[a.length-1].src;else{for(e=a.length;e--;){if(n=a[e].src,!n){t=null;break}if(n=n.split("#")[0].split("?")[0],n=n.slice(0,n.lastIndexOf("/")+1),null==t)t=n;else if(t!==n){t=null;break}}null!==t&&(r=t)}}return r&&(r=r.split("#")[0].split("?")[0],o=r.slice(0,r.lastIndexOf("/")+1)+o),o}(),j={swfPath:O,trustedDomains:e.location.host?[e.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},M=function(e){if("object"==typeof e&&null!==e)for(var t in e)if(g.call(e,t))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t))j[t]=e[t];else if(null==E.bridge)if("containerId"===t||"swfObjectId"===t){if(!K(e[t]))throw new Error("The specified `"+t+"` value is not valid as an HTML4 Element ID");j[t]=e[t]}else j[t]=e[t];{if("string"!=typeof e||!e)return x(j);if(g.call(j,e))return j[e]}},L=function(){return{browser:w(o,["userAgent","platform","appName"]),flash:T(E,["bridge"]),zeroclipboard:{version:Ce.version,config:Ce.config()}}},F=function(){return!!(E.disabled||E.outdated||E.unavailable||E.deactivated)},R=function(e,t){var n,r,i,o={};if("string"==typeof e&&e)i=e.toLowerCase().split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)g.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&Ce.on(n,e[n]);if(i&&i.length){for(n=0,r=i.length;n<r;n++)e=i[n].replace(/^on/,""),o[e]=!0,N[e]||(N[e]=[]),N[e].push(t);if(o.ready&&E.ready&&Ce.emit({type:"ready"}),o.error){var a=["disabled","outdated","unavailable","deactivated","overdue"];for(n=0,r=a.length;n<r;n++)if(E[a[n]]===!0){Ce.emit({type:"error",name:"flash-"+a[n]});break}}}return Ce},I=function(e,t){var n,r,i,o,a;if(0===arguments.length)o=d(N);else if("string"==typeof e&&e)o=e.split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)g.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&Ce.off(n,e[n]);if(o&&o.length)for(n=0,r=o.length;n<r;n++)if(e=o[n].toLowerCase().replace(/^on/,""),a=N[e],a&&a.length)if(t)for(i=a.indexOf(t);i!==-1;)a.splice(i,1),i=a.indexOf(t,i);else a.length=0;return Ce},H=function(e){var t;return t="string"==typeof e&&e?x(N[e])||null:x(N)},q=function(e){var t,n,r;if(e=G(e),e&&!te(e))return"ready"===e.type&&E.overdue===!0?Ce.emit({type:"error",name:"flash-overdue"}):(t=b({},e),ee.call(this,t),"copy"===e.type&&(r=se(A),n=r.data,D=r.formatMap),n)},P=function(){if("boolean"!=typeof E.ready&&(E.ready=!1),!Ce.isFlashUnusable()&&null===E.bridge){var e=j.flashLoadTimeout;"number"==typeof e&&e>=0&&a(function(){"boolean"!=typeof E.deactivated&&(E.deactivated=!0),E.deactivated===!0&&Ce.emit({type:"error",name:"flash-deactivated"})},e),E.overdue=!1,oe()}},$=function(){Ce.clearData(),Ce.blur(),Ce.emit("destroy"),ae(),Ce.off()},U=function(e,t){var n;if("object"==typeof e&&e&&"undefined"==typeof t)n=e,Ce.clearData();else{if("string"!=typeof e||!e)return;n={},n[e]=t}for(var r in n)"string"==typeof r&&r&&g.call(n,r)&&"string"==typeof n[r]&&n[r]&&(A[r]=n[r])},B=function(e){"undefined"==typeof e?(C(A),D=null):"string"==typeof e&&g.call(A,e)&&delete A[e]},z=function(e){return"undefined"==typeof e?x(A):"string"==typeof e&&g.call(A,e)?A[e]:void 0},W=function(e){if(e&&1===e.nodeType){n&&(ve(n,j.activeClass),n!==e&&ve(n,j.hoverClass)),n=e,de(e,j.hoverClass);var t=e.getAttribute("title")||j.title;if("string"==typeof t&&t){var r=ie(E.bridge);r&&r.setAttribute("title",t)}var i=j.forceHandCursor===!0||"pointer"===ge(e,"cursor");xe(i),be()}},Y=function(){var e=ie(E.bridge);e&&(e.removeAttribute("title"),e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.top="1px"),n&&(ve(n,j.hoverClass),ve(n,j.activeClass),n=null)},X=function(){return n||null},K=function(e){return"string"==typeof e&&e&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)},G=function(e){var t;if("string"==typeof e&&e?(t=e,e={}):"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(t=e.type),t){b(e,{type:t.toLowerCase(),target:e.target||n||null,relatedTarget:e.relatedTarget||null,currentTarget:E&&E.bridge||null,timeStamp:e.timeStamp||h()||null});var r=_[e.type];return"error"===e.type&&e.name&&r&&(r=r[e.name]),r&&(e.message=r),"ready"===e.type&&b(e,{target:null,version:E.version}),"error"===e.type&&(/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name)&&b(e,{target:null,minimumVersion:k}),/^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name)&&b(e,{version:E.version})),"copy"===e.type&&(e.clipboardData={setData:Ce.setData,clearData:Ce.clearData}),"aftercopy"===e.type&&(e=ue(e,D)),e.target&&!e.relatedTarget&&(e.relatedTarget=V(e.target)),e=J(e)}},V=function(e){var t=e&&e.getAttribute&&e.getAttribute("data-clipboard-target");return t?i.getElementById(t):null},J=function(e){if(e&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)){var n=e.target,o="_mouseover"===e.type&&e.relatedTarget?e.relatedTarget:t,a="_mouseout"===e.type&&e.relatedTarget?e.relatedTarget:t,s=ye(n),u=r.screenLeft||r.screenX||0,l=r.screenTop||r.screenY||0,c=i.body.scrollLeft+i.documentElement.scrollLeft,f=i.body.scrollTop+i.documentElement.scrollTop,p=s.left+("number"==typeof e._stageX?e._stageX:0),h=s.top+("number"==typeof e._stageY?e._stageY:0),d=p-c,v=h-f,g=u+d,m=l+v,y="number"==typeof e.movementX?e.movementX:0,x="number"==typeof e.movementY?e.movementY:0;delete e._stageX,delete e._stageY,b(e,{srcElement:n,fromElement:o,toElement:a,screenX:g,screenY:m,pageX:p,pageY:h,clientX:d,clientY:v,x:d,y:v,movementX:y,movementY:x,offsetX:0,offsetY:0,layerX:0,layerY:0})}return e},Z=function(e){var t=e&&"string"==typeof e.type&&e.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(t)},Q=function(e,t,n,r){r?a(function(){e.apply(t,n)},0):e.apply(t,n)},ee=function(e){if("object"==typeof e&&e&&e.type){var t=Z(e),n=N["*"]||[],i=N[e.type]||[],o=n.concat(i);if(o&&o.length){var a,s,u,l,c,f=this;for(a=0,s=o.length;a<s;a++)u=o[a],l=f,"string"==typeof u&&"function"==typeof r[u]&&(u=r[u]),"object"==typeof u&&u&&"function"==typeof u.handleEvent&&(l=u,u=u.handleEvent),"function"==typeof u&&(c=b({},e),Q(u,l,[c],t))}return this}},te=function(e){var t=e.target||n||null,r="swf"===e._source;delete e._source;var i=["flash-disabled","flash-outdated","flash-unavailable","flash-deactivated","flash-overdue"];switch(e.type){case"error":i.indexOf(e.name)!==-1&&b(E,{disabled:"flash-disabled"===e.name,outdated:"flash-outdated"===e.name,unavailable:"flash-unavailable"===e.name,deactivated:"flash-deactivated"===e.name,overdue:"flash-overdue"===e.name,ready:!1});break;case"ready":var o=E.deactivated===!0;b(E,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:o,ready:!o});break;case"copy":var a,s,u=e.relatedTarget;!A["text/html"]&&!A["text/plain"]&&u&&(s=u.value||u.outerHTML||u.innerHTML)&&(a=u.value||u.textContent||u.innerText)?(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",a),s!==a&&e.clipboardData.setData("text/html",s)):!A["text/plain"]&&e.target&&(a=e.target.getAttribute("data-clipboard-text"))&&(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",a));break;case"aftercopy":Ce.clearData(),t&&t!==he()&&t.focus&&t.focus();break;case"_mouseover":Ce.focus(t),j.bubbleEvents===!0&&r&&(t&&t!==e.relatedTarget&&!S(e.relatedTarget,t)&&ne(b({},e,{type:"mouseenter",bubbles:!1,cancelable:!1})),ne(b({},e,{type:"mouseover"})));break;case"_mouseout":Ce.blur(),j.bubbleEvents===!0&&r&&(t&&t!==e.relatedTarget&&!S(e.relatedTarget,t)&&ne(b({},e,{type:"mouseleave",bubbles:!1,cancelable:!1})),ne(b({},e,{type:"mouseout"})));break;case"_mousedown":de(t,j.activeClass),j.bubbleEvents===!0&&r&&ne(b({},e,{type:e.type.slice(1)}));break;case"_mouseup":ve(t,j.activeClass),j.bubbleEvents===!0&&r&&ne(b({},e,{type:e.type.slice(1)}));break;case"_click":case"_mousemove":j.bubbleEvents===!0&&r&&ne(b({},e,{type:e.type.slice(1)}))}if(/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type))return!0},ne=function(e){if(e&&"string"==typeof e.type&&e){var t,n=e.target||null,o=n&&n.ownerDocument||i,a={view:o.defaultView||r,canBubble:!0,cancelable:!0,detail:"click"===e.type?1:0,button:"number"==typeof e.which?e.which-1:"number"==typeof e.button?e.button:o.createEvent?0:1},s=b(a,e);n&&o.createEvent&&n.dispatchEvent&&(s=[s.type,s.canBubble,s.cancelable,s.view,s.detail,s.screenX,s.screenY,s.clientX,s.clientY,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.button,s.relatedTarget],t=o.createEvent("MouseEvents"),t.initMouseEvent&&(t.initMouseEvent.apply(t,s),t._source="js",n.dispatchEvent(t)))}},re=function(){var e=i.createElement("div");return e.id=j.containerId,e.className=j.containerClass,e.style.position="absolute",e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px",e.style.zIndex=""+we(j.zIndex),e},ie=function(e){for(var t=e&&e.parentNode;t&&"OBJECT"===t.nodeName&&t.parentNode;)t=t.parentNode;return t||null},oe=function(){var e,t=E.bridge,n=ie(t);if(!t){var o=pe(r.location.host,j),a="never"===o?"none":"all",s=ce(j),u=j.swfPath+le(j.swfPath,j);n=re();var l=i.createElement("div");n.appendChild(l),i.body.appendChild(n);var c=i.createElement("div"),f="activex"===E.pluginType;c.innerHTML='<object id="'+j.swfObjectId+'" name="'+j.swfObjectId+'" width="100%" height="100%" '+(f?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+u+'"')+">"+(f?'<param name="movie" value="'+u+'"/>':"")+'<param name="allowScriptAccess" value="'+o+'"/><param name="allowNetworking" value="'+a+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+s+'"/></object>',t=c.firstChild,c=null,t.ZeroClipboard=Ce,n.replaceChild(t,l)}return t||(t=i[j.swfObjectId],t&&(e=t.length)&&(t=t[e-1]),!t&&n&&(t=n.firstChild)),E.bridge=t||null,t},ae=function(){var e=E.bridge;if(e){var t=ie(e);t&&("activex"===E.pluginType&&"readyState"in e?(e.style.display="none",function n(){if(4===e.readyState){for(var r in e)"function"==typeof e[r]&&(e[r]=null);e.parentNode&&e.parentNode.removeChild(e),t.parentNode&&t.parentNode.removeChild(t)}else a(n,10)}()):(e.parentNode&&e.parentNode.removeChild(e),t.parentNode&&t.parentNode.removeChild(t))),E.ready=null,E.bridge=null,E.deactivated=null}},se=function(e){var t={},n={};if("object"==typeof e&&e){for(var r in e)if(r&&g.call(e,r)&&"string"==typeof e[r]&&e[r])switch(r.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":t.text=e[r],n.text=r;break;case"text/html":case"html":case"air:html":case"flash:html":t.html=e[r],n.html=r;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":t.rtf=e[r],n.rtf=r}return{data:t,formatMap:n}}},ue=function(e,t){if("object"!=typeof e||!e||"object"!=typeof t||!t)return e;var n={};for(var r in e)if(g.call(e,r)){if("success"!==r&&"data"!==r){n[r]=e[r];continue}n[r]={};var i=e[r];for(var o in i)o&&g.call(i,o)&&g.call(t,o)&&(n[r][t[o]]=i[o])}return n},le=function(e,t){var n=null==t||t&&t.cacheBust===!0;return n?(e.indexOf("?")===-1?"?":"&")+"noCache="+h():""},ce=function(e){var t,n,i,o,a="",u=[];if(e.trustedDomains&&("string"==typeof e.trustedDomains?o=[e.trustedDomains]:"object"==typeof e.trustedDomains&&"length"in e.trustedDomains&&(o=e.trustedDomains)),o&&o.length)for(t=0,n=o.length;t<n;t++)if(g.call(o,t)&&o[t]&&"string"==typeof o[t]){if(i=fe(o[t]),!i)continue;if("*"===i){u.length=0,u.push(i);break}u.push.apply(u,[i,"//"+i,r.location.protocol+"//"+i])}return u.length&&(a+="trustedOrigins="+s(u.join(","))),e.forceEnhancedClipboard===!0&&(a+=(a?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof e.swfObjectId&&e.swfObjectId&&(a+=(a?"&":"")+"swfObjectId="+s(e.swfObjectId)),a},fe=function(e){if(null==e||""===e)return null;if(e=e.replace(/^\s+|\s+$/g,""),""===e)return null;var t=e.indexOf("//");e=t===-1?e:e.slice(t+2);var n=e.indexOf("/");return e=n===-1?e:t===-1||0===n?null:e.slice(0,n),e&&".swf"===e.slice(-4).toLowerCase()?null:e||null},pe=function(){var e=function(e){var t,n,r,i=[];if("string"==typeof e&&(e=[e]),"object"!=typeof e||!e||"number"!=typeof e.length)return i;for(t=0,n=e.length;t<n;t++)if(g.call(e,t)&&(r=fe(e[t]))){if("*"===r){i.length=0,i.push("*");break}i.indexOf(r)===-1&&i.push(r)}return i};return function(t,n){var r=fe(n.swfPath);null===r&&(r=t);var i=e(n.trustedDomains),o=i.length;if(o>0){if(1===o&&"*"===i[0])return"always";if(i.indexOf(t)!==-1)return 1===o&&t===r?"sameDomain":"always"}return"never"}}(),he=function(){try{return i.activeElement}catch(e){return null}},de=function(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)||e.classList.add(t),e;if(t&&"string"==typeof t){var n=(t||"").split(/\s+/);if(1===e.nodeType)if(e.className){for(var r=" "+e.className+" ",i=e.className,o=0,a=n.length;o<a;o++)r.indexOf(" "+n[o]+" ")<0&&(i+=" "+n[o]);e.className=i.replace(/^\s+|\s+$/g,"")}else e.className=t}return e},ve=function(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)&&e.classList.remove(t),e;if("string"==typeof t&&t){var n=t.split(/\s+/);if(1===e.nodeType&&e.className){for(var r=(" "+e.className+" ").replace(/[\n\t]/g," "),i=0,o=n.length;i<o;i++)r=r.replace(" "+n[i]+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}}return e},ge=function(e,t){var n=r.getComputedStyle(e,null).getPropertyValue(t);return"cursor"!==t||n&&"auto"!==n||"A"!==e.nodeName?n:"pointer"},me=function(){var e,t,n,r=1;return"function"==typeof i.body.getBoundingClientRect&&(e=i.body.getBoundingClientRect(),t=e.right-e.left,n=i.body.offsetWidth,r=p(t/n*100)/100),r},ye=function(e){var t={left:0,top:0,width:0,height:0};if(e.getBoundingClientRect){var n,o,a,s=e.getBoundingClientRect();"pageXOffset"in r&&"pageYOffset"in r?(n=r.pageXOffset,o=r.pageYOffset):(a=me(),n=p(i.documentElement.scrollLeft/a),o=p(i.documentElement.scrollTop/a));var u=i.documentElement.clientLeft||0,l=i.documentElement.clientTop||0;t.left=s.left+n-u,t.top=s.top+o-l,t.width="width"in s?s.width:s.right-s.left,t.height="height"in s?s.height:s.bottom-s.top}return t},be=function(){var e;if(n&&(e=ie(E.bridge))){var t=ye(n);b(e.style,{width:t.width+"px",height:t.height+"px",top:t.top+"px",left:t.left+"px",zIndex:""+we(j.zIndex)})}},xe=function(e){E.ready===!0&&(E.bridge&&"function"==typeof E.bridge.setHandCursor?E.bridge.setHandCursor(e):E.ready=!1)},we=function(e){if(/^(?:auto|inherit)$/.test(e))return e;var t;return"number"!=typeof e||f(e)?"string"==typeof e&&(t=we(l(e,10))):t=e,"number"==typeof t?t:"auto"},Te=function(e){function t(e){var t=e.match(/[\d]+/g);return t.length=3,t.join(".")}function n(e){return!!e&&(e=e.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e)||"chrome.plugin"===e.slice(-13))}function r(e){e&&(u=!0,e.version&&(p=t(e.version)),!p&&e.description&&(p=t(e.description)),e.filename&&(f=n(e.filename)))}var i,a,s,u=!1,l=!1,f=!1,p="";if(o.plugins&&o.plugins.length)i=o.plugins["Shockwave Flash"],r(i),o.plugins["Shockwave Flash 2.0"]&&(u=!0,p="2.0.0.11");else if(o.mimeTypes&&o.mimeTypes.length)s=o.mimeTypes["application/x-shockwave-flash"],i=s&&s.enabledPlugin,r(i);else if("undefined"!=typeof e){l=!0;try{a=new e("ShockwaveFlash.ShockwaveFlash.7"),u=!0,p=t(a.GetVariable("$version"))}catch(n){try{a=new e("ShockwaveFlash.ShockwaveFlash.6"),u=!0,p="6.0.21"}catch(n){try{a=new e("ShockwaveFlash.ShockwaveFlash"),u=!0,p=t(a.GetVariable("$version"))}catch(e){l=!1}}}}E.disabled=u!==!0,E.outdated=p&&c(p)<c(k),E.version=p||"0.0.0",E.pluginType=f?"pepper":l?"activex":u?"netscape":"unknown"};Te(u);var Ce=function(){return this instanceof Ce?void("function"==typeof Ce._createClient&&Ce._createClient.apply(this,y(arguments))):new Ce};v(Ce,"version",{value:"2.1.2",writable:!1,configurable:!0,enumerable:!0}),Ce.config=function(){return M.apply(this,y(arguments))},Ce.state=function(){return L.apply(this,y(arguments))},Ce.isFlashUnusable=function(){return F.apply(this,y(arguments))},Ce.on=function(){return R.apply(this,y(arguments))},Ce.off=function(){return I.apply(this,y(arguments))},Ce.handlers=function(){return H.apply(this,y(arguments))},Ce.emit=function(){return q.apply(this,y(arguments))},Ce.create=function(){return P.apply(this,y(arguments))},Ce.destroy=function(){return $.apply(this,y(arguments))},Ce.setData=function(){return U.apply(this,y(arguments))},Ce.clearData=function(){return B.apply(this,y(arguments))},Ce.getData=function(){return z.apply(this,y(arguments))},Ce.focus=Ce.activate=function(){return W.apply(this,y(arguments))},Ce.blur=Ce.deactivate=function(){return Y.apply(this,y(arguments))},Ce.activeElement=function(){return X.apply(this,y(arguments))};var Se=0,Ee={},ke=0,Ne={},Ae={};b(j,{autoActivate:!0});var De=function(e){var t=this;t.id=""+Se++,Ee[t.id]={instance:t,elements:[],handlers:{}},e&&t.clip(e),Ce.on("*",function(e){return t.emit(e)}),Ce.on("destroy",function(){t.destroy()}),Ce.create()},_e=function(e,t){var n,r,i,o={},a=Ee[this.id]&&Ee[this.id].handlers;if("string"==typeof e&&e)i=e.toLowerCase().split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)g.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&this.on(n,e[n]);if(i&&i.length){for(n=0,r=i.length;n<r;n++)e=i[n].replace(/^on/,""),o[e]=!0,a[e]||(a[e]=[]),a[e].push(t);if(o.ready&&E.ready&&this.emit({type:"ready",client:this}),o.error){var s=["disabled","outdated","unavailable","deactivated","overdue"];for(n=0,r=s.length;n<r;n++)if(E[s[n]]){this.emit({type:"error",name:"flash-"+s[n],client:this});break}}}return this},Oe=function(e,t){var n,r,i,o,a,s=Ee[this.id]&&Ee[this.id].handlers;if(0===arguments.length)o=d(s);else if("string"==typeof e&&e)o=e.split(/\s+/);else if("object"==typeof e&&e&&"undefined"==typeof t)for(n in e)g.call(e,n)&&"string"==typeof n&&n&&"function"==typeof e[n]&&this.off(n,e[n]);if(o&&o.length)for(n=0,r=o.length;n<r;n++)if(e=o[n].toLowerCase().replace(/^on/,""),a=s[e],a&&a.length)if(t)for(i=a.indexOf(t);i!==-1;)a.splice(i,1),i=a.indexOf(t,i);else a.length=0;return this},je=function(e){var t=null,n=Ee[this.id]&&Ee[this.id].handlers;return n&&(t="string"==typeof e&&e?n[e]?n[e].slice(0):[]:x(n)),t},Me=function(e){if(He.call(this,e)){"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(e=b({},e));var t=b({},G(e),{client:this});qe.call(this,t)}return this},Le=function(e){e=Pe(e);for(var t=0;t<e.length;t++)if(g.call(e,t)&&e[t]&&1===e[t].nodeType){e[t].zcClippingId?Ne[e[t].zcClippingId].indexOf(this.id)===-1&&Ne[e[t].zcClippingId].push(this.id):(e[t].zcClippingId="zcClippingId_"+ke++,Ne[e[t].zcClippingId]=[this.id],j.autoActivate===!0&&$e(e[t]));var n=Ee[this.id]&&Ee[this.id].elements;n.indexOf(e[t])===-1&&n.push(e[t])}return this},Fe=function(e){var t=Ee[this.id];if(!t)return this;var n,r=t.elements;e="undefined"==typeof e?r.slice(0):Pe(e);for(var i=e.length;i--;)if(g.call(e,i)&&e[i]&&1===e[i].nodeType){for(n=0;(n=r.indexOf(e[i],n))!==-1;)r.splice(n,1);var o=Ne[e[i].zcClippingId];if(o){for(n=0;(n=o.indexOf(this.id,n))!==-1;)o.splice(n,1);0===o.length&&(j.autoActivate===!0&&Ue(e[i]),delete e[i].zcClippingId)}}return this},Re=function(){var e=Ee[this.id];return e&&e.elements?e.elements.slice(0):[]},Ie=function(){this.unclip(),this.off(),delete Ee[this.id]},He=function(e){if(!e||!e.type)return!1;if(e.client&&e.client!==this)return!1;var t=Ee[this.id]&&Ee[this.id].elements,n=!!t&&t.length>0,r=!e.target||n&&t.indexOf(e.target)!==-1,i=e.relatedTarget&&n&&t.indexOf(e.relatedTarget)!==-1,o=e.client&&e.client===this;return!!(r||i||o)},qe=function(e){if("object"==typeof e&&e&&e.type){var t=Z(e),n=Ee[this.id]&&Ee[this.id].handlers["*"]||[],i=Ee[this.id]&&Ee[this.id].handlers[e.type]||[],o=n.concat(i);if(o&&o.length){var a,s,u,l,c,f=this;for(a=0,s=o.length;a<s;a++)u=o[a],l=f,"string"==typeof u&&"function"==typeof r[u]&&(u=r[u]),"object"==typeof u&&u&&"function"==typeof u.handleEvent&&(l=u,u=u.handleEvent),"function"==typeof u&&(c=b({},e),Q(u,l,[c],t))}return this}},Pe=function(e){return"string"==typeof e&&(e=[]),"number"!=typeof e.length?[e]:e},$e=function(e){if(e&&1===e.nodeType){var t=function(e){(e||(e=r.event))&&("js"!==e._source&&(e.stopImmediatePropagation(),e.preventDefault()),delete e._source)},n=function(n){(n||(n=r.event))&&(t(n),Ce.focus(e))};e.addEventListener("mouseover",n,!1),e.addEventListener("mouseout",t,!1),e.addEventListener("mouseenter",t,!1),e.addEventListener("mouseleave",t,!1),e.addEventListener("mousemove",t,!1),Ae[e.zcClippingId]={mouseover:n,mouseout:t,mouseenter:t,mouseleave:t,mousemove:t}}},Ue=function(e){if(e&&1===e.nodeType){var t=Ae[e.zcClippingId];if("object"==typeof t&&t){for(var n,r,i=["move","leave","enter","out","over"],o=0,a=i.length;o<a;o++)n="mouse"+i[o],r=t[n],"function"==typeof r&&e.removeEventListener(n,r,!1);delete Ae[e.zcClippingId]}}};Ce._createClient=function(){De.apply(this,y(arguments))},Ce.prototype.on=function(){return _e.apply(this,y(arguments))},Ce.prototype.off=function(){return Oe.apply(this,y(arguments))},Ce.prototype.handlers=function(){return je.apply(this,y(arguments))},Ce.prototype.emit=function(){return Me.apply(this,y(arguments))},Ce.prototype.clip=function(){return Le.apply(this,y(arguments))},Ce.prototype.unclip=function(){return Fe.apply(this,y(arguments))},Ce.prototype.elements=function(){return Re.apply(this,y(arguments))},Ce.prototype.destroy=function(){return Ie.apply(this,y(arguments))},Ce.prototype.setText=function(e){return Ce.setData("text/plain",e),this},Ce.prototype.setHtml=function(e){return Ce.setData("text/html",e),this},Ce.prototype.setRichText=function(e){return Ce.setData("application/rtf",e),this},Ce.prototype.setData=function(){return Ce.setData.apply(this,y(arguments)),this},Ce.prototype.clearData=function(){return Ce.clearData.apply(this,y(arguments)),this},Ce.prototype.getData=function(){return Ce.getData.apply(this,y(arguments))},"function"==typeof define&&define.amd?define(function(){return Ce}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Ce:e.ZeroClipboard=Ce}(function(){return this||window}()),!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.geojsonSummary=e():"undefined"!=typeof global?global.geojsonSummary=e():"undefined"!=typeof self&&(self.geojsonSummary=e())}(function(){return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){t.exports=function(e,t){var n=e.features||e;t=t||{};for(var r=t.types||{Point:[" point"," points"],Polygon:[" polygon"," polygons"],LineString:[" line"," lines"]},i={Point:0,Polygon:0,LineString:0},o=0;o<n.length;o++)n[o].geometry&&n[o].geometry.type&&"number"==typeof i[n[o].geometry.type]&&i[n[o].geometry.type]++;var a=[];for(var s in i)i[s]&&a.push(i[s]+(i[s]>1?r[s][1]:r[s][0]));var u="";switch(a.length){case 3:u=a[0]+", "+a[1]+", and "+a[2];break;case 2:u=a[0]+" and "+a[1];break;case 1:u=a[0]}return{parts:a,sentence:u}}},{}]},{},[1])(1)}),function(e,t){"use strict";function n(e,t){var n,r;t=t||{},e="raven"+e.substr(0,1).toUpperCase()+e.substr(1),document.createEvent?(n=document.createEvent("HTMLEvents"),n.initEvent(e,!0,!0)):(n=document.createEventObject(),n.eventType=e);for(r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);if(document.createEvent)document.dispatchEvent(n);else try{document.fireEvent("on"+n.eventType.toLowerCase(),n)}catch(e){}}function r(e){this.name="RavenConfigError",this.message=e}function i(e){var t=I.exec(e),n={},i=7;try{for(;i--;)n[R[i]]=t[i]||""}catch(t){throw new r("Invalid DSN: "+e)}if(n.pass)throw new r("Do not specify your private key in the DSN!");return n}function o(e){return"undefined"==typeof e}function a(e){return"function"==typeof e}function s(e){return"string"==typeof e}function u(e){for(var t in e)return!1;return!0}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){var n,r;if(o(e.length))for(n in e)e.hasOwnProperty(n)&&t.call(null,n,e[n]);else if(r=e.length)for(n=0;n<r;n++)t.call(null,n,e[n])}function f(){if(H)return H;var e=["sentry_version=4","sentry_client=raven-js/"+F.VERSION];return _&&e.push("sentry_key="+_),H="?"+e.join("&")}function p(e,t){var r=[];e.stack&&e.stack.length&&c(e.stack,function(e,t){var n=h(t);n&&r.push(n)}),n("handle",{stackInfo:e,options:t}),v(e.name,e.message,e.url,e.lineno,r,t)}function h(e){if(e.url){var t,n={filename:e.url,lineno:e.line,colno:e.column,function:e.func||"?"},r=d(e);if(r){var i=["pre_context","context_line","post_context"];for(t=3;t--;)n[i[t]]=r[t]}return n.in_app=!(!L.includePaths.test(n.filename)||/(Raven|TraceKit)\./.test(n.function)||/raven\.(min\.)js$/.test(n.filename)),n}}function d(e){if(e.context&&L.fetchContext){for(var t=e.context,n=~~(t.length/2),r=t.length,i=!1;r--;)if(t[r].length>300){i=!0;break}if(i){if(o(e.column))return;return[[],t[n].substr(e.column,50),[]]}return[t.slice(0,n),t[n],t.slice(n+1)]}}function v(e,t,n,r,i,o){var a,s;t&&(L.ignoreErrors.test(t)||(i&&i.length?(n=i[0].filename||n,i.reverse(),a={frames:i}):n&&(a={frames:[{filename:n,lineno:r}]}),L.ignoreUrls&&L.ignoreUrls.test(n)||L.whitelistUrls&&!L.whitelistUrls.test(n)||(s=r?t+" at "+r:t,y(g({exception:{type:e,value:t},stacktrace:a,culprit:n,message:s},o)))))}function g(e,t){return t?(c(t,function(t,n){e[t]=n}),e):e}function m(){var e={url:document.location.href,headers:{"User-Agent":navigator.userAgent}};return document.referrer&&(e.headers.Referer=document.referrer),e}function y(e){x()&&(e=g({project:O,logger:L.logger,site:L.site,platform:"javascript",request:m()},e),e.tags=g(L.tags,e.tags),e.extra=g(L.extra,e.extra),u(e.tags)&&delete e.tags,u(e.extra)&&delete e.extra,D&&(e.user=D),a(L.dataCallback)&&(e=L.dataCallback(e)),
a(L.shouldSendCallback)&&!L.shouldSendCallback(e)||(N=e.event_id||(e.event_id=T()),b(e)))}function b(e){var t=new Image,r=A+f()+"&sentry_data="+encodeURIComponent(JSON.stringify(e));t.onload=function(){n("success",{data:e,src:r})},t.onerror=t.onabort=function(){n("failure",{data:e,src:r})},t.src=r}function x(){return!!M&&(!!A||(e.console&&console.error&&console.error("Error: Raven has not been configured."),!1))}function w(e){for(var t,n=[],r=0,i=e.length;r<i;r++)t=e[r],s(t)?n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):t&&t.source&&n.push(t.source);return new RegExp(n.join("|"),"i")}function T(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)})}var C={remoteFetching:!1,collectWindowErrors:!0,linesOfContext:7},S=[].slice,E="?";C.wrap=function(e){function t(){try{return e.apply(this,arguments)}catch(e){throw C.report(e),e}}return t},C.report=function(){function n(e){s(),d.push(e)}function r(e){for(var t=d.length-1;t>=0;--t)d[t]===e&&d.splice(t,1)}function i(){u(),d=[]}function o(e,t){var n=null;if(!t||C.collectWindowErrors){for(var r in d)if(l(d,r))try{d[r].apply(null,[e].concat(S.call(arguments,2)))}catch(e){n=e}if(n)throw n}}function a(e,t,n,r,i){var a=null;if(m)C.computeStackTrace.augmentStackTraceWithInitialElement(m,t,n,e),c();else if(i)a=C.computeStackTrace(i),o(a,!0);else{var s={url:t,line:n,column:r};s.func=C.computeStackTrace.guessFunctionName(s.url,s.line),s.context=C.computeStackTrace.gatherContext(s.url,s.line),a={message:e,url:document.location.href,stack:[s]},o(a,!0)}return!!p&&p.apply(this,arguments)}function s(){h||(p=e.onerror,e.onerror=a,h=!0)}function u(){h&&(e.onerror=p,h=!1,p=t)}function c(){var e=m,t=v;v=null,m=null,g=null,o.apply(null,[e,!1].concat(t))}function f(t,n){var r=S.call(arguments,1);if(m){if(g===t)return;c()}var i=C.computeStackTrace(t);if(m=i,g=t,v=r,e.setTimeout(function(){g===t&&c()},i.incomplete?2e3:0),n!==!1)throw t}var p,h,d=[],v=null,g=null,m=null;return f.subscribe=n,f.unsubscribe=r,f.uninstall=i,f}(),C.computeStackTrace=function(){function t(t){if(!C.remoteFetching)return"";try{var n=function(){try{return new e.XMLHttpRequest}catch(t){return new e.ActiveXObject("Microsoft.XMLHTTP")}},r=n();return r.open("GET",t,!1),r.send(""),r.responseText}catch(e){return""}}function n(e){if(!s(e))return[];if(!l(w,e)){var n="";e.indexOf(document.domain)!==-1&&(n=t(e)),w[e]=n?n.split("\n"):[]}return w[e]}function r(e,t){var r,i=/function ([^(]*)\(([^)]*)\)/,a=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,s="",u=10,l=n(e);if(!l.length)return E;for(var c=0;c<u;++c)if(s=l[t-c]+s,!o(s)){if(r=a.exec(s))return r[1];if(r=i.exec(s))return r[1]}return E}function i(e,t){var r=n(e);if(!r.length)return null;var i=[],a=Math.floor(C.linesOfContext/2),s=a+C.linesOfContext%2,u=Math.max(0,t-a-1),l=Math.min(r.length,t+s-1);t-=1;for(var c=u;c<l;++c)o(r[c])||i.push(r[c]);return i.length>0?i:null}function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function u(e){return a(e).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function c(e,t){for(var r,i,o=0,a=t.length;o<a;++o)if((r=n(t[o])).length&&(r=r.join("\n"),i=e.exec(r)))return{url:t[o],line:r.substring(0,i.index).split("\n").length,column:i.index-r.lastIndexOf("\n",i.index)-1};return null}function f(e,t,r){var i,o=n(t),s=new RegExp("\\b"+a(e)+"\\b");return r-=1,o&&o.length>r&&(i=s.exec(o[r]))?i.index:null}function p(t){for(var n,r,i,o,s=[e.location.href],l=document.getElementsByTagName("script"),f=""+t,p=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,h=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,d=0;d<l.length;++d){var v=l[d];v.src&&s.push(v.src)}if(i=p.exec(f)){var g=i[1]?"\\s+"+i[1]:"",m=i[2].split(",").join("\\s*,\\s*");n=a(i[3]).replace(/;$/,";?"),r=new RegExp("function"+g+"\\s*\\(\\s*"+m+"\\s*\\)\\s*{\\s*"+n+"\\s*}")}else r=new RegExp(a(f).replace(/\s+/g,"\\s+"));if(o=c(r,s))return o;if(i=h.exec(f)){var y=i[1];if(n=u(i[2]),r=new RegExp("on"+y+"=[\\'\"]\\s*"+n+"\\s*[\\'\"]","i"),o=c(r,s[0]))return o;if(r=new RegExp(n),o=c(r,s))return o}return null}function h(e){if(!e.stack)return null;for(var t,n,a=/^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|https?):.*?):(\d+)(?::(\d+))?\)?\s*$/i,s=/^\s*(\S*)(?:\((.*?)\))?@((?:file|https?).*?):(\d+)(?::(\d+))?\s*$/i,u=e.stack.split("\n"),l=[],c=/^(.*) is undefined$/.exec(e.message),p=0,h=u.length;p<h;++p){if(t=s.exec(u[p]))n={url:t[3],func:t[1]||E,args:t[2]?t[2].split(","):"",line:+t[4],column:t[5]?+t[5]:null};else{if(!(t=a.exec(u[p])))continue;n={url:t[2],func:t[1]||E,line:+t[3],column:t[4]?+t[4]:null}}!n.func&&n.line&&(n.func=r(n.url,n.line)),n.line&&(n.context=i(n.url,n.line)),l.push(n)}return l.length?(l[0].line&&!l[0].column&&c?l[0].column=f(c[1],l[0].url,l[0].line):l[0].column||o(e.columnNumber)||(l[0].column=e.columnNumber+1),{name:e.name,message:e.message,url:document.location.href,stack:l}):null}function d(e){for(var t,n=e.stacktrace,o=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,a=n.split("\n"),s=[],u=0,l=a.length;u<l;u+=2)if(t=o.exec(a[u])){var c={line:+t[1],column:+t[2],func:t[3]||t[4],args:t[5]?t[5].split(","):[],url:t[6]};if(!c.func&&c.line&&(c.func=r(c.url,c.line)),c.line)try{c.context=i(c.url,c.line)}catch(e){}c.context||(c.context=[a[u+1]]),s.push(c)}return s.length?{name:e.name,message:e.message,url:document.location.href,stack:s}:null}function v(t){var o=t.message.split("\n");if(o.length<4)return null;var a,s,f,p,h=/^\s*Line (\d+) of linked script ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,d=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,v=/^\s*Line (\d+) of function script\s*$/i,g=[],m=document.getElementsByTagName("script"),y=[];for(s in m)l(m,s)&&!m[s].src&&y.push(m[s]);for(s=2,f=o.length;s<f;s+=2){var b=null;if(a=h.exec(o[s]))b={url:a[2],func:a[3],line:+a[1]};else if(a=d.exec(o[s])){b={url:a[3],func:a[4]};var x=+a[1],w=y[a[2]-1];if(w&&(p=n(b.url))){p=p.join("\n");var T=p.indexOf(w.innerText);T>=0&&(b.line=x+p.substring(0,T).split("\n").length)}}else if(a=v.exec(o[s])){var C=e.location.href.replace(/#.*$/,""),S=a[1],E=new RegExp(u(o[s+1]));p=c(E,[C]),b={url:C,line:p?p.line:S,func:""}}if(b){b.func||(b.func=r(b.url,b.line));var k=i(b.url,b.line),N=k?k[Math.floor(k.length/2)]:null;k&&N.replace(/^\s*/,"")===o[s+1].replace(/^\s*/,"")?b.context=k:b.context=[o[s+1]],g.push(b)}}return g.length?{name:t.name,message:o[0],url:document.location.href,stack:g}:null}function g(e,t,n,o){var a={url:t,line:n};if(a.url&&a.line){e.incomplete=!1,a.func||(a.func=r(a.url,a.line)),a.context||(a.context=i(a.url,a.line));var s=/ '([^']+)' /.exec(o);if(s&&(a.column=f(s[1],a.url,a.line)),e.stack.length>0&&e.stack[0].url===a.url){if(e.stack[0].line===a.line)return!1;if(!e.stack[0].line&&e.stack[0].func===a.func)return e.stack[0].line=a.line,e.stack[0].context=a.context,!1}return e.stack.unshift(a),e.partial=!0,!0}return e.incomplete=!0,!1}function m(e,t){for(var n,i,o,a=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,s=[],u={},l=!1,c=m.caller;c&&!l;c=c.caller)if(c!==y&&c!==C.report){if(i={url:null,func:E,line:null,column:null},c.name?i.func=c.name:(n=a.exec(c.toString()))&&(i.func=n[1]),o=p(c)){i.url=o.url,i.line=o.line,i.func===E&&(i.func=r(i.url,i.line));var h=/ '([^']+)' /.exec(e.message||e.description);h&&(i.column=f(h[1],o.url,o.line))}u[""+c]?l=!0:u[""+c]=!0,s.push(i)}t&&s.splice(0,t);var d={name:e.name,message:e.message,url:document.location.href,stack:s};return g(d,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),d}function y(e,t){var n=null;t=null==t?0:+t;try{if(n=d(e))return n}catch(e){if(x)throw e}try{if(n=h(e))return n}catch(e){if(x)throw e}try{if(n=v(e))return n}catch(e){if(x)throw e}try{if(n=m(e,t+1))return n}catch(e){if(x)throw e}return{}}function b(e){e=(null==e?0:+e)+1;try{throw new Error}catch(t){return y(t,e+1)}}var x=!1,w={};return y.augmentStackTraceWithInitialElement=g,y.guessFunctionName=r,y.gatherContext=i,y.ofCaller=b,y}();var k,N,A,D,_,O,j=e.Raven,M=!(!e.JSON||!e.JSON.stringify),L={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],collectWindowErrors:!0,tags:{},extra:{}},F={VERSION:"1.1.11",TraceKit:C,afterLoad:function(){var t=e.RavenConfig;t&&this.config(t.dsn,t.config).install()},noConflict:function(){return e.Raven=j,F},config:function(e,t){if(!e)return F;var n=i(e),r=n.path.lastIndexOf("/"),o=n.path.substr(1,r);return t&&c(t,function(e,t){L[e]=t}),L.ignoreErrors.push("Script error."),L.ignoreErrors.push("Script error"),L.ignoreErrors=w(L.ignoreErrors),L.ignoreUrls=!!L.ignoreUrls.length&&w(L.ignoreUrls),L.whitelistUrls=!!L.whitelistUrls.length&&w(L.whitelistUrls),L.includePaths=w(L.includePaths),_=n.user,O=n.path.substr(r+1),A="//"+n.host+(n.port?":"+n.port:"")+"/"+o+"api/"+O+"/store/",n.protocol&&(A=n.protocol+":"+A),L.fetchContext&&(C.remoteFetching=!0),L.linesOfContext&&(C.linesOfContext=L.linesOfContext),C.collectWindowErrors=!!L.collectWindowErrors,F},install:function(){return x()&&C.report.subscribe(p),F},context:function(e,n,r){return a(e)&&(r=n||[],n=e,e=t),F.wrap(e,n).apply(this,r)},wrap:function(e,n){function r(){for(var t=[],r=arguments.length,i=!e||e&&e.deep!==!1;r--;)t[r]=i?F.wrap(e,arguments[r]):arguments[r];try{return n.apply(this,t)}catch(t){throw F.captureException(t,e),t}}if(o(n)&&!a(e))return e;if(a(e)&&(n=e,e=t),!a(n))return n;if(n.__raven__)return n;for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i]);return r.__raven__=!0,r},uninstall:function(){return C.report.uninstall(),F},captureException:function(e,t){if(s(e))return F.captureMessage(e,t);k=e;try{C.report(e,t)}catch(t){if(e!==t)throw t}return F},captureMessage:function(e,t){return y(g({message:e},t)),F},setUser:function(e){return D=e,F},lastException:function(){return k},lastEventId:function(){return N}},R="source protocol user pass host port path".split(" "),I=/^(?:(\w+):)?\/\/(\w+)(:\w+)?@([\w\.-]+)(?::(\d+))?(\/.*)/;r.prototype=new Error,r.prototype.constructor=r;var H;F.afterLoad(),e.Raven=F,"function"==typeof define&&define.amd&&define("raven",[],function(){return F})}(window),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.hoverintent=e()}}(function(){return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){!function(n){"use strict";var r=e("xtend"),i=function(e,t,n){function i(e,t){return v&&(v=clearTimeout(v)),d=0,n.call(e,t)}function o(e){l=e.clientX,c=e.clientY}function a(e,n){return v&&(v=clearTimeout(v)),Math.abs(f-l)+Math.abs(p-c)<g.sensitivity?(d=1,t.call(e,n)):(f=l,p=c,void(v=setTimeout(function(){a(e,n)},g.interval)))}function s(t){return v&&(v=clearTimeout(v)),e.removeEventListener("mousemove",o,!1),1!==d&&(f=t.clientX,p=t.clientY,e.addEventListener("mousemove",o,!1),v=setTimeout(function(){a(e,t)},g.interval)),this}function u(t){return v&&(v=clearTimeout(v)),e.removeEventListener("mousemove",o,!1),1===d&&(v=setTimeout(function(){i(e,t)},g.timeout)),this}var l,c,f,p,h={},d=0,v=0,g={sensitivity:7,interval:100,timeout:0};return h.options=function(e){return g=r({},g,e),h},h.remove=function(){e&&(e.removeEventListener("mouseover",s,!1),e.removeEventListener("mouseout",u,!1))},e&&(e.addEventListener("mouseover",s,!1),e.addEventListener("mouseout",u,!1)),h};n.hoverintent=i,"undefined"!=typeof t&&t.exports&&(t.exports=i)}(this)},{xtend:2}],2:[function(e,t,n){function r(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)i.call(n,r)&&(e[r]=n[r])}return e}t.exports=r;var i=Object.prototype.hasOwnProperty},{}]},{},[1])(1)}),function(e){function t(e){this.size=0,this.limit=e,this._keymap={}}var n=function(e){var t,n,r={};if(""===e)return{};for(t=0;t<e.length;t+=1)n=e[t].split("="),2===n.length&&(r[n[0]]=decodeURIComponent(n[1].replace(/\+/g," ")));return r};e.hashParams=function(){return n(window.location.hash.substr(1).split("&"))};var r=0;window.Swiftype=window.Swiftype||{},Swiftype.root_url=Swiftype.root_url||"https://api.swiftype.com",Swiftype.pingUrl=function(e,t){var n=setTimeout(t,350),r=new Image;return r.onload=r.onerror=function(){clearTimeout(n),t()},r.src=e,!1},Swiftype.pingAutoSelection=function(t,n,r,i){var o={t:(new Date).getTime(),engine_key:t,doc_id:n,prefix:r},a=Swiftype.root_url+"/api/v1/public/analytics/pas?"+e.param(o);Swiftype.pingUrl(a,i)},Swiftype.findSelectedSection=function(){function t(e){var t=e.replace(/\s+/g,"");return t=t.toLowerCase()}var n=e.hashParams().sts;n&&(n=t(n),e("h1, h2, h3, h4, h5, h6").each(function(r){if($this=e(this),t($this.text()).indexOf(n)>=0)return this.scrollIntoView(!0),!1}))},Swiftype.htmlEscape=Swiftype.htmlEscape||function(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},e.fn.swiftype=function(n){Swiftype.findSelectedSection();var n=e.extend({},e.fn.swiftype.defaults,n);return this.each(function(){var o=e(this),a=e.meta?e.extend({},n,o.data()):n;o.attr("autocomplete","off"),o.data("swiftype-config-autocomplete",a),o.submitted=!1,o.cache=new t(10),o.emptyQueries=[],o.isEmpty=function(t){return e.inArray(i(t),this.emptyQueries)>=0},o.addEmpty=function(e){o.emptyQueries.unshift(i(e))};var u=e('<div class="swiftype-widget" />'),l=e("<nav />").addClass("v fill-white keyline-all round col12 pad1y quiet-scroll ").appendTo(u).hide();u.appendTo(a.autocompleteContainingElement),o.data("swiftype-list",l),o.abortCurrent=function(){o.currentRequest&&o.currentRequest.abort()},o.showList=function(){p(a.disableAutocomplete)===!1&&l.show()},o.hideList=function(e){e?l.hide():setTimeout(function(){l.hide()},10)},o.focused=function(){return o.is(":focus")},o.submitting=function(){o.submitted=!0},o.listResults=function(){return e("a",l)},o.activeResult=function(){return o.listResults().filter("."+a.activeItemClass).first()},o.prevResult=function(){var e=o.listResults(),t=e.index(o.activeResult()),n=t-1,r=e.eq(n);o.listResults().removeClass(a.activeItemClass),n>=0&&r.addClass(a.activeItemClass)},o.nextResult=function(){var e=o.listResults(),t=e.index(o.activeResult()),n=t+1,r=e.eq(n);o.listResults().removeClass(a.activeItemClass),n>=0&&r.addClass(a.activeItemClass)},o.selectedCallback=function(e){return function(){var t=o.val(),n=function(){a.onComplete(e,t)};Swiftype.pingAutoSelection(a.engineKey,e.id,t,n)}},o.registerResult=function(e,t){e.data("swiftype-item",t),e.click(o.selectedCallback(t)).mouseover(function(){o.listResults().removeClass(a.activeItemClass),e.addClass(a.activeItemClass)})},o.getContext=function(){return{config:a,list:l,registerResult:o.registerResult}};var c,f=!1;o.lastValue="",o.keyup(function(e){return f?void(f=!1):void(e.which>36&&e.which<41||16==e.which||(a.typingDelay>0?(clearTimeout(c),c=setTimeout(function(){s(o)},a.typingDelay)):s(o)))}),o.keydown(function(e){var t=o.activeResult();switch(e.which){case 13:0!==t.length&&l.is(":visible")?(e.preventDefault(),o.selectedCallback(t.data("swiftype-item"))()):o.currentRequest&&o.submitting(),o.hideList(),f=!0;break;case 38:e.preventDefault(),0===t.length?o.listResults().last().addClass(a.activeItemClass):o.prevResult();break;case 40:e.preventDefault(),0===t.length?o.listResults().first().addClass(a.activeItemClass):t!=o.listResults().last()&&o.nextResult();break;case 27:o.hideList(),f=!0;break;default:o.submitted=!1}}),o.keypress(function(e){13==e.which&&o.activeResult().length>0&&e.preventDefault()});var h=!1,d=!1;e(document).bind("mousedown.swiftype"+ ++r,function(){h=!0}),e(document).bind("mouseup.swiftype"+r,function(){h=!1,d&&(d=!1,o.hideList())}),o.blur(function(){h?d=!0:o.hideList()}),o.focus(function(){setTimeout(function(){o.select()},10),o.listResults().filter(":not(."+a.noResultsClass+")").length>0&&o.showList()})})};var i=function(t){return e.trim(t).toLowerCase()},o=function(t,n){t.parent().addClass("spinner"),t.abortCurrent();var r={},o=t.data("swiftype-config-autocomplete");r.q=n,r.engine_key=o.engineKey,r.search_fields=p(o.searchFields),r.fetch_fields=p(o.fetchFields),r.filters=p(o.filters),r.document_types=p(o.documentTypes),r.functional_boosts=p(o.functionalBoosts),r.sort_field=p(o.sortField),r.sort_direction=p(o.sortDirection),r.per_page=o.resultLimit;var a=Swiftype.root_url+"/api/v1/public/engines/suggest.json";t.currentRequest=e.ajax({type:"GET",dataType:"jsonp",url:a,data:r}).success(function(e){var r=i(n);return t.parent().removeClass("spinner"),e.record_count>0?(t.cache.put(r,e.records),void u(t,e.records,n)):(t.addEmpty(r),t.data("swiftype-list").empty(),void t.hideList())})},a=function(e,t){var n=i(t);if(e.isEmpty(n))return e.data("swiftype-list").empty(),void e.hideList();var r=e.cache.get(n);r?u(e,r,t):o(e,t)},s=function(t){var n=t.val();if(n!==t.lastValue)return t.lastValue=n,""===e.trim(n)?(t.data("swiftype-list").empty(),void t.hideList()):void("undefined"!=typeof t.data("swiftype-config-autocomplete").engineKey&&a(t,n))},u=function(e,t,n){var r=e.data("swiftype-list"),i=e.data("swiftype-config-autocomplete");r.empty(),e.hideList(!0),i.resultRenderFunction(e.getContext(),t);var o=e.listResults().length;(o>0&&e.focused()||void 0!==i.noResultsMessage)&&(e.submitted?e.submitted=!1:e.showList())},l=function(t,n){var r=t.list,i=t.config;e.each(n,function(n,o){e.each(o,function(o,a){t.registerResult(e(i.renderFunction(n,a)).appendTo(r),a)})})},c=function(e,t){return'<a href="'+t.url+'" class="col12 pad1x small sub quiet truncate">'+Swiftype.htmlEscape(t.title)+"</a>"},f=function(e,t){window.location=e.url},p=function(e){if(void 0!==e){var t=e;return"function"==typeof t&&(t=t.call()),t}};t.prototype.put=function(e,t){var n={key:e,value:t};return this._keymap[e]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size===this.limit?this.shift():void this.size++},t.prototype.shift=function(){var e=this.head;return e&&(this.head.newer?(this.head=this.head.newer,this.head.older=void 0):this.head=void 0,e.newer=e.older=void 0,delete this._keymap[e.key]),e},t.prototype.get=function(e,t){var n=this._keymap[e];if(void 0!==n)return n===this.tail?n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,t?n:n.value)},t.prototype.remove=function(e){var t=this._keymap[e];if(t)return delete this._keymap[t.key],t.newer&&t.older?(t.older.newer=t.newer,t.newer.older=t.older):t.newer?(t.newer.older=void 0,this.head=t.newer):t.older?(t.older.newer=void 0,this.tail=t.older):this.head=this.tail=void 0,this.size--,t.value},t.prototype.clear=function(){this.head=this.tail=void 0,this.size=0,this._keymap={}},"function"==typeof Object.keys?t.prototype.keys=function(){return Object.keys(this._keymap)}:t.prototype.keys=function(){var e=[];for(var t in this._keymap)e.push(t);return e},e.fn.swiftype.defaults={activeItemClass:"active",documentTypes:void 0,filters:void 0,engineKey:"ByE7bq3YmMASdFvY7L4h",searchFields:void 0,functionalBoosts:void 0,sortField:void 0,sortDirection:void 0,fetchFields:void 0,noResultsClass:"noResults",noResultsMessage:void 0,onComplete:f,resultRenderFunction:l,renderFunction:c,resultLimit:void 0,typingDelay:80,disableAutocomplete:!1,autocompleteContainingElement:"body"}}(jQuery);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App = require('./src/lib.app');
var Nav = require('./src/view.nav');
var Modal = require('./src/view.modal');
window.Views = {};

// Generic linker for doc headings.
// @TODO this only really works for maruku-using subsites and should
// eventually be phased out.

$(function() {
    Views.modal = Views.modal || new Modal({ el: $('#modal-content') });
    Views.nav = Views.nav || new Nav({ el: $('.masthead') });
    $('.doc h1[id], .doc h2[id], .doc h3[id], .doc h4[id]')
        .attr('title', 'Link to this section')
        .click(function(ev) {
            window.location.hash = $(ev.currentTarget).attr('id');
        });

    // Hiring smart people
    if (typeof console !== 'undefined' && typeof console.log === 'function' && !window.test) {
        console.log('\r\n%c                     *      .--.\r\n%c                           \/ \/  `\r\n%c          +               | |\r\n%c                 \'         \\ \\__,\r\n%c             *          +   \'--\'  *\r\n%c                 +   \/\\\r\n%c    +              .\'  \'.   *\r\n%c           *      \/======\\      +\r\n%c                 ;:.  _   ;\r\n%c                 |:. (_)  |\r\n%c                 |:.  _   |\r\n%c       +         |:. (_)  |          *\r\n%c                 ;:.      ;\r\n%c               .\' \\:.    \/ `.\r\n%c              \/ .-\'\':._.\'`-. \\\r\n%c              |\/    \/||\\    \\|\r\n%c            _..--\"\"\"````\"\"\"--.._\r\n%c      _.-\'``                    ``\'-._\r\n%c    -\'         %cHello, explorer%c        \'-\r\n%c' +
        '\n       Curious? http://mapbox.com/jobs',
        'color:#D0E3F1','color:#D0E3F1','color:#C0DAEC','color:#C0DAEC','color:#B0D1E8','color:#B0D1E8','color:#A1C7E3','color:#A1C7E3','color:#91BEDE','color:#91BEDE','color:#81B5D9','color:#81B5D9','color:#72ABD5','color:#72ABD5','color:#62A2D0','color:#62A2D0','color:#5299CB','color:#5299CB','color:#4390C7','color:#4390C7', 'color:#4390C7', 'color: #000000');
    }

    $('form#newsletter').submit(function(ev) {
        var form = App.form(ev.currentTarget);

        if (!form.email || !App.validateEmail(form.email)) {
            Views.modal.show('err', new Error('Please provide a valid email address'));
            return false;
        }

        if (!App.user) {
            analytics.identify( {
                email: form.email
            }, track);
            _cio.identify({
               id: form.email,
               email: form.email
            }, ciotrack);


        } else {
            track();
        }

        function track() {
            analytics.track('Subscribed to Newsletter');
            Views.modal.show('confirm', 'Thanks! We\'ll send you occasional email updates.');
        }
        function ciotrack() {
            _cio.track('Subscribed to Newsletter')
          }

        return false;
    });

});

ZeroClipboard.config({ swfPath: '/js/ZeroClipboard.swf', forceHandCursor: true });

Raven.config('https://581913e6cd0845d785f5b551a4986b61@app.getsentry.com/11290', {
    whitelistUrls: ['mapbox.com'],
    ignoreErrors: [
        /parentNode/
    ]
}).install();

function personalize() {
    var mapid = App.storage('map.id'),
        exampleid = 'mapbox.streets';

    if (mapid && App.user && (mapid || '').indexOf(App.user.id) === 0) {
        exampleid = mapid;
    }

    // Replace username.mapid with the current one.
    $('pre').each(function() {
        $(this).html($(this).html().replace(/username.mapid/g, exampleid));
    });
}

App.onUserLoad(personalize);

},{"./src/lib.app":3,"./src/view.modal":4,"./src/view.nav":5}],2:[function(require,module,exports){
function corslite(url, callback, cors) {
    var sent = false;

    if (typeof window.XMLHttpRequest === 'undefined') {
        return callback(Error('Browser not supported'));
    }

    if (typeof cors === 'undefined') {
        var m = url.match(/^\s*https?:\/\/[^\/]*/);
        cors = m && (m[0] !== location.protocol + '//' + location.domain +
                (location.port ? ':' + location.port : ''));
    }

    var x = new window.XMLHttpRequest();

    function isSuccessful(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    if (cors && !('withCredentials' in x)) {
        // IE8-9
        x = new window.XDomainRequest();

        // Ensure callback is never called synchronously, i.e., before
        // x.send() returns (this has been observed in the wild).
        // See https://github.com/mapbox/mapbox.js/issues/472
        var original = callback;
        callback = function() {
            if (sent) {
                original.apply(this, arguments);
            } else {
                var that = this, args = arguments;
                setTimeout(function() {
                    original.apply(that, args);
                }, 0);
            }
        }
    }

    function loaded() {
        if (
            // XDomainRequest
            x.status === undefined ||
            // modern browsers
            isSuccessful(x.status)) callback.call(x, null, x);
        else callback.call(x, x, null);
    }

    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
    if ('onload' in x) {
        x.onload = loaded;
    } else {
        x.onreadystatechange = function readystate() {
            if (x.readyState === 4) {
                loaded();
            }
        };
    }

    // Call the callback with the XMLHttpRequest object as an error and prevent
    // it from ever being called again by reassigning it to `noop`
    x.onerror = function error(evt) {
        // XDomainRequest provides no evt parameter
        callback.call(this, evt || true, null);
        callback = function() { };
    };

    // IE9 must have onprogress be set to a unique function.
    x.onprogress = function() { };

    x.ontimeout = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    x.onabort = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    // GET is the only supported HTTP Verb by XDomainRequest and is the
    // only one supported here.
    x.open('GET', url, true);

    // Send the request. Sending data is not supported.
    x.send(null);
    sent = true;

    return x;
}

if (typeof module !== 'undefined') module.exports = corslite;

},{}],3:[function(require,module,exports){

var corslite = require('corslite');

if (typeof App === 'undefined') window.App = {};

App.api = window.mapbox_api;
App.tileApi = window.mapbox_tileApi;
App.accessToken = window.mapbox_accessToken;
App.tmpkey = (+new Date()).toString(26).substr(-8);
App.cache = {};
App.templates = {
    survey: _("<div class='small space-bottom2'>\n  <h3 class='space-bottom'>What is the main reason for <% if (obj.op === 'destroy') { %>deleting your account?<% } else { %>downgrading your subscription?<% }%></h3>\n  <div>\n    <input type='radio' name='answer' id='answer0' value='Missing a crucial feature' />\n    <label for='answer0'>Missing a crucial feature</label>\n  </div>\n  <div>\n    <input type='radio' name='answer' id='answer1' value='Not using it' />\n    <label for='answer1'>Not using it</label>\n  </div>\n  <% if (obj.op !== 'destroy') { %>\n  <div>\n    <input type='radio' name='answer' id='answer2' value='Smaller plan is enough for my needs' />\n    <label for='answer2'>Smaller plan is enough for my needs</label>\n  </div>\n  <% } %>\n  <div>\n    <input type='radio' name='answer' id='answer3' value='Needs better documentation' />\n    <label for='answer3'>Needs better documentation</label>\n  </div>\n  <div>\n    <input type='radio' name='answer' id='answer4' value='Not satisfied with support' />\n    <label for='answer4'>Not satisfied with support</label>\n  </div>\n  <div>\n    <input type='radio' name='answer' id='answer5' value='Went with a different tool' />\n    <label for='answer5'>Went with a different tool</label>\n  </div>\n  <div>\n    <input type='radio' name='answer' id='answer6' value='Other' />\n    <label for='answer6'>Other</label>\n  </div>\n</div>\n").template(),
    nav: _("<% if (!user.id) { %>\n  <a href='#signin' class='primary-nav-button inline pad1x pad0y round signin auth-signin'>Log in</a>\n  <div class='clearfix round inline align-top stroke primary-nav-wrap clip'>\n    <a href='/signup/' class='primary-nav-button fill-lighten1 inline signup pad1x pad0y js-signup'>Sign up</a>\n  </div>\n<% } else { %>\n  <div class='clearfix round inline align-top stroke primary-nav-wrap clip'>\n    <a href='/studio/' class='align-top primary-nav-button clearfix fill-lighten1 inline pad1x pad0y'><img class='fl dot align-top avatar' src='<%= user.avatar %>' /><div style='max-width:90px;' title='<%= user.id %>' class='fl truncate'>Studio</div></a>\n  </div>\n  <a href='#signout' title='Sign out' class='contain primary-nav-button inline pad0 round quiet rcon logout js-signout'></a>\n<% } %>\n").template(),
    mobileNav: _("<% if (!user.id) { %>\n  <a class='pad1 block strong col6 signin' href='#signin'>Log in</a>\n  <a class='pad1 block strong col6' href='/signup/'>Sign up</a>\n<% } else { %>\n  <a class='pad1 block strong col6' href='/account/'>\n    <img class='inline dot avatar' src='<%= user.avatar %>' />\n    <span><%= _(user.id || user.name).escape() %></span>\n  </a>\n  <a href='#signout' class='pad1 block strong col6 icon logout js-signout'>Sign out</a>\n<% } %>\n").template(),
    alert: _("<a href='#alert' id='alert' class='fill-yellow block'><span class='icon big alert quiet'></span></a>\n").template()
};
App.colors = [
    'f1f075','eaf7ca','c5e96f','a3e46b','7ec9b1','b7ddf3','63b6e5','3ca0d3',
    '1087bf','548cba','677da7','9c89cc','c091e6','d27591','f86767','e7857f',
    'fa946e','f5c272','ede8e4','ffffff','cccccc','6c6c6c','1f1f1f','000000'
];
App.pigment_colors = [
    'f1f075','eaf7ca','c5e96f','a3e46b','7ec9b1','b7ddf3','63b6e5','3ca0d3',
    '1087bf','548cba','677da7','9c89cc','c091e6','d27591','f86767','e7857f',
    'fa946e','f5c272','ede8e4','ffffff','cccccc','6c6c6c','1f1f1f','000000'
];
_(App).extend(Backbone.Events);

// App storage init.
App._storage = (function() {
    var storage;
    try { storage = localStorage; } catch(err) {}
    storage = storage || (function() {
        var s = {};
        return {
            getItem: function(k) { return s[k]; },
            setItem: function(k, v) { s[k] = v; },
            removeItem: function(k) { delete s[k]; }
        };
    })();
    return storage;
})();

// Wrapper around localStorage.
// Handles scoping of storage by active user id, error handling.
App.storage = function(k, v) {
    k = App.user && App.user.id ? App.user.id + '.' + k : '_anon.' + k;
    try {
        if (arguments.length === 1) {
            return App._storage.getItem(k);
        } else if (v === null) {
            return App._storage.removeItem(k);
        } else {
            return App._storage.setItem(k, v);
        }
    } catch(err) {
        // localstorage quota exceeded
        if (typeof console !== 'undefined') console.error(err);
    }
};

// App storage init.
App._sessionStorage = (function() {
    var storage;
    try { storage = sessionStorage; } catch(err) {}
    storage = storage || (function() {
        var s = {};
        return {
            getItem: function(k) { return s[k]; },
            setItem: function(k, v) { s[k] = v; },
            removeItem: function(k) { delete s[k]; }
        };
    })();
    return storage;
})();

// Wrapper around sessionStorage.
App.sessionStorage = function(k, v) {
    try {
        if (arguments.length === 1) {
            return App._sessionStorage.getItem(k);
        } else if (v === null) {
            return App._sessionStorage.removeItem(k);
        } else {
            return App._sessionStorage.setItem(k, v);
        }
    } catch(err) {
        // localstorage quota exceeded
        if (typeof console !== 'undefined') console.error(err);
    }
};

// Determine if the current active user can access a given id.
App.access = function(id) {
    if (!id) return true;
    if (App.user && id.split('.')[0] === App.user.id) return true;
    if (App.user && App.user.plan && App.user.plan.id === 'staff') return true;
    return false;
};

// For a given object type return its appropriate Backbone Model or Collection.
// Currently uses generic Backbone.Model and Backbone.Collection handlers, may
// become more sophisticated in the future.
App.objtype = function(url) {
    var a = document.createElement('a');
    a.href = url;
    path = a.pathname + a.search;

    if (path.slice(0, 1) !== '/') {
      path = '/' + path;
    }
    if (path.indexOf('/_/') === 0) {
      path = path.slice(2);
    }

    // Search
    if ((/^\/api\/User\/search\/[a-z0-9-_]+/i).test(path)) {
        return Backbone.Collection;
    }
    // Admin
    if ((/^\/api\/User\/(created|stats)\/[a-z0-9-_]+/i).test(path)) {
        return Backbone.Collection;
    }
    if ((/^\/api\/users\/[a-z0-9-_]+\/authorizations/i).test(path)) {
        var user = url.match(/^\/api\/users\/([a-z0-9-_]+)\/authorizations/i)[1];
        var C = Backbone.Collection.extend({});
        C.prototype.model = Backbone.Model.extend({});
        C.prototype.url = function() {
            return App.api + '/api/users/' + user + '/authorizations';
        };
        return C;
    }
    if ((/^\/api\/customers\/[a-z0-9-_]+\/invoices$/i).test(path)) {
        return Backbone.Collection;
    }
    // url matches pattern for models.
    if ((/^\/api\/(customers|Map|orders|Markers|User|users|Statistics|Subscription)\/[a-z0-9-_]+/i).test(path)) {
        return Backbone.Model;
    }
    // url matches pattern for models -- dataset endpoint
    if ((/datasets\/v1\/[a-z0-9-_]+/i).test(path)) {
        return Backbone.Model;
    }
    // url matches pattern for models -- dataset endpoint
    if ((/statistics\/v1\/[a-z0-9-_]+\/[a-z0-9-_]+\/[a-z0-9-_]+/i).test(path)) {
        return Backbone.Model;
    }

    // url matches pattern for collections.
    if ((/^\/api\/Map[^\/]/i).test(path)) {
        var C = Backbone.Collection.extend({});
        C.prototype.model = Backbone.Model.extend({});
        C.prototype.model.prototype.url = function() {
            return App.api + '/api/Map/' + this.id;
        };
        return C;
    }
    // Feed
    if ((/^\/api\/feed\/[a-z0-9-_]+/i).test(path)) {
        return Backbone.Collection;
    }
    if ((/^\/api\/(Plans)[^\/]*/i).test(path)) {
        return Backbone.Collection;
    }
    throw new Error('Could not determine objtype of url ' + url);
};

// Retrieve a model/collection for a given api URL endpoint.
// Implements a singleton/locking model to prevent multiple requests/model
// instances from being created for the same request on a given page.
App.fetch = function(url, refresh, opts, callback) {
    if (typeof refresh === 'function') {
        opts = refresh;
        refresh = false;
    }
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    callback = callback || function() {};
    var cache = App.cache[url];
    if (cache && !refresh) {
        if (cache.synced) return callback(null, App.cache[url]);
        cache.once('sync', function(obj, res) { return callback(null, obj); });
        cache.once('error', function(obj, err) { return callback(err); });
    } else {
        App.cache[url] = new (App.objtype(url))();
        (function fetch() {
            App.cache[url].url = App.normalizeURL(url);
            opts.success = function(obj, res) {
                obj.synced = true;
                callback(null, obj);
            };
            opts.error = function(model, err) {
                if (err) {
                    return App._handleError(err, function(e, r) {
                        if (e) return callback(e);
                        fetch();
                    });
                }
                delete App.cache[url];
                callback(err);
            };

            App.cache[url].fetch(opts);
        })();
    }
};

// Run fetch in parallel for an array of URLs.
App.fetchall = function(urls, refresh, opts, callback) {
    // if refresh is passed as true, it busts the cache
    if (typeof refresh === 'function') {
        opts = refresh;
        refresh = false;
    }
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    var loaded = new Array(urls.length);
    var error;
    _(urls).each(function(url, idx) {
        App.fetch(url, refresh, opts, function(err, obj) {
            error = error || err;
            loaded[idx] = err || obj;
            if (_(loaded).compact().length === urls.length) {
                callback(error, _(loaded).filter(function(obj) {
                    return (obj instanceof Backbone.Model) || (obj instanceof Backbone.Collection);
                }));
            }
        });
    });
};

// Fetch tilejson from the Maps API for the mapid or
// composited layers of a project.
App.tilejson = function(mapid, callback) {
    corslite(App.tileApi + '/v4/' + mapid + '.json?secure=1&access_token=' + App.temporaryToken, function(err, xhr) {
        if (err) return callback(err);
        callback(null, JSON.parse(xhr.responseText));
    });
};

// Wrapper around model.save().
// Handles temporary ID replacement and attempts an auth challenge on 40x
// responses before returning an error to the caller.
App.save = function(obj, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }
    if (!(obj instanceof Backbone.Model)) throw new Error('Object is not a model');

    // Replace tmp scoped IDs if authenticated user is present.
    // @TODO would be great if the API could handle this.
    if (obj.id && (/^api\./).test(obj.id) && App.user) {
        obj.set({id: App.user.id + '.' + App.tmpkey });
        obj.url = obj.url.replace(obj.previousAttributes().id, obj.id);
    }
    obj.url = App.normalizeURL(obj.url);

    opts.success = function(obj, res) { callback(null, obj) };
    opts.error = function(obj, err) {
        if (err && !Views.modal.modals.auth) {
            var modal = App._handleError(err, function(e, r) {
                if (e) return callback(e);
                // Login increments the _rev on the user document. If we
                // are saving a user, reload it and nuke the lastLogin
                // property.
                var id = obj.get('_id');
                if (id && id.indexOf('api/User') !== -1) {
                    App.fetch('/api/User/' + obj.id, true, function(err, user) {
                        if (err) return callback(err);
                        obj.set('_rev', user.get('_rev'));
                        App.save(obj, opts, callback);
                    });
                } else {
                    App.save(obj, opts, callback);
                }
            });
            if (window.welcomeFlow) Views.modal.slide('active3');
            return modal;
        }
        // Payment required.
        if (App.user && err.status === 422 && err.responseJSON && err.responseJSON.code === 'upgrade') {
            App._handleError(err, function(e, r) {
                if (e) return callback(e);
                App.save(obj, opts, callback);
            });
        }
        return callback(err);
    };

    obj.save({}, opts);
};

// Wrapper around model.destroy().
// Clears singleton cache when a model is destroyed.
App.destroy = function(obj, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }
    if (!(obj instanceof Backbone.Model)) throw new Error('Object is not a model');

    obj.url = App.normalizeURL(obj.url);

    opts.success = function(obj, res) {
        var url = typeof obj.url === 'function' ? obj.url() : obj.url;
        delete App.cache[url];
        return callback && callback();
    };
    opts.error = function(obj, err) {
        if (err) App._handleError(err, function(e, r) {
            if (e) return callback(e);
            App.destroy(obj, opts, callback);
        });
        return callback && callback(err);
    };

    obj.destroy(opts);
};

// Make a generic GET request against the API.
App.get = function(href, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    opts.url = App.normalizeURL(href);
    opts.type = 'GET';
    opts.processData = false;
    opts.dataType = 'json';
    opts.success = function(resp) { callback(null, resp); };
    opts.error = function(err) {
        if (err) {
            App._handleError(err, function(e, r) {
                if (e) return callback(e);
                opts.url = App.normalizeURL(href);
                return $.ajax(opts);
            });
        } else {
            callback(err);
        }
    };

    $.ajax(opts);
};

// Make a generic POST request against the API.
App.post = function(href, data, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    opts.url = App.normalizeURL(href);
    opts.type = 'POST';
    opts.contentType = 'application/json';
    opts.processData = false;
    opts.data = JSON.stringify(data);
    opts.dataType = 'json';
    opts.success = function(resp) { callback(null, resp); };
    opts.error = function(err) {
        if (err) {
            App._handleError(err, function(e, r) {
                if (e) return callback(e);
                opts.url = App.normalizeURL(href);
                return $.ajax(opts);
            });
        } else {
            callback(err);
        }
    };

    $.ajax(opts);
};

// Make a generic PUT request against the API.
App.put = function(href, data, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    opts.url = App.normalizeURL(href);
    opts.type = 'PUT';
    opts.processData = false;
    opts.success = function(resp) { callback(null, resp); };
    opts.error = function(err) {
        if (err) {
            App._handleError(err, function(e, r) {
                if (e) return callback(e);
                opts.url = App.normalizeURL(href);
                return $.ajax(opts);
            });
        } else {
            callback(err);
        }
    };

    if (data) {
        opts.data = JSON.stringify(data);
        opts.contentType = 'application/json';
        opts.dataType = 'json';
    }

    $.ajax(opts);
};

// Make a generic DELETE request against the API.
App.del = function(href, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    opts.url = App.normalizeURL(href);
    opts.type = 'DELETE';
    opts.processData = false;
    opts.success = function(resp) { callback(null, resp); };
    opts.error = function(err) {
        if (err) {
            App._handleError(err, function(e, r) {
                if (e) return callback(e);
                opts.url = App.normalizeURL(href);
                return $.ajax(opts);
            });
        } else {
            callback(err);
        }
    };

    $.ajax(opts);
};

App._handleError = function(error, callback) {
    switch (error.status) {
        // Unauthorized: Login is required.
        // The user is either not logged in or the session is too
        // old to complete the operation.
        case 401:
            if (!Views.modal.modals.auth) {
                Views.modal.show('auth', {
                    username: App.actor && App.actor.id,
                    close: true
                }, function(e) {
                    if (e && e.code === 'closed') return callback(error);
                    App.refreshToken(function (err) {
                        if (err) return callback(err);
                        callback(null);
                    });
                });
            } else {
                return callback(error);
            }
        break;
        // Unprocessable Entity
        case 422:
            // Upgrade is required.
            if (error.responseJSON && error.responseJSON.code === 'upgrade') {
                App.fetchall([
                    '/api/Plans',
                    '/api/User/' + App.user.id
                ], function(err, results) {
                    if (err) return Views.modal.show('err', err);
                    var plans = results.shift();
                    var plan = plans.get(error.responseJSON.plan);
                    var user = results.shift();
                    Views.modal.show('plan', {
                        plan: plan,
                        user: user,
                        op: App.isUpgrade(user.get('plan'), plan) ? 'upgrade' : 'downgrade',
                        message: error.responseJSON.message
                    }, function(err) {
                        if (err) return callback(err);
                        App.refreshUser(user.id, function(e) {
                            if (e) return callback(e);
                            return callback(null);
                        });
                    });
                });
            } else {
                return callback(error);
            }
        break;
        // Payment is required.
        case 402:
            if (!Views.modal.modals.payment) {
                Views.modal.show('payment', {
                    close: true
                }, function(e, response) {
                    if (e && e.code === 'closed') return callback(error);
                    if (e) return callback(e);
                    var model = new Backbone.Model({
                        id: App.user.customerID,
                        card: response.token,
                        coupon: response.coupon,
                        user: App.user.id
                    });
                    model.urlRoot = App.api + '/api/customers';
                    App.save(model, function(err) {
                        if (err) return Views.modal.show('err', err, callback);
                        if (response.coupon) {
                            analytics.track('Redeemed a Coupon', {
                                name: model.get('coupon')
                            });
                        }
                        analytics.track('Updated Payment Information');
                        return callback(null);
                    });
                });
            } else {
                return callback(error);
            }
        break;
        default:
            if (error.status >= 500) {
                return callback(new Error('An unexpected error occurred. Please try again, check http://status.mapbox.com, or contact support.'));
            } else {
                return callback(error);
            }
        break;
    }
};

// Return form values as a hash.
App.form = function(el) {
    return _($(el).serializeArray()).reduce(function(memo, obj) {
        memo[obj.name] = obj.value;
        return memo;
    }, {});
};

// Generic tabs event handler.
// Expects event to occur on a link with its hash referencing the tab element
// id to be made active. Either adds `active` class to target element or
// `activeN` class for targeted elements in a .sliding parent.
App.tabs = function(ev) {
    var el = $(ev.currentTarget);
    var to = el.is('label') ?
        $('#' + $('#' + el.attr('for')).val()) :
        $('#' + el.attr('href').split('#').pop());
    var parent = to.parent();

    // Set active class amongst any tab groupings.
    el.addClass('active').siblings().removeClass('active');

    // Target is part of directional panes.
    if (parent.is('.sliding')) {
        // Search for a .activeN class and nuke it.
        var current = parent.attr('class').match(/active[0-9]+/);
        if (current) parent.removeClass(current[0]);
        // Add the new appropriate active class.
        parent.addClass('active' + (parent.children().index(to) + 1));
    // Set active class amongst target siblings.
    } else {
        to.addClass('active').siblings().removeClass('active');
    }

    return el.is('label') ? null : false;
};

App._userLoadCallbacks = [];

App.onUserLoad = function(callback) {
    if ('user' in App && 'temporaryToken' in App) {
        callback(App.user);
    } else {
        App._userLoadCallbacks.push(callback);
    }
};


App.refreshUser = function(id, callback) {
    callback = callback || function() {};
    var impersonate = App.impersonate(App.param('impersonate'));
    $.ajax({
        url: App.api + '/api/session',
        success: function(user) {
            App.actor = user;
            if (impersonate) {
                $.ajax({
                    url: App.api + '/api/User/'+ impersonate,
                    success: success,
                    error: error
                });

                App.onUserLoad(function() {
                    $('body').append(App.template('alert')());
                    $('body').on('click', '#alert', function() {
                        var msg = _('You are impersonating <code><%-a%></code> as the user <code><%-b%></code>. <a href="?impersonate=0">Stop impersonating</a>.').template({
                            a: impersonate,
                            b: App.actor.id
                        });
                        Views.modal.show('confirm', msg);
                        return false;
                    });
                });
            } else {
                success(user);
            }
        },
        error: error
    });


    function success(user) {
        App.user = user;

        App.user.accessToken = _(user.authorizations).find(function(auth) {
            return auth.client === 'api' && auth.usage === 'pk' && auth['default'];
        }).token;

        analytics.identify(user.id, {
            name: user.name || user.id,
            email: user.email,
            plan: user.plan ? user.plan.id : null
        }, { 'Salesforce': true });

        // Clear out localStorage properties that are not scoped to the
        // current or anon users. Skips `editor.help` which is not sensitive
        // information.
        for (var k in App._storage) {
            if (/getItem|setItem|removeItem/.test(k)) continue;
            if (k.indexOf('_anon.') === 0) continue;
            if (App.user && App.user.id && k.indexOf(App.user.id) === 0) continue;
            if ((/editor\.help$/).test(k)) continue;
            if ((/debug/).test(k)) continue;
            if ((/dismiss-help/).test(k)) continue;
            App._storage.removeItem(k);
        }

        $('#nav').empty().html(App.nav());
        $('#mobile-nav').empty().html(App.mobileNav());

        App.refreshToken(function(err, token) {
            if (err) return callback(err);
            _(App._userLoadCallbacks).each(function (callback) { callback(); });
            App._userLoadCallbacks = [];
            callback(null, id);
        });
    }

    function error(err) {
        App.actor = null;
        App.user = null;
        $('#nav').empty().html(App.nav());
        $('#mobile-nav').empty().html(App.mobileNav());
        _(App._userLoadCallbacks).each(function(callback) { callback(); });
        App._userLoadCallbacks = [];
        callback(err);
    }
};

App.refreshToken = function(callback) {
    callback = callback || function() {};
    var impersonate = App.sessionStorage('impersonate');
    $.ajax({
        url: App.api + '/tokens/v1' +
            (impersonate ? '/' + impersonate.split(':')[0] : '') +
            '?scopes=' + (App.temporaryTokenScopes ? (App.temporaryTokenScopes + ',') : '') + 'map:read,user:read',
        error: function(err) {
            callback(err);
        },
        success: function(resp) {
            App.temporaryToken = resp.token;
            callback(null, resp.token);
        }
    });
};

App.impersonate = function(value) {
    // impersonate value is provided in querystring.
    if (typeof value !== 'undefined') {
        // Stop impersonating if value is 0.
        if (parseInt(value, 10) === 0) {
            App.sessionStorage('impersonate', null);
            return null;
        }
        // Save impersonation value for next time.
        App.sessionStorage('impersonate', [value, +new Date()].join(':'));
        return value;
    } else if (App.sessionStorage('impersonate')) {
        var parsed = App.sessionStorage('impersonate').split(':');
        // Impersonation expires after 10 minutes of inactivity.
        if (+new Date() - parsed[1] > 6e5) {
            App.sessionStorage('impersonate', null);
            return null;
        }
        // Write a fresh timestamp into session storage.
        App.sessionStorage('impersonate', [parsed[0], +new Date()].join(':'));
        return parsed[0];
    } else {
        return null;
    }
};

App.signin = function(ev, callback) {
    callback = callback || function() {};
    var options = App.form(ev.currentTarget);
    options.username = options.username.toLowerCase();
    App.post('/api/login?_=' + (+new Date()), options, function(err, resp) {
        if (err && err.status === 401) {
            if (Views.modal.modals.twostep) {
                return callback(err);
            } else {
                return Views.modal.show('twostep', {
                    username: options.username,
                    password: options.password
                }, function(e) {
                    if (e) return callback(err);
                    return callback(null);
                });
            }
        }
        if (err) return callback(err);
        App.refreshUser(resp.id, function(err) {
            if (err) return callback(err);
            analytics.track('Logged In');
            callback();
        });
    });
    return false;
};

App.signout = function(callback) {
    App.del('/api/logout?_=' + new Date(), function() {
      analytics.reset();
      if (callback) callback.apply(this, arguments);
    });
    return false;
};

App.signup = function(ev, callback) {
    callback = callback || function() {};
    var model = new Backbone.Model(App.form(ev.currentTarget));
    model.url = App.api + '/api/User';
    model.set('username', model.get('username').toLowerCase());
    App.save(model, function(err, model) {
        if (err) return callback(err);
        model.unset('password');
        analytics.identify(model.id, {
            firstName: model.get('firstname'),
            lastName: model.get('lastname'),
            company: model.get('company')
        }, { 'Salesforce': true });
        App.refreshUser(model.id, function(err) {
            if (err) return callback(err);
            callback();
            analytics.track('Created an Account (Browser)');
        });
    });
    return false;
};

App.reset = function(el, callback) {
    callback = callback || function() {};
    var data = App.form(el);
    App.post('/api/reset-password?_=' + (+new Date()), data, callback);
    return false;
};

App.nav = function() {
    var user = App.user || {};
    return App.template('nav')({user: user});
};

App.mobileNav = function() {
    var user = App.user || {};
    return App.template('mobileNav')({user: user});
};

// Convenience function around jQuery + underscore templating to grab the
// specified template by ID.
App.template = function(id) {
    App.templates[id] = App.templates[id] || _($('#' + id).text()).template();
    return App.templates[id];
};

// Get the value of a given param from window.location.search.
App.param = function(arg, source) {
    source = source || window.location.search;
    var pattern = new RegExp('[?&]'+arg+'=([^&]*)', 'i');
    var matches = source.match(pattern);
    if (matches) return decodeURIComponent(matches[1].replace(/\+/g, ' '));
};

// Fetch upload params from API.
App.uploadparams = function(account, callback) {
    callback = callback || function() {};
    $.ajax({
        url: App.api + '/api/upload/' + account,
        type: 'GET',
        contentType: 'application/json',
        processData: false,
        dataType: 'json',
        success: function(resp) { callback(null, resp); },
        error: function(err) { callback(err); }
    });
    return false;
};

// Determine whether two objects are equal disregarding the _rev key.
App.revless = function (obj) {
    return _(obj).reduce(function(m,v,k) {
        if (k !== '_rev') m[k] = v;
        return m;
    }, {});
};

// Global keydown event handler.
App.keydown = function(ev) {
    if (Views.modal.active) return Views.modal.keydown(ev);
    if (Views.editor) return Views.editor.keydown && Views.editor.keydown(ev);
};

// Global keyup event handler.
App.keyup = function(ev) {
    if (Views.modal.active) return Views.modal.keyup(ev);
    if (Views.editor) return Views.editor.keyup && Views.editor.keyup(ev);
};

App.canedit = (function() {
    return ('ontouchend' in document) ?
        (navigator.userAgent.match(/iPad/i) !== null) ? true : false :
        true;
})();

App.isUpgrade = function(old_plan, new_plan) {
    return !old_plan || ((old_plan.get ? old_plan.get('price') : old_plan.price) <=
        (new_plan.get ? new_plan.get('price') : new_plan.price));
};

App.validateEmail = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

App.normalizeURL = function(url) {
  url = url.match(/^(http:\/\/|https:\/\/|\/\/)/) || url.indexOf(App.api) === 0 ? url : App.api + url;
  url = url.replace(/access_token=tk\.[^&]+/, 'access_token=' + App.temporaryToken);
  return url;
};

// AJAX defaults for CORS.
$.ajaxSetup({
    cache: false,
    xhrFields: { withCredentials: true }
});

$(function() {

    // Disallow animations on initial page render to prevent awkward
    // initial transition animations based on hash.
    setTimeout(function() { $('body').addClass('animate'); },0);

    App.refreshUser();

    // Global event handlers.
    $('body').on('keydown', App.keydown);
    $('body').on('keyup', App.keyup);
});

App.onUserLoad(function() {
    // Redirects pages with params that a user cannot access.
    if (!App.access(App.param('id'))) window.location.search = '';

    // Load last edited map from localStorage. Checks for ownership.
    if (App.user && App.user.id === (App.storage('map.id')||'').split('.')[0]) {
        App.currentmap = App.storage('map.id');
    }

    // Fancy header for enterprise users
    if (App.user && App.user.plan && App.user.plan.id === 'enterprise') {
        $('body').addClass('enterprise-account');
    }

    function replaceToken(node, token) {
        if (node.nodeType === 3) {
            if (node.textContent.indexOf('<your access token here>') !== -1) {
                node.textContent = node.textContent.replace('<your access token here>', token);
            }
        } else if (node.nodeName === 'INPUT') {
            node.value = node.value.replace('<your access token here>', token);
        } else {
            for (var i = 0; i < node.childNodes.length; ++i) {
                replaceToken(node.childNodes[i], token);
            }
        }

        var $clipboard = $(node).next('.js-access-token-clipboard');

        if ($clipboard) {
            $clipboard.attr('data-clipboard-text', token);
        }

    }

    if (App.user) {
        $('.js-replace-token').each(function() {
            var usage = $(this).data('replace-token-usage') || 'pk';
            var token = _.find(App.user.authorizations, function(auth) {
                return auth.client === 'api' && auth.usage === usage && auth['default'];
            }).token;

            replaceToken(this, token);
        });
    }

    $('.js-api-link').each(function() {
        if (!this.href) {
            this.href = $(this).text();
        }

        var html = $(this).clone()[0];

        if (this.search) {
            this.search += '&';
            html.search += '&';
        }

        this.search += 'access_token=';
        html.search += 'access_token=';

        this.search += App.user ? App.user.accessToken : App.accessToken;
        html.search += App.user ? App.user.accessToken : '&lt;your access token&gt;';

        $(this).text(html.href);
    });

    $('body').addClass('user-loaded');
});

// refresh the token every 30 mins, temp tokens expire after 60 mins
window.setInterval(function() {
    if (App.user) {
        App.refreshToken();
    }
}, 1000 * 60 * 30);

module.exports = App;

},{"corslite":2}],4:[function(require,module,exports){

var templates = {
    auth: _("<div class='modal-popup modal-auth'>\n  <div class='clip sliding h active2'>\n\n    <form id='auth-reset' class='animate' method='post'><div class='limiter'>\n      <% if (obj.username) { %>\n        <div class='col6 fill-white modal-body round-top contain'>\n          <div class='mobile-cols'>\n            <% if (obj.redirect) { %>\n              <a href='<%= obj.redirect %>' class='pad1 icon quiet pin-topright close escape'></a>\n            <% } else { %>\n              <a href='#close' class='pad1 icon pin-topright quiet close'></a>\n            <% } %>\n            <div class='pad2y pad4x center'>\n              <h2>Recover password</h2>\n            </div>\n            <div class='space-bottom2 pad4x'>\n              <fieldset>\n                <label>Email</label>\n                <input type='text' name='email' class='stretch' />\n              </fieldset>\n            </div>\n          </div>\n          <div class='mobile-cols modal-actions round-bottom fill-gray round-bottom pad2 clearfix'>\n            <div class='col6 pad2x'>\n              <input class='col12 button' type='submit' value='Send reset instructions' />\n            </div>\n            <small class='col6 pad1y center pad2x'>\n              <a class='rcon next slide quiet' href='#active2'>Confirm password</a>\n            </small>\n          </div>\n        </div>\n      <% } else { %>\n      <div class='col6 fill-blue modal-body round-top contain'>\n        <div class='mobile-cols dark'>\n          <% if (obj.redirect) { %>\n            <a href='<%= obj.redirect %>' class='pad1 icon pin-topright close escape'></a>\n          <% } else { %>\n            <a href='#close' class='pad1 icon pin-topright close'></a>\n          <% } %>\n          <div class='pad2y pad4x center dark'>\n            <h3 class='fancy'>Recover password</h3>\n          </div>\n          <div class='space-bottom2 pad4x dark'>\n            <fieldset>\n              <label>Email</label>\n              <input type='text' name='email' class='round clean stretch' />\n            </fieldset>\n          </div>\n        </div>\n        <div class='mobile-cols modal-actions round-bottom fill-gray round-bottom pad2 clearfix'>\n          <div class='col8 pad2x'>\n            <input class='col12 button' type='submit' value='Send reset instructions' />\n          </div>\n          <small class='col4 pad1y center pad2x'>\n            <a class='rcon next slide quiet' href='#active2'>Sign in</a>\n          </small>\n        </div>\n      </div>\n      <% } %>\n    </div></form>\n\n    <form id='auth-signin' class='animate' method='post'><div class='limiter'>\n      <% if (obj.username) { %>\n      <div class='col6 fill-white modal-body round-top contain'>\n        <% if (obj.redirect) { %>\n          <a href='<%= obj.redirect %>' class='pad1 icon quiet pin-topright close escape'></a>\n        <% } else { %>\n          <a href='#close' class='pad1 icon quiet pin-topright close'></a>\n        <% } %>\n        <div class='pad2y pad4x center'>\n          <h2>Confirm your password</h2>\n        </div>\n        <div class='space-bottom2 pad4x'>\n          <fieldset>\n            <input type='hidden' name='username' value='<%= obj.username %>' />\n            <label>Password <small class='inline'><a href='#active1' class='slide forgot' tabindex='3'>Forgot it?</a></small></label>\n            <input type='password' name='password' class='stretch' tabindex='2' />\n          </fieldset>\n        </div>\n        <div class='mobile-cols modal-actions round-bottom fill-gray round-bottom pad2y pad4x clearfix'>\n          <div class='col6 margin6'>\n            <input class='col12 button' type='submit' value='Confirm' />\n          </div>\n        </div>\n      </div>\n      <% } else { %>\n      <div class='col6 fill-blue modal-body round-top contain'>\n        <div class='mobile-cols dark'>\n          <% if (obj.redirect) { %>\n            <a href='<%= obj.redirect %>' class='pad1 icon pin-topright close escape'></a>\n          <% } else { %>\n            <a href='#close' class='pad1 icon pin-topright close'></a>\n          <% } %>\n          <div class='pad2y pad4x center dark'>\n            <h3 class='fancy center'>Sign in to Mapbox</h3>\n          </div>\n          <div class='space-bottom2 pad4x dark'>\n            <fieldset>\n              <label>Username or email</label>\n              <input type='text' name='username' autocapitalize='off' class='round clean stretch' tabindex='1' />\n            </fieldset>\n            <fieldset>\n              <label>Password <small class='inline'><a href='#active1' class='slide forgot' tabindex='3'>Forgot it?</a></small></label>\n              <input type='password' name='password' class='round clean stretch' tabindex='2' />\n            </fieldset>\n          </div>\n        </div>\n        <div class='mobile-cols modal-actions round-bottom fill-gray round-bottom pad2y pad4x clearfix'>\n          <div class='col6'>\n            <input class='col12 button' type='submit' value='Sign in' />\n          </div>\n          <small class='col6 pad1y center'>\n            <a class='rcon next quiet' href='/signup'>Need an account?</a>\n          </small>\n        </div>\n      </div>\n      <% } %>\n    </div></form>\n\n  </div>\n</div>\n").template(),
    twostep: _("<form id='twostep-signin' class='modal-popup limiter' method='post'>\n  <div class='col6 modal-body fill-white contain'>\n    <% if (obj.redirect) { %>\n      <a href='<%= obj.redirect %>' class='pad1 icon quiet pin-topright close escape'></a>\n    <% } else { %>\n      <a href='#close' class='pad1 icon quiet pin-topright close'></a>\n    <% } %>\n    <div class='pad2y pad4x center'>\n      <h2 class='icon lock big'>Two-step verification</h2>\n    </div>\n    <div class='space-bottom2 pad4x'>\n      <fieldset>\n        <label>Six-digit security code <a target='_blank' href='https://mapbox.com/help/two-step-verification'>What's this?</a></label>\n        <input type='hidden' name='username' value='<%= obj.username %>' />\n        <input type='hidden' name='password' value='<%= obj.password %>' />\n        <input type='text' name='code' class='stretch' placeholder='123456' value='' />\n        <a href='https://mapbox.com/help/two-step-verification/#What.if.I.lose.my.mobile.device.' class='block small center quiet pad0y'>Lost your mobile device?</a>\n      </fieldset>\n    </div>\n    <div class='fill-gray pad2y pad4x clearfix'>\n      <input type='submit' class='button fr col6' value='Sign in' />\n    </div>\n  </div>\n</form>\n").template(),
    err: _("<% if (!(obj instanceof Error)) {\n  if ('responseText' in obj) {\n    try {\n      obj = new Error(JSON.parse(obj.responseText).message);\n    } catch (err) {\n      obj = new Error(obj.responseText);\n    }\n  } else if ('message' in obj) {\n    obj = new Error(obj.message);\n  } else if ('status' in obj && typeof obj.status === 'number') {\n    obj = new Error('HTTP ' + obj.status);\n  } else {\n    obj = new Error('Unknown error occurred');\n  }\n} %>\n<div id='modal-err' class='modal-popup'><div class='limiter'>\n  <div class='col6 modal-body fill-white'>\n    <div class='pad2y pad4x center'>\n      <%- obj %>\n    </div>\n    <div class='fill-gray pad2y pad4x center modal-actions'>\n      <a href='#close' class='button col12 quiet close'>Close</a>\n    </div>\n  </div>\n</div></div>\n").template(),
    confirm: _("<div id='modal-confirm' class='modal-popup'><div class='limiter'>\n  <div class='col6 modal-body fill-white'>\n    <% if (obj.html) { %>\n    <div class='pad2y pad4x'><%= obj.html %></div>\n    <% } else { %>\n    <div class='pad2y pad4x center'><%= obj.text || obj %></div>\n    <% } %>\n    <div class='fill-gray pad2y pad4x clearfix center modal-actions mobile-cols'><!--\n    --><% if (obj.callback && obj.cancel !== false) { %><a href='#cancel' class='pad1y small col6 quiet icon strong close cancel'>Cancel</a><% } %><!--\n    --><a href='#ok' class='button <% if (obj.callback && obj.cancel !== false) { %>col6<% } else { %>col12<% } %> icon check ok'><%= obj.confirm || 'Okay' %></a><!--\n  --></div>\n  </div>\n</div></div>").template(),
    payment: _("<div class='modal-popup modal-payment'><div class='limiter'>\n    <form id='payment' class='round animate' method='post'>\n      <div class='col6 modal-body fill-white contain'>\n        <% if (obj.close) { %><a href='#close' class='quiet pad1 icon fr close'></a><% } %>\n        <div class='pad2y pad4x center'>\n          <h2>Payment information</h2>\n        </div>\n        <div class='space-bottom2 pad2x clearfix'>\n          <fieldset class='pad2x col12'>\n            <div class='space-bottom1'>\n              <label class='truncate'>Card number</label>\n              <input type='text' name='number' class='stretch' />\n            </div>\n            <div class='credit-cards pad0y round'>\n              <span class='credit-card visa'></span>\n              <span class='credit-card mastercard'></span>\n              <span class='credit-card american-express'></span>\n              <span class='credit-card jcb'></span>\n              <span class='credit-card discover'></span>\n              <span class='credit-card diners-club'></span>\n            </div>\n          </fieldset>\n          <div class='pad1x clearfix'>\n            <fieldset class='pad1x col4'>\n              <label class='truncate'>Expiry <span class='quiet'>MM/YYYY</span></label>\n              <input type='text' name='exp' class='stretch' />\n            </fieldset>\n            <fieldset class='pad1x col4'>\n              <label class='truncate'>CVC</label>\n              <input type='text' name='cvc' class='stretch' />\n            </fieldset>\n            <fieldset class='pad1x col4'>\n              <label class='truncate'>ZIP or Postal code</label>\n              <input type='text' name='address_zip' class='stretch' />\n            </fieldset>\n          </div>\n          <a href='#coupon-code' class='pad2x space-top2 js-toggle js-once col12 icon small strong plus'>Add coupon code?</a>\n          <fieldset id='coupon-code' class='hidden space-top2 pad2x col12'>\n            <label class='truncate'>Coupon code</label>\n            <input type='text' name='coupon' class='stretch' />\n          </fieldset>\n        </div>\n        <div class='fill-gray pad2y pad4x clearfix modal-actions'>\n          <input class='fr col6 button' type='submit' value='Done' />\n        </div>\n      </div>\n    </form>\n</div></div>\n").template(),
    plan: _("<% var button; %>\n\n<div class='modal-popup'><div class='limiter'>\n  <form id='plan' method='post'>\n    <input type='hidden' name='plan' value='<%= obj.plan.id %>' />\n    <input type='hidden' name='user' value='<%= obj.user.id %>' />\n    <% if (obj.user.get('customerID')) { %>\n    <input type='hidden' name='customer' value='<%= obj.user.get('customerID') %>' />\n    <% } %>\n    <input type='hidden' name='op' value='<%= obj.op %>' />\n    <div class='col6 modal-body fill-white'>\n      <div class='pad2y pad4x'>\n        <% if (obj.op === 'upgrade') { %>\n        <% button = 'Upgrade'; %>\n        <h2 class='center'><%= plan.get('name') %> for $<%= plan.get('price') %>/<%= plan.get('period') %></h2>\n        <% if (obj.message) { %>\n        <p class='center'><%= obj.message %></p>\n        <% } else { %>\n        <p class='center prose'>You're about to upgrade to the <strong><%= plan.get('name') %></strong> plan.<% if (App.user) { %> Add/edit payment details or add a coupon? <a href='#' class='js-update-payment'>Update your payment information</a>.<% } %></p>\n        <% } %>\n        <% } else if (obj.op === 'downgrade') { %>\n        <% button = 'Downgrade'; %>\n        <h2 class='center title'>Downgrade to <%= plan.get('name') %></h2>\n        <p class='prose'>Before you downgrade, can we help you get the most out of Mapbox?<a href='mailto:help@mapbox.com'> Ask our support team for help</a>.</p>\n        <%= App.template('survey')(obj) %>\n        <% } %>\n        <div class='center small'>\n          <a href='https://mapbox.com/help/changing-plans/' class='quiet' target='_blank'>What happens when I change plans?</a>\n        </div>\n      </div>\n      <div class='fill-gray pad2y pad4x clearfix center modal-actions mobile-cols'>\n      <a href='#cancel' class='pad1y small col6 quiet icon strong close cancel'>Cancel</a><!--\n      --><input class='col6 icon button' type='submit' value='<%= button %>' /><!--\n    --></div>\n    </div>\n  </form>\n</div></div>\n").template(),
    confirmTweet: _("<div id='modal-confirm-tweet' class='modal-popup'><div class='limiter'>\n  <div class='col6 modal-body fill-white contain'>\n    <a href='#close' class='pad1 icon pin-topright quiet close'></a>\n    <% if (obj.title) { %>\n    <div class='pad2y pad4x center'><%= obj.title %></div>\n    <% } else { %>\n    <div class='pad2y pad4x center'><h3 class=\"quiet\">Thanks!</h3></div>\n    <% } %>\n    <% if (obj.twitter) { %>\n     <div class='fill-cyan pad2y pad4x clearfix center modal-actions mobile-cols'>\n       <a href=\"http://twitter.com/intent/tweet?status=<%= obj.twitter %>\"  class=\" pad2x dark icon twitter strong\">Share on Twitter</a>\n     </div>\n     <% } %>\n  </div>\n</div></div>").template()
};

var Modal = Backbone.View.extend({});

Modal.prototype.active = false;

Modal.prototype.modals = {};

Modal.prototype.events = (function() {
    var events = {};
    events['submit #auth-signin'] = 'signin';
    events['submit #twostep-signin'] = 'signinTwoStep';
    events['keyup input[name=password]'] = 'passwordRules';
    events['submit #auth-reset'] = 'reset';
    events['submit #payment'] = 'payment';
    events['submit #plan'] = 'plan';
    events['click a.slide'] = 'slide';
    events['click a.close'] = 'close';
    events['click a.escape'] = 'escape';
    events['click a.js-update-payment'] = 'updatePayment';
    events['click #modal-confirm a.ok'] = 'ok';
    events['keyup input[name=number]'] = 'card';
    events['click .js-toggle'] = 'toggle';
    return events;
})();

Modal.prototype.getActive = function(ev) {
    var modals = this.modals;
    var parent = ev ?
        $(ev.currentTarget).parents('.modal-popup').get(0) :
        $('#modal-content > *').get(-1);
    var active = _(Object.keys(modals)).find(function(key) {
        return parent === modals[key].el.get(0);
    });
    return {active:active, parent:parent};
};

Modal.prototype.ok = function(ev) {
    var active = this.getActive(ev).active;
    if (active) this.done(active, null, App.form(this.$('form')));
    return false;
};

Modal.prototype.close = function(ev) {
    var active = this.getActive(ev).active;
    var parent = this.getActive(ev).parent;

    // If escape link is present (rather than just 'close'),
    // follow it to the referenced page.
    if ($('a.escape', parent).size() && active) {
        window.location = $('a.escape', parent).attr('href');
        return false;
    }
    var err  = new Error('Closed');
    err.code = 'closed';
    if (active) this.done(active, err);
    return false;
};

Modal.prototype.escape = function(ev) {
    // If the authorization request came from elsewhere
    // return there with an error if the modal is closed.
    var search = decodeURIComponent(window.location.search);
    var pattern = /redirect_uri=([^&]*)/;
    var redirect = pattern.exec(search);
    if (redirect) {
        window.location = redirect[1] + '?error=access_denied';
        return false;
    }
    return null;
};

Modal.prototype.passwordRules = function(ev) {
    var val = $(ev.currentTarget).val();
    var $feedback = $(ev.currentTarget).parent().find('.password-rules');
    var output = passwordRules(val, {
        minimumLength: 8,
        requireCapital: false,
        requireLower: false,
        requireNumber: false
    });
    if (!output) $feedback.text('');
    else $feedback.text(output.sentence);
};

Modal.prototype.signin = function(e, modal) {
    var modal = this.modals.auth;
    if (!modal) return false;
    modal.el.addClass('loading');
    return App.signin(e, function(err) {
        modal.el.removeClass('loading');
        if (err) return this.show('err', err);
        this.done('auth');
    }.bind(this));
};

Modal.prototype.signinTwoStep = function(e, modal) {
    var modal = this.modals.twostep;
    if (!modal) return false;
    modal.el.addClass('loading');
    return App.signin(e, function(err) {
        modal.el.removeClass('loading');
        if (err) return this.show('err', err);
        this.done('twostep');
    }.bind(this));
};


Modal.prototype.reset = function(ev) {
    var modal = this.modals.auth;
    var view = this;

    if (!modal) return false;
    modal.el.addClass('loading');
    return App.reset(ev.currentTarget, function(err) {
        modal.el.removeClass('loading');
        if (err) {
            view.show('err', err);
        } else {
            Views.modal.show('confirm', 'Password instructions sent');
        }
    });
};

Modal.prototype.updatePayment = function(ev) {
    Views.modal.show('payment', {close: true}, function(err, response) {
        if (err) {
            if (err.code !== 'closed') return Views.modal.show('err', err);
        } else {
            var model = new Backbone.Model({
                id: App.user.customerID,
                card: response.token,
                coupon: response.coupon,
                user: App.user.id
            });
            model.urlRoot = App.api + '/api/customers';
            App.save(model, function(err) {
                if (err) return Views.modal.show('err', err);
                if (response.coupon) {
                    analytics.track('Redeemed a Coupon', {
                        name: model.get('coupon')
                    });
                }
                analytics.track('Updated Payment Information');
                App.refreshUser(App.user.id, function(err) {
                    if (err) return Views.modal.show('err', err);
                    callback(null, model);
                });
            });
        }
    });

    return false;
};

Modal.prototype.payment = function(ev) {
    var modal = this.modals.payment;
    var view = this;

    var options = _($(ev.currentTarget).serializeArray()).reduce(function(memo, obj) {
        memo[obj.name] = obj.value;
        return memo;
    }, {});

    var coupon = options.coupon && !!options.coupon.length;
    var card = _(options).chain().pick(['number', 'exp', 'cvc', 'address_zip']).any(function(val) {
        return !!val.length;
    }).value();

    // Normalize exp by stripping any non numericals
    var exp = options.exp.replace(/[^0-9]/g, '');

    options.exp_month = exp.slice(0, 2) || '';
    options.exp_year = exp.slice(2) || '';

    // Validation
    var err = (function() {
        if (card || !coupon) {
            if (!Stripe.card.validateCardNumber(options.number))
                return new Error('Invalid card number');
            if (!Stripe.card.validateExpiry(options.exp_month, options.exp_year))
                return new Error('Invalid expiration date');
            if (!Stripe.card.validateCVC(options.cvc))
                return new Error('Invalid CVC');
        } else if (!options.coupon.length) {
            return new Error('Invalid coupon code');
        }
    }());
    if (err) {
        view.show('err', err);
        return false;
    }

    if (card) {
        modal.el.addClass('loading');
        Stripe.card.createToken(_(options).omit('coupon'), function(status, response) {
            modal.el.removeClass('loading');
            if (status != 200) return view.show('err', response.error);
            var attr = {token: response.id};
            if (coupon) attr.coupon = options.coupon;
            view.done('payment', null, attr);
        });
    } else {
        view.done('payment', null, {coupon: options.coupon});
    }
    return false;
};

Modal.prototype.plan = function(ev) {
    var view = this;
    var modal = this.modals.plan;
    var form = App.form(ev.currentTarget);

    if (!form.customer) {
        App.post('/api/customers', {
            user: form.user
        }, function(err, resp) {
            if (err) return view.show('err', err);
            form.customer = resp.id;
            App.user.customerID = resp.id;
            switchplan();
        });
    } else {
        switchplan();
    }

    function switchplan() {

        var body = {
            plan: form.plan
        };

        modal.el.addClass('loading');
        App.put('/api/customers/' + form.customer + '/subscription', body, function(err, subscription) {
            modal.el.removeClass('loading');
            if (err) return view.show('err', err);
            analytics.track((form.op === 'upgrade' ? 'Upgraded' : 'Downgraded') + ' a Subscription', {
                plan: form.plan,
                label: form.plan,
                reason: form.answer || null
            });
            view.done('plan', null, subscription);
        });
    }

    return false;
};

Modal.prototype.card = function(ev) {
    var target = $(ev.currentTarget);
    var type = Stripe.card.cardType(target.val()).toLowerCase().replace(' ', '-');
    if (type != 'unknown') {
        $('.credit-cards span').addClass('disabled');
        $('.credit-cards span.' + type).removeClass('disabled');
    } else {
        $('.credit-cards span').removeClass('disabled');
    }
};

Modal.prototype.slide = function(ev) {
    /* @TODO will prob apply to more than auth modal */
    var modal = this.modals.auth;
    var current = $('.sliding', modal.el).attr('class').match(/active[0-9]+/);
    if (current) $('.sliding', modal.el).removeClass(current[0]);
    var idx = typeof ev === 'string' ? ev : $(ev.currentTarget).attr('href').split('#').pop();
    $('.sliding', modal.el).addClass(idx);
    return false;
};

Modal.prototype.show = function(id, options, callback) {
    // Handle 2-arg calls.
    if ('function' === typeof options) {
        callback = options;
        options = {};
    } else if ('undefined' === typeof options) {
        options = {};
    }
    // Cast string to object to make room for other keys (e.g. callback).
    if ('string' === typeof options) {
        options = { text: options, toString: function() { return this.text; } };
    }
    options.callback = !!callback;
    callback = callback || function() {};

    if (this.modals[id]) return callback(new Error('Modal ' + id + ' already active'));

    var el = id.replace('-', '_') in templates ?
        $(templates[id.replace('-', '_')](options)) :
        $((options.template || App.template('template-modal-' + id))(options));

    var modal = {
        el: el,
        callback: callback
    };

    $('body').addClass('clip');
    this.$el.append(modal.el).addClass('active');
    this.modals[id] = modal;
    this.active = true;
};

Modal.prototype.done = function(id) {
    if (!this.modals[id]) throw new Error('Cannot hide inactive modal.');

    var modal = this.modals[id];
    modal.el.remove();
    modal.callback.apply(this, Array.prototype.slice.call(arguments, 1));
    delete this.modals[id];

    if (!Object.keys(this.modals).length) {
        $('body').removeClass('clip');
        this.$el.removeClass('active');
        this.active = false;
    }
};

// Called from global App keydown.
Modal.prototype.keydown = function(ev) {
    var key = ev.which;
    switch (key) {
    case 13: // enter
        if (this.$('a.ok').size()) return this.ok();
        break;
    case 27: // esc
        if (this.$('a.close').size()) return this.close();
        break;
    }
};

// Called from global App keyup.
Modal.prototype.keyup = function(ev) {};

Modal.prototype.toggle = function(ev) {
    var el = $(ev.currentTarget);
    var target = $(el.attr('href'));

    if (target.is('.hidden')) {
        target.removeClass('hidden');
    } else {
        target.addClass('hidden');
    }

    if (el.is('.js-once')) el.addClass('hidden');
    target.find('input').focus();
    return false;
};

module.exports = Modal;

},{}],5:[function(require,module,exports){
var Nav = Backbone.View.extend({});

Nav.prototype.events = (function() {
    var events = {};
    events['click a.js-dropdown-button'] = 'dropdown';
    events['click a.signin']             = 'signin';
    events['click .js-signout']          = 'signout';
    events['click .js-signup']           = 'signup';
    return events;
})();

Nav.prototype.dropdown = function(ev) {
    var link = $(ev.currentTarget);
    var nav = $('.masthead nav');
    var drop = link.siblings('.js-dropdown-menu');
    if (link.is('.active') || drop.is('.active')) {
        nav.removeClass('active');
        link.removeClass('active');
        drop.removeClass('active');
    } else {
        nav.addClass('active');
        link.addClass('active');
        drop.addClass('active');
    }
    return false;
};

Nav.prototype.signin = function(ev) {
    Views.modal.show('auth', {close: true}, function(err) {
        if (err && err.code !== 'closed') Views.modal.show('err', err);
        if (document.location.pathname === '/plans/') document.location.reload();
    });
    return false;
};

Nav.prototype.signout = function(ev) {
    return App.signout(function(err) {
        if (err) return Views.modal.show('err', err);
        window.location.reload();
    });
};

Nav.prototype.signup = function(ev) {
     analytics.track('Clicked Link', {
      text: "sign up",
      location: "main-navigation",
      intent: "signup"
    });
};


module.exports = Nav;

},{}]},{},[1]);
