import{_ as e,d as t,f as n,g as r,m as i,n as a,p as o}from"./utils-BoE_Ellr.js";import{t as s}from"./circle-check-CCP0jYqO.js";import{t as c}from"./lock-keyhole-IkNicT1y.js";import{A as l,M as u,w as d}from"./index-CQshl6xY.js";import{t as f}from"./scan-face-DK5Nqe9D.js";import{t as p}from"./button-Cy3J_hZW.js";import{t as m}from"./alert-MBkhxE7E.js";import{t as h}from"./progress-D31zd9X_.js";var g={name:`camera`,size:24,node:[[`path`,{d:`M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,key:`18u6gg`}],[`circle`,{cx:`12`,cy:`13`,r:`3`,key:`1vg3eu`}]]};g.node;var _=t(g),v=i(((e,t)=>{t.exports={}})),y=e(o(),1),b=function(e,t){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function x(e,t){function n(){this.constructor=e}b(e,t),e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function S(e,t,n,r){return new(n||=Promise)((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(o,s)}c((r=r.apply(e,t||[])).next())}))}function C(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var w=function(){function e(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return e.prototype.setPlatform=function(e,t){this.platform!=null&&console.warn(`Platform `+this.platformName+` has already been set. Overwriting the platform with `+t+`.`),this.platformName=e,this.platform=t},e.prototype.registerFlag=function(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){var r=this.urlFlags[e];console.warn(`Setting feature override from URL `+e+`: `+r+`.`),this.set(e,r)}},e.prototype.get=function(e){return e in this.flags||(this.flags[e]=this.evaluateFlag(e)),this.flags[e]},e.prototype.getNumber=function(e){return this.get(e)},e.prototype.getBool=function(e){return this.get(e)},e.prototype.getFlags=function(){return this.flags},Object.defineProperty(e.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),e.prototype.set=function(e,t){if(this.flagRegistry[e]==null)throw Error(`Cannot set flag `+e+` as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)},e.prototype.evaluateFlag=function(e){if(this.flagRegistry[e]==null)throw Error(`Cannot evaluate flag '`+e+`': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()},e.prototype.setFlags=function(e){this.flags=Object.assign({},e)},e.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},e.prototype.populateURLFlags=function(){var e=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var t,n,r=(t=this.global.location.search,n={},t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(function(e){var t=[...arguments].slice(1);return T(n,t[0],t[1]),t.join(`=`)})),n);`tfjsflags`in r&&r.tfjsflags.split(`,`).forEach((function(t){var n=t.split(`:`),r=n[0],i=n[1];e.urlFlags[r]=function(e,t){if((t=t.toLowerCase())===`true`||t===`false`)return t===`true`;if(``+ +t===t)return+t;throw Error(`Could not parse value flag value `+t+` for flag `+e+`.`)}(r,i)}))}},e}();function T(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||``)}function E(){return D}var D=null,O=new Map,k=new Map;function A(e,t){var n=F(e,t);return O.get(n)}function j(e){return k.get(e)}function M(e){for(var t=O.entries(),n=[];;){var r=t.next(),i=r.done,a=r.value;if(i)break;var o=a[0],s=a[1];o.split(`_`)[0]===e&&n.push(s)}return n}function N(e){var t=e.kernelName,n=e.backendName,r=F(t,n);if(O.has(r))throw Error(`The kernel '`+t+`' for backend '`+n+`' is already registered`);O.set(r,e)}function P(e){var t=e.kernelName;k.has(t)&&console.warn(`Overriding the gradient for '`+t+`'`),k.set(t,e)}function F(e,t){return t+`_`+e}function ee(e){for(var t=e.length,n=0,r=0;t>0;)r=Math.random()*t|0,n=e[--t],e[t]=e[r],e[r]=n}function te(e,t,n){return Math.max(e,Math.min(t,n))}function ne(e){return e%2==0?e:e+1}function re(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return t}function I(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function L(e,t,n){n===void 0&&(n=``),I(oe(e,t),(function(){return n+` Shapes `+e+` and `+t+` must match`}))}function ie(e){I(e!=null,(function(){return`The input to the tensor constructor must be a non-null value.`}))}function ae(e,t,n){if(t===void 0&&(t=[]),n===void 0&&(n=!1),t??=[],Array.isArray(e)||be(e)&&!n)for(var r=0;r<e.length;++r)ae(e[r],t,n);else t.push(e);return t}function R(e){if(e.length===0)return 1;for(var t=e[0],n=1;n<e.length;n++)t*=e[n];return t}function oe(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function se(e){return e%1==0}function ce(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;var t=Math.exp(2*e);return(t-1)/(t+1)}function le(e){var t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function ue(e,t){return t<=e.length?e:e+` `.repeat(t-e.length)}function de(e,t,n){return t===void 0&&(t=function(e){return 0}),new Promise((function(r,i){var a=0,o=function(){if(e())r();else{a++;var s=t(a);n!=null&&a>=n?i():setTimeout(o,s)}};o()}))}function fe(e,t){for(var n=1,r=-1,i=0;i<e.length;++i)if(e[i]>=0)n*=e[i];else if(e[i]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim `+r+` and dim `+i);r=i}else if(e[i]<0)throw Error(`Shapes can not be < 0. Found `+e[i]+` at dim `+i);if(r===-1){if(t>0&&t!==n)throw Error(`Size(`+t+`) must match the product of shape `+e);return e}if(n===0)throw Error(`Cannot infer the missing size in [`+e+`] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got `+t+` / `+n);var a=e.slice();return a[r]=t/n,a}function pe(e,t){var n=t.length;return I((e=e==null?t.map((function(e,t){return t})):[].concat(e)).every((function(e){return e>=-n&&e<n})),(function(){return`All values in axis param must be in range [-`+n+`, `+n+`) but got axis `+e})),I(e.every((function(e){return se(e)})),(function(){return`All values in axis param must be integers but got axis `+e})),e.map((function(e){return e<0?n+e:e}))}function me(e,t){for(var n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:pe(t,e).sort(),o=0,s=0;s<e.length;++s){if(a!=null){if(a[o]===s&&e[s]!==1)throw Error(`Can't squeeze axis `+s+` since its dim '`+e[s]+`' is not 1`);(a[o]==null||a[o]>s)&&e[s]===1&&(n.push(e[s]),r.push(s)),a[o]<=s&&o++}e[s]!==1&&(n.push(e[s]),r.push(s))}return{newShape:n,keptDims:r}}function he(e,t){var n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else{if(e!==`bool`)throw Error(`Unknown data type `+e);n=new Uint8Array(t)}return n}function ge(e,t){var n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else{if(e!==`string`)throw Error(`Unknown data type `+e);n=Array(t)}return n}function _e(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type `+t+` being uploaded contains `+r+`.`)}}function ve(e){return e===`bool`||e===`complex64`||e===`float32`||e===`int32`||e===`string`}function ye(e,t){return t!==`complex64`&&(t!==`float32`||e===`complex64`)&&(t!==`int32`||e===`float32`||e===`complex64`)&&(t!==`bool`||e!==`bool`)}function be(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function xe(e){if(e===`float32`||e===`int32`)return 4;if(e===`complex64`)return 8;if(e===`bool`)return 1;throw Error(`Unknown dtype `+e)}function Se(e){if(e==null)return 0;var t=0;return e.forEach((function(e){return t+=e.length})),t}function Ce(e){return typeof e==`string`||e instanceof String}function we(e){return typeof e==`boolean`}function Te(e){return typeof e==`number`}function Ee(e){return Array.isArray(e)?Ee(e[0]):e instanceof Float32Array?`float32`:e instanceof Int32Array||e instanceof Uint8Array?`int32`:Te(e)?`float32`:Ce(e)?`string`:we(e)?`bool`:`float32`}function De(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Oe(e,t){for(var n=t;n<e;++n)if(e%n==0)return n;return e}function ke(e){var t=e.length;if(t<2)return[];var n=Array(t-1);n[t-2]=e[t-1];for(var r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Ae(e,t,n){if(t===`string`)throw Error(`Cannot convert a string[] to a TypedArray`);if(Array.isArray(e)&&(e=ae(e)),n&&_e(e,t),function(e,t){return e instanceof Float32Array&&t===`float32`||e instanceof Int32Array&&t===`int32`||e instanceof Uint8Array&&t===`bool`}(e,t))return e;if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`){for(var r=new Uint8Array(e.length),i=0;i<r.length;++i)Math.round(e[i])!==0&&(r[i]=1);return r}throw Error(`Unknown data type `+t)}function je(e,t){if(e.length===0)return t[0];var n=e.reduce((function(e,t){return e*t}));if(n===0)return[];if(n!==t.length)throw Error(`[`+e+`] does not match the input size.`);return function e(t,n,r){var i=[];if(n.length===1)for(var a=n[0],o=0;o<a;o++)i[o]=r[t+o];else{a=n[0];var s=n.slice(1),c=s.reduce((function(e,t){return e*t}));for(o=0;o<a;o++)i[o]=e(t+o*c,s,r)}return i}(0,e,t)}function Me(e,t){for(var n=Ne(e,t),r=0;r<n.length;r++)n[r]=1;return n}function Ne(e,t){if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`)return new Uint8Array(e);throw Error(`Unknown data type `+t)}function Pe(){return E().platform.now()}function Fe(e){e.forEach((function(t){I(Number.isInteger(t)&&t>=0,(function(){return`Tensor must have a shape comprised of positive integers but got shape [`+e+`].`}))}))}function Ie(e,t){return t===void 0&&(t=`utf-8`),t||=`utf-8`,E().platform.encode(e,t)}function Le(e,t){return t===void 0&&(t=`utf-8`),t||=`utf-8`,E().platform.decode(e,t)}function Re(e,t,n){if(t===0)return 0;if(t===1)return e[0];for(var r=e[e.length-1],i=0;i<e.length-1;++i)r+=n[i]*e[i];return r}function ze(e,t,n){if(t===0)return[];if(t===1)return[e];for(var r=Array(t),i=0;i<r.length-1;++i)r[i]=Math.floor(e/n[i]),e-=r[i]*n[i];return r[r.length-1]=e,r}Object.freeze({shuffle:ee,clamp:te,nearestLargerEven:ne,sum:re,randUniform:function(e,t){var n=Math.random();return t*n+(1-n)*e},distSquared:function(e,t){for(var n=0,r=0;r<e.length;r++){var i=Number(e[r])-Number(t[r]);n+=i*i}return n},assert:I,assertShapesMatch:L,assertNonNull:ie,flatten:ae,sizeFromShape:R,isScalarShape:function(e){return e.length===0},arraysEqual:oe,isInt:se,tanh:ce,sizeToSquarishShape:le,createShuffledIndices:function(e){for(var t=new Uint32Array(e),n=0;n<e;++n)t[n]=n;return ee(t),t},rightPad:ue,repeatedTry:de,inferFromImplicitShape:fe,parseAxisParam:pe,squeezeShape:me,getTypedArrayFromDType:he,getArrayFromDType:ge,checkConversionForErrors:_e,isValidDtype:ve,hasEncodingLoss:ye,isTypedArray:be,bytesPerElement:xe,bytesFromStringArray:Se,isString:Ce,isBoolean:we,isNumber:Te,inferDtype:Ee,isFunction:De,nearestDivisor:Oe,computeStrides:ke,toTypedArray:Ae,toNestedArray:je,makeOnesTypedArray:Me,makeZerosTypedArray:Ne,now:Pe,assertNonNegativeIntegerDimensions:Fe,fetch:function(e,t){return E().platform.fetch(e,t)},encodeString:Ie,decodeString:Le,locToIndex:Re,indexToLoc:ze});var Be=function(){function e(e,t){this.backendTimer=e,this.logger=t,t??(this.logger=new Ve)}return e.prototype.profileKernel=function(e,t,n){var r,i=this,a=this.backendTimer.time((function(){r=n()}));return r.forEach((function(n){n.data().then((function(r){(function(e,t,n){if(t!==`float32`)return!1;for(var r=0;r<e.length;r++){var i=e[r];if(isNaN(i)||!isFinite(i))return console.warn(`Found `+i+` in the result of '`+n+`'`),!0}})(r,n.dtype,e),a.then((function(a){var o=``;a.getExtraProfileInfo!=null&&(o=a.getExtraProfileInfo()),i.logger.logKernelProfile(e,n,r,a.kernelMs,t,o)}))}))})),r},e}(),Ve=function(){function e(){}return e.prototype.logKernelProfile=function(e,t,n,r,i,a){var o=typeof r==`number`?ue(r+`ms`,9):r.error,s=ue(e,25),c=t.rank,l=t.size,u=ue(t.shape.toString(),14),d=``;for(var f in i){var p=i[f].shape||t.shape,m=p.length;d+=f+`: `+m+`D `+(m>0?p:``)+` `}console.log(`%c`+s+`	%c`+o+`	%c`+c+`D `+u+`	%c`+l+`	%c`+d+`	%c`+a,`font-weight:bold`,`color:red`,`color:blue`,`color: orange`,`color: green`,`color: steelblue`)},e}(),He=20,Ue=3,We=7;function Ge(e,t,n,r){var i=ke(t),a=function(e,t,n,r){var i=R(t),a=r[r.length-1],o=Array(a).fill(0),s=t.length,c=n===`complex64`?Je(e):e;if(s>1)for(var l=0;l<i/a;l++)for(var u=l*a,d=0;d<a;d++)o[d]=Math.max(o[d],Ke(c[u+d],0,n).length);return o}(e,t,n,i),o=t.length,s=function e(t,n,r,i,a,o){o===void 0&&(o=!0);var s=r===`complex64`?2:1,c=n[0],l=n.length;if(l===0)return r===`complex64`?[Ke(Je(t)[0],0,r)]:r===`bool`?[qe(t[0])]:[t[0].toString()];if(l===1){if(c>He){var u=Ue*s,d=Array.from(t.slice(0,u)),f=Array.from(t.slice((c-Ue)*s,c*s));return r===`complex64`&&(d=Je(d),f=Je(f)),[`[`+d.map((function(e,t){return Ke(e,a[t],r)})).join(`, `)+`, ..., `+f.map((function(e,t){return Ke(e,a[c-Ue+t],r)})).join(`, `)+`]`]}return[`[`+(r===`complex64`?Je(t):Array.from(t)).map((function(e,t){return Ke(e,a[t],r)})).join(`, `)+`]`]}var p=n.slice(1),m=i.slice(1),h=i[0]*s,g=[];if(c>He){for(var _=0;_<Ue;_++){var v=(y=_*h)+h;g.push.apply(g,e(t.slice(y,v),p,r,m,a,!1))}for(g.push(`...`),_=c-Ue;_<c;_++)v=(y=_*h)+h,g.push.apply(g,e(t.slice(y,v),p,r,m,a,_===c-1))}else for(_=0;_<c;_++){var y;v=(y=_*h)+h,g.push.apply(g,e(t.slice(y,v),p,r,m,a,_===c-1))}var b=l===2?`,`:``;for(g[0]=`[`+g[0]+b,_=1;_<g.length-1;_++)g[_]=` `+g[_]+b;var x=`,
`;for(_=2;_<l;_++)x+=`
`;return g[g.length-1]=` `+g[g.length-1]+`]`+(o?``:x),g}(e,t,n,i,a),c=[`Tensor`];return r&&(c.push(`  dtype: `+n),c.push(`  rank: `+o),c.push(`  shape: [`+t+`]`),c.push(`  values:`)),c.push(s.map((function(e){return`    `+e})).join(`
`)),c.join(`
`)}function Ke(e,t,n){return ue(Array.isArray(e)?parseFloat(e[0].toFixed(We))+` + `+parseFloat(e[1].toFixed(We))+`j`:Ce(e)?`'`+e+`'`:n===`bool`?qe(e):parseFloat(e.toFixed(We)).toString(),t)}function qe(e){return e===0?`false`:`true`}function Je(e){for(var t=[],n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var Ye=function(){function e(e,t,n){var r=this;if(this.dtype=t,this.shape=e.slice(),this.size=R(e),n!=null){var i=n.length;I(i===this.size,(function(){return`Length of values '`+i+`' does not match the size inferred by the shape '`+r.size+`'.`}))}if(t===`complex64`)throw Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);this.values=n||ge(t,this.size),this.strides=ke(e)}return e.prototype.set=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];n.length===0&&(n=[0]),I(n.length===this.rank,(function(){return`The number of provided coordinates (`+n.length+`) must match the rank (`+t.rank+`)`}));var i=this.locToIndex(n);this.values[i]=e},e.prototype.get=function(){var e=[...arguments];e.length===0&&(e=[0]);for(var t=0,n=0,r=e;n<r.length;n++){var i=r[n];if(i<0||i>=this.shape[t]){var a=`Requested out of range element at `+e+`.   Buffer shape=`+this.shape;throw Error(a)}t++}for(var o=e[e.length-1],s=0;s<e.length-1;++s)o+=this.strides[s]*e[s];return this.values[o]},e.prototype.locToIndex=function(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];for(var t=e[e.length-1],n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t},e.prototype.indexToLoc=function(e){if(this.rank===0)return[];if(this.rank===1)return[e];for(var t=Array(this.shape.length),n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.toTensor=function(){return Xe().makeTensor(this.values,this.shape,this.dtype)},e}(),Xe=null,z=null,Ze=null,Qe=function(){function e(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||`float32`,this.size=R(e),this.strides=ke(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():`higher`}return e.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},e.prototype.asScalar=function(){return this.throwIfDisposed(),I(this.size===1,(function(){return`The array must have only 1 element.`})),this.reshape([])},e.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},e.prototype.as2D=function(e,t){return this.throwIfDisposed(),this.reshape([e,t])},e.prototype.as3D=function(e,t,n){return this.throwIfDisposed(),this.reshape([e,t,n])},e.prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),this.reshape([e,t,n,r])},e.prototype.as5D=function(e,t,n,r,i){return this.throwIfDisposed(),this.reshape([e,t,n,r,i])},e.prototype.asType=function(e){return this.throwIfDisposed(),z.cast(this,e)},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.buffer=function(){return S(this,void 0,void 0,(function(){var e;return C(this,(function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,z.buffer(this.shape,this.dtype,e)]}}))}))},e.prototype.bufferSync=function(){return z.buffer(this.shape,this.dtype,this.dataSync())},e.prototype.array=function(){return S(this,void 0,void 0,(function(){var e;return C(this,(function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,je(this.shape,e)]}}))}))},e.prototype.arraySync=function(){return je(this.shape,this.dataSync())},e.prototype.data=function(){return S(this,void 0,void 0,(function(){var e,t;return C(this,(function(n){switch(n.label){case 0:return this.throwIfDisposed(),e=Xe().read(this.dataId),this.dtype===`string`?[4,e]:[3,2];case 1:t=n.sent();try{return[2,t.map((function(e){return Le(e)}))]}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}case 2:return[2,e]}}))}))},e.prototype.dataSync=function(){this.throwIfDisposed();var e=Xe().readSync(this.dataId);if(this.dtype===`string`)try{return e.map((function(e){return Le(e)}))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}return e},e.prototype.bytes=function(){return S(this,void 0,void 0,(function(){var e;return C(this,(function(t){switch(t.label){case 0:return this.throwIfDisposed(),[4,Xe().read(this.dataId)];case 1:return e=t.sent(),this.dtype===`string`?[2,e]:[2,new Uint8Array(e.buffer)]}}))}))},e.prototype.dispose=function(){this.isDisposed||(Xe().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),e.prototype.throwIfDisposed=function(){if(this.isDisposed)throw Error(`Tensor is disposed.`)},e.prototype.toFloat=function(){return this.asType(`float32`)},e.prototype.toInt=function(){return this.asType(`int32`)},e.prototype.toBool=function(){return this.asType(`bool`)},e.prototype.print=function(e){return e===void 0&&(e=!1),z.print(this,e)},e.prototype.reshape=function(e){return this.throwIfDisposed(),z.reshape(this,e)},e.prototype.reshapeAs=function(e){return this.throwIfDisposed(),this.reshape(e.shape)},e.prototype.expandDims=function(e){return e===void 0&&(e=0),z.expandDims(this,e)},e.prototype.cumsum=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=!1),n===void 0&&(n=!1),z.cumsum(this,e,t,n)},e.prototype.squeeze=function(e){return this.throwIfDisposed(),z.squeeze(this,e)},e.prototype.clone=function(){return this.throwIfDisposed(),z.clone(this)},e.prototype.oneHot=function(e,t,n){return this.throwIfDisposed(),z.oneHot(this,e,t,n)},e.prototype.toString=function(e){return e===void 0&&(e=!1),Ge(this.dataSync(),this.shape,this.dtype,e)},e.prototype.tile=function(e){return this.throwIfDisposed(),z.tile(this,e)},e.prototype.gather=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),z.gather(this,e,t)},e.prototype.matMul=function(e,t,n){return t===void 0&&(t=!1),n===void 0&&(n=!1),this.throwIfDisposed(),z.matMul(this,e,t,n)},e.prototype.dot=function(e){return this.throwIfDisposed(),z.dot(this,e)},e.prototype.norm=function(e,t,n){return e===void 0&&(e=`euclidean`),t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),z.norm(this,e,t,n)},e.prototype.slice=function(e,t){return this.throwIfDisposed(),z.slice(this,e,t)},e.prototype.reverse=function(e){return this.throwIfDisposed(),z.reverse(this,e)},e.prototype.concat=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),t instanceof e&&(t=[t]),z.concat([this].concat(t),n)},e.prototype.split=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),z.split(this,e,t)},e.prototype.stack=function(e,t){return t===void 0&&(t=0),z.stack([this,e],t)},e.prototype.unstack=function(e){return e===void 0&&(e=0),z.unstack(this,e)},e.prototype.pad=function(e,t){return t===void 0&&(t=0),z.pad(this,e,t)},e.prototype.batchNormalization=function(e,t,n,r,i){return n===void 0&&(n=.001),Ze(`tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon`),this.batchNorm(e,t,i,r,n)},e.prototype.batchNorm=function(e,t,n,r,i){return i===void 0&&(i=.001),this.throwIfDisposed(),z.batchNorm(this,e,t,n,r,i)},e.prototype.all=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),z.all(this,e,t)},e.prototype.any=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),z.any(this,e,t)},e.prototype.logSumExp=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),z.logSumExp(this,e,t)},e.prototype.sum=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),z.sum(this,e,t)},e.prototype.prod=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),z.prod(this,e,t)},e.prototype.mean=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),z.mean(this,e,t)},e.prototype.min=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),z.min(this,e,t)},e.prototype.max=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),z.max(this,e,t)},e.prototype.argMin=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),z.argMin(this,e)},e.prototype.argMax=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),z.argMax(this,e)},e.prototype.cast=function(e){return this.throwIfDisposed(),z.cast(this,e)},e.prototype.add=function(e){return this.throwIfDisposed(),z.add(this,e)},e.prototype.addStrict=function(e){return this.throwIfDisposed(),z.addStrict(this,e)},e.prototype.atan2=function(e){return this.throwIfDisposed(),z.atan2(this,e)},e.prototype.sub=function(e){return this.throwIfDisposed(),z.sub(this,e)},e.prototype.subStrict=function(e){return this.throwIfDisposed(),z.subStrict(this,e)},e.prototype.pow=function(e){return this.throwIfDisposed(),z.pow(this,e)},e.prototype.powStrict=function(e){return this.throwIfDisposed(),z.powStrict(this,e)},e.prototype.mul=function(e){return this.throwIfDisposed(),z.mul(this,e)},e.prototype.mulStrict=function(e){return this.throwIfDisposed(),z.mulStrict(this,e)},e.prototype.div=function(e){return this.throwIfDisposed(),z.div(this,e)},e.prototype.divNoNan=function(e){return this.throwIfDisposed(),z.divNoNan(this,e)},e.prototype.floorDiv=function(e){return this.throwIfDisposed(),z.floorDiv(this,e)},e.prototype.divStrict=function(e){return this.throwIfDisposed(),z.divStrict(this,e)},e.prototype.minimum=function(e){return this.throwIfDisposed(),z.minimum(this,e)},e.prototype.minimumStrict=function(e){return this.throwIfDisposed(),z.minimumStrict(this,e)},e.prototype.maximum=function(e){return this.throwIfDisposed(),z.maximum(this,e)},e.prototype.maximumStrict=function(e){return this.throwIfDisposed(),z.maximumStrict(this,e)},e.prototype.mod=function(e){return this.throwIfDisposed(),z.mod(this,e)},e.prototype.modStrict=function(e){return this.throwIfDisposed(),z.modStrict(this,e)},e.prototype.squaredDifferenceStrict=function(e){return this.throwIfDisposed(),z.squaredDifferenceStrict(this,e)},e.prototype.transpose=function(e){return this.throwIfDisposed(),z.transpose(this,e)},e.prototype.notEqual=function(e){return this.throwIfDisposed(),z.notEqual(this,e)},e.prototype.notEqualStrict=function(e){return this.throwIfDisposed(),z.notEqualStrict(this,e)},e.prototype.less=function(e){return this.throwIfDisposed(),z.less(this,e)},e.prototype.lessStrict=function(e){return this.throwIfDisposed(),z.lessStrict(this,e)},e.prototype.equal=function(e){return this.throwIfDisposed(),z.equal(this,e)},e.prototype.equalStrict=function(e){return this.throwIfDisposed(),z.equalStrict(this,e)},e.prototype.lessEqual=function(e){return this.throwIfDisposed(),z.lessEqual(this,e)},e.prototype.lessEqualStrict=function(e){return this.throwIfDisposed(),z.lessEqualStrict(this,e)},e.prototype.greater=function(e){return this.throwIfDisposed(),z.greater(this,e)},e.prototype.greaterStrict=function(e){return this.throwIfDisposed(),z.greaterStrict(this,e)},e.prototype.greaterEqual=function(e){return this.throwIfDisposed(),z.greaterEqual(this,e)},e.prototype.greaterEqualStrict=function(e){return this.throwIfDisposed(),z.greaterEqualStrict(this,e)},e.prototype.logicalAnd=function(e){return this.throwIfDisposed(),z.logicalAnd(this,e)},e.prototype.logicalOr=function(e){return this.throwIfDisposed(),z.logicalOr(this,e)},e.prototype.logicalNot=function(){return this.throwIfDisposed(),z.logicalNot(this)},e.prototype.logicalXor=function(e){return this.throwIfDisposed(),z.logicalXor(this,e)},e.prototype.where=function(e,t){return this.throwIfDisposed(),z.where(e,this,t)},e.prototype.neg=function(){return this.throwIfDisposed(),z.neg(this)},e.prototype.ceil=function(){return this.throwIfDisposed(),z.ceil(this)},e.prototype.floor=function(){return this.throwIfDisposed(),z.floor(this)},e.prototype.sign=function(){return this.throwIfDisposed(),z.sign(this)},e.prototype.isNaN=function(){return this.throwIfDisposed(),z.isNaN(this)},e.prototype.isInf=function(){return this.throwIfDisposed(),z.isInf(this)},e.prototype.isFinite=function(){return this.throwIfDisposed(),z.isFinite(this)},e.prototype.exp=function(){return this.throwIfDisposed(),z.exp(this)},e.prototype.expm1=function(){return this.throwIfDisposed(),z.expm1(this)},e.prototype.log=function(){return this.throwIfDisposed(),z.log(this)},e.prototype.log1p=function(){return this.throwIfDisposed(),z.log1p(this)},e.prototype.sqrt=function(){return this.throwIfDisposed(),z.sqrt(this)},e.prototype.rsqrt=function(){return this.throwIfDisposed(),z.rsqrt(this)},e.prototype.square=function(){return this.throwIfDisposed(),z.square(this)},e.prototype.reciprocal=function(){return this.throwIfDisposed(),z.reciprocal(this)},e.prototype.abs=function(){return this.throwIfDisposed(),z.abs(this)},e.prototype.clipByValue=function(e,t){return this.throwIfDisposed(),z.clipByValue(this,e,t)},e.prototype.relu=function(){return this.throwIfDisposed(),z.relu(this)},e.prototype.relu6=function(){return this.throwIfDisposed(),z.relu6(this)},e.prototype.elu=function(){return this.throwIfDisposed(),z.elu(this)},e.prototype.selu=function(){return this.throwIfDisposed(),z.selu(this)},e.prototype.leakyRelu=function(e){return e===void 0&&(e=.2),this.throwIfDisposed(),z.leakyRelu(this,e)},e.prototype.prelu=function(e){return this.throwIfDisposed(),z.prelu(this,e)},e.prototype.sigmoid=function(){return this.throwIfDisposed(),z.sigmoid(this)},e.prototype.logSigmoid=function(){return this.throwIfDisposed(),z.logSigmoid(this)},e.prototype.softplus=function(){return this.throwIfDisposed(),z.softplus(this)},e.prototype.zerosLike=function(){return this.throwIfDisposed(),z.zerosLike(this)},e.prototype.onesLike=function(){return this.throwIfDisposed(),z.onesLike(this)},e.prototype.sin=function(){return this.throwIfDisposed(),z.sin(this)},e.prototype.cos=function(){return this.throwIfDisposed(),z.cos(this)},e.prototype.tan=function(){return this.throwIfDisposed(),z.tan(this)},e.prototype.asin=function(){return this.throwIfDisposed(),z.asin(this)},e.prototype.acos=function(){return this.throwIfDisposed(),z.acos(this)},e.prototype.atan=function(){return this.throwIfDisposed(),z.atan(this)},e.prototype.sinh=function(){return this.throwIfDisposed(),z.sinh(this)},e.prototype.cosh=function(){return this.throwIfDisposed(),z.cosh(this)},e.prototype.tanh=function(){return this.throwIfDisposed(),z.tanh(this)},e.prototype.asinh=function(){return this.throwIfDisposed(),z.asinh(this)},e.prototype.acosh=function(){return this.throwIfDisposed(),z.acosh(this)},e.prototype.atanh=function(){return this.throwIfDisposed(),z.atanh(this)},e.prototype.erf=function(){return this.throwIfDisposed(),z.erf(this)},e.prototype.round=function(){return this.throwIfDisposed(),z.round(this)},e.prototype.step=function(e){return e===void 0&&(e=0),this.throwIfDisposed(),z.step(this,e)},e.prototype.softmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),z.softmax(this,e)},e.prototype.logSoftmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),z.logSoftmax(this,e)},e.prototype.resizeBilinear=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),z.image.resizeBilinear(this,e,t)},e.prototype.resizeNearestNeighbor=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),z.image.resizeNearestNeighbor(this,e,t)},e.prototype.conv1d=function(e,t,n,r,i,a){return r===void 0&&(r=`NWC`),i===void 0&&(i=1),this.throwIfDisposed(),z.conv1d(this,e,t,n,r,i,a)},e.prototype.conv2d=function(e,t,n,r,i,a){return r===void 0&&(r=`NHWC`),i===void 0&&(i=[1,1]),this.throwIfDisposed(),z.conv2d(this,e,t,n,r,i,a)},e.prototype.conv2dTranspose=function(e,t,n,r,i){return this.throwIfDisposed(),z.conv2dTranspose(this,e,t,n,r,i)},e.prototype.depthwiseConv2D=function(e,t,n,r,i,a){return r===void 0&&(r=`NHWC`),i===void 0&&(i=[1,1]),this.throwIfDisposed(),z.depthwiseConv2d(this,e,t,n,r,i,a)},e.prototype.separableConv2d=function(e,t,n,r,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a=`NHWC`),this.throwIfDisposed(),z.separableConv2d(this,e,t,n,r,i,a)},e.prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),z.avgPool(this,e,t,n,r)},e.prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),z.maxPool(this,e,t,n,r)},e.prototype.localResponseNormalization=function(e,t,n,r){return e===void 0&&(e=5),t===void 0&&(t=1),n===void 0&&(n=1),r===void 0&&(r=.5),z.localResponseNormalization(this,e,t,n,r)},e.prototype.pool=function(e,t,n,r,i){return this.throwIfDisposed(),z.pool(this,e,t,n,r,i)},e.prototype.variable=function(e,t,n){return e===void 0&&(e=!0),this.throwIfDisposed(),Xe().makeVariable(this,e,t,n)},e.prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),z.unsortedSegmentSum(this,e,t)},e.prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),z.batchToSpaceND(this,e,t)},e.prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),z.spaceToBatchND(this,e,t)},e.prototype.topk=function(e,t){return e===void 0&&(e=1),t===void 0&&(t=!0),this.throwIfDisposed(),z.topk(this,e,t)},e.prototype.stridedSlice=function(e,t,n,r,i,a,o,s){return r===void 0&&(r=0),i===void 0&&(i=0),a===void 0&&(a=0),o===void 0&&(o=0),s===void 0&&(s=0),this.throwIfDisposed(),z.stridedSlice(this,e,t,n,r,i,a,o,s)},e.prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),z.depthToSpace(this,e,t)},e.prototype.fft=function(){return this.throwIfDisposed(),z.spectral.fft(this)},e.prototype.ifft=function(){return this.throwIfDisposed(),z.spectral.ifft(this)},e.prototype.rfft=function(){return this.throwIfDisposed(),z.spectral.rfft(this)},e.prototype.irfft=function(){return this.throwIfDisposed(),z.spectral.irfft(this)},e}();Object.defineProperty(Qe,Symbol.hasInstance,{value:function(e){return!!e&&e.dataId!=null&&e.shape!=null&&e.dtype!=null}});var $e,et,tt,nt,rt,it=function(e){function t(t,n,r,i){var a=e.call(this,t.shape,t.dtype,t.dataId,i)||this;return a.trainable=n,a.name=r,a}return x(t,e),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (`+e.dtype+`) and previous value (`+this.dtype+`) must match`);if(!oe(e.shape,this.shape))throw Error(`shape of the new value (`+e.shape+`) and previous value (`+this.shape+`) must match`);Xe().disposeTensor(this),this.dataId=e.dataId,Xe().incRef(this,null)},t.prototype.dispose=function(){Xe().disposeVariable(this),this.isDisposedInternal=!0},t}(Qe);Object.defineProperty(it,Symbol.hasInstance,{value:function(e){return e instanceof Qe&&e.assign!=null&&e.assign instanceof Function}}),function(e){e.R0=`R0`,e.R1=`R1`,e.R2=`R2`,e.R3=`R3`,e.R4=`R4`,e.R5=`R5`,e.R6=`R6`}($e||={}),function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`int32`,e.complex64=`complex64`}(et||={}),function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`bool`,e.complex64=`complex64`}(tt||={}),function(e){e.float32=`float32`,e.int32=`float32`,e.bool=`float32`,e.complex64=`complex64`}(nt||={}),function(e){e.float32=`complex64`,e.int32=`complex64`,e.bool=`complex64`,e.complex64=`complex64`}(rt||={});var at={float32:nt,int32:et,bool:tt,complex64:rt};function ot(e,t){if(e===`string`||t===`string`){if(e===`string`&&t===`string`)return`string`;throw Error(`Can not upcast `+e+` with `+t)}return at[e][t]}function st(e){return ot(e,`int32`)}function ct(e,t){if(e.dtype===t.dtype)return[e,t];var n=ot(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function lt(e,t){I(e.dtype===t.dtype,(function(){return`The dtypes of the first(`+e.dtype+`) and second(`+t.dtype+`) input must match`}))}function ut(e){var t=[];return function e(t,n,r){if(t!=null){if(t instanceof Qe)return void n.push(t);if(i=t,Array.isArray(i)||typeof i==`object`){var i,a=t;for(var o in a){var s=a[o];r.has(s)||(r.add(s),e(s,n,r))}}}}(e,t,new Set),t}var dt;Object.freeze({makeTypesMatch:ct,assertTypesMatch:lt,isTensorInList:function(e,t){return t.some((function(t){return t.id===e.id}))},getTensorsInContainer:ut});var ft=function(){function e(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return e.prototype.dispose=function(){for(var e in this.registeredVariables)this.registeredVariables[e].dispose()},e}(),pt=function(){function e(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ft}return e.prototype.ready=function(){return S(this,void 0,void 0,(function(){var e,t,n;return C(this,(function(r){switch(r.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then((function(){}))];if(this.backendInstance!=null)return[2];e=this.getSortedBackends(),t=0,r.label=1;case 1:return t<e.length?(n=e[t],[4,this.initializeBackend(n).success]):[3,5];case 2:return r.sent()?[4,this.setBackend(n)]:[3,4];case 3:return r.sent(),[2];case 4:return t++,[3,1];case 5:throw Error(`Could not initialize any backends, all backend initializations failed.`)}}))}))},Object.defineProperty(e.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw Error(`Backend '`+this.backendName+`' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){var e=this.initializeBackendsAndReturnBest(),t=e.name;if(e.asyncInit)throw Error(`The highest priority backend '`+t+`' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance},enumerable:!0,configurable:!0}),e.prototype.backendNames=function(){return Object.keys(this.registryFactory)},e.prototype.findBackend=function(e){return!(e in this.registry)&&(!(e in this.registryFactory)||this.initializeBackend(e).asyncInit)?null:this.registry[e]},e.prototype.findBackendFactory=function(e){return e in this.registryFactory?this.registryFactory[e].factory:null},e.prototype.registerBackend=function(e,t,n){return n===void 0&&(n=1),e in this.registryFactory?(console.warn(e+` backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)},e.prototype.setBackend=function(e){return S(this,void 0,void 0,(function(){var t,n,r;return C(this,(function(i){switch(i.label){case 0:if(this.registryFactory[e]==null)throw Error(`Backend name '`+e+`' not found in registry`);return this.backendName=e,this.registry[e]==null?(this.backendInstance=null,t=this.initializeBackend(e),n=t.success,t.asyncInit?[4,n]:[3,2]):[3,4];case 1:return r=i.sent(),[3,3];case 2:r=n,i.label=3;case 3:if(!r)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Be(this.backendInstance),[2,!0]}}))}))},e.prototype.setupRegisteredKernels=function(){var e=this;M(this.backendName).forEach((function(t){t.setupFunc!=null&&t.setupFunc(e.backendInstance)}))},e.prototype.disposeRegisteredKernels=function(e){var t=this;M(e).forEach((function(n){n.disposeFunc!=null&&n.disposeFunc(t.registry[e])}))},e.prototype.initializeBackend=function(e){var t=this,n=this.registryFactory[e];if(n==null)throw Error(`Cannot initialize backend `+e+`, no registration found.`);try{var r=n.factory();if(Promise.resolve(r)===r){var i=++this.pendingBackendInitId,a=r.then((function(n){return!(i<t.pendingBackendInitId)&&(t.registry[e]=n,t.pendingBackendInit=null,!0)})).catch((function(n){return!(i<t.pendingBackendInitId)&&(t.pendingBackendInit=null,console.warn(`Initialization of backend `+e+` failed`),console.warn(n.stack||n.message),!1)}));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(t){return console.warn(`Initialization of backend `+e+` failed`),console.warn(t.stack||t.message),{success:!1,asyncInit:!1}}},e.prototype.removeBackend=function(e){if(!(e in this.registryFactory))throw Error(e+` backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},e.prototype.getSortedBackends=function(){var e=this;if(Object.keys(this.registryFactory).length===0)throw Error(`No backend found in registry.`);return Object.keys(this.registryFactory).sort((function(t,n){return e.registryFactory[n].priority-e.registryFactory[t].priority}))},e.prototype.initializeBackendsAndReturnBest=function(){for(var e=this.getSortedBackends(),t=0;t<e.length;t++){var n=e[t],r=this.initializeBackend(n),i=r.success,a=r.asyncInit;if(a||i)return{name:n,asyncInit:a}}throw Error(`Could not initialize any backends, all backend initializations failed.`)},e.prototype.moveData=function(e,t){var n=this.state.tensorInfo.get(t),r=n.backend,i=this.readSync(t);r.disposeData(t),n.backend=e,e.move(t,i,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},e.prototype.tidy=function(e,t){var n,r=this,i=null;if(t==null){if(typeof e!=`function`)throw Error(`Please provide a function to tidy()`);t=e}else{if(typeof e!=`string`&&!(e instanceof String))throw Error(`When calling with two arguments, the first argument to tidy() must be a string`);if(typeof t!=`function`)throw Error(`When calling with two arguments, the 2nd argument to tidy() must be a function`);i=e}return this.scopedRun((function(){return r.startScope(i)}),(function(){return r.endScope(n)}),(function(){return(n=t())instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),n}))},e.prototype.scopedRun=function(e,t,n){e();try{var r=n();return t(),r}catch(e){throw t(),e}},e.prototype.nextTensorId=function(){return e.nextTensorId++},e.prototype.nextVariableId=function(){return e.nextVariableId++},e.prototype.clone=function(e){var t=this.makeTensorFromDataId(e.dataId,e.shape,e.dtype),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],(function(e){return{x:function(){return e.toFloat()}}}),[]),t},e.prototype.runKernel=function(e,t,n,r,i){return this.runKernelFunc(null,t,null,e,n,r,i)},e.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool(`IS_TEST`)},e.prototype.checkKernelForMemLeak=function(e,t,n){var r=this.backend.numDataIds(),i=0;n.forEach((function(e){i+=e.dtype===`complex64`?3:1}));var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-i-a;if(o>0)throw Error(`Backend '`+this.backendName+`' has an internal memory leak (`+o+` data ids) after running '`+e+`'`)},e.prototype.runKernelFunc=function(e,t,n,r,i,a,o){var s,c=this;a===void 0&&(a=[]),o===void 0&&(o=[]);var l=[],u=this.isTapeOn();r??=this.state.activeScope==null?``:this.state.activeScope.name;var d,f=function(e){u&&(l=e.map((function(e){return c.keep(c.clone(e))})))},p=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var h,g=A(r,this.backendName);return d=g==null?function(){var t=c.backend.numDataIds();h=c.tidy((function(){return e(c.backend,f)}));var n=Array.isArray(h)?h:[h];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(r,t,n),n}:function(){var e=c.backend.numDataIds();h=g.kernelFunc({inputs:t,attrs:i,backend:c.backend});var n=Array.isArray(h)?h:[h];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(r,e,n);var s=n.map((function(e){var t=e.dataId,n=e.shape,r=e.dtype;return c.makeTensorFromDataId(t,n,r)})),l=s.filter((function(e,t){return o[t]}));return f((a||[]).slice().concat(l)),s},this.scopedRun((function(){return c.state.kernelDepth++}),(function(){return c.state.kernelDepth--}),(function(){s=c.ENV.getBool(`DEBUG`)?c.profiler.profileKernel(r,t,(function(){return d()})):d()})),u&&this.addTapeNode(r,t,s,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:r,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(t).map((function(e){return t[e].shape})),outputShapes:s.map((function(e){return e.shape}))}),Array.isArray(h)?s:s[0]},e.prototype.makeTensor=function(e,t,n,r){if(e==null)throw Error(`Values passed to engine.makeTensor() are null`);n||=`float32`,r||=this.backend;var i=e;n===`string`&&Ce(e[0])&&(i=e.map((function(e){return Ie(e)})));var a=r.write(i,t,n),o=new Qe(t,n,a,this.nextTensorId());if(this.incRef(o,r),n===`string`){var s=this.state.tensorInfo.get(a),c=Se(i);this.state.numBytes+=c-s.bytes,s.bytes=c}return o},e.prototype.makeTensorFromDataId=function(e,t,n,r){var i=new Qe(t,n||=`float32`,e,this.nextTensorId());return this.incRef(i,r),i},e.prototype.makeVariable=function(e,t,n,r){t===void 0&&(t=!0),n||=this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.asType(r));var i=new it(e,t,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw Error(`Variable with name `+i.name+` was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},e.prototype.incRef=function(e,t){var n=this.state.tensorInfo.has(e.dataId)?this.state.tensorInfo.get(e.dataId).refCount:0;if(this.state.numTensors++,e.dtype===`string`&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var r=0;e.dtype!==`complex64`&&e.dtype!==`string`&&(r=e.size*xe(e.dtype)),this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r,refCount:0}),this.state.numBytes+=r}this.state.tensorInfo.get(e.dataId).refCount++,e instanceof it||this.track(e)},e.prototype.disposeTensor=function(e){if(this.state.tensorInfo.has(e.dataId)){this.state.numTensors--,e.dtype===`string`&&this.state.numStringTensors--;var t=this.state.tensorInfo.get(e.dataId);t.refCount<=1?(e.dtype!==`complex64`&&(this.state.numBytes-=t.bytes),this.state.numDataBuffers--,t.backend.disposeData(e.dataId),this.state.tensorInfo.delete(e.dataId)):this.state.tensorInfo.get(e.dataId).refCount--}},e.prototype.disposeVariables=function(){for(var e in this.state.registeredVariables){var t=this.state.registeredVariables[e];this.disposeVariable(t)}},e.prototype.disposeVariable=function(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]},e.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons??=[],e.reasons.push(`Memory usage by string tensors is approximate (2 bytes per character)`)),e},e.prototype.profile=function(e){return S(this,void 0,void 0,(function(){var t,n;return C(this,(function(r){return this.state.profiling=!0,t=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map((function(e){return e.totalBytesSnapshot}))),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]}))}))},e.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},e.prototype.addTapeNode=function(e,t,n,r,i){var a=this,o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:i},s=j(e);s!=null&&(r=s.gradFunc),r!=null&&(o.gradient=function(e){return e=e.map((function(e,t){if(e==null){var r=n[t],i=Ne(r.size,r.dtype);return a.makeTensor(i,r.shape,r.dtype)}return e})),r(e.length>1?e:e[0],i)}),this.state.activeTape.push(o)},e.prototype.keep=function(e){return e.kept=!0,e},e.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},e.prototype.endTape=function(){this.state.gradientDepth--},e.prototype.startScope=function(e){var t={track:[],name:`unnamed scope`,id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t},e.prototype.endScope=function(e){for(var t=this,n=ut(e),r=new Set(n.map((function(e){return e.id}))),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||r.has(a.id)||a.dispose()}var o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach((function(e){e.kept||e.scopeId!==o.id||t.track(e)}))},e.prototype.gradients=function(e,t,n,r){var i=this;if(r===void 0&&(r=!1),I(t.length>0,(function(){return`gradients() received an empty list of xs.`})),n!=null&&n.dtype!==`float32`)throw Error(`dy must have 'float32' dtype, but has '`+n.dtype+`'`);var a=this.scopedRun((function(){return i.startTape()}),(function(){return i.endTape()}),(function(){return i.tidy(`forward`,e)}));I(a instanceof Qe,(function(){return`The result y returned by f() must be a tensor.`}));var o=function(e,t,n){for(var r={},i={},a=0;a<t.length;a++)r[t[a].id]=!0;for(a=0;a<e.length;a++){var o=(m=e[a]).inputs;for(var s in o){for(var c=o[s],l=!1,u=0;u<t.length;u++)if(r[c.id]){m.outputs.forEach((function(e){return r[e.id]=!0})),l=!0,i[m.id]=!0;break}if(l)break}}var d={};d[n.id]=!0;var f={};for(a=e.length-1;a>=0;a--)for(o=(m=e[a]).inputs,u=0;u<m.outputs.length;u++)if(d[m.outputs[u].id]){for(var s in o)d[o[s].id]=!0,f[m.id]=!0;break}var p=[];for(a=0;a<e.length;a++){var m;if(i[(m=e[a]).id]&&f[m.id]){var h={};for(var s in m.inputs){var g=m.inputs[s];r[g.id]&&(h[s]=g)}var _=Object.assign({},m);_.inputs=h,_.outputs=m.outputs,p.push(_)}}return p}(this.state.activeTape,t,a);if(!r&&o.length===0&&t.length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.`);return this.tidy(`backward`,(function(){var e,r,s={};s[a.id]=n??(e=a.shape,r=Me(R(e),`float32`),B.makeTensor(r,e,`float32`)),function(e,t,n){for(var r=function(r){var i=t[r],a=[];if(i.outputs.forEach((function(t){var n=e[t.id];n==null?a.push(null):a.push(n)})),i.gradient==null)throw Error(`Cannot compute gradient: gradient function not found for `+i.kernelName+`.`);var o=i.gradient(a),s=function(t){if(!(t in o))throw Error(`Cannot backprop through input `+t+`. Available gradients found: `+Object.keys(o)+`.`);var r=n((function(){return o[t]()}));if(r.dtype!==`float32`)throw Error(`Error in gradient for op `+i.kernelName+`. The gradient of input `+t+` must have 'float32' dtype, but has '`+r.dtype+`'`);var a=i.inputs[t];if(!oe(r.shape,a.shape))throw Error(`Error in gradient for op `+i.kernelName+`. The gradient of input '`+t+`' has shape '`+r.shape+`', which does not match the shape of the input '`+a.shape+`'`);if(e[a.id]==null)e[a.id]=r;else{var s=e[a.id];e[a.id]=s.add(r),s.dispose()}};for(var c in i.inputs)s(c)},i=t.length-1;i>=0;i--)r(i)}(s,o,(function(e){return i.tidy(e)}));var c=t.map((function(e){return s[e.id]}));return i.state.gradientDepth===0&&(i.state.activeTape.forEach((function(e){for(var t=0,n=e.saved;t<n.length;t++)n[t].dispose()})),i.state.activeTape=null),{value:a,grads:c}}))},e.prototype.customGrad=function(e){var t=this;return I(De(e),(function(){return`The f passed in customGrad(f) must be a function.`})),function(){var n,r=[...arguments];I(r.every((function(e){return e instanceof Qe})),(function(){return`The args passed in customGrad(f)(x1, x2,...) must all be tensors`}));var i={};return r.forEach((function(e,t){i[t]=e})),t.runKernelFunc((function(t,i){return I((n=e.apply(void 0,r.concat([i]))).value instanceof Qe,(function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"})),I(De(n.gradFunc),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."})),n.value}),i,(function(e,t){var i=n.gradFunc(e,t),a=Array.isArray(i)?i:[i];I(a.length===r.length,(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."})),I(a.every((function(e){return e instanceof Qe})),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."}));var o={};return a.forEach((function(e,t){o[t]=function(){return e}})),o}))}},e.prototype.readSync=function(e){return this.state.tensorInfo.get(e).backend.readSync(e)},e.prototype.read=function(e){return this.state.tensorInfo.get(e).backend.read(e)},e.prototype.time=function(e){return S(this,void 0,void 0,(function(){var t,n;return C(this,(function(r){switch(r.label){case 0:return t=Pe(),[4,this.backend.time(e)];case 1:return(n=r.sent()).wallMs=Pe()-t,[2,n]}}))}))},e.prototype.track=function(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e},Object.defineProperty(e.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),e.prototype.reset=function(){for(var e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ft,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},e.nextTensorId=0,e.nextVariableId=0,e}(),B=function(){var e=function(){if(dt==null){var e=void 0;if(typeof window<`u`)e=window;else if(typeof global<`u`)e=global;else if(typeof process<`u`)e=process;else{if(typeof self>`u`)throw Error(`Could not find a global object`);e=self}dt=e}return dt}();return e._tfengine??=new pt(new w(e)),function(e){D=e}(e._tfengine.ENV),Xe=function(){return e._tfengine},e._tfengine}();function mt(){return typeof window<`u`&&window.document!=null||typeof WorkerGlobalScope<`u`}var ht=E();ht.registerFlag(`DEBUG`,(function(){return!1}),(function(e){e&&console.warn(`Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.`)})),ht.registerFlag(`IS_BROWSER`,(function(){return mt()})),ht.registerFlag(`IS_NODE`,(function(){return typeof process<`u`&&process.versions!==void 0&&process.versions.node!==void 0})),ht.registerFlag(`IS_CHROME`,(function(){return typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})),ht.registerFlag(`PROD`,(function(){return!1})),ht.registerFlag(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`,(function(){return ht.getBool(`DEBUG`)})),ht.registerFlag(`DEPRECATION_WARNINGS_ENABLED`,(function(){return!0})),ht.registerFlag(`IS_TEST`,(function(){return!1}));var gt,_t,vt,yt={},bt={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function xt(e,t){yt[e]=t}function St(e){e in yt||(yt[e]=function(e){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);var t=function(e){if(typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}(e);return t.addEventListener(`webglcontextlost`,(function(t){t.preventDefault(),delete yt[e]}),!1),e===1?t.getContext(`webgl`,bt)||t.getContext(`experimental-webgl`,bt):t.getContext(`webgl2`,bt)}(e));var t=yt[e];return t.isContextLost()?(delete yt[e],St(e)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),yt[e])}function Ct(e,t){return[t,e]}function wt(e){var t=R(e);return le(Math.ceil(t/4))}function Tt(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function Et(e,t){var n,r,i,a,o,s,c,l,u,d=e;return E().getNumber(`WEBGL_VERSION`)===2?(n=d.R32F,r=d.R16F,i=d.RGBA16F,a=d.RGBA32F,o=d.RED,s=4,c=1,l=d.HALF_FLOAT,u=d.FLOAT):(n=e.RGBA,r=e.RGBA,i=e.RGBA,a=d.RGBA,o=e.RGBA,s=4,c=4,l=t==null?null:t.HALF_FLOAT_OES,u=e.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:i,internalFormatPackedFloat:a,textureFormatFloat:o,downloadTextureFormat:e.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:c,textureTypeHalfFloat:l,textureTypeFloat:u}}function V(e,t,n){var r=n();return t&&function(e){var t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+At(e,t))}(e),r}(function(e){e[e.DENSE=0]=`DENSE`,e[e.SHARED_BATCH=1]=`SHARED_BATCH`})(gt||={}),function(e){e[e.RENDER=0]=`RENDER`,e[e.UPLOAD=1]=`UPLOAD`,e[e.PIXELS=2]=`PIXELS`,e[e.DOWNLOAD=3]=`DOWNLOAD`}(_t||={}),function(e){e[e.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,e[e.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,e[e.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,e[e.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,e[e.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`}(vt||={});var Dt=5.96e-8,Ot=65504;function kt(e){return!!(E().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||Dt<Math.abs(e)&&Math.abs(e)<Ot)}function At(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code `+t}}function jt(e,t,n){return en(e,t,(function(){return e.getExtension(n)}),`Extension "`+n+`" not supported on this browser.`)}function Mt(e,t,n){var r=en(e,t,(function(){return e.createShader(e.VERTEX_SHADER)}),`Unable to create vertex WebGLShader.`);if(V(e,t,(function(){return e.shaderSource(r,n)})),V(e,t,(function(){return e.compileShader(r)})),!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(r)),Error(`Failed to compile vertex shader.`);return r}function Nt(e,t,n){var r=en(e,t,(function(){return e.createShader(e.FRAGMENT_SHADER)}),`Unable to create fragment WebGLShader.`);if(V(e,t,(function(){return e.shaderSource(r,n)})),V(e,t,(function(){return e.compileShader(r)})),!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw function(e,t){var n=It.exec(t);if(n==null)return console.log(`Couldn't parse line number in error: `+t),void console.log(e);for(var r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map((function(e,t){return ue((t+1).toString(),a)+e})),s=0,c=0;c<o.length;c++)s=Math.max(o[c].length,s);var l=o.slice(0,r-1),u=o.slice(r-1,r),d=o.slice(r);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c `+ue(u[0],s),`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(d.join(`
`))}(n,e.getShaderInfoLog(r)),Error(`Failed to compile fragment shader.`);return r}var Pt,Ft,It=/ERROR: [0-9]+:([0-9]+):/g;function Lt(e,t){return en(e,t,(function(){return e.createProgram()}),`Unable to create WebGLProgram.`)}function Rt(e,t,n){if(V(e,t,(function(){return e.linkProgram(n)})),!1===e.getProgramParameter(n,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(n)),Error(`Failed to link vertex and fragment shaders.`)}function zt(e,t,n){if(V(e,t,(function(){return e.validateProgram(n)})),!1===e.getProgramParameter(n,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(n)),Error(`Shader program validation failed.`)}function Bt(e,t,n){var r=en(e,t,(function(){return e.createBuffer()}),`Unable to create WebGLBuffer`);return V(e,t,(function(){return e.bindBuffer(e.ARRAY_BUFFER,r)})),V(e,t,(function(){return e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW)})),r}function Vt(e,t,n){var r=en(e,t,(function(){return e.createBuffer()}),`Unable to create WebGLBuffer`);return V(e,t,(function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)})),V(e,t,(function(){return e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW)})),r}function Ht(e,t){return en(e,t,(function(){return e.createTexture()}),`Unable to create WebGLTexture.`)}function Ut(e,t){var n=E().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){var r=`[`+e+`x`+t+`]`;throw Error(`Requested texture size `+r+` is invalid.`)}if(e>n||t>n)throw r=`[`+e+`x`+t+`]`,Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU `+(`[`+n+`x`+n+`]`)+`.`)}function Wt(e,t){return en(e,t,(function(){return e.createFramebuffer()}),`Unable to create WebGLFramebuffer.`)}function Gt(e,t,n,r,i,a,o,s){var c=e.getAttribLocation(n,r);return c!==-1&&(V(e,t,(function(){return e.bindBuffer(e.ARRAY_BUFFER,i)})),V(e,t,(function(){return e.vertexAttribPointer(c,a,e.FLOAT,!1,o,s)})),V(e,t,(function(){return e.enableVertexAttribArray(c)})),!0)}function Kt(e,t,n,r){tn(e,r),V(e,t,(function(){return e.activeTexture(e.TEXTURE0+r)})),V(e,t,(function(){return e.bindTexture(e.TEXTURE_2D,n)}))}function qt(e,t,n,r){return en(e,t,(function(){return e.getUniformLocation(n,r)}),`uniform "`+r+`" not present in program.`)}function Jt(e,t,n){return e.getUniformLocation(t,n)}function Yt(e,t,n,r,i,a){V(e,t,(function(){return Kt(e,t,r,a)})),V(e,t,(function(){return e.uniform1i(i,a)}))}function Xt(e,t,n,r){V(e,t,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,r)})),V(e,t,(function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}))}function Zt(e,t,n){V(e,t,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,n)})),V(e,t,(function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)}))}function Qt(e){var t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+$t(e,t))}function $t(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error `+t}}function en(e,t,n,r){var i=V(e,t,(function(){return n()}));if(i==null)throw Error(r);return i}function tn(e,t){var n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n)throw Error(`textureUnit must be in `+(`[gl.TEXTURE0, gl.TEXTURE`+n+`]`)+`.`)}function nn(e,t){return t===void 0&&(t=2),R(e.slice(0,e.length-t))}function rn(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function an(e){var t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[nn(e)].concat(rn(e))),t}function on(e,t){var n;t===void 0&&(t=!1);var r=E().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);t&&(r*=2,(e=e.map((function(t,n){return n>=e.length-2?ne(e[n]):e[n]}))).length===1&&(e=[2,e[0]])),e.length!==2&&(e=me(e).newShape);var i=R(e);if(e.length<=1&&i<=r)return[1,i];if(e.length===2&&e[0]<=r&&e[1]<=r)return e;if(e.length===3&&e[0]*e[1]<=r&&e[2]<=r)return[e[0]*e[1],e[2]];if(e.length===3&&e[0]<=r&&e[1]*e[2]<=r)return[e[0],e[1]*e[2]];if(e.length===4&&e[0]*e[1]*e[2]<=r&&e[3]<=r)return[e[0]*e[1]*e[2],e[3]];if(e.length===4&&e[0]<=r&&e[1]*e[2]*e[3]<=r)return[e[0],e[1]*e[2]*e[3]];if(t){var a=nn(e),o=2,s=2;return e.length&&(o=(n=rn(e))[0],s=n[1]),le(i=o/2*a*(s/2)).map((function(e){return 2*e}))}return le(i)}function sn(e){return e%2==0}function cn(e,t){if(oe(e=e.slice(-2),t=t.slice(-2))||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){var n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r||sn(n)&&sn(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&sn(e[0])&&sn(t[0])}function ln(e){if(Pt==null){var t=St(e);Pt=t.getParameter(t.MAX_TEXTURE_SIZE)}return Pt}function un(e){if(Ft==null){var t=St(e);Ft=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Ft)}function dn(e){if(e===0)return 0;var t=St(e);return fn(t,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!fn(t,`EXT_disjoint_timer_query`)}function fn(e,t){return e.getExtension(t)!=null}function pn(e){try{if(St(e)!=null)return!0}catch{return!1}return!1}function mn(e){if(e===0)return!1;var t=St(e);if(e===1){if(!fn(t,`OES_texture_float`))return!1}else if(!fn(t,`EXT_color_buffer_float`))return!1;return gn(t)}function hn(e){if(e===0)return!1;var t=St(e);return e===1?!!fn(t,`OES_texture_float`)&&!!fn(t,`WEBGL_color_buffer_float`)&&gn(t):fn(t,`EXT_color_buffer_float`)?gn(t):fn(t,`EXT_color_buffer_half_float`)?function(e,t){var n=Et(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);var i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);var a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}(t,t.getExtension(`EXT_color_buffer_half_float`)):!1}function gn(e){var t=Et(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);var i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function _n(e){return e===2&&St(e).fenceSync!=null}var vn=Object.freeze({callAndCheck:V,canBeRepresented:kt,getWebGLErrorMessage:At,getExtensionOrThrow:jt,createVertexShader:Mt,createFragmentShader:Nt,createProgram:Lt,linkProgram:Rt,validateProgram:zt,createStaticVertexBuffer:Bt,createStaticIndexBuffer:Vt,getNumChannels:function(){return E().getNumber(`WEBGL_VERSION`)===2?1:4},createTexture:Ht,validateTextureSize:Ut,createFramebuffer:Wt,bindVertexBufferToProgramAttribute:Gt,bindTextureUnit:Kt,unbindTextureUnit:function(e,t,n){tn(e,n),V(e,t,(function(){return e.activeTexture(e.TEXTURE0+n)})),V(e,t,(function(){return e.bindTexture(e.TEXTURE_2D,null)}))},getProgramUniformLocationOrThrow:qt,getProgramUniformLocation:Jt,bindTextureToProgramUniformSampler:Yt,bindCanvasToFramebuffer:function(e,t){V(e,t,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)})),V(e,t,(function(){return e.viewport(0,0,e.canvas.width,e.canvas.height)})),V(e,t,(function(){return e.scissor(0,0,e.canvas.width,e.canvas.height)}))},bindColorTextureToFramebuffer:Xt,unbindColorTextureFromFramebuffer:Zt,validateFramebuffer:Qt,getFramebufferErrorMessage:$t,getBatchDim:nn,getRowsCols:rn,getShapeAs3D:an,getTextureShapeFromLogicalShape:on,isReshapeFree:cn,getWebGLMaxTextureSize:ln,resetMaxTextureSize:function(){Pt=null},resetMaxTexturesInShader:function(){Ft=null},getMaxTexturesInShader:un,getWebGLDisjointQueryTimerVersion:dn,hasExtension:fn,isWebGLVersionEnabled:pn,isCapableOfRenderingToFloatTexture:mn,isDownloadFloatTextureEnabled:hn,isWebGLFenceEnabled:_n}),H=E();function yn(e){E().getBool(`DEPRECATION_WARNINGS_ENABLED`)&&console.warn(e+` You can disable deprecation warnings with tf.disableDeprecationWarnings().`)}function U(e,t){return B.tidy(e,t)}function bn(e){ut(e).forEach((function(e){return e.dispose()}))}function xn(e){return B.keep(e)}function Sn(){var e=[...arguments];E().getBool(`IS_TEST`)||console.warn.apply(console,e)}function Cn(e,t){var n=e;if(be(e))return t===`string`?[]:[e.length];if(!Array.isArray(e))return[];for(var r=[];Array.isArray(n)||be(n)&&t!==`string`;)r.push(n.length),n=n[0];return Array.isArray(e)&&E().getBool(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`)&&function e(t,n,r){if(r||=[],!Array.isArray(t)&&!be(t))return void I(n.length===0,(function(){return`Element arr[`+r.join(`][`)+`] is a primitive, but should be an array/TypedArray of `+n[0]+` elements`}));I(n.length>0,(function(){return`Element arr[`+r.join(`][`)+`] should be a primitive, but is an array of `+t.length+` elements`})),I(t.length===n[0],(function(){return`Element arr[`+r.join(`][`)+`] should have `+n[0]+` elements, but has `+t.length+` elements`}));for(var i=n.slice(1),a=0;a<t.length;++a)e(t[a],i,r.concat(a))}(e,r,[]),r}function wn(e,t,n,r){if(e!=null&&(e!==`numeric`&&e!==t||e===`numeric`&&t===`string`))throw Error(`Argument '`+n+`' passed to '`+r+`' must be `+e+` tensor, but got `+t+` tensor`)}function W(e,t,n,r){if(r===void 0&&(r=`numeric`),e instanceof Qe)return wn(r,e.dtype,t,n),e;var i=Ee(e);if(i!==`string`&&[`bool`,`int32`,`float32`].indexOf(r)>=0&&(i=r),wn(r,i,t,n),e==null||!be(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`){var a=e==null?`null`:e.constructor.name;throw Error(`Argument '`+t+`' passed to '`+n+`' must be a Tensor or TensorLike, but got '`+a+`'`)}var o=Cn(e,i);be(e)||Array.isArray(e)||(e=[e]);var s=i===`string`?ae(e,[],!0):Ae(e,i,E().getBool(`DEBUG`));return B.makeTensor(s,o,i)}function Tn(e,t,n,r){if(r===void 0&&(r=`numeric`),!Array.isArray(e))throw Error(`Argument `+t+` passed to `+n+" must be a `Tensor[]` or `TensorLike[]`");return e.map((function(e,r){return W(e,t+`[`+r+`]`,n)}),r)}function En(e,t){for(var n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Dn(e,t,n){for(var r=e.length+t.length,i=[],a=0,o=0,s=0;s<r;s++)n.indexOf(s)===-1?i.push(e[a++]):i.push(t[o++]);return i}function On(e,t){for(var n=[],r=e.length,i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map((function(t){return e[t]}))]}function kn(e,t){return Dn(e,t.map((function(e){return 1})),t)}function An(e,t,n){I(En(t,n),(function(){return e+` supports only inner-most axes for now. Got axes `+t+` and rank-`+n+` input.`}))}function jn(e,t){if(En(e,t))return null;for(var n=[],r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach((function(e){return n.push(e)})),n}function Mn(e){return e.map((function(e,t){return[t,e]})).sort((function(e,t){return e[1]-t[1]})).map((function(e){return e[0]}))}function Nn(e,t){for(var n=[],r=t-e;r<t;++r)n.push(r);return n}function Pn(e,t){var n=e[0].length;e.forEach((function(e,t){I(e.length===n,(function(){return`Error in concat`+n+`D: rank of tensors[`+t+`] must be the same as the rank of the rest (`+n+`)`}))})),I(t>=0&&t<n,(function(){return`Error in concat`+n+`D: axis must be between 0 and `+(n-1)+`.`}));var r=e[0];e.forEach((function(e,i){for(var a=0;a<n;a++)I(a===t||e[a]===r[a],(function(){return`Error in concat`+n+`D: Shape of tensors[`+i+`] (`+e+`) does not match the shape of the rest (`+r+`) along the non-concatenated axis `+i+`.`}))}))}function Fn(e,t){for(var n=e[0].slice(),r=1;r<e.length;r++)n[t]+=e[r][t];return n}function G(e){var t=Object.keys(e);if(t.length!==1)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with `+t.length+` keys.`);var n=t[0],r=e[n];n.endsWith(`_`)&&(n=n.substring(0,n.length-1));var i=function(){var e=[...arguments];B.startScope(n);try{var t=r.apply(void 0,e);return t instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),B.endScope(t),t}catch(e){throw B.endScope(null),e}};return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}H.registerFlag(`HAS_WEBGL`,(function(){return H.getNumber(`WEBGL_VERSION`)>0})),H.registerFlag(`WEBGL_VERSION`,(function(){return pn(2)?2:+!!pn(1)})),H.registerFlag(`WEBGL_BUFFER_SUPPORTED`,(function(){return H.get(`WEBGL_VERSION`)===2})),H.registerFlag(`WEBGL_CPU_FORWARD`,(function(){return!0})),H.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,(function(){return!1})),H.registerFlag(`WEBGL_PACK`,(function(){return H.getBool(`HAS_WEBGL`)})),H.registerFlag(`WEBGL_PACK_NORMALIZATION`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_PACK_CLIP`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,(function(){return!1})),H.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_PACK_REDUCE`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_LAZILY_UNPACK`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_CONV_IM2COL`,(function(){return H.getBool(`WEBGL_PACK`)})),H.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,(function(){return ln(H.getNumber(`WEBGL_VERSION`))})),H.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,(function(){return un(H.getNumber(`WEBGL_VERSION`))})),H.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,(function(){var e=H.getNumber(`WEBGL_VERSION`);return e===0?0:dn(e)})),H.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,(function(){return H.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0&&(e=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))));var e})),H.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,(function(){return mn(H.getNumber(`WEBGL_VERSION`))})),H.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,(function(){return!H.getBool(`WEBGL_FORCE_F16_TEXTURES`)&&H.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)})),H.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,(function(){return hn(H.getNumber(`WEBGL_VERSION`))})),H.registerFlag(`WEBGL_FENCE_API_ENABLED`,(function(){return _n(H.getNumber(`WEBGL_VERSION`))})),H.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,(function(){return H.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0})),Ze=yn;var In=G({complex_:function(e,t){var n=W(e,`real`,`complex`),r=W(t,`imag`,`complex`);return L(n.shape,r.shape,`real and imag shapes, `+n.shape+` and `+r.shape+`, must match in call to tf.complex().`),B.runKernelFunc((function(e){return e.complex(n,r)}),{$real:n,$imag:r})}}),Ln=G({real_:function(e){var t=W(e,`input`,`real`);return B.runKernelFunc((function(e){return e.real(t)}),{$input:t})}}),Rn=G({imag_:function(e){var t=W(e,`input`,`imag`);return B.runKernelFunc((function(e){return e.imag(t)}),{$input:t})}});function zn(e,t,n){return Bn(e,t,Cn(e,n),n)}function Bn(e,t,n,r){if(r??=Ee(e),r===`complex64`)throw Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);if(!be(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`)throw Error(`values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray`);if(t!=null){Fe(t);var i=R(t),a=R(n);I(i===a,(function(){return`Based on the provided shape, [`+t+`], the tensor should have `+i+` values but has `+a}));for(var o=0;o<n.length;++o){var s=n[o],c=o!==n.length-1||s!==R(t.slice(o));I(n[o]===t[o]||!c,(function(){return`Error creating a new Tensor. Inferred shape (`+n+`) does not match the provided shape (`+t+`). `}))}}return be(e)||Array.isArray(e)||(e=[e]),t||=n,e=r===`string`?ae(e,[],!0):Ae(e,r,E().getBool(`DEBUG`)),B.makeTensor(e,t,r)}function K(e,t){if((be(e)&&t!==`string`||Array.isArray(e))&&t!==`complex64`)throw Error(`Error creating a new Scalar: value must be a primitive (number|boolean|string)`);if(t===`string`&&be(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Bn(e,[],[],t)}function Vn(e,t){ie(e);var n=Cn(e,t);if(n.length!==1)throw Error(`tensor1d() requires values to be a flat/TypedArray`);return Bn(e,null,n,t)}function Hn(e,t,n){if(ie(e),t!=null&&t.length!==2)throw Error(`tensor2d() requires shape to have two numbers`);var r=Cn(e,n);if(r.length!==2&&r.length!==1)throw Error(`tensor2d() requires values to be number[][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Bn(e,t,r,n)}function Un(e,t,n){if(ie(e),t!=null&&t.length!==3)throw Error(`tensor3d() requires shape to have three numbers`);var r=Cn(e,n);if(r.length!==3&&r.length!==1)throw Error(`tensor3d() requires values to be number[][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return Bn(e,t,r,n)}function Wn(e,t,n){if(ie(e),t!=null&&t.length!==4)throw Error(`tensor4d() requires shape to have four numbers`);var r=Cn(e,n);if(r.length!==4&&r.length!==1)throw Error(`tensor4d() requires values to be number[][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return Bn(e,t,r,n)}function Gn(e,t,n){if(ie(e),t!=null&&t.length!==5)throw Error(`tensor5d() requires shape to have five numbers`);var r=Cn(e,n);if(r.length!==5&&r.length!==1)throw Error(`tensor5d() requires values to be number[][][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor5d() requires shape to be provided when `values` are a flat array");return Bn(e,t,r,n)}function Kn(e,t,n){if(ie(e),t!=null&&t.length!==6)throw Error(`tensor6d() requires shape to have six numbers`);var r=Cn(e,n);if(r.length!==6&&r.length!==1)throw Error(`tensor6d() requires values to be number[][][][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor6d() requires shape to be provided when `values` are a flat array");return Bn(e,t||=r,r,n)}function qn(e,t,n,r){return t===void 0&&(t=!0),B.makeVariable(e,t,n,r)}function Jn(e,t){if(t===void 0&&(t=`float32`),t===`complex64`)return In(Jn(e,`float32`),Yn(e,`float32`));var n=Me(R(e),t);return B.makeTensor(n,e,t)}function Yn(e,t){if(t===void 0&&(t=`float32`),t===`complex64`)return In(Yn(e,`float32`),Yn(e,`float32`));var n=Ne(R(e),t);return B.makeTensor(n,e,t)}function Xn(e,t,n){return B.runKernelFunc((function(r){return r.fill(e,t,n)}),{})}function Zn(e,t,n){if(n<=0)throw Error(`The number of values should be positive.`);return B.runKernelFunc((function(r){return r.linspace(e,t,n)}),{})}function Qn(e,t,n,r){if(n===void 0&&(n=1),r===void 0&&(r=`float32`),n===0)throw Error(`Cannot have a step of zero`);if(e===t||e<t&&n<0||t<e&&n>1)return Yn([0],r);var i=Ne(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),i[0]=e;for(var a=1;a<i.length;a++)i[a]=i[a-1]+n;return Vn(i,r)}var $n=G({onesLike_:function(e){var t=W(e,`x`,`onesLike`);return t.dtype===`complex64`?In($n(Ln(t)),er(Rn(t))):B.runKernelFunc((function(e){return e.onesLike(t)}),{$x:t},(function(e,t){return{$x:function(){return er(e)}}}))}}),er=G({zerosLike_:function(e){var t=W(e,`x`,`zerosLike`);return B.runKernelFunc((function(e){return e.zerosLike(t)}),{$x:t},(function(e,t){return{$x:function(){return er(e)}}}))}}),tr=G({concat_:function(e,t){t===void 0&&(t=0),I(e.length>=1,(function(){return`Pass at least one tensor to concat`}));var n=Tn(e,`tensors`,`concat`);n[0].dtype===`complex64`&&n.forEach((function(e){if(e.dtype!==`complex64`)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+e.dtype+`. `)})),t=pe(t,n[0].shape)[0];var r=Fn(n.map((function(e){return e.shape})),t);if(R(r)===0)return zn([],r);if((n=n.filter((function(e){return e.size>0}))).length===1)return n[0];var i=n.map((function(e){return e.shape}));Pn(i,t);var a=n,o={axis:t};return B.runKernelFunc((function(e){return e.concat(n,t)}),a,(function(e){return or(e,i.map((function(e){return e[t]})),t).map((function(e){return function(){return e}}))}),`Concat`,o)}}),nr=G({concat1d_:function(e){return tr(e,0)}}),rr=G({concat2d_:function(e,t){return tr(e,t)}}),ir=G({concat3d_:function(e,t){return tr(e,t)}}),ar=G({concat4d_:function(e,t){return tr(e,t)}}),or=G({split_:function(e,t,n){n===void 0&&(n=0);var r,i=W(e,`x`,`split`);return n=pe(n,i.shape)[0],typeof t==`number`?(I(i.shape[n]%t==0,(function(){return`Number of splits must evenly divide the axis.`})),r=Array(t).fill(i.shape[n]/t)):(I(i.shape[n]===t.reduce((function(e,t){return e+t})),(function(){return`The sum of sizes must match the size of the axis dimension.`})),r=t),B.runKernelFunc((function(e){return e.split(i,r,n)}),{$x:i},(function(e){return{$x:function(){return tr(e,n)}}}))}});function sr(e,t){return e(t={exports:{}},t.exports),t.exports}var cr=sr((function(e){(function(e,t,n){function r(e){var t,n=this,r=(t=4022871197,function(e){e=e.toString();for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t)}return 23283064365386963e-26*(t>>>0)});n.next=function(){var e=2091639*n.s0+23283064365386963e-26*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(` `),n.s1=r(` `),n.s2=r(` `),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new r(e),a=t&&t.state,o=n.next;return o.int32=function(){return 4294967296*n.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.alea=a})(0,e,!1)})),lr=sr((function(e){(function(e,t,n){function r(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.xor128=a})(0,e,!1)})),ur=sr((function(e){(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.xorwow=a})(0,e,!1)})),dr=sr((function(e){(function(e,t,n){function r(e){var t=this;t.next=function(){var e,n,r=t.x,i=t.i;return e=r[i],n=(e^=e>>>7)^e<<24,n^=(e=r[i+1&7])^e>>>10,n^=(e=r[i+3&7])^e>>>3,n^=(e=r[i+4&7])^e<<7,e=r[i+7&7],n^=(e^=e<<13)^e<<9,r[i]=n,t.i=i+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.x&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.xorshift7=a})(0,e,!1)})),fr=sr((function(e){(function(e,t,n){function r(e){var t=this;t.next=function(){var e,n,r=t.w,i=t.X,a=t.i;return t.w=r=r+1640531527|0,n=i[a+34&127],e=i[a=a+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=i[a]=n^e,t.i=a,n+(r^r>>>16)|0},function(e,t){var n,r,i,a,o,s=[],c=128;for(t===(0|t)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,i=(n=s[127&a]^=r+o)==0?i+1:0);for(i>=128&&(s[127&(t&&t.length||0)]=-1),i=127,a=512;a>0;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.X&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.xor4096=a})(0,e,!1)})),pr=sr((function(e){(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.tychei=a})(0,e,!1)})),mr=sr((function(e){(function(t,n){var r,i=this,a=256,o=6,s=`random`,c=n.pow(a,o),l=n.pow(2,52),u=2*l,d=a-1;function f(e,d,f){var _=[],v=h(function e(t,n){var r,i=[],a=typeof t;if(n&&a==`object`)for(r in t)try{i.push(e(t[r],n-1))}catch{}return i.length?i:a==`string`?t:t+`\0`}((d=d==1?{entropy:!0}:d||{}).entropy?[e,g(t)]:e??function(){try{var e;return r&&(e=r.randomBytes)?e=e(a):(e=new Uint8Array(a),(i.crypto||i.msCrypto).getRandomValues(e)),g(e)}catch{var n=i.navigator,o=n&&n.plugins;return[+new Date,i,o,i.screen,g(t)]}}(),3),_),y=new p(_),b=function(){for(var e=y.g(o),t=c,n=0;e<l;)e=(e+n)*a,t*=a,n=y.g(1);for(;e>=u;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return 0|y.g(4)},b.quick=function(){return y.g(4)/4294967296},b.double=b,h(g(y.S),t),(d.pass||f||function(e,t,r,i){return i&&(i.S&&m(i,y),e.state=function(){return m(y,{})}),r?(n[s]=e,t):e})(b,v,`global`in d?d.global:this==n,d.state)}function p(e){var t,n=e.length,r=this,i=0,o=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);i<a;)s[i]=i++;for(i=0;i<a;i++)s[i]=s[o=d&o+e[i%n]+(t=s[i])],s[o]=t;(r.g=function(e){for(var t,n=0,i=r.i,o=r.j,s=r.S;e--;)t=s[i=d&i+1],n=n*a+s[d&(s[i]=s[o=d&o+t])+(s[o]=t)];return r.i=i,r.j=o,n})(a)}function m(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function h(e,t){for(var n,r=e+``,i=0;i<r.length;)t[d&i]=d&(n^=19*t[d&i])+r.charCodeAt(i++);return g(t)}function g(e){return String.fromCharCode.apply(0,e)}if(n[`seed`+s]=f,h(n.random(),t),e.exports){e.exports=f;try{r=v()}catch{}}})([],Math)}));mr.alea=cr,mr.xor128=lr,mr.xorwow=ur,mr.xorshift7=dr,mr.xor4096=fr,mr.tychei=pr;var hr=mr.alea,gr=function(){function e(e,t,n,r,i){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=hr(a.toString())}return e.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e=this.nextVal;return this.nextVal=NaN,e}for(var t,n,r=!1;!r;){var i=void 0,a=void 0,o=void 0;do o=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(o>=1||o===0);var s=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*i*s,n=this.mean+this.stdDev*a*s,this.truncated&&!this.isValidTruncated(t)||(r=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)},e.prototype.convertValue=function(e){return this.dtype==null||this.dtype===`float32`?e:Math.round(e)},e.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},e}(),_r=function(){function e(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;var i=r||Math.random();this.randu=hr(i.toString()),this.randn=new gr(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}return e.prototype.nextValue=function(){for(var e,t,n,r,i,a;;){do r=this.randn.nextValue(),a=1+this.c*r;while(a<=0);if(a*=a*a,t=1-.331*(e=r*r)*e,n=.5*e+this.d*(1-a+Math.log(a)),(i=this.randu())<t||Math.log(i)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=this.randu()**(1/this.alpha)),this.convertValue(a)},e.prototype.convertValue=function(e){return this.dtype===`float32`?e:Math.round(e)},e}(),vr=function(){function e(e,t,n,r){var i=this;if(e===void 0&&(e=0),t===void 0&&(t=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype===`float32`},this.min=e,this.range=t-e,this.dtype=n,r??=Math.random(),typeof r==`number`&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between `+e+` - `+t+` <= 1 and dtype is not float`);this.random=hr(r)}return e.prototype.convertValue=function(e){return this.canReturnFloat()?e:Math.round(e)},e.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},e}();function q(e,t,n){return t===void 0&&(t=`float32`),t||=`float32`,Fe(e),new Ye(e,t,n)}function yr(e,t){t===void 0&&(t=!1),console.log(e.toString(t))}var br=G({batchToSpaceND_:function(e,t,n){var r=W(e,`x`,`batchToSpaceND`),i=t.reduce((function(e,t){return e*t}));return I(r.rank>=1+t.length,(function(){return`input rank is `+r.rank+` but should be > than blockShape.length `+t.length})),I(n.length===t.length,(function(){return`crops.length is `+n.length+` but should be equal to blockShape.length  `+t.length})),I(r.shape[0]%i==0,(function(){return`input tensor batch is `+r.shape[0]+` but is not divisible by the product of the elements of blockShape `+t.join(` * `)+` === `+i})),B.runKernelFunc((function(e){return e.batchToSpaceND(r,t,n)}),{$x:r},(function(e){return{$x:function(){return e.spaceToBatchND(t,n)}}}))}}),xr=G({broadcastTo_:function(e,t){var n=W(e,`broadcastTo`,`x`),r=n.shape;if(t.some((function(e){return!(e>0)||e%1!=0})))throw Error(`broadcastTo(): Invalid broadcast shape [`+t+`].`);if(t.length<n.rank)throw Error(`broadcastTo(): shape.length=`+t.length+` < input.rank=`+n.rank+`.`);if(t.length>n.rank){for(var i=n.shape.slice();i.length<t.length;)i.unshift(1);n=n.reshape(i)}for(var a=Array.from(t),o=t.length-1;o>=0;o--)if(n.shape[o]===t[o])a[o]=1;else if(n.shape[o]!==1)throw Error(`broadcastTo(): [`+r+`] cannot be broadcast to [`+t+`].`);var s=a.map((function(e,t){return e>1?t:-1})).filter((function(e){return e>=0}));return s.length===0?n.clone():B.runKernelFunc((function(e){return e.tile(n,a)}),{input:n},(function(e){return{input:function(){return e.sum(s,!0)}}}))}}),Sr=G({cast_:function(e,t){var n=W(e,`x`,`cast`);if(!ve(t))throw Error(`Failed to cast to unknown dtype `+t);if(t===`string`&&n.dtype!==`string`||t!==`string`&&n.dtype===`string`)throw Error(`Only strings can be casted to strings`);var r={dtype:t};return B.runKernelFunc((function(e){return e.cast(n,t)}),{x:n},(function(e){return{x:function(){return e.clone()}}}),`Cast`,r)}}),Cr=G({clone_:function(e){var t=W(e,`x`,`clone`,null);return B.runKernelFunc((function(){return B.makeTensorFromDataId(t.dataId,t.shape,t.dtype)}),{$x:t},(function(e){return{$x:function(){return e.toFloat()}}}))}}),wr=G({cumsum_:function(e,t,n,r){t===void 0&&(t=0),n===void 0&&(n=!1),r===void 0&&(r=!1);var i=W(e,`x`,`cumsum`),a=jn([t|=0],i.rank),o=i;a!=null&&(o=i.transpose(a));var s=Nn(1,i.rank)[0],c=B.runKernelFunc((function(e){return e.cumsum(o,s,n,r)}),{permutedX:o},(function(e){return{permutedX:function(){return e.cumsum(t,n,!r)}}}));return a!=null&&(c=c.transpose(a)),c}}),Tr=G({depthToSpace_:function(e,t,n){n===void 0&&(n=`NHWC`);var r=W(e,`x`,`depthToSpace`),i=n===`NHWC`?r.shape[1]:r.shape[2],a=n===`NHWC`?r.shape[2]:r.shape[3],o=n===`NHWC`?r.shape[3]:r.shape[1];return I(i*t>=0,(function(){return`Negative dimension size caused by overflow when multiplying
      `+i+` and `+t+`  for depthToSpace with input shape
      `+r.shape})),I(a*t>=0,(function(){return`Negative dimension size caused by overflow when multiplying
      `+a+` and `+t+` for depthToSpace with input shape
          `+r.shape})),I(o%(t*t)==0,(function(){return`Dimension size must be evenly divisible by `+t*t+` but is `+o+` for depthToSpace with input shape `+r.shape})),B.runKernelFunc((function(e){return e.depthToSpace(r,t,n)}),{$x:r})}}),Er=G({expandDims_:function(e,t){t===void 0&&(t=0);var n=W(e,`x`,`expandDims`,null);I(t<=n.rank,(function(){return`Axis must be <= rank of the tensor`}));var r=n.shape.slice();return t<0&&(I(-(n.rank+1)<=t,(function(){return`Axis must be in the interval [`+-(n.rank+1)+`, `+n.rank+`]`})),t=n.rank+t+1),r.splice(t,0,1),zr(n,r)}}),Dr=G({eye_:function(e,t,n,r){r===void 0&&(r=`float32`),t??=e;for(var i=q([e,t],r),a=e<=t?e:t,o=0;o<a;++o)i.set(1,o,o);var s=i.toTensor().as2D(e,t);if(n==null)return s;if(n.length===1)return Ur(Er(s,0),[n[0],1,1]);if(n.length===2)return Ur(Er(Er(s,0),0),[n[0],n[1],1,1]);if(n.length===3)return Ur(Er(Er(Er(s,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received `+n.length+`D.`)}}),Or=G({multinomial_:function(e,t,n,r){r===void 0&&(r=!1);var i=W(e,`logits`,`multinomial`),a=i.size,o=i.rank;if(a<2)throw Error(`Error in multinomial: you need at least 2 outcomes, but got `+a+`.`);if(o>2)throw Error(`Rank of probabilities must be 1 or 2, but is `+o);n||=Math.random();var s=o===1?i.as2D(1,-1):i,c=B.runKernelFunc((function(e){return e.multinomial(s,r,t,n)}),{logits2D:s});return o===1?c.as1D():c}}),kr=G({oneHot_:function(e,t,n,r){if(n===void 0&&(n=1),r===void 0&&(r=0),t<2)throw Error(`Error in oneHot: depth must be >=2, but it is `+t);var i=W(e,`indices`,`oneHot`,`int32`),a=i.shape.concat([t]);return i=i.flatten(),B.runKernelFunc((function(e){return e.oneHot(i,t,n,r)}),{$indices:i},(function(e){return{$indices:function(){return Yn(i.shape,`float32`)}}})).reshape(a)}}),Ar=G({pad_:function(e,t,n){n===void 0&&(n=0);var r=W(e,`x`,`pad`);if(r.rank===0)throw Error(`pad(scalar) is not defined. Pass non-scalar to pad`);var i={paddings:t,constantValue:n};return B.runKernelFunc((function(e){return e.pad(r,t,n)}),{x:r},(function(e){var n=t.map((function(e){return e[0]}));return{x:function(){return e.slice(n,r.shape)}}}),`PadV2`,i)}}),jr=G({pad1d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===2,(function(){return`Invalid number of paddings. Must be length of 2.`})),Ar(e,[t],n)}}),Mr=G({pad2d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===2&&t[0].length===2&&t[1].length===2,(function(){return`Invalid number of paddings. Must be length of 2 each.`})),Ar(e,t,n)}}),Nr=G({pad3d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,(function(){return`Invalid number of paddings. Must be length of 2 each.`})),Ar(e,t,n)}}),Pr=G({pad4d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,(function(){return`Invalid number of paddings. Must be length of 2 each.`})),Ar(e,t,n)}}),Fr=G({rand_:function(e,t,n){var r=R(e),i=null;if(n==null||n===`float32`)i=new Float32Array(r);else if(n===`int32`)i=new Int32Array(r);else{if(n!==`bool`)throw Error(`Unknown data type `+n);i=new Uint8Array(r)}for(var a=0;a<r;a++)i[a]=t();return B.makeTensor(i,e,n)}}),Ir=G({randomNormal_:function(e,t,n,r,i){if(t===void 0&&(t=0),n===void 0&&(n=1),r!=null&&r===`bool`)throw Error(`Unsupported data type `+r);for(var a=new gr(t,n,r,!1,i),o=q(e,r),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),Lr=G({randomGamma_:function(e,t,n,r,i){if(n===void 0&&(n=1),r===void 0&&(r=`float32`),n??=1,r??=`float32`,r!==`float32`&&r!==`int32`)throw Error(`Unsupported data type `+r);for(var a=new _r(t,n,r,i),o=q(e,r),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),Rr=G({randomUniform_:function(e,t,n,r,i){t===void 0&&(t=0),n===void 0&&(n=1),r===void 0&&(r=`float32`);for(var a=q(e,r),o=new vr(t,n,null,i),s=0;s<a.values.length;s++)a.values[s]=o.nextValue();return a.toTensor()}}),zr=G({reshape_:function(e,t){var n=W(e,`x`,`reshape`,null);t=fe(t,n.size),I(n.size===R(t),(function(){return`new shape and old shape must have the same number of elements.`}));var r={shape:t};return B.runKernelFunc((function(e){return e.reshape(n,t)}),{x:n},(function(e){return{x:function(){return e.reshape(n.shape)}}}),`Reshape`,r)}}),Br=G({spaceToBatchND_:function(e,t,n){var r=W(e,`x`,`spaceToBatchND`);return I(r.rank>=1+t.length,(function(){return`input rank `+r.rank+` should be > than [blockShape] `+t.length})),I(n.length===t.length,(function(){return`paddings.shape[0] `+n.length+` must be equal to [blockShape] `+t.length})),I(r.shape.reduce((function(e,r,i){return i>0&&i<=t.length?e&&(r+n[i-1][0]+n[i-1][1])%t[i-1]==0:e}),!0),(function(){return`input spatial dimensions `+r.shape.slice(1)+` with paddings `+n.toString()+` must be divisible by blockShapes `+t.toString()})),B.runKernelFunc((function(e){return e.spaceToBatchND(r,t,n)}),{$x:r},(function(e){return{$x:function(){return e.batchToSpaceND(t,n)}}}))}}),Vr=G({squeeze_:function(e,t){var n=W(e,`x`,`squeeze`);return zr(n,me(n.shape,t).newShape)}}),Hr=G({stack_:function(e,t){t===void 0&&(t=0);var n=Tn(e,`tensors`,`stack`);if(I(n.length>=1,(function(){return`Pass at least one tensor to tf.stack`})),n.length===1)return n[0].expandDims(t);var r=n[0].rank,i=n[0].shape,a=n[0].dtype;return I(t<=r,(function(){return`Axis must be <= rank of the tensor`})),n.forEach((function(e){L(i,e.shape,`All tensors passed to stack must have matching shapes`)})),n.forEach((function(e){I(a===e.dtype,(function(){return`All tensors passed to stack must have matching dtypes`}))})),tr(n.map((function(e){return e.expandDims(t)})),t)}}),Ur=G({tile_:function(e,t){var n=W(e,`x`,`tile`,null);I(n.rank===t.length,(function(){return`Error in transpose: rank of input `+n.rank+` must match length of reps `+t+`.`}));var r=[n],i={reps:t};return B.runKernelFunc((function(e,r){var i=e.tile(n,t);return r([n]),i}),{x:n},(function(e,n){var r=n[0];return{x:function(){var n=er(r);if(r.rank===1)for(var i=0;i<t[0];++i)n=n.add(e.slice([i*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(i=0;i<t[0];++i)for(var a=0;a<t[1];++a)n=n.add(e.slice([i*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(i=0;i<t[0];++i)for(a=0;a<t[1];++a)for(var o=0;o<t[2];++o)n=n.add(e.slice([i*r.shape[0],a*r.shape[1],o*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(r.rank!==4)throw Error(`Gradient for tile operation is not implemented for rank-`+r.rank+` tensors yet.`);for(i=0;i<t[0];++i)for(a=0;a<t[1];++a)for(o=0;o<t[2];++o)for(var s=0;s<t[3];++s)n=n.add(e.slice([i*r.shape[0],a*r.shape[1],o*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return n}}}),`Tile`,i,r)}}),Wr=G({truncatedNormal_:function(e,t,n,r,i){if(t===void 0&&(t=0),n===void 0&&(n=1),r!=null&&r===`bool`)throw Error(`Unsupported data type `+r);for(var a=new gr(t,n,r,!0,i),o=q(e,r),s=0;s<o.values.length;s++)o.values[s]=a.nextValue();return o.toTensor()}}),Gr=G({unstack_:function(e,t){t===void 0&&(t=0),t||=0;var n=W(e,`x`,`unstack`);I(t>=-n.shape.length&&t<n.shape.length,(function(){return`Axis = `+t+` is not in [-`+n.shape.length+`, `+n.shape.length+`)`})),t<0&&(t+=n.shape.length);var r={axis:t};return B.runKernelFunc((function(e){return e.unstack(n,t)}),{x:n},(function(e){return{x:function(){return Hr(e,t)}}}),`Unpack`,r)}}),Kr=function(e,t){return S(this,void 0,void 0,(function(){var n,r,i,a,o,s,c,l,u,d;return C(this,(function(f){switch(f.label){case 0:return n=W(e,`x`,`setdiff1d`),r=W(t,`y`,`setdiff1d`),I(n.dtype===r.dtype,(function(){return`x and y should have the same dtype, but got x (`+n.dtype+`) and y (`+r.dtype+`).`})),I(n.rank===1,(function(){return`x should be 1D tensor, but got x (`+n.shape+`).`})),I(r.rank===1,(function(){return`y should be 1D tensor, but got y (`+r.shape+`).`})),[4,n.data()];case 1:return i=f.sent(),[4,r.data()];case 2:for(a=f.sent(),o=new Set(a),s=0,u=0;u<i.length;u++)o.has(i[u])||s++;for(c=new Ye([s],n.dtype),l=new Ye([s],`int32`),u=0,d=0;u<i.length;u++)o.has(i[u])||(c.values[d]=i[u],l.values[d]=u,d++);return[2,[c.toTensor(),l.toTensor()]]}}))}))};function qr(e,t,n,r){r===void 0&&(r=!0);var i=[];if(r)(i=i.concat(t.slice(0))).push(e[0]/n),i=i.concat(e.slice(1));else{i=i.concat(e[0]);for(var a=t.length,o=0;o<a;++o)i=i.concat([e[o+1]/t[o],t[o]]);i=i.concat(e.slice(a+1))}return i}function Jr(e,t,n){n===void 0&&(n=!0);var r=[];if(n){r.push(t);for(var i=t+1;i<e;++i)i<=2*t?(r.push(i),r.push(i-(t+1))):r.push(i)}else{var a=[],o=[];for(i=1;i<e;++i)i>=2*t+1||i%2==1?o.push(i):a.push(i);r.push.apply(r,a),r.push(0),r.push.apply(r,o)}return r}function Yr(e,t,n,r){r===void 0&&(r=!0);var i=[];r?i.push(e[0]/n):i.push(e[0]*n);for(var a=1;a<e.length;++a)a<=t.length?r?i.push(t[a-1]*e[a]):i.push(e[a]/t[a-1]):i.push(e[a]);return i}function Xr(e,t){for(var n=[0],r=0;r<t;++r)n.push(e[r][0]);return n}function Zr(e,t,n){for(var r=e.slice(0,1),i=0;i<n;++i)r.push(e[i+1]-t[i][0]-t[i][1]);return r}function Qr(e,t){if(e.rank<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was `+e.rank+`.`);if(t.rank<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was `+t.rank+`.`);if(t.dtype!==`int32`)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was `+t.dtype+`.`);if(t.shape[t.rank-1]>e.rank)throw Error(`index innermost dimension length must be <= tensor rank; saw: `+t.shape[t.rank-1]+` vs. `+e.rank);if(e.size===0)throw Error(`Requested more than 0 entries, but input is empty. Input shape: `+e.shape+`.`);for(var n=t.shape,r=n[n.length-1],i=1,a=0;a<n.length-1;++a)i*=n[a];var o=e.shape,s=n.slice();s.pop();var c=1;for(a=r;a<e.rank;++a)c*=o[a],s.push(o[a]);var l=ke(e.shape).map((function(e){return e/c})).concat([1]).slice(0,r);return[s,i,c,l]}Object.freeze({prepareAndValidate:Qr});var $r=30;function ei(e){return e<=$r?e:Oe(e,Math.floor(Math.sqrt(e)))}function ti(e,t,n){var r=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: `+n.shape+`, indices.shape: `+t.shape+`, shape: `+e+`, sliceDim: `+r+`, and batchDim: `+i+`.`;if(n.rank<i)throw Error(a+` update.rank < `+i+`. `);if(e.length<r+(n.rank-i))throw Error(a+` Output shape length < `+(r+(n.rank-i)));if(n.rank!==i+e.length-r)throw Error(a+` update.rank != `+(i+e.length-r));for(var o=0;o<i;++o)if(n.shape[o]!==t.shape[o])throw Error(a+` updates.shape[`+o+`] (`+n.shape[o]+`) != indices.shape[`+o+`] (`+t.shape[o]+`).`);for(o=0;o<n.rank-i;++o)if(n.shape[o+i]!==e[o+r])throw Error(a+` updates.shape[`+(o+i)+`] (`+n.shape[o+i]+`) != shape[`+(o+i)+`] (`+e[o+i]+`)`)}function ni(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was `+t.rank+`.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was `+e.rank+`.`);if(t.dtype!==`int32`)throw Error(`The dtype of 'indices' should be int32, but got dtype: `+t.dtype);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: `+n);if(n.length===0){if(t.size===0)throw Error(`Indices specified for empty output. indices shape: `+t.shape);if(e.size===0)throw Error(`Updates specified for empty output. updates shape: `+e.shape)}ti(n,t,e)}function ri(e,t,n){for(var r=t.shape.length,i=r>1?t.shape[r-1]:1,a=n.length,o=1,s=i;s<a;++s)o*=n[s];var c=i<1?1:i;return{sliceRank:i,numUpdates:R(t.shape)/c,sliceSize:o,strides:ke(n.slice(0,i)).concat([1]),outputSize:R(n)}}Object.freeze({validateUpdateShape:ti,validateInput:ni,calculateShapes:ri});function ii(e,t,n){I(e.rank===t.length,(function(){return`Error in slice`+e.rank+`D: Length of begin `+t+` must match the rank of the array (`+e.rank+`).`})),I(e.rank===n.length,(function(){return`Error in slice`+e.rank+`D: Length of size `+n+` must match the rank of the array (`+e.rank+`).`}));for(var r=function(r){I(t[r]+n[r]<=e.shape[r],(function(){return`Error in slice`+e.rank+`D: begin[`+r+`] + size[`+r+`] (`+(t[r]+n[r])+`) would overflow input.shape[`+r+`] (`+e.shape[r]+`)`}))},i=0;i<e.rank;++i)r(i)}function ai(e){for(var t=[],n=0;e>0;)1&e&&t.push(n),e/=2,n++;return t}function oi(e,t,n){for(var r=[],i=0;i<e.length;i++)r[i]=Math.ceil((t[i]-e[i])/n[i]);return r}function si(e,t,n,r,i){var a=t[i],o=n[i]||1;(e&1<<i||a==null)&&(a=o>0?-(2**53-1):2**53-1);var s=r[i];return a<0&&(a+=s),a=te(0,a,s-1)}function ci(e,t,n,r,i){var a=t[i],o=n[i]||1;(e&1<<i||a==null)&&(a=o>0?2**53-1:-(2**53-1));var s=r[i];return a<0&&(a+=s),a=o>0?te(0,a,s):te(-1,a,s-1)}function li(e,t,n){for(var r=n.length,i=0;i<n.length;i++)if(n[i]>1){r=i;break}for(i=r+1;i<n.length;i++)if(t[i]>0||n[i]!==e[i])return!1;return!0}function ui(e,t){for(var n=e.length>0?e[e.length-1]:1,r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}Object.freeze({assertParamsValid:ii,maskToAxes:ai,computeOutShape:oi,startForAxis:si,stopForAxis:ci,isSliceContinous:li,computeFlatOffset:ui});function di(e,t){I(De(e),(function(){return`The f passed in variableGrads(f) must be a function`})),I(t==null||Array.isArray(t)&&t.every((function(e){return e instanceof it})),(function(){return`The varList passed in variableGrads(f, varList) must be an array of variables`}));var n=t!=null;if(!n)for(var r in t=[],B.registeredVariables)t.push(B.registeredVariables[r]);var i=n?t.filter((function(e){return!e.trainable})):null,a=t.length;I((t=t.filter((function(e){return e.trainable}))).length>0,(function(){return`variableGrads() expects at least one of the input variables to be trainable, but none of the `+a+` variables is trainable.`}));var o=B.gradients(e,t,null,!0),s=o.value,c=o.grads;I(c.some((function(e){return e!=null})),(function(){return`Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().`})),I(s.rank===0,(function(){return`The f passed in variableGrads(f) must return a scalar, but it returned a rank-`+s.rank+` tensor`}));var l={};return t.forEach((function(e,t){c[t]!=null&&(l[e.name]=c[t])})),i?.forEach((function(e){return l[e.name]=null})),{value:s,grads:l}}function fi(e){return B.customGrad(e)}var pi=G({softmax_:function(e,t){t===void 0&&(t=-1);var n=W(e,`logits`,`softmax`,`float32`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank `+n.rank+` and dim was `+t);return B.runKernelFunc((function(e,r){var i=e.softmax(n,t);return r([i]),i}),{logits:n},(function(e,n){var r=n[0],i=e.mul(r);return{logits:function(){return i.sub(i.sum([t],!0).mul(r))}}}),`Softmax`,{dim:t},[],[!0])}}),mi=G({logSoftmax_:function(e,t){t===void 0&&(t=-1);var n=W(e,`logits`,`logSoftmax`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank `+n.rank+` and axis was `+t);return fi((function(e,n){var r=e.max(t,!0),i=e.sub(r),a=i.toFloat().sub(i.exp().sum(t,!0).log());return n([a]),{value:a,gradFunc:function(e,n){var r=n[0].exp();return e.sub(e.sum(t,!0).mul(r))}}}))(n)}}),hi=function(){function e(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}return e.prototype.get=function(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)},e.prototype.set=function(e,t){this.dataIdsCount++,this.data.set(e,t)},e.prototype.has=function(e){return this.data.has(e)},e.prototype.delete=function(e){return this.dataIdsCount--,this.data.delete(e)},e.prototype.numDataIds=function(){return this.dataIdsCount},e}(),gi=function(){function e(){}return e.prototype.time=function(e){return J(`time`)},e.prototype.read=function(e){return J(`read`)},e.prototype.readSync=function(e){return J(`readSync`)},e.prototype.numDataIds=function(){return J(`numDataIds`)},e.prototype.disposeData=function(e){return J(`disposeData`)},e.prototype.write=function(e,t,n){return J(`write`)},e.prototype.move=function(e,t,n,r){return J(`move`)},e.prototype.memory=function(){return J(`memory`)},e.prototype.floatPrecision=function(){return J(`floatPrecision`)},e.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},e.prototype.batchMatMul=function(e,t,n,r){return J(`batchMatMul`)},e.prototype.fusedBatchMatMul=function(e){return e.a,e.b,e.transposeA,e.transposeB,e.bias,e.activation,e.preluActivationWeights,J(`fusedBatchMatMul`)},e.prototype.slice=function(e,t,n){return J(`slice`)},e.prototype.stridedSlice=function(e,t,n,r){return J(`stridedSlice`)},e.prototype.unstack=function(e,t){return J(`unstack`)},e.prototype.reverse=function(e,t){return J(`reverse`)},e.prototype.concat=function(e,t){return J(`concat`)},e.prototype.neg=function(e){return J(`neg`)},e.prototype.add=function(e,t){return J(`add`)},e.prototype.addN=function(e){return J(`addN`)},e.prototype.subtract=function(e,t){return J(`subtract`)},e.prototype.multiply=function(e,t){return J(`multiply`)},e.prototype.realDivide=function(e,t){return J(`realDivide`)},e.prototype.floorDiv=function(e,t){return J(`floorDiv`)},e.prototype.sum=function(e,t){return J(`sum`)},e.prototype.prod=function(e,t){return J(`prod`)},e.prototype.unsortedSegmentSum=function(e,t,n){return J(`unsortedSegmentSum`)},e.prototype.argMin=function(e,t){return J(`argMin`)},e.prototype.argMax=function(e,t){return J(`argMax`)},e.prototype.equal=function(e,t){return J(`equal`)},e.prototype.notEqual=function(e,t){return J(`notEqual`)},e.prototype.less=function(e,t){return J(`less`)},e.prototype.lessEqual=function(e,t){return J(`lessEqual`)},e.prototype.greater=function(e,t){return J(`greater`)},e.prototype.greaterEqual=function(e,t){return J(`greaterEqual`)},e.prototype.logicalNot=function(e){return J(`logicalNot`)},e.prototype.logicalAnd=function(e,t){return J(`logicalAnd`)},e.prototype.logicalOr=function(e,t){return J(`logicalOr`)},e.prototype.where=function(e){return J(`where`)},e.prototype.select=function(e,t,n){return J(`select`)},e.prototype.topk=function(e,t,n){return J(`topk`)},e.prototype.min=function(e,t){return J(`min`)},e.prototype.minimum=function(e,t){return J(`minimum`)},e.prototype.mod=function(e,t){return J(`mod`)},e.prototype.max=function(e,t){return J(`max`)},e.prototype.maximum=function(e,t){return J(`maximum`)},e.prototype.all=function(e,t){return J(`all`)},e.prototype.any=function(e,t){return J(`any`)},e.prototype.squaredDifference=function(e,t){return J(`squaredDifference`)},e.prototype.ceil=function(e){return J(`ceil`)},e.prototype.floor=function(e){return J(`floor`)},e.prototype.round=function(e){return J(`round`)},e.prototype.sign=function(e){return J(`sign`)},e.prototype.isNaN=function(e){return J(`isNaN`)},e.prototype.isInf=function(e){return J(`isInf`)},e.prototype.isFinite=function(e){return J(`isFinite`)},e.prototype.pow=function(e,t){return J(`pow`)},e.prototype.exp=function(e){return J(`exp`)},e.prototype.expm1=function(e){return J(`expm1`)},e.prototype.softmax=function(e,t){return J(`softmax`)},e.prototype.log=function(e){return J(`log`)},e.prototype.log1p=function(e){return J(`log1p`)},e.prototype.sqrt=function(e){return J(`sqrt`)},e.prototype.rsqrt=function(e){return J(`rsqrt`)},e.prototype.square=function(e){return J(`square`)},e.prototype.reciprocal=function(e){return J(`reciprocal`)},e.prototype.relu=function(e){return J(`relu`)},e.prototype.relu6=function(e){return J(`relu6`)},e.prototype.prelu=function(e,t){return J(`prelu`)},e.prototype.elu=function(e){return J(`elu`)},e.prototype.eluDer=function(e,t){return J(`eluDer`)},e.prototype.selu=function(e){return J(`selu`)},e.prototype.int=function(e){return J(`int`)},e.prototype.clip=function(e,t,n){return J(`clip`)},e.prototype.abs=function(e){return J(`abs`)},e.prototype.complexAbs=function(e){return J(`complexAbs`)},e.prototype.sigmoid=function(e){return J(`sigmoid`)},e.prototype.softplus=function(e){return J(`softplus`)},e.prototype.sin=function(e){return J(`sin`)},e.prototype.cos=function(e){return J(`cos`)},e.prototype.tan=function(e){return J(`tan`)},e.prototype.asin=function(e){return J(`asin`)},e.prototype.acos=function(e){return J(`acos`)},e.prototype.atan=function(e){return J(`atan`)},e.prototype.atan2=function(e,t){return J(`atan2`)},e.prototype.sinh=function(e){return J(`sinh`)},e.prototype.cosh=function(e){return J(`cosh`)},e.prototype.tanh=function(e){return J(`tanh`)},e.prototype.asinh=function(e){return J(`asinh`)},e.prototype.acosh=function(e){return J(`acosh`)},e.prototype.atanh=function(e){return J(`atanh`)},e.prototype.erf=function(e){return J(`erf`)},e.prototype.step=function(e,t){return J(`step`)},e.prototype.fusedConv2d=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,J(`fusedConv2d`)},e.prototype.conv2d=function(e,t,n){return J(`conv2d`)},e.prototype.conv2dDerInput=function(e,t,n){return J(`conv2dDerInput`)},e.prototype.conv2dDerFilter=function(e,t,n){return J(`conv2dDerFilter`)},e.prototype.fusedDepthwiseConv2D=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,J(`fusedDepthwiseConv2D`)},e.prototype.depthwiseConv2D=function(e,t,n){return J(`depthwiseConv2D`)},e.prototype.depthwiseConv2DDerInput=function(e,t,n){return J(`depthwiseConv2DDerInput`)},e.prototype.depthwiseConv2DDerFilter=function(e,t,n){return J(`depthwiseConv2DDerFilter`)},e.prototype.conv3d=function(e,t,n){return J(`conv3d`)},e.prototype.conv3dDerInput=function(e,t,n){return J(`conv3dDerInput`)},e.prototype.conv3dDerFilter=function(e,t,n){return J(`conv3dDerFilter`)},e.prototype.maxPool=function(e,t){return J(`maxPool`)},e.prototype.maxPoolBackprop=function(e,t,n,r){return J(`maxPoolBackprop`)},e.prototype.avgPool=function(e,t){return J(`avgPool`)},e.prototype.avgPoolBackprop=function(e,t,n){return J(`avgPoolBackprop`)},e.prototype.avgPool3d=function(e,t){return J(`avgPool3d`)},e.prototype.avgPool3dBackprop=function(e,t,n){return J(`avgPool3dBackprop`)},e.prototype.maxPool3d=function(e,t){return J(`maxPool3d`)},e.prototype.maxPool3dBackprop=function(e,t,n,r){return J(`maxPool3dBackprop`)},e.prototype.reshape=function(e,t){return J(`reshape`)},e.prototype.cast=function(e,t){return J(`cast`)},e.prototype.tile=function(e,t){return J(`tile`)},e.prototype.pad=function(e,t,n){return J(`pad`)},e.prototype.transpose=function(e,t){return J(`transpose`)},e.prototype.gather=function(e,t,n){return J(`gather`)},e.prototype.gatherND=function(e,t){return J(`gatherND`)},e.prototype.scatterND=function(e,t,n){return J(`scatterND`)},e.prototype.batchToSpaceND=function(e,t,n){return J(`batchToSpaceND`)},e.prototype.spaceToBatchND=function(e,t,n){return J(`spaceToBatchND`)},e.prototype.resizeBilinear=function(e,t,n,r){return J(`resizeBilinear`)},e.prototype.resizeBilinearBackprop=function(e,t,n){return J(`resizeBilinearBackprop`)},e.prototype.resizeNearestNeighbor=function(e,t,n,r){return J(`resizeNearestNeighbor`)},e.prototype.resizeNearestNeighborBackprop=function(e,t,n){return J(`resizeNearestNeighborBackprop`)},e.prototype.batchNormalization=function(e,t,n,r,i,a){return J(`batchNormalization`)},e.prototype.localResponseNormalization4D=function(e,t,n,r,i){return J(`localResponseNormalization4D`)},e.prototype.LRNGrad=function(e,t,n,r,i,a,o){return J(`LRNGrad`)},e.prototype.multinomial=function(e,t,n,r){return J(`multinomial`)},e.prototype.oneHot=function(e,t,n,r){return J(`oneHot`)},e.prototype.cumsum=function(e,t,n,r){return J(`cumsum`)},e.prototype.nonMaxSuppression=function(e,t,n,r,i){return J(`nonMaxSuppression`)},e.prototype.fft=function(e){return J(`fft`)},e.prototype.ifft=function(e){return J(`ifft`)},e.prototype.complex=function(e,t){return J(`complex`)},e.prototype.real=function(e){return J(`real`)},e.prototype.imag=function(e){return J(`imag`)},e.prototype.cropAndResize=function(e,t,n,r,i,a){return J(`cropAndResize`)},e.prototype.depthToSpace=function(e,t,n){return J(`depthToSpace`)},e.prototype.split=function(e,t,n){return J(`split`)},e.prototype.sparseToDense=function(e,t,n,r){return J(`sparseToDense`)},e.prototype.diag=function(e){return J(`diag`)},e.prototype.fill=function(e,t,n){return J(`fill`)},e.prototype.onesLike=function(e){return J(`onesLike`)},e.prototype.zerosLike=function(e){return J(`zerosLike`)},e.prototype.linspace=function(e,t,n){return J(`linspace`)},e.prototype.dispose=function(){return J(`dispose`)},e}();function J(e){throw Error(`'`+e+`' not yet implemented or not found in the registry. Did you forget to import the kernel?`)}function _i(e,t){for(var n=e.length,r=[],i=0;i<n;i++){var a=n-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&r.unshift(a)}return r}function vi(e,t){for(var n=[],r=0;r<t.length;r++){var i=e[e.length-r-1],a=t.length-r-1,o=t[a];(i==null||i===1&&o>1)&&n.unshift(a)}return n}function yi(e,t){for(var n=[],r=Math.max(e.length,t.length),i=0;i<r;i++){var a=e[e.length-i-1];a??=1;var o=t[t.length-i-1];if(o??=1,a===1)n.unshift(o);else if(o===1)n.unshift(a);else{if(a!==o)throw Error(`Operands could not be broadcast together with shapes `+e+` and `+t+`.`);n.unshift(a)}}return n}function bi(e,t,n,r,i,a,o){o===void 0&&(o=`channelsLast`);var s,c=Ti(t),l=c[0],u=c[1];if(o===`channelsLast`)s=[l,u,e[3],e[3]];else{if(o!==`channelsFirst`)throw Error(`Unknown dataFormat `+o);s=[l,u,e[1],e[1]]}return Si(e,s,n,r,i,a,!1,o)}function xi(e,t,n,r,i,a,o){o===void 0&&(o=`NDHWC`);var s,c,l=Ei(t),u=l[0],d=l[1],f=l[2];if(o===`NDHWC`)c=`channelsLast`,s=[u,d,f,e[4],e[4]];else{if(o!==`NCDHW`)throw Error(`Unknown dataFormat `+o);c=`channelsFirst`,s=[u,d,f,e[1],e[1]]}return Ci(e,s,n,r,i,!1,c,a)}function Si(e,t,n,r,i,a,o,s){o===void 0&&(o=!1),s===void 0&&(s=`channelsLast`);var c=[-1,-1,-1,-1],l=c[0],u=c[1],d=c[2],f=c[3];if(s===`channelsLast`)l=e[0],u=e[1],d=e[2],f=e[3];else{if(s!==`channelsFirst`)throw Error(`Unknown dataFormat `+s);l=e[0],f=e[1],u=e[2],d=e[3]}var p,m=t[0],h=t[1],g=t[3],_=Ti(n),v=_[0],y=_[1],b=Ti(r),x=b[0],S=b[1],C=Di(m,x),w=Di(h,S),T=function(e,t,n,r,i,a,o,s){var c,l,u;if(typeof e==`number`){c={top:e,bottom:e,left:e,right:e,type:e===0?`VALID`:`NUMBER`};var d=function(e,t,n,r,i){r??=wi(e,t,n);var a=e[0],o=e[1],s=Oi((a-t+2*r)/n+1,i);I(se(s),(function(){return`The output # of rows (`+s+`) must be an integer. Change the stride and/or zero pad parameters`}));var c=Oi((o-t+2*r)/n+1,i);return I(se(c),(function(){return`The output # of columns (`+c+`) must be an integer. Change the stride and/or zero pad parameters`})),[s,c]}([t,n],a,r,e,s);l=d[0],u=d[1]}else if(e===`same`){l=Math.ceil(t/r),u=Math.ceil(n/i);var f=Math.max(0,(l-1)*r+a-t),p=Math.max(0,(u-1)*i+o-n),m=Math.floor(f/2),h=f-m,g=Math.floor(p/2);c={top:m,bottom:h,left:g,right:p-g,type:`SAME`}}else{if(e!==`valid`)throw Error(`Unknown padding parameter: `+e);c={top:0,bottom:0,left:0,right:0,type:`VALID`},l=Math.ceil((t-a+1)/r),u=Math.ceil((n-o+1)/i)}return{padInfo:c,outHeight:l,outWidth:u}}(i,u,d,v,y,C,w,a),E=T.padInfo,D=T.outHeight,O=T.outWidth,k=o?g*f:g;return s===`channelsFirst`?p=[l,k,D,O]:s===`channelsLast`&&(p=[l,D,O,k]),{batchSize:l,dataFormat:s,inHeight:u,inWidth:d,inChannels:f,outHeight:D,outWidth:O,outChannels:k,padInfo:E,strideHeight:v,strideWidth:y,filterHeight:m,filterWidth:h,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationHeight:x,dilationWidth:S,inShape:e,outShape:p,filterShape:t}}function Ci(e,t,n,r,i,a,o,s){a===void 0&&(a=!1),o===void 0&&(o=`channelsLast`);var c=[-1,-1,-1,-1,-1],l=c[0],u=c[1],d=c[2],f=c[3],p=c[4];if(o===`channelsLast`)l=e[0],u=e[1],d=e[2],f=e[3],p=e[4];else{if(o!==`channelsFirst`)throw Error(`Unknown dataFormat `+o);l=e[0],p=e[1],u=e[2],d=e[3],f=e[4]}var m,h=t[0],g=t[1],_=t[2],v=t[4],y=Ei(n),b=y[0],x=y[1],S=y[2],C=Ei(r),w=C[0],T=C[1],E=C[2],D=Di(h,w),O=Di(g,T),k=Di(_,E),A=function(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m;if(typeof e==`number`){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?`VALID`:`NUMBER`};var h=function(e,t,n,r,i,a){i??=wi(e,t,r);var o=e[0],s=e[1],c=e[2],l=Oi((o-t+2*i)/r+1,a);I(se(l),(function(){return`The output # of depths (`+l+`) must be an integer. Change the stride and/or zero pad parameters`}));var u=Oi((s-t+2*i)/r+1,a);I(se(u),(function(){return`The output # of rows (`+u+`) must be an integer. Change the stride and/or zero pad parameters`}));var d=Oi((c-t+2*i)/r+1,a);return I(se(d),(function(){return`The output # of columns (`+d+`) must be an integer. Change the stride and/or zero pad parameters`})),[l,u,d,n]}([t,n,r,1],s,1,i,e,u);f=h[0],p=h[1],m=h[2]}else if(e===`same`){f=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);var g=(f-1)*i+s-t,_=(p-1)*a+c-n,v=(m-1)*o+l-r,y=Math.floor(g/2),b=g-y,x=Math.floor(_/2),S=_-x,C=Math.floor(v/2);d={top:x,bottom:S,left:C,right:v-C,front:y,back:b,type:`SAME`}}else{if(e!==`valid`)throw Error(`Unknown padding parameter: `+e);d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:`VALID`},f=Math.ceil((t-s+1)/i),p=Math.ceil((n-c+1)/a),m=Math.ceil((r-l+1)/o)}return{padInfo:d,outDepth:f,outHeight:p,outWidth:m}}(i,u,d,f,b,x,S,D,O,k,s),j=A.padInfo,M=A.outDepth,N=A.outHeight,P=A.outWidth,F=a?v*p:v;return o===`channelsFirst`?m=[l,F,M,N,P]:o===`channelsLast`&&(m=[l,M,N,P,F]),{batchSize:l,dataFormat:o,inDepth:u,inHeight:d,inWidth:f,inChannels:p,outDepth:M,outHeight:N,outWidth:P,outChannels:F,padInfo:j,strideDepth:b,strideHeight:x,strideWidth:S,filterDepth:h,filterHeight:g,filterWidth:_,effectiveFilterDepth:D,effectiveFilterHeight:O,effectiveFilterWidth:k,dilationDepth:w,dilationHeight:T,dilationWidth:E,inShape:e,outShape:m,filterShape:t}}function wi(e,t,n,r){r===void 0&&(r=1);var i=Di(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)}function Ti(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Ei(e){return typeof e==`number`?[e,e,e]:e}function Di(e,t){return t<=1?e:e+(e-1)*(t-1)}function Oi(e,t){if(!t)return e;switch(t){case`round`:return Math.round(e);case`ceil`:return Math.ceil(e);case`floor`:return Math.floor(e);default:throw Error(`Unknown roundingMode `+t)}}function ki(e){var t=Ti(e),n=t[0],r=t[1],i=t[2];return n===1&&r===1&&i===1}function Ai(e,t){return ki(e)||ki(t)}function ji(e){if(e===`NHWC`)return`channelsLast`;if(e===`NCHW`)return`channelsFirst`;throw Error(`Unknown dataFormat `+e)}function Mi(e,t,n){if(t===`complex64`){if(e.dtype===`complex64`)return e.clone();var r=Yn(e.shape),i=e.toFloat(),a=n.complex(i,r);return r.dispose(),i.dispose(),a}if(!ye(e.dtype,t))return B.makeTensorFromDataId(e.dataId,e.shape,t);if(e.dtype===`complex64`){var o=n.real(e);return a=o.cast(t),o.dispose(),a}if(t===`int32`)return n.int(e);if(t===`bool`){var s=K(0,e.dtype);return a=n.notEqual(e,s),s.dispose(),a}throw Error(`Error in Cast: failed to cast `+e.dtype+` to `+t)}function Ni(e,t){return B.makeTensorFromDataId(e.dataId,t,e.dtype)}function Pi(e,t,n){var r=(t-e)/(n-1),i=Ne(n,`float32`);i[0]=e;for(var a=1;a<i.length;a++)i[a]=i[a-1]+r;return Vn(i,`float32`)}Object.freeze({castTensor:Mi,reshapeTensor:Ni,linspaceImpl:Pi,upcastType:ot,axesAreInnerMostDims:En,combineLocations:Dn,computeOutAndReduceShapes:On,expandShapeToKeepDim:kn,assertAxesAreInnerMostDims:An,getAxesPermutation:jn,getUndoAxesPermutation:Mn,getInnerMostAxes:Nn,getBroadcastDims:_i,getReductionAxes:vi,assertAndGetBroadcastShape:yi,assertParamsConsistent:Pn,computeOutShape:Fn,computePool2DInfo:bi,computePool3DInfo:xi,computeConv2DInfo:Si,computeConv3DInfo:Ci,computeDefaultPad:wi,tupleValuesAreOne:ki,eitherStridesOrDilationsAreOne:Ai,convertConv2DDataFormat:ji,PARALLELIZE_THRESHOLD:$r,computeOptimalWindowSize:ei});function Fi(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:`+e.length+`, imag: `+t.length+`.`);for(var n=new Float32Array(2*e.length),r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function Ii(e,t){return{real:e[2*t],imag:e[2*t+1]}}function Li(e,t,n,r){e[2*r]=t,e[2*r+1]=n}function Ri(e,t,n){var r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}function zi(e,t,n){var r=function(e,t,n){return function(e,t,n){for(var r=0,i=e.length,a=0,o=!1;r<i;){var s=n(t,e[a=r+(i-r>>>1)]);s>0?r=a+1:(i=a,o=!s)}return o?r:-r-1}(e,t,n||Bi)}(e,t,n),i=r<0?-(r+1):r;e.splice(i,0,t)}function Bi(e,t){return e>t?1:e<t?-1:0}function Vi(e,t,n,r,i){return Ui(e,t,n,r,i,0).selectedIndices}function Hi(e,t,n,r,i,a){var o=Ui(e,t,n,r,i,a,!0);return o.numValidOutputs.dispose(),{selectedIndices:o.selectedIndices,selectedScores:o.selectedScores}}function Ui(e,t,n,r,i,a,o,s){o===void 0&&(o=!1),s===void 0&&(s=!1);for(var c=Array.from(t).map((function(e,t){return{score:e,boxIndex:t,suppressBeginIndex:0}})).filter((function(e){return e.score>i})).sort(Ki),l=a>0?-.5/a:0,u=[],d=[];u.length<n&&c.length>0;){var f=c.pop(),p=f.score,m=f.boxIndex,h=f.suppressBeginIndex;if(p<i)break;for(var g=!1,_=u.length-1;_>=h;--_){var v=Wi(e,m,u[_]);if(v>=r){g=!0;break}if(f.score*=Gi(r,l,v),f.score<=i)break}f.suppressBeginIndex=u.length,g||(f.score===p?(u.push(m),d.push(f.score)):f.score>i&&zi(c,f,Ki))}var y=u.length;return s&&(u.fill(0,y),d.fill(0,y)),{selectedIndices:Vn(u,`int32`),selectedScores:Vn(d,`float32`),numValidOutputs:K(y,`int32`)}}function Wi(e,t,n){var r=e.subarray(4*t,4*t+4),i=e.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),d=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(s-a)*(c-o),m=(d-l)*(f-u);if(p<=0||m<=0)return 0;var h=Math.max(a,l),g=Math.max(o,u),_=Math.min(s,d),v=Math.min(c,f),y=Math.max(_-h,0)*Math.max(v-g,0);return y/(p+m-y)}function Gi(e,t,n){var r=Math.exp(t*n*n);return n<=e?r:0}function Ki(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}function qi(e,t,n){var r=Array(e.rank).fill(0),i=e.shape.slice();return t.map((function(t){i[n]=t;var a=e.slice(r,i);return r[n]+=t,a}))}function Ji(e,t){for(var n=Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];var i=q(n,e.dtype);for(r=0;r<i.values.length;++r){for(var a=i.indexToLoc(r),o=Array(e.rank),s=0;s<o.length;s++)o[s]=a[s]%e.shape[s];var c=e.locToIndex(o);i.values[r]=e.values[c]}return i.toTensor()}function Yi(e,t,n,r,i){for(var a=t[t.length-1],o=[e.length/a,a],s=o[0],c=o[1],l=he(n,s*r),u=he(`int32`,s*r),d=0;d<s;d++){for(var f=d*c,p=e.subarray(f,f+c),m=[],h=0;h<p.length;h++)m.push({value:p[h],index:h});m.sort((function(e,t){return t.value-e.value}));var g=d*r,_=l.subarray(g,g+r),v=u.subarray(g,g+r);for(h=0;h<r;h++)_[h]=m[h].value,v[h]=m[h].index}var y=t.slice();return y[y.length-1]=r,[zn(l,y,n),zn(u,y,`int32`)]}function Xi(e,t){for(var n=[],r=0;r<t.length;r++)t[r]&&n.push(r);var i=q(e,`int32`),a=q([n.length,e.length],`int32`);for(r=0;r<n.length;r++){var o=i.indexToLoc(n[r]),s=r*e.length;a.values.set(o,s)}return a.toTensor()}var Zi=function(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((function(e,t){return`T`+t}));var n=[];this.variableNames.forEach((function(e){n.push(`float v`+e+` = get`+e+`AtOutCoords();`)}));var r=this.variableNames.map((function(e){return`v`+e})).join(` + `);this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},Qi=function(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((function(e,t){return`T`+t}));var n=[];this.variableNames.forEach((function(e){n.push(`vec4 v`+e+` = get`+e+`AtOutCoords();`)}));var r=this.variableNames.map((function(e){return`v`+e})).join(` + `);this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},$i=function(e,t,n){this.variableNames=[`A`];var r=e.windowSize,i=e.batchSize,a=e.inSize,o=Math.ceil(a/r);n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,o];var s=t===`max`?`>`:`<`,c=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+c+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function ea(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map((function(t){return e+`.`+t}))}function ta(e,t){return t===1?[e]:ea(e,t)}function na(){var e,t,n,r,i,a,o,s,c,l;return E().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,t=`in`,n=`out`,r=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,c=``,l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e=``,t=`attribute`,n=`varying`,r=`varying`,i=`texture2D`,a=`gl_FragColor`,o=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}function ra(e,t,n){n===void 0&&(n=`index`);var r=ke(t);return r.map((function(t,i){return`int `+e[i]+` = `+n+` / `+t+`; `+(i===r.length-1?`int `+e[i+1]+` = `+n+` - `+e[i]+` * `+t:`index -= `+e[i]+` * `+t)+`;`})).join(``)}function ia(e){var t=ke(e).map((function(e){return e.toString()}));return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+` + coords.y * `+t[1]+` + coords.z;
  }
`}var aa=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function oa(e,t,n,r){var i=[];e.forEach((function(e){var t=R(e.shapeInfo.logicalShape);e.shapeInfo.isUniform?i.push(`uniform float `+e.name+(t>1?`[`+t+`]`:``)+`;`):(i.push(`uniform sampler2D `+e.name+`;`),i.push(`uniform int offset`+e.name+`;`))}));var a,o,s=i.join(`
`),c=e.map((function(e){return function(e,t,n){n===void 0&&(n=!1);var r=``;r+=n?ca(e):sa(e);var i=e.shapeInfo.logicalShape,a=t.logicalShape;return i.length<=a.length&&(r+=n?function(e,t){var n,r=e.name,i=r.charAt(0).toUpperCase()+r.slice(1),a=`get`+i+`AtOutCoords`,o=e.shapeInfo.logicalShape.length,s=t.logicalShape.length,c=_i(e.shapeInfo.logicalShape,t.logicalShape),l=ha(s),u=s-o,d=[`x`,`y`,`z`,`w`,`u`,`v`];n=o===0?``:s<2&&c.length>=1?`coords = 0;`:c.map((function(e){return`coords.`+d[e+u]+` = 0;`})).join(`
`);var f=``;f=s<2&&o>0?`coords`:e.shapeInfo.logicalShape.map((function(e,t){return`coords.`+d[t+u]})).join(`, `);var p=`return outputValue;`,m=R(e.shapeInfo.logicalShape)===1,h=R(t.logicalShape)===1;if(o!==1||m||h){if(m&&!h)p=s===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(c.length){var g=o-2,_=o-1;c.indexOf(g)>-1&&c.indexOf(_)>-1?p=`return vec4(outputValue.x);`:c.indexOf(g)>-1?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:c.indexOf(_)>-1&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}}else p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+a+`() {
      `+l+` coords = getOutputCoords();
      `+n+`
      vec4 outputValue = get`+i+`(`+f+`);
      `+p+`
    }
  `}(e,t):function(e,t){var n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&oe(o,a))return`
      float `+i+`() {
        return sampleTexture(`+n+`, resultUV);
      }
    `;var l,u=ha(c),d=_i(e.shapeInfo.logicalShape,t.logicalShape),f=c-s,p=[`x`,`y`,`z`,`w`,`u`,`v`];l=s===0?``:c<2&&d.length>=1?`coords = 0;`:d.map((function(e){return`coords.`+p[e+f]+` = 0;`})).join(`
`);var m=``;return m=c<2&&s>0?`coords`:e.shapeInfo.logicalShape.map((function(e,t){return`coords.`+p[t+f]})).join(`, `),`
    float `+i+`() {
      `+u+` coords = getOutputCoords();
      `+l+`
      return get`+r+`(`+m+`);
    }
  `}(e,t)),r}(e,t,r)})).join(`
`),l=t.texShape,u=na(),d=function(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+e.texture2D+`(textureSampler, uv).r;
    }
  `}(u),f=function(e){return e.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+e.varyingFs+` vec2 resultUV;
    `+e.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+e.defineSpecialNaN+`
    `+e.defineSpecialInf+`
    `+e.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+la+`
    `+ua+`
    `+da+`
  `}(u);return t.isPacked?(a=function(e,t){switch(e.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(e,t){var n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return n[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+n[1]+`.0);
      }
    `:n[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+n[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+n[0]+`, `+n[1]+`));
      return 2 * (resTexRC.x * `+n[1]+` + resTexRC.y);
    }
  `}(0,t);case 2:return function(e,t){var n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(oe(e,t))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+n[0]+`, `+n[1]+`));
      }
    `;var r=Math.ceil(e[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+n[0]+`, `+n[1]+`));

      int index = resTexRC.x * `+n[1]+` + resTexRC.y;
      int r = 2 * (index / `+r+`);
      int c = imod(index, `+r+`) * 2;

      return ivec2(r, c);
    }
  `}(e,t);case 3:return n=e,r=t,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=Math.ceil(n[2]/2),o=a*Math.ceil(n[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+i[0]+`, `+i[1]+`));
      int index = resTexRC.x * `+i[1]+` + resTexRC.y;

      int b = index / `+o+`;
      index -= b * `+o+`;

      int r = 2 * (index / `+a+`);
      int c = imod(index, `+a+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(e,t){for(var n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],r=Math.ceil(e[e.length-1]/2),i=r*Math.ceil(e[e.length-2]/2),a=i,o=``,s=`b, r, c`,c=2;c<e.length-1;c++)a*=e[e.length-c-1],o=`
      int b`+c+` = index / `+a+`;
      index -= b`+c+` * `+a+`;
    `+o,s=`b`+c+`, `+s;return`
    ivec`+e.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+n[0]+`, `+n[1]+`));
      int index = resTexRC.x * `+n[1]+` + resTexRC.y;

      `+o+`

      int b = index / `+i+`;
      index -= b * `+i+`;

      int r = 2 * (index / `+r+`);
      int c = imod(index, `+r+`) * 2;

      return ivec`+e.length+`(`+s+`);
    }
  `}(e,t)}var n,r,i,a,o}(t.logicalShape,l),o=function(e){return`
    void setOutput(vec4 val) {
      `+e.output+` = val;
    }
  `}(u)):(a=function(e,t){switch(e.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(e,t){return t[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+t[1]+`.0);
      }
    `:t[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+t[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+t[0]+`, `+t[1]+`));
      return resTexRC.x * `+t[1]+` + resTexRC.y;
    }
  `}(0,t);case 2:return function(e,t){return oe(e,t)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+t[0]+`, `+t[1]+`));
      }
    `:e[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+t[0]+`, `+t[1]+`));
        int index = resTexRC.x * `+t[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+t[0]+`, `+t[1]+`));
        int index = resTexRC.x * `+t[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+t[0]+`, `+t[1]+`));
      int index = resTexRC.x * `+t[1]+` + resTexRC.y;
      int r = index / `+e[1]+`;
      int c = index - r * `+e[1]+`;
      return ivec2(r, c);
    }
  `}(e,t);case 3:return n=t,r=ra([`r`,`c`,`d`],e),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+n[0]+`, `+n[1]+`));
      int index = resTexRC.x * `+n[1]+` + resTexRC.y;
      `+r+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(e,t){var n=ra([`r`,`c`,`d`,`d2`],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+t[0]+`, `+t[1]+`));
      int index = resTexRC.x * `+t[1]+` + resTexRC.y;
      `+n+`
      return ivec4(r, c, d, d2);
    }
  `}(e,t);case 5:return function(e,t){var n=ra([`r`,`c`,`d`,`d2`,`d3`],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+t[0]+`,
                             `+t[1]+`));

      int index = resTexRC.x * `+t[1]+` + resTexRC.y;

      `+n+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(e,t);case 6:return function(e,t){var n=ra([`r`,`c`,`d`,`d2`,`d3`,`d4`],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+t[0]+`, `+t[1]+`));
      int index = resTexRC.x * `+t[1]+` + resTexRC.y;

      `+n+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(e,t);default:throw Error(e.length+`-D output sampling is not yet supported`)}var n,r}(t.logicalShape,l),o=function(e){return`
    void setOutput(float val) {
      `+e.output+` = vec4(val, 0, 0, 0);
    }
  `}(u)),r&&(f+=fa),[f,d,o,s,a,c,n].join(`
`)}function sa(e){var t=e.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var t=e.name,n=`get`+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`float `+n+`() {return `+t+`;}`;var r=e.shapeInfo.texShape,i=r[0],a=r[1];if(i===1&&a===1)return`
      float `+n+`() {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var o=e.shapeInfo.texShape,s=o[0],c=o[1],l=pa(t);return`
    float `+n+`() {
      vec2 uv = uvFromFlat(`+s+`, `+c+`, `+l+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(e);case 1:return function(e){var t=e.name,n=`get`+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`
      float `+n+`(int index) {
        `+ma(e)+`
      }
    `;var r=e.shapeInfo.texShape,i=r[0],a=r[1];if(a===1&&i===1)return`
      float `+n+`(int index) {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var o=pa(t);return a===1?`
      float `+n+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+o+`) + 0.5) / `+i+`.0);
        return sampleTexture(`+t+`, uv);
      }
    `:i===1?`
      float `+n+`(int index) {
        vec2 uv = vec2((float(index + `+o+`) + 0.5) / `+a+`.0, 0.5);
        return sampleTexture(`+t+`, uv);
      }
    `:`
    float `+n+`(int index) {
      vec2 uv = uvFromFlat(`+i+`, `+a+`, index + `+o+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(e);case 2:return function(e){var t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape;if(i!=null&&oe(t,i)){var a=i[0],o=i[1];return`
    float `+r+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+o+`.0, `+a+`.0);
      return sampleTexture(`+n+`, uv);
    }
  `}var s=me(t),c=s.newShape,l=s.keptDims,u=c;if(u.length<t.length)return`
      `+sa(ga(e,u))+`
      float `+r+`(int row, int col) {
        return `+r+`(`+_a([`row`,`col`],l)+`);
      }
    `;if(e.shapeInfo.isUniform)return`
      float `+r+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+t[1]+`, 1)));
        `+ma(e)+`
      }
    `;var d=i[0],f=i[1],p=pa(n);return f===1?`
    float `+r+`(int row, int col) {
      float index = dot(vec3(row, col, `+p+`), vec3(`+t[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+n+`, uv);
    }
  `:d===1?`
    float `+r+`(int row, int col) {
      float index = dot(vec3(row, col, `+p+`), vec3(`+t[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+f+`.0, 0.5);
      return sampleTexture(`+n+`, uv);
    }
  `:`
  float `+r+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+t[1]+` + col + `+p+`;
    vec2 uv = uvFromFlat(`+d+`, `+f+`, index);
    return sampleTexture(`+n+`, uv);
  }
`}(e);case 3:return function(e){var t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[1]*t[2],a=t[2],o=me(t),s=o.newShape,c=o.keptDims,l=s;if(l.length<t.length)return`
        `+sa(ga(e,l))+`
        float `+r+`(int row, int col, int depth) {
          return `+r+`(`+_a([`row`,`col`,`depth`],c)+`);
        }
      `;if(e.shapeInfo.isUniform)return`
      float `+r+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+`, `+a+`, 1)));
        `+ma(e)+`
      }
    `;var u=e.shapeInfo.texShape,d=u[0],f=u[1],p=e.shapeInfo.flatOffset;if(f===i&&p==null)return`
        float `+r+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+a+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+f+`.0, `+d+`.0);
          return sampleTexture(`+n+`, uv);
        }
      `;if(f===a&&p==null)return`
    float `+r+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+t[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+`.0, `+d+`.0);
      return sampleTexture(`+n+`, uv);
    }
  `;var m=pa(n);return`
      float `+r+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+` + col * `+a+` + depth + `+m+`;
        vec2 uv = uvFromFlat(`+d+`, `+f+`, index);
        return sampleTexture(`+n+`, uv);
      }
  `}(e);case 4:return function(e){var t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[3],a=t[2]*i,o=t[1]*a,s=me(t),c=s.newShape,l=s.keptDims;if(c.length<t.length)return`
      `+sa(ga(e,c))+`
      float `+r+`(int row, int col, int depth, int depth2) {
        return `+r+`(`+_a([`row`,`col`,`depth`,`depth2`],l)+`);
      }
    `;if(e.shapeInfo.isUniform)return`
      float `+r+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+o+`, `+a+`, `+i+`, 1)));
        `+ma(e)+`
      }
    `;var u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1];if(p===o&&u==null)return`
      float `+r+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+a+`, `+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+p+`.0, `+f+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `;if(p===i&&u==null)return`
      float `+r+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+t[1]*t[2]+`, `+t[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+p+`.0, `+f+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `;var m=pa(n);return`
    float `+r+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+o+` + col * `+a+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+f+`, `+p+`, index + `+m+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(e);case 5:return function(e){var t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[4],a=t[3]*i,o=t[2]*a,s=t[1]*o,c=me(t),l=c.newShape,u=c.keptDims;if(l.length<t.length)return`
      `+sa(ga(e,l))+`
      float `+r+`(int row, int col, int depth, int depth2, int depth3) {
        return `+r+`(`+_a([`row`,`col`,`depth`,`depth2`,`depth3`],u)+`);
      }
    `;if(e.shapeInfo.isUniform)return`
      float `+r+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+s+`, `+o+`, `+a+`, `+i+`)) +
          depth3;
        `+ma(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,p=f[0],m=f[1];if(m===s&&d==null)return`
      float `+r+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+o+`, `+a+`, `+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+`.0, `+p+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `;if(m===i&&d==null)return`
      float `+r+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+t[1]*t[2]*t[3]+`,
               `+t[2]*t[3]+`, `+t[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+`.0, `+p+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `;var h=pa(n);return`
    float `+r+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+s+` + col * `+o+` + depth * `+a+` +
          depth2 * `+i+` + depth3 + `+h+`;
      vec2 uv = uvFromFlat(`+p+`, `+m+`, index);
      return sampleTexture(`+n+`, uv);
    }
  `}(e);case 6:return function(e){var t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=me(t),a=i.newShape,o=i.keptDims;if(a.length<t.length)return`
      `+sa(ga(e,a))+`
      float `+r+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+r+`(`+_a([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],o)+`);
      }
    `;var s=t[5],c=t[4]*s,l=t[3]*c,u=t[2]*l,d=t[1]*u;if(e.shapeInfo.isUniform)return`
      float `+r+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+`, `+u+`, `+l+`, `+c+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+s+`, 1)));
        `+ma(e)+`
      }
    `;var f=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,m=p[0],h=p[1];if(h===d&&f==null)return`
      float `+r+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+u+`, `+l+`, `+c+`, `+s+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+h+`.0, `+m+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `;if(h===s&&f==null)return`
      float `+r+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+t[1]*t[2]*t[3]*t[4]+`,
               `+t[2]*t[3]*t[4]+`,
               `+t[3]*t[4]+`,
               `+t[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+h+`.0, `+m+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `;var g=pa(n);return`
    float `+r+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+` + col * `+u+` + depth * `+l+` +
          depth2 * `+c+` + depth3 * `+s+` + depth4 + `+g+`;
      vec2 uv = uvFromFlat(`+m+`, `+h+`, index);
      return sampleTexture(`+n+`, uv);
    }
  `}(e);default:throw Error(t.length+`-D input sampling is not yet supported`)}}function ca(e){var t,n,r;switch(e.shapeInfo.logicalShape.length){case 0:return t=e.name,n=`get`+t.charAt(0).toUpperCase()+t.slice(1),r=na(),`
    vec4 `+n+`() {
      return `+r.texture2D+`(`+t+`, halfCR);
    }
  `;case 1:return function(e){var t=e.name,n=`get`+t.charAt(0).toUpperCase()+t.slice(1),r=e.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=na();return`
    vec4 `+n+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+i[0]+`, `+i[1]+`, index);
      return `+a.texture2D+`(`+t+`, uv);
    }
  `}(e);case 2:return function(e){var t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=i[0],o=i[1],s=na();if(i!=null&&oe(t,i))return`
      vec4 `+r+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+o+`.0, `+a+`.0);

        return `+s.texture2D+`(`+n+`, uv);
      }
    `;var c=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=Math.ceil(t[1]/2);return`
    vec4 `+r+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+l+`, `+c[0]+`, `+c[1]+`, row, col);
      return `+s.texture2D+`(`+n+`, uv);
    }
  `}(e);case 3:return function(e){var t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];if(t[0]===1)return`
        `+ca(ga(e,t.slice(1)))+`
        vec4 `+r+`(int b, int row, int col) {
          return `+r+`(`+_a([`b`,`row`,`col`],[1,2])+`);
        }
      `;var o=a[0],s=a[1],c=Math.ceil(t[2]/2),l=c*Math.ceil(t[1]/2),u=na();return`
    vec4 `+r+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+o+`, `+s+`, `+l+`, `+c+`, b, row, col);
      return `+u.texture2D+`(`+n+`, uv);
    }
  `}(e);default:return function(e){for(var t=e.shapeInfo.logicalShape,n=t.length,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],s=o[0],c=o[1],l=Math.ceil(t[n-1]/2),u=l*Math.ceil(t[n-2]/2),d=`int b, int row, int col`,f=`b * `+u+` + (row / 2) * `+l+` + (col / 2)`,p=2;p<n-1;p++)d=`int b`+p+`, `+d,u*=t[n-p-1],f=`b`+p+` * `+u+` + `+f;var m=na();return`
    vec4 `+i+`(`+d+`) {
      int index = `+f+`;
      int texR = index / `+c+`;
      int texC = index - texR * `+c+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+c+`, `+s+`);
      return `+m.texture2D+`(`+r+`, uv);
    }
  `}(e)}}var la=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,ua=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,da=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,fa=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function pa(e){return`offset`+e}function ma(e){var t=e.name,n=R(e.shapeInfo.logicalShape);return n<2?`return `+t+`;`:`
    for (int i = 0; i < `+n+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function ha(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank `+e+` is not yet supported`)}function ga(e,t){var n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function _a(e,t){return t.map((function(t){return e[t]})).join(`, `)}var va=function(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,I(e.length>2,(function(){return`Packed arg`+(n.charAt(0).toUpperCase()+n.slice(1))+` supports only inputs with rank above 2.`}));var i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);var o,s,c=this.outputShape,l=c.length,u=ha(l),d=ta(`coords`,l);if(a===1){var f=ha(s=l+1);o=`
        `+f+` sourceLocR = `+f+`(`+d.join()+`, 0);
        ++`+d[l-1]+`;
        `+f+` sourceLocG = `+f+`(`+d.join()+`, 0);
        ++`+d[l-2]+`;
        `+f+` sourceLocA = `+f+`(`+d.join()+`, 0);
        --`+d[l-1]+`;
        `+f+` sourceLocB = `+f+`(`+d.join()+`, 0);
        --`+d[l-2]+`;`}else s=l,o=`
        `+u+` sourceLocR = coords;
        ++`+d[l-1]+`;
        `+u+` sourceLocG = coords;
        ++`+d[l-2]+`;
        `+u+` sourceLocA = coords;
        --`+d[l-1]+`;
        `+u+` sourceLocB = coords;
        --`+d[l-2]+`;`;var p=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,s),m=`.`+p[s-1],h=p.map((function(e){return`int `+e})),g=ta(`sourceLocR`,s-1).concat(`inIdx.r`),_=ta(`sourceLocG`,s-1).concat(`inIdx.g`),v=ta(`sourceLocB`,s-1).concat(`inIdx.b`),y=ta(`sourceLocA`,s-1).concat(`inIdx.a`),b=n===`max`?`greaterThan`:`lessThan`,x=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+_.join()+`),
                             getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+y.join()+`)));`,S=`vec4(
            getAChannel(`+g.join()+`),
            hasNextCol ? getAChannel(`+_.join()+`) : 0.,
            hasNextRow ? getAChannel(`+v.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+y.join()+`) : 0.)`,C=r?``:`
      float getBestIndicesAChannel(`+h.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+h.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+C+`
      void main() {
        `+u+` coords = getOutputCoords();
        bool hasNextCol = `+d[l-1]+` < `+(c[l-1]-1)+`;
        bool hasNextRow = `+d[l-2]+` < `+(c[l-2]-1)+`;
        `+o+`
        ivec4 srcIdx = ivec4(sourceLocR`+m+`, sourceLocG`+m+`,
          sourceLocB`+m+`, sourceLocA`+m+`) * `+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+S+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+x+`
          vec4 candidate = `+S+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+b+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},ya=function(e){this.variableNames=[`dy`],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(`+l+`, `+u+`);
      const float avgMultiplier = float(`+d+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+c+`;
            wC+= `+o+`) {
            float dyC = float(dyCCorner + wC) / `+i+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},ba=function(e){this.variableNames=[`dy`],this.outputShape=e.inShape;var t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(`+p+`, `+m+`, `+h+`);
      const float avgMultiplier = float(`+g+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+u+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+i+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+d+`;
              wR += `+c+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+l+`) {
              float dyC = float(dyCCorner + wC) / `+o+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},xa=function(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],yi(e,t),yi(e,n);var o=`0.0`;r!=null&&(yi(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);var s=`1.0`;i!=null&&(yi(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+o+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Sa=function(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],yi(e,t),yi(e,n);var o=`vec4(0.0)`;r!=null&&(yi(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);var s=`vec4(1.0)`;i!=null&&(yi(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = `+o+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},Ca=`return areal * breal - aimag * bimag;`,wa=`return areal * bimag + aimag * breal;`,Ta=function(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=yi(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+e+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Ea=`return a + b;`,Da=`return a - b;`,Oa=`return a * b;`,ka=`return (a < 0.) ? b * a : a;`,Aa=function(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=yi(t,n),this.userCode=`
      float binaryOperation(float a, float b) {
        `+e+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},ja=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Ma=function(e,t,n,r){r===void 0&&(r=!1),this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=yi(t,n);var i=this.outputShape.length,a=``;if(r){if(i===0||R(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+ha(i)+` coords = getOutputCoords();
        `,i===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var o=ta(`coords`,i);a+=`
            bool nextRowOutOfBounds =
              (`+o[i-2]+` + 1) >= `+this.outputShape[i-2]+`;
            bool nextColOutOfBounds =
              (`+o[i-1]+` + 1) >= `+this.outputShape[i-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+e+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},Na=function(){function e(e){this.variableNames=[`A`],this.outputShape=e,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return e.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(r,i){n.minLoc??(n.minLoc=r.getUniformLocationNoThrow(i,`minVal`),n.maxLoc=r.getUniformLocationNoThrow(i,`maxVal`)),r.gl.uniform1f(n.minLoc,e),r.gl.uniform1f(n.maxLoc,t)}},e}(),Pa=function(){function e(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return e.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(r,i){n.minLoc??(n.minLoc=r.getUniformLocationNoThrow(i,`minVal`),n.maxLoc=r.getUniformLocationNoThrow(i,`maxVal`)),r.gl.uniform1f(n.minLoc,e),r.gl.uniform1f(n.maxLoc,t)}},e}(),Fa=function(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},Ia=function(e){this.outputShape=[],this.outputShape=Fn(e,1),this.variableNames=e.map((function(e,t){return`T`+t}));var t=Array(e.length-1);t[0]=e[0][1];for(var n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];var r=[`if (yC < `+t[0]+`) setOutput(getT0(yR, yC));`];for(n=1;n<t.length;n++){var i=t[n-1];r.push(`else if (yC < `+t[n]+`) setOutput(getT`+n+`(yR, yC-`+i+`));`)}var a=t.length,o=t[t.length-1];r.push(`else setOutput(getT`+a+`(yR, yC-`+o+`));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},La=function(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Fn(e,t);var n=this.outputShape,r=n.length,i=ha(r),a=ta(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map((function(e,t){return`T`+t}));var s=Array(e.length-1);s[0]=e[0][t];for(var c=1;c<s.length;c++)s[c]=s[c-1]+e[c][t];var l=o[t],u=o.slice(-2),d=o.join(),f=`if (`+l+` < `+s[0]+`) {
        return getChannel(
            getT0(`+d+`), vec2(`+u.join()+`));
        }`;for(c=1;c<s.length;c++){var p=s[c-1];f+=`
        if (`+l+` < `+s[c]+`  && `+l+` >= `+s[c-1]+`) {
          return getChannel(
            getT`+c+`(`+Ra(o,l,p)+`),
            vec2(`+Ra(u,l,p)+`));
        }`}var m=s.length,h=s[s.length-1];f+=`
        return getChannel(
          getT`+m+`(`+Ra(o,l,h)+`),
          vec2(`+Ra(u,l,h)+`));`,this.userCode=`
      float getValue(`+o.map((function(e){return`int `+e}))+`) {
        `+f+`
      }

      void main() {
        `+i+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[r-1]+` = `+a[r-1]+` + 1;
        if (`+a[r-1]+` < `+n[r-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[r-2]+` = `+a[r-2]+` + 1;
        if (`+a[r-2]+` < `+n[r-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[r-1]+` = `+a[r-1]+` - 1;
        if (`+a[r-2]+` < `+n[r-2]+` &&
            `+a[r-1]+` < `+n[r-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function Ra(e,t,n){var r=e.indexOf(t);return e.map((function(e,t){return t===r?e+` - `+n:e})).join()}var za=function(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+t+` - `+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+n+` - `+i+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Ba=function(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+o+`, `+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+u+`];

        ivec2 dyCorner = ivec2(coords[`+c+`], coords[`+l+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+i+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Va=function(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;var t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yF = 0; yF < `+e.outDepth+`; yF++) {
            int xF = wF + yF * `+t+` - `+i+`;

            if (xF < 0 || xF >= `+e.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+e.outHeight+`; yR++) {
              int xR = wR + yR * `+n+` - `+a+`;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+e.outWidth+`; yC++) {
                int xC = wC + yC * `+r+` - `+o+`;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ha=function(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;var t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+`, `+c+`, `+l+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+i+`.0;

          if (dyF < 0.0 || dyF >= `+e.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+n+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+n+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+o+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ua=function(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+t+` - `+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+n+` - `+i+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},Wa=function(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+`, `+o+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+i+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ga=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=[`x`,`W`],this.outputShape=e.outShape;var i=e.padInfo.top,a=e.padInfo.left,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterHeight,d=e.filterWidth,f=4*Math.floor(e.inChannels/4),p=e.inChannels%4,m=e.dataFormat===`channelsLast`,h=m?1:2,g=m?2:3,_=m?3:1,v=``,y=``;n&&(v=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,y=`result = activation(result);`);var b=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+o+`, `+s+`);
      const ivec2 pads = ivec2(`+i+`, `+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+_+`];

        ivec2 xRCCorner =
            ivec2(coords[`+h+`], coords[`+g+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+u+`; wR++) {
          int xR = xRCorner + wR * `+c+`;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+l+`;

            if (xC < 0 || xC >= `+e.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+m+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+m+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+m+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+m+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+b+`
        `+y+`
        setOutput(result);
      }
    `},Ka=function(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;var t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=4*Math.floor(e.inChannels/4),m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+i+`, `+a+`, `+o+`);
      const ivec3 pads = ivec3(`+t+`, `+n+`, `+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+u+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+d+`; wR++) {
            int xR = xRCorner + wR * `+c+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+l+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(m===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(m===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(m===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},qa=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=[`x`,`W`],this.outputShape=e.outShape;var i=e.inHeight,a=e.inWidth,o=e.padInfo.top,s=e.padInfo.left,c=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,f=e.filterHeight,p=e.filterWidth,m=e.outChannels/e.inChannels,h=``,g=``;n&&(h=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,g=`result = activation(result);`);var _=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),this.userCode=`
      `+h+`

      const ivec2 strides = ivec2(`+c+`, `+l+`);
      const ivec2 pads = ivec2(`+o+`, `+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+m+`;
        int q = d2 - d1 * `+m+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+i+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+d+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+_+`
        `+g+`
        setOutput(result);
      }
    `},Ja=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.outShape;for(var i=e.inHeight,a=e.inWidth,o=e.padInfo.top,s=e.padInfo.left,c=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,f=e.filterHeight,p=e.filterWidth,m=p,h=`int xR; int xC; int xCOffset;`,g=0;g<f;g++)for(var _=0;_<p;_++)h+=`
          vec4 xTexelR`+g+`C`+2*_+` = vec4(0.);
          vec4 wR`+g+`C`+_+` = vec4(0.);
          vec4 xR`+g+`C`+_+` = vec4(0.);`;for(g=0;g<f;g++)for(var v=0;v<m;v++){if(h+=`
          xR = xRCorner + `+g*u+`;
          xC = xCCorner + `+(_=2*v)*d+`;
        `,l===1){if(_<p&&(h+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+i+` && xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+g+`C`+_+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+g+`C`+_+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+g+`C`+_+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+i+` && xCOffset >= 0 && xCOffset < `+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+g+`C`+_+` = vec4(previous.zw, xTexelR`+g+`C`+_+`.xy);
                } else {
                  xR`+g+`C`+_+` = vec4(0, 0, xTexelR`+g+`C`+_+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+i+` && xC >= 0 && xC < `+a+`) {
                  xTexelR`+g+`C`+_+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+`C`+_+` = vec4(0.);
                }

                xR`+g+`C`+_+` = xTexelR`+g+`C`+_+`;
              `,_+1<p)){var y=s%2==0?ne(d):d;d%2==0&&s%2==1||d%2!=0&&s%2!=1?(h+=`
                  xCOffset = xC + `+s%2+` + `+y+`;

                  if(xR >= 0 && xR < `+i+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+g+`C`+(_+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,d>1&&(h+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+i+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+g+`C`+_+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+g+`C`+_+` = vec4(0.);
                    }
                  `),h+=`
                  xR`+g+`C`+(_+1)+` = vec4(
                    xTexelR`+g+`C`+_+`.zw, xTexelR`+g+`C`+(_+2)+`.xy);
                `):h+=`
                  xCOffset = xC + `+y+`;

                  if(xR >= 0 && xR < `+i+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+g+`C`+(_+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+g+`C`+(_+1)+` = xTexelR`+g+`C`+(_+2)+`;
                `}}else _<p&&(h+=`
              if(xR >= 0 && xR < `+i+`) {
            `,s%2==1?(h+=`
                xCOffset = xC + 1 - `+l+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+g+`C`+_+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+`C`+_+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+g+`C`+(_+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+g+`C`+(_+2)+` = vec4(0.);
                }

                xR`+g+`C`+_+` = vec4(
                  xTexelR`+g+`C`+_+`.zw, xTexelR`+g+`C`+(_+2)+`.zw);
              `,_+1<p&&(h+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+l+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+g+`C`+(_+1)+` = vec4(xTexelR`+g+`C`+(_+2)+`.xy, final.xy);
                `)):(h+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+g+`C`+_+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+`C`+_+` = vec4(0.);
                }

                xCOffset = xC + `+l+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+g+`C`+(_+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+`C`+(_+2)+` = vec4(0.);
                }

                xR`+g+`C`+_+` = vec4(
                  xTexelR`+g+`C`+_+`.xy, xTexelR`+g+`C`+(_+2)+`.xy);
              `,_+1<p&&(h+=`
                  xR`+g+`C`+(_+1)+` = vec4(
                    xTexelR`+g+`C`+_+`.zw, xTexelR`+g+`C`+(_+2)+`.zw);
                `)),h+=`}`);_<p&&(h+=`
            vec4 wTexelR`+g+`C`+_+` = getW(`+g+`, `+_+`, d1, q);
            wR`+g+`C`+_+` = vec4(wTexelR`+g+`C`+_+`.xz, wTexelR`+g+`C`+_+`.xz);
          `,_+1<p&&(h+=`
              vec4 wTexelR`+g+`C`+(_+1)+` = getW(`+g+`, `+(_+1)+`, d1, q);
              wR`+g+`C`+(_+1)+` =
                vec4(wTexelR`+g+`C`+(_+1)+`.xz, wTexelR`+g+`C`+(_+1)+`.xz);`))}for(g=0;g<f;g++)for(_=0;_<p;_++)h+=`dotProd += xR`+g+`C`+_+` * wR`+g+`C`+_+`;`;var b=``,x=``;n&&(b=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`vec4 activation(vec4 x) {
          `+n+`
        }`,x=`result = activation(result);`);var S=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+c+`, `+l+`);
      const ivec2 pads = ivec2(`+o+`, `+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+h+`

        vec4 result = dotProd;
        `+S+`
        `+x+`
        setOutput(result);
      }
    `},Ya=function(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];var a=e[0],o=e[1],s=e[2],c=e[3],l=t[0],u=n[0],d=n[1];this.outputShape=[l,u,d,c];var f=+(r===`bilinear`),p=[o-1+`.0`,s-1+`.0`],m=p[0],h=p[1],g=u>1?[``+(o-1)/(u-1),`(y2-y1) * height_ratio`,`y1*`+m+` + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * `+m],_=g[0],v=g[1],y=g[2],b=d>1?[``+(s-1)/(d-1),`(x2-x1) * width_ratio`,`x1*`+h+` + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * `+h],x=b[0],S=b[1],C=b[2];this.userCode=`
      const float height_ratio = float(`+_+`);
      const float width_ratio = float(`+x+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+v+`;
        float width_scale = `+S+`;

        float in_y = `+y+`;
        if( in_y < 0.0 || in_y > `+m+` ) {
          setOutput(float(`+i+`));
          return;
        }
        float in_x = `+C+`;
        if( in_x < 0.0 || in_x > `+h+` ) {
          setOutput(float(`+i+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Xa=function(e,t,n){this.variableNames=[`x`],this.outputShape=e;var r=e.length,i=e[e.length-1],a=n?`<`:`>`;this.userCode=`
      int getIndex(int i) {
        `+(n?`return `+i+` -i - 1;`:`return i;`)+`
      }

      void main() {
        `+ha(r)+` coords = getOutputCoords();
        int end = `+Za(r,`coords`)+`;
        float val = 0.0;
        for (int i = `+i+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+Za(r,`coords`)+` = idx;
          val += getX(`+function(e,t){if(e===1)return``+t;if(e===2)return t+`.x, `+t+`.y`;if(e===3)return t+`.x, `+t+`.y, `+t+`.z`;if(e===4)return t+`.x, `+t+`.y, `+t+`.z, `+t+`.w`;throw Error(`Cumulative sum for rank `+e+` is not yet supported`)}(r,`coords`)+`);
        }
        setOutput(val);
      }
    `};function Za(e,t){if(e===1)return``+t;if(e===2)return t+`.y`;if(e===3)return t+`.z`;if(e===4)return t+`.w`;throw Error(`Cumulative sum for rank `+e+` is not yet supported`)}var Qa=function(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=gt.DENSE;var t=wt(e),n=na();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+ra([`r`,`c`,`d`],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+`, `+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+n.output+` = result;
      }
    `},$a=function(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=gt.DENSE;var t=wt(e),n=na();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+ra([`r`,`c`,`d`],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+`, `+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+n.output+` = result;
      }
    `},eo=function(){function e(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+t+`;
      int offset_h = imod(h, `+t+`);
      int in_w = w / `+t+`;
      int offset_w = imod(w, `+t+`);
      int offset_d = (offset_h * `+t+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return e.prototype.getHeightCoordString=function(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`},e.prototype.getWidthCoordString=function(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`},e.prototype.getDepthCoordString=function(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`},e.prototype.getOutputDepthSize=function(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]},e.prototype.getInputSamplingString=function(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`},e}(),to=function(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},no=function(e){this.variableNames=[`A`],this.outTexUsage=_t.DOWNLOAD;var t=na();this.outputShape=e,this.userCode=`
      `+aa+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},ro=function(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=_t.DOWNLOAD;var t=na();this.outputShape=e,this.userCode=`
      `+aa+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},io=function(e,t,n){n===void 0&&(n=!1),this.variableNames=[`A`];var r=na(),i=t[0],a=t[1];this.outputShape=e;var o=`result`;n&&(o=`floor(result * 255. + 0.5)`),this.userCode=`
      `+ia(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+`.0, `+i+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+` = vec4(`+o+`, 0., 0., 0.);
      }
    `},ao=function(e,t,n){n===void 0&&(n=!1),this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;var r=na(),i=t[0],a=t[1];this.outputShape=e;var o=``,s=`result`;n&&(s=`floor(result * 255. + 0.5)`);for(var c=0;c<=1;c++)for(var l=0;l<=1;l++){var u=2*c+l;o+=`
          localCoords = coords;
          if(localCoords[2] + `+l+` < `+e[2]+`) {
            localCoords[2] += `+l+`;
            if(localCoords[1] + `+c+` < `+e[1]+`) {
              localCoords[1] += `+c+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+`.0, `+i+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+u+`] = values[0];
              } else if(offset == 1) {
                result[`+u+`] = values[1];
              } else if(offset == 2) {
                result[`+u+`] = values[2];
              } else {
                result[`+u+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+ia(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+o+`

        `+r.output+` = `+s+`;
      }
    `},oo=`return real * expR - imag * expI;`,so=`return real * expI + imag * expR;`,co=function(e,t,n){this.variableNames=[`real`,`imag`];var r=t[1];this.outputShape=t;var i=n?`2.0 * `+Math.PI:`-2.0 * `+Math.PI,a=n?r+`.0`:`1.0`;this.userCode=`
      const float exponentMultiplier = `+i+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+e+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},lo=function(){function e(e,t){this.outputShape=[],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return e.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,r){t.valueLoc??=n.getUniformLocationNoThrow(r,`value`),n.gl.uniform1f(t.valueLoc,e)}},e}(),uo=function(e,t,n){this.variableNames=[`A`,`indices`];var r=e.slice();r[n]=t,this.outputShape=r,this.rank=r.length;var i=ha(this.rank),a=function(e,t){var n=e.length;if(n>4)throw Error(`Gather for rank `+n+` is not yet supported`);if(n===1)return`int(getIndices(resRC))`;for(var r=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],i=[],a=0;a<e.length;a++)a===t?i.push(`int(getIndices(`+r[a]+`))`):i.push(``+r[a]);return i.join()}(e,n);this.userCode=`
      void main() {
        `+i+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},fo=function(e,t,n){this.sliceDim=e,this.strides=t,this.variableNames=[`x`,`indices`],this.outputShape=n;var r=ha(t.length),i=ha(n.length),a=this.sliceDim>1?`strides[j]`:`strides`;this.userCode=`
        `+r+` strides = `+r+`(`+this.strides+`);
         void main() {
          `+i+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function po(e,t){var n=na();return Mt(e,t,n.version+`
    precision highp float;
    `+n.attribute+` vec3 clipSpacePos;
    `+n.attribute+` vec2 uv;
    `+n.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function mo(e,t){return Bt(e,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function ho(e,t){return Vt(e,t,new Uint16Array([0,1,2,2,1,3]))}function go(e,t,n,r,i,a,o){Ut(n,r);var s=Ht(e,t),c=e.TEXTURE_2D;return V(e,t,(function(){return e.bindTexture(c,s)})),V(e,t,(function(){return e.texParameteri(c,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)})),V(e,t,(function(){return e.texParameteri(c,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)})),V(e,t,(function(){return e.texParameteri(c,e.TEXTURE_MIN_FILTER,e.NEAREST)})),V(e,t,(function(){return e.texParameteri(c,e.TEXTURE_MAG_FILTER,e.NEAREST)})),V(e,t,(function(){return e.texImage2D(c,0,i,n,r,0,a,o,null)})),V(e,t,(function(){return e.bindTexture(e.TEXTURE_2D,null)})),s}function _o(e,t,n,r,i){var a=Ct(n,r);return go(e,t,a[0],a[1],i.internalFormatFloat,i.textureFormatFloat,e.FLOAT)}function vo(e,t,n,r,i){var a=Ct(n,r);return go(e,t,a[0],a[1],i.internalFormatHalfFloat,i.textureFormatFloat,i.textureTypeHalfFloat)}function yo(e,t,n,r,i){var a=Ct(n,r);return go(e,t,a[0],a[1],e.RGBA,e.RGBA,e.UNSIGNED_BYTE)}function bo(e,t,n,r,i){var a=Tt(n,r);return go(e,t,a[0],a[1],i.internalFormatPackedFloat,e.RGBA,e.FLOAT)}function xo(e,t,n,r,i){var a=Tt(n,r);return go(e,t,a[0],a[1],i.internalFormatPackedHalfFloat,e.RGBA,i.textureTypeHalfFloat)}function So(e,t,n,r){return V(e,t,(function(){return e.bindBuffer(e.ARRAY_BUFFER,r)})),Gt(e,t,n,`clipSpacePos`,r,3,20,0)&&Gt(e,t,n,`uv`,r,2,20,12)}function Co(e,t,n,r,i,a,o){var s,c,l;V(e,t,(function(){return e.bindTexture(e.TEXTURE_2D,n)})),a instanceof Uint8Array?(s=new Uint8Array(r*i*4),c=e.UNSIGNED_BYTE,l=e.RGBA):(s=new Float32Array(r*i*4),c=e.FLOAT,l=o.internalFormatPackedFloat),s.set(a),V(e,t,(function(){return e.texImage2D(e.TEXTURE_2D,0,l,r,i,0,e.RGBA,c,s)})),V(e,t,(function(){return e.bindTexture(e.TEXTURE_2D,null)}))}function wo(e,t,n,r){V(e,t,(function(){return e.bindTexture(e.TEXTURE_2D,n)})),r.data instanceof Uint8Array?V(e,t,(function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)})):V(e,t,(function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)})),V(e,t,(function(){return e.bindTexture(e.TEXTURE_2D,null)}))}function To(e,t,n,r,i){var a=e.createBuffer();V(e,t,(function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,a)}));var o=16*n*r;return V(e,t,(function(){return e.bufferData(e.PIXEL_PACK_BUFFER,o,e.STREAM_READ)})),V(e,t,(function(){return e.readPixels(0,0,r,n,e.RGBA,e.FLOAT,0)})),V(e,t,(function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,null)})),a}function Eo(e,t,n){var r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function Do(e,t,n,r,i){var a=Ct(n,r),o=a[0],s=a[1],c=new Uint8Array(n*r*4);return V(e,t,(function(){return e.readPixels(0,0,o,s,i.downloadTextureFormat,e.UNSIGNED_BYTE,c)})),new Float32Array(c.buffer)}function Oo(e,t,n,r,i,a,o,s){var c=e,l=new Float32Array(function(e,t){var n=Tt(e,t);return n[0]*n[1]*4}(a,o));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function ko(e,t,n,r){var i=new Float32Array(n*r*4);return V(e,t,(function(){return e.readPixels(0,0,r,n,e.RGBA,e.FLOAT,i)})),i}var Ao=Object.freeze({createVertexShader:po,createVertexBuffer:mo,createIndexBuffer:ho,createFloat32MatrixTexture:_o,createFloat16MatrixTexture:vo,createUnsignedBytesMatrixTexture:yo,createPackedMatrixTexture:bo,createFloat16PackedMatrixTexture:xo,bindVertexProgramAttributeStreams:So,uploadDenseMatrixToTexture:Co,uploadPixelDataToTexture:wo,createBufferFromOutputTexture:To,downloadFloat32MatrixFromBuffer:Eo,downloadByteEncodedFloatMatrixFromOutputTexture:Do,downloadPackedMatrixFromBuffer:Oo,downloadMatrixFromPackedOutputTexture:ko}),jo=function(){function e(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var t=E().getNumber(`WEBGL_VERSION`);e==null?this.gl=St(t):(this.gl=e,xt(t,e));var n=`WEBGL_color_buffer_float`;if(E().getNumber(`WEBGL_VERSION`)===1){if(this.textureFloatExtension=jt(this.gl,this.debug,`OES_texture_float`),fn(this.gl,`OES_texture_half_float`))this.textureHalfFloatExtension=jt(this.gl,this.debug,`OES_texture_half_float`);else if(E().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),fn(this.gl,`EXT_color_buffer_half_float`))this.colorBufferHalfFloatExtension=jt(this.gl,this.debug,`EXT_color_buffer_half_float`);else if(E().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,fn(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!fn(this.gl,`EXT_color_buffer_half_float`))throw Error(`GL context does not support color renderable floats`);this.colorBufferHalfFloatExtension=this.gl.getExtension(`EXT_color_buffer_half_float`)}this.vertexBuffer=mo(this.gl,this.debug),this.indexBuffer=ho(this.gl,this.debug),this.framebuffer=Wt(this.gl,this.debug),this.textureConfig=Et(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(e.prototype,"debug",{get:function(){return E().getBool(`DEBUG`)},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var e=this;if(!this.disposed){this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);var t=this.gl;V(t,this.debug,(function(){return t.finish()})),V(t,this.debug,(function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)})),V(t,this.debug,(function(){return t.deleteFramebuffer(e.framebuffer)})),V(t,this.debug,(function(){return t.bindBuffer(t.ARRAY_BUFFER,null)})),V(t,this.debug,(function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)})),V(t,this.debug,(function(){return t.deleteBuffer(e.indexBuffer)})),this.disposed=!0}},e.prototype.createFloat32MatrixTexture=function(e,t){return this.throwIfDisposed(),_o(this.gl,this.debug,e,t,this.textureConfig)},e.prototype.createFloat16MatrixTexture=function(e,t){return this.throwIfDisposed(),vo(this.gl,this.debug,e,t,this.textureConfig)},e.prototype.createUnsignedBytesMatrixTexture=function(e,t){return this.throwIfDisposed(),yo(this.gl,this.debug,e,t,this.textureConfig)},e.prototype.uploadPixelDataToTexture=function(e,t){this.throwIfDisposed(),wo(this.gl,this.debug,e,t)},e.prototype.uploadDenseMatrixToTexture=function(e,t,n,r){this.throwIfDisposed(),Co(this.gl,this.debug,e,t,n,r,this.textureConfig)},e.prototype.createFloat16PackedMatrixTexture=function(e,t){return this.throwIfDisposed(),xo(this.gl,this.debug,e,t,this.textureConfig)},e.prototype.createPackedMatrixTexture=function(e,t){return this.throwIfDisposed(),bo(this.gl,this.debug,e,t,this.textureConfig)},e.prototype.deleteMatrixTexture=function(e){var t=this;this.throwIfDisposed(),this.outputTexture===e&&(Zt(this.gl,this.debug,this.framebuffer),this.outputTexture=null),V(this.gl,this.debug,(function(){return t.gl.deleteTexture(e)}))},e.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,(function(){return Do(r.gl,r.debug,t,n,r.textureConfig)}))},e.prototype.downloadPackedMatrixFromBuffer=function(e,t,n,r,i,a){return Oo(this.gl,e,0,0,0,i,a,this.textureConfig)},e.prototype.downloadFloat32MatrixFromBuffer=function(e,t){return Eo(this.gl,e,t)},e.prototype.createBufferFromTexture=function(e,t,n){this.bindTextureToFrameBuffer(e);var r=To(this.gl,this.debug,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r},e.prototype.createAndWaitForFence=function(){var e=this.createFence(this.gl);return this.pollFence(e)},e.prototype.createFence=function(e){var t,n,r=this;if(E().getBool(`WEBGL_FENCE_API_ENABLED`)){var i=e,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=function(){var e=i.clientWaitSync(a,0,0);return e===i.ALREADY_SIGNALED||e===i.CONDITION_SATISFIED},t=a}else E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0?(t=this.beginQuery(),this.endQuery(),n=function(){return r.isQueryAvailable(t,E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}):n=function(){return!0};return{query:t,isFencePassed:n}},e.prototype.downloadMatrixFromPackedTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,(function(){return ko(r.gl,r.debug,t,n)}))},e.prototype.createProgram=function(e){this.throwIfDisposed();var t=this.gl,n=Nt(t,this.debug,e),r=po(t,this.debug),i=Lt(t,this.debug);return V(t,this.debug,(function(){return t.attachShader(i,r)})),V(t,this.debug,(function(){return t.attachShader(i,n)})),Rt(t,this.debug,i),this.debug&&zt(t,this.debug,i),this.vertexAttrsAreBound||=(this.setProgram(i),So(t,this.debug,this.program,this.vertexBuffer)),i},e.prototype.deleteProgram=function(e){var t=this;this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&V(this.gl,this.debug,(function(){return t.gl.deleteProgram(e)}))},e.prototype.setProgram=function(e){var t=this;this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&zt(this.gl,this.debug,this.program),V(this.gl,this.debug,(function(){return t.gl.useProgram(e)}))},e.prototype.getUniformLocation=function(e,t,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?qt(this.gl,this.debug,e,t):Jt(this.gl,e,t)},e.prototype.getAttributeLocation=function(e,t){var n=this;return this.throwIfDisposed(),V(this.gl,this.debug,(function(){return n.gl.getAttribLocation(e,t)}))},e.prototype.getUniformLocationNoThrow=function(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)},e.prototype.setInputMatrixTexture=function(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),Yt(this.gl,this.debug,this.program,e,t,n)},e.prototype.setOutputMatrixTexture=function(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)},e.prototype.setOutputPackedMatrixTexture=function(e,t,n){this.throwIfDisposed();var r=Tt(t,n),i=r[0],a=r[1];this.setOutputMatrixTextureDriver(e,i,a)},e.prototype.setOutputMatrixWriteRegion=function(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)},e.prototype.setOutputPackedMatrixWriteRegion=function(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)},e.prototype.debugValidate=function(){this.program!=null&&zt(this.gl,this.debug,this.program),Qt(this.gl)},e.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var e=this.gl;this.debug&&this.debugValidate(),V(e,this.debug,(function(){return e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}))},e.prototype.blockUntilAllProgramsCompleted=function(){var e=this;this.throwIfDisposed(),V(this.gl,this.debug,(function(){return e.gl.finish()}))},e.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension??=jt(this.gl,this.debug,E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension},e.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},e.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},e.prototype.beginQuery=function(){if(E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){var e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}var r=this.getQueryTimerExtensionWebGL1(),i=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,i),i},e.prototype.endQuery=function(){if(E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)!==2){var e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}else{var t=this.gl,n=this.getQueryTimerExtensionWebGL2();t.endQuery(n.TIME_ELAPSED_EXT)}},e.prototype.waitForQueryAndGetTime=function(e){return S(this,void 0,void 0,(function(){var t=this;return C(this,(function(n){switch(n.label){case 0:return[4,de((function(){return t.disposed||t.isQueryAvailable(e,E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}))];case 1:return n.sent(),[2,this.getQueryTime(e,E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))]}}))}))},e.prototype.getQueryTime=function(e,t){if(t===0)return null;if(t===2){var n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}var r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)/1e6},e.prototype.isQueryAvailable=function(e,t){if(t===0)return!0;if(t===2){var n=this.gl,r=this.getQueryTimerExtensionWebGL2(),i=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(r.GPU_DISJOINT_EXT),i&&!this.disjoint}return i=(r=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT),this.disjoint??=this.gl.getParameter(r.GPU_DISJOINT_EXT),i&&!this.disjoint},e.prototype.pollFence=function(e){var t=this;return new Promise((function(n){t.addItemToPoll((function(){return e.isFencePassed()}),(function(){return n()}))}))},e.prototype.pollItems=function(){for(var e=function(e){for(var t=0;t<e.length&&e[t]();++t);return t-1}(this.itemsToPoll.map((function(e){return e.isDoneFn}))),t=0;t<=e;++t)(0,this.itemsToPoll[t].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(e+1)},e.prototype.addItemToPoll=function(e,t){var n=this;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||de((function(){return n.pollItems(),n.itemsToPoll.length===0}))},e.prototype.bindTextureToFrameBuffer=function(e){this.throwIfDisposed(),Xt(this.gl,this.debug,e,this.framebuffer),this.debug&&Qt(this.gl)},e.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture==null?Zt(this.gl,this.debug,this.framebuffer):(Xt(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Qt(this.gl))},e.prototype.downloadMatrixDriver=function(e,t){this.bindTextureToFrameBuffer(e);var n=t();return this.unbindTextureToFrameBuffer(),n},e.prototype.setOutputMatrixTextureDriver=function(e,t,n){this.throwIfDisposed();var r=this.gl;Xt(r,this.debug,e,this.framebuffer),this.debug&&Qt(r),this.outputTexture=e,V(r,this.debug,(function(){return r.viewport(0,0,t,n)})),V(r,this.debug,(function(){return r.scissor(0,0,t,n)}))},e.prototype.setOutputMatrixWriteRegionDriver=function(e,t,n,r){var i=this;this.throwIfDisposed(),V(this.gl,this.debug,(function(){return i.gl.scissor(e,t,n,r)}))},e.prototype.throwIfDisposed=function(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)},e.prototype.throwIfNoProgram=function(){if(this.program==null)throw Error(`No GPU program is currently set.`)},e}();function Mo(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with `+e.length+` inputs, but was executed with `+t.length+` inputs`);e.forEach((function(e,n){var r=e.logicalShape,i=t[n],a=i.shape;if(!oe(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes `+r+` and `+a+` must match`);if(!e.isUniform||!i.isUniform){var o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!oe(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape `+o+` and `+s+` must match`)}}))}var No=function(e,t,n){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var r=n.filterWidth,i=n.inChannels,a=n.strideWidth,o=n.strideHeight,s=n.padInfo,c=n.outWidth,l=n.dilationWidth,u=n.dilationHeight,d=n.dataFormat,f=s.left,p=s.top,m=i*r,h=na(),g=d===`channelsLast`,_=+!g,v=g?1:2,y=``,b=0;b<=1;b++)for(var x=0;x<=1;x++)y+=`
          blockIndex = rc.y + `+x+`;
          pos = rc.x + `+b+`;

          if(blockIndex < `+e[1]+` && pos < `+e[0]+`) {
            offsetY = int(blockIndex / (`+c+`)) * `+o+` - `+p+`;
            d0 = offsetY + `+u+` * (pos / `+m+`);

            if(d0 < `+t[_]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+c+`.) * `+a+`. - `+f+`.);
              d1 = offsetX + `+l+` * (int(mod(float(pos), `+m+`.) / `+i+`.));

              if(d1 < `+t[v]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+i+`.));

                if (`+g+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*b+x)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*b+x)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+y+`

        `+h.output+` = result;
      }
    `},Po=function(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];var a,o=t,s=e[3]-1;this.outputShape=e;var c=`float(`+n+`) + float(`+r+`) * sum`;a=i===.5?`inversesqrt(`+c+`)`:i===1?`1.0/(`+c+`)`:`exp(log(`+c+`) * float(-`+i+`));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+o+`; j <= `+o+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},Fo=function(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+`) * norm + float(`+n+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+i+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+i+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},Io=function(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,o=t,s=e[3]-1;this.outputShape=e;var c=`float(`+n+`) + float(`+r+`) * sum`;a=i===.5?`inversesqrt(`+c+`)`:i===1?`1.0/(`+c+`)`:`exp(log(`+c+`) * float(-`+i+`));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+o+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+o+`; j <= `+o+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},Lo=function(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;var t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+o+`, `+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+i+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+n+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+c+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Ro=function(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;var t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(`+u+`, `+d+`, `+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+i+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+c+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+n+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+l+`;
                wC += `+o+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+c+` * `+l+` +
                  wR * `+l+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},zo=function(e,t,n,r,i,a,o){n===void 0&&(n=!1),r===void 0&&(r=!1),i===void 0&&(i=!1),a===void 0&&(a=null),o===void 0&&(o=!1),this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=n?e[1]:e[2],c=Math.ceil(s/2),l=n?`i * 2, rc.y`:`rc.y, i * 2`,u=r?`rc.z, i * 2`:`i * 2, rc.z`,d=n?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],f=r?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],p=``,m=``;a&&(p=o?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,m=`result = activation(result);`);var h=i?`result += getBiasAtOutCoords();`:``;i&&this.variableNames.push(`bias`),o&&this.variableNames.push(`preluActivationWeights`),this.userCode=`
      `+p+`

      const float sharedDimension = `+c+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+c+`; i++) {
          vec4 a = getMatrixA(rc.x, `+l+`);
          vec4 b = getMatrixB(rc.x, `+u+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+d[0]+` * `+f[0]+`);
          result += (`+d[1]+` * `+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+h+`

        `+m+`

        setOutput(result);
      }
    `},Bo=function(){function e(e,t,n){this.variableNames=[`probs`],this.outputShape=[e,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(t-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(t-1)+`));
      }
    `}return e.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,r){t.seedLoc??=n.getUniformLocation(r,`seed`),n.gl.uniform1f(t.seedLoc,e)}},e}(),Vo=function(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+`), float(`+n+`),
                      float(index == coords.y)));
      }
    `},Ho=function(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e;var t=e.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var n=ta(`rc`,t),r=ha(t),i=function(e,t,n){if(e===1)return`rc > `+t[0];for(var r=``,i=e-2;i<e;i++)r+=n[i]+` >= `+t[i],i<e-1&&(r+=`||`);return r}(t,e,n),a=function(e,t,n,r){if(e===1)return``;var i=r.slice(-2);return`
    int r = `+i[0]+`;
    int c = `+i[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+t+`;
    bool rEdge = rp1 >= `+n+`;
  `}(t,e[e.length-1],e[e.length-2],n),o=function(e,t){var n=e.length,r=function(e,t){for(var n=[],r=0;r<=1;r++)for(var i=0;i<=1;i++){for(var a=(r===0?`r`:`rp1`)+`, `+(i===0?`c`:`cp1`),o=2;o<e;o++)a=t[t.length-1-o]+`,`+a;n.push(a)}return n}(n,t);return n===1?`getA(rc),
            rc + 1 >= `+e[0]+` ? 0. : getA(rc + 1),
            0, 0`:`getA(`+r[0]+`),
          cEdge ? 0. : getA(`+r[1]+`),
          rEdge ? 0. : getA(`+r[2]+`),
          rEdge || cEdge ? 0. : getA(`+r[3]+`)`}(e,n);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+i+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+o+`));
          }
        }
      `}},Uo=function(e,t,n){this.variableNames=[`x`],this.outputShape=t.map((function(t,n){return t[0]+e[n]+t[1]}));var r=e.length,i=ha(r),a=t.map((function(e){return e[0]})).join(`,`),o=t.map((function(t,n){return t[0]+e[n]})).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);this.userCode=r===1?`
        int start = `+a+`;
        int end = `+o+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+n+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `:`
      `+i+` start = `+i+`(`+a+`);
      `+i+` end = `+i+`(`+o+`);

      void main() {
        `+i+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+n+`));
        } else {
          `+i+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `},Wo=function(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((function(t,n){return t[0]+e[n]+t[1]}));for(var r=e.length,i=ha(r),a=t.map((function(e){return e[0]})).join(`,`),o=t.map((function(t,n){return t[0]+e[n]})).join(`,`),s=ta(`rc`,r),c=ta(`source`,r),l=s[r-1]+` < `+this.outputShape[r-1],u=r===1?`source`:`vec2(`+c.slice(-2).join()+`)`,d=[i+` rc = outputLoc;`,s[r-1]+` += 1;
       if(`+l+`) {
      `,r===1?``:`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+` < `+this.outputShape[r-2]+`) {`,r===1?``:`  `+s[r-1]+` += 1;
         if(`+l+`) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``,m=0,h=r===1?2:4;m<h;m++)p+=`
        `+d[m]+`
        if (`+f+`) {
          result[`+m+`] = float(`+n+`);
        } else {
          `+i+` source = rc - start;
          result[`+m+`] = getChannel(getX(`+c.join()+`), `+u+`);
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const `+i+` start = `+i+`(`+a+`);
      const `+i+` end = `+i+`(`+o+`);

      void main() {
        `+i+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},Go=function(e,t,n){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);var r=e.filterWidth,i=e.strideHeight,a=e.strideWidth,o=e.dilationHeight,s=e.dilationWidth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=e.padInfo.top,d=e.padInfo.left;this.outputShape=e.outShape;var f=t===`avg`,p=`0.0`;if(f||(p=`-1.0 / 1e-20`),n)this.userCode=`
        const ivec2 strides = ivec2(`+i+`, `+a+`);
        const ivec2 pads = ivec2(`+u+`, `+d+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+c+`;
              wR += `+o+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+l+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+l+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var m=t+`(`+t+`(`+t+`(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(m=`avgValue / count`);var h=4*Math.floor(r/4),g=r%4,_=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+i+`, `+a+`);
      const ivec2 pads = ivec2(`+u+`, `+d+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+c+`;
            wR += `+o+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+_+`
          }

          int xC = xCCorner + `+h+`;
          if (`+(g===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+_+`
          } else if (`+(g===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+_+`
          } else if (`+(g===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+_+`
          }
        }
        setOutput(`+m+`);
      }
    `}},Ko=function(e,t,n){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);var r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=e.padInfo.front,m=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;var g=t===`avg`,_=`0.0`;if(g||(_=`-1.0 / 1e-20`),n)this.userCode=`
        const ivec3 strides =
            ivec3(`+i+`, `+a+`, `+o+`);
        const ivec3 pads = ivec3(`+p+`, `+m+`, `+h+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+u+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+e.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+d+`;
                wR += `+c+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+l+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+d+` * `+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var v=t+`(`+t+`(`+t+`(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / count`);var y=4*Math.floor(r/4),b=r%4,x=`
      if (`+g+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+i+`, `+a+`, `+o+`);
      const ivec3 pads = ivec3(`+p+`, `+m+`, `+h+`);
      const float initializationValue = `+_+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+_+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+u+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+d+`;
            wR += `+c+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+y+`; wC += 4) {
              int xC = xCCorner + wC * `+l+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+l+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+l+`, ch)
              );

              `+x+`
            }

            int xC = xCCorner + `+y+`;
            if (`+(b===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+x+`
            } else if (`+(b===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                initializationValue,
                initializationValue
              );

              `+x+`
            } else if (`+(b===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+l+`, ch),
                initializationValue
              );

              `+x+`
            }
          }
          setOutput(`+v+`);
        }
      }
    `}},qo=function(e,t){this.variableNames=[`x`];var n=e.windowSize,r=e.batchSize,i=e.inSize,a=Math.ceil(i/n);this.outputShape=[r,a];var o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);var c=t+`(`+t+`(`+t+`(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);var l=4*Math.floor(n/4),u=n%4,d=`
      if (`+(t===`sum`)+`) {
        sumValue += dot(values, ones);
      } else if (`+(t===`prod`)+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);var p=``;i%n>0&&(p=`
        if (inIdx < 0 || inIdx >= `+i+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+o+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        vec4 minMaxValue = vec4(`+o+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+l+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+` values = `+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+d+`
        }

        int inIdx = inOffset + `+l+`;
        if (`+(u===1)+`) {
          `+f+` values = `+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+d+`
        } else if (`+(u===2)+`) {
          `+f+` values = `+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+d+`
        } else if (`+(u===3)+`) {
          `+f+` values = `+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+d+`
        }
        setOutput(`+c+`);
      }
    `},Jo=function(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var n=``,r=0;r<4;r++){var i=`thisRC = rc;`;r%2==1&&(i+=`thisRC.z += 1;`),r>1&&(i+=`thisRC.y += 1;`),n+=`
        `+i+`
        `+(r>0?`if(thisRC.y < rows && thisRC.z < cols){`:``)+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?`}`:``)+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+ra([`r`,`c`,`d`],t)+`
      return ivec3(r, c, d);
    }
  
      `+ia(e)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+e[1]+`;
        int cols = `+e[2]+`;

        `+n+`

        setOutput(result);
      }
    `},Yo=function(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,i=r[1],a=r[2],o=e.shape,s=o[1],c=o[2],l=[n&&s>1?i-1:i,n&&c>1?a-1:a],u=[n&&s>1?s-1:s,n&&c>1?c-1:c],d=l[0]/u[0],f=l[1]/u[1],p=1/d,m=1/f,h=2*Math.ceil(p)+2,g=2*Math.ceil(m)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+d+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+m+`);

        const int winHeight = int(`+h+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+c+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(i-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Xo=function(e,t,n,r){this.variableNames=[`A`],this.outputShape=[];var i=e[0],a=e[1],o=e[2],s=e[3];this.outputShape=[i,t,n,s];var c=[r&&t>1?a-1:a,r&&n>1?o-1:o],l=[r&&t>1?t-1:t,r&&n>1?n-1:n];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+c[0]/l[0]+`,
          `+c[1]/l[1]+`);
      const vec2 inputShapeRC = vec2(`+a+`.0, `+o+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Zo=function(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var i=e[0],a=e[1],o=e[2],s=e[3];this.outputShape=[i,t,n,s];var c=[r&&t>1?a-1:a,r&&n>1?o-1:o],l=[r&&t>1?t-1:t,r&&n>1?n-1:n];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+c[0]/l[0]+`,
          `+c[1]/l[1]+`,
          `+c[1]/l[1]+`);
      const vec3 inputShapeRC = vec3(`+a+`.0, `+o+`.0,
                                     `+o+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(n-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},Qo=function(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,i=r[1],a=r[2],o=e.shape,s=o[1],c=o[2],l=[n&&s>1?i-1:i,n&&c>1?a-1:a],u=[n&&s>1?s-1:s,n&&c>1?c-1:c],d=l[0]/u[0],f=l[1]/u[1],p=1/d,m=1/f,h=2*Math.ceil(p)+2,g=2*Math.ceil(m)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+d+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+m+`);

        const int winHeight = int(`+h+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+c+`) {
              continue;
            }

            float sourceFracRow =
              float(`+l[0]+`) *
                (float(dyR) / float(`+u[0]+`));

            float sourceFracCol =
                float(`+l[1]+`) *
                  (float(dyC) / float(`+u[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+i+`) - 1),
                `+n+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+n+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},$o=function(e,t,n,r){this.variableNames=[`A`],this.outputShape=[];var i=e[0],a=e[1],o=e[2],s=e[3];this.outputShape=[i,t,n,s];var c=[r&&t>1?a-1:a,r&&n>1?o-1:o],l=[r&&t>1?t-1:t,r&&n>1?n-1:n],u=r?`0.5`:`0.0`;this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+c[0]/l[0]+`,
          `+c[1]/l[1]+`);
      const vec2 inputShapeRC = vec2(`+a+`.0, `+o+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+u+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},es=function(e,t){this.variableNames=[`x`];var n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-`+n+` tensor is not yet supported`);if(this.outputShape=e,n!==1){var r=e.map((function(n,r){return function(n){return t.indexOf(n)!==-1&&e[n]!==1?e[n]+` - coords[`+n+`] - 1`:`coords[`+n+`]`}(r)})).join(`,`),i=ha(n);this.userCode=`
      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+e[0]+` - coord - 1));
        }
      `},ts=function(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;var n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-`+n+` tensor is not yet supported`);this.outputShape=e;var r=ta(`rc`,n),i=r[n-1]+` + 1 < `+this.outputShape[n-1],a=r[n-2]+` + 1 < `+this.outputShape[n-2],o=ha(n);function s(n){var r=e.map((function(r,i){return function(n,r){return t.indexOf(n)!==-1&&e[n]!==1?e[n]+` - `+r[n]+` - 1`:``+r[n]}(i,n)}));return`getChannel(getX(`+r.join(`,`)+`), vec2(`+r.slice(-2).join(`,`)+`))`}this.userCode=n===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+e[0]+` - rc - 1),
            `+e[0]+` - rc - 1);
          if(`+i+`){
              result.g = getChannel(getX(`+e[0]+` - (rc  + 1) - 1),
                `+e[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+o+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(e){return s(e)}(r.slice())+`;
          if(`+i+`){
            result.g = `+function(e){return e[n-1]=`(`+e[n-1]+` + 1)`,s(e)}(r.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(e){return e[n-2]=`(`+e[n-2]+` + 1)`,s(e)}(r.slice())+`;
            if(`+i+`) {
              result.a = `+function(e){return e[n-1]=`(`+e[n-1]+` + 1)`,e[n-2]=`(`+e[n-2]+` + 1)`,s(e)}(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},ns=function(e,t,n,r,i,a,o){o===void 0&&(o=!0),this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;var s=ha(i.length),c=ha(a.length),l=``;n===1?l=`i`:n===2&&(l=`i, j`);var u=`getIndices(`+l+`)`,d=``;r===1?d=`i`:r===2&&(d=`i, coords[1]`);var f=`getUpdates(`+d+`)`,p=t>1?`strides[j]`:`strides`;this.userCode=`
        `+s+` strides = `+s+`(`+i+`);

        void main() {
          `+c+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+e+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+u+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},rs=function(e,t){this.variableNames=[`x`,`segmentIds`];var n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];var s=4*Math.floor(n/4),c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;i%n>0&&(u=`
        if (inIdx < 0 || inIdx >= `+i+`) {
          return initializationValue;
        }
      `);var d=``;i%n>0&&(d=`
        if (inIdx < 0 || inIdx >= `+i+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+u+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+d+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+`)) * float(`+n+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+l+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(c===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+l+`
        } else if (`+(c===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+l+`
        } else if (`+(c===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+l+`
        }
        setOutput(sumValue);
      }
    `},is=function(e,t,n){var r,i;if(this.variableNames=[`c`,`a`,`b`],this.outputShape=t,n>4)throw Error(`Where for rank `+n+` is not yet supported`);if(n===1)i=`resRC`,r=`resRC`;else{for(var a=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],o=[],s=[],c=0;c<t.length;c++)s.push(``+a[c]),c<e&&o.push(``+a[c]);r=o.join(),i=s.join()}var l=ha(n);this.userCode=`
      void main() {
        `+l+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+i+`));
        } else {
          setOutput(getB(`+i+`));
        }
      }
    `},as=function(){function e(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;var t,n=ha(this.rank),r=`uniform int start[`+this.rank+`];`,i=function(e){if(e===1)return`sourceLoc`;if(e<=6)return os.slice(0,e).map((function(e){return`sourceLoc.`+e})).join(`,`);throw Error(`Slicing for rank `+e+` is not yet supported`)}(this.rank);t=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+e.map((function(e,t){return`sourceLoc.`+os[t]+` = start[`+t+`] + coords.`+os[t]+`;`})).join(`
`)+`
      `,this.userCode=`
      `+r+`
      void main() {
        `+t+`
        setOutput(getSource(`+i+`));
      }
    `}return e.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error(`The rank (`+this.rank+`) of the program must match the length of start (`+e.length+`)`);return function(n,r){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(r,`start`),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},e}(),os=[`x`,`y`,`z`,`w`,`u`,`v`],ss=function(){function e(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length;var t=ha(this.rank),n=ta(`coords`,this.rank),r=ta(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(`+r.slice(-2).join()+`)`,a=`getChannel(getSource(`+r.join()+`), `+i+`)`,o=`
      result.x = `+a+`;
      if (++`+n[this.rank-1]+` < `+e[this.rank-1]+`) {
        ++`+r[this.rank-1]+`;
        result.y = `+a+`;
        --`+r[this.rank-1]+`;
      }
    `,s=this.rank===1?``:`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+` < `+e[this.rank-2]+`) {
        ++`+r[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+n[this.rank-1]+` < `+e[this.rank-1]+`) {
          ++`+r[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+t+`(`+e.map((function(e,t){return`start[`+t+`]`})).join()+`);`:e.map((function(e,t){return r[t]+` = `+n[t]+` + start[`+t+`];`})).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+t+` coords = getOutputCoords();
        `+t+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+o+`
        `+s+`
        setOutput(result);
      }
    `}return e.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error(`The rank (`+this.rank+`) of the program must match the length of start (`+e.length+`)`);return function(n,r){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(r,`start`),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},e}(),cs=function(e,t,n){this.variableNames=[`x`],this.outputShape=n;var r=n.length,i=ha(n.length),a=ha(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{var s=0;o=n.map((function(e,t){return s++,n.length===1?`coords * strides[`+t+`] + begin[`+t+`]`:`coords[`+(s-1)+`] * strides[`+t+`] + begin[`+t+`]`})).join(`,`)}this.userCode=`
      `+i+` begin = `+i+`(`+e+`);
      `+i+` strides = `+i+`(`+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+o+`));
      }
    `},ls=function(){function e(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return e.prototype.acquireTexture=function(e,t,n){var r,i=us(t,n),a=ds(e,i,n);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var o=this.freeTextures[a].shift();return this.usedTextures[a].push(o),o}return this.numUsedTextures++,this.log(),i===vt.PACKED_2X2_FLOAT32?r=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):i===vt.PACKED_2X2_FLOAT16?r=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):i===vt.UNPACKED_FLOAT32?r=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):i===vt.UNPACKED_FLOAT16?r=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):i===vt.PACKED_4X1_UNSIGNED_BYTE&&(r=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[a].push(r),r},e.prototype.releaseTexture=function(e,t,n,r){if(this.freeTextures!=null){var i=ds(t,us(n,r),r);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(e),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],o=a.indexOf(e);if(o<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);a.splice(o,1),this.log()}},e.prototype.log=function(){if(this.logEnabled){var e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,this.numFreeTextures+` / `+this.numUsedTextures,`(`+e+`)`)}},e.prototype.getNumUsedTextures=function(){return this.numUsedTextures},e.prototype.getNumFreeTextures=function(){return this.numFreeTextures},e.prototype.dispose=function(){var e=this;if(this.freeTextures!=null){for(var t in this.freeTextures)this.freeTextures[t].forEach((function(t){e.gpgpu.deleteMatrixTexture(t)}));for(var t in this.usedTextures)this.usedTextures[t].forEach((function(t){e.gpgpu.deleteMatrixTexture(t)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},e}();function us(e,t){if(e===_t.UPLOAD)return vt.PACKED_2X2_FLOAT32;if(e===_t.RENDER||e==null)return function(e){return E().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?e?vt.PACKED_2X2_FLOAT32:vt.UNPACKED_FLOAT32:e?vt.PACKED_2X2_FLOAT16:vt.UNPACKED_FLOAT16}(t);if(e===_t.DOWNLOAD||e===_t.PIXELS)return vt.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type `+e)}function ds(e,t,n){return e[0]+`_`+e[1]+`_`+t+`_`+n}var fs=function(e,t){this.variableNames=[`A`];for(var n=Array(e.length),r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;var i=ha(this.rank),a=function(e){var t=e.length;if(t>5)throw Error(`Tile for rank `+t+` is not yet supported`);if(t===1)return`imod(resRC, `+e[0]+`)`;for(var n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[],i=0;i<e.length;i++)r.push(`imod(`+n[i]+`, `+e[i]+`)`);return r.join()}(e);this.userCode=`
      void main() {
        `+i+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},ps=function(e,t){this.variableNames=[`A`];for(var n=Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;var i=ha(this.rank),a=function(e){var t=e.length;if(t>6)throw Error(`Transpose for rank `+t+` is not yet supported`);for(var n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t),i=0;i<e.length;i++)r[e[i]]=n[i];return r.join()}(t);this.userCode=`
    void main() {
      `+i+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},ms=function(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;for(var n=Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank `+this.rank+` is not yet supported.`);var i=ha(this.rank),a=ea(`rc`,this.rank),o=Array(this.rank);for(r=0;r<t.length;r++)o[t[r]]=a[r];var s=`vec2(`+o.slice(-2).join()+`)`,c=`++`+a[this.rank-1]+` < `+n[this.rank-1],l=`getChannel(getA(`+o.join()+`), `+s+`)`;this.userCode=`
    void main() {
      `+i+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+l+`;
      if(`+c+`) {
        result[1] = `+l+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+` < `+n[this.rank-2]+`) {
        result[2] = `+l+`;
        if(`+c+`) {
          result[3] = `+l+`;
        }
      }
      setOutput(result);
    }
    `},hs=1.7580993408473768,gs=1.0507009873554805,_s=function(e,t){this.variableNames=[`A`],this.outputShape=e,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},vs=`if (isnan(x)) return x;`,ys=`return x;`,bs=`return abs(x);`,xs=vs+`
  return (x < 0.0) ? 0.0 : x;
`,Ss=vs+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Cs=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,ws=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+hs+`;
  float scale = `+gs+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Ts=`return -x;`,Es=`return ceil(x);`,Ds=`return floor(x);`,Os=`return exp(x);`,ks=`return exp(x) - 1.0;`,As=vs+`
  return sin(x);
`,js=vs+`
  return cos(x);
`,Ms=vs+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Ns=vs+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Ps=vs+`
  return atan(x);
`,Fs=vs+`return log(x + sqrt(x * x + 1.0));`,Is=vs+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Ls=vs+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Rs=`return x;`,zs=`return x;`,Bs=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Vs=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Hs=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Us=function(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Ws=function(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e;var t=e.length,n=ta(`rc`,t),r=ha(t),i=function(e,t){if(e===1)return`rc`;for(var n=``,r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(`+a.join(`,`)+`)`;this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+i+`);

        setOutput(getChannel(packedInput, `+o+`));
      }
    `},Gs={};function Ks(e,t){if(t===void 0&&(t=!1),e===`linear`)return t?zs:ys;if(e===`relu`)return t?Bs:xs;if(e===`elu`)return t?Hs:Cs;if(e===`relu6`)return t?Vs:Ss;if(e===`prelu`)return t?ja:ka;throw Error(`Activation `+e+` has not been implemented for the WebGL backend.`)}var qs=600,Js=function(e){function t(t){var n,r=e.call(this)||this;if(r.pendingRead=new WeakMap,r.pendingDisposal=new WeakSet,r.dataRefCount=new WeakMap,r.numBytesInGPU=0,r.uploadWaitMs=0,r.downloadWaitMs=0,r.warnedAboutMemory=!1,r.pendingDeletes=0,r.disposed=!1,!E().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);if(t==null){var i=St(E().getNumber(`WEBGL_VERSION`));r.binaryCache=((n=E().getNumber(`WEBGL_VERSION`))in Gs||(Gs[n]={}),Gs[n]),r.gpgpu=new jo(i),r.canvas=i.canvas,r.gpgpuCreatedLocally=!0}else r.gpgpu=t,r.binaryCache={},r.gpgpuCreatedLocally=!1,r.canvas=t.gl.canvas;return r.textureManager=new ls(r.gpgpu),r.numMBBeforeWarning=E().global.screen==null?1024:E().global.screen.height*E().global.screen.width*window.devicePixelRatio*qs/1024/1024,r.texData=new hi(r,B),r}return x(t,e),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,t,n){if(E().getBool(`DEBUG`)&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);var r={};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:_t.UPLOAD}),r},t.prototype.move=function(e,t,n,r){if(E().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:_t.UPLOAD})},t.prototype.readSync=function(e){var t=this.texData.get(e),n=t.values,r=t.dtype,i=t.complexTensors,a=t.slice,o=t.shape,s=t.isPacked;if(a!=null){var c=void 0;c=s?new Us(o,Rs):new _s(o,Rs);var l=this.runWebGLProgram(c,[{dataId:e,shape:o,dtype:r}],r),u=this.readSync(l.dataId);return this.disposeData(l.dataId),u}if(n!=null)return this.convertAndCacheOnCPU(e);if(r===`string`)return n;var d,f,p=this.activeTimers!=null;return p&&(d=Pe()),f=r===`complex64`?Fi(i.real.dataSync(),i.imag.dataSync()):this.getValuesFromTexture(e),p&&(this.downloadWaitMs+=Pe()-d),this.convertAndCacheOnCPU(e,f)},t.prototype.read=function(e){return S(this,void 0,void 0,(function(){var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;return C(this,(function(C){switch(C.label){case 0:if(this.pendingRead.has(e))return t=this.pendingRead.get(e),[2,new Promise((function(e){return t.push(e)}))];if(n=this.texData.get(e),r=n.values,i=n.shape,a=n.slice,o=n.dtype,s=n.complexTensors,c=n.isPacked,a!=null)return l=void 0,l=c?new Us(i,Rs):new _s(i,Rs),u=this.runWebGLProgram(l,[{dataId:e,shape:i,dtype:o}],o),d=this.read(u.dataId),this.disposeData(u.dataId),[2,d];if(r!=null)return[2,this.convertAndCacheOnCPU(e)];if(!E().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&E().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);return f=null,o!==`complex64`&&E().get(`WEBGL_BUFFER_SUPPORTED`)&&(p=this.decode(e),m=this.texData.get(p.dataId),f=(S=this.gpgpu).createBufferFromTexture.apply(S,[m.texture].concat(wt(i)))),this.pendingRead.set(e,[]),o===`complex64`?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:C.sent(),C.label=2;case 2:return o===`complex64`?[4,Promise.all([s.real.data(),s.imag.data()])]:[3,4];case 3:return g=C.sent(),_=g[0],v=g[1],h=Fi(_,v),[3,5];case 4:f==null?h=this.getValuesFromTexture(e):(y=R(i),h=this.gpgpu.downloadFloat32MatrixFromBuffer(f,y)),C.label=5;case 5:return p!=null&&this.disposeData(p.dataId),b=this.convertAndCacheOnCPU(e,h),x=this.pendingRead.get(e),this.pendingRead.delete(e),x.forEach((function(e){return e(b)})),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,b]}}))}))},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var t=0;t<e.length;t++){var n=e[t];if(!kt(n))throw E().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value `+n+` cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value `+n+` cannot be represented on this device.`)}},t.prototype.getValuesFromTexture=function(e){var t,n=this.texData.get(e),r=n.shape,i=n.dtype,a=n.isPacked,o=R(r);if(E().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){var s=this.decode(e),c=this.texData.get(s.dataId),l=(t=this.gpgpu).downloadMatrixFromPackedTexture.apply(t,[c.texture].concat(wt(r))).subarray(0,o);return this.disposeData(s.dataId),l}var u=E().getBool(`WEBGL_PACK`)&&!0===a,d=u?an(r):r,f=u?new ro(d):new no(d),p=this.runWebGLProgram(f,[{shape:d,dtype:i,dataId:e}],`float32`),m=this.texData.get(p.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,o);return this.disposeData(p.dataId),h},t.prototype.time=function(e){return S(this,void 0,void 0,(function(){var t,n,r,i,a,o,s;return C(this,(function(c){switch(c.label){case 0:return t=this.activeTimers,n=[],r=!1,this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e(),i=ae(this.activeTimers.map((function(e){return e.query}))).filter((function(e){return e!=null})),a=ae(this.activeTimers.map((function(e){return e.name}))).filter((function(e){return e!=null})),this.activeTimers=t,r&&(this.programTimersStack=null),o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?[4,Promise.all(i)]:[3,2];case 1:return s=c.sent(),o.kernelMs=re(s),o.getExtraProfileInfo=function(){return s.map((function(e,t){return{name:a[t],ms:e}})).map((function(e){return e.name+`: `+e.ms})).join(`, `)},[3,3];case 2:o.kernelMs={error:`WebGL query timers are not supported in this environment.`},c.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,o]}}))}))},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?this.gpgpu.beginQuery():{startMs:Pe(),endMs:null}},t.prototype.endTimer=function(e){return E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?(this.gpgpu.endQuery(),e):(e.endMs=Pe(),e)},t.prototype.getQueryTime=function(e){return S(this,void 0,void 0,(function(){var t;return C(this,(function(n){return E().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(t=e).endMs-t.startMs]}))}))},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var t=this.texData.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var t=this.texData.get(e),n=t.texture,r=t.dtype,i=t.texShape,a=t.usage,o=t.isPacked,s=t.slice,c=s&&s.origDataId||e,l=this.dataRefCount.get(c);l>1?this.dataRefCount.set(c,l-1):(this.dataRefCount.delete(c),n!=null&&(this.numBytesInGPU-=this.computeBytes(i,r),this.textureManager.releaseTexture(n,i,a,o)));var u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return E().getBool(`WEBGL_CPU_FORWARD`)?(this.cpuBackend??=B.findBackend(`cpu`),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,t){var n=this;return t===void 0&&(t=128),this.getCPUBackend()!=null&&e.every((function(e){return n.texData.get(e.dataId).texture==null&&e.size<t}))},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,t){var n=this.makeOutput(e.shape,`complex64`);return this.texData.get(n.dataId).complexTensors={real:B.keep(e.clone()),imag:B.keep(t.clone())},n},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,t,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,t,n);if(R(n)===0)return zn([],n,e.dtype);var r=this.texData.get(e.dataId).isPacked,i=li(e.shape,t,n);if(r||!i){var a=E().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new ss(n):new as(n),o=a.getCustomSetupFunc(t);return this.compileAndRun(a,[e],null,o)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,t,n)},t.prototype.shallowSlice=function(e,t,n){var r=this.texData.get(e.dataId),i=this.makeOutput(n,e.dtype),a=this.texData.get(i.dataId);Object.assign(a,r),a.shape=n,a.dtype=e.dtype;var o=ui(t,e.strides);r.slice&&(o+=r.slice.flatOffset),a.slice={flatOffset:o,origDataId:r.slice&&r.slice.origDataId||e.dataId};var s=this.dataRefCount.get(a.slice.origDataId)||1;return this.dataRefCount.set(a.slice.origDataId,s+1),i},t.prototype.stridedSlice=function(e,t,n,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,t,n,r);var i=oi(t,n,r);if(i.some((function(e){return e===0})))return zn([],i);var a=new cs(t,r,i);return this.compileAndRun(a,[e])},t.prototype.reverse=function(e,t){var n=E().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new ts(e.shape,t):new es(e.shape,t);return this.compileAndRun(n,[e])},t.prototype.concat=function(e,t){if(e[0].dtype===`complex64`){var n=e.map((function(e){return Ln(e)})),r=e.map((function(e){return Rn(e)}));return In(this.concat(n,t),this.concat(r,t))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,t);if(e.length===1)return e[0];if(e.length>E().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`)){var i=Math.floor(e.length/2),a=this.concat(e.slice(0,i),t),o=this.concat(e.slice(i),t);return this.concat([a,o],t)}if(E().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&e[0].rank>1){var s=new La(e.map((function(e){return e.shape})),t);return this.compileAndRun(s,e)}var c=Fn(e.map((function(e){return e.shape})),t),l=e.map((function(e){return e.as2D(-1,R(e.shape.slice(t)))})),u=new Ia(l.map((function(e){return e.shape})));return this.compileAndRun(u,l).reshape(c)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(E().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Ts,e.dtype);var t=new _s(e.shape,Ts);return this.compileAndRun(t,[e])},t.prototype.batchMatMul=function(e,t,n,r){var i=n?e.shape[2]:e.shape[1],a=r?t.shape[1]:t.shape[2],o=n?e.shape[1]:e.shape[2],s=e.shape[0];if((i===1||a===1)&&o>1e3){n&&(e=e.transpose([0,2,1])),r&&(t=t.transpose([0,2,1]));var c=a===1?e:e.as3D(s,o,1),l=a===1?2:1,u=a===1?t.as3D(s,1,o):t;return this.multiply(c,u).sum(l,!0)}var d=ot(e.dtype,t.dtype),f=new zo(e.shape,[s,i,a],n,r);return this.compileAndRun(f,[e,t],d)},t.prototype.fusedBatchMatMul=function(e){var t=e.a,n=e.b,r=e.transposeA,i=e.transposeB,a=e.bias,o=e.activation,s=e.preluActivationWeights,c=r?t.shape[2]:t.shape[1],l=i?n.shape[1]:n.shape[2],u=t.shape[0],d=ot(t.dtype,n.dtype),f=a!=null,p=s!=null,m=o?Ks(o,!0):null,h=new zo(t.shape,[u,c,l],r,i,f,m,p),g=[t,n];return a&&g.push(a),s&&g.push(s),this.compileAndRun(h,g,d)},t.prototype.multiply=function(e,t){if(e.dtype===`complex64`){var n=this.texData.get(e.dataId),r=this.texData.get(t.dataId),i=new Ta(Ca,e.shape,t.shape),a=new Ta(wa,e.shape,t.shape),o=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag),this.makeComplexComponentTensorInfo(t,r.complexTensors.real),this.makeComplexComponentTensorInfo(t,r.complexTensors.imag)],s=this.compileAndRun(i,o),c=this.compileAndRun(a,o),l=this.complex(s,c);return s.dispose(),c.dispose(),l}if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.multiply(e,t);if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,Oa,e.dtype);var u=new Aa(Oa,e.shape,t.shape);return this.compileAndRun(u,[e,t],e.dtype)},t.prototype.batchNormalization=function(e,t,n,r,i,a){var o=[e,t,n],s=null;a!=null&&(s=a.shape,o.push(a));var c=null;if(i!=null&&(c=i.shape,o.push(i)),E().getBool(`WEBGL_PACK_NORMALIZATION`)){var l=new Sa(e.shape,t.shape,n.shape,s,c,r);return this.compileAndRun(l,o)}var u=new xa(e.shape,t.shape,n.shape,s,c,r);return this.compileAndRun(u,o)},t.prototype.localResponseNormalization4D=function(e,t,n,r,i){var a=E().getBool(`WEBGL_PACK_NORMALIZATION`)?new Io(e.shape,t,n,r,i):new Po(e.shape,t,n,r,i);return this.compileAndRun(a,[e])},t.prototype.LRNGrad=function(e,t,n,r,i,a,o){var s=new Fo(t.shape,r,i,a,o);return this.compileAndRun(s,[t,n,e])},t.prototype.tile=function(e,t){if(e.dtype===`string`){var n=this.readSync(e.dataId).map((function(e){return Le(e)}));return Ji(q(e.shape,e.dtype,n),t)}var r=new fs(e.shape,t);return this.compileAndRun(r,[e])},t.prototype.pad=function(e,t,n){var r=E().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new Wo(e.shape,t,n):new Uo(e.shape,t,n);return this.compileAndRun(r,[e])},t.prototype.transpose=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,t);var n=E().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new ms(e.shape,t):new ps(e.shape,t);return this.compileAndRun(n,[e])},t.prototype.gather=function(e,t,n){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.gather(e,t,n);var r=new uo(e.shape,t.size,n);return this.compileAndRun(r,[e,t])},t.prototype.batchToSpaceND=function(e,t,n){I(e.rank<=4,(function(){return`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`}));var r=t.reduce((function(e,t){return e*t})),i=qr(e.shape,t,r),a=Jr(i.length,t.length),o=Yr(e.shape,t,r),s=Xr(n,t.length),c=Zr(o,n,t.length);return e.reshape(i).transpose(a).reshape(o).slice(s,c)},t.prototype.spaceToBatchND=function(e,t,n){I(e.rank<=4,(function(){return`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`}));var r=t.reduce((function(e,t){return e*t})),i=[[0,0]];i.push.apply(i,n);for(var a=1+t.length;a<e.shape.length;++a)i.push([0,0]);var o=e.pad(i),s=qr(o.shape,t,r,!1),c=Jr(s.length,t.length,!1),l=Yr(o.shape,t,r,!1);return o.reshape(s).transpose(c).reshape(l)},t.prototype.reduce=function(e,t,n){var r=e.shape[0],i=e.shape[1],a=new qo({windowSize:ei(i),inSize:i,batchSize:r},t),o=this.compileAndRun(a,[e],n);return o.shape[1]===1?o:this.reduce(o,t,n)},t.prototype.argReduce=function(e,t,n){n===void 0&&(n=null);var r=e.shape[0],i=e.shape[1];n!=null&&(r=n.shape[0],i=n.shape[1]);var a=new $i({windowSize:ei(i),inSize:i,batchSize:r},t,n==null),o=[e];n!=null&&o.push(n);var s=this.compileAndRun(a,o,`int32`);return s.shape[1]===1?s:this.argReduce(e,t,s)},t.prototype.argReducePacked=function(e,t,n){n===void 0&&(n=null);var r=n==null?e.shape:n.shape,i=new va(r,ei(r[r.length-1]),t,n==null),a=n==null?[e]:[e,n],o=this.compileAndRun(i,a,`int32`);return o.rank===e.rank?this.argReducePacked(e,t,o):o},t.prototype.sum=function(e,t){An(`sum`,t,e.rank);var n=On(e.shape,t),r=n[0],i=R(n[1]),a=e.as2D(-1,i),o=st(e.dtype);return this.reduce(a,`sum`,o).reshape(r)},t.prototype.prod=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,t);var n=On(e.shape,t),r=n[0],i=R(n[1]),a=e.as2D(-1,i),o=st(e.dtype);return this.reduce(a,`prod`,o).reshape(r)},t.prototype.unsortedSegmentSum=function(e,t,n){var r=0,i=jn([r],e.rank),a=e;i!=null&&(a=e.transpose(i),r=Nn(1,e.rank)[0]);var o=function(e,t,n){for(var r=[],i=e.length,a=0;a<i;a++)a===t?r.push(n):r.push(e[a]);return r}(a.shape,r,n),s=R([a.shape[r]]),c=a.as2D(-1,s),l=st(e.dtype),u=this.segOpCompute(c,`unsortedSegmentSum`,t,l,n).reshape(o);return i!=null&&(u=u.transpose(Mn(i))),u},t.prototype.segOpCompute=function(e,t,n,r,i){var a=e.shape[0],o=e.shape[1],s=function(e,t){var n,r=!1;for(e<=$r?(n=e,r=!0):n=Oe(e,Math.floor(Math.sqrt(e)));!r;)n>t||n===e?r=!0:n=Oe(e,n+1);return n}(o,i),c=new rs({windowSize:s,inSize:o,batchSize:a,numSegments:i},t),l=this.compileAndRun(c,[e,n],r);return l.shape[1]===i?l:(n=Qn(0,i).tile([o/s]),this.segOpCompute(l,t,n,r,i))},t.prototype.argMinMaxReduce=function(e,t,n){var r=[t];if(An(`arg`+n.charAt(0).toUpperCase()+n.slice(1),r,e.rank),!E().getBool(`WEBGL_PACK_REDUCE`)||e.rank<=2){var i=On(e.shape,r),a=i[0],o=R(i[1]),s=e.as2D(-1,o);return this.argReduce(s,n).reshape(a)}return this.argReducePacked(e,n)},t.prototype.argMin=function(e,t){return this.argMinMaxReduce(e,t,`min`)},t.prototype.argMax=function(e,t){return this.argMinMaxReduce(e,t,`max`)},t.prototype.cumsum=function(e,t,n,r){if(t!==e.rank-1)throw Error(`WebGL cumsum shader expects an inner-most axis=`+(e.rank-1)+` but got axis=`+t);var i=new Xa(e.shape,n,r);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,t){if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(equal(a, b));
`,`bool`);var n=new Aa(`return float(a == b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},t.prototype.notEqual=function(e,t){if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(notEqual(a, b));
`,`bool`);var n=new Aa(`return float(a != b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},t.prototype.less=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.less(e,t);if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(lessThan(a, b));
`,`bool`);var n=new Aa(`return float(a < b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},t.prototype.lessEqual=function(e,t){if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(lessThanEqual(a, b));
`,`bool`);var n=new Aa(`return float(a <= b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},t.prototype.greater=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.greater(e,t);if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(greaterThan(a, b));
`,`bool`);var n=new Aa(`return float(a > b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},t.prototype.greaterEqual=function(e,t){if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(greaterThanEqual(a, b));
`,`bool`);var n=new Aa(`return float(a >= b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},t.prototype.logicalNot=function(e){var t=new _s(e.shape,`return float(!(x >= 1.0));`);return this.compileAndRun(t,[e])},t.prototype.logicalAnd=function(e,t){if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,`bool`);var n=new Aa(`return float(a >= 1.0 && b >= 1.0);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},t.prototype.logicalOr=function(e,t){if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,`bool`);var n=new Aa(`return float(a >= 1.0 || b >= 1.0);`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`bool`)},t.prototype.select=function(e,t,n){var r=new is(e.rank,t.shape,t.rank);return this.compileAndRun(r,[e,t,n],ot(t.dtype,n.dtype))},t.prototype.where=function(e){Sn(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);var t=e.dataSync();return Xi(e.shape,t)},t.prototype.topk=function(e,t,n){return Yi(e.dataSync(),e.shape,e.dtype,t)},t.prototype.min=function(e,t){An(`min`,t,e.rank);var n=On(e.shape,t),r=n[0],i=R(n[1]),a=e.as2D(-1,i);return this.reduce(a,`min`,a.dtype).reshape(r)},t.prototype.minimum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.minimum(e,t);var n=E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ma(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Aa(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},t.prototype.mod=function(e,t){var n=E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ma(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Aa(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},t.prototype.max=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,t);An(`max`,t,e.rank);var n=On(e.shape,t),r=n[0],i=R(n[1]),a=e.as2D(-1,i);return this.reduce(a,`max`,a.dtype).reshape(r)},t.prototype.maximum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.maximum(e,t);var n=E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ma(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Aa(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},t.prototype.all=function(e,t){An(`all`,t,e.rank);var n=On(e.shape,t),r=n[0],i=R(n[1]),a=e.as2D(-1,i);return this.reduce(a,`all`,a.dtype).reshape(r)},t.prototype.any=function(e,t){An(`any`,t,e.rank);var n=On(e.shape,t),r=n[0],i=R(n[1]),a=e.as2D(-1,i);return this.reduce(a,`any`,a.dtype).reshape(r)},t.prototype.realDivide=function(e,t){if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,`float32`,!0);var n=new Aa(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`float32`)},t.prototype.floorDiv=function(e,t){if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,`int32`);var n=new Aa(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,t.shape);return this.compileAndRun(n,[e,t],`int32`)},t.prototype.add=function(e,t){if(e.dtype===`complex64`&&t.dtype===`complex64`)return this.complexSeparableBinaryOp(e,t,Ea);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.add(e,t);var n=ot(e.dtype,t.dtype);if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,Ea,n);var r=new Aa(Ea,e.shape,t.shape);return this.compileAndRun(r,[e,t],n)},t.prototype.packedUnaryOp=function(e,t,n){var r=new Us(e.shape,t);return this.compileAndRun(r,[e],n)},t.prototype.packedBinaryOp=function(e,t,n,r,i){i===void 0&&(i=!1);var a=new Ma(n,e.shape,t.shape,i);return this.compileAndRun(a,[e,t],r)},t.prototype.complexSeparableBinaryOp=function(e,t,n){var r=this,i=this.texData.get(e.dataId),a=this.texData.get(t.dataId),o=[[i.complexTensors.real,a.complexTensors.real],[i.complexTensors.imag,a.complexTensors.imag]].map((function(i){var a=i[0],o=i[1],s=r.makeComplexComponentTensorInfo(e,a),c=r.makeComplexComponentTensorInfo(t,o),l=new Aa(n,e.shape,t.shape);return r.compileAndRun(l,[s,c],ot(a.dtype,o.dtype))})),s=o[0],c=o[1],l=this.complex(s,c);return s.dispose(),c.dispose(),l},t.prototype.makeComplexComponentTensorInfo=function(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>E().get(`WEBGL_MAX_TEXTURES_IN_SHADER`)){var t=Math.floor(e.length/2),n=this.addN(e.slice(0,t)),r=this.addN(e.slice(t));return this.addN([n,r])}var i=e.map((function(e){return e.dtype})).reduce((function(e,t){return ot(e,t)})),a=e.map((function(e){return e.shape})),o=E().getBool(`WEBGL_PACK`)?new Qi(e[0].shape,a):new Zi(e[0].shape,a);return this.compileAndRun(o,e,i)},t.prototype.subtract=function(e,t){if(e.dtype===`complex64`&&t.dtype===`complex64`)return this.complexSeparableBinaryOp(e,t,Da);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.subtract(e,t);var n=ot(e.dtype,t.dtype);if(E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`))return this.packedBinaryOp(e,t,Da,e.dtype);var r=new Aa(Da,e.shape,t.shape);return this.compileAndRun(r,[e,t],n)},t.prototype.pow=function(e,t){var n=E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ma(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Aa(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,t.shape),r=ot(e.dtype,t.dtype);return this.compileAndRun(n,[e,t],r)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(E().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Es,e.dtype);var t=new _s(e.shape,Es);return this.compileAndRun(t,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(E().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Ds,e.dtype);var t=new _s(e.shape,Ds);return this.compileAndRun(t,[e])},t.prototype.sign=function(e){var t=new _s(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(t,[e])},t.prototype.isNaN=function(e){var t=new _s(e.shape,`return float(isnan(x));`);return this.compileAndRun(t,[e],`bool`)},t.prototype.isInf=function(e){var t=new _s(e.shape,`return float(isinf(x));`);return this.compileAndRun(t,[e],`bool`)},t.prototype.isFinite=function(e){var t=new _s(e.shape,`return float(!isnan(x) && !isinf(x));`);return this.compileAndRun(t,[e],`bool`)},t.prototype.round=function(e){var t=new _s(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(t,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(E().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Os,e.dtype);var t=new _s(e.shape,Os);return this.compileAndRun(t,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(E().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,ks,e.dtype);var t=new _s(e.shape,ks);return this.compileAndRun(t,[e])},t.prototype.softmax=function(e,t){var n=pe([t],e.shape),r=this.max(e,n),i=kn(r.shape,n),a=this.subtract(e,r.reshape(i)),o=this.exp(a),s=this.sum(o,n).reshape(i);return this.realDivide(o,s)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(E().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var t=new _s(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(t,[e])},t.prototype.log1p=function(e){var t=new _s(e.shape,`return log(1.0 + x);`);return this.compileAndRun(t,[e])},t.prototype.sqrt=function(e){var t=new _s(e.shape,`return sqrt(x);`);return this.compileAndRun(t,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var t=new _s(e.shape,`return inversesqrt(x);`);return this.compileAndRun(t,[e])},t.prototype.reciprocal=function(e){var t=new _s(e.shape,`return 1.0 / x;`);return this.compileAndRun(t,[e])},t.prototype.relu=function(e){var t=E().getBool(`WEBGL_PACK`)?new Us(e.shape,Bs):new _s(e.shape,xs);return this.compileAndRun(t,[e])},t.prototype.relu6=function(e){var t=E().getBool(`WEBGL_PACK`)?new Us(e.shape,Vs):new _s(e.shape,Ss);return this.compileAndRun(t,[e])},t.prototype.prelu=function(e,t){var n=E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ma(ja,e.shape,t.shape):new Aa(ka,e.shape,t.shape);return this.compileAndRun(n,[e,t])},t.prototype.elu=function(e){if(E().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Hs,e.dtype);var t=new _s(e.shape,Cs);return this.compileAndRun(t,[e])},t.prototype.eluDer=function(e,t){var n=E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ma(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,t.shape):new Aa(`return (b >= 1.0) ? a : a * (b + 1.0);`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},t.prototype.selu=function(e){var t=new _s(e.shape,ws);return this.compileAndRun(t,[e])},t.prototype.int=function(e){var t=new _s(e.shape,`return float(int(x));`);return this.compileAndRun(t,[e],`int32`)},t.prototype.clip=function(e,t,n){var r,i=(r=E().getBool(`WEBGL_PACK_CLIP`)?new Pa(e.shape):new Na(e.shape)).getCustomSetupFunc(t,n);return this.compileAndRun(r,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(E().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,bs,e.dtype);var t=new _s(e.shape,bs);return this.compileAndRun(t,[e])},t.prototype.complexAbs=function(e){var t=this.texData.get(e.dataId),n=new Fa(e.shape),r=[this.makeComplexComponentTensorInfo(e,t.complexTensors.real),this.makeComplexComponentTensorInfo(e,t.complexTensors.imag)];return this.compileAndRun(n,r)},t.prototype.sigmoid=function(e){var t=new _s(e.shape,`return 1.0 / (1.0 + exp(-1.0 * x));`);return this.compileAndRun(t,[e])},t.prototype.softplus=function(e){var t=new _s(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(t,[e])},t.prototype.sin=function(e){var t=new _s(e.shape,As);return this.compileAndRun(t,[e])},t.prototype.cos=function(e){var t=new _s(e.shape,js);return this.compileAndRun(t,[e])},t.prototype.tan=function(e){var t=new _s(e.shape,`return tan(x);`);return this.compileAndRun(t,[e])},t.prototype.asin=function(e){var t=new _s(e.shape,Ms);return this.compileAndRun(t,[e])},t.prototype.acos=function(e){var t=new _s(e.shape,Ns);return this.compileAndRun(t,[e])},t.prototype.atan=function(e){var t=new _s(e.shape,Ps);return this.compileAndRun(t,[e])},t.prototype.atan2=function(e,t){var n=E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ma(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new Aa(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,t.shape);return this.compileAndRun(n,[e,t])},t.prototype.sinh=function(e){var t=new _s(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},t.prototype.cosh=function(e){var t=new _s(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},t.prototype.tanh=function(e){var t=new _s(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(t,[e])},t.prototype.asinh=function(e){var t=new _s(e.shape,Fs);return this.compileAndRun(t,[e])},t.prototype.acosh=function(e){var t=new _s(e.shape,Is);return this.compileAndRun(t,[e])},t.prototype.atanh=function(e){var t=new _s(e.shape,Ls);return this.compileAndRun(t,[e])},t.prototype.erf=function(e){var t=new _s(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(t,[e])},t.prototype.step=function(e,t){var n=new _s(e.shape,function(e){return e===void 0&&(e=0),vs+`
    return x > 0.0 ? 1.0 : float(`+e+`);
  `}(t));return this.compileAndRun(n,[e])},t.prototype.conv2dByMatMul=function(e,t,n,r,i,a){var o=e.shape,s=this.texData.get(e.dataId),c=n.inChannels,l=o[0]*o[1]*o[2],u=n.outChannels,d=n.dataFormat===`channelsLast`,f=(l===1||u===1)&&c>1e3,p=o[2]%2!=0&&!!s.isPacked;if(f||!E().getBool(`WEBGL_LAZILY_UNPACK`)||!E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)||!p){var m=d?o[0]*o[1]*o[2]:o[0]*o[2]*o[3],h=this.reshape(e,[1,m,n.inChannels]),g=this.reshape(t,[1,n.inChannels,n.outChannels]);return this.reshape(this.fusedBatchMatMul({a:h,b:g,transposeA:!1,transposeB:!1,bias:r,activation:i,preluActivationWeights:a}),n.outShape)}var _=d?o[0]*o[1]*(o[2]+1):o[0]*o[2]*(o[3]+1),v={dataId:e.dataId,shape:[1,_,n.inChannels],dtype:e.dtype},y=s.shape;s.shape=s.shape.slice(),s.shape[s.shape.length-2]++,I(cn(s.shape,v.shape),(function(){return`packed reshape `+s.shape+` to `+v.shape+` isn't free`}));var b=this.reshape(t,[1,n.inChannels,n.outChannels]),x=this.fusedBatchMatMul({a:v,b,transposeA:!1,transposeB:!1,bias:r,activation:i,preluActivationWeights:a}),S=this.texData.get(x.dataId);return I(S.isPacked,(function(){return`batchMatMul result is expected to be packed`})),s.shape=y,S.shape=n.outShape,B.makeTensorFromDataId(x.dataId,n.outShape,x.dtype)},t.prototype.conv2dWithIm2Row=function(e,t,n,r,i,a){var o=n.filterWidth,s=n.filterHeight,c=n.inChannels,l=n.outWidth,u=n.outHeight,d=n.dataFormat===`channelsLast`,f=o*s*c,p=u*l,m=[f,p],h=e.squeeze([0]),g=t.reshape([1,f,-1]),_=new No(m,h.shape,n),v=this.compileAndRun(_,[h]).reshape([1,m[0],m[1]]),y=r!=null,b=a!=null,x=i?Ks(i,!0):null,S=new zo(v.shape,[1,p,n.outChannels],!0,!1,y,x,b),C=[v,g];r&&C.push(r),b&&C.push(a);var w=this.compileAndRun(S,C);return d?w.reshape([1,u,l,n.outChannels]):w.reshape([1,n.outChannels,u,l])},t.prototype.fusedConv2d=function(e){var t=e.input,n=e.filter,r=e.convInfo,i=e.bias,a=e.activation,o=e.preluActivationWeights;if(r.filterHeight===1&&r.filterWidth===1&&r.dilationHeight===1&&r.dilationWidth===1&&r.strideHeight===1&&r.strideWidth===1&&(r.padInfo.type===`SAME`||r.padInfo.type===`VALID`))return this.conv2dByMatMul(t,n,r,i,a,o);if(E().getBool(`WEBGL_CONV_IM2COL`)&&t.shape[0]===1)return this.conv2dWithIm2Row(t,n,r,i,a,o);var s=i!=null,c=o!=null,l=new Ga(r,s,a?Ks(a,!1):null,c),u=[t,n];return i&&u.push(i),o&&u.push(o),this.compileAndRun(l,u)},t.prototype.conv2d=function(e,t,n){if(n.filterHeight===1&&n.filterWidth===1&&n.dilationHeight===1&&n.dilationWidth===1&&n.strideHeight===1&&n.strideWidth===1&&(n.padInfo.type===`SAME`||n.padInfo.type===`VALID`))return this.conv2dByMatMul(e,t,n);if(E().getBool(`WEBGL_CONV_IM2COL`)&&e.shape[0]===1)return this.conv2dWithIm2Row(e,t,n);var r=new Ga(n);return this.compileAndRun(r,[e,t])},t.prototype.conv2dDerInput=function(e,t,n){var r=new Ba(n);return this.compileAndRun(r,[e,t])},t.prototype.conv2dDerFilter=function(e,t,n){var r=new za(n);return this.compileAndRun(r,[e,t])},t.prototype.fusedDepthwiseConv2D=function(e){var t,n=e.input,r=e.filter,i=e.convInfo,a=e.bias,o=e.activation,s=e.preluActivationWeights,c=E().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,l=o?Ks(o,c):null,u=[n,r],d=a!=null,f=s!=null;return d&&u.push(a),f&&u.push(s),c?(t=new Ja(i,d,l,f),this.compileAndRun(t,u)):(t=new qa(i,d,l,f),this.compileAndRun(t,u))},t.prototype.depthwiseConv2D=function(e,t,n){var r;return E().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&n.strideWidth<=2&&n.outChannels/n.inChannels==1?(r=new Ja(n),this.compileAndRun(r,[e,t])):(r=new qa(n),this.compileAndRun(r,[e,t]))},t.prototype.depthwiseConv2DDerInput=function(e,t,n){var r=new Wa(n);return this.compileAndRun(r,[e,t])},t.prototype.depthwiseConv2DDerFilter=function(e,t,n){var r=new Ua(n);return this.compileAndRun(r,[e,t])},t.prototype.conv3d=function(e,t,n){var r=new Ka(n);return this.compileAndRun(r,[e,t])},t.prototype.conv3dDerInput=function(e,t,n){var r=new Ha(n);return this.compileAndRun(r,[e,t])},t.prototype.conv3dDerFilter=function(e,t,n){var r=new Va(n);return this.compileAndRun(r,[e,t])},t.prototype.maxPool=function(e,t){var n=new Go(t,`max`,!1);return this.compileAndRun(n,[e])},t.prototype.avgPool=function(e,t){var n=new Go(t,`avg`,!1);return this.compileAndRun(n,[e],`float32`)},t.prototype.maxPoolBackprop=function(e,t,n,r){var i=new Go(r,`max`,!0),a=this.compileAndRun(i,[t]),o=new Lo(r),s=this.compileAndRun(o,[e,a],t.dtype);return a.dispose(),s},t.prototype.avgPoolBackprop=function(e,t,n){var r=new ya(n);return this.compileAndRun(r,[e],t.dtype)},t.prototype.cast=function(e,t){return Mi(e,t,this)},t.prototype.unstack=function(e,t){for(var n=e.shape[t],r=Array(e.rank-1),i=0,a=0;a<e.rank;a++)a!==t&&(r[i++]=e.shape[a]);var o=Array(e.rank).fill(0),s=e.shape.slice();s[t]=1;var c=Array(n);for(a=0;a<c.length;a++)o[t]=a,c[a]=this.slice(e,o,s).reshape(r);return c},t.prototype.avgPool3d=function(e,t){var n=new Ko(t,`avg`,!1);return this.compileAndRun(n,[e],`float32`)},t.prototype.avgPool3dBackprop=function(e,t,n){var r=new ba(n);return this.compileAndRun(r,[e],t.dtype)},t.prototype.maxPool3d=function(e,t){var n=new Ko(t,`max`,!1);return this.compileAndRun(n,[e],`float32`)},t.prototype.maxPool3dBackprop=function(e,t,n,r){var i=new Ko(r,`max`,!0),a=this.compileAndRun(i,[t]),o=new Ro(r),s=this.compileAndRun(o,[e,a],t.dtype);return a.dispose(),s},t.prototype.reshape=function(e,t){var n=this.texData.get(e.dataId);if(n.isPacked&&!cn(e.shape,t)&&(n.texture===null||!cn(n.shape,t))){var r=this.packedReshape(e,t);return B.makeTensorFromDataId(r.dataId,r.shape,r.dtype)}return Ni(e,t)},t.prototype.resizeBilinear=function(e,t,n,r){var i=E().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new Zo(e.shape,t,n,r):new Xo(e.shape,t,n,r);return this.compileAndRun(i,[e],`float32`)},t.prototype.resizeBilinearBackprop=function(e,t,n){var r=new Yo(e,t,n);return this.compileAndRun(r,[e])},t.prototype.resizeNearestNeighbor=function(e,t,n,r){var i=new $o(e.shape,t,n,r);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,t,n){var r=new Qo(e,t,n);return this.compileAndRun(r,[e])},t.prototype.multinomial=function(e,t,n,r){var i=t?e:pi(e),a=i.shape[0],o=i.shape[1],s=new Bo(a,o,n),c=s.getCustomSetupFunc(r);return this.compileAndRun(s,[i],`int32`,c)},t.prototype.oneHot=function(e,t,n,r){var i=new Vo(e.size,t,n,r);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var t=new to(e.size);return this.compileAndRun(t,[e])},t.prototype.nonMaxSuppression=function(e,t,n,r,i){return Sn(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`),Vi(e.dataSync(),t.dataSync(),n,r,i)},t.prototype.cropAndResize=function(e,t,n,r,i,a){var o=new Ya(e.shape,t.shape,r,i,a);return this.compileAndRun(o,[e,t,n],`float32`)},t.prototype.depthToSpace=function(e,t,n){I(t>1,(function(){return`blockSize should be > 1 for depthToSpace, but was: `+t}));var r=e.shape[0],i=n===`NHWC`?e.shape[1]:e.shape[2],a=n===`NHWC`?e.shape[2]:e.shape[3],o=n===`NHWC`?e.shape[3]:e.shape[1],s=i*t,c=a*t,l=o/(t*t),u=new eo(n===`NHWC`?[r,s,c,l]:[r,l,s,c],t,n);return this.compileAndRun(u,[e])},t.prototype.split=function(e,t,n){return qi(e,t,n)},t.prototype.scatterND=function(e,t,n){var r=ri(0,e,n),i=r.sliceRank,a=r.numUpdates,o=r.sliceSize,s=r.strides,c=r.outputSize,l=[c/o,o],u=e.reshape([a,i]),d=t.reshape([a,o]);if(c===0)return Ni(zn([]),n);var f=K(0),p=new ns(a,i,u.rank,d.rank,s,l);return this.compileAndRun(p,[d,u,f]).reshape(n)},t.prototype.sparseToDense=function(e,t,n,r){var i=ri(0,e,n),a=i.sliceRank,o=i.numUpdates,s=i.strides,c=i.outputSize,l=new ns(o,a,e.rank,t.rank,s,[c,1],!1);return this.compileAndRun(l,[t,e,r]).reshape(n)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,t){var n=this.texData.get(e.dataId),r=new co(oo,e.shape,t),i=new co(so,e.shape,t),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)],o=this.compileAndRun(r,a),s=this.compileAndRun(i,a),c=this.complex(o,s).as2D(e.shape[0],e.shape[1]);return o.dispose(),s.dispose(),c},t.prototype.gatherND=function(e,t){var n=t.shape,r=n[n.length-1],i=Qr(e,t),a=i[0],o=i[1],s=i[2],c=i[3],l=t.reshape([o,r]),u=e.reshape([e.size/s,s]),d=new fo(r,c,[o,s]);return this.compileAndRun(d,[u,l]).reshape(a)},t.prototype.fill=function(e,t,n){if((n||=Ee(t))===`string`){var r=ge(n,R(e));return r.fill(t),B.makeTensor(r,e,n,this)}var i=new lo(e,t),a=i.getCustomSetupFunc(t);return this.compileAndRun(i,[],n,a)},t.prototype.onesLike=function(e){if(e.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype===`string`?``:0,e.dtype)},t.prototype.linspace=function(e,t,n){return Pi(e,t,n)},t.prototype.makeTensorInfo=function(e,t){var n=this.write(null,e,t);return this.texData.get(n).usage=null,{dataId:n,shape:e,dtype:t}},t.prototype.makeOutput=function(e,t){var n=this.makeTensorInfo(e,t).dataId;return B.makeTensorFromDataId(n,e,t,this)},t.prototype.unpackTensor=function(e){var t=new Ws(e.shape);return this.runWebGLProgram(t,[e],e.dtype)},t.prototype.packTensor=function(e){var t=new Ho(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,t){var n=[nn(e.shape)].concat(rn(e.shape)),r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new Jo([nn(t)].concat(rn(t)),n),a=this.runWebGLProgram(i,[r],e.dtype,null,!0);return{dataId:a.dataId,shape:t,dtype:a.dtype}},t.prototype.decode=function(e){var t,n=this.texData.get(e),r=n.isPacked,i=n.shape,a=n.dtype,o=an(i);return t=r?new $a(o):new Qa(o),{dtype:a,shape:i,dataId:this.runWebGLProgram(t,[{shape:o,dtype:a,dataId:e}],a,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,t,n,r,i){var a=this;i===void 0&&(i=!1);var o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===gt.DENSE&&(s.texShape=wt(e.outputShape).map((function(e){return 2*e}))),e.outTexUsage!=null&&(s.usage=e.outTexUsage),R(o.shape)===0)return s.values=he(o.dtype,0),o;var c=[],l=t.map((function(t){if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);var n=a.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&R(t.shape)<=E().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}else if(!!n.isPacked!=!!e.packedInputs)t=n.isPacked?a.unpackTensor(t):a.packTensor(t),c.push(t),n=a.texData.get(t.dataId);else if(n.isPacked&&!cn(n.shape,t.shape)){var r=t,i=t.shape;t.shape=n.shape,t=a.packedReshape(t,i),c.push(t),n=a.texData.get(t.dataId),r.shape=i}return a.uploadToGPU(t.dataId),{shape:t.shape,texData:n,isUniform:!1}}));this.uploadToGPU(o.dataId);var u,d={shape:o.shape,texData:s,isUniform:!1},f=function(e,t,n){var r=``;t.concat(n).forEach((function(e){var t=e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0,n=e.isUniform?`uniform`:e.texData.texShape;r+=e.shape+`_`+n+`_`+t}));var i=e.userCode,a=e.constructor.name;return a+=`_`+r+`_`+i}(e,l,d),p=this.getAndSaveBinary(f,(function(){return function(e,t,n,r){var i=t.userCode,a=n.map((function(e,n){var r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}})),o=a.map((function(e){return e.shapeInfo})),s={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},c=oa(a,s,i,t.packedInputs),l=e.createProgram(c),u=null,d=e.getUniformLocation(l,`NAN`,!1);E().getNumber(`WEBGL_VERSION`)===1&&(u=e.getUniformLocation(l,`INFINITY`,!1));for(var f={},p=0;p<t.variableNames.length;p++){var m=t.variableNames[p];f[m]=e.getUniformLocation(l,m,!1),f[`offset`+m]=e.getUniformLocation(l,`offset`+m,!1)}return{program:t,source:c,webGLProgram:l,uniformLocations:f,inShapeInfos:o,outShapeInfo:s,infLoc:u,nanLoc:d}}(a.gpgpu,e,l,d)})),m=this.activeTimers!=null;if(m&&(u=this.startTimer()),function(e,t,n,r,i){Mo(t.inShapeInfos,n),Mo([t.outShapeInfo],[r]);var a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a,o[0],o[1]):e.setOutputMatrixTexture(a,o[0],o[1]),e.setProgram(t.webGLProgram),E().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach((function(n,r){var i=t.program.variableNames[r],a=t.uniformLocations[i],o=t.uniformLocations[`offset`+i];if(a!=null){if(n.isUniform){if(R(n.shape)<2)e.gl.uniform1f(a,n.uniformValues[0]);else{var s=n.uniformValues;s instanceof Float32Array||(s=new Float32Array(s)),e.gl.uniform1fv(a,s)}}else n.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture,a,r)}})),i?.(e,t.webGLProgram),e.executeProgram()}(this.gpgpu,p,l,d,r),c.forEach((function(e){return a.disposeData(e.dataId)})),m&&(u=this.endTimer(u),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(u)})),!E().getBool(`WEBGL_LAZILY_UNPACK`)&&s.isPacked&&!1===i){var h=this.unpackTensor(o);return this.disposeData(o.dataId),h}return o},t.prototype.compileAndRun=function(e,t,n,r,i){i===void 0&&(i=!1),n||=t[0].dtype;var a=this.runWebGLProgram(e,t,n,r,i);return B.makeTensorFromDataId(a.dataId,a.shape,a.dtype)},t.prototype.getAndSaveBinary=function(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||=(E().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach((function(t){e.gpgpu.deleteProgram(e.binaryCache[t].webGLProgram),delete e.binaryCache[t]})),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue??=U((function(){if(!E().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){var t=E().getBool(`DEBUG`);E().set(`DEBUG`,!1);var n=e.abs(K(1e-8)).dataSync()[0];if(E().set(`DEBUG`,t),n>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var t,n=this.texData.get(e),r=n.shape,i=n.dtype,a=n.values,o=n.texture,s=n.usage,c=n.isPacked;if(o==null){var l,u=this.activeTimers!=null;u&&(l=Pe());var d=n.texShape;if(d??(d=on(r,c),n.texShape=d),a!=null){var f=an(r),p=void 0,m=d[1],h=d[0],g=a instanceof Uint8Array;c?(m=(t=Tt(d[0],d[1]))[0],h=t[1],p=new ao(f,[h,m],g)):p=new io(f,[h,m],g);var _=this.makeTensorInfo([h,m],i);this.texData.get(_.dataId).usage=g?_t.PIXELS:_t.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(_.dataId),m,h,a);var v=this.runWebGLProgram(p,[_],i,null,!0),y=this.texData.get(v.dataId);n.texture=y.texture,n.texShape=y.texShape,n.isPacked=y.isPacked,n.usage=y.usage,this.disposeData(_.dataId),this.texData.delete(v.dataId),n.values=null,u&&(this.uploadWaitMs+=Pe()-l)}else n.texture=this.acquireTexture(d,s,i,c)}},t.prototype.convertAndCacheOnCPU=function(e,t){var n=this.texData.get(e),r=n.dtype;return this.releaseGPUData(e),t!=null&&(n.values=function(e,t){if(t===`float32`||t===`complex64`)return e;if(t===`int32`||t===`bool`){for(var n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length),r=0;r<n.length;++r)n[r]=Math.round(e[r]);return n}throw Error(`Unknown dtype `+t)}(t,r)),n.values},t.prototype.acquireTexture=function(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: `+i+` MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)},t.prototype.computeBytes=function(e,t){return e[0]*e[1]*xe(t)},t}(gi);mt()&&B.registerBackend(`webgl`,(function(){return new Js}),2);var Ys=G({square_:function(e){var t=W(e,`x`,`square`),n=[t];return B.runKernelFunc((function(e,n){return n([t]),e.square(t)}),{x:t},null,`Square`,{},n,[])}}),Xs=`SquaredDifference`,Zs=G({squaredDifference_:function(e,t){var n,r=W(e,`a`,`squaredDifference`),i=W(t,`b`,`squaredDifference`);n=ct(r,i),r=n[0],i=n[1],yi(r.shape,i.shape);var a={a:r,b:i},o=[r,i];return B.runKernelFunc((function(e,t){var n=e.squaredDifference(r,i);return t([r,i]),n}),a,(function(e,t){var n=t[0],r=t[1],i=K(2);return{a:function(){return e.mul(n.sub(r).mul(i))},b:function(){return e.mul(r.sub(n).mul(i))}}}),Xs,{},o,[])}}),Qs=G({abs_:function(e){var t=W(e,`x`,`abs`);return t.dtype===`complex64`?B.runKernelFunc((function(e){return e.complexAbs(t)}),{$x:t}):B.runKernelFunc((function(e,n){var r=e.abs(t);return n([t]),r}),{x:t},(function(e,t){var n=t[0];return{x:function(){return e.mul(n.toFloat().step(-1))}}}),`Abs`)}}),$s=G({acos_:function(e){var t=W(e,`x`,`acos`);return B.runKernelFunc((function(e,n){var r=e.acos(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.divStrict(K(1).sub(n.toFloat().square()).sqrt()).neg()}}}))}}),ec=G({acosh_:function(e){var t=W(e,`x`,`acosh`);return B.runKernelFunc((function(e,n){var r=e.acosh(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.divStrict(n.toFloat().square().sub(1).sqrt())}}}))}}),tc=G({asin_:function(e){var t=W(e,`x`,`asin`);return B.runKernelFunc((function(e,n){var r=e.asin(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.divStrict(K(1).sub(n.toFloat().square()).sqrt())}}}))}}),nc=G({asinh_:function(e){var t=W(e,`x`,`asinh`);return B.runKernelFunc((function(e,n){var r=e.asinh(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.divStrict(K(1).add(n.toFloat().square()).sqrt())}}}))}}),rc=G({atan_:function(e){var t=W(e,`x`,`atan`);return B.runKernelFunc((function(e,n){var r=e.atan(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.div(n.toFloat().square().add(1))}}}))}}),ic=G({atanh_:function(e){var t=W(e,`x`,`atanh`);return B.runKernelFunc((function(e,n){var r=e.atanh(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.div(K(1).sub(n.toFloat().square()))}}}))}}),ac=G({ceil_:function(e){var t=W(e,`x`,`ceil`);return B.runKernelFunc((function(e){return e.ceil(t)}),{$x:t},(function(e){return{$x:function(){return er(e)}}}))}}),oc=G({clipByValue_:function(e,t,n){var r=W(e,`x`,`clipByValue`);I(t<=n,(function(){return`Error in clip: min (`+t+`) must be less than or equal to max (`+n+`).`}));var i=[r],a={min:t,max:n};return B.runKernelFunc((function(e,i){var a=e.clip(r,t,n);return i([r]),a}),{x:r},(function(e,r){var i=r[0];return{x:function(){return e.where(i.greaterEqual(t).logicalAnd(i.lessEqual(n)),er(e))}}}),`ClipByValue`,a,i)}}),sc=G({cos_:function(e){var t=W(e,`x`,`cos`),n=[t];return B.runKernelFunc((function(e,n){var r=e.cos(t);return n([t]),r}),{x:t},(function(e,t){var n=t[0];return{x:function(){return n.toFloat().sin().neg().mul(e)}}}),`Cos`,{},n)}}),cc=G({cosh_:function(e){var t=W(e,`x`,`cosh`);return B.runKernelFunc((function(e,n){var r=e.cosh(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return n.toFloat().sinh().mulStrict(e)}}}))}}),lc=G({erf_:function(e){var t=W(e,`x`,`erf`);return I(t.dtype===`int32`||t.dtype===`float32`,(function(){return"Input dtype must be `int32` or `float32`."})),t.dtype===`int32`&&(t=t.toFloat()),B.runKernelFunc((function(e,n){var r=e.erf(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.mul(n.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}}))}}),uc=G({exp_:function(e){var t=W(e,`x`,`exp`);return B.runKernelFunc((function(e,n){var r=e.exp(t);return n([r]),r}),{x:t},(function(e,t){return{x:function(){return e.mulStrict(t[0])}}}),`Exp`,{},[],[!0])}}),dc=G({expm1_:function(e){var t=W(e,`x`,`expm1`);return B.runKernelFunc((function(e,n){var r=e.expm1(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.mul(n.exp())}}}))}}),fc=G({floor_:function(e){var t=W(e,`x`,`floor`);return B.runKernelFunc((function(e){return e.floor(t)}),{$x:t},(function(e){return{$x:function(){return er(e)}}}))}}),pc=G({log_:function(e){var t=W(e,`x`,`log`),n=[t];return B.runKernelFunc((function(e,n){var r=e.log(t);return n([t]),r}),{x:t},(function(e,t){var n=t[0];return{x:function(){return e.div(n.toFloat())}}}),`Log`,{},n)}}),mc=G({log1p_:function(e){var t=W(e,`x`,`log1p`);return B.runKernelFunc((function(e,n){var r=e.log1p(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.div(n.add(1))}}}))}}),hc=G({logSigmoid_:function(e){var t=W(e,`x`,`logSigmoid`);return B.runKernelFunc((function(e,n){var r=e.softplus(t.neg()).neg();return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.mul(n.neg().sigmoid())}}}))}}),gc=G({neg_:function(e){var t=W(e,`x`,`neg`),n=[t];return B.runKernelFunc((function(e){return e.neg(t)}),{x:t},(function(e){return{x:function(){return e.neg()}}}),`Neg`,{},n)}}),_c=G({reciprocal_:function(e){var t=W(e,`x`,`reciprocal`);return B.runKernelFunc((function(e,n){var r=e.reciprocal(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.div(n.square().neg())}}}))}}),vc=G({round_:function(e){var t=W(e,`x`,`round`);return B.runKernelFunc((function(e){return e.round(t)}),{$x:t},(function(e){return{$x:function(){return er(e)}}}))}}),yc=G({rsqrt_:function(e){var t=W(e,`x`,`rsqrt`),n=[t];return B.runKernelFunc((function(e,n){var r=e.rsqrt(t);return n([t]),r}),{x:t},(function(e,t){var n=t[0];return{x:function(){return e.div(n.pow(1.5).mul(2)).neg()}}}),`Rsqrt`,{},n)}}),bc=G({sigmoid_:function(e){var t=W(e,`x`,`sigmoid`);return B.runKernelFunc((function(e,n){var r=e.sigmoid(t);return n([r]),r}),{x:t},(function(e,t){var n=t[0];return{x:function(){return e.mul(n.mul(K(1).sub(n)))}}}),`Sigmoid`)}}),xc=G({sign_:function(e){var t=W(e,`x`,`sign`);return B.runKernelFunc((function(e){return e.sign(t)}),{$x:t},(function(e){return{$x:function(){return er(e)}}}))}}),Sc=G({isNaN_:function(e){var t=W(e,`x`,`isNaN`);return B.runKernelFunc((function(e){return e.isNaN(t)}),{$x:t},(function(e){return{$x:function(){return er(e)}}}))}}),Cc=G({isInf_:function(e){var t=W(e,`x`,`isInf`);return B.runKernelFunc((function(e){return e.isInf(t)}),{$x:t},(function(e){return{$x:function(){return er(e)}}}))}}),wc=G({isFinite_:function(e){var t=W(e,`x`,`isFinite`);return B.runKernelFunc((function(e){return e.isFinite(t)}),{$x:t},(function(e){return{$x:function(){return er(e)}}}))}}),Tc=G({sin_:function(e){var t=W(e,`x`,`sin`),n=[t];return B.runKernelFunc((function(e,n){var r=e.sin(t);return n([t]),r}),{x:t},(function(e,t){var n=t[0];return{x:function(){return n.toFloat().cos().mul(e)}}}),`Sin`,{},n)}}),Ec=G({sinh_:function(e){var t=W(e,`x`,`sinh`);return B.runKernelFunc((function(e,n){var r=e.sinh(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return n.toFloat().cosh().mulStrict(e)}}}))}}),Dc=G({softplus_:function(e){var t=W(e,`x`,`softplus`);return B.runKernelFunc((function(e,n){var r=e.softplus(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.mul(n.sigmoid())}}}))}}),Oc=G({sqrt_:function(e){var t=W(e,`x`,`sqrt`);return B.runKernelFunc((function(e,n){var r=e.sqrt(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.div(n.toFloat().sqrt().mul(2))}}}))}}),kc=G({step_:function(e,t){t===void 0&&(t=0);var n=W(e,`x`,`step`);return B.runKernelFunc((function(e){return e.step(n,t)}),{$x:n},(function(e){return{$x:function(){return er(e)}}}))}}),Ac=G({tan_:function(e){var t=W(e,`x`,`tan`);return B.runKernelFunc((function(e,n){var r=e.tan(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return e.div(n.cos().square())}}}))}}),jc=G({tanh_:function(e){var t=W(e,`x`,`tanh`);return B.runKernelFunc((function(e,n){var r=e.tanh(t);return n([r]),r}),{x:t},(function(e,t){var n=t[0];return{x:function(){return K(1).sub(n.square()).mulStrict(e)}}}),`Tanh`,{},null,[!0])}});function Mc(e,t,n,r,i,a){var o,s,c=W(e,`x`,`batchNorm`),l=W(t,`mean`,`batchNorm`),u=W(n,`variance`,`batchNorm`);return i!=null&&(o=W(i,`scale`,`batchNorm`)),r!=null&&(s=W(r,`offset`,`batchNorm`)),I(c.rank===2,(function(){return`Error in batchNorm3D: x must be rank 3 but got rank `+c.rank+`.`})),I(l.rank===2||l.rank===1,(function(){return`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank `+l.rank+`.`})),I(u.rank===2||u.rank===1,(function(){return`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank `+u.rank+`.`})),o!=null&&I(o.rank===2||o.rank===1,(function(){return`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank `+o.rank+`.`})),s!=null&&I(s.rank===2||s.rank===1,(function(){return`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank `+s.rank+`.`})),Fc(c,l,u,s,o,a)}function Nc(e,t,n,r,i,a){var o,s,c=W(e,`x`,`batchNorm`),l=W(t,`mean`,`batchNorm`),u=W(n,`variance`,`batchNorm`);return i!=null&&(o=W(i,`scale`,`batchNorm`)),r!=null&&(s=W(r,`offset`,`batchNorm`)),I(c.rank===3,(function(){return`Error in batchNorm3D: x must be rank 3 but got rank `+c.rank+`.`})),I(l.rank===3||l.rank===1,(function(){return`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank `+l.rank+`.`})),I(u.rank===3||u.rank===1,(function(){return`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank `+u.rank+`.`})),o!=null&&I(o.rank===3||o.rank===1,(function(){return`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank `+o.rank+`.`})),s!=null&&I(s.rank===3||s.rank===1,(function(){return`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank `+s.rank+`.`})),Fc(c,l,u,s,o,a)}function Pc(e,t,n,r,i,a){var o,s,c=W(e,`x`,`batchNorm`),l=W(t,`mean`,`batchNorm`),u=W(n,`variance`,`batchNorm`);return i!=null&&(o=W(i,`scale`,`batchNorm`)),r!=null&&(s=W(r,`offset`,`batchNorm`)),I(c.rank===4,(function(){return`Error in batchNorm4D: x must be rank 4 but got rank `+c.rank+`.`})),I(l.rank===4||l.rank===1,(function(){return`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank `+l.rank+`.`})),I(u.rank===4||u.rank===1,(function(){return`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank `+u.rank+`.`})),o!=null&&I(o.rank===4||o.rank===1,(function(){return`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank `+o.rank+`.`})),s!=null&&I(s.rank===4||s.rank===1,(function(){return`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank `+s.rank+`.`})),Fc(c,l,u,s,o,a)}function Fc(e,t,n,r,i,a){a??=.001;var o,s,c,l=W(e,`x`,`batchNorm`),u=W(t,`mean`,`batchNorm`),d=W(n,`variance`,`batchNorm`);i!=null&&(o=W(i,`scale`,`batchNorm`)),r!=null&&(s=W(r,`offset`,`batchNorm`)),I(u.rank===d.rank,(function(){return`Batch normalization gradient requires mean and variance to have equal ranks.`})),I(s==null||u.rank===s.rank,(function(){return`Batch normalization gradient requires mean and offset to have equal ranks.`})),I(o==null||u.rank===o.rank,(function(){return`Batch normalization gradient requires mean and scale to have equal ranks.`})),c=l.rank===0||l.rank===1?l.as4D(1,1,1,l.size):l.rank===2?l.as4D(1,1,l.shape[0],l.shape[1]):l.rank===3?l.as4D(1,l.shape[0],l.shape[1],l.shape[2]):l;var f=[l,u,d,o];return B.runKernelFunc((function(e,t){var n=e.batchNormalization(c,Ic(u),Ic(d),a,Ic(o),Ic(s));return t([l,u,d,o]),n}),{x:l,mean:u,variance:d,scale:o,offset:s},(function(e,t){var n=t,r=n[0],i=n[1],o=n[2],s=n[3]??K(1),l=vi(i.shape,c.shape),u=[];if(i.rank===1){for(var d=0;d<c.shape.length-1;++d)u.push(c.shape[d]);u.push(1)}var f=r.sub(i),p=e.mul(s),m=yc(o.add(K(a))),h=m.mul(m).mul(m).mul(K(-.5));return{x:function(){return i.rank===1?e.mul(Ur(m.as4D(1,1,1,i.shape[0]),u)).mul(s).reshape(r.shape):e.mul(m).mul(s).reshape(r.shape)},mean:function(){var e=m.mul(K(-1)).mul(p);return i.rank===1&&(e=e.sum(l)),e.reshape(i.shape)},variance:function(){var e=h.mul(f).mul(p);return i.rank===1&&(e=e.sum(l)),e.reshape(i.shape)},scale:function(){var t=f.mul(m),n=e.mul(t);return i.rank===1&&(n=n.sum(l)),n.reshape(i.shape)},offset:function(){var t=e;return i.rank===1&&(t=t.sum(l)),t.reshape(i.shape)}}}),`BatchNormalization`,{varianceEpsilon:a},f).reshape(l.shape)}function Ic(e){return e==null?null:e.rank===0?e.as1D():e.rank===1?e:e.rank===2?e.as4D(1,1,e.shape[0],e.shape[1]):e.rank===3?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e}function Lc(){yn(`tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon`)}var Rc=G({batchNormalization2d_:function(e,t,n,r,i,a){return r===void 0&&(r=.001),Lc(),Mc(e,t,n,a,i,r)}}),zc=G({batchNormalization3d_:function(e,t,n,r,i,a){return r===void 0&&(r=.001),Lc(),Nc(e,t,n,a,i,r)}}),Bc=G({batchNormalization4d_:function(e,t,n,r,i,a){return r===void 0&&(r=.001),Lc(),Pc(e,t,n,a,i,r)}}),Vc=G({batchNormalization_:function(e,t,n,r,i,a){return r===void 0&&(r=.001),Lc(),Fc(e,t,n,a,i,r)}}),Hc=G({batchNorm_:Fc}),Uc=G({batchNorm2d_:Mc}),Wc=G({batchNorm3d_:Nc}),Gc=G({batchNorm4d_:Pc}),Kc=G({logicalAnd_:function(e,t){var n=W(e,`a`,`logicalAnd`,`bool`),r=W(t,`b`,`logicalAnd`,`bool`);return yi(n.shape,r.shape),B.runKernelFunc((function(e){return e.logicalAnd(n,r)}),{a:n,b:r},null,`LogicalAnd`)}}),qc=G({logicalNot_:function(e){var t=W(e,`x`,`logicalNot`,`bool`);return B.runKernelFunc((function(e){return e.logicalNot(t)}),{$x:t})}}),Jc=G({logicalOr_:function(e,t){var n=W(e,`a`,`logicalOr`,`bool`),r=W(t,`b`,`logicalOr`,`bool`);return yi(n.shape,r.shape),B.runKernelFunc((function(e){return e.logicalOr(n,r)}),{$a:n,$b:r})}}),Yc=G({logicalXor_:function(e,t){var n=W(e,`a`,`logicalXor`,`bool`),r=W(t,`b`,`logicalXor`,`bool`);return yi(n.shape,r.shape),Jc(e,t).logicalAnd(Kc(e,t).logicalNot())}}),Xc=G({where_:function(e,t,n){var r=W(t,`a`,`where`),i=W(n,`b`,`where`),a=W(e,`condition`,`where`,`bool`);return L(r.shape,i.shape,`Error in where: `),a.rank===1?I(a.shape[0]===r.shape[0],(function(){return"The first dimension of `a` must match the size of `condition`."})):L(a.shape,i.shape,`Error in where: `),B.runKernelFunc((function(e,t){var n=e.select(a,r,i);return t([a]),n}),{$condition:a,$a:r,$b:i},(function(e,t){var n=t[0];return{$condition:function(){return er(n).toFloat()},$a:function(){return e.mul(n.cast(e.dtype))},$b:function(){return e.mul(n.logicalNot().cast(e.dtype))}}}))}}),Zc=function(e){return S(this,void 0,void 0,(function(){var t,n,r;return C(this,(function(i){switch(i.label){case 0:return[4,(t=W(e,`condition`,`whereAsync`,`bool`)).data()];case 1:return n=i.sent(),r=Xi(t.shape,n),e!==t&&t.dispose(),[2,r]}}))}))},Qc=G({add_:function(e,t){var n,r=W(e,`a`,`add`),i=W(t,`b`,`add`);n=ct(r,i),r=n[0],i=n[1];var a=yi(r.shape,i.shape);return B.runKernelFunc((function(e){return e.add(r,i)}),{a:r,b:i},(function(e){return{a:function(){var t=e,n=vi(r.shape,a);return n.length>0&&(t=t.sum(n)),t.reshape(r.shape)},b:function(){var t=e,n=vi(i.shape,a);return n.length>0&&(t=t.sum(n)),t.reshape(i.shape)}}}),`Add`)}}),$c=G({addN_:function(e){I(Array.isArray(e),(function(){return`The argument passed to tf.addN() must be a list of tensors`})),I(e.length>=1,(function(){return`Must pass at least one tensor to tf.addN(), but got `+e.length}));var t=e.map((function(e,t){return W(e,`tensors`+t,`addN`)})),n=t[0];t.forEach((function(e){if(e.dtype!==n.dtype)throw Error(`All tensors passed to tf.addN() must have the same dtype`)})),t.forEach((function(e){if(!oe(e.shape,n.shape))throw Error(`All tensors passed to tf.addN() must have the same shape`)}));var r=t;return B.runKernelFunc((function(e){return e.addN(t)}),r,(function(e){var n={};return t.forEach((function(t,r){n[r]=function(){return e.clone()}})),n}),`AddN`)}}),el=G({addStrict_:function(e,t){var n=W(e,`a`,`addStrict`),r=W(t,`b`,`addStrict`);return L(n.shape,r.shape,`Error in addStrict: `),n.add(r)}}),tl=G({atan2_:function(e,t){var n,r=W(e,`a`,`atan2`),i=W(t,`b`,`atan2`);n=ct(r,i),r=n[0],i=n[1];var a=yi(r.shape,i.shape);return B.runKernelFunc((function(e,t){var n=e.atan2(r,i);return t([r,i]),n}),{$a:r,$b:i},(function(e,t){var n=t[0],r=t[1];return{$a:function(){var t=Qc(n.square(),r.square()),i=e.mul(r.div(t)),o=vi(n.shape,a);return o.length>0&&(i=i.sum(o)),i.reshape(n.shape)},$b:function(){var t=Qc(n.square(),r.square()),i=gc(e.mul(n.div(t))),o=vi(r.shape,a);return o.length>0&&(i=i.sum(o)),i.reshape(r.shape)}}}))}}),nl=G({div_:function(e,t){var n,r=W(e,`a`,`div`),i=W(t,`b`,`div`);if(n=ct(r,i),r=n[0],i=n[1],r.dtype===`int32`&&i.dtype===`int32`)return al(r,i);var a=yi(r.shape,i.shape);return B.runKernelFunc((function(e,t){var n=e.realDivide(r,i);return t([r,i]),n}),{a:r,b:i},(function(e,t){var n=t[0],r=t[1];return{a:function(){var t=e.div(r.toFloat()),i=vi(n.shape,a);return i.length>0?t.sum(i).reshape(n.shape):t},b:function(){var t=e.mul(n.toFloat()),i=vi(r.shape,a);i.length>0&&(t=t.sum(i).reshape(r.shape));var o=r.square();return t.div(o.toFloat()).neg()}}}),`Div`)}}),rl=G({divNoNan_:function(e,t){var n,r=W(e,`a`,`div`),i=W(t,`b`,`div`);r=(n=ct(r,i))[0],i=n[1];var a=nl(r,i),o=er(a);return Xc(i.equal(o),o,a)}}),il=G({divStrict_:function(e,t){var n=W(e,`a`,`div`),r=W(t,`b`,`div`);return L(n.shape,r.shape,`Error in divideStrict: `),n.div(r)}}),al=G({floorDiv_:function(e,t){var n,r=W(e,`a`,`floorDiv`),i=W(t,`b`,`floorDiv`);n=ct(r,i),r=n[0],i=n[1];var a=yi(r.shape,i.shape);return B.runKernelFunc((function(e,t){var n=e.floorDiv(r,i);return t([r,i]),n}),{a:r,b:i},(function(e,t){var n=t[0],r=t[1];return{a:function(){var t=e.div(r.toFloat()),i=vi(n.shape,a);return i.length>0?t.sum(i).reshape(n.shape):t},b:function(){var t=e.mul(n.toFloat()),i=vi(r.shape,a);i.length>0&&(t=t.sum(i).reshape(r.shape));var o=r.square();return t.div(o.toFloat()).neg()}}}),`FloorDiv`)}}),ol=G({maximum_:function(e,t){var n,r=W(e,`a`,`maximum`),i=W(t,`b`,`maximum`);return n=ct(r,i),r=n[0],i=n[1],r.dtype===`bool`&&(r=r.toInt(),i=i.toInt()),yi(r.shape,i.shape),B.runKernelFunc((function(e,t){var n=e.maximum(r,i);return t([r,i]),n}),{a:r,b:i},(function(e,t){var n=t[0],r=t[1];return{a:function(){return e.mul(n.greaterEqual(r).toFloat())},b:function(){return e.mul(n.less(r).toFloat())}}}),`Maximum`)}}),sl=G({maximumStrict_:function(e,t){var n=W(e,`a`,`maximumStrict`),r=W(t,`b`,`maximumStrict`);return L(n.shape,r.shape,`Error in maximumStrict: `),n.maximum(r)}}),cl=G({minimum_:function(e,t){var n,r=W(e,`a`,`minimum`),i=W(t,`b`,`minimum`);return n=ct(r,i),r=n[0],i=n[1],r.dtype===`bool`&&(r=r.toInt(),i=i.toInt()),yi(r.shape,i.shape),B.runKernelFunc((function(e,t){var n=e.minimum(r,i);return t([r,i]),n}),{a:r,b:i},(function(e,t){var n=t[0],r=t[1];return{a:function(){return e.mul(n.lessEqual(r).toFloat())},b:function(){return e.mul(n.greater(r).toFloat())}}}),`Minimum`)}}),ll=G({minimumStrict_:function(e,t){var n=W(e,`a`,`minimumStrict`),r=W(t,`b`,`minimumStrict`);return L(n.shape,r.shape,`Error in minimumStrict: `),n.minimum(r)}}),ul=G({mod_:function(e,t){var n,r=W(e,`a`,`mod`),i=W(t,`b`,`mod`);n=ct(r,i),r=n[0],i=n[1];var a=yi(r.shape,i.shape);return B.runKernelFunc((function(e,t){var n=e.mod(r,i);return t([r,i]),n}),{$a:r,$b:i},(function(e,t){var n=t[0],r=t[1];return{$a:function(){var t=vi(n.shape,a);return t.length>0?e.sum(t).reshape(n.shape):e},$b:function(){var t=e.mul(n.div(r).floor().neg()),i=vi(r.shape,a);return i.length>0?t.sum(i).reshape(r.shape):t}}}))}}),dl=G({modStrict_:function(e,t){var n=W(e,`a`,`modStrict`),r=W(t,`b`,`modStrict`);return L(n.shape,r.shape,`Error in modStrict: `),n.mod(r)}}),fl=G({mul_:function(e,t){var n,r=W(e,`a`,`mul`),i=W(t,`b`,`mul`);n=ct(r,i),r=n[0],i=n[1];var a=yi(r.shape,i.shape);return B.runKernelFunc((function(e,t){var n=e.multiply(r,i);return t([r,i]),n}),{a:r,b:i},(function(e,t){var n=t[0],r=t[1];return{a:function(){var t=e.mul(r.toFloat()),i=vi(n.shape,a);return i.length>0?t.sum(i).reshape(n.shape):t},b:function(){var t=e.mul(n.toFloat()),i=vi(r.shape,a);return i.length>0?t.sum(i).reshape(r.shape):t}}}),`Mul`)}}),pl=G({mulStrict_:function(e,t){var n=W(e,`a`,`mul`),r=W(t,`b`,`mul`);return L(n.shape,r.shape,`Error in multiplyStrict: `),n.mul(r)}}),ml=G({pow_:function(e,t){var n,r=W(e,`base`,`pow`),i=W(t,`exp`,`pow`);n=ct(r,i),r=n[0],i=n[1];var a=yi(r.shape,i.shape),o=[r,i];return B.runKernelFunc((function(e,t){var n=e.pow(r,i);return t([r,i,n]),n}),{a:r,b:i},(function(e,t){var n=t[0],r=t[1],i=t[2];return{a:function(){var t=r.toFloat(),i=e.mul(t.mul(n.pow(t.sub(K(1))))),o=vi(n.shape,a);return o.length>0&&(i=i.sum(o)),i.reshape(n.shape)},b:function(){var t=n.greater(0),o=n.log().where(t,er(n)),s=e.mul(i.mul(o)),c=vi(r.shape,a);return c.length>0&&(s=s.sum(c)),s.reshape(r.shape)}}}),`Pow`,{},o,[!0])}}),hl=G({powStrict_:function(e,t){return L(e.shape,t.shape,`Error in powStrict: `),e.pow(t)}}),gl=G({squaredDifferenceStrict_:function(e,t){var n=W(e,`a`,`squaredDifferenceStrict`),r=W(t,`b`,`squaredDifferenceStrict`);return L(n.shape,r.shape,`Error in squaredDifferenceStrict: `),n.squaredDifference(r)}}),_l=G({sub_:function(e,t){var n,r=W(e,`a`,`sub`),i=W(t,`b`,`sub`);n=ct(r,i),r=n[0],i=n[1];var a=yi(r.shape,i.shape);return B.runKernelFunc((function(e){return e.subtract(r,i)}),{a:r,b:i},(function(e){return{a:function(){var t=e,n=vi(r.shape,a);return n.length>0&&(t=t.sum(n)),t.reshape(r.shape)},b:function(){var t=e,n=vi(i.shape,a);return n.length>0&&(t=t.sum(n)),t.neg().reshape(i.shape)}}}),`Sub`)}}),vl=G({subStrict_:function(e,t){var n=W(e,`a`,`subStrict`),r=W(t,`b`,`subStrict`);return L(n.shape,r.shape,`Error in subStrict: `),n.sub(r)}}),yl=G({equal_:function(e,t){var n,r=W(e,`a`,`equal`),i=W(t,`b`,`equal`);return n=ct(r,i),r=n[0],i=n[1],yi(r.shape,i.shape),B.runKernelFunc((function(e){return e.equal(r,i)}),{$a:r,$b:i})}}),bl=G({equalStrict_:function(e,t){var n=W(e,`a`,`equalStrict`),r=W(t,`b`,`equalStrict`);return L(n.shape,r.shape,`Error in equalStrict: `),n.equal(r)}}),xl=G({greater_:function(e,t){var n,r=W(e,`a`,`greater`),i=W(t,`b`,`greater`);return n=ct(r,i),r=n[0],i=n[1],yi(r.shape,i.shape),B.runKernelFunc((function(e){return e.greater(r,i)}),{a:r,b:i},null,`Greater`)}}),Sl=G({greaterEqual_:function(e,t){var n,r=W(e,`a`,`greaterEqual`),i=W(t,`b`,`greaterEqual`);return n=ct(r,i),r=n[0],i=n[1],yi(r.shape,i.shape),B.runKernelFunc((function(e,t){var n=e.greaterEqual(r,i);return t([r,i]),n}),{a:r,b:i},(function(e,t){var n=t[0],r=t[1];return{a:function(){return er(n)},b:function(){return er(r)}}}),`GreaterEqual`)}}),Cl=G({greaterEqualStrict_:function(e,t){var n=W(e,`a`,`greaterEqualStrict`),r=W(t,`b`,`greaterEqualStrict`);return L(n.shape,r.shape,`Error in greaterEqualStrict: `),n.greaterEqual(r)}}),wl=G({greaterStrict_:function(e,t){var n=W(e,`a`,`greaterStrict`),r=W(t,`b`,`greaterStrict`);return L(n.shape,r.shape,`Error in greaterStrict: `),n.greater(r)}}),Tl=G({less_:function(e,t){var n,r=W(e,`a`,`less`),i=W(t,`b`,`less`);return n=ct(r,i),r=n[0],i=n[1],yi(r.shape,i.shape),B.runKernelFunc((function(e){return e.less(r,i)}),{a:r,b:i},null,`Less`)}}),El=G({lessEqual_:function(e,t){var n,r=W(e,`a`,`lessEqual`),i=W(t,`b`,`lessEqual`);return n=ct(r,i),r=n[0],i=n[1],yi(r.shape,i.shape),B.runKernelFunc((function(e,t){var n=e.lessEqual(r,i);return t([r,i]),n}),{a:r,b:i},null,`LessEqual`)}}),Dl=G({lessEqualStrict_:function(e,t){var n=W(e,`a`,`lessEqualStrict`),r=W(t,`b`,`lessEqualStrict`);return L(n.shape,r.shape,`Error in lessEqualStrict: `),n.lessEqual(r)}}),Ol=G({lessStrict_:function(e,t){var n=W(e,`a`,`lessStrict`),r=W(t,`b`,`lessStrict`);return L(n.shape,r.shape,`Error in lessStrict: `),n.less(r)}}),kl=G({notEqual_:function(e,t){var n,r=W(e,`a`,`notEqual`),i=W(t,`b`,`notEqual`);return n=ct(r,i),r=n[0],i=n[1],yi(r.shape,i.shape),B.runKernelFunc((function(e){return e.notEqual(r,i)}),{a:r,b:i},null,`NotEqual`)}}),Al=G({notEqualStrict_:function(e,t){var n=W(e,`a`,`notEqualStrict`),r=W(t,`b`,`notEqualStrict`);return L(n.shape,r.shape,`Error in notEqualStrict: `),n.notEqual(r)}});function jl(e,t){for(var n=[],r=e;r<t;++r)n.push(r);return n}function Ml(e){for(var t=[],n=0;n<e.length;++n)for(var r=0;r<e[n].length;++r)t.push(e[n][r]);return t}var Nl=G({gather_:function(e,t,n){n===void 0&&(n=0);var r=W(e,`x`,`gather`),i=W(t,`indices`,`gather`,`int32`);n=pe(n,r.shape)[0];var a=function(e,t,n){for(var r=e.shape[n],i=[],a=1,o=1,s=0;s<n;s++)i.push(e.shape[s]),a*=e.shape[s];for(s=0;s<t.rank;s++)i.push(t.shape[s]);for(s=n+1;s<e.rank;s++)i.push(e.shape[s]),o*=e.shape[s];return{batchSize:a,sliceSize:o,dimSize:r,outputShape:i}}(r,i,n);return B.runKernelFunc((function(e,t){var a=e.gather(r,i.flatten(),n);return t([i]),a}),{x:r,indices:i},(function(e,t){var i=t[0];return{x:function(){var t=r.shape,a=i.size,o=t.slice(0,n),s=o.length,c=t.slice(n,t.length).slice(1),l=c.length,u=jl(0,s),d=jl(s+1,s+1+l),f=Ml([o,[a],c]),p=e.reshape(f),m=i.reshape([a]),h=Ml([[s],u,d]),g=Pl(p.transpose(h),m,r.shape[n]),_=Mn(h);return g=g.transpose(_)},indices:function(){return i}}}),`Gather`,{axis:n}).reshape(a.outputShape)}}),Pl=G({unsortedSegmentSum_:function(e,t,n){var r=W(e,`x`,`unsortedSegmentSum`),i=W(t,`segmentIds`,`unsortedSegmentSum`,`int32`);return I(se(n),(function(){return`numSegments must be of dtype int`})),B.runKernelFunc((function(e,t){var a=e.unsortedSegmentSum(r,i,n);return t([i]),a}),{$x:r},(function(e,t){var n=t[0];return{$x:function(){return function(e,t){for(var n=Nl(e,ol(t,er(t))),r=Sl(t,K(0,`int32`)),i=n.rank-r.rank,a=0;a<i;++a)r=Er(r,a+1);r=Kc(r,Jn(n.shape,`bool`));var o=er(n);return Xc(r,n,o)}(e,n)}}}))}}),Fl=function(e,t,n){return S(this,void 0,void 0,(function(){var r,i,a,o,s,c,l,u,d,f,p,m,h;return C(this,(function(g){switch(g.label){case 0:for(r=W(e,`tensor`,`boolMask`),i=W(t,`mask`,`boolMask`,`bool`),a=n??0,o=i.rank,s=r.shape,I(o>0,(function(){return`mask cannot be scalar`})),L(s.slice(a,a+o),i.shape,`mask's shape must match the first K dimensions of tensor's shape,`),c=1,l=a;l<a+o;l++)c*=s[l];return u=s.slice(0,a).concat([c],s.slice(a+o)),d=r.reshape(u),f=i.reshape([-1]),[4,Zc(f)];case 1:return p=g.sent(),m=p.squeeze([1]),h=Nl(d,m,a),e!==r&&r.dispose(),t!==i&&i.dispose(),m.dispose(),d.dispose(),f.dispose(),p.dispose(),[2,h]}}))}))};function Il(e,t,n,r,i,a,o){a===void 0&&(a=`NHWC`),I(e.length===t.rank,(function(){return`Length of inShape (`+e.length+`) and rank of dy (`+t.rank+`) must match`}));var s=e,c=t,l=!1;t.rank===3&&(l=!0,c=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,e[0],e[1],e[2]]),I(s.length===4,(function(){return`Error in conv2dDerInput: inShape must be length 4, but got length `+s.length+`.`})),I(c.rank===4,(function(){return`Error in conv2dDerInput: dy must be rank 4, but got rank `+c.rank})),I(n.rank===4,(function(){return`Error in conv2dDerInput: filter must be rank 4, but got rank `+n.rank}));var u=a===`NHWC`?s[3]:s[1],d=a===`NHWC`?c.shape[3]:c.shape[1];I(u===n.shape[2],(function(){return`Error in conv2dDerInput: depth of input (`+u+`) must match input depth for filter `+n.shape[2]+`.`})),I(d===n.shape[3],(function(){return`Error in conv2dDerInput: depth of output (`+d+`) must match output depth for filter `+n.shape[3]+`.`})),o!=null&&I(se(i),(function(){return`Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+i+`.`}));var f=ji(a),p=Si(s,n.shape,r,1,i,o,!1,f),m=B.runKernelFunc((function(e,t){var r=e.conv2dDerInput(c,n,p);return t([n,c]),r}),{dy4D:c,filter:n},(function(e,t){var n=t[0],s=t[1];return{dy4D:function(){return Bl(e,n,r,i,a,1,o)},filter:function(){return Hl(e,s,n.shape,r,i,a,o)}}}));return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}function Ll(e){var t=function(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}(e),n=t[0],r=t[1],i=t[2];return n===1&&r===1&&i===1}function Rl(e,t,n,r,i){I(e.length===t.rank,(function(){return`Length of inShape (`+e.length+`) and rank of dy (`+t.rank+`) must match`}));var a=e,o=t,s=!1;t.rank===4&&(s=!0,o=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,e[0],e[1],e[2],e[3]]);var c=a[4],l=o.shape[4];I(a.length===5,(function(){return`Error in conv3dDerInput: inShape must be length 5, but got length `+a.length+`.`})),I(o.rank===5,(function(){return`Error in conv3dDerInput: dy must be rank 5, but got rank `+o.rank})),I(n.rank===5,(function(){return`Error in conv3dDerInput: filter must be rank 5, but got rank `+n.rank})),I(c===n.shape[3],(function(){return`Error in conv3dDerInput: depth of input (`+c+`) must match input depth for filter `+n.shape[3]+`.`})),I(l===n.shape[4],(function(){return`Error in conv3dDerInput: depth of output (`+l+`) must match output depth for filter `+n.shape[4]+`.`}));var u=Ci(a,n.shape,r,1,i),d=B.runKernelFunc((function(e){return e.conv3dDerInput(o,n,u)}),{dy5D:o});return s?d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]):d}var zl=G({conv1d_:function(e,t,n,r,i,a,o){i===void 0&&(i=`NWC`),a===void 0&&(a=1);var s=W(e,`x`,`conv1d`),c=W(t,`filter`,`conv1d`),l=s,u=!1;s.rank===2&&(u=!0,l=s.as3D(1,s.shape[0],s.shape[1])),I(l.rank===3,(function(){return`Error in conv1d: input must be rank 3, but got rank `+l.rank+`.`})),I(c.rank===3,(function(){return`Error in conv1d: filter must be rank 3, but got rank `+c.rank+`.`})),o!=null&&I(se(r),(function(){return`Error in conv1d: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+r+`.`})),I(l.shape[2]===c.shape[1],(function(){return`Error in conv1d: depth of input (`+l.shape[2]+`) must match input depth for filter `+c.shape[1]+`.`})),I(Ai(n,a),(function(){return`Error in conv1D: Either stride or dilation must be 1. Got stride `+n+` and dilation '`+a+`'`})),I(i===`NWC`,(function(){return`Error in conv1d: got dataFormat of `+i+` but only NWC is currently supported.`}));var d=c.as4D(1,c.shape[0],c.shape[1],c.shape[2]),f=Bl(l.as4D(l.shape[0],1,l.shape[1],l.shape[2]),d,[1,n],r,`NHWC`,[1,a],o);return u?f.as2D(f.shape[2],f.shape[3]):f.as3D(f.shape[0],f.shape[2],f.shape[3])}}),Bl=G({conv2d_:function(e,t,n,r,i,a,o){i===void 0&&(i=`NHWC`),a===void 0&&(a=[1,1]);var s=W(e,`x`,`conv2d`),c=W(t,`filter`,`conv2d`),l=s,u=!1;s.rank===3&&(u=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(l.rank===4,(function(){return`Error in conv2d: input must be rank 4, but got rank `+l.rank+`.`})),I(c.rank===4,(function(){return`Error in conv2d: filter must be rank 4, but got rank `+c.rank+`.`})),o!=null&&I(se(r),(function(){return`Error in conv2d: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+r+`.`}));var d=i===`NHWC`?l.shape[3]:l.shape[1];I(d===c.shape[2],(function(){return`Error in conv2d: depth of input (`+d+`) must match input depth for filter `+c.shape[2]+`.`})),I(Ai(n,a),(function(){return`Error in conv2D: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+a+`'`}));var f=ji(i),p=Si(l.shape,c.shape,n,a,r,o,!1,f),m=[c,l],h=B.runKernelFunc((function(e,t){var n=e.conv2d(l,c,p);return t([c,l]),n}),{x:l,filter:c},(function(e,t){var o=t,s=o[0],c=o[1];return I(ki(a),(function(){return`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '`+a+`'`})),{x:function(){return Ul(c.shape,e,s,n,r,i)},filter:function(){return Hl(c,e,s.shape,n,r,i)}}}),`Conv2D`,p,m);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}}),Vl=G({conv3d_:function(e,t,n,r,i,a){i===void 0&&(i=`NDHWC`),a===void 0&&(a=[1,1,1]);var o=W(e,`x`,`conv3d`),s=W(t,`filter`,`conv3d`),c=o,l=!1;o.rank===4&&(l=!0,c=o.as5D(1,o.shape[0],o.shape[1],o.shape[2],o.shape[3])),I(c.rank===5,(function(){return`Error in conv3d: input must be rank 5, but got rank `+c.rank+`.`})),I(s.rank===5,(function(){return`Error in conv3d: filter must be rank 5, but got rank `+s.rank+`.`})),I(c.shape[4]===s.shape[3],(function(){return`Error in conv3d: depth of input (`+c.shape[4]+`) must match input depth for filter `+s.shape[3]+`.`})),I(function(e,t){return Ll(e)||Ll(t)}(n,a),(function(){return`Error in conv3D: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+a+`'`})),I(i===`NDHWC`,(function(){return`Error in conv3d: got dataFormat of `+i+` but only NDHWC is currently supported.`}));var u=Ci(c.shape,s.shape,n,a,r),d=B.runKernelFunc((function(e,t){var n=e.conv3d(c,s,u);return t([c,s]),n}),{x:c,$filter:s},(function(e,t){I(Ll(a),(function(){return`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '`+a+`'`}));var i=t[0],o=t[1];return{x:function(){return Rl(i.shape,e,o,n,r)},$filter:function(){return function(e,t,n,r,i){var a=e;e.rank===4&&(a=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]));var o=t;o.rank===4&&(o=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3])),I(a.rank===5,(function(){return`Error in conv3dDerFilter: input must be rank 5, but got shape `+a.shape+`.`})),I(o.rank===5,(function(){return`Error in conv3dDerFilter: dy must be rank 5, but got shape `+o.shape+`.`})),I(n.length===5,(function(){return`Error in conv3dDerFilter: filterShape must be length 5, but got `+n+`.`})),I(a.shape[4]===n[3],(function(){return`Error in conv3dDerFilter: depth of input `+a.shape[4]+`) must match input depth in filter (`+n[3]+`.`})),I(o.shape[4]===n[4],(function(){return`Error in conv3dDerFilter: depth of dy (`+o.shape[4]+`) must match output depth for filter (`+n[4]+`).`}));var s=Ci(a.shape,n,r,1,i);return B.runKernelFunc((function(e){return e.conv3dDerFilter(a,o,s)}),{x5D:a,dy5D:o})}(i,e,o.shape,n,r)}}}));return l?d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]):d}}),Hl=G({conv2dDerFilter_:function(e,t,n,r,i,a,o){a===void 0&&(a=`NHWC`);var s=e;e.rank===3&&(s=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var c=t;c.rank===3&&(c=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),I(s.rank===4,(function(){return`Error in conv2dDerFilter: input must be rank 4, but got shape `+s.shape+`.`})),I(c.rank===4,(function(){return`Error in conv2dDerFilter: dy must be rank 4, but got shape `+c.shape+`.`})),I(n.length===4,(function(){return`Error in conv2dDerFilter: filterShape must be length 4, but got `+n+`.`}));var l=a===`NHWC`?s.shape[3]:s.shape[1],u=a===`NHWC`?c.shape[3]:c.shape[1];I(l===n[2],(function(){return`Error in conv2dDerFilter: depth of input `+l+`) must match input depth in filter (`+n[2]+`.`})),I(u===n[3],(function(){return`Error in conv2dDerFilter: depth of dy (`+u+`) must match output depth for filter (`+n[3]+`).`})),o!=null&&I(se(i),(function(){return`Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+i+`.`}));var d=ji(a),f=Si(s.shape,n,r,1,i,o,!1,d);return B.runKernelFunc((function(e){return e.conv2dDerFilter(s,c,f)}),{x4D:s,dy4D:c})}}),Ul=G({conv2dDerInput_:Il}),Wl=G({depthwiseConv2d_:function(e,t,n,r,i,a,o){i===void 0&&(i=`NHWC`),a===void 0&&(a=[1,1]);var s=W(e,`x`,`depthwiseConv2d`),c=W(t,`filter`,`depthwiseConv2d`),l=s,u=!1;s.rank===3&&(u=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(l.rank===4,(function(){return`Error in depthwiseConv2d: input must be rank 4, but got rank `+l.rank+`.`})),I(c.rank===4,(function(){return`Error in depthwiseConv2d: filter must be rank 4, but got rank `+c.rank+`.`})),I(l.shape[3]===c.shape[2],(function(){return`Error in depthwiseConv2d: number of input channels (`+l.shape[3]+`) must match the inChannels dimension in filter `+c.shape[2]+`.`})),a??=[1,1],I(Ai(n,a),(function(){return`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+a+`'`})),o!=null&&I(se(r),(function(){return`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+r+`.`}));var d=Si(l.shape,c.shape,n,a,r,o,!0),f=[l,c],p=B.runKernelFunc((function(e,t){var n=e.depthwiseConv2D(l,c,d);return t([l,c]),n}),{x:l,filter:c},(function(e,t){I(ki(a),(function(){return`Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '`+a+`'`}));var n=t[0],r=t[1];return{x:function(){return Gl(n.shape,e,r,d)},filter:function(){return Kl(n,e,r.shape,d)}}}),`DepthwiseConv2dNative`,d,f);return u?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),Gl=G({depthwiseConv2dDerInput_:function(e,t,n,r){var i=t,a=!1;t.rank===3&&(a=!0,i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var o=B.runKernelFunc((function(e){return e.depthwiseConv2DDerInput(i,n,r)}),{dy4D:i});return a?o.as3D(o.shape[1],o.shape[2],o.shape[3]):o}}),Kl=G({depthwiseConv2dDerFilter_:function(e,t,n,r){var i=e;e.rank===3&&(i=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),B.runKernelFunc((function(e){return e.depthwiseConv2DDerFilter(i,a,r)}),{x4D:i,dy4D:a})}}),ql=G({separableConv2d_:function(e,t,n,r,i,a,o){a===void 0&&(a=[1,1]),o===void 0&&(o=`NHWC`);var s=W(e,`x`,`separableConv2d`),c=W(t,`depthwiseFilter`,`separableConv2d`),l=W(n,`pointwiseFilter`,`separableConv2d`),u=s,d=!1;if(s.rank===3&&(d=!0,u=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),o===`NCHW`)throw Error(`separableConv2d currently does not support dataFormat NCHW; only NHWC is supported`);I(u.rank===4,(function(){return`Error in separableConv2d: input must be rank 4, but got rank `+u.rank+`.`})),I(c.rank===4,(function(){return`Error in separableConv2d: depthwise filter must be rank 4, but got rank `+c.rank+`.`})),I(l.rank===4,(function(){return`Error in separableConv2d: pointwise filter must be rank 4, but got rank `+c.rank+`.`})),I(l.shape[0]===1,(function(){return`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got `+l.shape[0]+`.`})),I(l.shape[1]===1,(function(){return`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got `+l.shape[1]+`.`}));var f=c.shape[2],p=c.shape[3];I(l.shape[2]===f*p,(function(){return`Error in separableConv2d: the third dimension of pointwise filter must be `+f*p+`, but got `+l.shape[2]+`.`}));var m=Bl(Wl(u,c,r,i,o,a),l,1,`valid`,o);return d?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Jl=G({conv2dTranspose_:function(e,t,n,r,i,a){return Il(n,W(e,`x`,`conv2dTranspose`),W(t,`filter`,`conv2dTranspose`),r,i,`NHWC`,a)}}),Yl=G({conv3dTranspose_:function(e,t,n,r,i){return Rl(n,W(e,`x`,`conv3dTranspose`),W(t,`filter`,`conv3dTranspose`),r,i)}}),Xl=G({matMul_:function(e,t,n,r){var i;n===void 0&&(n=!1),r===void 0&&(r=!1);var a=W(e,`a`,`matMul`),o=W(t,`b`,`matMul`);i=ct(a,o),a=i[0],o=i[1];var s=n?a.shape[a.rank-2]:a.shape[a.rank-1],c=r?o.shape[o.rank-1]:o.shape[o.rank-2],l=n?a.shape[a.rank-1]:a.shape[a.rank-2],u=r?o.shape[o.rank-2]:o.shape[o.rank-1],d=a.shape.slice(0,-2),f=o.shape.slice(0,-2),p=R(d),m=R(f);I(a.rank>=2&&o.rank>=2&&a.rank===o.rank,(function(){return`Error in matMul: inputs must have the same rank of at least 2, got ranks `+a.rank+` and `+o.rank+`.`})),I(oe(d,f),(function(){return`Error in matMul: outer dimensions (`+d+`) and (`+f+`) of Tensors with shapes `+a.shape+` and `+o.shape+` must match.`})),I(s===c,(function(){return`Error in matMul: inner shapes (`+s+`) and (`+c+`) of Tensors with shapes `+a.shape+` and `+o.shape+` and transposeA=`+n+` and transposeB=`+r+` must match.`}));var h=a.shape.slice(0,-2).concat([l,u]),g=n?a.as3D(p,s,l):a.as3D(p,l,s),_=r?o.as3D(m,u,c):o.as3D(m,c,u),v={transposeA:n,transposeB:r};return B.runKernelFunc((function(e,t){var i=e.batchMatMul(g,_,n,r);return t([g,_]),i}),{a:g,b:_},(function(e,t){var i=t,a=i[0],o=i[1];return n||r?!n&&r?{a:function(){return e.matMul(o,!1,!1)},b:function(){return e.matMul(a,!0,!1)}}:n&&!r?{a:function(){return o.matMul(e,!1,!0)},b:function(){return a.matMul(e,!1,!1)}}:{a:function(){return o.matMul(e,!0,!0)},b:function(){return e.matMul(a,!0,!0)}}:{a:function(){return e.matMul(o,!1,!0)},b:function(){return a.matMul(e,!0,!1)}}}),`BatchMatMul`,v).reshape(h)}}),Zl=G({dot_:function(e,t){var n=W(e,`t1`,`dot`),r=W(t,`t2`,`dot`);I(!(n.rank!==1&&n.rank!==2||r.rank!==1&&r.rank!==2),(function(){return`Error in dot: inputs must all be rank 1 or 2, but got ranks `+n.rank+` and `+r.rank+`.`}));var i=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];return I(i===a,(function(){return`Error in dot: inner dimensions of inputs must match, but got `+i+` and `+a+`.`})),n.rank===1&&r.rank===1?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():n.rank===1&&r.rank===2?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():n.rank===2&&r.rank===1?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}}),Ql=G({outerProduct_:function(e,t){var n=W(e,`v1`,`outerProduct`),r=W(t,`v2`,`outerProduct`);return I(n.rank===1&&r.rank===1,(function(){return`Error in outerProduct: inputs must be rank 1, but got ranks `+n.rank+` and `+r.rank+`.`})),n.as2D(-1,1).matMul(r.as2D(1,-1))}}),$l=G({reverse_:function(e,t){var n=W(e,`x`,`reverse`);if(n.rank===0)return n.clone();var r=pe(t,n.shape);return B.runKernelFunc((function(e){return e.reverse(n,r)}),{$x:n},(function(e){return{$x:function(){return e.reverse(r)}}})).reshapeAs(n)}}),eu=G({reverse1d_:function(e){var t=W(e,`x`,`reverse`);return I(t.rank===1,(function(){return`Error in reverse1D: x must be rank 1 but got rank `+t.rank+`.`})),$l(t,0)}}),tu=G({reverse2d_:function(e,t){var n=W(e,`x`,`reverse`);return I(n.rank===2,(function(){return`Error in reverse2D: x must be rank 2 but got rank `+n.rank+`.`})),$l(n,t)}}),nu=G({reverse3d_:function(e,t){var n=W(e,`x`,`reverse`);return I(n.rank===3,(function(){return`Error in reverse3D: x must be rank 3 but got rank `+n.rank+`.`})),$l(n,t)}}),ru=G({reverse4d_:function(e,t){var n=W(e,`x`,`reverse`);return I(n.rank===4,(function(){return`Error in reverse4D: x must be rank 4 but got rank `+n.rank+`.`})),$l(n,t)}});function iu(e,t,n,r,i,a){var o=W(e,`x`,`maxPool`),s=o,c=!1;o.rank===3&&(c=!0,s=o.as4D(1,o.shape[0],o.shape[1],o.shape[2])),r??=[1,1],I(s.rank===4,(function(){return`Error in maxPool: input must be rank 4 but got rank `+s.rank+`.`})),I(Ai(n,r),(function(){return`Error in maxPool: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+r+`'`})),a!=null&&I(se(i),(function(){return`Error in maxPool: pad must be an integer when using, dimRoundingMode `+a+` but got pad `+i+`.`}));var l=bi(s.shape,t,n,r,i,a);if(l.filterWidth===1&&l.filterHeight===1&&oe(l.inShape,l.outShape))return o.clone();var u=[s],d=B.runKernelFunc((function(e,t){var n=e.maxPool(s,l);return t([s,n]),n}),{x:s},(function(e,a){var o=a[0],s=a[1];return{x:function(){return function(e,t,n,r,i,a,o,s){var c=W(e,`dy`,`maxPoolBackprop`),l=W(t,`input`,`maxPoolBackprop`),u=W(n,`output`,`maxPoolBackprop`);I(l.rank===c.rank,(function(){return`Rank of input (`+l.rank+`) does not match rank of dy (`+c.rank+`)`})),a??=[1,1],I(Ai(i,a),(function(){return`Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides `+i+` and dilations '`+a+`'`})),I(c.rank===4,(function(){return`Error in maxPoolBackprop: dy must be rank 4 but got rank `+c.rank+`.`})),I(l.rank===4,(function(){return`Error in maxPoolBackprop: input must be rank 4 but got rank `+l.rank+`.`})),s!=null&&I(se(o),(function(){return`Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode `+s+` but got pad `+o+`.`}));var d=bi(l.shape,r,i,a,o,s);return B.runKernelFunc((function(e){return e.maxPoolBackprop(c,l,u,d)}),{$dy:c,$input:l})}(e,o,s,t,n,r,i)}}}),`MaxPool`,l,u);return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function au(e,t,n,r,i,a){var o=W(e,`x`,`avgPool`,`float32`);r??=[1,1],I(Ai(n,r),(function(){return`Error in avgPool: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+r+`'`}));var s=o,c=!1;o.rank===3&&(c=!0,s=o.as4D(1,o.shape[0],o.shape[1],o.shape[2])),I(s.rank===4,(function(){return`Error in avgPool: x must be rank 4 but got rank `+s.rank+`.`})),a!=null&&I(se(i),(function(){return`Error in avgPool: pad must be an integer when using, dimRoundingMode `+a+` but got pad `+i+`.`}));var l=bi(s.shape,t,n,r,i,a);if(l.filterWidth===1&&l.filterHeight===1&&oe(l.inShape,l.outShape))return o.clone();var u=B.runKernelFunc((function(e){return e.avgPool(s,l)}),{x:s},(function(e){return{x:function(){return function(e,t,n,r,i,a){var o=W(e,`dy`,`avgPoolBackprop`),s=W(t,`input`,`avgPoolBackprop`);I(s.rank===o.rank,(function(){return`Rank of input (`+s.rank+`) does not match rank of dy (`+o.rank+`)`})),i??=[1,1],I(Ai(r,i),(function(){return`Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides `+r+` and dilations '`+i+`'`}));var c=s,l=o,u=!1;s.rank===3&&(u=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2]),l=o.as4D(1,o.shape[0],o.shape[1],o.shape[2])),I(l.rank===4,(function(){return`Error in avgPoolBackprop: dy must be rank 4 but got rank `+l.rank+`.`})),I(c.rank===4,(function(){return`Error in avgPoolBackprop: input must be rank 4 but got rank `+c.rank+`.`}));var d=bi(c.shape,n,r,i,a),f=B.runKernelFunc((function(e){return e.avgPoolBackprop(l,c,d)}),{dy4D:l,input4D:c});return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}(e,s,t,n,r,i)}}}),`AvgPool`,l);return u=u.cast(o.dtype),c?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}var ou=G({maxPool_:function(e,t,n,r,i){return iu(e,t,n,1,r,i)}}),su=G({avgPool_:function(e,t,n,r,i){return au(e,t,n,1,r,i)}}),cu=G({pool_:function(e,t,n,r,i,a){i??=[1,1],a??=1,r===0&&(r=`valid`);var o=W(e,`x`,`maxPool`),s=o,c=!1;o.rank===3&&(c=!0,s=o.as4D(1,o.shape[0],o.shape[1],o.shape[2])),I(Ai(a,i),(function(){return`Error in pool: Either strides or dilations must be 1. Got strides `+a+` and dilations '`+i+`'`}));var l,u=bi(s.shape,t,a,i,r),d=[u.dilationHeight,u.dilationWidth];l=r===`same`?function(e,t){var n=e.map((function(e,n){return e+(e-1)*(t[n]-1)})).map((function(e){return e-1})),r=n.map((function(e){return Math.floor(e/2)})),i=n.map((function(e,t){return e-r[t]}));return n.map((function(e,t){return[r[t],i[t]]}))}([u.filterHeight,u.filterWidth],d):[[0,0],[0,0]];var f=d[0]===1&&d[1]===1,p=function(e,t,n){var r=n.map((function(e){return e[0]})),i=n.map((function(e){return e[1]})),a=e.concat(r,i),o=t.map((function(e,t){return(e-a[t]%e)%e})),s=i.map((function(e,t){return e+o[t]}));return[t.map((function(e,t){return[r[t],s[t]]})),t.map((function(e,t){return[0,o[t]]}))]}([u.inHeight,u.inWidth],d,l),m=p[0],h=p[1],g=f?r:`valid`,_=f?s:Br(s,d,m),v=(n===`avg`?function(){return au(_,t,a,1,g)}:function(){return iu(_,t,a,1,g)})(),y=f?v:br(v,d,h);return c?y.as3D(y.shape[1],y.shape[2],y.shape[3]):y}}),lu=G({maxPool3d_:function(e,t,n,r,i,a,o){a===void 0&&(a=`NDHWC`);var s=W(e,`x`,`maxPool3d`),c=s,l=!1;s.rank===4&&(l=!0,c=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),o??=[1,1,1],I(c.rank===5,(function(){return`Error in maxPool3d: x must be rank 5 but got rank `+c.rank+`.`})),I(a===`NDHWC`,(function(){return`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of `+a})),I(Ai(n,o),(function(){return`Error in maxPool3d: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+o+`'`})),i!=null&&I(se(r),(function(){return`Error in maxPool3d: pad must be an integer when using, dimRoundingMode `+i+` but got pad `+r+`.`}));var u=xi(c.shape,t,n,o,r,i,a),d=B.runKernelFunc((function(e,t){var n=e.maxPool3d(c,u);return t([c,n]),n}),{x:c},(function(e,a){var s=a[0],c=a[1];return{x:function(){return function(e,t,n,r,i,a,o,s){var c=W(e,`dy`,`maxPool3dBackprop`),l=W(t,`input`,`maxPool3dBackprop`),u=W(n,`output`,`maxPool3dBackprop`),d=c,f=l,p=u,m=!1;l.rank===4&&(m=!0,d=c.as5D(1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]),f=l.as5D(1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]),p=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3])),I(d.rank===5,(function(){return`Error in maxPool3dBackprop: dy must be rank 5 but got rank `+d.rank+`.`})),I(f.rank===5,(function(){return`Error in maxPool3dBackprop: input must be rank 5 but got rank `+f.rank+`.`})),I(p.rank===5,(function(){return`Error in maxPool3dBackprop: output must be rank 5 but got rank `+p.rank+`.`})),a??=[1,1,1],I(Ai(i,a),(function(){return`Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides `+i+` and dilations '`+a+`'`})),s!=null&&I(se(o),(function(){return`Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode `+s+` but got pad `+o+`.`}));var h=xi(f.shape,r,i,a,o,s),g=B.runKernelFunc((function(e){return e.maxPool3dBackprop(d,f,p,h)}),{dy5D:d,input5D:f});return m?g.as4D(g.shape[1],g.shape[2],g.shape[3],g.shape[4]):g}(e,s,c,t,n,o,r,i)}}}));return l?d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]):d}}),uu=G({avgPool3d_:function(e,t,n,r,i,a,o){a===void 0&&(a=`NDHWC`);var s=W(e,`x`,`avgPool3d`,`float32`),c=s,l=!1;s.rank===4&&(l=!0,c=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),o??=[1,1,1],I(c.rank===5,(function(){return`Error in avgPool3d: x must be rank 5 but got rank `+c.rank+`.`})),I(a===`NDHWC`,(function(){return`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of `+a})),I(Ai(n,o),(function(){return`Error in avgPool3d: Either strides or dilations must be 1. Got strides `+n+` and dilations '`+o+`'`})),i!=null&&I(se(r),(function(){return`Error in avgPool3d: pad must be an integer when using, dimRoundingMode `+i+` but got pad `+r+`.`}));var u=xi(c.shape,t,n,o,r,i,a),d=B.runKernelFunc((function(e){return e.avgPool3d(c,u)}),{x:c},(function(e){return{x:function(){return function(e,t,n,r,i,a,o){var s=W(e,`dy`,`avgPool3dBackprop`),c=W(t,`input`,`avgPool3dBackprop`),l=s,u=c,d=!1;c.rank===4&&(d=!0,l=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]),u=c.as5D(1,c.shape[0],c.shape[1],c.shape[2],c.shape[3])),I(l.rank===5,(function(){return`Error in avgPool3dBackprop: dy must be rank 5 but got rank `+l.rank+`.`})),I(u.rank===5,(function(){return`Error in avgPool3dBackprop: input must be rank 5 but got rank `+u.rank+`.`})),i??=[1,1,1],I(Ai(r,i),(function(){return`Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides `+r+` and dilations '`+i+`'`})),o!=null&&I(se(a),(function(){return`Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode `+o+` but got pad `+a+`.`}));var f=xi(u.shape,n,r,i,a,o),p=B.runKernelFunc((function(e){return e.avgPool3dBackprop(l,u,f)}),{dy5D:l,input5D:u});return d?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}(e,c,t,n,o,r,i)}}}));return d=d.cast(c.dtype),l?d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]):d}}),du=G({slice_:function(e,t,n){var r,i,a=W(e,`x`,`slice`);if(a.rank===0)throw Error(`Slicing scalar is not possible`);(r=typeof t==`number`?[t].concat(Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(Array(a.rank-t.length).fill(0)):t.slice()).forEach((function(e){I(e!==-1,(function(){return`slice() does not support negative begin indexing.`}))})),i=(i=n==null?Array(a.rank).fill(-1):typeof n==`number`?[n].concat(Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(Array(a.rank-n.length).fill(-1)):n).map((function(e,t){return e>=0?e:(I(e===-1,(function(){return`Negative size values should be exactly -1 but got `+e+` for the slice() size at index `+t+`.`})),a.shape[t]-r[t])})),ii(a,r,i);var o=a.shape,s={begin:r,size:i};return B.runKernelFunc((function(e){return e.slice(a,r,i)}),{x:a},(function(e){for(var t=[],n=0;n<e.rank;n++)t.push([r[n],o[n]-r[n]-i[n]]);return{x:function(){return e.pad(t)}}}),`Slice`,s)}}),fu=G({slice1d_:function(e,t,n){var r=W(e,`x`,`slice1d`);return I(r.rank===1,(function(){return`slice1d expects a rank-1 tensor, but got a rank-`+r.rank+` tensor`})),du(r,[t],[n])}}),pu=G({slice2d_:function(e,t,n){var r=W(e,`x`,`slice2d`);return I(r.rank===2,(function(){return`slice2d expects a rank-2 tensor, but got a rank-`+r.rank+` tensor`})),du(r,t,n)}}),mu=G({slice3d_:function(e,t,n){var r=W(e,`x`,`slice3d`);return I(r.rank===3,(function(){return`slice3d expects a rank-3 tensor, but got a rank-`+r.rank+` tensor`})),du(r,t,n)}}),hu=G({slice4d_:function(e,t,n){var r=W(e,`x`,`slice4d`);return I(r.rank===4,(function(){return`slice4d expects a rank-4 tensor, but got a rank-`+r.rank+` tensor`})),du(r,t,n)}});function gu(e,t,n,r,i){return t.rank<n.rank&&(t=t.reshape(kn(t.shape,r))),e.rank<n.rank&&(e=e.reshape(kn(e.shape,r))),{x:function(){var r=e.mul(n.equal(t).cast(e.dtype));return i==null?r:r.transpose(i)}}}var _u=G({all_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=W(e,`x`,`all`,`bool`),i=pe(t,r.shape),a=i,o=jn(a,r.rank);o!=null&&(r=r.transpose(o),a=Nn(a.length,r.rank));var s=B.runKernelFunc((function(e){return e.all(r,a)}),{$x:r});if(n){var c=kn(s.shape,i);return s.reshape(c)}return s}}),vu=G({any_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=W(e,`x`,`any`,`bool`),i=pe(t,r.shape),a=i,o=jn(a,r.rank);o!=null&&(r=r.transpose(o),a=Nn(a.length,r.rank));var s=B.runKernelFunc((function(e){return e.any(r,a)}),{$x:r});if(n){var c=kn(s.shape,i);return s.reshape(c)}return s}}),yu=G({argMax_:function(e,t){t===void 0&&(t=0);var n=W(e,`x`,`argMax`);t??=0;var r=pe(t,n.shape),i=jn(r,n.rank);i!=null&&(n=n.transpose(i),r=Nn(r.length,n.rank));var a={axis:r[0]},o=[n];return B.runKernelFunc((function(e,t){var i=e.argMax(n,r[0]);return t([n]),i}),{x:n},(function(e,t){var n=t[0];return{x:function(){return er(n)}}}),`ArgMax`,a,o)}}),bu=G({argMin_:function(e,t){t===void 0&&(t=0);var n=W(e,`x`,`argMin`);t??=0;var r=pe(t,n.shape),i=jn(r,n.rank);return i!=null&&(n=n.transpose(i),r=Nn(r.length,n.rank)),B.runKernelFunc((function(e,t){var i=e.argMin(n,r[0]);return t([n]),i}),{$x:n},(function(e,t){var n=t[0];return{$x:function(){return er(n)}}}))}}),xu=G({logSumExp_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=W(e,`x`,`logSumExp`),i=pe(t,r.shape),a=r.max(i,!0),o=r.sub(a).exp().sum(i).log(),s=a.reshape(o.shape).add(o);if(n){var c=kn(s.shape,i);return s.reshape(c)}return s}}),Su=G({max_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=W(e,`x`,`max`),i=r,a=pe(t,r.shape),o=a,s=jn(o,r.rank);s!=null&&(r=r.transpose(s),o=Nn(o.length,r.rank));var c=[r],l=B.runKernelFunc((function(e,t){var n=e.max(r,o);return t([i,n]),n}),{x:r},(function(e,t){return gu(e,t[1],t[0],a,s)}),`Max`,{axes:o},c,[!0]);if(n){var u=kn(l.shape,a);l=l.reshape(u)}return l}}),Cu=G({mean_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=W(e,`x`,`mean`),i=pe(t,r.shape),a=R(On(r.shape,i)[1]);return fi((function(e){var r=K(a);return{value:(r.dtype===e.dtype?e:e.cast(r.dtype)).div(r).sum(t,n),gradFunc:function(t){var n=e.shape.slice();return i.forEach((function(e){n[e]=1})),t.reshape(n).mul(Jn(e.shape,`float32`)).div(a)}}}))(r)}}),wu=G({min_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=W(e,`x`,`min`),i=r,a=pe(t,r.shape),o=a,s=jn(o,r.rank);s!=null&&(r=r.transpose(s),o=Nn(o.length,r.rank));var c=[r],l=B.runKernelFunc((function(e,t){var n=e.min(r,o);return t([i,n]),n}),{x:r},(function(e,t){return gu(e,t[1],t[0],a,s)}),`Min`,{axes:o},c,[!0]);if(n){var u=kn(l.shape,a);l=l.reshape(u)}return l}}),Tu=G({moments_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=pe(t,(e=W(e,`x`,`moments`)).shape),i=e.mean(r,n),a=i.shape;return n||(a=kn(i.shape,r)),{mean:i,variance:e.toFloat().sub(i.reshape(a)).square().mean(r,n)}}}),Eu=G({sum_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=W(e,`x`,`sum`);r.dtype===`bool`&&(r=r.toInt());var i=pe(t,r.shape);return fi((function(e){var t=jn(i,e.rank),r=i,a=e;t!=null&&(a=e.transpose(t),r=Nn(r.length,e.rank));var o=function(t){var n=e.shape.slice();return i.forEach((function(e){n[e]=1})),t.reshape(n).mul(Jn(e.shape,`float32`))},s={axes:r},c=B.runKernelFunc((function(e){return e.sum(a,r)}),{x:a},(function(e){return{x:function(){return o(e)}}}),`Sum`,s);if(n){var l=kn(c.shape,i);c=c.reshape(l)}return{value:c,gradFunc:o}}))(r)}}),Du=G({prod_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=W(e,`x`,`prod`);r.dtype===`bool`&&(r=r.toInt());var i=pe(t,r.shape),a=jn(i,r.rank),o=i,s=r;a!=null&&(s=r.transpose(a),o=Nn(o.length,r.rank));var c=B.runKernelFunc((function(e){return e.prod(s,o)}),{permutedX:s});if(n){var l=kn(c.shape,i);c=c.reshape(l)}return c}}),Ou=G({elu_:function(e){var t=W(e,`x`,`elu`);return B.runKernelFunc((function(e,n){var r=e.elu(t);return n([r]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){return B.runKernelFunc((function(t){return t.eluDer(e,n)}),{dy:e,y:n})}}}))}}),ku=G({leakyRelu_:function(e,t){t===void 0&&(t=.2);var n=W(e,`x`,`leakyRelu`);return ol(K(t).mul(n),n)}}),Au=G({prelu_:function(e,t){var n=W(e,`x`,`prelu`),r=W(t,`alpha`,`prelu`);return B.runKernelFunc((function(e,t){var i=e.prelu(n,r);return t([n,r]),i}),{x:n,alpha:r},(function(e,t){var n=t[0],r=t[1],i=n.greater(0);return{x:function(){return Xc(i,e,e.mul(r))},alpha:function(){var t=Xc(i,er(e),e.mul(n)),a=vi(r.shape,e.shape);return a.length>0&&(t=t.sum(a)),t.reshape(r.shape)}}}),`Prelu`)}}),ju=G({relu_:function(e){var t=W(e,`x`,`relu`);return t.dtype===`bool`?t.toInt():B.runKernelFunc((function(e,n){var r=e.relu(t);return n([t]),r}),{x:t},(function(e,t){var n=t[0];return{x:function(){return e.mulStrict(n.step().toFloat())}}}),`Relu`)}}),Mu=G({relu6_:function(e){var t=W(e,`x`,`relu6`);return t.dtype===`bool`?t.toInt():B.runKernelFunc((function(e,n){var r=e.relu6(t);return n([t]),r}),{x:t},(function(e,t){var n=t[0],r=n.lessEqual(6).mul(n.step());return{x:function(){return e.mulStrict(r.toFloat())}}}),`Relu6`)}}),Nu=G({selu_:function(e){var t=W(e,`x`,`selu`);return B.runKernelFunc((function(e,n){var r=e.selu(t);return n([t]),r}),{$x:t},(function(e,t){var n=t[0];return{$x:function(){var t=n.greater(K(0)),r=K(hs),i=K(gs);return Xc(t,e.mul(i),e.mul(r).mul(n.toFloat().exp()))}}}))}}),Pu=G({transpose_:function(e,t){var n=W(e,`x`,`transpose`);if(t??=n.shape.map((function(e,t){return t})).reverse(),I(n.rank===t.length,(function(){return`Error in transpose: rank of input `+n.rank+` must match length of perm `+t+`.`})),t.forEach((function(e){I(e>=0&&e<n.rank,(function(){return`All entries in 'perm' must be between 0 and `+(n.rank-1)+` but got `+t}))})),n.rank<=1)return n.clone();var r={perm:t};return B.runKernelFunc((function(e){return e.transpose(n,t)}),{x:n},(function(e){var n=Mn(t);return{x:function(){return e.transpose(n)}}}),`Transpose`,r)}}),Fu=G({localResponseNormalization_:function(e,t,n,r,i){t===void 0&&(t=5),n===void 0&&(n=1),r===void 0&&(r=1),i===void 0&&(i=.5);var a=W(e,`x`,`localResponseNormalization`);I(a.rank===4||a.rank===3,(function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+`.`})),I(se(t),(function(){return`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius `+t+`.`}));var o=a,s=!1;a.rank===3&&(s=!0,o=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var c=B.runKernelFunc((function(e,a){var s=e.localResponseNormalization4D(o,t,n,r,i);return a([o,s]),s}),{x4D:o},(function(e,a){var o=a[0],s=a[1];return{x4D:function(){return B.runKernelFunc((function(a){return a.LRNGrad(e,o,s,t,n,r,i)}),{})}}}));return s?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}}),Iu=G({norm_:function(e,t,n,r){t===void 0&&(t=`euclidean`),n===void 0&&(n=null),r===void 0&&(r=!1);var i=function e(t,n,r){if(r===void 0&&(r=null),t.rank===0)return t.abs();if(t.rank!==1&&r===null)return e(t.reshape([-1]),n,r);if(t.rank===1||typeof r==`number`||Array.isArray(r)&&r.length===1){if(n===1)return t.abs().sum(r);if(n===1/0)return t.abs().max(r);if(n===-1/0)return t.abs().min(r);if(n===`euclidean`||n===2)return t.abs().pow(K(2,`int32`)).sum(r).sqrt();throw Error(`Error in norm: invalid ord value: `+n)}if(Array.isArray(r)&&r.length===2){if(n===1)return t.abs().sum(r[0]).max(r[1]-1);if(n===1/0)return t.abs().sum(r[1]).max(r[0]);if(n===-1/0)return t.abs().sum(r[1]).min(r[0]);if(n===`fro`||n===`euclidean`)return t.square().sum(r).sqrt();throw Error(`Error in norm: invalid ord value: `+n)}throw Error(`Error in norm: invalid axis: `+r)}(e=W(e,`x`,`norm`),t,n),a=i.shape;if(r){var o=pe(n,e.shape);a=kn(i.shape,o)}return i.reshape(a)}}),Lu=G({basicLSTMCell_:function(e,t,n,r,i,a){var o=W(e,`forgetBias`,`basicLSTMCell`),s=W(t,`lstmKernel`,`basicLSTMCell`),c=W(n,`lstmBias`,`basicLSTMCell`),l=W(r,`data`,`basicLSTMCell`),u=W(i,`c`,`basicLSTMCell`),d=W(a,`h`,`basicLSTMCell`),f=l.concat(d,1).matMul(s).add(c),p=f.shape[0],m=f.shape[1]/4,h=[p,m],g=f.slice([0,0],h),_=f.slice([0,m],h),v=f.slice([0,2*m],h),y=f.slice([0,3*m],h),b=g.sigmoid().mulStrict(_.tanh()).addStrict(u.mulStrict(o.add(v).sigmoid()));return[b,b.tanh().mulStrict(y.sigmoid())]}}),Ru=G({multiRNNCell_:function(e,t,n,r){for(var i=W(t,`data`,`multiRNNCell`),a=Tn(n,`c`,`multiRNNCell`),o=Tn(r,`h`,`multiRNNCell`),s=i,c=[],l=0;l<e.length;l++){var u=e[l](s,a[l],o[l]);c.push(u[0]),c.push(u[1]),s=u[1]}var d=[],f=[];for(l=0;l<c.length;l+=2)d.push(c[l]),f.push(c[l+1]);return[d,f]}}),zu=G({movingAverage_:function(e,t,n,r,i){i===void 0&&(i=!0);var a=W(e,`v`,`movingAverage`),o=W(t,`x`,`movingAverage`),s=W(n,`decay`,`movingAverage`);lt(a,o),I(oe(a.shape,o.shape),(function(){return`Shape mismatch in v and x`}));var c=K(1),l=c.sub(s),u=o.sub(a).mul(l);if(i){I(r!=null,(function(){return`When using zeroDebias: true, step is required.`}));var d=W(r,`step`,`movingAverage`);u=u.div(c.sub(ml(s,d)))}return a.add(u)}}),Bu=G({stridedSlice_:function(e,t,n,r,i,a,o,s,c){if(i===void 0&&(i=0),a===void 0&&(a=0),o===void 0&&(o=0),s===void 0&&(s=0),c===void 0&&(c=0),r??=Array(t.length),o!==0)throw Error(`ellipsis mask is not yet supported`);var l=W(e,`x`,`stridedSlice`),u=ai(s),d=l.shape.slice();u.forEach((function(e){t[e]=0,n[e]=1,d.splice(e,0,1)})),l=l.reshape(d);for(var f=0;f<l.rank;f++)t[f]=si(i,t,r,l.shape,f),n[f]=ci(a,n,r,l.shape,f),r[f]=r[f]||1;var p=ai(c);p.forEach((function(e){n[e]=t[e]+1,r[e]=1}));var m=oi(t,n,r),h=m.filter((function(e,t){return p.indexOf(t)===-1}));return r.every((function(e){return e===1}))?du(l,t,m).reshape(h):B.runKernelFunc((function(e){return e.stridedSlice(l,t,n,r)}),{$x:l}).reshape(h)}}),Vu=G({topk_:function(e,t,n){t===void 0&&(t=1),n===void 0&&(n=!0);var r=W(e,`x`,`topk`);if(r.rank===0)throw Error(`topk() expects the input to be of rank 1 or higher`);var i=r.shape[r.shape.length-1];if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (`+i+`) but got `+t);var a=B.runKernelFunc((function(e){return e.topk(r,t,n)}),{$x:r});return{values:a[0],indices:a[1]}}}),Hu=G({scatterND_:function(e,t,n){var r=W(e,`indices`,`scatterND`,`int32`),i=W(t,`updates`,`scatterND`);return ni(i,r,n),B.runKernelFunc((function(e){return e.scatterND(r,i,n)}),{indices:r,updates:i},null,`ScatterNd`,{shape:n})}}),Uu=G({fft_:function(e){I(e.dtype===`complex64`,(function(){return`The dtype for tf.spectral.fft() must be complex64 but got `+e.dtype+`.`}));var t=e.shape[e.shape.length-1],n=e.size/t,r=e.as2D(n,t);return B.runKernelFunc((function(e){return e.fft(r)}),{input:e}).reshape(e.shape)}}),Wu=G({ifft_:function(e){I(e.dtype===`complex64`,(function(){return`The dtype for tf.spectral.ifft() must be complex64 but got `+e.dtype+`.`}));var t=e.shape[e.shape.length-1],n=e.size/t,r=e.as2D(n,t);return B.runKernelFunc((function(e){return e.ifft(r)}),{input:e}).reshape(e.shape)}}),Gu=G({rfft_:function(e,t){I(e.dtype===`float32`,(function(){return`The dtype for rfft() must be real value but got `+e.dtype}));var n,r=e.shape[e.shape.length-1],i=e.size/r;if(t!=null&&t<r){var a=e.shape.map((function(e){return 0})),o=e.shape.map((function(e){return e}));o[e.shape.length-1]=t,n=e.slice(a,o),r=t}else if(t!=null&&t>r){var s=e.shape.map((function(e){return e}));s[e.shape.length-1]=t-r,n=e.concat(Yn(s),e.shape.length-1),r=t}else n=e;var c=n.zerosLike(),l=Uu(In(n,c).as2D(i,r)),u=Math.floor(r/2)+1,d=Ln(l),f=Rn(l),p=d.split([u,r-u],d.shape.length-1),m=f.split([u,r-u],f.shape.length-1),h=n.shape.slice();return h[n.shape.length-1]=u,In(p[0],m[0]).reshape(h)}}),Ku=G({irfft_:function(e){var t=e.shape[e.shape.length-1],n=e.size/t;if(t<=2){var r=e.as2D(n,t),i=Wu(r);return Ln(i)}var a=[n,2*(t-1)],o=Ln(e).as2D(n,t),s=Rn(e).as2D(n,t),c=o.slice([0,1],[n,t-2]).reverse(1),l=s.slice([0,1],[n,t-2]).reverse(1).mul(K(-1));return r=In(o.concat(c,1),s.concat(l,1)).as2D(a[0],a[1]),i=Wu(r),Ln(i)}}),qu=Object.freeze({fft:Uu,ifft:Wu,rfft:Gu,irfft:Ku}),Ju=G({sparseToDense_:function(e,t,n,r){r===void 0&&(r=0);var i=W(e,`sparseIndices`,`sparseToDense`,`int32`),a=W(t,`sparseValues`,`sparseToDense`),o=W(r,`defaultValue`,`sparseToDense`,a.dtype);return function(e,t,n,r){if(e.dtype!==`int32`)throw Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was `+e.dtype+`.`);if(e.rank>2)throw Error(`sparseIndices should be a scalar, vector, or matrix, but got shape `+e.shape+`.`);var i=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(n.length!==a)throw Error(`outputShape has incorrect number of elements:, `+n.length+`, should be: `+a+`.`);var o=t.size;if(t.rank!==0&&(t.rank!==1||o!==i))throw Error(`sparseValues has incorrect shape `+t.shape+`, should be [] or [`+i+`]`);if(t.dtype!==r.dtype)throw Error(`sparseValues.dtype must match defaultValues.dtype`)}(i,a,n,o),B.runKernelFunc((function(e){return e.sparseToDense(i,a,n,o)}),{$sparseIndices:i,$sparseValues:a,$defaultValue:o})}}),Yu=G({gatherND_:function(e,t){var n=W(t,`indices`,`gatherND`,`int32`),r=W(e,`x`,`gatherND`);return B.runKernelFunc((function(e){return e.gatherND(r,n)}),{x:r,indices:n},null,`GatherNd`)}}),Xu=G({diag_:function(e){var t=W(e,`x`,`diag`).flatten(),n=e.shape.concat(e.shape);return B.runKernelFunc((function(e){return e.diag(t)}),{$x:t}).reshape(n)}}),Zu=G({dropout_:function(e,t,n,r){var i=W(e,`x`,`dropout`);if(I(i.dtype===`float32`,(function(){return`x has to be a floating point tensor since it's going to be scaled, but got a `+i.dtype+` tensor instead.`})),I(t>=0&&t<1,(function(){return`rate must be a float in the range [0, 1), but got `+t+`.`})),t===0)return e instanceof Qe?i.clone():i;var a=function(e,t){if(t==null)return e.shape.slice();if(oe(e.shape,t))return t;if(e.shape.length===t.length){for(var n=[],r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}(i,n),o=1-t,s=Rr(a,0,1,`float32`,r).add(o).floor().div(o);return i.mul(s)}});function Qu(e,t,n){for(var r=1-e%2,i=new Float32Array(e),a=0;a<e;++a){var o=2*Math.PI*a/(e+r-1);i[a]=t-n*Math.cos(o)}return Vn(i,`float32`)}var $u=G({hannWindow_:function(e){return Qu(e,.5,.5)}}),ed=G({hammingWindow_:function(e){return Qu(e,.54,.46)}}),td=G({frame_:function(e,t,n,r,i){r===void 0&&(r=!1),i===void 0&&(i=0);for(var a=0,o=[];a+t<=e.size;)o.push(du(e,a,t)),a+=n;if(r)for(;a<e.size;){var s=a+t-e.size,c=tr([du(e,a,t-s),Xn([s],i)]);o.push(c),a+=n}return o.length===0?Hn([],[0,t]):tr(o).as2D(o.length,t)}}),nd=G({stft_:function(e,t,n,r,i){var a;i===void 0&&(i=$u),r??=(a=t,Math.floor(2**Math.ceil(Math.log(a)/Math.log(2))));for(var o=td(e,t,n),s=fl(o,i(t)),c=[],l=0;l<o.shape[0];l++)c.push(Gu(s.slice([l,0],[1,t]),r));return tr(c)}}),rd=Object.freeze({hannWindow:$u,hammingWindow:ed,frame:td,stft:nd}),id,ad=function(e,t,n){return n===void 0&&(n=1),S(this,void 0,void 0,(function(){var r,i,a,o,s,c,l,u,d,f,p,m,h,g;return C(this,(function(_){switch(_.label){case 0:return r=W(e,`predictions`,`inTopK`),i=W(t,`targets`,`inTopK`),I(r.rank>1,(function(){return`inTopK() expects the predictions to be of rank 2 or higher, but got `+r.rank})),I(r.rank-1===i.rank,(function(){return`predictions rank should be 1 larger than targets rank, but got predictions rank `+r.rank+` and targets rank `+i.rank})),L(r.shape.slice(0,r.shape.length-1),i.shape,`predictions's shape should be align with the targets' shape, except the last dimension.`),a=r.shape[r.shape.length-1],I(n>0&&n<=a,(function(){return`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (`+a+`), but got `+n})),[4,r.data()];case 1:return o=_.sent(),[4,i.data()];case 2:for(s=_.sent(),c=[o.length/a,a],u=c[1],d=he(`bool`,l=c[0]),f=0;f<l;f++){for(p=f*u,m=o.subarray(p,p+u),h=[],g=0;g<m.length;g++)h.push({value:m[g],index:g});for(h.sort((function(e,t){return t.value-e.value})),d[f]=0,g=0;g<n;g++)if(h[g].index===s[f]){d[f]=1;break}}return e!==r&&r.dispose(),t!==i&&i.dispose(),[2,zn(d,i.shape,`bool`)]}}))}))};(function(e){e[e.NONE=0]=`NONE`,e[e.MEAN=1]=`MEAN`,e[e.SUM=2]=`SUM`,e[e.SUM_BY_NONZERO_WEIGHTS=3]=`SUM_BY_NONZERO_WEIGHTS`})(id||={});var od=G({absoluteDifference_:function(e,t,n,r){r===void 0&&(r=id.SUM_BY_NONZERO_WEIGHTS);var i=W(e,`labels`,`absoluteDifference`),a=W(t,`predictions`,`absoluteDifference`),o=null;return n!=null&&(o=W(n,`weights`,`absoluteDifference`)),L(i.shape,a.shape,`Error in absoluteDifference: `),sd(i.sub(a).abs(),o,r)}}),sd=G({computeWeightedLoss_:function(e,t,n){n===void 0&&(n=id.SUM_BY_NONZERO_WEIGHTS);var r=W(e,`losses`,`computeWeightedLoss`),i=null;t!=null&&(i=W(t,`weights`,`computeWeightedLoss`));var a=i==null?r:r.mul(i);if(n===id.NONE)return a;if(n===id.SUM)return a.sum();if(n===id.MEAN){if(i==null)return a.mean();var o=r.size/i.size,s=a.sum().div(i.sum());return o>1?s.div(K(o)):s}if(n===id.SUM_BY_NONZERO_WEIGHTS){if(i==null)return a.sum().div(K(r.size));var c=i.mul(Jn(r.shape)).notEqual(K(0)).sum().toFloat();return a.sum().div(c)}throw Error(`Unknown reduction: `+n)}}),cd=G({cosineDistance_:function(e,t,n,r,i){i===void 0&&(i=id.SUM_BY_NONZERO_WEIGHTS);var a=W(e,`labels`,`cosineDistance`),o=W(t,`predictions`,`cosineDistance`),s=null;return r!=null&&(s=W(r,`weights`,`cosineDistance`)),L(a.shape,o.shape,`Error in cosineDistance: `),sd(K(1).sub(a.mul(o).sum(n,!0)),s,i)}}),ld=G({hingeLoss_:function(e,t,n,r){r===void 0&&(r=id.SUM_BY_NONZERO_WEIGHTS);var i=W(e,`labels`,`hingeLoss`),a=W(t,`predictions`,`hingeLoss`),o=null;n!=null&&(o=W(n,`weights`,`hingeLoss`)),L(i.shape,a.shape,`Error in hingeLoss: `);var s=K(1);return i=K(2).mul(i).sub(s),sd(s.sub(i.mul(a)).relu(),o,r)}}),ud=G({huberLoss_:function(e,t,n,r,i){r===void 0&&(r=1),i===void 0&&(i=id.SUM_BY_NONZERO_WEIGHTS);var a=W(e,`labels`,`huberLoss`),o=W(t,`predictions`,`huberLoss`),s=null;n!=null&&(s=W(n,`weights`,`huberLoss`)),L(a.shape,o.shape,`Error in huberLoss: `);var c=K(r),l=o.sub(a).abs(),u=cl(l,c),d=l.sub(u);return sd(K(.5).mul(u.square()).add(c.mul(d)),s,i)}}),dd=G({logLoss_:function(e,t,n,r,i){r===void 0&&(r=1e-7),i===void 0&&(i=id.SUM_BY_NONZERO_WEIGHTS);var a=W(e,`labels`,`logLoss`),o=W(t,`predictions`,`logLoss`),s=null;n!=null&&(s=W(n,`weights`,`logLoss`)),L(a.shape,o.shape,`Error in logLoss: `);var c=K(1),l=K(r);return sd(a.mul(o.add(l).log()).neg().sub(c.sub(a).mul(c.sub(o).add(l).log())),s,i)}}),fd=G({meanSquaredError_:function(e,t,n,r){r===void 0&&(r=id.SUM_BY_NONZERO_WEIGHTS);var i=W(e,`labels`,`meanSquaredError`),a=W(t,`predictions`,`meanSquaredError`),o=null;return n!=null&&(o=W(n,`weights`,`meanSquaredError`)),L(i.shape,a.shape,`Error in meanSquaredError: `),sd(i.squaredDifference(a),o,r)}}),pd=G({sigmoidCrossEntropy_:function(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=id.SUM_BY_NONZERO_WEIGHTS);var a=W(e,`multiClassLabels`,`sigmoidCrossEntropy`),o=W(t,`logits`,`sigmoidCrossEntropy`),s=null;if(n!=null&&(s=W(n,`weights`,`sigmoidCrossEntropy`)),L(a.shape,o.shape,`Error in sigmoidCrossEntropy: `),r>0){var c=K(r),l=K(1),u=K(.5);a=a.mul(l.sub(c)).add(u.mul(c))}return sd(function(e,t){var n=W(e,`labels`,`sigmoidCrossEntropyWithLogits`),r=W(t,`logits`,`sigmoidCrossEntropyWithLogits`);L(n.shape,r.shape,`Error in sigmoidCrossEntropyWithLogits: `);var i=r.relu(),a=r.mul(n),o=r.abs().neg().exp().log1p();return i.sub(a).add(o)}(a,o),s,i)}}),md=G({softmaxCrossEntropy_:function(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=id.SUM_BY_NONZERO_WEIGHTS);var a=W(e,`onehotLabels`,`softmaxCrossEntropy`),o=W(t,`logits`,`softmaxCrossEntropy`),s=null;if(n!=null&&(s=W(n,`weights`,`softmaxCrossEntropy`)),L(a.shape,o.shape,`Error in softmaxCrossEntropy: `),r>0){var c=K(r),l=K(1),u=K(a.shape[1]);a=a.mul(l.sub(c)).add(c.div(u))}return sd(function(e,t,n){if(n===void 0&&(n=-1),n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank `+t.rank+` and dim was `+n);return fi((function(e,t,r){var i=t.logSumExp([n],!0),a=t.toFloat().sub(i);return r([e,a]),{value:a.mul(e).neg().sum([n]),gradFunc:function(e,t){var r=t[0],i=t[1],a=kn(e.shape,[n]);return[e.reshape(a).mul(r.toFloat().sub(i.exp())),e.reshape(a).mul(i.exp().sub(r.toFloat()))]}}}))(e,t)}(a,o),s,i)}}),hd=Object.freeze({get Reduction(){return id},absoluteDifference:od,computeWeightedLoss:sd,cosineDistance:cd,hingeLoss:ld,huberLoss:ud,logLoss:dd,meanSquaredError:fd,sigmoidCrossEntropy:pd,softmaxCrossEntropy:md});function gd(e,t){return t===void 0&&(t=!1),B.tidy((function(){if(e.shape.length!==2)throw Error(`qr2d() requires a 2D Tensor, but got a `+e.shape.length+`D Tensor.`);for(var n=e.shape[0],r=e.shape[1],i=Dr(n),a=e.clone(),o=Hn([[1]],[1,1]),s=o.clone(),c=n>=r?r:n,l=function(e){var t,c=a,l=s,u=i;t=B.tidy((function(){var t=a.slice([e,e],[n-e,1]),c=t.norm(),l=a.slice([e,e],[1,1]),u=Hn([[-1]]).where(l.greater(0),Hn([[1]])),d=l.sub(u.mul(c)),f=t.div(d);s=f.shape[0]===1?o.clone():o.concat(f.slice([1,0],[f.shape[0]-1,f.shape[1]]),0);var p=u.matMul(d).div(c).neg(),m=a.slice([e,0],[n-e,r]),h=p.mul(s);if(e===0)a=m.sub(h.matMul(s.transpose().matMul(m)));else{var g=m.sub(h.matMul(s.transpose().matMul(m)));a=a.slice([0,0],[e,r]).concat(g,0)}var _=i.slice([0,e],[n,i.shape[1]-e]);if(e===0)i=_.sub(_.matMul(s).matMul(h.transpose()));else{var v=_.sub(_.matMul(s).matMul(h.transpose()));i=i.slice([0,0],[n,e]).concat(v,1)}return[s,a,i]})),s=t[0],a=t[1],i=t[2],bn([c,l,u])},u=0;u<c;++u)l(u);return!t&&n>r&&(i=i.slice([0,0],[n,r]),a=a.slice([0,0],[r,r])),[i,a]}))}var _d=G({bandPart_:function(e,t,n){if(t%1!=0)throw Error(`bandPart(): numLower must be an integer, got `+t+`.`);if(n%1!=0)throw Error(`bandPart(): numUpper must be an integer, got `+n+`.`);var r=W(e,`a`,`bandPart`);if(r.rank<2)throw Error(`bandPart(): Rank must be at least 2, got `+r.rank+`.`);var i=r.shape,a=r.shape.slice(-2),o=a[0],s=a[1];if(!(t<=o))throw Error(`bandPart(): numLower (`+t+`) must not be greater than the number of rows (`+o+`).`);if(!(n<=s))throw Error(`bandPart(): numUpper (`+n+`) must not be greater than the number of columns (`+s+`).`);t<0&&(t=o),n<0&&(n=s);var c=_l(Qn(0,o,1,`int32`).reshape([-1,1]),Qn(0,s,1,`int32`)),l=Kc(c.lessEqual(K(+t,`int32`)),c.greaterEqual(K(-n,`int32`))),u=Yn([o,s],r.dtype);return Hr(Gr(r.reshape([-1,o,s])).map((function(e){return Xc(l,e,u)}))).reshape(i)}}),vd=G({gramSchmidt_:function(e){var t;if(Array.isArray(e)){t=!1,I(e!=null&&e.length>0,(function(){return`Gram-Schmidt process: input must not be null, undefined, or empty`}));for(var n=e[0].shape[0],r=function(t){I(e[t].shape[0]===n,(function(){return`Gram-Schmidt: Non-unique lengths found in the input vectors: (`+e[t].shape[0]+` vs. `+n+`)`}))},i=1;i<e.length;++i)r(i)}else t=!0,e=or(e,e.shape[0],0).map((function(e){return Vr(e,[0])}));I(e.length<=e[0].shape[0],(function(){return`Gram-Schmidt: Number of vectors (`+e.length+`) exceeds number of dimensions (`+e[0].shape[0]+`).`}));var a=[],o=e,s=function(e){a.push(B.tidy((function(){var t=o[e];if(e>0)for(var n=0;n<e;++n){var r=Eu(a[n].mulStrict(t)).mul(a[n]);t=t.sub(r)}return t.div(Iu(t,`euclidean`))})))};for(i=0;i<e.length;++i)s(i);return t?Hr(a,0):a}}),yd=G({qr_:function(e,t){if(t===void 0&&(t=!1),e.rank<2)throw Error(`qr() requires input tensor to have a rank >= 2, but got rank `+e.rank);if(e.rank===2)return gd(e,t);var n=e.shape.slice(0,e.shape.length-2).reduce((function(e,t){return e*t})),r=Gr(e.reshape([n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),i=[],a=[];return r.forEach((function(e){var n=gd(e,t),r=n[0],o=n[1];i.push(r),a.push(o)})),[Hr(i,0).reshape(e.shape),Hr(a,0).reshape(e.shape)]}}),bd=Object.freeze({bandPart:_d,gramSchmidt:vd,qr:yd});function xd(e,t,n,r,i,a){r??=.5,i??=-1/0,a??=0;var o=e.shape[0];return n=Math.min(n,o),I(0<=r&&r<=1,(function(){return`iouThreshold must be in [0, 1], but was '`+r+`'`})),I(e.rank===2,(function(){return`boxes must be a 2D tensor, but was of rank '`+e.rank+`'`})),I(e.shape[1]===4,(function(){return`boxes must have 4 columns, but 2nd dimension was `+e.shape[1]})),I(t.rank===1,(function(){return`scores must be a 1D tensor`})),I(t.shape[0]===o,(function(){return`scores has incompatible shape with boxes. Expected `+o+`, but was `+t.shape[0]})),I(0<=a&&a<=1,(function(){return`softNmsSigma must be in [0, 1], but was '`+a+`'`})),{maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a}}var Sd=G({resizeBilinear_:function(e,t,n){n===void 0&&(n=!1);var r=W(e,`images`,`resizeBilinear`);I(r.rank===3||r.rank===4,(function(){return`Error in resizeBilinear: x must be rank 3 or 4, but got rank `+r.rank+`.`})),I(t.length===2,(function(){return`Error in resizeBilinear: new shape must 2D, but got shape `+t+`.`}));var i=r,a=!1;r.rank===3&&(a=!0,i=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var o=t[0],s=t[1],c=B.runKernelFunc((function(e,t){return t([i]),e.resizeBilinear(i,o,s,n)}),{x:i},(function(e,t){return{x:function(){return B.runKernelFunc((function(r){return r.resizeBilinearBackprop(e,t[0],n)}),{})}}}),`ResizeBilinear`,{alignCorners:n,newHeight:o,newWidth:s});return a?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}}),Cd=G({resizeNearestNeighbor_:function(e,t,n){n===void 0&&(n=!1);var r=W(e,`images`,`resizeNearestNeighbor`);I(r.rank===3||r.rank===4,(function(){return`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank `+r.rank+`.`})),I(t.length===2,(function(){return`Error in resizeNearestNeighbor: new shape must 2D, but got shape `+t+`.`})),I(r.dtype===`float32`||r.dtype===`int32`,(function(){return"`images` must have `int32` or `float32` as dtype"}));var i=r,a=!1;r.rank===3&&(a=!0,i=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var o=t[0],s=t[1],c=B.runKernelFunc((function(e,t){return t([i]),e.resizeNearestNeighbor(i,o,s,n)}),{batchImages:i},(function(e,t){return{batchImages:function(){return B.runKernelFunc((function(r){return r.resizeNearestNeighborBackprop(e,t[0],n)}),{})}}}));return a?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}}),wd=G({nonMaxSuppression_:function(e,t,n,r,i){r===void 0&&(r=.5),i===void 0&&(i=-1/0);var a=W(e,`boxes`,`nonMaxSuppression`),o=W(t,`scores`,`nonMaxSuppression`),s=xd(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;var c={maxOutputSize:n,iouThreshold:r,scoreThreshold:i};return B.runKernelFunc((function(e){return e.nonMaxSuppression(a,o,n,r,i)}),{boxes:a,scores:o},null,`NonMaxSuppressionV3`,c)}}),Td=function(e,t,n,r,i){return r===void 0&&(r=.5),i===void 0&&(i=-1/0),S(this,void 0,void 0,(function(){var a,o,s,c,l,u,d;return C(this,(function(f){switch(f.label){case 0:return a=W(e,`boxes`,`nonMaxSuppressionAsync`),o=W(t,`scores`,`nonMaxSuppressionAsync`),s=xd(a,o,n,r,i),n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold,[4,Promise.all([a.data(),o.data()])];case 1:return c=f.sent(),l=c[0],u=c[1],d=Vi(l,u,n,r,i),a!==e&&a.dispose(),o!==t&&o.dispose(),[2,d]}}))}))},Ed=G({nonMaxSuppressionWithScore_:function(e,t,n,r,i,a){r===void 0&&(r=.5),i===void 0&&(i=-1/0),a===void 0&&(a=0);var o=W(e,`boxes`,`nonMaxSuppression`),s=W(t,`scores`,`nonMaxSuppression`),c=xd(o,s,n,r,i,a),l={maxOutputSize:n=c.maxOutputSize,iouThreshold:r=c.iouThreshold,scoreThreshold:i=c.scoreThreshold,softNmsSigma:a=c.softNmsSigma},u=B.runKernel(`NonMaxSuppressionV5`,{boxes:o,scores:s},l);return{selectedIndices:u[0],selectedScores:u[1]}}}),Dd=function(e,t,n,r,i,a){return r===void 0&&(r=.5),i===void 0&&(i=-1/0),a===void 0&&(a=0),S(this,void 0,void 0,(function(){var o,s,c,l,u,d,f;return C(this,(function(p){switch(p.label){case 0:return o=W(e,`boxes`,`nonMaxSuppressionAsync`),s=W(t,`scores`,`nonMaxSuppressionAsync`),c=xd(o,s,n,r,i,a),n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma,[4,Promise.all([o.data(),s.data()])];case 1:return l=p.sent(),u=l[0],d=l[1],f=Hi(u,d,n,r,i,a),o!==e&&o.dispose(),s!==t&&s.dispose(),[2,f]}}))}))},Od=G({cropAndResize_:function(e,t,n,r,i,a){var o=W(e,`image`,`cropAndResize`),s=W(t,`boxes`,`cropAndResize`,`float32`),c=W(n,`boxInd`,`cropAndResize`,`int32`);i||=`bilinear`,a||=0;var l=s.shape[0];return I(o.rank===4,(function(){return`Error in cropAndResize: image must be rank 4,but got rank `+o.rank+`.`})),I(s.rank===2&&s.shape[1]===4,(function(){return`Error in cropAndResize: boxes must be have size [`+l+`,4] but had shape `+s.shape+`.`})),I(c.rank===1&&c.shape[0]===l,(function(){return`Error in cropAndResize: boxInd must be have size [`+l+`] but had shape `+s.shape+`.`})),I(r.length===2,(function(){return`Error in cropAndResize: cropSize must be of length 2, but got length `+r.length+`.`})),I(r[0]>=1&&r[1]>=1,(function(){return`cropSize must be atleast [1,1], but was `+r})),I(i===`bilinear`||i===`nearest`,(function(){return`method must be bilinear or nearest, but was `+i})),B.runKernelFunc((function(e,t){return e.cropAndResize(o,s,c,r,i,a)}),{images:o,boxes:s,boxInd:c},null,`CropAndResize`,{method:i,extrapolationValue:a,cropSize:r})}}),kd=Object.freeze({resizeBilinear:Sd,resizeNearestNeighbor:Cd,nonMaxSuppression:wd,nonMaxSuppressionAsync:Td,nonMaxSuppressionWithScore:Ed,nonMaxSuppressionWithScoreAsync:Dd,cropAndResize:Od}),Ad=function(e,t){return!(e>0)||t===`linear`},jd=function(e,t,n){if(n==null||n===`linear`)return e;if(n===`relu`)return e.mul(t.step());throw Error(`Gradient for activation `+n+` has not been implemented yet.`)},Md=function(e,t){var n=t,r=vi(e.shape,t.shape);return r.length>0&&(n=n.sum(r)),n.reshape(e.shape)},Nd=function(e,t,n){if(t===`linear`)return e;if(t===`relu`)return ju(e);if(t===`elu`)return Ou(e);if(t===`relu6`)return Mu(e);if(t===`prelu`)return Au(e,n);throw Error(`Unknown fused activation `+t+`.`)},Pd=G({fusedMatMul_:function(e){var t,n=e.a,r=e.b,i=e.transposeA,a=i!==void 0&&i,o=e.transposeB,s=o!==void 0&&o,c=e.bias,l=e.activation,u=l===void 0?`linear`:l,d=e.preluActivationWeights;if(!1===Ad(B.state.gradientDepth,u)){var f=Xl(n,r,a,s);return c!=null&&(f=Qc(f,c)),Nd(f,u,d)}var p=W(n,`a`,`fused matMul`),m=W(r,`b`,`fused matMul`);t=ct(p,m),p=t[0],m=t[1];var h=a?p.shape[p.rank-2]:p.shape[p.rank-1],g=s?m.shape[m.rank-1]:m.shape[m.rank-2],_=a?p.shape[p.rank-1]:p.shape[p.rank-2],v=s?m.shape[m.rank-2]:m.shape[m.rank-1],y=p.shape.slice(0,-2),b=m.shape.slice(0,-2),x=R(y),S=R(b);I(p.rank>=2&&m.rank>=2&&p.rank===m.rank,(function(){return`Error in fused matMul: inputs must have the same rank of at least 2, got ranks `+p.rank+` and `+m.rank+`.`})),I(oe(y,b),(function(){return`Error in fused matMul: outer dimensions (`+y+`) and (`+b+`) of Tensors with shapes `+p.shape+` and `+m.shape+` must match.`})),I(h===g,(function(){return`Error in fused matMul: inner shapes (`+h+`) and (`+g+`) of Tensors with shapes `+p.shape+` and `+m.shape+` and transposeA=`+a+` and transposeB=`+s+` must match.`}));var C,w,T=p.shape.slice(0,-2).concat([_,v]),E=a?p.as3D(x,h,_):p.as3D(x,_,h),D=s?m.as3D(S,v,g):m.as3D(S,g,v);c!=null&&yi(T,(C=ct(C=W(c,`bias`,`fused matMul`),p)[0]).shape),d!=null&&(w=W(d,`prelu weights`,`fused matMul`));var O={a:E,b:D};c!=null&&(O.bias=C),d!=null&&(O.preluActivationWeights=w);var k=[E,D];return B.runKernelFunc((function(e,t){var n=e.fusedBatchMatMul({a:E,b:D,transposeA:a,transposeB:s,bias:C,activation:u,preluActivationWeights:w});return t([E,D,n]),n}),O,(function(e,t){var n=t[0],r=t[1],i=t[2],o=jd(e,i,u),l={};return c!=null&&(l={bias:function(){return Md(C,o)}}),Object.assign(a||s?!a&&s?{a:function(){return o.matMul(r,!1,!1)},b:function(){return o.matMul(n,!0,!1)}}:a&&!s?{a:function(){return r.matMul(o,!1,!0)},b:function(){return n.matMul(o,!1,!1)}}:{a:function(){return r.matMul(o,!0,!0)},b:function(){return o.matMul(n,!0,!0)}}:{a:function(){return o.matMul(r,!1,!0)},b:function(){return n.matMul(o,!0,!1)}},l)}),`_FusedMatMul`,{transposeA:a,transposeB:s,activation:u},k,[!0]).reshape(T)}}),Fd=G({fusedConv2d_:function(e){var t=e.x,n=e.filter,r=e.strides,i=e.pad,a=e.dataFormat,o=a===void 0?`NHWC`:a,s=e.dilations,c=s===void 0?[1,1]:s,l=e.dimRoundingMode,u=e.bias,d=e.activation,f=d===void 0?`linear`:d,p=e.preluActivationWeights;if(f||=`linear`,!1===Ad(B.state.gradientDepth,f)){var m=Bl(t,n,r,i,o,c,l);return u!=null&&(m=Qc(m,u)),Nd(m,f,p)}var h=W(t,`x`,`conv2d`),g=W(n,`filter`,`conv2d`),_=h,v=!1;h.rank===3&&(v=!0,_=h.as4D(1,h.shape[0],h.shape[1],h.shape[2])),I(_.rank===4,(function(){return`Error in fused conv2d: input must be rank 4, but got rank `+_.rank+`.`})),I(g.rank===4,(function(){return`Error in fused conv2d: filter must be rank 4, but got rank `+g.rank+`.`})),l!=null&&I(se(i),(function(){return`Error in fused conv2d: pad must be an integer when using, dimRoundingMode `+l+` but got pad `+i+`.`})),I(_.shape[3]===g.shape[2],(function(){return`Error in conv2d: depth of input (`+_.shape[3]+`) must match input depth for filter `+g.shape[2]+`.`})),I(Ai(r,c),(function(){return`Error in conv2D: Either strides or dilations must be 1. Got strides `+r+` and dilations '`+c+`'`})),I(o===`NHWC`,(function(){return`Error in conv2d: got dataFormat of `+o+` but only NHWC is currently supported.`}));var y,b,x=Si(_.shape,g.shape,r,c,i,l);u!=null&&(y=ct(y=W(u,`bias`,`fused conv2d`),h)[0],yi(x.outShape,y.shape)),p!=null&&(b=W(p,`prelu weights`,`fused conv2d`));var S={x:_,filter:g};u!=null&&(S.bias=y),p!=null&&(S.preluActivationWeights=b);var C=[g,_],w=B.runKernelFunc((function(e,t){var n=e.fusedConv2d({input:_,filter:g,convInfo:x,bias:y,activation:f,preluActivationWeights:b});return t([g,_,n]),n}),S,(function(e,t){var n=t,a=n[0],o=n[1],s=n[2],l=jd(e,s,f);I(ki(c),(function(){return`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '`+c+`'`}));var d={};return u!=null&&(d={bias:function(){return Md(y,l)}}),Object.assign({x:function(){return Ul(o.shape,l,a,r,i)},filter:function(){return Hl(o,l,a.shape,r,i)}},d)}),`FusedConv2D`,{convInfo:x,activation:f},C,[!0]);return v?w.as3D(w.shape[1],w.shape[2],w.shape[3]):w}}),Id=G({fusedDepthwiseConv2d_:function(e){var t=e.x,n=e.filter,r=e.strides,i=e.pad,a=e.dataFormat,o=a===void 0?`NHWC`:a,s=e.dilations,c=s===void 0?[1,1]:s,l=e.dimRoundingMode,u=e.bias,d=e.activation,f=d===void 0?`linear`:d,p=e.preluActivationWeights;if(!1===Ad(B.state.gradientDepth,f)){var m=Wl(t,n,r,i,o,c,l);return u!=null&&(m=Qc(m,u)),Nd(m,f,p)}var h=W(t,`x`,`depthwiseConv2d`),g=W(n,`filter`,`depthwiseConv2d`),_=h,v=!1;h.rank===3&&(v=!0,_=h.as4D(1,h.shape[0],h.shape[1],h.shape[2])),I(_.rank===4,(function(){return`Error in fused depthwiseConv2d: input must be rank 4, but got rank `+_.rank+`.`})),I(g.rank===4,(function(){return`Error in fused depthwiseConv2d: filter must be rank 4, but got rank `+g.rank+`.`})),I(_.shape[3]===g.shape[2],(function(){return`Error in fused depthwiseConv2d: number of input channels (`+_.shape[3]+`) must match the inChannels dimension in filter `+g.shape[2]+`.`})),c??=[1,1],I(Ai(r,c),(function(){return`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides `+r+` and dilations '`+c+`'`})),l!=null&&I(se(i),(function(){return`Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode `+l+` but got pad `+i+`.`}));var y,b,x=Si(_.shape,g.shape,r,c,i,l,!0);u!=null&&(y=ct(y=W(u,`bias`,`fused conv2d`),h)[0],yi(x.outShape,y.shape)),p!=null&&(b=W(p,`prelu weights`,`fused depthwiseConv2d`));var S={x:_,filter:g};u!=null&&(S.bias=y),p!=null&&(S.preluActivationWeights=b);var C=[g,_],w=B.runKernelFunc((function(e,t){var n=e.fusedDepthwiseConv2D({input:_,filter:g,convInfo:x,bias:y,activation:f,preluActivationWeights:b});return t([g,_,n]),n}),S,(function(e,t){I(ki(c),(function(){return`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '`+c+`'`}));var n=t[0],r=t[1],i=t[2],a=jd(e,i,f),o={};return u!=null&&(o={bias:function(){return Md(y,a)}}),Object.assign({x:function(){return Gl(r.shape,a,n,x)},filter:function(){return Kl(r,a,n.shape,x)}},o)}),`FusedDepthwiseConv2D`,{convInfo:x,activation:f},C,[!0]);return v?w.as3D(w.shape[1],w.shape[2],w.shape[3]):w}}),Ld=Object.freeze({matMul:Pd,conv2d:Fd,depthwiseConv2d:Id}),Rd=Object.freeze({image:kd,linalg:bd,losses:hd,spectral:qu,fused:Ld,signal:rd,square:Ys,squaredDifference:Zs,conv1d:zl,conv2d:Bl,conv3d:Vl,depthwiseConv2d:Wl,separableConv2d:ql,conv2dTranspose:Jl,conv3dTranspose:Yl,op:G,batchNormalization2d:Rc,batchNormalization3d:zc,batchNormalization4d:Bc,batchNormalization:Vc,batchNorm:Hc,batchNorm2d:Uc,batchNorm3d:Wc,batchNorm4d:Gc,booleanMaskAsync:Fl,complex:In,real:Ln,imag:Rn,concat:tr,concat1d:nr,concat2d:rr,concat3d:ir,concat4d:ar,split:or,matMul:Xl,dot:Zl,outerProduct:Ql,reverse:$l,reverse1d:eu,reverse2d:tu,reverse3d:nu,reverse4d:ru,maxPool:ou,avgPool:su,pool:cu,maxPool3d:lu,avgPool3d:uu,slice:du,slice1d:fu,slice2d:pu,slice3d:mu,slice4d:hu,abs:Qs,acos:$s,acosh:ec,asin:tc,asinh:nc,atan:rc,atanh:ic,ceil:ac,clipByValue:oc,cos:sc,cosh:cc,erf:lc,exp:uc,expm1:dc,floor:fc,log:pc,log1p:mc,logSigmoid:hc,neg:gc,reciprocal:_c,round:vc,rsqrt:yc,sigmoid:bc,sign:xc,isNaN:Sc,isInf:Cc,isFinite:wc,sin:Tc,sinh:Ec,softplus:Dc,sqrt:Oc,step:kc,tan:Ac,tanh:jc,all:_u,any:vu,argMax:yu,argMin:bu,logSumExp:xu,max:Su,mean:Cu,min:wu,moments:Tu,sum:Eu,prod:Du,equal:yl,equalStrict:bl,greater:xl,greaterEqual:Sl,greaterEqualStrict:Cl,greaterStrict:wl,less:Tl,lessEqual:El,lessEqualStrict:Dl,lessStrict:Ol,notEqual:kl,notEqualStrict:Al,add:Qc,addN:$c,addStrict:el,atan2:tl,div:nl,divNoNan:rl,divStrict:il,floorDiv:al,maximum:ol,maximumStrict:sl,minimum:cl,minimumStrict:ll,mod:ul,modStrict:dl,mul:fl,mulStrict:pl,pow:ml,powStrict:hl,squaredDifferenceStrict:gl,sub:_l,subStrict:vl,elu:Ou,leakyRelu:ku,prelu:Au,relu:ju,relu6:Mu,selu:Nu,logicalAnd:Kc,logicalNot:qc,logicalOr:Jc,logicalXor:Yc,where:Xc,whereAsync:Zc,buffer:q,print:yr,batchToSpaceND:br,broadcastTo:xr,cast:Sr,clone:Cr,cumsum:wr,depthToSpace:Tr,expandDims:Er,eye:Dr,multinomial:Or,oneHot:kr,pad:Ar,pad1d:jr,pad2d:Mr,pad3d:Nr,pad4d:Pr,rand:Fr,randomNormal:Ir,randomGamma:Lr,randomUniform:Rr,reshape:zr,spaceToBatchND:Br,squeeze:Vr,stack:Hr,tile:Ur,truncatedNormal:Wr,unstack:Gr,setdiff1dAsync:Kr,fill:Xn,linspace:Zn,ones:Jn,range:Qn,scalar:K,tensor:zn,tensor1d:Vn,tensor2d:Hn,tensor3d:Un,tensor4d:Wn,tensor5d:Gn,tensor6d:Kn,variable:qn,zeros:Yn,onesLike:$n,zerosLike:er,transpose:Pu,softmax:pi,logSoftmax:mi,localResponseNormalization:Fu,norm:Iu,gather:Nl,unsortedSegmentSum:Pl,basicLSTMCell:Lu,multiRNNCell:Ru,movingAverage:zu,stridedSlice:Bu,topk:Vu,scatterND:Hu,fft:Uu,ifft:Wu,rfft:Gu,irfft:Ku,sparseToDense:Ju,gatherND:Yu,diag:Xu,dropout:Zu,hannWindow:$u,hammingWindow:ed,frame:td,stft:nd,inTopKAsync:ad});function Y(e,t){Array.isArray(e)||(e=[e]),e.forEach((function(e){e!=null&&I(e.dtype!==`complex64`,(function(){return t+` does not support complex64 tensors.`}))}))}function zd(e,t,n,r){if(n===`linear`)return e.linear(t);if(n===`relu`)return e.relu(t);if(n===`elu`)return e.elu(t);if(n===`relu6`)return e.relu6(t);if(n===`prelu`)return e.prelu(t,r);throw Error(`Activation `+n+` has not been implemented for the CPU backend.`)}var Bd=function(e){function t(){var t=e.call(this)||this;return t.blockSize=48,t.firstUse=!0,t.data=new hi(t,B),t}return x(t,e),t.prototype.write=function(e,t,n){this.firstUse&&(this.firstUse=!1,E().get(`IS_NODE`)&&Sn(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var r={};return this.data.set(r,{values:e,dtype:n}),r},t.prototype.move=function(e,t,n,r){this.data.set(e,{values:t,dtype:r})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return S(this,void 0,void 0,(function(){return C(this,(function(t){return[2,this.readSync(e)]}))}))},t.prototype.readSync=function(e){var t=this.data.get(e),n=t.dtype,r=t.complexTensors;return n===`complex64`?Fi(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var t=this.readSync(e.dataId),n=t;if(e.dtype===`string`)try{n=t.map((function(e){return Le(e)}))}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return q(e.shape,e.dtype,n)},t.prototype.makeOutput=function(e,t,n){var r=this.write(e,t,n);return B.makeTensorFromDataId(r,t,n,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var t=this.data.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return S(this,void 0,void 0,(function(){var t;return C(this,(function(n){return t=Pe(),e(),[2,{kernelMs:Pe()-t}]}))}))},t.prototype.memory=function(){return{unreliable:!0,reasons:[`The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.`]}},t.prototype.complex=function(e,t){var n=this.makeOutput(null,e.shape,`complex64`);return this.data.get(n.dataId).complexTensors={real:B.keep(e.clone()),imag:B.keep(t.clone())},n},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,t,n){if(Y(e,`slice`),li(e.shape,t,n)){var r=ui(t,e.strides),i=R(n);return zn(this.readSync(e.dataId).subarray(r,r+i),n,e.dtype)}for(var a=q(n,e.dtype),o=this.bufferSync(e),s=0;s<a.size;++s){var c=a.indexToLoc(s).map((function(e,n){return e+t[n]}));a.values[s]=o.get.apply(o,c)}return a.toTensor()},t.prototype.stridedSlice=function(e,t,n,r){Y(e,`stridedSlice`);var i=oi(t,n,r);if(i.some((function(e){return e===0})))return zn([],i);for(var a=q(i,e.dtype),o=this.bufferSync(e),s=0;s<a.size;s++){for(var c=a.indexToLoc(s),l=Array(c.length),u=0;u<l.length;u++)l[u]=c[u]*r[u]+t[u];a.set.apply(a,[o.get.apply(o,l)].concat(c))}return a.toTensor()},t.prototype.diag=function(e){for(var t=this.readSync(e.dataId),n=q([e.size,e.size],e.dtype),r=n.values,i=0;i<t.length;i++)r[i*e.size+i]=t[i];return n.toTensor()},t.prototype.unstack=function(e,t){for(var n=e.shape[t],r=Array(e.rank-1),i=0,a=0;a<e.rank;a++)a!==t&&(r[i++]=e.shape[a]);var o=Array(e.rank).fill(0),s=e.shape.slice();s[t]=1;var c=Array(n);for(a=0;a<c.length;a++)o[t]=a,c[a]=this.slice(e,o,s).reshape(r);return c},t.prototype.reverse=function(e,t){Y(e,`reverse`);for(var n=q(e.shape,e.dtype),r=this.bufferSync(e),i=function(i){var a=n.indexToLoc(i),o=a.slice();t.forEach((function(t){return o[t]=e.shape[t]-1-o[t]})),n.set.apply(n,[r.get.apply(r,o)].concat(a))},a=0;a<n.size;a++)i(a);return n.toTensor()},t.prototype.concat=function(e,t){var n=this;if(e[0].dtype===`complex64`){var r=e.map((function(e){return Ln(e)})),i=e.map((function(e){return Rn(e)}));return In(this.concat(r,t),this.concat(i,t))}var a=e.map((function(e){var n=R(e.shape.slice(t));return e.as2D(-1,n)})),o=Fn(a.map((function(e){return e.shape})),1),s=q(o,e[0].dtype).values;if(a[0].shape[0]===1){var c=0;a.forEach((function(e){s.set(n.readSync(e.dataId),c),c+=e.size}))}else{var l=0;a.forEach((function(e){for(var t=n.readSync(e.dataId),r=0,i=0;i<e.shape[0];++i)for(var a=i*o[1]+l,c=0;c<e.shape[1];++c)s[a+c]=t[r++];l+=e.shape[1]}))}return zn(s,Fn(e.map((function(e){return e.shape})),t),e[0].dtype)},t.prototype.neg=function(e){return Y(e,`neg`),this.multiply(K(-1),e)},t.prototype.add=function(e,t){return e.dtype===`complex64`||t.dtype===`complex64`?this.broadcastedBinaryComplexOp(e.cast(`complex64`),t.cast(`complex64`),(function(e,t,n,r){return{real:e+n,imag:t+r}})):this.broadcastedBinaryOp(e,t,ot(e.dtype,t.dtype),(function(e,t){return e+t}))},t.prototype.addN=function(e){var t=this;Y(e,`addN`);for(var n=e.map((function(e){return t.readSync(e.dataId)})),r=q(e[0].shape,e[0].dtype),i=r.values,a=0;a<e.length;a++)for(var o=n[a],s=0;s<i.length;s++)i[s]+=o[s];return r.toTensor()},t.prototype.softmax=function(e,t){var n=pe([t],e.shape),r=this.max(e,n),i=kn(r.shape,n),a=this.subtract(e,r.reshape(i)),o=this.exp(a),s=this.sum(o,n).reshape(i);return this.realDivide(o,s)},t.prototype.subtract=function(e,t){return e.dtype===`complex64`||t.dtype===`complex64`?this.broadcastedBinaryComplexOp(e.cast(`complex64`),t.cast(`complex64`),(function(e,t,n,r){return{real:e-n,imag:t-r}})):this.broadcastedBinaryOp(e,t,ot(e.dtype,t.dtype),(function(e,t){return e-t}))},t.prototype.pow=function(e,t){return Y([e,t],`pow`),this.broadcastedBinaryOp(e,t,e.dtype,(function(e,t){return e**+t}))},t.prototype.batchMatMul=function(e,t,n,r){Y([e,t],`matMul`);for(var i=n?e.shape[1]:e.shape[2],a=n?e.shape[2]:e.shape[1],o=r?t.shape[1]:t.shape[2],s=e.shape[0],c=this.readSync(e.dataId),l=this.readSync(t.dataId),u=n?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=u[0],f=u[1],p=u[2],m=r?[1,t.strides[1],t.strides[0]]:[t.strides[1],1,t.strides[0]],h=m[0],g=m[1],_=m[2],v=a*o,y=q([s,a,o],e.dtype),b=y.values,x=this.blockSize,S=0;S<s;S++)for(var C=0;C<a;C+=x)for(var w=0;w<o;w+=x)for(var T=0;T<i;T+=x)for(var E=Math.min(C+x,a),D=Math.min(w+x,o),O=Math.min(T+x,i),k=C;k<E;k++)for(var A=w;A<D;A++){for(var j=0,M=T;M<O;M++)j+=c[S*d+k*f+M*p]*l[M*h+A*g+S*_];b[S*v+(k*o+A)]+=j}return y.toTensor()},t.prototype.fusedBatchMatMul=function(e){var t=e.a,n=e.b,r=e.transposeA,i=e.transposeB,a=e.bias,o=e.activation,s=e.preluActivationWeights,c=this.batchMatMul(t,n,r,i);return a&&(c=this.add(c,a)),o&&(c=zd(this,c,o,s)),c},t.prototype.multiply=function(e,t){return e.dtype===`complex64`||t.dtype===`complex64`?this.broadcastedBinaryComplexOp(e.cast(`complex64`),t.cast(`complex64`),(function(e,t,n,r){return{real:e*n-t*r,imag:e*r+t*n}})):this.broadcastedBinaryOp(e,t,ot(e.dtype,t.dtype),(function(e,t){return e*t}))},t.prototype.realDivide=function(e,t){return Y([e,t],`realDivide`),this.broadcastedBinaryOp(e,t,`float32`,(function(e,t){return e/t}))},t.prototype.floorDiv=function(e,t){return Y([e,t],`floorDiv`),this.broadcastedBinaryOp(e,t,`int32`,(function(e,t){return Math.floor(e/t)}))},t.prototype.sum=function(e,t){Y(e,`sum`),An(`sum`,t,e.rank);for(var n=On(e.shape,t),r=n[0],i=n[1],a=Yn(r,ot(e.dtype,`int32`)),o=R(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=0,f=0;f<o;++f)d+=c[u+f];s[l]=d}return a},t.prototype.prod=function(e,t){Y(e,`sum`);for(var n=On(e.shape,t),r=n[0],i=n[1],a=Yn(r,ot(e.dtype,`int32`)),o=R(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=1,f=0;f<o;++f)d*=c[u+f];s[l]=d}return a},t.prototype.unsortedSegmentSum=function(e,t,n){Y(e,`unsortedSegmentSum`);for(var r=[],i=e.rank-t.rank,a=0;a<i;++a)t=t.expandDims(a+1);for(a=0;a<n;++a){var o=yl(K(a,`int32`),t).asType(`float32`).mul(e).sum(0);r.push(o)}return Hr(r)},t.prototype.argMin=function(e,t){Y(e,`argMin`);var n=[t];An(`argMin`,n,e.rank);for(var r=On(e.shape,n),i=r[0],a=r[1],o=Yn(i,`int32`),s=R(a),c=this.readSync(o.dataId),l=this.readSync(e.dataId),u=0;u<c.length;++u){for(var d=u*s,f=l[d],p=0,m=0;m<s;++m){var h=l[d+m];h<f&&(f=h,p=m)}c[u]=p}return o},t.prototype.argMax=function(e,t){Y(e,`argMax`);var n=[t];An(`argMax`,n,e.rank);for(var r=On(e.shape,n),i=r[0],a=r[1],o=Yn(i,`int32`),s=R(a),c=this.readSync(o.dataId),l=this.readSync(e.dataId),u=0;u<c.length;++u){for(var d=u*s,f=l[d],p=0,m=0;m<s;++m){var h=l[d+m];h>f&&(f=h,p=m)}c[u]=p}return o},t.prototype.cumsum=function(e,t,n,r){if(Y(e,`cumsum`),t!==e.rank-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=`+(e.rank-1)+` but got axis=`+t);for(var i=ot(e.dtype,`int32`),a=Yn(e.shape,i),o=this.readSync(a.dataId),s=this.readSync(e.dataId),c=e.shape[e.rank-1],l=r?function(e,t){return e+c-t-1}:function(e,t){return e+t},u=0;u<s.length;u+=c)for(var d=0;d<c;d++){var f=l(u,d);if(d===0)o[f]=n?0:s[f];else{var p=l(u,d-1);o[f]=n?s[p]+o[p]:s[f]+o[p]}}return a},t.prototype.equal=function(e,t){return Y([e,t],`equal`),this.broadcastedBinaryOp(e,t,`bool`,(function(e,t){return+(e===t)}))},t.prototype.notEqual=function(e,t){return Y([e,t],`notEqual`),this.broadcastedBinaryOp(e,t,`bool`,(function(e,t){return e===t?0:1}))},t.prototype.less=function(e,t){return Y([e,t],`less`),this.broadcastedBinaryOp(e,t,`bool`,(function(e,t){return+(e<t)}))},t.prototype.lessEqual=function(e,t){return Y([e,t],`lessEqual`),this.broadcastedBinaryOp(e,t,`bool`,(function(e,t){return+(e<=t)}))},t.prototype.greater=function(e,t){return Y([e,t],`greater`),this.broadcastedBinaryOp(e,t,`bool`,(function(e,t){return+(e>t)}))},t.prototype.greaterEqual=function(e,t){return Y([e,t],`greaterEqual`),this.broadcastedBinaryOp(e,t,`bool`,(function(e,t){return+(e>=t)}))},t.prototype.logicalNot=function(e){Y(e,`logicalNot`);for(var t=this.readSync(e.dataId),n=new Uint8Array(t.length),r=0;r<t.length;++r)n[r]=+!t[r];return this.makeOutput(n,e.shape,`bool`)},t.prototype.logicalAnd=function(e,t){return Y([e,t],`logicalAnd`),this.broadcastedBinaryOp(e,t,`bool`,(function(e,t){return e&&t}))},t.prototype.logicalOr=function(e,t){return Y([e,t],`logicalOr`),this.broadcastedBinaryOp(e,t,`bool`,(function(e,t){return e||t}))},t.prototype.select=function(e,t,n){Y([e,t,n],`select`);for(var r=this.readSync(e.dataId),i=this.readSync(t.dataId),a=this.readSync(n.dataId),o=Yn(t.shape,ot(t.dtype,n.dtype)),s=this.readSync(o.dataId),c=0,l=e.rank===0||e.rank>1||t.rank===1?1:R(t.shape.slice(1)),u=0;u<r.length;u++)for(var d=0;d<l;d++)r[u]===1?s[c++]=i[u]:s[c++]=a[u];return o},t.prototype.where=function(e){Y([e],`where`);var t=this.readSync(e.dataId);return Xi(e.shape,t)},t.prototype.topk=function(e,t,n){return Y(e,`topk`),Yi(this.readSync(e.dataId),e.shape,e.dtype,t)},t.prototype.min=function(e,t){Y(e,`min`),An(`min`,t,e.rank);for(var n=On(e.shape,t),r=n[0],i=n[1],a=Yn(r,e.dtype),o=R(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=c[u],f=0;f<o;++f){var p=c[u+f];p<d&&(d=p)}s[l]=d}return a},t.prototype.minimum=function(e,t){return Y([e,t],`minimum`),this.broadcastedBinaryOp(e,t,e.dtype,(function(e,t){return Math.min(e,t)}))},t.prototype.mod=function(e,t){return Y([e,t],`mod`),this.broadcastedBinaryOp(e,t,e.dtype,(function(e,t){var n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t}))},t.prototype.max=function(e,t){Y(e,`max`),An(`max`,t,e.rank);for(var n=On(e.shape,t),r=n[0],i=n[1],a=Yn(r,e.dtype),o=R(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=c[u],f=0;f<o;++f){var p=c[u+f];p>d&&(d=p)}s[l]=d}return a},t.prototype.maximum=function(e,t){return Y([e,t],`maximum`),this.broadcastedBinaryOp(e,t,e.dtype,(function(e,t){return Math.max(e,t)}))},t.prototype.all=function(e,t){Y(e,`all`),An(`all`,t,e.rank);for(var n=On(e.shape,t),r=n[0],i=n[1],a=Yn(r,e.dtype),o=R(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=c[u],f=0;f<o;++f){var p=c[u+f];d&&=p}s[l]=d}return a},t.prototype.any=function(e,t){Y(e,`any`),An(`any`,t,e.rank);for(var n=On(e.shape,t),r=n[0],i=n[1],a=Yn(r,e.dtype),o=R(i),s=this.readSync(a.dataId),c=this.readSync(e.dataId),l=0;l<s.length;++l){for(var u=l*o,d=c[u],f=0;f<o;++f){var p=c[u+f];d||=p}s[l]=d}return a},t.prototype.squaredDifference=function(e,t){return Y([e,t],`squaredDifference`),this.broadcastedBinaryOp(e,t,e.dtype,(function(e,t){var n=e-t;return n*n}))},t.prototype.ceil=function(e){Y(e,`ceil`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.ceil(t[r]);return this.makeOutput(n,e.shape,`float32`)},t.prototype.floor=function(e){Y(e,`floor`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.floor(t[r]);return this.makeOutput(n,e.shape,`float32`)},t.prototype.sign=function(e){Y(e,`x`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)t[r]<0?n[r]=-1:t[r]>0?n[r]=1:n[r]=0;return this.makeOutput(n,e.shape,`float32`)},t.prototype.isNaN=function(e){Y(e,`x`);for(var t=this.readSync(e.dataId),n=new Uint8Array(t.length),r=0;r<t.length;++r)Number.isNaN(t[r])&&(n[r]=1);return this.makeOutput(n,e.shape,`bool`)},t.prototype.isInf=function(e){Y(e,`x`);for(var t=this.readSync(e.dataId),n=new Uint8Array(t.length),r=0;r<t.length;++r)Math.abs(t[r])===1/0&&(n[r]=1);return this.makeOutput(n,e.shape,`bool`)},t.prototype.isFinite=function(e){Y(e,`x`);for(var t=this.readSync(e.dataId),n=new Uint8Array(t.length),r=0;r<t.length;++r)Number.isFinite(t[r])&&(n[r]=1);return this.makeOutput(n,e.shape,`bool`)},t.prototype.round=function(e){Y(e,`round`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=Math.floor(t[r]);t[r]-i<.5?n[r]=Math.floor(t[r]):t[r]-i>.5?n[r]=Math.ceil(t[r]):n[r]=i%2==0?i:i+1}return this.makeOutput(n,e.shape,`float32`)},t.prototype.exp=function(e){Y(e,`exp`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.exp(t[r]);return this.makeOutput(n,e.shape,`float32`)},t.prototype.expm1=function(e){Y(e,`expm1`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.expm1(t[r]);return this.makeOutput(n,e.shape,`float32`)},t.prototype.log=function(e){Y(e,`log`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=t[r];n[r]=Math.log(i)}return this.makeOutput(n,e.shape,`float32`)},t.prototype.log1p=function(e){Y(e,`log1p`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=t[r];n[r]=Math.log1p(i)}return this.makeOutput(n,e.shape,`float32`)},t.prototype.sqrt=function(e){Y(e,`sqrt`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=t[r];n[r]=Math.sqrt(i)}return this.makeOutput(n,e.shape,`float32`)},t.prototype.rsqrt=function(e){Y(e,`rsqrt`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r){var i=t[r];n[r]=1/Math.sqrt(i)}return this.makeOutput(n,e.shape,`float32`)},t.prototype.reciprocal=function(e){Y(e,`reciprocal`);for(var t=this.readSync(e.dataId),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=1/t[r];return this.makeOutput(n,e.shape,`float32`)},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){Y(e,`relu`);for(var t=Yn(e.shape,e.dtype),n=this.readSync(t.dataId),r=this.readSync(e.dataId),i=0;i<r.length;++i)n[i]=Math.max(0,r[i]);return t},t.prototype.relu6=function(e){Y(e,`relu`);for(var t=Yn(e.shape,e.dtype),n=this.readSync(t.dataId),r=this.readSync(e.dataId),i=0;i<r.length;++i)n[i]=Math.min(Math.max(0,r[i]),6);return t},t.prototype.prelu=function(e,t){return Y([e,t],`prelu`),this.broadcastedBinaryOp(e,t,e.dtype,(function(e,t){return e<0?t*e:e}))},t.prototype.elu=function(e){Y(e,`elu`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r){var i=n[r];t[r]=i>=0?i:Math.exp(i)-1}return this.makeOutput(t,e.shape,`float32`)},t.prototype.eluDer=function(e,t){Y([e,t],`eluDer`);for(var n=new Float32Array(t.size),r=this.readSync(t.dataId),i=this.readSync(e.dataId),a=0;a<r.length;++a){var o=r[a];n[a]=o>=1?i[a]:i[a]*(o+1)}return this.makeOutput(n,t.shape,`float32`)},t.prototype.selu=function(e){Y(e,`selu`);for(var t=hs,n=gs,r=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var o=i[a];r[a]=o>=0?n*o:t*(Math.exp(o)-1)}return this.makeOutput(r,e.shape,`float32`)},t.prototype.clip=function(e,t,n){Y(e,`clip`);for(var r=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var o=i[a];r[a]=o>n?n:o<t?t:o}return this.makeOutput(r,e.shape,`float32`)},t.prototype.abs=function(e){for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.abs(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.complexAbs=function(e){for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<e.size;++r){var i=n[2*r],a=n[2*r+1];t[r]=Math.hypot(i,a)}return this.makeOutput(t,e.shape,`float32`)},t.prototype.int=function(e){Y(e,`int`);for(var t=new Int32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=n[r];return this.makeOutput(t,e.shape,`int32`)},t.prototype.sigmoid=function(e){Y(e,`sigmoid`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=1/(1+Math.exp(-n[r]));return this.makeOutput(t,e.shape,`float32`)},t.prototype.softplus=function(e){Y(e,`softplus`);for(var t=Math.log(1.1920928955078125e-7)+2,n=new Float32Array(e.size),r=this.readSync(e.dataId),i=0;i<r.length;++i){var a=r[i]>-t,o=r[i]<t,s=Math.exp(r[i]),c=void 0;c=o?s:a?r[i]:Math.log(1+s),n[i]=c}return this.makeOutput(n,e.shape,`float32`)},t.prototype.sin=function(e){Y(e,`sin`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.sin(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.cos=function(e){Y(e,`cos`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.cos(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.tan=function(e){Y(e,`tan`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.tan(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.asin=function(e){Y(e,`asin`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.asin(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.acos=function(e){Y(e,`acos`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.acos(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.atan=function(e){Y(e,`atan`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.atan(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.atan2=function(e,t){return Y([e,t],`atan2`),this.broadcastedBinaryOp(e,t,e.dtype,(function(e,t){return Math.atan2(e,t)}))},t.prototype.sinh=function(e){Y(e,`sinh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.sinh(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.cosh=function(e){Y(e,`cosh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.cosh(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.tanh=function(e){Y(e,`tanh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=ce(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.asinh=function(e){Y(e,`asinh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.asinh(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.acosh=function(e){Y(e,`acosh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.acosh(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.atanh=function(e){Y(e,`atanh`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r)t[r]=Math.atanh(n[r]);return this.makeOutput(t,e.shape,`float32`)},t.prototype.erf=function(e){Y(e,`erf`);for(var t=new Float32Array(e.size),n=this.readSync(e.dataId),r=0;r<n.length;++r){var i=Math.sign(n[r]),a=Math.abs(n[r]),o=1/(1+.3275911*a);t[r]=i*(1-((((1.061405429*o-1.453152027)*o+1.421413741)*o-.284496736)*o+.254829592)*o*Math.exp(-a*a))}return this.makeOutput(t,e.shape,`float32`)},t.prototype.step=function(e,t){t===void 0&&(t=0),Y(e,`step`);for(var n=new Float32Array(e.size),r=this.readSync(e.dataId),i=0;i<r.length;++i){var a=r[i];isNaN(a)?n[i]=NaN:n[i]=a>0?1:t}return this.makeOutput(n,e.shape,`float32`)},t.prototype.fusedConv2d=function(e){var t=e.input,n=e.filter,r=e.convInfo,i=e.bias,a=e.activation,o=e.preluActivationWeights,s=this.conv2d(t,n,r);return i&&(s=this.add(s,i)),a&&(s=zd(this,s,a,o)),s},t.prototype.conv2d=function(e,t,n){Y([e,t],`conv2d`);for(var r=n.filterHeight,i=n.filterWidth,a=n.dilationHeight,o=n.dilationWidth,s=n.padInfo.left,c=n.padInfo.top,l=n.dataFormat===`channelsLast`,u=q(n.outShape,e.dtype),d=e.strides[0],f=l?e.strides[1]:e.strides[2],p=l?e.strides[2]:1,m=l?1:e.strides[1],h=u.strides[0],g=l?u.strides[1]:u.strides[2],_=l?u.strides[2]:1,v=l?1:u.strides[1],y=this.readSync(e.dataId),b=this.readSync(t.dataId),x=u.values,S=0;S<n.batchSize;++S)for(var C=S*d,w=S*h,T=0;T<n.outHeight;++T)for(var E=w+T*g,D=T*n.strideHeight-c,O=0;O<r;O++){var k=D+O*a;if(!(k<0||k>=n.inHeight))for(var A=O*t.strides[0],j=C+k*f,M=0;M<n.outWidth;++M)for(var N=E+M*_,P=M*n.strideWidth-s,F=0;F<i;F++){var ee=P+F*o;if(!(ee<0||ee>=n.inWidth))for(var te=j+ee*p,ne=A+F*t.strides[1],re=0;re<n.inChannels;++re){for(var I=y[te+re*m],L=0;L<n.outChannels;++L)x[N+L*v]+=I*b[ne+L];ne+=n.outChannels}}}return u.toTensor()},t.prototype.conv3d=function(e,t,n){for(var r=n.filterDepth,i=n.filterHeight,a=n.filterWidth,o=n.dilationDepth,s=n.dilationHeight,c=n.dilationWidth,l=n.padInfo.front,u=n.padInfo.left,d=n.padInfo.top,f=q(n.outShape,e.dtype),p=this.readSync(e.dataId),m=this.readSync(t.dataId),h=f.values,g=0;g<n.batchSize;++g)for(var _=g*e.strides[0],v=g*f.strides[0],y=0;y<n.outDepth;++y)for(var b=v+y*f.strides[1],x=y*n.strideDepth-l,S=0;S<r;S++){var C=x+S*o;if(!(C<0||C>=n.inDepth))for(var w=S*t.strides[0],T=_+C*e.strides[1],E=0;E<n.outHeight;++E)for(var D=b+E*f.strides[2],O=E*n.strideHeight-d,k=0;k<i;k++){var A=O+k*s;if(!(A<0||A>=n.inHeight))for(var j=w+k*t.strides[1],M=T+A*e.strides[2],N=0;N<n.outWidth;++N)for(var P=D+N*n.outChannels,F=N*n.strideWidth-u,ee=0;ee<a;ee++){var te=F+ee*c;if(!(te<0||te>=n.inWidth))for(var ne=j+ee*t.strides[2],re=M+te*n.inChannels,I=ne,L=0;L<n.inChannels;++L){for(var ie=p[re+L],ae=0;ae<n.outChannels;++ae)h[P+ae]+=ie*m[I+ae];I+=n.outChannels}}}}return f.toTensor()},t.prototype.conv2dDerInput=function(e,t,n){Y([e,t],`conv2dDerInput`);for(var r=q(n.inShape,`float32`),i=r.values,a=this.readSync(e.dataId),o=this.readSync(t.dataId),s=t.strides,c=s[0],l=s[1],u=s[2],d=n.batchSize,f=n.filterHeight,p=n.filterWidth,m=n.inChannels,h=n.inHeight,g=n.inWidth,_=n.outChannels,v=n.outHeight,y=n.outWidth,b=n.strideHeight,x=n.strideWidth,S=n.dataFormat,C=f-1-n.padInfo.top,w=p-1-n.padInfo.left,T=S===`channelsLast`,E=r.strides[0],D=T?r.strides[1]:r.strides[2],O=T?r.strides[2]:1,k=T?1:r.strides[1],A=e.strides[0],j=T?e.strides[1]:e.strides[2],M=T?e.strides[2]:1,N=T?1:e.strides[1],P=0;P<d;++P)for(var F=0;F<m;++F)for(var ee=0;ee<h;++ee)for(var te=ee-C,ne=Math.max(0,Math.ceil(te/b)),re=Math.min(v,(f+te)/b),I=0;I<g;++I){for(var L=I-w,ie=Math.max(0,Math.ceil(L/x)),ae=Math.min(y,(p+L)/x),R=0,oe=ne;oe<re;++oe)for(var se=oe*b-te,ce=ie;ce<ae;++ce)for(var le=A*P+j*oe+M*ce,ue=c*(f-1-se)+l*(p-1-(ce*x-L))+u*F,de=0;de<_;++de)R+=a[le+N*de]*o[ue+de];i[E*P+D*ee+O*I+k*F]=R}return r.toTensor()},t.prototype.conv3dDerInput=function(e,t,n){for(var r=q(n.inShape,`float32`),i=r.values,a=r.strides,o=a[0],s=a[1],c=a[2],l=a[3],u=this.readSync(e.dataId),d=e.strides,f=d[0],p=d[1],m=d[2],h=d[3],g=this.readSync(t.dataId),_=t.strides,v=_[0],y=_[1],b=_[2],x=_[3],S=n.batchSize,C=n.filterDepth,w=n.filterHeight,T=n.filterWidth,E=n.inChannels,D=n.inDepth,O=n.inHeight,k=n.inWidth,A=n.outChannels,j=n.outDepth,M=n.outHeight,N=n.outWidth,P=n.strideDepth,F=n.strideHeight,ee=n.strideWidth,te=C-1-n.padInfo.front,ne=w-1-n.padInfo.top,re=T-1-n.padInfo.left,I=0;I<S;++I)for(var L=0;L<E;++L)for(var ie=0;ie<D;++ie)for(var ae=ie-te,R=Math.max(0,Math.ceil(ae/P)),oe=Math.min(j,(C+ae)/P),se=0;se<O;++se)for(var ce=se-ne,le=Math.max(0,Math.ceil(ce/F)),ue=Math.min(M,(w+ce)/F),de=0;de<k;++de){for(var fe=de-re,pe=Math.max(0,Math.ceil(fe/ee)),me=Math.min(N,(T+fe)/ee),he=0,ge=R;ge<oe;++ge)for(var _e=ge*P-ae,ve=le;ve<ue;++ve)for(var ye=ve*F-ce,be=pe;be<me;++be)for(var xe=f*I+p*ge+m*ve+h*be,Se=v*(C-1-_e)+y*(w-1-ye)+b*(T-1-(be*ee-fe))+x*L,Ce=0;Ce<A;++Ce)he+=u[xe+Ce]*g[Se+Ce];i[o*I+s*ie+c*se+l*de+L]=he}return r.toTensor()},t.prototype.conv2dDerFilter=function(e,t,n){Y([e,t],`conv2dDerFilter`);for(var r=n.strideHeight,i=n.strideWidth,a=n.filterHeight,o=n.filterWidth,s=n.dataFormat===`channelsLast`,c=q(n.filterShape,`float32`),l=n.padInfo.left,u=n.padInfo.top,d=this.bufferSync(e),f=this.bufferSync(t),p=0;p<a;++p)for(var m=Math.max(0,Math.ceil((u-p)/r)),h=Math.min(n.outHeight,(n.inHeight+u-p)/r),g=0;g<o;++g)for(var _=Math.max(0,Math.ceil((l-g)/i)),v=Math.min(n.outWidth,(n.inWidth+l-g)/i),y=0;y<n.inChannels;++y)for(var b=0;b<n.outChannels;++b){for(var x=0,S=0;S<n.batchSize;++S)for(var C=m;C<h;++C)for(var w=p+C*r-u,T=_;T<v;++T){var E=g+T*i-l;x+=s?d.get(S,w,E,y)*f.get(S,C,T,b):d.get(S,y,w,E)*f.get(S,b,C,T)}c.set(x,p,g,y,b)}return c.toTensor()},t.prototype.conv3dDerFilter=function(e,t,n){for(var r=n.strideDepth,i=n.strideHeight,a=n.strideWidth,o=n.filterDepth,s=n.filterHeight,c=n.filterWidth,l=q(n.filterShape,`float32`),u=l.values,d=l.strides,f=d[0],p=d[1],m=d[2],h=d[3],g=this.readSync(t.dataId),_=t.strides,v=_[0],y=_[1],b=_[2],x=_[3],S=this.readSync(e.dataId),C=e.strides,w=C[0],T=C[1],E=C[2],D=C[3],O=n.padInfo.front,k=n.padInfo.left,A=n.padInfo.top,j=0;j<o;++j)for(var M=Math.max(0,Math.ceil((O-j)/r)),N=Math.min(n.outDepth,(n.inDepth+O-j)/r),P=j*f,F=0;F<s;++F)for(var ee=Math.max(0,Math.ceil((A-F)/i)),te=Math.min(n.outHeight,(n.inHeight+A-F)/i),ne=F*p+P,re=0;re<c;++re)for(var I=Math.max(0,Math.ceil((k-re)/a)),L=Math.min(n.outWidth,(n.inWidth+k-re)/a),ie=re*m+ne,ae=0;ae<n.inChannels;++ae)for(var R=ae*h+ie,oe=0;oe<n.outChannels;++oe){for(var se=0,ce=0;ce<n.batchSize;++ce)for(var le=ce*w,ue=ce*v,de=M;de<N;++de)for(var fe=(j+de*r-O)*T+le,pe=de*y+ue,me=ee;me<te;++me)for(var he=(F+me*i-A)*E+fe,ge=me*b+pe,_e=I;_e<L;++_e){var ve=_e*x+ge;se+=S[(re+_e*a-k)*D+he+ae]*g[ve+oe]}u[R+oe]=se}return l.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var t=e.input,n=e.filter,r=e.convInfo,i=e.bias,a=e.activation,o=e.preluActivationWeights,s=this.depthwiseConv2D(t,n,r);return i&&(s=this.add(s,i)),a&&(s=zd(this,s,a,o)),s},t.prototype.depthwiseConv2D=function(e,t,n){Y([e,t],`depthwiseConv2D`);for(var r=n.filterHeight,i=n.filterWidth,a=n.dilationHeight,o=n.dilationWidth,s=n.padInfo.left,c=n.padInfo.top,l=n.outChannels/n.inChannels,u=q(n.outShape,e.dtype),d=this.readSync(e.dataId),f=this.readSync(t.dataId),p=u.values,m=0;m<n.batchSize;++m)for(var h=m*e.strides[0],g=m*u.strides[0],_=0;_<n.outHeight;++_)for(var v=g+_*u.strides[1],y=_*n.strideHeight-s,b=0;b<r;++b){var x=y+b*a;if(!(x<0||x>=n.inHeight))for(var S=b*t.strides[0],C=h+x*e.strides[1],w=0;w<n.outWidth;++w)for(var T=v+w*u.strides[2],E=w*n.strideWidth-c,D=0;D<i;++D){var O=E+D*o;if(!(O<0||O>=n.inWidth))for(var k=S+D*t.strides[1],A=C+O*n.inChannels,j=T,M=k,N=0;N<n.inChannels;++N){for(var P=d[A+N],F=0;F<l;++F)p[j+F]+=P*f[M+F];j+=l,M+=l}}}return u.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,t,n){Y([e,t],`depthwiseConv2DDerInput`);for(var r=q(n.inShape,`float32`),i=r.values,a=r.strides,o=a[0],s=a[1],c=a[2],l=this.readSync(e.dataId),u=e.strides,d=u[0],f=u[1],p=u[2],m=this.readSync(t.dataId),h=t.strides,g=h[0],_=h[1],v=h[2],y=n.batchSize,b=n.filterHeight,x=n.filterWidth,S=n.inChannels,C=n.inHeight,w=n.inWidth,T=n.outChannels,E=n.outHeight,D=n.outWidth,O=n.strideHeight,k=n.strideWidth,A=b-1-n.padInfo.top,j=x-1-n.padInfo.left,M=T/S,N=0;N<y;++N)for(var P=0;P<S;++P)for(var F=0;F<C;++F)for(var ee=F-A,te=Math.max(0,Math.ceil(ee/O)),ne=Math.min(E,(b+ee)/O),re=0;re<w;++re){for(var I=re-j,L=Math.max(0,Math.ceil(I/k)),ie=Math.min(D,(x+I)/k),ae=0,R=te;R<ne;++R)for(var oe=R*O-ee,se=L;se<ie;++se)for(var ce=d*N+f*R+p*se,le=g*(b-1-oe)+_*(x-1-(se*k-I))+v*P,ue=0;ue<M;++ue)ae+=l[ce+(P*M+ue)]*m[le+ue];i[o*N+s*F+c*re+P]=ae}return r.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,t,n){Y([e,t],`depthwiseConv2DDerFilter`);for(var r=n.strideHeight,i=n.strideWidth,a=n.filterHeight,o=n.filterWidth,s=q(n.filterShape,`float32`),c=n.padInfo.left,l=n.padInfo.top,u=n.outChannels/n.inChannels,d=this.bufferSync(e),f=this.bufferSync(t),p=0;p<a;++p)for(var m=Math.max(0,Math.ceil((l-p)/r)),h=Math.min(n.outHeight,(n.inHeight+l-p)/r),g=0;g<o;++g)for(var _=Math.max(0,Math.ceil((c-g)/i)),v=Math.min(n.outWidth,(n.inWidth+c-g)/i),y=0;y<n.outChannels;++y){for(var b=Math.trunc(y/u),x=y%u,S=0,C=0;C<n.batchSize;++C)for(var w=m;w<h;++w)for(var T=p+w*r-l,E=_;E<v;++E){var D=g+E*i-c;S+=d.get(C,T,D,b)*f.get(C,w,E,y)}s.set(S,p,g,b,x)}return s.toTensor()},t.prototype.tile=function(e,t){return Y(e,`tile`),Ji(this.bufferSync(e),t)},t.prototype.pad=function(e,t,n){Y(e,`pad`);var r=t.map((function(t,n){return t[0]+e.shape[n]+t[1]})),i=t.map((function(e){return e[0]})),a=this.bufferSync(e),o=q(r,e.dtype);n!==0&&o.values.fill(n);for(var s=0;s<e.size;s++){var c=a.indexToLoc(s),l=c.map((function(e,t){return e+i[t]}));o.set.apply(o,[a.get.apply(a,c)].concat(l))}return o.toTensor()},t.prototype.transpose=function(e,t){Y(e,`transpose`);for(var n=Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[t[r]];var i=this.readSync(e.dataId),a=q(n,e.dtype),o=this.bufferSync(e);for(r=0;r<e.size;++r){for(var s=o.indexToLoc(r),c=Array(s.length),l=0;l<c.length;l++)c[l]=s[t[l]];var u=a.locToIndex(c);a.values[u]=i[r]}return a.toTensor()},t.prototype.gather=function(e,t,n){Y([e,t],`gather`);var r=e.shape.slice(),i=this.readSync(t.dataId);r[n]=i.length;for(var a=q(r,e.dtype),o=this.bufferSync(e),s=0;s<a.size;++s){var c=a.indexToLoc(s),l=c.slice();l[n]=i[c[n]];var u=o.locToIndex(l);a.values[s]=o.values[u]}return a.toTensor()},t.prototype.batchToSpaceND=function(e,t,n){Y([e],`batchToSpaceND`);var r=t.reduce((function(e,t){return e*t})),i=qr(e.shape,t,r),a=Jr(i.length,t.length),o=Yr(e.shape,t,r),s=Xr(n,t.length),c=Zr(o,n,t.length);return e.reshape(i).transpose(a).reshape(o).slice(s,c)},t.prototype.spaceToBatchND=function(e,t,n){Y([e],`spaceToBatchND`);var r=t.reduce((function(e,t){return e*t})),i=[[0,0]];i.push.apply(i,n);for(var a=1+t.length;a<e.shape.length;++a)i.push([0,0]);var o=e.pad(i),s=qr(o.shape,t,r,!1),c=Jr(s.length,t.length,!1),l=Yr(o.shape,t,r,!1);return o.reshape(s).transpose(c).reshape(l)},t.prototype.pool=function(e,t,n){Y(e,`pool`);for(var r=t.strideHeight,i=t.strideWidth,a=t.dilationHeight,o=t.dilationWidth,s=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=t.padInfo.top,u=t.padInfo.left,d=n===`max`?-1/0:1/0,f=this.readSync(e.dataId),p=q(t.outShape,e.dtype),m=p.values,h=t.outShape[1]*t.outShape[2]*t.outShape[3],g=t.outShape[2]*t.outShape[3],_=t.outShape[3],v=0;v<t.batchSize;++v)for(var y=v*h,b=v*e.strides[0],x=0;x<t.inChannels;++x)for(var S=0;S<t.outHeight;++S)for(var C=S*r-l,w=Math.max(0,C),T=Math.min(t.inHeight,s+C),E=y+S*g,D=0;D<t.outWidth;++D){for(var O=D*i-u,k=Math.max(0,O),A=Math.min(t.inWidth,c+O),j=d,M=0,N=0,P=w;P<T;P+=a){for(var F=b+P*e.strides[1],ee=k;ee<A;ee+=o){var te=f[F+ee*e.strides[2]+x];n===`max`&&te>j?j=te:n===`avg`&&(M+=te,N++)}if(isNaN(j))break}m[E+D*_+x]=n===`avg`?M/N:j}return p.toTensor()},t.prototype.maxPool=function(e,t){return this.pool(e,t,`max`)},t.prototype.maxPoolPositions=function(e,t){for(var n=q(t.outShape,`int32`),r=t.strideHeight,i=t.strideWidth,a=t.dilationHeight,o=t.dilationWidth,s=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=t.padInfo.top,u=t.padInfo.left,d=this.bufferSync(e),f=0;f<t.batchSize;++f)for(var p=0;p<t.inChannels;++p)for(var m=0;m<t.outHeight;++m){for(var h=m*r-l,g=h;g<0;)g+=a;for(var _=Math.min(t.inHeight,s+h),v=0;v<t.outWidth;++v){for(var y=v*i-u,b=y;b<0;)b+=o;for(var x=Math.min(t.inWidth,c+y),S=-1/0,C=-1,w=g;w<_;w+=a)for(var T=w-h,E=b;E<x;E+=o){var D=E-y,O=d.get(f,w,E,p);O>S&&(S=O,C=T*c+D)}n.set(C,f,m,v,p)}}return n.toTensor()},t.prototype.maxPoolBackprop=function(e,t,n,r){Y([t,n],`maxPoolBackprop`);for(var i=this.maxPoolPositions(t,r),a=r.strideHeight,o=r.strideWidth,s=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterHeight,u=r.effectiveFilterWidth,d=u-1-r.padInfo.left,f=l-1-r.padInfo.top,p=q(t.shape,`float32`),m=this.bufferSync(i),h=this.bufferSync(e),g=0;g<r.batchSize;++g)for(var _=0;_<r.inChannels;++_)for(var v=0;v<r.inHeight;++v)for(var y=0;y<r.inWidth;++y){for(var b=v-f,x=y-d,S=0,C=0;C<l;C+=s){var w=(b+C)/a;if(!(w<0||w>=r.outHeight||Math.floor(w)!==w))for(var T=0;T<u;T+=c){var E=(x+T)/o;if(!(E<0||E>=r.outWidth||Math.floor(E)!==E)){var D=+(l*u-1-m.get(g,w,E,_)===C*u+T);D!==0&&(S+=h.get(g,w,E,_)*D)}}}p.set(S,g,v,y,_)}return p.toTensor()},t.prototype.avgPoolBackprop=function(e,t,n){Y([e,t],`avgPoolBackprop`);for(var r=n.strideHeight,i=n.strideWidth,a=n.filterHeight,o=n.filterWidth,s=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterHeight,u=n.effectiveFilterWidth,d=u-1-n.padInfo.left,f=l-1-n.padInfo.top,p=q(t.shape,`float32`),m=1/(a*o),h=this.bufferSync(e),g=0;g<n.batchSize;++g)for(var _=0;_<n.inChannels;++_)for(var v=0;v<n.inHeight;++v)for(var y=0;y<n.inWidth;++y){for(var b=v-f,x=y-d,S=0,C=0;C<l;C+=s){var w=(b+C)/r;if(!(w<0||w>=n.outHeight||Math.floor(w)!==w))for(var T=0;T<u;T+=c){var E=(x+T)/i;E<0||E>=n.outWidth||Math.floor(E)!==E||(S+=h.get(g,w,E,_))}}p.set(S*m,g,v,y,_)}return p.toTensor()},t.prototype.pool3d=function(e,t,n){Y(e,`pool3d`);for(var r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left,h=n===`max`?-1/0:1/0,g=this.readSync(e.dataId),_=q(t.outShape,e.dtype),v=_.values,y=t.outShape[1]*t.outShape[2]*t.outShape[3]*t.outShape[4],b=t.outShape[2]*t.outShape[3]*t.outShape[4],x=t.outShape[3]*t.outShape[4],S=t.outShape[4],C=0;C<t.batchSize;++C)for(var w=C*y,T=C*e.strides[0],E=0;E<t.inChannels;++E)for(var D=0;D<t.outDepth;++D){for(var O=D*r-f,k=O;k<0;)k+=o;for(var A=Math.min(t.inDepth,l+O),j=w+D*b,M=0;M<t.outHeight;++M){for(var N=M*i-p,P=N;P<0;)P+=s;for(var F=Math.min(t.inHeight,u+N),ee=j+M*x,te=0;te<t.outWidth;++te){for(var ne=te*a-m,re=ne;re<0;)re+=c;for(var I=Math.min(t.inWidth,d+ne),L=ee+te*S,ie=h,ae=0,R=0,oe=k;oe<A;oe+=o){for(var se=T+oe*e.strides[1],ce=P;ce<F;ce+=s){for(var le=se+ce*e.strides[2],ue=re;ue<I;ue+=c){var de=g[le+ue*e.strides[3]+E];if(n===`max`&&de>ie?ie=de:n===`avg`&&(ae+=de,R++),isNaN(ie))break}if(isNaN(ie))break}if(isNaN(ie))break}v[L+E]=n===`avg`?ae/R:ie}}}return _.toTensor()},t.prototype.avgPool3d=function(e,t){return Y(e,`avgPool3d`),this.pool3d(e,t,`avg`).toFloat()},t.prototype.avgPool3dBackprop=function(e,t,n){Y([e,t],`avgPool3dBackprop`);for(var r=n.strideDepth,i=n.strideHeight,a=n.strideWidth,o=n.filterDepth,s=n.filterHeight,c=n.filterWidth,l=n.dilationDepth,u=n.dilationHeight,d=n.dilationWidth,f=n.effectiveFilterDepth,p=n.effectiveFilterHeight,m=n.effectiveFilterWidth,h=f-1-n.padInfo.front,g=m-1-n.padInfo.left,_=p-1-n.padInfo.top,v=q(t.shape,`float32`),y=1/(o*s*c),b=this.bufferSync(e),x=0;x<n.batchSize;++x)for(var S=0;S<n.inChannels;++S)for(var C=0;C<n.inDepth;++C)for(var w=0;w<n.inHeight;++w)for(var T=0;T<n.inWidth;++T){for(var E=C-h,D=w-_,O=T-g,k=0,A=0;A<f;A+=l){var j=(E+A)/r;if(!(j<0||j>=n.outDepth||Math.floor(j)!==j))for(var M=0;M<p;M+=u){var N=(D+M)/i;if(!(N<0||N>=n.outHeight||Math.floor(N)!==N))for(var P=0;P<m;P+=d){var F=(O+P)/a;F<0||F>=n.outWidth||Math.floor(F)!==F||(k+=b.get(x,j,N,F,S))}}}v.set(k*y,x,C,w,T,S)}return v.toTensor()},t.prototype.maxPool3d=function(e,t){return Y(e,`maxPool3d`),this.pool3d(e,t,`max`).toFloat()},t.prototype.maxPool3dPositions=function(e,t){for(var n=q(t.outShape,`int32`),r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left,h=this.bufferSync(e),g=0;g<t.batchSize;++g)for(var _=0;_<t.inChannels;++_)for(var v=0;v<t.outDepth;++v){for(var y=v*r-f,b=y;b<0;)b+=o;for(var x=Math.min(t.inDepth,l+y),S=0;S<t.outHeight;++S){for(var C=S*i-p,w=C;w<0;)w+=s;for(var T=Math.min(t.inHeight,u+C),E=0;E<t.outWidth;++E){for(var D=E*a-m,O=D;O<0;)O+=c;for(var k=Math.min(t.inWidth,d+D),A=-1/0,j=-1,M=b;M<x;M+=o)for(var N=M-y,P=w;P<T;P+=s)for(var F=P-C,ee=O;ee<k;ee+=c){var te=ee-D,ne=h.get(g,M,P,ee,_);ne>=A&&(A=ne,j=N*u*d+F*u+te)}n.set(j,g,v,S,E,_)}}}return n.toTensor()},t.prototype.maxPool3dBackprop=function(e,t,n,r){Y([t,n],`maxPool3dBackprop`);for(var i=this.maxPool3dPositions(t,r),a=r.strideDepth,o=r.strideHeight,s=r.strideWidth,c=r.dilationDepth,l=r.dilationHeight,u=r.dilationWidth,d=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,m=d-1-r.padInfo.front,h=p-1-r.padInfo.left,g=f-1-r.padInfo.top,_=q(t.shape,`float32`),v=this.bufferSync(i),y=this.bufferSync(e),b=0;b<r.batchSize;++b)for(var x=0;x<r.inChannels;++x)for(var S=0;S<r.inDepth;++S)for(var C=0;C<r.inHeight;++C)for(var w=0;w<r.inWidth;++w){for(var T=S-m,E=C-g,D=w-h,O=0,k=0;k<d;k+=c){var A=(T+k)/a;if(!(A<0||A>=r.outDepth||Math.floor(A)!==A))for(var j=0;j<f;j+=l){var M=(E+j)/o;if(!(M<0||M>=r.outHeight||Math.floor(M)!==M))for(var N=0;N<p;N+=u){var P=(D+N)/s;if(!(P<0||P>=r.outWidth||Math.floor(P)!==P)){var F=+(d*f*p-1-v.get(b,A,M,P,x)===k*f*p+j*p+N);F!==0&&(O+=y.get(b,A,M,P,x)*F)}}}}_.set(O,b,S,C,w,x)}return _.toTensor()},t.prototype.cast=function(e,t){return Mi(e,t,this)},t.prototype.reshape=function(e,t){return Ni(e,t)},t.prototype.avgPool=function(e,t){return Y(e,`avgPool`),this.pool(e,t,`avg`).toFloat()},t.prototype.resizeBilinear=function(e,t,n,r){Y(e,`resizeBilinear`);for(var i=e.shape,a=i[0],o=i[1],s=i[2],c=i[3],l=this.readSync(e.dataId),u=new Float32Array(R([a,t,n,c])),d=[r&&t>1?o-1:o,r&&n>1?s-1:s],f=[r&&t>1?t-1:t,r&&n>1?n-1:n],p=0,m=d[0]/f[0],h=d[1]/f[1],g=0;g<a;g++)for(var _=0;_<t;_++)for(var v=m*_,y=Math.floor(v),b=v-y,x=Math.min(o-1,Math.ceil(v)),S=g*e.strides[0]+y*e.strides[1],C=g*e.strides[0]+x*e.strides[1],w=0;w<n;w++)for(var T=h*w,E=Math.floor(T),D=T-E,O=Math.min(s-1,Math.ceil(T)),k=S+E*e.strides[2],A=C+E*e.strides[2],j=S+O*e.strides[2],M=C+O*e.strides[2],N=0;N<c;N++){var P=l[k+N],F=l[A+N],ee=P+(l[j+N]-P)*D,te=ee+(F+(l[M+N]-F)*D-ee)*b;u[p++]=te}return zn(u,[a,t,n,c])},t.prototype.resizeBilinearBackprop=function(e,t,n){Y([e,t],`resizeBilinearBackprop`);for(var r=t.shape,i=r[0],a=r[1],o=r[2],s=r[3],c=e.shape,l=c[1],u=c[2],d=new Float32Array(i*a*o*s),f=[n&&l>1?a-1:a,n&&u>1?o-1:o],p=[n&&l>1?l-1:l,n&&u>1?u-1:u],m=f[0]/p[0],h=f[1]/p[1],g=this.readSync(e.dataId),_=0,v=0;v<i;v++)for(var y=v*t.strides[0],b=0;b<l;b++)for(var x=b*m,S=Math.floor(x),C=Math.min(Math.ceil(x),a-1),w=y+S*t.strides[1],T=y+C*t.strides[1],E=x-S,D=1-E,O=0;O<u;O++)for(var k=O*h,A=Math.floor(k),j=Math.min(Math.ceil(k),o-1),M=k-A,N=1-M,P=w+A*t.strides[2],F=w+j*t.strides[2],ee=T+A*t.strides[2],te=T+j*t.strides[2],ne=D*N,re=D*M,I=E*N,L=E*M,ie=0;ie<s;ie++){var ae=g[_++];d[P+ie]+=ae*ne,d[F+ie]+=ae*re,d[ee+ie]+=ae*I,d[te+ie]+=ae*L}return Wn(d,[i,o,a,s],t.dtype)},t.prototype.resizeNearestNeighbor=function(e,t,n,r){Y(e,`resizeNearestNeighbor`);for(var i=e.shape,a=i[0],o=i[1],s=i[2],c=i[3],l=this.readSync(e.dataId),u=new Float32Array(a*t*n*c),d=[r&&t>1?o-1:o,r&&n>1?s-1:s],f=[r&&t>1?t-1:t,r&&n>1?n-1:n],p=d[0]/f[0],m=d[1]/f[1],h=0,g=0;g<a;g++)for(var _=g*e.strides[0],v=0;v<t;v++)for(var y=p*v,b=_+Math.min(o-1,r?Math.round(y):Math.floor(y))*e.strides[1],x=0;x<n;x++)for(var S=m*x,C=b+Math.min(s-1,r?Math.round(S):Math.floor(S))*e.strides[2],w=0;w<c;w++){var T=l[C+w];u[h++]=T}return zn(u,[a,t,n,c],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,t,n){Y([e,t],`resizeNearestNeighborBackprop`);for(var r=t.shape,i=r[0],a=r[1],o=r[2],s=r[3],c=e.shape,l=c[1],u=c[2],d=new Float32Array(i*a*o*s),f=this.readSync(e.dataId),p=[n&&l>1?a-1:a,n&&u>1?o-1:o],m=[n&&l>1?l-1:l,n&&u>1?u-1:u],h=p[0]/m[0],g=p[1]/m[1],_=1/h,v=1/g,y=2*Math.ceil(_)+2,b=2*Math.ceil(v)+2,x=0;x<i;x++)for(var S=x*t.strides[0],C=0;C<a;C++)for(var w=S+C*t.strides[1],T=Math.floor(C*_),E=Math.floor(T-y/2),D=0;D<o;D++)for(var O=w+D*t.strides[2],k=Math.floor(D*v),A=Math.floor(k-b/2),j=0;j<s;j++){for(var M=0,N=0;N<y;N++){var P=N+E;if(!(P<0||P>=l)){var F=S+P*e.strides[1],ee=P*h;if(C===Math.min(a-1,n?Math.round(ee):Math.floor(ee)))for(var te=0;te<b;te++){var ne=te+A;if(!(ne<0||ne>=u)){var re=F+ne*e.strides[2],I=ne*g;D===Math.min(o-1,n?Math.round(I):Math.floor(I))&&(M+=f[re+j])}}}}d[O+j]=M}return Wn(d,t.shape,t.dtype)},t.prototype.batchNormalization=function(e,t,n,r,i,a){Y([e,t,n,i,a],`batchNorm`);for(var o=this.readSync(e.dataId),s=this.readSync(t.dataId),c=this.readSync(n.dataId),l=i?this.readSync(i.dataId):new Float32Array([1]),u=a?this.readSync(a.dataId):new Float32Array([0]),d=new Float32Array(o.length),f=u.length,p=l.length,m=c.length,h=s.length,g=0,_=0,v=0,y=0,b=0;b<o.length;++b)d[b]=u[g++]+(o[b]-s[_++])*l[v++]/Math.sqrt(c[y++]+r),g>=f&&(g=0),_>=h&&(_=0),v>=p&&(v=0),y>=m&&(y=0);return Wn(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,t,n,r,i){Y(e,`localResponseNormalization4D`);var a=e.shape[3],o=a-1,s=this.readSync(e.dataId),c=e.size,l=new Float32Array(c);function u(e){for(var n=e%a,r=e-n+Math.max(0,n-t),i=e-n+Math.min(n+t,o),c=0;r<=i;r++){var l=s[r];c+=l*l}return c}for(var d=0;d<c;d++){var f=u(d),p=s[d]*(n+r*f)**+-i;l[d]=p}return Wn(l,e.shape)},t.prototype.LRNGrad=function(e,t,n,r,i,a,o){Y(e,`LRNGrad`);for(var s=e.shape[3],c=this.readSync(e.dataId),l=this.readSync(t.dataId),u=this.readSync(n.dataId),d=new Float32Array(e.size),f=e.size,p=0;p<f;p++){for(var m=p%s,h=p-m+Math.max(0,m-r),g=p-m+Math.min(s,m+r+1),_=0,v=h;v<g;v++)_+=l[v]**2;for(_=a*_+i,v=h;v<g;v++){var y=-2*a*o*l[v]*u[p]/_;p===v&&(y+=_**+-o),y*=c[p],d[v]+=y}}return Wn(d,e.shape)},t.prototype.multinomial=function(e,t,n,r){Y(e,`multinomial`);for(var i=t?e:pi(e),a=i.shape[0],o=i.shape[1],s=Yn([a,n],`int32`),c=this.readSync(s.dataId),l=this.readSync(i.dataId),u=0;u<a;++u){var d=u*o,f=new Float32Array(o-1);f[0]=l[d];for(var p=1;p<f.length;++p)f[p]=f[p-1]+l[d+p];for(var m=hr(r.toString()),h=u*n,g=0;g<n;++g){var _=m();c[h+g]=f.length;for(var v=0;v<f.length;v++)if(_<f[v]){c[h+g]=v;break}}}return s},t.prototype.oneHot=function(e,t,n,r){Y(e,`oneHot`);var i=new Float32Array(e.size*t);i.fill(r);for(var a=this.readSync(e.dataId),o=0;o<e.size;++o)a[o]>=0&&a[o]<t&&(i[o*t+a[o]]=n);return Hn(i,[e.size,t],`int32`)},t.prototype.nonMaxSuppression=function(e,t,n,r,i){return Y(e,`nonMaxSuppression`),Vi(this.readSync(e.dataId),this.readSync(t.dataId),n,r,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,t){for(var n=e.shape[0],r=e.shape[1],i=q(e.shape,`float32`),a=q(e.shape,`float32`),o=Ln(e).as2D(n,r),s=Rn(e).as2D(n,r),c=0;c<n;c++)for(var l=o.slice([c,0],[1,r]),u=s.slice([c,0],[1,r]),d=In(l,u),f=this.readSync(this.fftImpl(d,t).dataId),p=0;p<r;p++){var m=Ii(f,p);i.values[c*r+p]=m.real,a.values[c*r+p]=m.imag}return In(i.toTensor(),a.toTensor()).as2D(n,r)},t.prototype.fftImpl=function(e,t){var n=e.as1D(),r=n.size;if(this.isExponentOf2(r)){var i=this.fftRadix2(n,r,t).as2D(e.shape[0],e.shape[1]);return t&&(i=In(Ln(i).div(K(r)),Rn(i).div(K(r)))),i}var a=this.readSync(e.dataId),o=function(e){for(var t=new Float32Array(e.length/2),n=new Float32Array(e.length/2),r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}(this.fourierTransformByMatmul(a,r,t));return In(o.real,o.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return!(e&e-1)},t.prototype.fftRadix2=function(e,t,n){if(t===1)return e;var r=this.readSync(e.dataId),i=t/2,a=function(e){for(var t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t),i=0;i<e.length;i+=4)n[Math.floor(i/4)]=e[i],r[Math.floor(i/4)]=e[i+1];return{real:n,imag:r}}(r),o=In(a.real,a.imag).as1D(),s=function(e){for(var t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t),i=2;i<e.length;i+=4)n[Math.floor(i/4)]=e[i],r[Math.floor(i/4)]=e[i+1];return{real:n,imag:r}}(r),c=In(s.real,s.imag).as1D();o=this.fftRadix2(o,i,n),c=this.fftRadix2(c,i,n);var l=function(e,t){for(var n=new Float32Array(e/2),r=new Float32Array(e/2),i=0;i<Math.ceil(e/2);i++){var a=(t?2:-2)*Math.PI*(i/e);n[i]=Math.cos(a),r[i]=Math.sin(a)}return{real:n,imag:r}}(t,n),u=In(l.real,l.imag).mul(c),d=o.add(u),f=o.sub(u);return In(Ln(d).concat(Ln(f)),Rn(d).concat(Rn(f))).as1D()},t.prototype.fourierTransformByMatmul=function(e,t,n){for(var r=new Float32Array(2*t),i=0;i<t;i++){for(var a=0,o=0,s=0;s<t;s++){var c=Ri(i*s,t,n),l=Ii(e,s);a+=l.real*c.real-l.imag*c.imag,o+=l.real*c.imag+l.imag*c.real}n&&(a/=t,o/=t),Li(r,a,o,i)}return r},t.prototype.depthToSpace=function(e,t,n){I(n===`NHWC`,(function(){return`Only NHWC dataFormat supported on CPU for depthToSpace. Got `+n})),I(t>1,(function(){return`blockSize should be > 1 for depthToSpace, but was: `+t}));for(var r=e.shape[0],i=e.shape[1],a=e.shape[2],o=e.shape[3],s=i*t,c=a*t,l=o/(t*t),u=this.readSync(e.dataId),d=new Float32Array(r*s*c*l),f=0,p=0;p<r;++p)for(var m=0;m<s;++m)for(var h=Math.floor(m/t),g=m%t,_=0;_<c;++_)for(var v=Math.floor(_/t),y=(g*t+_%t)*l,b=0;b<l;++b){var x=b+y+o*(v+a*(h+i*p));d[f++]=u[x]}return Wn(d,[r,s,c,l])},t.prototype.broadcastedBinaryOp=function(e,t,n,r){var i=yi(e.shape,t.shape),a=q(i,n),o=this.readSync(e.dataId),s=this.readSync(t.dataId),c=_i(e.shape,i),l=_i(t.shape,i),u=a.values;if(c.length+l.length===0)for(var d=0;d<u.length;++d)u[d]=r(o[d%o.length],s[d%s.length]);else{var f=this.bufferSync(e),p=this.bufferSync(t),m=function(n){var i=a.indexToLoc(n),d=i.slice(-e.rank);c.forEach((function(e){return d[e]=0}));var m=f.locToIndex(d),h=i.slice(-t.rank);l.forEach((function(e){return h[e]=0}));var g=p.locToIndex(h);u[n]=r(o[m],s[g])};for(d=0;d<u.length;++d)m(d)}return a.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,t,n){var r=yi(e.shape,t.shape),i=q(r,`float32`),a=q(r,`float32`),o=this.readSync(e.dataId),s=this.readSync(t.dataId),c=_i(e.shape,r),l=_i(t.shape,r),u=i.values,d=a.values;if(c.length+l.length===0)for(var f=0;f<u.length;f++){var p=f%o.length,m=f%s.length,h=n(o[2*p],o[2*p+1],s[2*m],s[2*m+1]);u[f]=h.real,d[f]=h.imag}else{var g=this.bufferSync(this.data.get(e.dataId).complexTensors.real),_=this.bufferSync(this.data.get(t.dataId).complexTensors.real),v=function(r){var a=i.indexToLoc(r),f=a.slice(-e.rank);c.forEach((function(e){return f[e]=0}));var p=g.locToIndex(f),m=a.slice(-t.rank);l.forEach((function(e){return m[e]=0}));var h=_.locToIndex(m),v=n(o[2*p],o[2*p+1],s[2*h],s[2*h+1]);u[r]=v.real,d[r]=v.imag};for(f=0;f<u.length;f++)v(f)}return this.complex(i.toTensor(),a.toTensor())},t.prototype.split=function(e,t,n){return qi(e,t,n)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,t,n,r,i,a){for(var o=e.shape,s=o[0],c=o[1],l=o[2],u=o[3],d=t.shape[0],f=r[0],p=r[1],m=q([d,f,p,u],`float32`),h=this.readSync(t.dataId),g=this.readSync(n.dataId),_=this.readSync(e.dataId),v=e.strides,y=m.strides,b=0;b<d;b++){var x=4*b,S=h[x],C=h[x+1],w=h[x+2],T=h[x+3],E=g[b];if(!(E>=s))for(var D=f>1?(w-S)*(c-1)/(f-1):0,O=p>1?(T-C)*(l-1)/(p-1):0,k=0;k<f;k++){var A=f>1?S*(c-1)+k*D:.5*(S+w)*(c-1);if(A<0||A>c-1)for(var j=0;j<p;j++)for(var M=0;M<u;M++){var N=M+j*y[2]+k*y[1]+b*y[0];m.values[N]=a}else if(i===`bilinear`){var P=Math.floor(A),F=Math.ceil(A),ee=A-P;for(j=0;j<p;j++)if((oe=p>1?C*(l-1)+j*O:.5*(C+T)*(l-1))<0||oe>l-1)for(M=0;M<u;M++)N=M+j*y[2]+k*y[1]+b*y[0],m.values[N]=a;else{var te=Math.floor(oe),ne=Math.ceil(oe),re=oe-te;for(M=0;M<u;M++){var I=_[N=M+te*v[2]+P*v[1]+E*v[0]],L=_[N=M+ne*v[2]+P*v[1]+E*v[0]],ie=_[N=M+te*v[2]+F*v[1]+E*v[0]],ae=I+(L-I)*re,R=ie+(_[N=M+ne*v[2]+F*v[1]+E*v[0]]-ie)*re;N=M+j*y[2]+k*y[1]+b*y[0],m.values[N]=ae+(R-ae)*ee}}}else for(j=0;j<p;++j){var oe;if((oe=p>1?C*(l-1)+j*O:.5*(C+T)*(l-1))<0||oe>l-1)for(M=0;M<u;M++)N=M+j*y[2]+k*y[1]+b*y[0],m.values[N]=a;else{var se=Math.round(oe),ce=Math.round(A);for(M=0;M<u;M++){var le=M+se*v[2]+ce*v[1]+E*v[0],ue=M+j*y[2]+k*y[1]+b*y[0];m.values[ue]=_[le]}}}}}return m.toTensor()},t.prototype.sparseToDense=function(e,t,n,r){var i=ri(0,e,n),a=i.sliceRank,o=i.numUpdates,s=i.sliceSize,c=i.strides,l=i.outputSize;return this.scatter(e,t,n,l,s,o,a,c,r,!1)},t.prototype.gatherND=function(e,t){var n=t.shape,r=n[n.length-1],i=Qr(e,t),a=i[0],o=i[1],s=i[2],c=i[3];if(o===0)return zn([],a,e.dtype);for(var l=new Ye([o,s],e.dtype),u=this.readSync(t.dataId),d=this.readSync(e.dataId),f=0;f<o;f++){for(var p=[],m=0,h=0;h<r;h++){var g=u[f*r+h];m+=g*c[h],p.push(g)}if(m<0||m>=e.size/s)throw Error(`Invalid indices: `+p+` does not index into `+e.shape);for(var _=0;_<s;_++)l.values[f*s+_]=d[m*s+_]}return l.toTensor().reshape(a)},t.prototype.scatterND=function(e,t,n){var r=ri(0,e,n),i=r.sliceRank,a=r.numUpdates,o=r.sliceSize,s=r.strides,c=r.outputSize,l=K(0);return this.scatter(e,t,n,c,o,a,i,s,l,!0)},t.prototype.fill=function(e,t,n){var r=ge(n||=Ee(t),R(e));return r.fill(t),B.makeTensor(r,e,n,this)},t.prototype.onesLike=function(e){if(e.dtype===`string`)throw Error(`onesLike is not supported for string tensors`);return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var t=ge(e.dtype,R(e.shape));return this.makeOutput(t,e.shape,e.dtype)},t.prototype.linspace=function(e,t,n){return Pi(e,t,n)},t.prototype.scatter=function(e,t,n,r,i,a,o,s,c,l){var u=[r/i,i],d=this.readSync(e.dataId),f=this.readSync(t.dataId);if(r===0)return zn([],n,t.dtype);var p=new Ye(u,t.dtype);p.values.fill(this.readSync(c.dataId)[0]);for(var m=0;m<a;m++){for(var h=[],g=0,_=0;_<o;_++){var v=d[m*o+_];h.push(v),g+=v*s[_]}if(g<0||g>=r/i)throw Error(`Invalid indices: `+h+` does not index into `+n);for(var y=0;y<i;y++)l?p.values[g*i+y]+=f[m*i+y]:p.values[g*i+y]=t.rank===0?f[0]:f[m*i+y]}return p.toTensor().reshape(n)},t}(gi);B.registerBackend(`cpu`,(function(){return new Bd}),1);for(var Vd=0,Hd=[{kernelName:`NonMaxSuppressionV5`,backendName:`cpu`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs,i=t,a=i.boxes,o=i.scores,s=r,c=s.maxOutputSize,l=s.iouThreshold,u=s.scoreThreshold,d=s.softNmsSigma,f=n;Y(a,`NonMaxSuppressionWithScore`);var p=Hi(f.data.get(a.dataId).values,f.data.get(o.dataId).values,c,l,u,d);return[p.selectedIndices,p.selectedScores]}},{kernelName:`Square`,backendName:`cpu`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t.x,i=n;Y(r,`square`);for(var a=i.data.get(r.dataId).values,o=new Float32Array(a.length),s=0;s<a.length;++s){var c=a[s];o[s]=c*c}return{dataId:i.write(o,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:Xs,backendName:`cpu`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t,i=r.a,a=r.b,o=n;Y([i,a],Xs);var s=o.data.get(i.dataId).values,c=o.data.get(a.dataId).values,l=function(e,t,n,r,i,a){var o=yi(e,t),s=o.length,c=ke(o),l=he(i,R(o)),u=e.length,d=t.length,f=ke(e),p=ke(t),m=_i(e,o),h=_i(t,o);if(m.length+h.length===0)for(var g=0;g<l.length;++g)l[g]=a(n[g%n.length],r[g%r.length]);else{var _=function(e){var t=ze(e,s,c),i=t.slice(-u);m.forEach((function(e){return i[e]=0}));var o=Re(i,u,f),g=t.slice(-d);h.forEach((function(e){return g[e]=0}));var _=Re(g,d,p);l[e]=a(n[o],r[_])};for(g=0;g<l.length;++g)_(g)}return[l,o]}(i.shape,a.shape,s,c,i.dtype,(function(e,t){var n=e-t;return n*n})),u=l[0],d=l[1];return{dataId:o.write(u,d,i.dtype),shape:d,dtype:i.dtype}}}];Vd<Hd.length;Vd++)N(Hd[Vd]);for(var Ud,Wd=function(e){this.variableNames=[`A`];var t=na(),n=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+`.0, `+n+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},Gd=function(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;var t=na(),n=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+`.0, `+n+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `},Kd=0,qd=[{kernelName:`FromPixels`,backendName:`webgl`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs,i=t.pixels,a=r.numChannels,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,c=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],l=c[0],u=c[1],d=[u,l],f=[u,l,a];(s||o)&&(Ud??=document.createElement(`canvas`).getContext(`2d`),Ud.canvas.width=l,Ud.canvas.height=u,Ud.drawImage(i,0,0,l,u),i=Ud.canvas);var p=n.makeTensorInfo(d,`int32`);n.texData.get(p.dataId).usage=_t.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(p.dataId),i);var m=E().getBool(`WEBGL_PACK`)?new Gd(f):new Wd(f),h=n.runWebGLProgram(m,[p],`int32`);return n.disposeData(p.dataId),h}},{kernelName:`NonMaxSuppressionV5`,backendName:`webgl`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs;Sn(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);var i=t,a=i.boxes,o=i.scores,s=r,c=s.maxOutputSize,l=s.iouThreshold,u=s.scoreThreshold,d=s.softNmsSigma,f=n,p=Hi(f.readSync(a.dataId),f.readSync(o.dataId),c,l,u,d);return[p.selectedIndices,p.selectedScores]}},{kernelName:`Square`,backendName:`webgl`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t.x,i=n,a=new _s(r.shape,`return x * x;`);return i.runWebGLProgram(a,[r],r.dtype)}},{kernelName:Xs,backendName:`webgl`,kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t,i=r.a,a=r.b,o=n,s=E().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new Ma(`return (a - b) * (a - b);`,i.shape,a.shape):new Aa(`return (a - b) * (a - b);`,i.shape,a.shape);return o.compileAndRun(s,[i,a])}}];Kd<qd.length;Kd++)N(qd[Kd]);for(var Jd=0,Yd=[{kernelName:`Square`,gradFunc:function(e,t){var n=t[0];return{x:function(){return e.mul(n.toFloat().mul(2))}}}},{kernelName:Xs,gradFunc:function(e,t){var n=t[0],r=t[1],i=K(2);return{a:function(){return fl(e,fl(i,_l(n,r)))},b:function(){return fl(e,fl(i,_l(r,n)))}}}}];Jd<Yd.length;Jd++)P(Yd[Jd]);var Xd=function(){function e(){}return e.prototype.fetch=function(e,t){return fetch(e,t)},e.prototype.now=function(){return performance.now()},e.prototype.encode=function(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Browser's encoder only supports utf-8, but got `+t);return this.textEncoder??=new TextEncoder,this.textEncoder.encode(e)},e.prototype.decode=function(e,t){return new TextDecoder(t).decode(e)},e}();E().get(`IS_BROWSER`)&&E().setPlatform(`browser`,new Xd);var Zd,Qd=function(){return v()},$d=function(){function e(){this.util=v(),this.textEncoder=new this.util.TextEncoder}return e.prototype.fetch=function(e,t){return E().global.fetch==null?(Zd??=Qd(),Zd(e,t)):E().global.fetch(e,t)},e.prototype.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6},e.prototype.encode=function(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Node built-in encoder only supports utf-8, but got `+t);return this.textEncoder.encode(e)},e.prototype.decode=function(e,t){return e.length===0?``:new this.util.TextDecoder(t).decode(e)},e}();E().get(`IS_NODE`)&&E().setPlatform(`node`,new $d);var ef={float32:4,int32:4,uint16:2,uint8:1,bool:1},tf=4;function nf(e,t){for(var n={},r=0,i=function(t){var i=t.name,a=t.dtype,o=t.shape,s=R(o),c=void 0;if(`quantization`in t){var l=t.quantization;if(l.dtype!==`uint8`&&l.dtype!==`uint16`)throw Error(`Weight `+t.name+` has unknown quantization dtype `+l.dtype+`. Supported quantization dtypes are: 'uint8' and 'uint16'.`);var u=ef[l.dtype],d=e.slice(r,r+s*u),f=l.dtype===`uint8`?new Uint8Array(d):new Uint16Array(d);if(a===`float32`)c=Float32Array.from(f,(function(e){return e*l.scale+l.min}));else{if(a!==`int32`)throw Error(`Unsupported dtype in weight '`+i+`': `+a);c=Int32Array.from(f,(function(e){return Math.round(e*l.scale+l.min)}))}r+=s*u}else if(a===`string`){var p=R(t.shape);c=[];for(var m=0;m<p;m++){var h=new Uint32Array(e.slice(r,r+tf))[0];r+=tf;var g=new Uint8Array(e.slice(r,r+h));c.push(g),r+=h}}else{var _=ef[a];if(d=e.slice(r,r+s*_),a===`float32`)c=new Float32Array(d);else if(a===`int32`)c=new Int32Array(d);else{if(a!==`bool`)throw Error(`Unsupported dtype in weight '`+i+`': `+a);c=new Uint8Array(d)}r+=s*_}n[i]=zn(c,o,a)},a=0,o=t;a<o.length;a++)i(o[a]);return n}function rf(e){if(e===null)throw Error(`Invalid input value: `+JSON.stringify(e));var t=0,n=[];e.forEach((function(e){if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: `+e.constructor.name)}));var r=new Uint8Array(t),i=0;return n.forEach((function(e){r.set(new Uint8Array(e.buffer),i),i+=e.byteLength})),r.buffer}var af=typeof Buffer<`u`&&(typeof Blob>`u`||typeof atob>`u`||typeof btoa>`u`);function of(e){return af?Buffer.byteLength(e):new Blob([e]).size}function sf(e){var t=0;e.forEach((function(e){t+=e.byteLength}));var n=new Uint8Array(t),r=0;return e.forEach((function(e){n.set(new Uint8Array(e),r),r+=e.byteLength})),n.buffer}function cf(e){for(e=e.trim();e.endsWith(`/`);)e=e.slice(0,e.length-1);var t=e.split(`/`);return t[t.length-1]}function lf(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`Expected JSON model topology, received ArrayBuffer.`);return{dateSaved:new Date,modelTopologyType:`JSON`,modelTopologyBytes:e.modelTopology==null?0:of(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:of(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}var uf=function(){function e(){this.saveRouters=[],this.loadRouters=[]}return e.getInstance=function(){return e.instance??=new e,e.instance},e.registerSaveRouter=function(t){e.getInstance().saveRouters.push(t)},e.registerLoadRouter=function(t){e.getInstance().loadRouters.push(t)},e.getSaveHandlers=function(t){return e.getHandlers(t,`save`)},e.getLoadHandlers=function(t,n){return e.getHandlers(t,`load`,n)},e.getHandlers=function(t,n,r){var i=[];return(n===`load`?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach((function(e){var n=e(t,r);n!==null&&i.push(n)})),i},e}(),df=`://`,ff=function(){function e(){this.managers={}}return e.getInstance=function(){return e.instance??=new e,e.instance},e.registerManager=function(t,n){I(t!=null,(function(){return`scheme must not be undefined or null.`})),t.endsWith(df)&&(t=t.slice(0,t.indexOf(df))),I(t.length>0,(function(){return`scheme must not be an empty string.`}));var r=e.getInstance();I(r.managers[t]==null,(function(){return`A model store manager is already registered for scheme '`+t+`'.`})),r.managers[t]=n},e.getManager=function(e){var t=this.getInstance().managers[e];if(t==null)throw Error(`Cannot find model manager for scheme '`+e+`'`);return t},e.getSchemes=function(){return Object.keys(this.getInstance().managers)},e}();function pf(e){if(e.indexOf(df)===-1)throw Error(`The url string provided does not contain a scheme. Supported schemes are: `+ff.getSchemes().join(`,`));return{scheme:e.split(df)[0],path:e.split(df)[1]}}function mf(e,t,n){return n===void 0&&(n=!1),S(this,void 0,void 0,(function(){var r,i,a,o,s,c,l,u,d;return C(this,(function(f){switch(f.label){case 0:return I(e!==t,(function(){return`Old path and new path are the same: '`+e+`'`})),I((r=uf.getLoadHandlers(e)).length>0,(function(){return`Copying failed because no load handler is found for source URL `+e+`.`})),I(r.length<2,(function(){return`Copying failed because more than one (`+r.length+`) load handlers for source URL `+e+`.`})),i=r[0],I((a=uf.getSaveHandlers(t)).length>0,(function(){return`Copying failed because no save handler is found for destination URL `+t+`.`})),I(a.length<2,(function(){return`Copying failed because more than one (`+r.length+`) save handlers for destination URL `+t+`.`})),o=a[0],s=pf(e).scheme,c=pf(e).path,l=s===pf(e).scheme,[4,i.load()];case 1:return u=f.sent(),n&&l?[4,ff.getManager(s).removeModel(c)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,o.save(u)];case 4:return d=f.sent(),!n||l?[3,6]:[4,ff.getManager(s).removeModel(c)];case 5:f.sent(),f.label=6;case 6:return[2,d.modelArtifactsInfo]}}))}))}var hf=`models_store`,gf=`model_info_store`;function _f(){if(!E().getBool(`IS_BROWSER`))throw Error(`Failed to obtain IndexedDB factory because the current environmentis not a web browser.`);var e=window||self,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw Error(`The current browser does not appear to support IndexedDB.`);return t}function vf(e){var t=e.result;t.createObjectStore(hf,{keyPath:`modelPath`}),t.createObjectStore(gf,{keyPath:`modelPath`})}var yf=function(){function e(e){if(this.indexedDB=_f(),e==null||!e)throw Error(`For IndexedDB, modelPath must not be null, undefined or empty.`);this.modelPath=e}return e.prototype.save=function(e){return S(this,void 0,void 0,(function(){return C(this,(function(t){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);return[2,this.databaseAction(this.modelPath,e)]}))}))},e.prototype.load=function(){return S(this,void 0,void 0,(function(){return C(this,(function(e){return[2,this.databaseAction(this.modelPath)]}))}))},e.prototype.databaseAction=function(e,t){var n=this;return new Promise((function(e,r){var i=n.indexedDB.open(`tensorflowjs`,1);i.onupgradeneeded=function(){return vf(i)},i.onsuccess=function(){var a=i.result;if(t==null){var o=a.transaction(hf,`readonly`),s=o.objectStore(hf).get(n.modelPath);s.onsuccess=function(){if(s.result==null)return a.close(),r(Error(`Cannot find model with path '`+n.modelPath+`' in IndexedDB.`));e(s.result.modelArtifacts)},s.onerror=function(e){return a.close(),r(s.error)},o.oncomplete=function(){return a.close()}}else{var c,l=lf(t),u=a.transaction(gf,`readwrite`),d=u.objectStore(gf),f=d.put({modelPath:n.modelPath,modelArtifactsInfo:l});f.onsuccess=function(){var i=(c=a.transaction(hf,`readwrite`)).objectStore(hf).put({modelPath:n.modelPath,modelArtifacts:t,modelArtifactsInfo:l});i.onsuccess=function(){return e({modelArtifactsInfo:l})},i.onerror=function(e){var t=(d=u.objectStore(gf)).delete(n.modelPath);t.onsuccess=function(){return a.close(),r(i.error)},t.onerror=function(e){return a.close(),r(i.error)}}},f.onerror=function(e){return a.close(),r(f.error)},u.oncomplete=function(){c==null?a.close():c.oncomplete=function(){return a.close()}}}},i.onerror=function(e){return r(i.error)}}))},e.URL_SCHEME=`indexeddb://`,e}(),bf=function(e){return E().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(yf.URL_SCHEME)?(t=e.slice(yf.URL_SCHEME.length),new yf(t)):null;var t};uf.registerSaveRouter(bf),uf.registerLoadRouter(bf);var xf=function(){function e(){this.indexedDB=_f()}return e.prototype.listModels=function(){return S(this,void 0,void 0,(function(){var e=this;return C(this,(function(t){return[2,new Promise((function(t,n){var r=e.indexedDB.open(`tensorflowjs`,1);r.onupgradeneeded=function(){return vf(r)},r.onsuccess=function(){var e=r.result,i=e.transaction(gf,`readonly`),a=i.objectStore(gf).getAll();a.onsuccess=function(){for(var e={},n=0,r=a.result;n<r.length;n++){var i=r[n];e[i.modelPath]=i.modelArtifactsInfo}t(e)},a.onerror=function(t){return e.close(),n(a.error)},i.oncomplete=function(){return e.close()}},r.onerror=function(e){return n(r.error)}}))]}))}))},e.prototype.removeModel=function(e){return S(this,void 0,void 0,(function(){var t=this;return C(this,(function(n){var r;return e=(r=e).startsWith(yf.URL_SCHEME)?r.slice(yf.URL_SCHEME.length):r,[2,new Promise((function(n,r){var i=t.indexedDB.open(`tensorflowjs`,1);i.onupgradeneeded=function(){return vf(i)},i.onsuccess=function(){var t,a=i.result,o=a.transaction(gf,`readwrite`),s=o.objectStore(gf),c=s.get(e);c.onsuccess=function(){if(c.result==null)return a.close(),r(Error(`Cannot find model with path '`+e+`' in IndexedDB.`));var i=s.delete(e),o=function(){var i=(t=a.transaction(hf,`readwrite`)).objectStore(hf).delete(e);i.onsuccess=function(){return n(c.result.modelArtifactsInfo)},i.onerror=function(e){return r(c.error)}};i.onsuccess=o,i.onerror=function(e){return o(),a.close(),r(c.error)}},c.onerror=function(e){return a.close(),r(c.error)},o.oncomplete=function(){t==null?a.close():t.oncomplete=function(){return a.close()}}},i.onerror=function(e){return r(i.error)}}))]}))}))},e}();if(E().getBool(`IS_BROWSER`))try{ff.registerManager(yf.URL_SCHEME,new xf)}catch{}var Sf=`/`,Cf=`tensorflowjs_models`,wf=`info`,Tf=`model_topology`,Ef=`weight_specs`,Df=`weight_data`,Of=`model_metadata`;function kf(e){return{info:[Cf,e,wf].join(Sf),topology:[Cf,e,Tf].join(Sf),weightSpecs:[Cf,e,Ef].join(Sf),weightData:[Cf,e,Df].join(Sf),modelMetadata:[Cf,e,Of].join(Sf)}}function Af(e){var t=e.split(Sf);if(t.length<3)throw Error(`Invalid key format: `+e);return t.slice(1,t.length-1).join(Sf)}var jf=function(){function e(e){if(!E().getBool(`IS_BROWSER`)||typeof window>`u`||window.localStorage===void 0)throw Error(`The current environment does not support local storage.`);if(this.LS=window.localStorage,e==null||!e)throw Error(`For local storage, modelPath must not be null, undefined or empty.`);this.modelPath=e,this.keys=kf(this.modelPath)}return e.prototype.save=function(e){return S(this,void 0,void 0,(function(){var t,n,r;return C(this,(function(i){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=lf(e);try{return this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(e){if(af)return Buffer.from(e).toString(`base64`);for(var t=new Uint8Array(e),n=``,r=0,i=t.length;r<i;r++)n+=String.fromCharCode(t[r]);return btoa(n)}(e.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata})),[2,{modelArtifactsInfo:r}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),Error(`Failed to save model '`+this.modelPath+`' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=`+r.modelTopologyBytes+`, weightSpecsBytes=`+r.weightSpecsBytes+`, weightDataBytes=`+r.weightDataBytes+`.`)}}))}))},e.prototype.load=function(){return S(this,void 0,void 0,(function(){var e,t,n,r,i,a,o;return C(this,(function(s){if((e=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw Error(`In local storage, there is no model with name '`+this.modelPath+`'`);if(e.modelTopologyType!==`JSON`)throw Error(`BrowserLocalStorage does not support loading non-JSON model topology yet.`);if(t={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw Error(`In local storage, the topology of model '`+this.modelPath+`' is missing.`);if(t.modelTopology=n,(r=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw Error(`In local storage, the weight specs of model '`+this.modelPath+`' are missing.`);if(t.weightSpecs=r,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),t.format=a.format,t.generatedBy=a.generatedBy,t.convertedBy=a.convertedBy,t.userDefinedMetadata=a.userDefinedMetadata),(o=this.LS.getItem(this.keys.weightData))==null)throw Error(`In local storage, the binary weight values of model '`+this.modelPath+`' are missing.`);return t.weightData=function(e){if(af){var t=Buffer.from(e,`base64`);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}for(var n=atob(e),r=new Uint8Array(n.length),i=0;i<n.length;++i)r.set([n.charCodeAt(i)],i);return r.buffer}(o),[2,t]}))}))},e.URL_SCHEME=`localstorage://`,e}(),Mf=function(e){return E().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(jf.URL_SCHEME)?(t=e.slice(jf.URL_SCHEME.length),new jf(t)):null;var t};uf.registerSaveRouter(Mf),uf.registerLoadRouter(Mf);var Nf=function(){function e(){I(E().getBool(`IS_BROWSER`),(function(){return`Current environment is not a web browser`})),I(typeof window>`u`||window.localStorage!==void 0,(function(){return`Current browser does not appear to support localStorage`})),this.LS=window.localStorage}return e.prototype.listModels=function(){return S(this,void 0,void 0,(function(){var e,t,n,r,i,a;return C(this,(function(o){for(e={},t=Cf+Sf,n=Sf+wf,r=0;r<this.LS.length;++r)(i=this.LS.key(r)).startsWith(t)&&i.endsWith(n)&&(a=Af(i),e[a]=JSON.parse(this.LS.getItem(i)));return[2,e]}))}))},e.prototype.removeModel=function(e){return S(this,void 0,void 0,(function(){var t,n;return C(this,(function(r){var i;if(e=(i=e).startsWith(jf.URL_SCHEME)?i.slice(jf.URL_SCHEME.length):i,t=kf(e),this.LS.getItem(t.info)==null)throw Error(`Cannot find model at path '`+e+`'`);return n=JSON.parse(this.LS.getItem(t.info)),this.LS.removeItem(t.info),this.LS.removeItem(t.topology),this.LS.removeItem(t.weightSpecs),this.LS.removeItem(t.weightData),[2,n]}))}))},e}();if(E().getBool(`IS_BROWSER`))try{ff.registerManager(jf.URL_SCHEME,new Nf)}catch{}var Pf=`model`,Ff=`.json`,If=`.weights.bin`;function Lf(e){return new Promise((function(e){return setTimeout(e)})).then(e)}var Rf=function(){function e(t){if(!E().getBool(`IS_BROWSER`))throw Error(`browserDownloads() cannot proceed because the current environment is not a browser.`);t.startsWith(e.URL_SCHEME)&&(t=t.slice(e.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Pf),this.modelTopologyFileName=t+Ff,this.weightDataFileName=t+If}return e.prototype.save=function(e){return S(this,void 0,void 0,(function(){var t,n,r,i,a,o;return C(this,(function(s){switch(s.label){case 0:if(typeof document>`u`)throw Error("Browser downloads are not supported in this environment since `document` is not present");if(t=window.URL.createObjectURL(new Blob([e.weightData],{type:`application/octet-stream`})),!(e.modelTopology instanceof ArrayBuffer))return[3,1];throw Error(`BrowserDownloads.save() does not support saving model topology in binary formats yet.`);case 1:return n=[{paths:[`./`+this.weightDataFileName],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:n},i=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:`application/json`})),(a=this.jsonAnchor==null?document.createElement(`a`):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,Lf((function(){return a.dispatchEvent(new MouseEvent(`click`))}))];case 2:return s.sent(),e.weightData==null?[3,4]:((o=this.weightDataAnchor==null?document.createElement(`a`):this.weightDataAnchor).download=this.weightDataFileName,o.href=t,[4,Lf((function(){return o.dispatchEvent(new MouseEvent(`click`))}))]);case 3:s.sent(),s.label=4;case 4:return[2,{modelArtifactsInfo:lf(e)}]}}))}))},e.URL_SCHEME=`downloads://`,e}(),zf=function(){function e(e){if(e==null||e.length<1)throw Error(`When calling browserFiles, at least 1 file is required, but received `+e);this.files=e}return e.prototype.load=function(){return S(this,void 0,void 0,(function(){var e,t,n=this;return C(this,(function(r){return e=this.files[0],t=this.files.slice(1),[2,new Promise((function(r,i){var a=new FileReader;a.onload=function(a){var o=JSON.parse(a.target.result),s=o.modelTopology;if(s!=null){t.length===0&&r({modelTopology:s});var c=o.weightsManifest;if(c!=null){var l;try{l=n.checkManifestAndWeightFiles(c,t)}catch(e){i(e);return}var u=[],d=[],f=[];c.forEach((function(e){e.paths.forEach((function(e){d.push(e),f.push(null)})),u.push.apply(u,e.weights)})),c.forEach((function(e){e.paths.forEach((function(e){var t=new FileReader;t.onload=function(t){var n=t.target.result,i=d.indexOf(e);f[i]=n,f.indexOf(null)===-1&&r({modelTopology:s,weightSpecs:u,weightData:sf(f),format:o.format,generatedBy:o.generatedBy,convertedBy:o.convertedBy,userDefinedMetadata:o.userDefinedMetadata})},t.onerror=function(t){return i(`Failed to weights data from file of path '`+e+`'.`)},t.readAsArrayBuffer(l[e])}))}))}else i(Error(`weightManifest field is missing from file `+e.name))}else i(Error(`modelTopology field is missing from file `+e.name))},a.onerror=function(t){return i(`Failed to read model topology and weights manifest JSON from file '`+e.name+`'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`)},a.readAsText(e)}))]}))}))},e.prototype.checkManifestAndWeightFiles=function(e,t){for(var n=[],r=t.map((function(e){return cf(e.name)})),i={},a=0,o=e;a<o.length;a++)o[a].paths.forEach((function(e){var a=cf(e);if(n.indexOf(a)!==-1)throw Error(`Duplicate file basename found in weights manifest: '`+a+`'`);if(n.push(a),r.indexOf(a)===-1)throw Error(`Weight file with basename '`+a+`' is not provided.`);i[e]=t[r.indexOf(a)]}));if(n.length!==t.length)throw Error(`Mismatch in the number of files in weights manifest (`+n.length+`) and the number of weight files provided (`+t.length+`).`);return i},e}();function Bf(e,t,n,r){(function(e){I(e!=null&&Array.isArray(e)&&e.length>0,(function(){return`promises must be a none empty array`}))})(e),function(e,t){I(e>=0&&e<=1,(function(){return`Progress fraction must be in range [0, 1], but got startFraction `+e})),I(t>=0&&t<=1,(function(){return`Progress fraction must be in range [0, 1], but got endFraction `+t})),I(t>=e,(function(){return`startFraction must be no more than endFraction, but got startFraction `+e+` and endFraction `+t}))}(n??=0,r??=1);var i=0;return Promise.all(e.map((function(a){return a.then((function(a){return t(n+ ++i/e.length*(r-n)),a})),a})))}function Vf(e,t){return S(this,void 0,void 0,(function(){var n,r,i,a,o,s,c,l,u;return C(this,(function(d){switch(d.label){case 0:return t??={},n=t.fetchFunc==null?E().platform.fetch:t.fetchFunc,r=e.map((function(e){return n(e,t.requestInit,{isBinary:!0})})),i=0,a=.5,t.onProgress==null?[4,Promise.all(r)]:[3,2];case 1:return o=d.sent(),[3,4];case 2:return[4,Bf(r,t.onProgress,i,a)];case 3:o=d.sent(),d.label=4;case 4:return s=o.map((function(e){return e.arrayBuffer()})),c=.5,l=1,t.onProgress==null?[4,Promise.all(s)]:[3,6];case 5:return u=d.sent(),[3,8];case 6:return[4,Bf(s,t.onProgress,c,l)];case 7:u=d.sent(),d.label=8;case 8:return[2,u]}}))}))}function Hf(e){var t=this;return function(n,r,i){return r===void 0&&(r=``),S(t,void 0,void 0,(function(){var t,a,o,s,c,l,u,d,f,p;return C(this,(function(m){switch(m.label){case 0:if(t=n.map((function(){return!1})),a={},o=i==null?[]:i.map((function(){return!1})),s=[],n.forEach((function(e,n){var r=0;e.weights.forEach((function(e){var c=ef[`quantization`in e?e.quantization.dtype:e.dtype]*R(e.shape),l=function(){t[n]=!0,a[n]??(a[n]=[]),a[n].push({manifestEntry:e,groupOffset:r,sizeBytes:c})};i==null?l():i.forEach((function(t,n){t===e.name&&(l(),o[n]=!0)})),s.push(e.name),r+=c}))})),!o.every((function(e){return e})))throw c=i.filter((function(e,t){return!o[t]})),Error(`Could not find weights in manifest with names: `+c.join(`, `)+`. 
Manifest JSON has weights with names: `+s.join(`, `)+`.`);return l=t.reduce((function(e,t,n){return t&&e.push(n),e}),[]),u=[],l.forEach((function(e){n[e].paths.forEach((function(e){var t=r+(r.endsWith(`/`)?``:`/`)+e;u.push(t)}))})),[4,e(u)];case 1:return d=m.sent(),f={},p=0,l.forEach((function(e){for(var t=n[e].paths.length,r=0,i=0;i<t;i++)r+=d[p+i].byteLength;for(var o=new ArrayBuffer(r),s=new Uint8Array(o),c=0,l=0;l<t;l++){var u=new Uint8Array(d[p+l]);s.set(u,c),c+=u.byteLength}a[e].forEach((function(e){var t=nf(o.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(var n in t)f[n]=t[n]})),p+=t})),[2,f]}}))}))}}uf.registerSaveRouter((function(e){return E().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Rf.URL_SCHEME)?function(e){return e===void 0&&(e=`model`),new Rf(e)}(e.slice(Rf.URL_SCHEME.length)):null}));var Uf=function(){function e(e,t){if(this.DEFAULT_METHOD=`POST`,t??={},this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,t.fetchFunc==null?this.fetch=E().platform.fetch:(I(typeof t.fetchFunc==`function`,(function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"})),this.fetch=t.fetchFunc),I(e!=null&&e.length>0,(function(){return`URL path for http must not be null, undefined or empty.`})),Array.isArray(e)&&I(e.length===2,(function(){return`URL paths for http must have a length of 2, (actual length is `+e.length+`).`})),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw Error(`requestInit is expected to have no pre-existing body, but has one.`);this.requestInit=t.requestInit||{}}return e.prototype.save=function(e){return S(this,void 0,void 0,(function(){var t,n,r,i;return C(this,(function(a){switch(a.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.`);return(t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:[`./model.weights.bin`],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata,weightsManifest:n},t.body.append(`model.json`,new Blob([JSON.stringify(r)],{type:`application/json`}),`model.json`),e.weightData!=null&&t.body.append(`model.weights.bin`,new Blob([e.weightData],{type:`application/octet-stream`}),`model.weights.bin`),[4,this.fetch(this.path,t)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:lf(e),responses:[i]}];throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status `+i.status+`.`)}}))}))},e.prototype.load=function(){return S(this,void 0,void 0,(function(){var e,t,n,r,i,a,o,s,c,l,u,d;return C(this,(function(f){switch(f.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(e=f.sent()).ok)throw Error(`Request to `+this.path+` failed with status code `+e.status+`. Please verify this URL points to the model JSON of the model to load.`);f.label=2;case 2:return f.trys.push([2,4,,5]),[4,e.json()];case 3:return t=f.sent(),[3,5];case 4:throw f.sent(),n=`Failed to parse model JSON of response from `+this.path+`.`,this.path.endsWith(`.pb`)?n+=` Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.`:n+=` Please make sure the server is serving valid JSON for this request.`,Error(n);case 5:if(r=t.modelTopology,i=t.weightsManifest,a=t.generatedBy,o=t.convertedBy,s=t.format,c=t.userDefinedMetadata,r==null&&i==null)throw Error(`The JSON from HTTP path `+this.path+` contains neither model topology or manifest for weights.`);return i==null?[3,7]:[4,this.loadWeights(i)];case 6:d=f.sent(),l=d[0],u=d[1],f.label=7;case 7:return[2,{modelTopology:r,weightSpecs:l,weightData:u,userDefinedMetadata:c,generatedBy:a,convertedBy:o,format:s}]}}))}))},e.prototype.loadWeights=function(e){return S(this,void 0,void 0,(function(){var t,n,r,i,a,o,s,c,l,u,d;return C(this,(function(f){switch(f.label){case 0:for(t=Array.isArray(this.path)?this.path[1]:this.path,n=function(e){var t=e.lastIndexOf(`/`),n=e.lastIndexOf(`?`),r=e.substring(0,t),i=n>t?e.substring(n):``;return[r+`/`,i]}(t),r=n[0],i=n[1],a=this.weightPathPrefix||r,o=[],s=0,c=e;s<c.length;s++)l=c[s],o.push.apply(o,l.weights);return u=[],e.forEach((function(e){e.paths.forEach((function(e){u.push(a+e+i)}))})),[4,Vf(u,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return d=f.sent(),[2,[o,sf(d)]]}}))}))},e.URL_SCHEME_REGEX=/^https?:\/\//,e}();function Wf(e){return e.match(Uf.URL_SCHEME_REGEX)!=null}var Gf=function(e,t){return typeof fetch>`u`?null:(Array.isArray(e)?e.every((function(e){return Wf(e)})):Wf(e))?Kf(e,{onProgress:t}):null};function Kf(e,t){return new Uf(e,t)}uf.registerSaveRouter(Gf),uf.registerLoadRouter(Gf);var qf=function(){function e(e){this.modelArtifacts=e}return e.prototype.load=function(){return S(this,void 0,void 0,(function(){return C(this,(function(e){return[2,this.modelArtifacts]}))}))},e}(),Jf=function(){function e(e){this.saveHandler=e}return e.prototype.save=function(e){return S(this,void 0,void 0,(function(){return C(this,(function(t){return[2,this.saveHandler(e)]}))}))},e}(),Yf=Object.freeze({browserFiles:function(e){return new zf(e)},browserHTTPRequest:function(e,t){return Kf(e,t)},concatenateArrayBuffers:sf,decodeWeights:nf,encodeWeights:function(e,t){return S(this,void 0,void 0,(function(){var n,r,i,a,o,s=this;return C(this,(function(c){switch(c.label){case 0:for(n=[],r=[],i=Array.isArray(e)?e.map((function(e){return e.name})):Object.keys(e),a=function(a){var o=i[a],c=Array.isArray(e)?e[a].tensor:e[o];if(c.dtype!==`float32`&&c.dtype!==`int32`&&c.dtype!==`bool`&&c.dtype!==`string`)throw Error(`Unsupported dtype in weight '`+o+`': `+c.dtype);var l={name:o,shape:c.shape,dtype:c.dtype};if(c.dtype===`string`){var u=new Promise((function(e){return S(s,void 0,void 0,(function(){var t,n,r,i,a,o,s;return C(this,(function(l){switch(l.label){case 0:return[4,c.bytes()];case 1:for(t=l.sent(),n=t.reduce((function(e,t){return e+t.length}),0)+tf*t.length,r=new Uint8Array(n),i=0,a=0;a<t.length;a++)o=t[a],s=new Uint8Array(new Uint32Array([o.length]).buffer),r.set(s,i),i+=tf,r.set(o,i),i+=o.length;return e(r),[2]}}))}))}));r.push(u)}else r.push(c.data());t!=null&&(l.group=t),n.push(l)},o=0;o<i.length;++o)a(o);return[4,Promise.all(r)];case 1:return[2,{data:rf(c.sent()),specs:n}]}}))}))},fromMemory:function(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new qf(e):(console.warn(`Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.`),new qf({modelTopology:e})):(console.warn(`Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.`),new qf({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))},getLoadHandlers:function(e,t){return uf.getLoadHandlers(e,t)},getModelArtifactsInfoForJSON:lf,getSaveHandlers:function(e){return uf.getSaveHandlers(e)},http:Kf,isHTTPScheme:Wf,loadWeights:function(e,t,n,r){return t===void 0&&(t=``),S(this,void 0,void 0,(function(){return C(this,(function(i){return[2,Hf((function(e){return Vf(e,{requestInit:r})}))(e,t,n)]}))}))},registerLoadRouter:function(e){return uf.registerLoadRouter(e)},registerSaveRouter:function(e){return uf.registerSaveRouter(e)},weightsLoaderFactory:Hf,withSaveHandler:function(e){return new Jf(e)},copyModel:function(e,t){return S(this,void 0,void 0,(function(){return C(this,(function(n){return[2,mf(e,t,!1)]}))}))},listModels:function(){return S(this,void 0,void 0,(function(){var e,t,n,r,i,a,o;return C(this,(function(s){switch(s.label){case 0:e=ff.getSchemes(),t={},n=0,r=e,s.label=1;case 1:return n<r.length?(i=r[n],[4,ff.getManager(i).listModels()]):[3,4];case 2:for(o in a=s.sent())t[i+df+o]=a[o];s.label=3;case 3:return n++,[3,1];case 4:return[2,t]}}))}))},moveModel:function(e,t){return S(this,void 0,void 0,(function(){return C(this,(function(n){return[2,mf(e,t,!0)]}))}))},removeModel:function(e){return S(this,void 0,void 0,(function(){var t;return C(this,(function(n){return t=pf(e),[2,ff.getManager(t.scheme).removeModel(t.path)]}))}))}}),Xf,Zf=G({confusionMatrix_:function(e,t,n){var r=W(e,`labels`,`confusionMatrix`),i=W(t,`predictions`,`confusionMatrix`);I(n==null||n>0&&Number.isInteger(n),(function(){return`If provided, numClasses must be a positive integer, but got `+n})),I(r.rank===1,(function(){return`Expected the rank of labels to be 1, but got `+r.rank})),I(i.rank===1,(function(){return`Expected the rank of predictions to be 1, but got `+i.rank})),I(r.shape[0]===i.shape[0],(function(){return`Mismatch in the number of examples: `+r.shape[0]+` vs. `+i.shape[0]+`. Labels and predictions should have the same number of elements.`})),I(n>0&&Number.isInteger(n),(function(){return`numClasses is required to be a positive integer, but got `+n}));var a=kr(r.asType(`int32`),n),o=kr(i.asType(`int32`),n);return a.transpose().matMul(o).asType(`int32`)}});Object.freeze({confusionMatrix:Zf});var Qf=G({fromPixels_:function(e,t){if(t===void 0&&(t=3),t>4)throw Error(`Cannot construct Tensor with more than 4 channels from pixels.`);if(e==null)throw Error(`pixels passed to tf.browser.fromPixels() can not be null`);var n=!1,r=!1,i=!1,a=!1,o=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<`u`&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)i=!0;else if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)a=!0;else{if(e.getContext==null)throw Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was `+e.constructor.name);o=!0}if(i&&i&&e.readyState<2)throw Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(A(`FromPixels`,B.backendName)!=null)return B.runKernel(`FromPixels`,{pixels:e},{numChannels:t});var s,c,l=i?[e.videoWidth,e.videoHeight]:[e.width,e.height],u=l[0],d=l[1];if(o?s=e.getContext(`2d`).getImageData(0,0,u,d).data:r||n?s=e.data:(a||i)&&(Xf??=document.createElement(`canvas`).getContext(`2d`),Xf.canvas.width=u,Xf.canvas.height=d,Xf.drawImage(e,0,0,u,d),s=Xf.getImageData(0,0,u,d).data),t===4)c=new Int32Array(s);else{var f=u*d;c=new Int32Array(f*t);for(var p=0;p<f;p++)for(var m=0;m<t;++m)c[p*t+m]=s[4*p+m]}return Un(c,[d,u,t],`int32`)}}),$f=Object.freeze({toPixels:function(e,t){return S(this,void 0,void 0,(function(){var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,w,T;return C(this,(function(C){switch(C.label){case 0:if(n=W(e,`img`,`toPixels`),e instanceof Qe||(n=n.toInt()),n.rank!==2&&n.rank!==3)throw Error(`toPixels only supports rank 2 or 3 tensors, got rank `+n.rank+`.`);if(r=n.shape.slice(0,2),i=r[0],a=r[1],(o=n.rank===2?1:n.shape[2])>4||o===2)throw Error(`toPixels only supports depth of size 1, 3 or 4 but got `+o);return[4,n.data()];case 1:return s=C.sent(),c=n.min(),l=n.max(),[4,Promise.all([c.data(),l.data()])];case 2:if(u=C.sent(),d=u[0],f=u[1],p=d[0],m=f[0],c.dispose(),l.dispose(),n.dtype===`float32`){if(p<0||m>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [`+p+` - `+m+`].`)}else{if(n.dtype!==`int32`)throw Error(`Unsupported type for toPixels: `+n.dtype+`. Please use float32 or int32 tensors.`);if(p<0||m>255)throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [`+p+` - `+m+`].`)}for(h=n.dtype===`float32`?255:1,g=new Uint8ClampedArray(a*i*4),_=0;_<i*a;++_)v=void 0,y=void 0,b=void 0,x=void 0,o===1?(v=s[_]*h,y=s[_]*h,b=s[_]*h,x=255):o===3?(v=s[3*_]*h,y=s[3*_+1]*h,b=s[3*_+2]*h,x=255):o===4&&(v=s[4*_]*h,y=s[4*_+1]*h,b=s[4*_+2]*h,x=s[4*_+3]*h),g[(S=4*_)+0]=Math.round(v),g[S+1]=Math.round(y),g[S+2]=Math.round(b),g[S+3]=Math.round(x);return t!=null&&(t.width=a,t.height=i,w=t.getContext(`2d`),T=new ImageData(g,a,i),w.putImageData(T,0,0)),n!==e&&n.dispose(),[2,g]}}))}))},fromPixels:Qf}),ep=function(){function e(){}return e.prototype.getClassName=function(){return this.constructor.className},e.fromConfig=function(e,t){return new e(t)},e}(),tp=function(){function e(){this.classNameMap={}}return e.getMap=function(){return e.instance??=new e,e.instance},e.register=function(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig]},e}();function np(e){I(e.className!=null,(function(){return`Class being registered does not have the static className property defined.`})),I(typeof e.className==`string`,(function(){return`className is required to be a string, but got type `+typeof e.className})),I(e.className.length>0,(function(){return`Class being registered has an empty-string as its className, which is disallowed.`})),tp.register(e)}Object.freeze({Serializable:ep,SerializationMap:tp,registerClass:np});var rp=.001,ip=.1;function ap(){return B.backend.floatPrecision()===32?rp:ip}function op(e,t,n){var r=!0;if((be(e)||be(t))&&(r=!1),be(e)&&be(t)&&(r=!0),r){var i=e.constructor.name,a=t.constructor.name;if(i!==a)throw Error(`Arrays are of different type. Actual: `+i+`. Expected: `+a)}if(Array.isArray(e)&&Array.isArray(t)){var o=Cn(e),s=Cn(t);if(!oe(o,s))throw Error(`Arrays have different shapes. Actual: [`+o+`]. Expected: [`+s+`]`)}var c=be(e)?e:ae(e),l=be(t)?t:ae(t);if(c.length!==l.length)throw Error(`Arrays have different lengths actual: `+c.length+` vs expected: `+l.length+`.
Actual:   `+c+`.
Expected: `+l+`.`);for(var u=0;u<l.length;++u){var d=c[u],f=l[u];if(!n(d,f))throw Error(`Arrays differ: actual[`+u+`] = `+d+`, expected[`+u+`] = `+f+`.
Actual:   `+c+`.
Expected: `+l+`.`)}}function sp(e,t,n){return!isFinite(e)&&!isFinite(t)||!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}Object.freeze({TEST_EPSILON_FLOAT16:ip,expectArraysClose:function(e,t,n){return n??=ap(),op(e,t,(function(e,t){return sp(e,t,n)}))},testEpsilon:ap,expectPromiseToFail:function(e,t){e().then((function(){return t.fail()}),(function(){return t()}))},expectArraysEqual:function(e,t){var n=typeof t==`string`||typeof t==`number`||typeof t==`boolean`?[t]:t;return Ce(e)||Ce(e[0])||Ce(t)||Ce(t[0])?op(e,n,(function(e,t){return e==t})):op(e,t,(function(e,t){return sp(e,t,0)}))},expectNumbersClose:function(e,t,n){if(n??=ap(),!sp(e,t,n))throw Error(`Numbers differ: actual === `+e+`, expected === `+t)},expectValuesInRange:function(e,t,n){for(var r=0;r<e.length;r++)if(e[r]<t||e[r]>n)throw Error(`Value out of range:`+e[r]+` low: `+t+`, high: `+n)},expectArrayBuffersEqual:function(e,t){expect(new Float32Array(e)).toEqual(new Float32Array(t))}}),Object.freeze({gpgpu_util:Ao,webgl_util:vn,forceHalfFloat:function(){E().set(`WEBGL_FORCE_F16_TEXTURES`,!0)},MathBackendWebGL:Js,setWebGLContext:xt,GPGPUContext:jo});var cp=function(e){function t(){return e!==null&&e.apply(this,arguments)||this}return x(t,e),t.prototype.minimize=function(e,t,n){t===void 0&&(t=!1);var r=this.computeGradients(e,n),i=r.value,a=r.grads;if(n!=null){var o=n.map((function(e){return{name:e.name,tensor:a[e.name]}}));this.applyGradients(o)}else this.applyGradients(a);return bn(a),t?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_??=0,this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,t){return di(e,t)},t.prototype.dispose=function(){this.iterations_!=null&&bn(this.iterations_)},t.prototype.saveIterations=function(){return S(this,void 0,void 0,(function(){return C(this,(function(e){return this.iterations_??=0,[2,{name:`iter`,tensor:K(this.iterations_,`int32`)}]}))}))},t.prototype.getWeights=function(){return S(this,void 0,void 0,(function(){return C(this,(function(e){throw Error(`getWeights() is not implemented for this optimizer yet.`)}))}))},t.prototype.setWeights=function(e){return S(this,void 0,void 0,(function(){return C(this,(function(e){throw Error(`setWeights() is not implemented for this optimizer class `+this.getClassName())}))}))},t.prototype.extractIterations=function(e){return S(this,void 0,void 0,(function(){var t;return C(this,(function(n){switch(n.label){case 0:return t=this,[4,e[0].tensor.data()];case 1:return t.iterations_=n.sent()[0],[2,e.slice(1)]}}))}))},t}(ep);Object.defineProperty(cp,Symbol.hasInstance,{value:function(e){return e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null}});var lp=function(e){function t(t,n,r){r===void 0&&(r=null);var i=e.call(this)||this;return i.learningRate=t,i.rho=n,i.epsilon=r,i.accumulatedGrads=[],i.accumulatedUpdates=[],r??(i.epsilon=B.backend.epsilon()),i}return x(t,e),t.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map((function(e){return e.name})):Object.keys(e)).forEach((function(n,r){var i=B.registeredVariables[n];t.accumulatedGrads[r]??(t.accumulatedGrads[r]={originalName:n+`/accum_grad`,variable:U((function(){return er(i).variable(!1)}))}),t.accumulatedUpdates[r]??(t.accumulatedUpdates[r]={originalName:n+`/accum_var`,variable:U((function(){return er(i).variable(!1)}))});var a=Array.isArray(e)?e[r].tensor:e[n];if(a!=null){var o=t.accumulatedGrads[r].variable,s=t.accumulatedUpdates[r].variable;U((function(){var e=o.mul(t.rho).add(a.square().mul(1-t.rho)),n=s.add(t.epsilon).sqrt().div(o.add(t.epsilon).sqrt()).mul(a),r=s.mul(t.rho).add(n.square().mul(1-t.rho));o.assign(e),s.assign(r);var c=n.mul(-t.learningRate).add(i);i.assign(c)}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(bn(this.accumulatedGrads.map((function(e){return e.variable}))),bn(this.accumulatedUpdates.map((function(e){return e.variable}))))},t.prototype.getWeights=function(){return S(this,void 0,void 0,(function(){var e;return C(this,(function(t){switch(t.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map((function(e){return{name:e.originalName,tensor:e.variable}})))]}}))}))},t.prototype.setWeights=function(e){return S(this,void 0,void 0,(function(){var t;return C(this,(function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),t=e.length/2,this.accumulatedGrads=e.slice(0,t).map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),this.accumulatedUpdates=e.slice(t,2*t).map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},t.className=`Adadelta`,t}(cp);np(lp);var up=function(e){function t(t,n){n===void 0&&(n=.1);var r=e.call(this)||this;return r.learningRate=t,r.initialAccumulatorValue=n,r.accumulatedGrads=[],r}return x(t,e),t.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map((function(e){return e.name})):Object.keys(e)).forEach((function(n,r){var i=B.registeredVariables[n];t.accumulatedGrads[r]??(t.accumulatedGrads[r]={originalName:n+`/accumulator`,variable:U((function(){return Xn(i.shape,t.initialAccumulatorValue).variable(!1)}))});var a=Array.isArray(e)?e[r].tensor:e[n];if(a!=null){var o=t.accumulatedGrads[r].variable;U((function(){var e=o.add(a.square());o.assign(e);var n=a.div(e.add(B.backend.epsilon()).sqrt()).mul(-t.learningRate).add(i);i.assign(n)}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&bn(this.accumulatedGrads.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return S(this,void 0,void 0,(function(){return C(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map((function(e){return{name:e.originalName,tensor:e.variable}})))]}}))}))},t.prototype.setWeights=function(e){return S(this,void 0,void 0,(function(){return C(this,(function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulatedGrads=e.map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},t.className=`Adagrad`,t}(cp);np(up);var dp=function(e){function t(t,n,r,i){i===void 0&&(i=null);var a=e.call(this)||this;return a.learningRate=t,a.beta1=n,a.beta2=r,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],U((function(){a.accBeta1=K(n).variable(),a.accBeta2=K(r).variable()})),i??(a.epsilon=B.backend.epsilon()),a}return x(t,e),t.prototype.applyGradients=function(e){var t=this,n=Array.isArray(e)?e.map((function(e){return e.name})):Object.keys(e);U((function(){var r=_l(1,t.accBeta1),i=_l(1,t.accBeta2);n.forEach((function(n,a){var o=B.registeredVariables[n];t.accumulatedFirstMoment[a]??(t.accumulatedFirstMoment[a]={originalName:n+`/m`,variable:U((function(){return er(o).variable(!1)}))}),t.accumulatedSecondMoment[a]??(t.accumulatedSecondMoment[a]={originalName:n+`/v`,variable:U((function(){return er(o).variable(!1)}))});var s=Array.isArray(e)?e[a].tensor:e[n];if(s!=null){var c=t.accumulatedFirstMoment[a].variable,l=t.accumulatedSecondMoment[a].variable,u=c.mul(t.beta1).add(s.mul(1-t.beta1)),d=l.mul(t.beta2).add(s.square().mul(1-t.beta2)),f=u.div(r),p=d.div(i);c.assign(u),l.assign(d);var m=f.div(p.sqrt().add(t.epsilon)).mul(-t.learningRate).add(o);o.assign(m)}})),t.accBeta1.assign(t.accBeta1.mul(t.beta1)),t.accBeta2.assign(t.accBeta2.mul(t.beta2))})),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&bn(this.accumulatedFirstMoment.map((function(e){return e.variable}))),this.accumulatedSecondMoment!=null&&bn(this.accumulatedSecondMoment.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return S(this,void 0,void 0,(function(){var e;return C(this,(function(t){switch(t.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map((function(e){return{name:e.originalName,tensor:e.variable}})))]}}))}))},t.prototype.setWeights=function(e){return S(this,void 0,void 0,(function(){var t,n=this;return C(this,(function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),U((function(){n.accBeta1.assign(ml(n.beta1,n.iterations_+1)),n.accBeta2.assign(ml(n.beta2,n.iterations_+1))})),t=e.length/2,this.accumulatedFirstMoment=e.slice(0,t).map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),this.accumulatedSecondMoment=e.slice(t,2*t).map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},t.className=`Adam`,t}(cp);np(dp);var fp=function(e){function t(t,n,r,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var o=e.call(this)||this;return o.learningRate=t,o.beta1=n,o.beta2=r,o.epsilon=i,o.decay=a,o.accumulatedFirstMoment=[],o.accumulatedWeightedInfNorm=[],U((function(){o.iteration=K(0).variable(),o.accBeta1=K(n).variable()})),i??(o.epsilon=B.backend.epsilon()),o}return x(t,e),t.prototype.applyGradients=function(e){var t=this,n=Array.isArray(e)?e.map((function(e){return e.name})):Object.keys(e);U((function(){var r=_l(1,t.accBeta1),i=nl(-t.learningRate,t.iteration.mul(t.decay).add(1));n.forEach((function(n,a){var o=B.registeredVariables[n];t.accumulatedFirstMoment[a]??(t.accumulatedFirstMoment[a]={originalName:n+`/m`,variable:er(o).variable(!1)}),t.accumulatedWeightedInfNorm[a]??(t.accumulatedWeightedInfNorm[a]={originalName:n+`/v`,variable:er(o).variable(!1)});var s=Array.isArray(e)?e[a].tensor:e[n];if(s!=null){var c=t.accumulatedFirstMoment[a].variable,l=t.accumulatedWeightedInfNorm[a].variable,u=c.mul(t.beta1).add(s.mul(1-t.beta1)),d=l.mul(t.beta2),f=s.abs(),p=d.maximum(f);c.assign(u),l.assign(p);var m=i.div(r).mul(u.div(p.add(t.epsilon))).add(o);o.assign(m)}})),t.iteration.assign(t.iteration.add(1)),t.accBeta1.assign(t.accBeta1.mul(t.beta1))})),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&bn(this.accumulatedFirstMoment.map((function(e){return e.variable}))),this.accumulatedWeightedInfNorm!=null&&bn(this.accumulatedWeightedInfNorm.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return S(this,void 0,void 0,(function(){return C(this,(function(e){throw Error(`getWeights() is not implemented for Adamax yet.`)}))}))},t.prototype.setWeights=function(e){return S(this,void 0,void 0,(function(){return C(this,(function(e){throw Error(`setWeights() is not implemented for Adamax yet.`)}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},t.className=`Adamax`,t}(cp);np(fp);var pp=function(e){function t(t){var n=e.call(this)||this;return n.learningRate=t,n.setLearningRate(t),n}return x(t,e),t.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map((function(e){return e.name})):Object.keys(e)).forEach((function(n,r){var i=Array.isArray(e)?e[r].tensor:e[n];if(i!=null){var a=B.registeredVariables[n];U((function(){var e=t.c.mul(i).add(a);a.assign(e)}))}})),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=xn(K(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return S(this,void 0,void 0,(function(){return C(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}}))}))},t.prototype.setWeights=function(e){return S(this,void 0,void 0,(function(){return C(this,(function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=t.sent()).length!==0)throw Error(`SGD optimizer does not have settable weights.`);return[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,t){return new e(t.learningRate)},t.className=`SGD`,t}(cp);np(pp);var mp=function(e){function t(t,n,r){r===void 0&&(r=!1);var i=e.call(this,t)||this;return i.learningRate=t,i.momentum=n,i.useNesterov=r,i.accumulations=[],i.m=K(i.momentum),i}return x(t,e),t.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map((function(e){return e.name})):Object.keys(e)).forEach((function(n,r){var i=B.registeredVariables[n];t.accumulations[r]??(t.accumulations[r]={originalName:n+`/momentum`,variable:U((function(){return er(i).variable(!1)}))});var a=t.accumulations[r].variable,o=Array.isArray(e)?e[r].tensor:e[n];o!=null&&U((function(){var e,n=t.m.mul(a).add(o);e=t.useNesterov?t.c.mul(o.add(n.mul(t.m))).add(i):t.c.mul(n).add(i),a.assign(n),i.assign(e)}))})),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&bn(this.accumulations.map((function(e){return e.variable})))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return S(this,void 0,void 0,(function(){return C(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map((function(e){return{name:e.originalName,tensor:e.variable}})))]}}))}))},t.prototype.setWeights=function(e){return S(this,void 0,void 0,(function(){return C(this,(function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulations=e.map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},t.className=`Momentum`,t}(pp);np(mp);var hp=function(e){function t(t,n,r,i,a){n===void 0&&(n=.9),r===void 0&&(r=0),i===void 0&&(i=null),a===void 0&&(a=!1);var o=e.call(this)||this;if(o.learningRate=t,o.decay=n,o.momentum=r,o.epsilon=i,o.accumulatedMeanSquares=[],o.accumulatedMoments=[],o.accumulatedMeanGrads=[],o.centered=a,i??(o.epsilon=B.backend.epsilon()),t==null)throw Error(`learningRate for RMSPropOptimizer must be defined.`);return o}return x(t,e),t.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map((function(e){return e.name})):Object.keys(e)).forEach((function(n,r){var i=B.registeredVariables[n];t.accumulatedMeanSquares[r]??(t.accumulatedMeanSquares[r]={originalName:n+`/rms`,variable:U((function(){return er(i).variable(!1)}))}),t.accumulatedMoments[r]??(t.accumulatedMoments[r]={originalName:n+`/momentum`,variable:U((function(){return er(i).variable(!1)}))}),t.accumulatedMeanGrads[r]==null&&t.centered&&(t.accumulatedMeanGrads[r]={originalName:n+`/mg`,variable:U((function(){return er(i).variable(!1)}))});var a=Array.isArray(e)?e[r].tensor:e[n];if(a!=null){var o=t.accumulatedMeanSquares[r].variable,s=t.accumulatedMoments[r].variable;U((function(){var e=o.mul(t.decay).add(a.square().mul(1-t.decay));if(t.centered){var n=t.accumulatedMeanGrads[r].variable,c=n.mul(t.decay).add(a.mul(1-t.decay)),l=s.mul(t.momentum).add(a.mul(t.learningRate).div(e.sub(c.square().add(t.epsilon)).sqrt()));o.assign(e),n.assign(c),s.assign(l);var u=i.sub(l);i.assign(u)}else{var d=o.mul(t.decay).add(a.square().mul(1-t.decay));l=s.mul(t.momentum).add(a.mul(t.learningRate).div(d.add(t.epsilon).sqrt())),o.assign(d),s.assign(l),u=i.sub(l),i.assign(u)}}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&bn(this.accumulatedMeanSquares.map((function(e){return e.variable}))),this.accumulatedMeanGrads!=null&&this.centered&&bn(this.accumulatedMeanGrads.map((function(e){return e.variable}))),this.accumulatedMoments!=null&&bn(this.accumulatedMoments.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return S(this,void 0,void 0,(function(){var e;return C(this,(function(t){switch(t.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map((function(e){return{name:e.originalName,tensor:e.variable}})))]}}))}))},t.prototype.setWeights=function(e){return S(this,void 0,void 0,(function(){var t;return C(this,(function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),t=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,t).map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),this.accumulatedMoments=e.slice(t,2*t).map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map((function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}))),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},t.className=`RMSProp`,t}(cp);np(hp);var gp=function(){function e(){}return e.sgd=function(e){return new pp(e)},e.momentum=function(e,t,n){return n===void 0&&(n=!1),new mp(e,t,n)},e.rmsprop=function(e,t,n,r,i){return t===void 0&&(t=.9),n===void 0&&(n=0),r===void 0&&(r=null),i===void 0&&(i=!1),new hp(e,t,n,r,i)},e.adam=function(e,t,n,r){return e===void 0&&(e=.001),t===void 0&&(t=.9),n===void 0&&(n=.999),r===void 0&&(r=null),new dp(e,t,n,r)},e.adadelta=function(e,t,n){return e===void 0&&(e=.001),t===void 0&&(t=.95),n===void 0&&(n=null),new lp(e,t,n)},e.adamax=function(e,t,n,r,i){return e===void 0&&(e=.002),t===void 0&&(t=.9),n===void 0&&(n=.999),r===void 0&&(r=null),i===void 0&&(i=0),new fp(e,t,n,r,i)},e.adagrad=function(e,t){return t===void 0&&(t=.1),new up(e,t)},e}();gp.sgd,gp.momentum,gp.adadelta,gp.adagrad,gp.rmsprop,gp.adamax,gp.adam,Qe.prototype.squaredDifference=function(e){return Zs(this,e)},z=Rd;function _p(e,t,n){if(n===void 0&&(n=!1),e.beginPath(),t.slice(1).forEach(function(n,r){var i=n.x,a=n.y,o=t[r];e.moveTo(o.x,o.y),e.lineTo(i,a)}),n){var r=t[t.length-1],i=t[0];if(!r||!i)return;e.moveTo(r.x,r.y),e.lineTo(i.x,i.y)}e.stroke()}var vp=function(e,t){return vp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},vp(e,t)};function X(e,t){vp(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var yp=function(){return yp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},yp.apply(this,arguments)};function Z(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}function Q(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o={next:s(0),throw:s(1),return:s(2)};return typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(r)throw TypeError(`Generator is already executing.`);for(;n;)try{if(r=1,i&&(a=o[0]&2?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[o[0]&2,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}function bp(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)r[i]=a[o];return r}var xp=function(){function e(e,t){if(!Np(e)||!Np(t))throw Error(`Dimensions.constructor - expected width and height to be valid numbers, instead have `+JSON.stringify({width:e,height:t}));this._width=e,this._height=t}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),e.prototype.reverse=function(){return new e(1/this.width,1/this.height)},e}();function Sp(e,t){return e instanceof Qe&&e.shape.length===t}function Cp(e){return Sp(e,2)}function wp(e){return Sp(e,3)}function Tp(e){return Sp(e,4)}function Ep(e){return e%1!=0}function Dp(e){return e%2==0}function Op(e,t){t===void 0&&(t=2);var n=10**t;return Math.floor(e*n)/n}function kp(e){return e&&e.width&&e.height}function Ap(e,t){var n=e.width,r=e.height,i=t/Math.max(r,n);return new xp(Math.round(n*i),Math.round(r*i))}function jp(e){return e.reduce(function(e,t){return e.add(t)},new Fp(0,0)).div(new Fp(e.length,e.length))}function Mp(e,t,n){return Array(e).fill(0).map(function(e,r){return t+r*n})}function Np(e){return!!e&&e!==1/0&&e!==-1/0&&!isNaN(e)||e===0}function Pp(e){return Np(e)&&0<=e&&e<=1}var Fp=function(){function e(e,t){this._x=e,this._y=t}return Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.sub=function(t){return new e(this.x-t.x,this.y-t.y)},e.prototype.mul=function(t){return new e(this.x*t.x,this.y*t.y)},e.prototype.div=function(t){return new e(this.x/t.x,this.y/t.y)},e.prototype.abs=function(){return new e(Math.abs(this.x),Math.abs(this.y))},e.prototype.magnitude=function(){return Math.sqrt(this.x**2+this.y**2)},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e}(),Ip=function(){function e(t,n){n===void 0&&(n=!0);var r=t||{},i=[r.left,r.top,r.right,r.bottom].every(Np),a=[r.x,r.y,r.width,r.height].every(Np);if(!a&&!i)throw Error(`Box.constructor - expected box to be IBoundingBox | IRect, instead have `+JSON.stringify(r));var o=a?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],s=o[0],c=o[1],l=o[2],u=o[3];e.assertIsValidBox({x:s,y:c,width:l,height:u},`Box.constructor`,n),this._x=s,this._y=c,this._width=l,this._height=u}return e.isRect=function(e){return!!e&&[e.x,e.y,e.width,e.height].every(Np)},e.assertIsValidBox=function(t,n,r){if(r===void 0&&(r=!1),!e.isRect(t))throw Error(n+` - invalid box: `+JSON.stringify(t)+`, expected object with properties x, y, width, height`);if(!r&&(t.width<0||t.height<0))throw Error(n+` - width (`+t.width+`) and height (`+t.height+`) must be positive numbers`)},Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"topLeft",{get:function(){return new Fp(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"topRight",{get:function(){return new Fp(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottomLeft",{get:function(){return new Fp(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottomRight",{get:function(){return new Fp(this.right,this.bottom)},enumerable:!0,configurable:!0}),e.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(e){return Math.round(e)}),n=t[0],r=t[1],i=t[2],a=t[3];return new e({x:n,y:r,width:i,height:a})},e.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(e){return Math.floor(e)}),n=t[0],r=t[1],i=t[2],a=t[3];return new e({x:n,y:r,width:i,height:a})},e.prototype.toSquare=function(){var t=this,n=t.x,r=t.y,i=t.width,a=t.height,o=Math.abs(i-a);return i<a&&(n-=o/2,i+=o),a<i&&(r-=o/2,a+=o),new e({x:n,y:r,width:i,height:a})},e.prototype.rescale=function(t){var n=kp(t)?t.width:t,r=kp(t)?t.height:t;return new e({x:this.x*n,y:this.y*r,width:this.width*n,height:this.height*r})},e.prototype.pad=function(t,n){var r=[this.x-t/2,this.y-n/2,this.width+t,this.height+n],i=r[0],a=r[1],o=r[2],s=r[3];return new e({x:i,y:a,width:o,height:s})},e.prototype.clipAtImageBorders=function(t,n){var r=this,i=r.x,a=r.y,o=r.right,s=r.bottom,c=Math.max(i,0),l=Math.max(a,0),u=o-c,d=s-l;return new e({x:c,y:l,width:Math.min(u,t-c),height:Math.min(d,n-l)}).floor()},e.prototype.shift=function(t,n){var r=this,i=r.width,a=r.height;return new e({x:this.x+t,y:this.y+n,width:i,height:a})},e.prototype.padAtBorders=function(e,t){var n=this.width+1,r=this.height+1,i=1,a=1,o=n,s=r,c=this.left,l=this.top,u=this.right,d=this.bottom;return u>t&&(o=-u+t+n,u=t),d>e&&(s=-d+e+r,d=e),c<1&&(s=2-c,c=1),l<1&&(s=2-l,l=1),{dy:a,edy:s,dx:i,edx:o,y:l,ey:d,x:c,ex:u,w:n,h:r}},e.prototype.calibrate=function(t){return new e({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},e}(),Lp=function(e){X(t,e);function t(t,n,r,i,a){return a===void 0&&(a=!1),e.call(this,{left:t,top:n,right:r,bottom:i},a)||this}return t}(Ip),Rp=function(){function e(e,t,n,r,i){this._imageDims=new xp(i.width,i.height),this._score=e,this._classScore=t,this._className=n,this._box=new Ip(r).rescale(this._imageDims)}return Object.defineProperty(e.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeBox",{get:function(){return new Ip(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),e.prototype.forSize=function(t,n){return new e(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:n})},e}(),zp=function(e){X(t,e);function t(t,n,r){return e.call(this,t,t,``,n,r)||this}return t.prototype.forSize=function(n,r){var i=e.prototype.forSize.call(this,n,r),a=i.score,o=i.relativeBox,s=i.imageDims;return new t(a,o,s)},t}(Rp);function Bp(e,t,n){n===void 0&&(n=!0);var r=Math.max(0,Math.min(e.right,t.right)-Math.max(e.left,t.left))*Math.max(0,Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top));return n?r/(e.area+t.area-r):r/Math.min(e.area,t.area)}function Vp(e){var t=e.map(function(e){return e.x}),n=e.map(function(e){return e.y});return new Lp(t.reduce(function(e,t){return t<e?t:e},1/0),n.reduce(function(e,t){return t<e?t:e},1/0),t.reduce(function(e,t){return e<t?t:e},0),n.reduce(function(e,t){return e<t?t:e},0))}function Hp(e,t,n,r){r===void 0&&(r=!0);for(var i=t.map(function(e,t){return{score:e,boxIndex:t}}).sort(function(e,t){return e.score-t.score}).map(function(e){return e.boxIndex}),a=[],o=function(){var t=i.pop();a.push(t);for(var o=i,s=[],c=0;c<o.length;c++){var l=o[c],u=e[t],d=e[l];s.push(Bp(u,d,r))}i=i.filter(function(e,t){return s[t]<=n})};i.length>0;)o();return a}function Up(e,t){return U(function(){var n=t[0],r=t[1],i=t[2];return _l(e,tr([Xn(bp(e.shape.slice(0,3),[1]),n),Xn(bp(e.shape.slice(0,3),[1]),r),Xn(bp(e.shape.slice(0,3),[1]),i)],3))})}function Wp(e,t){return t===void 0&&(t=!1),U(function(){var n=e.shape.slice(1),r=n[0],i=n[1];if(r===i)return e;var a=Math.abs(r-i),o=Math.round(a*(t?.5:1)),s=r>i?2:1,c=function(t){var n=e.shape.slice();return n[s]=t,Xn(n,0)},l=c(o),u=a-l.shape[s];return tr([t&&u?c(u):null,e,l].filter(function(e){return!!e}).map(function(e){return e.toFloat()}),s)})}function Gp(e){return 1/(1+Math.exp(-e))}var Kp=function(e){X(t,e);function t(t,n,r,i,a){return a===void 0&&(a=!1),e.call(this,{x:t,y:n,width:r,height:i},a)||this}return t}(Ip),qp=.5,Jp=.43,Yp=.45,Xp=function(){function e(e,t,n){n===void 0&&(n=new Fp(0,0));var r=t.width,i=t.height;this._imgDims=new xp(r,i),this._shift=n,this._positions=e.map(function(e){return e.mul(new Fp(r,i)).add(n)})}return Object.defineProperty(e.prototype,"shift",{get:function(){return new Fp(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativePositions",{get:function(){var e=this;return this._positions.map(function(t){return t.sub(e._shift).div(new Fp(e.imageWidth,e.imageHeight))})},enumerable:!0,configurable:!0}),e.prototype.forSize=function(e,t){return new this.constructor(this.relativePositions,{width:e,height:t})},e.prototype.shiftBy=function(e,t){return new this.constructor(this.relativePositions,this._imgDims,new Fp(e,t))},e.prototype.shiftByPoint=function(e){return this.shiftBy(e.x,e.y)},e.prototype.align=function(e,t){if(t===void 0&&(t={}),e){var n=e instanceof zp?e.box.floor():new Ip(e);return this.shiftBy(n.x,n.y).align(null,t)}var r=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},t),i=r.useDlibAlignment,a=r.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},e.prototype.alignDlib=function(){var e=this.getRefPointsForAlignment(),t=e[0],n=e[1],r=e[2],i=function(e){return r.sub(e).magnitude()},a=(i(t)+i(n))/2,o=Math.floor(a/Yp),s=jp(e),c=Math.floor(Math.max(0,s.x-qp*o)),l=Math.floor(Math.max(0,s.y-Jp*o));return new Kp(c,l,Math.min(o,this.imageWidth+c),Math.min(o,this.imageHeight+l))},e.prototype.alignMinBbox=function(e){var t=Vp(this.positions);return t.pad(t.width*e,t.height*e)},e.prototype.getRefPointsForAlignment=function(){throw Error(`getRefPointsForAlignment not implemented by base class`)},e}(),Zp=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],jp([e[3],e[4]])]},t}(Xp),Qp=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(jp)},t}(Xp),$p=function(){function e(e,t){this._label=e,this._distance=t}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),e.prototype.toString=function(e){return e===void 0&&(e=!0),``+this.label+(e?` (`+Op(this.distance)+`)`:``)},e}(),em=function(e){X(t,e);function t(t,n){var r=e.call(this,t)||this;return r._label=n,r}return t.assertIsValidLabeledBox=function(e,t){if(Ip.assertIsValidBox(e,t),!Np(e.label))throw Error(t+` - expected property label (`+e.label+`) to be a number`)},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(Ip),tm=function(){function e(e,t){if(typeof e!=`string`)throw Error(`LabeledFaceDescriptors - constructor expected label to be a string`);if(!Array.isArray(t)||t.some(function(e){return!(e instanceof Float32Array)}))throw Error(`LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array`);this._label=e,this._descriptors=t}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),e.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(e){return Array.from(e)})}},e.fromJSON=function(t){var n=t.descriptors.map(function(e){return new Float32Array(e)});return new e(t.label,n)},e}();(function(e){X(t,e);function t(t,n,r,i){var a=e.call(this,t,n)||this;return a._score=r,a._classScore=i,a}return t.assertIsValidPredictedBox=function(e,t){if(em.assertIsValidLabeledBox(e,t),!Pp(e.score)||!Pp(e.classScore))throw Error(t+` - expected properties score (`+e.score+`) and (`+e.classScore+`) to be a number between [0, 1]`)},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(em);function nm(e){return e.detection instanceof zp}function rm(e,t){return Object.assign({},e,{detection:t})}function im(){var e=window.fetch||function(){throw Error(`fetch - missing fetch implementation for browser environment`)};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement(`canvas`)},createImageElement:function(){return document.createElement(`img`)},fetch:e,readFile:function(){throw Error(`readFile - filesystem not available for browser environment`)}}}function am(e){var t=``;if(!e)try{e=v()}catch(e){t=e.toString()}return{readFile:e?function(t){return new Promise(function(n,r){e.readFile(t,function(e,t){return e?r(e):n(t)})})}:function(){throw Error(`readFile - failed to require fs in nodejs environment with error: `+t)}}}function om(){var e=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,n=function(){if(e)return new e;throw Error(`createCanvasElement - missing Canvas implementation for nodejs environment`)},r=function(){if(t)return new t;throw Error(`createImageElement - missing Image implementation for nodejs environment`)},i=global.fetch||function(){throw Error(`fetch - missing fetch implementation for nodejs environment`)},a=am();return yp({Canvas:e||function(){function e(){}return e}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function e(){}return e}(),Image:t||function(){function e(){}return e}(),ImageData:global.ImageData||function(){function e(){}return e}(),Video:global.HTMLVideoElement||function(){function e(){}return e}(),createCanvasElement:n,createImageElement:r,fetch:i},a)}function sm(){return typeof window==`object`&&typeof document<`u`&&typeof HTMLImageElement<`u`&&typeof HTMLCanvasElement<`u`&&typeof HTMLVideoElement<`u`&&typeof ImageData<`u`&&typeof CanvasRenderingContext2D<`u`}function cm(){return typeof global==`object`&&typeof r==`function`&&typeof module<`u`&&typeof process<`u`&&!!process.version}var lm;function um(){if(!lm)throw Error(`getEnv - environment is not defined, check isNodejs() and isBrowser()`);return lm}function dm(e){lm=e}function fm(){sm()&&dm(im()),cm()&&dm(om())}function pm(e){if(lm||fm(),!lm)throw Error(`monkeyPatch - environment is not defined, check isNodejs() and isBrowser()`);var t=e.Canvas,n=t===void 0?lm.Canvas:t,r=e.Image,i=r===void 0?lm.Image:r;lm.Canvas=n,lm.Image=i,lm.createCanvasElement=e.createCanvasElement||(function(){return new n}),lm.createImageElement=e.createImageElement||(function(){return new i}),lm.ImageData=e.ImageData||lm.ImageData,lm.Video=e.Video||lm.Video,lm.fetch=e.fetch||lm.fetch,lm.readFile=e.readFile||lm.readFile}var mm={getEnv:um,setEnv:dm,initialize:fm,createBrowserEnv:im,createFileSystem:am,createNodejsEnv:om,monkeyPatch:pm,isBrowser:sm,isNodejs:cm};fm();function hm(e){return!mm.isNodejs()&&typeof e==`string`?document.getElementById(e):e}function gm(e){var t=mm.getEnv(),n=t.Canvas;if(e instanceof t.CanvasRenderingContext2D)return e;var r=hm(e);if(!(r instanceof n))throw Error(`resolveContext2d - expected canvas to be of instance of Canvas`);var i=r.getContext(`2d`);if(!i)throw Error(`resolveContext2d - canvas 2d context is null`);return i}var _m;(function(e){e.TOP_LEFT=`TOP_LEFT`,e.TOP_RIGHT=`TOP_RIGHT`,e.BOTTOM_LEFT=`BOTTOM_LEFT`,e.BOTTOM_RIGHT=`BOTTOM_RIGHT`})(_m||={});var vm=function(){function e(e){e===void 0&&(e={});var t=e.anchorPosition,n=e.backgroundColor,r=e.fontColor,i=e.fontSize,a=e.fontStyle,o=e.padding;this.anchorPosition=t||_m.TOP_LEFT,this.backgroundColor=n||`rgba(0, 0, 0, 0.5)`,this.fontColor=r||`rgba(255, 255, 255, 1)`,this.fontSize=i||14,this.fontStyle=a||`Georgia`,this.padding=o||4}return e}(),ym=function(){function e(t,n,r){r===void 0&&(r={}),this.text=typeof t==`string`?[t]:t instanceof e?t.text:t,this.anchor=n,this.options=new vm(r)}return e.prototype.measureWidth=function(e){var t=this.options.padding;return this.text.map(function(t){return e.measureText(t).width}).reduce(function(e,t){return e<t?t:e},0)+2*t},e.prototype.measureHeight=function(){var e=this.options,t=e.fontSize,n=e.padding;return this.text.length*t+2*n},e.prototype.getUpperLeft=function(e,t){var n=this.options.anchorPosition,r=n===_m.BOTTOM_RIGHT||n===_m.TOP_RIGHT,i=n===_m.BOTTOM_LEFT||n===_m.BOTTOM_RIGHT,a=this.measureWidth(e),o=this.measureHeight(),s=r?this.anchor.x-a:this.anchor.x,c=i?this.anchor.y-o:this.anchor.y;if(t){var l=t.width,u=t.height;return{x:Math.max(Math.min(s,l-a),0),y:Math.max(Math.min(c,u-o),0)}}return{x:s,y:c}},e.prototype.draw=function(e){var t=hm(e),n=gm(t),r=this.options,i=r.backgroundColor,a=r.fontColor,o=r.fontSize,s=r.fontStyle,c=r.padding;n.font=o+`px `+s;var l=this.measureWidth(n),u=this.measureHeight();n.fillStyle=i;var d=this.getUpperLeft(n,t);n.fillRect(d.x,d.y,l,u),n.fillStyle=a,this.text.forEach(function(e,t){var r=c+d.x,i=c+d.y+(t+1)*o;n.fillText(e,r,i)})},e}(),bm=function(){function e(e){e===void 0&&(e={});var t=e.boxColor,n=e.lineWidth,r=e.label,i=e.drawLabelOptions;this.boxColor=t||`rgba(0, 0, 255, 1)`,this.lineWidth=n||2,this.label=r;var a={anchorPosition:_m.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new vm(Object.assign({},a,i))}return e}();(function(){function e(e,t){t===void 0&&(t={}),this.box=new Ip(e),this.options=new bm(t)}return e.prototype.draw=function(e){var t=gm(e),n=this.options,r=n.boxColor,i=n.lineWidth,a=this.box,o=a.x,s=a.y,c=a.width,l=a.height;t.strokeStyle=r,t.lineWidth=i,t.strokeRect(o,s,c,l);var u=this.options.label;u&&new ym([u],{x:o-i/2,y:s},this.options.drawLabelOptions).draw(e)},e})();function xm(e){var t=mm.getEnv(),n=t.Image,r=t.Video;return e instanceof n&&e.complete||e instanceof r&&e.readyState>=3}function Sm(e){return new Promise(function(t,n){if(e instanceof mm.getEnv().Canvas||xm(e))return t();function r(e){e.currentTarget&&(e.currentTarget.removeEventListener(`load`,r),e.currentTarget.removeEventListener(`error`,i),t(e))}function i(e){e.currentTarget&&(e.currentTarget.removeEventListener(`load`,r),e.currentTarget.removeEventListener(`error`,i),n(e))}e.addEventListener(`load`,r),e.addEventListener(`error`,i)})}function Cm(e){var t=mm.getEnv(),n=t.Image,r=t.Video;return e instanceof n?new xp(e.naturalWidth,e.naturalHeight):e instanceof r?new xp(e.videoWidth,e.videoHeight):new xp(e.width,e.height)}function wm(e){var t=e.width,n=e.height,r=mm.getEnv().createCanvasElement,i=r();return i.width=t,i.height=n,i}function Tm(e,t){var n=mm.getEnv().ImageData;if(!(e instanceof n)&&!xm(e))throw Error(`createCanvasFromMedia - media has not finished loading yet`);var r=t||Cm(e),i=r.width,a=r.height,o=wm({width:i,height:a});return e instanceof n?gm(o).putImageData(e,0,0):gm(o).drawImage(e,0,0,i,a),o}function Em(e,t){return Z(this,void 0,void 0,function(){var n,r,i,a,o,s;return Q(this,function(c){switch(c.label){case 0:return n=t||mm.getEnv().createCanvasElement(),r=e.shape.slice(+!!Tp(e)),i=r[0],a=r[1],o=r[2],s=U(function(){return e.as3D(i,a,o).toInt()}),[4,$f.toPixels(s,n)];case 1:return c.sent(),s.dispose(),[2,n]}})})}function Dm(e){var t=mm.getEnv(),n=t.Image,r=t.Canvas,i=t.Video;return e instanceof n||e instanceof r||e instanceof i}function Om(e,t,n){n===void 0&&(n=!1);var r=mm.getEnv(),i=r.Image,a=r.Canvas;if(!(e instanceof i||e instanceof a))throw Error(`imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement`);var o=Cm(e),s=t/Math.max(o.height,o.width),c=s*o.width,l=s*o.height,u=wm({width:t,height:t}),d=e instanceof a?e:Tm(e),f=Math.abs(c-l)/2,p=n&&c<l?f:0,m=n&&l<c?f:0;return gm(u).drawImage(d,p,m,c,l),u}var km=function(){function e(e,t){var n=this;if(t===void 0&&(t=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(e))throw Error(`NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have `+e);this._treatAsBatchInput=t,this._batchSize=e.length,e.forEach(function(e,t){if(wp(e))n._imageTensors[t]=e,n._inputDimensions[t]=e.shape;else if(Tp(e)){var r=e.shape[0];if(r!==1)throw Error(`NetInput - tf.Tensor4D with batchSize `+r+` passed, but not supported in input array`);n._imageTensors[t]=e,n._inputDimensions[t]=e.shape.slice(1)}else{var i=e instanceof mm.getEnv().Canvas?e:Tm(e);n._canvases[t]=i,n._inputDimensions[t]=[i.height,i.width,3]}})}return Object.defineProperty(e.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reshapedInputDimensions",{get:function(){var e=this;return Mp(this.batchSize,0,1).map(function(t,n){return e.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),e.prototype.getInput=function(e){return this.canvases[e]||this.imageTensors[e]},e.prototype.getInputDimensions=function(e){return this._inputDimensions[e]},e.prototype.getInputHeight=function(e){return this._inputDimensions[e][0]},e.prototype.getInputWidth=function(e){return this._inputDimensions[e][1]},e.prototype.getReshapedInputDimensions=function(e){if(typeof this.inputSize!=`number`)throw Error(`getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet`);return Ap({width:this.getInputWidth(e),height:this.getInputHeight(e)},this.inputSize)},e.prototype.toBatchTensor=function(e,t){var n=this;return t===void 0&&(t=!0),this._inputSize=e,U(function(){return Hr(Mp(n.batchSize,0,1).map(function(r){var i=n.getInput(r);if(i instanceof Qe){var a=Tp(i)?i:i.expandDims();return a=Wp(a,t),(a.shape[1]!==e||a.shape[2]!==e)&&(a=kd.resizeBilinear(a,[e,e])),a.as3D(e,e,3)}if(i instanceof mm.getEnv().Canvas)return $f.fromPixels(Om(i,e,t));throw Error(`toBatchTensor - at batchIdx `+r+`, expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have `+i)}).map(function(e){return e.toFloat()})).as4D(n.batchSize,e,e,3)})},e}();function Am(e){return Z(this,void 0,void 0,function(){var t,n,r;return Q(this,function(i){switch(i.label){case 0:if(e instanceof km)return[2,e];if(t=Array.isArray(e)?e:[e],!t.length)throw Error(`toNetInput - empty array passed as input`);return n=function(t){return Array.isArray(e)?` at input index `+t+`:`:``},r=t.map(hm),r.forEach(function(e,r){if(!Dm(e)&&!wp(e)&&!Tp(e))throw typeof t[r]==`string`?Error(`toNetInput -`+n(r)+` string passed, but could not resolve HTMLElement for element id `+t[r]):Error(`toNetInput -`+n(r)+` expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id`);if(Tp(e)){var i=e.shape[0];if(i!==1)throw Error(`toNetInput -`+n(r)+` tf.Tensor4D with batchSize `+i+` passed, but not supported in input array`)}}),[4,Promise.all(r.map(function(e){return Dm(e)&&Sm(e)}))];case 1:return i.sent(),[2,new km(r,Array.isArray(e))]}})})}function jm(e,t){return Z(this,void 0,void 0,function(){var n,r,i,a,o,s,c;return Q(this,function(l){switch(l.label){case 0:return n=mm.getEnv().Canvas,r=e,e instanceof n?[3,5]:[4,Am(e)];case 1:if(i=l.sent(),i.batchSize>1)throw Error(`extractFaces - batchSize > 1 not supported`);return a=i.getInput(0),a instanceof n?(o=a,[3,4]):[3,2];case 2:return[4,Em(a)];case 3:o=l.sent(),l.label=4;case 4:r=o,l.label=5;case 5:return s=gm(r),c=t.map(function(e){return e instanceof zp?e.forSize(r.width,r.height).box.floor():e}).map(function(e){return e.clipAtImageBorders(r.width,r.height)}),[2,c.map(function(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=wm({width:r,height:i});return gm(a).putImageData(s.getImageData(t,n,r,i),0,0),a})]}})})}function Mm(e,t){return Z(this,void 0,void 0,function(){return Q(this,function(n){if(!wp(e)&&!Tp(e))throw Error(`extractFaceTensors - expected image tensor to be 3D or 4D`);if(Tp(e)&&e.shape[0]>1)throw Error(`extractFaceTensors - batchSize > 1 not supported`);return[2,U(function(){var n=e.shape.slice(+!!Tp(e)),r=n[0],i=n[1],a=n[2];return t.map(function(e){return e instanceof zp?e.forSize(i,r).box:e}).map(function(e){return e.clipAtImageBorders(i,r)}).map(function(t){var n=t.x,o=t.y,s=t.width,c=t.height;return mu(e.as3D(r,i,a),[o,n,0],[c,s,a])})})]})})}function Nm(e,t){return Z(this,void 0,void 0,function(){var n,r;return Q(this,function(i){switch(i.label){case 0:return n=mm.getEnv().fetch,[4,n(e,t)];case 1:if(r=i.sent(),!(r.status<400))throw Error(`failed to fetch: (`+r.status+`) `+r.statusText+`, from url: `+r.url);return[2,r]}})})}function Pm(e){return Z(this,void 0,void 0,function(){return Q(this,function(t){switch(t.label){case 0:return[4,Nm(e)];case 1:return[2,t.sent().json()]}})})}function Fm(e,t){var n=t+`-weights_manifest.json`;if(!e)return{modelBaseUri:``,manifestUri:n};if(e===`/`)return{modelBaseUri:`/`,manifestUri:`/`+n};var r=e.startsWith(`http://`)?`http://`:e.startsWith(`https://`)?`https://`:``;e=e.replace(r,``);var i=e.split(`/`).filter(function(e){return e}),a=e.endsWith(`.json`)?i[i.length-1]:n,o=r+(e.endsWith(`.json`)?i.slice(0,i.length-1):i).join(`/`);return o=e.startsWith(`/`)?`/`+o:o,{modelBaseUri:o,manifestUri:o===`/`?`/`+a:o+`/`+a}}function Im(e,t){return Z(this,void 0,void 0,function(){var n,r,i,a;return Q(this,function(o){switch(o.label){case 0:return n=Fm(e,t),r=n.manifestUri,i=n.modelBaseUri,[4,Pm(r)];case 1:return a=o.sent(),[2,Yf.loadWeights(a,i)]}})})}var Lm=function(){function e(e){this._name=e,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(e.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),e.prototype.getParamFromPath=function(e){var t=this.traversePropertyPath(e);return t.obj[t.objProp]},e.prototype.reassignParamFromPath=function(e,t){var n=this.traversePropertyPath(e),r=n.obj,i=n.objProp;r[i].dispose(),r[i]=t},e.prototype.getParamList=function(){var e=this;return this._paramMappings.map(function(t){var n=t.paramPath;return{path:n,tensor:e.getParamFromPath(n)}})},e.prototype.getTrainableParams=function(){return this.getParamList().filter(function(e){return e.tensor instanceof it})},e.prototype.getFrozenParams=function(){return this.getParamList().filter(function(e){return!(e.tensor instanceof it)})},e.prototype.variable=function(){var e=this;this.getFrozenParams().forEach(function(t){var n=t.path,r=t.tensor;e.reassignParamFromPath(n,r.variable())})},e.prototype.freeze=function(){var e=this;this.getTrainableParams().forEach(function(t){var n=t.path,r=t.tensor,i=zn(r.dataSync());r.dispose(),e.reassignParamFromPath(n,i)})},e.prototype.dispose=function(e){e===void 0&&(e=!0),this.getParamList().forEach(function(t){if(e&&t.tensor.isDisposed)throw Error(`param tensor has already been disposed for path `+t.path);t.tensor.dispose()}),this._params=void 0},e.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(e){var t=e.tensor;return Array.from(t.dataSync())}).reduce(function(e,t){return e.concat(t)}))},e.prototype.load=function(e){return Z(this,void 0,void 0,function(){return Q(this,function(t){switch(t.label){case 0:return e instanceof Float32Array?(this.extractWeights(e),[2]):[4,this.loadFromUri(e)];case 1:return t.sent(),[2]}})})},e.prototype.loadFromUri=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:if(e&&typeof e!=`string`)throw Error(this._name+`.loadFromUri - expected model uri`);return[4,Im(e,this.getDefaultModelName())];case 1:return t=n.sent(),this.loadFromWeightMap(t),[2]}})})},e.prototype.loadFromDisk=function(e){return Z(this,void 0,void 0,function(){var t,n,r,i,a,o,s,c,l,u;return Q(this,function(d){switch(d.label){case 0:if(e&&typeof e!=`string`)throw Error(this._name+`.loadFromDisk - expected model file path`);return t=mm.getEnv().readFile,n=Fm(e,this.getDefaultModelName()),r=n.manifestUri,i=n.modelBaseUri,a=function(e){return Promise.all(e.map(function(e){return t(e).then(function(e){return e.buffer})}))},o=Yf.weightsLoaderFactory(a),l=(c=JSON).parse,[4,t(r)];case 1:return s=l.apply(c,[d.sent().toString()]),[4,o(s,i)];case 2:return u=d.sent(),this.loadFromWeightMap(u),[2]}})})},e.prototype.loadFromWeightMap=function(e){var t=this.extractParamsFromWeigthMap(e),n=t.paramMappings,r=t.params;this._paramMappings=n,this._params=r},e.prototype.extractWeights=function(e){var t=this.extractParams(e),n=t.paramMappings,r=t.params;this._paramMappings=n,this._params=r},e.prototype.traversePropertyPath=function(e){if(!this.params)throw Error(`traversePropertyPath - model has no loaded params`);var t=e.split(`/`).reduce(function(t,n){if(!t.nextObj.hasOwnProperty(n))throw Error(`traversePropertyPath - object does not have property `+n+`, for path `+e);return{obj:t.nextObj,objProp:n,nextObj:t.nextObj[n]}},{nextObj:this.params}),n=t.obj,r=t.objProp;if(!n||!r||!(n[r]instanceof Qe))throw Error(`traversePropertyPath - parameter is not a tensor, for path `+e);return{obj:n,objProp:r}},e}();function Rm(e,t,n){return U(function(){var r=ql(e,t.depthwise_filter,t.pointwise_filter,n,`same`);return r=Qc(r,t.bias),r})}function zm(e,t,n){return n===void 0&&(n=!1),U(function(){var r=ju(n?Qc(Bl(e,t.conv0.filters,[2,2],`same`),t.conv0.bias):Rm(e,t.conv0,[2,2])),i=Rm(r,t.conv1,[1,1]);return ju(Qc(r,Qc(i,Rm(ju(Qc(r,i)),t.conv2,[1,1]))))})}function Bm(e,t,n,r){return n===void 0&&(n=!1),r===void 0&&(r=!0),U(function(){var i=ju(n?Qc(Bl(e,t.conv0.filters,r?[2,2]:[1,1],`same`),t.conv0.bias):Rm(e,t.conv0,r?[2,2]:[1,1])),a=Rm(i,t.conv1,[1,1]),o=Rm(ju(Qc(i,a)),t.conv2,[1,1]);return ju(Qc(i,Qc(a,Qc(o,Rm(ju(Qc(i,Qc(a,o))),t.conv3,[1,1])))))})}function Vm(e,t,n,r){return n===void 0&&(n=`same`),r===void 0&&(r=!1),U(function(){var i=Qc(Bl(e,t.filters,[1,1],n),t.bias);return r?ju(i):i})}function Hm(e,t){Object.keys(e).forEach(function(n){t.some(function(e){return e.originalPath===n})||e[n].dispose()})}function Um(e,t){return function(n,r,i,a){var o=Wn(e(n*r*i*i),[i,i,n,r]),s=Vn(e(r));return t.push({paramPath:a+`/filters`},{paramPath:a+`/bias`}),{filters:o,bias:s}}}function Wm(e,t){return function(n,r,i){var a=Hn(e(n*r),[n,r]),o=Vn(e(r));return t.push({paramPath:i+`/weights`},{paramPath:i+`/bias`}),{weights:a,bias:o}}}var Gm=function(){function e(e,t,n){this.depthwise_filter=e,this.pointwise_filter=t,this.bias=n}return e}();function Km(e,t){return function(n,r,i){var a=Wn(e(9*n),[3,3,n,1]),o=Wn(e(n*r),[1,1,n,r]),s=Vn(e(r));return t.push({paramPath:i+`/depthwise_filter`},{paramPath:i+`/pointwise_filter`},{paramPath:i+`/bias`}),new Gm(a,o,s)}}function qm(e){return function(t){return new Gm(e(t+`/depthwise_filter`,4),e(t+`/pointwise_filter`,4),e(t+`/bias`,1))}}function Jm(e,t){return function(n,r,i){var a=e[n];if(!Sp(a,r))throw Error(`expected weightMap[`+n+`] to be a Tensor`+r+`D, instead have `+a);return t.push({originalPath:n,paramPath:i||n}),a}}function Ym(e){var t=e;function n(e){var n=t.slice(0,e);return t=t.slice(e),n}function r(){return t}return{extractWeights:n,getRemainingWeights:r}}function Xm(e,t){var n=Um(e,t),r=Km(e,t);function i(e,t,i,a){return a===void 0&&(a=!1),{conv0:a?n(e,t,3,i+`/conv0`):r(e,t,i+`/conv0`),conv1:r(t,t,i+`/conv1`),conv2:r(t,t,i+`/conv2`)}}function a(e,t,n,a){a===void 0&&(a=!1);var o=i(e,t,n,a);return{conv0:o.conv0,conv1:o.conv1,conv2:o.conv2,conv3:r(t,t,n+`/conv3`)}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function Zm(e){var t=[],n=Ym(e),r=n.extractWeights,i=n.getRemainingWeights,a=Xm(r,t).extractDenseBlock4Params,o=a(3,32,`dense0`,!0),s=a(32,64,`dense1`),c=a(64,128,`dense2`),l=a(128,256,`dense3`);if(i().length!==0)throw Error(`weights remaing after extract: `+i().length);return{paramMappings:t,params:{dense0:o,dense1:s,dense2:c,dense3:l}}}function Qm(e){return function(t){return{filters:e(t+`/filters`,4),bias:e(t+`/bias`,1)}}}function $m(e,t){var n=Jm(e,t),r=Qm(n),i=qm(n);function a(e,t){return t===void 0&&(t=!1),{conv0:t?r(e+`/conv0`):i(e+`/conv0`),conv1:i(e+`/conv1`),conv2:i(e+`/conv2`)}}function o(e,t){return t===void 0&&(t=!1),{conv0:t?r(e+`/conv0`):i(e+`/conv0`),conv1:i(e+`/conv1`),conv2:i(e+`/conv2`),conv3:i(e+`/conv3`)}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:o}}function eh(e){var t=[],n=$m(e,t).extractDenseBlock4Params,r={dense0:n(`dense0`,!0),dense1:n(`dense1`),dense2:n(`dense2`),dense3:n(`dense3`)};return Hm(e,t),{params:r,paramMappings:t}}var th=function(e){X(t,e);function t(){return e.call(this,`FaceFeatureExtractor`)||this}return t.prototype.forwardInput=function(e){var t=this.params;if(!t)throw Error(`FaceFeatureExtractor - load model before inference`);return U(function(){var n=Bm(Up(e.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(K(255)),t.dense0,!0);return n=Bm(n,t.dense1),n=Bm(n,t.dense2),n=Bm(n,t.dense3),n=su(n,[7,7],[2,2],`valid`),n})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,Am(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},t.prototype.getDefaultModelName=function(){return`face_feature_extractor_model`},t.prototype.extractParamsFromWeigthMap=function(e){return eh(e)},t.prototype.extractParams=function(e){return Zm(e)},t}(Lm);function nh(e,t){return U(function(){return Qc(Xl(e,t.weights),t.bias)})}function rh(e,t,n){var r=[],i=Ym(e),a=i.extractWeights,o=i.getRemainingWeights,s=Wm(a,r)(t,n,`fc`);if(o().length!==0)throw Error(`weights remaing after extract: `+o().length);return{paramMappings:r,params:{fc:s}}}function ih(e){var t=[],n=Jm(e,t);function r(e){return{weights:n(e+`/weights`,2),bias:n(e+`/bias`,1)}}var i={fc:r(`fc`)};return Hm(e,t),{params:i,paramMappings:t}}function ah(e){var t={},n={};return Object.keys(e).forEach(function(r){var i=r.startsWith(`fc`)?n:t;i[r]=e[r]}),{featureExtractorMap:t,classifierMap:n}}var oh=function(e){X(t,e);function t(t,n){var r=e.call(this,t)||this;return r._faceFeatureExtractor=n,r}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var t=this,n=this.params;if(!n)throw Error(this._name+` - load model before inference`);return U(function(){var r=e instanceof km?t.faceFeatureExtractor.forwardInput(e):e;return nh(r.as2D(r.shape[0],-1),n.fc)})},t.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),e.prototype.dispose.call(this,t)},t.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),n=t.params,r=t.paramMappings;this._params=n,this._paramMappings=r},t.prototype.extractClassifierParams=function(e){return rh(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var t=ah(e),n=t.featureExtractorMap,r=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(n),ih(r)},t.prototype.extractParams=function(e){var t=this.getClassifierChannelsIn(),n=this.getClassifierChannelsOut(),r=n*t+n,i=e.slice(0,e.length-r),a=e.slice(e.length-r);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(a)},t}(Lm),sh=[`neutral`,`happy`,`sad`,`angry`,`fearful`,`disgusted`,`surprised`],ch=function(){function e(e){var t=this;if(e.length!==7)throw Error(`FaceExpressions.constructor - expected probabilities.length to be 7, have: `+e.length);sh.forEach(function(n,r){t[n]=e[r]})}return e.prototype.asSortedArray=function(){var e=this;return sh.map(function(t){return{expression:t,probability:e[t]}}).sort(function(e,t){return t.probability-e.probability})},e}(),lh=function(e){X(t,e);function t(t){return t===void 0&&(t=new th),e.call(this,`FaceExpressionNet`,t)||this}return t.prototype.forwardInput=function(e){var t=this;return U(function(){return pi(t.runNet(e))})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,Am(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},t.prototype.predictExpressions=function(e){return Z(this,void 0,void 0,function(){var t,n,r,i,a=this;return Q(this,function(o){switch(o.label){case 0:return[4,Am(e)];case 1:return t=o.sent(),[4,this.forwardInput(t)];case 2:return n=o.sent(),[4,Promise.all(Gr(n).map(function(e){return Z(a,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return[4,e.data()];case 1:return t=n.sent(),e.dispose(),[2,t]}})})}))];case 3:return r=o.sent(),n.dispose(),i=r.map(function(e){return new ch(e)}),[2,t.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return`face_expression_model`},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(oh);function uh(e,t){return Object.assign({},e,{expressions:t})}function dh(e){return nm(e)&&e.landmarks instanceof Xp&&e.unshiftedLandmarks instanceof Xp&&e.alignedRect instanceof zp}function fh(e,t){var n=e.detection.box,r=t.shiftBy(n.x,n.y),i=r.align(),a=e.detection.imageDims,o={landmarks:r,unshiftedLandmarks:t,alignedRect:new zp(e.detection.score,i.rescale(a.reverse()),a)};return Object.assign({},e,o)}var ph=function(){function e(e){e===void 0&&(e={});var t=e.drawLines,n=t===void 0||t,r=e.drawPoints,i=r===void 0||r,a=e.lineWidth,o=e.lineColor,s=e.pointSize,c=e.pointColor;this.drawLines=n,this.drawPoints=i,this.lineWidth=a||1,this.pointSize=s||2,this.lineColor=o||`rgba(0, 255, 255, 1)`,this.pointColor=c||`rgba(255, 0, 255, 1)`}return e}();(function(){function e(e,t){t===void 0&&(t={}),this.faceLandmarks=e,this.options=new ph(t)}return e.prototype.draw=function(e){var t=gm(e),n=this.options,r=n.drawLines,i=n.drawPoints,a=n.lineWidth,o=n.lineColor,s=n.pointSize,c=n.pointColor;r&&this.faceLandmarks instanceof Qp&&(t.strokeStyle=o,t.lineWidth=a,_p(t,this.faceLandmarks.getJawOutline()),_p(t,this.faceLandmarks.getLeftEyeBrow()),_p(t,this.faceLandmarks.getRightEyeBrow()),_p(t,this.faceLandmarks.getNose()),_p(t,this.faceLandmarks.getLeftEye(),!0),_p(t,this.faceLandmarks.getRightEye(),!0),_p(t,this.faceLandmarks.getMouth(),!0)),i&&(t.strokeStyle=c,t.fillStyle=c,this.faceLandmarks.positions.forEach(function(e){t.beginPath(),t.arc(e.x,e.y,s,0,2*Math.PI),t.fill()}))},e})();function mh(e,t){var n=Um(e,t),r=Km(e,t);function i(e,t,i){return{separable_conv0:r(e,t,i+`/separable_conv0`),separable_conv1:r(t,t,i+`/separable_conv1`),expansion_conv:n(e,t,1,i+`/expansion_conv`)}}function a(e,t){return{separable_conv0:r(e,e,t+`/separable_conv0`),separable_conv1:r(e,e,t+`/separable_conv1`),separable_conv2:r(e,e,t+`/separable_conv2`)}}return{extractConvParams:n,extractSeparableConvParams:r,extractReductionBlockParams:i,extractMainBlockParams:a}}function hh(e,t){var n=[],r=Ym(e),i=r.extractWeights,a=r.getRemainingWeights,o=mh(i,n),s=o.extractConvParams,c=o.extractSeparableConvParams,l=o.extractReductionBlockParams,u=o.extractMainBlockParams,d={conv_in:s(3,32,3,`entry_flow/conv_in`),reduction_block_0:l(32,64,`entry_flow/reduction_block_0`),reduction_block_1:l(64,128,`entry_flow/reduction_block_1`)},f={};Mp(t,0,1).forEach(function(e){f[`main_block_`+e]=u(128,`middle_flow/main_block_`+e)});var p={reduction_block:l(128,256,`exit_flow/reduction_block`),separable_conv:c(256,512,`exit_flow/separable_conv`)};if(a().length!==0)throw Error(`weights remaing after extract: `+a().length);return{paramMappings:n,params:{entry_flow:d,middle_flow:f,exit_flow:p}}}function gh(e,t){var n=Jm(e,t),r=Qm(n),i=qm(n);function a(e){return{separable_conv0:i(e+`/separable_conv0`),separable_conv1:i(e+`/separable_conv1`),expansion_conv:r(e+`/expansion_conv`)}}function o(e){return{separable_conv0:i(e+`/separable_conv0`),separable_conv1:i(e+`/separable_conv1`),separable_conv2:i(e+`/separable_conv2`)}}return{extractConvParams:r,extractSeparableConvParams:i,extractReductionBlockParams:a,extractMainBlockParams:o}}function _h(e,t){var n=[],r=gh(e,n),i=r.extractConvParams,a=r.extractSeparableConvParams,o=r.extractReductionBlockParams,s=r.extractMainBlockParams,c={conv_in:i(`entry_flow/conv_in`),reduction_block_0:o(`entry_flow/reduction_block_0`),reduction_block_1:o(`entry_flow/reduction_block_1`)},l={};Mp(t,0,1).forEach(function(e){l[`main_block_`+e]=s(`middle_flow/main_block_`+e)});var u={reduction_block:o(`exit_flow/reduction_block`),separable_conv:a(`exit_flow/separable_conv`)};return Hm(e,n),{params:{entry_flow:c,middle_flow:l,exit_flow:u},paramMappings:n}}function vh(e,t,n){return Qc(Bl(e,t.filters,n,`same`),t.bias)}function yh(e,t,n){n===void 0&&(n=!0);var r=n?ju(e):e;return r=Rm(r,t.separable_conv0,[1,1]),r=Rm(ju(r),t.separable_conv1,[1,1]),r=ou(r,[3,3],[2,2],`same`),r=Qc(r,vh(e,t.expansion_conv,[2,2])),r}function bh(e,t){var n=Rm(ju(e),t.separable_conv0,[1,1]);return n=Rm(ju(n),t.separable_conv1,[1,1]),n=Rm(ju(n),t.separable_conv2,[1,1]),n=Qc(n,e),n}var xh=function(e){X(t,e);function t(t){var n=e.call(this,`TinyXception`)||this;return n._numMainBlocks=t,n}return t.prototype.forwardInput=function(e){var t=this,n=this.params;if(!n)throw Error(`TinyXception - load model before inference`);return U(function(){var r=ju(vh(Up(e.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(K(256)),n.entry_flow.conv_in,[2,2]));return r=yh(r,n.entry_flow.reduction_block_0,!1),r=yh(r,n.entry_flow.reduction_block_1),Mp(t._numMainBlocks,0,1).forEach(function(e){r=bh(r,n.middle_flow[`main_block_`+e])}),r=yh(r,n.exit_flow.reduction_block),r=ju(Rm(r,n.exit_flow.separable_conv,[1,1])),r})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,Am(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},t.prototype.getDefaultModelName=function(){return`tiny_xception_model`},t.prototype.extractParamsFromWeigthMap=function(e){return _h(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return hh(e,this._numMainBlocks)},t}(Lm);function Sh(e){var t=[],n=Ym(e),r=n.extractWeights,i=n.getRemainingWeights,a=Wm(r,t),o=a(512,1,`fc/age`),s=a(512,2,`fc/gender`);if(i().length!==0)throw Error(`weights remaing after extract: `+i().length);return{paramMappings:t,params:{fc:{age:o,gender:s}}}}function Ch(e){var t=[],n=Jm(e,t);function r(e){return{weights:n(e+`/weights`,2),bias:n(e+`/bias`,1)}}var i={fc:{age:r(`fc/age`),gender:r(`fc/gender`)}};return Hm(e,t),{params:i,paramMappings:t}}var wh;(function(e){e.FEMALE=`female`,e.MALE=`male`})(wh||={});var Th=function(e){X(t,e);function t(t){t===void 0&&(t=new xh(2));var n=e.call(this,`AgeGenderNet`)||this;return n._faceFeatureExtractor=t,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var t=this,n=this.params;if(!n)throw Error(this._name+` - load model before inference`);return U(function(){var r=e instanceof km?t.faceFeatureExtractor.forwardInput(e):e,i=su(r,[7,7],[2,2],`valid`).as2D(r.shape[0],-1);return{age:nh(i,n.fc.age).as1D(),gender:nh(i,n.fc.gender)}})},t.prototype.forwardInput=function(e){var t=this;return U(function(){var n=t.runNet(e),r=n.age,i=n.gender;return{age:r,gender:pi(i)}})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,Am(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return Z(this,void 0,void 0,function(){var t,n,r,i,a,o,s=this;return Q(this,function(c){switch(c.label){case 0:return[4,Am(e)];case 1:return t=c.sent(),[4,this.forwardInput(t)];case 2:return n=c.sent(),r=Gr(n.age),i=Gr(n.gender),a=r.map(function(e,t){return{ageTensor:e,genderTensor:i[t]}}),[4,Promise.all(a.map(function(e){var t=e.ageTensor,n=e.genderTensor;return Z(s,void 0,void 0,function(){var e,r,i,a,o;return Q(this,function(s){switch(s.label){case 0:return[4,t.data()];case 1:return e=s.sent()[0],[4,n.data()];case 2:return r=s.sent()[0],i=r>.5,a=i?wh.MALE:wh.FEMALE,o=i?r:1-r,t.dispose(),n.dispose(),[2,{age:e,gender:a,genderProbability:o}]}})})}))];case 3:return o=c.sent(),n.age.dispose(),n.gender.dispose(),[2,t.isBatchInput?o:o[0]]}})})},t.prototype.getDefaultModelName=function(){return`age_gender_model`},t.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),e.prototype.dispose.call(this,t)},t.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),n=t.params,r=t.paramMappings;this._params=n,this._paramMappings=r},t.prototype.extractClassifierParams=function(e){return Sh(e)},t.prototype.extractParamsFromWeigthMap=function(e){var t=ah(e),n=t.featureExtractorMap,r=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(n),Ch(r)},t.prototype.extractParams=function(e){var t=1539,n=e.slice(0,e.length-t),r=e.slice(e.length-t);return this.faceFeatureExtractor.extractWeights(n),this.extractClassifierParams(r)},t}(Lm),Eh=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.postProcess=function(e,t,n){var r=n.map(function(e){var n=e.width,r=e.height,i=t/Math.max(r,n);return{width:n*i,height:r*i}}),i=r.length;return U(function(){var n=function(e,t){return Hr([Xn([68],e),Xn([68],t)],1).as2D(1,136).as1D()},a=function(e,t){var n=r[e],i=n.width,a=n.height;return t(i,a)?Math.abs(i-a)/2:0},o=function(e){return a(e,function(e,t){return e<t})},s=function(e){return a(e,function(e,t){return t<e})};return e.mul(Xn([i,136],t)).sub(Hr(Array.from(Array(i),function(e,t){return n(o(t),s(t))}))).div(Hr(Array.from(Array(i),function(e,t){return n(r[t].width,r[t].height)})))})},t.prototype.forwardInput=function(e){var t=this;return U(function(){var n=t.runNet(e);return t.postProcess(n,e.inputSize,e.inputDimensions.map(function(e){return{height:e[0],width:e[1]}}))})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,Am(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},t.prototype.detectLandmarks=function(e){return Z(this,void 0,void 0,function(){var t,n,r,i=this;return Q(this,function(a){switch(a.label){case 0:return[4,Am(e)];case 1:return t=a.sent(),n=U(function(){return Gr(i.forwardInput(t))}),[4,Promise.all(n.map(function(e,n){return Z(i,void 0,void 0,function(){var r,i,a,o,s;return Q(this,function(c){switch(c.label){case 0:return a=(i=Array).from,[4,e.data()];case 1:return r=a.apply(i,[c.sent()]),o=r.filter(function(e,t){return Dp(t)}),s=r.filter(function(e,t){return!Dp(t)}),[2,new Qp(Array(68).fill(0).map(function(e,t){return new Fp(o[t],s[t])}),{height:t.getInputHeight(n),width:t.getInputWidth(n)})]}})})}))];case 2:return r=a.sent(),n.forEach(function(e){return e.dispose()}),[2,t.isBatchInput?r:r[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(oh),Dh=function(e){X(t,e);function t(t){return t===void 0&&(t=new th),e.call(this,`FaceLandmark68Net`,t)||this}return t.prototype.getDefaultModelName=function(){return`face_landmark_68_model`},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Eh);function Oh(e){var t=[],n=$m(e,t).extractDenseBlock3Params,r={dense0:n(`dense0`,!0),dense1:n(`dense1`),dense2:n(`dense2`)};return Hm(e,t),{params:r,paramMappings:t}}function kh(e){var t=[],n=Ym(e),r=n.extractWeights,i=n.getRemainingWeights,a=Xm(r,t).extractDenseBlock3Params,o=a(3,32,`dense0`,!0),s=a(32,64,`dense1`),c=a(64,128,`dense2`);if(i().length!==0)throw Error(`weights remaing after extract: `+i().length);return{paramMappings:t,params:{dense0:o,dense1:s,dense2:c}}}var Ah=function(e){X(t,e);function t(){return e.call(this,`TinyFaceFeatureExtractor`)||this}return t.prototype.forwardInput=function(e){var t=this.params;if(!t)throw Error(`TinyFaceFeatureExtractor - load model before inference`);return U(function(){var n=zm(Up(e.toBatchTensor(112,!0),[122.782,117.001,104.298]).div(K(255)),t.dense0,!0);return n=zm(n,t.dense1),n=zm(n,t.dense2),n=su(n,[14,14],[2,2],`valid`),n})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,Am(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},t.prototype.getDefaultModelName=function(){return`face_feature_extractor_tiny_model`},t.prototype.extractParamsFromWeigthMap=function(e){return Oh(e)},t.prototype.extractParams=function(e){return kh(e)},t}(Lm),jh=function(e){X(t,e);function t(t){return t===void 0&&(t=new Ah),e.call(this,`FaceLandmark68TinyNet`,t)||this}return t.prototype.getDefaultModelName=function(){return`face_landmark_68_tiny_model`},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Eh);(function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t})(Dh);function Mh(e,t){return Qc(fl(e,t.weights),t.biases)}function Nh(e,t,n,r,i){i===void 0&&(i=`same`);var a=t.conv,o=a.filters,s=a.bias,c=Bl(e,o,n,i);return c=Qc(c,s),c=Mh(c,t.scale),r?ju(c):c}function Ph(e,t){return Nh(e,t,[1,1],!0)}function Fh(e,t){return Nh(e,t,[1,1],!1)}function Ih(e,t){return Nh(e,t,[2,2],!0,`valid`)}function Lh(e,t){function n(t,n,r){var i=e(t),a=i.length/(n*r*r);if(Ep(a))throw Error(`depth has to be an integer: `+a+`, weights.length: `+i.length+`, numFilters: `+n+`, filterSize: `+r);return U(function(){return Pu(Wn(i,[n,a,r,r]),[2,3,1,0])})}function r(r,i,a,o){var s=n(r,i,a),c=Vn(e(i));return t.push({paramPath:o+`/filters`},{paramPath:o+`/bias`}),{filters:s,bias:c}}function i(n,r){var i=Vn(e(n)),a=Vn(e(n));return t.push({paramPath:r+`/weights`},{paramPath:r+`/biases`}),{weights:i,biases:a}}function a(e,t,n,a){return{conv:r(e,t,n,a+`/conv`),scale:i(t,a+`/scale`)}}function o(e,t,n,r,i){return i===void 0&&(i=!1),{conv1:a((i?.5:1)*e,t,n,r+`/conv1`),conv2:a(e,t,n,r+`/conv2`)}}return{extractConvLayerParams:a,extractResidualLayerParams:o}}function Rh(e){var t=Ym(e),n=t.extractWeights,r=t.getRemainingWeights,i=[],a=Lh(n,i),o=a.extractConvLayerParams,s=a.extractResidualLayerParams,c=o(4704,32,7,`conv32_down`),l=s(9216,32,3,`conv32_1`),u=s(9216,32,3,`conv32_2`),d=s(9216,32,3,`conv32_3`),f=s(36864,64,3,`conv64_down`,!0),p=s(36864,64,3,`conv64_1`),m=s(36864,64,3,`conv64_2`),h=s(36864,64,3,`conv64_3`),g=s(147456,128,3,`conv128_down`,!0),_=s(147456,128,3,`conv128_1`),v=s(147456,128,3,`conv128_2`),y=s(589824,256,3,`conv256_down`,!0),b=s(589824,256,3,`conv256_1`),x=s(589824,256,3,`conv256_2`),S=s(589824,256,3,`conv256_down_out`),C=U(function(){return Pu(Hn(n(32768),[128,256]),[1,0])});if(i.push({paramPath:`fc`}),r().length!==0)throw Error(`weights remaing after extract: `+r().length);return{params:{conv32_down:c,conv32_1:l,conv32_2:u,conv32_3:d,conv64_down:f,conv64_1:p,conv64_2:m,conv64_3:h,conv128_down:g,conv128_1:_,conv128_2:v,conv256_down:y,conv256_1:b,conv256_2:x,conv256_down_out:S,fc:C},paramMappings:i}}function zh(e,t){var n=Jm(e,t);function r(e){return{weights:n(e+`/scale/weights`,1),biases:n(e+`/scale/biases`,1)}}function i(e){var t=n(e+`/conv/filters`,4),i=n(e+`/conv/bias`,1),a=r(e);return{conv:{filters:t,bias:i},scale:a}}function a(e){return{conv1:i(e+`/conv1`),conv2:i(e+`/conv2`)}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function Bh(e){var t=[],n=zh(e,t),r=n.extractConvLayerParams,i=n.extractResidualLayerParams,a=r(`conv32_down`),o=i(`conv32_1`),s=i(`conv32_2`),c=i(`conv32_3`),l=i(`conv64_down`),u=i(`conv64_1`),d=i(`conv64_2`),f=i(`conv64_3`),p=i(`conv128_down`),m=i(`conv128_1`),h=i(`conv128_2`),g=i(`conv256_down`),_=i(`conv256_1`),v=i(`conv256_2`),y=i(`conv256_down_out`),b=e.fc;if(t.push({originalPath:`fc`,paramPath:`fc`}),!Cp(b))throw Error(`expected weightMap[fc] to be a Tensor2D, instead have `+b);var x={conv32_down:a,conv32_1:o,conv32_2:s,conv32_3:c,conv64_down:l,conv64_1:u,conv64_2:d,conv64_3:f,conv128_down:p,conv128_1:m,conv128_2:h,conv256_down:g,conv256_1:_,conv256_2:v,conv256_down_out:y,fc:b};return Hm(e,t),{params:x,paramMappings:t}}function Vh(e,t){var n=Ph(e,t.conv1);return n=Fh(n,t.conv2),n=Qc(n,e),n=ju(n),n}function Hh(e,t){var n=Ih(e,t.conv1);n=Fh(n,t.conv2);var r=su(e,2,2,`valid`),i=Yn(r.shape),a=r.shape[3]!==n.shape[3];if(r.shape[1]!==n.shape[1]||r.shape[2]!==n.shape[2]){var o=bp(n.shape);o[1]=1;var s=Yn(o);n=tr([n,s],1);var c=bp(n.shape);c[2]=1;var l=Yn(c);n=tr([n,l],2)}return r=a?tr([r,i],3):r,n=Qc(r,n),n=ju(n),n}var Uh=function(e){X(t,e);function t(){return e.call(this,`FaceRecognitionNet`)||this}return t.prototype.forwardInput=function(e){var t=this.params;if(!t)throw Error(`FaceRecognitionNet - load model before inference`);return U(function(){var n=Ih(Up(e.toBatchTensor(150,!0).toFloat(),[122.782,117.001,104.298]).div(K(256)),t.conv32_down);return n=ou(n,3,2,`valid`),n=Vh(n,t.conv32_1),n=Vh(n,t.conv32_2),n=Vh(n,t.conv32_3),n=Hh(n,t.conv64_down),n=Vh(n,t.conv64_1),n=Vh(n,t.conv64_2),n=Vh(n,t.conv64_3),n=Hh(n,t.conv128_down),n=Vh(n,t.conv128_1),n=Vh(n,t.conv128_2),n=Hh(n,t.conv256_down),n=Vh(n,t.conv256_1),n=Vh(n,t.conv256_2),n=Hh(n,t.conv256_down_out),Xl(n.mean([1,2]),t.fc)})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,Am(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return Z(this,void 0,void 0,function(){var t,n,r,i=this;return Q(this,function(a){switch(a.label){case 0:return[4,Am(e)];case 1:return t=a.sent(),n=U(function(){return Gr(i.forwardInput(t))}),[4,Promise.all(n.map(function(e){return e.data()}))];case 2:return r=a.sent(),n.forEach(function(e){return e.dispose()}),[2,t.isBatchInput?r:r[0]]}})})},t.prototype.getDefaultModelName=function(){return`face_recognition_model`},t.prototype.extractParamsFromWeigthMap=function(e){return Bh(e)},t.prototype.extractParams=function(e){return Rh(e)},t}(Lm);function Wh(e,t){return Object.assign({},e,{descriptor:t})}function Gh(e,t){return Object.assign({},e,{age:t})}function Kh(e,t,n){return Object.assign({},e,{gender:t,genderProbability:n})}var qh=function(){function e(e){var t=e===void 0?{}:e,n=t.minFaceSize,r=t.scaleFactor,i=t.maxNumScales,a=t.scoreThresholds,o=t.scaleSteps;if(this._name=`MtcnnOptions`,this._minFaceSize=n||20,this._scaleFactor=r||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=o,typeof this._minFaceSize!=`number`||this._minFaceSize<0)throw Error(this._name+` - expected minFaceSize to be a number > 0`);if(typeof this._scaleFactor!=`number`||this._scaleFactor<=0||this._scaleFactor>=1)throw Error(this._name+` - expected scaleFactor to be a number between 0 and 1`);if(typeof this._maxNumScales!=`number`||this._maxNumScales<0)throw Error(this._name+` - expected maxNumScales to be a number > 0`);if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(e){return typeof e!=`number`}))throw Error(this._name+` - expected scoreThresholds to be an array of numbers of length 3`);if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(e){return typeof e!=`number`})))throw Error(this._name+` - expected scaleSteps to be an array of numbers`)}return Object.defineProperty(e.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),e}();function Jh(e,t){function n(n,r){var i=Wn(e(9*n),[3,3,n,1]),a=Vn(e(n)),o=Vn(e(n)),s=Vn(e(n)),c=Vn(e(n));return t.push({paramPath:r+`/filters`},{paramPath:r+`/batch_norm_scale`},{paramPath:r+`/batch_norm_offset`},{paramPath:r+`/batch_norm_mean`},{paramPath:r+`/batch_norm_variance`}),{filters:i,batch_norm_scale:a,batch_norm_offset:o,batch_norm_mean:s,batch_norm_variance:c}}function r(n,r,i,a,o){var s=Wn(e(n*r*i*i),[i,i,n,r]),c=Vn(e(r));return t.push({paramPath:a+`/filters`},{paramPath:a+`/`+(o?`batch_norm_offset`:`bias`)}),{filters:s,bias:c}}function i(e,t,n,i){var a=r(e,t,n,i,!0);return{filters:a.filters,batch_norm_offset:a.bias}}function a(e,t,r){return{depthwise_conv:n(e,r+`/depthwise_conv`),pointwise_conv:i(e,t,1,r+`/pointwise_conv`)}}function o(){return{conv_0:i(3,32,3,`mobilenetv1/conv_0`),conv_1:a(32,64,`mobilenetv1/conv_1`),conv_2:a(64,128,`mobilenetv1/conv_2`),conv_3:a(128,128,`mobilenetv1/conv_3`),conv_4:a(128,256,`mobilenetv1/conv_4`),conv_5:a(256,256,`mobilenetv1/conv_5`),conv_6:a(256,512,`mobilenetv1/conv_6`),conv_7:a(512,512,`mobilenetv1/conv_7`),conv_8:a(512,512,`mobilenetv1/conv_8`),conv_9:a(512,512,`mobilenetv1/conv_9`),conv_10:a(512,512,`mobilenetv1/conv_10`),conv_11:a(512,512,`mobilenetv1/conv_11`),conv_12:a(512,1024,`mobilenetv1/conv_12`),conv_13:a(1024,1024,`mobilenetv1/conv_13`)}}function s(){var e=i(1024,256,1,`prediction_layer/conv_0`),t=i(256,512,3,`prediction_layer/conv_1`),n=i(512,128,1,`prediction_layer/conv_2`),a=i(128,256,3,`prediction_layer/conv_3`),o=i(256,128,1,`prediction_layer/conv_4`),s=i(128,256,3,`prediction_layer/conv_5`),c=i(256,64,1,`prediction_layer/conv_6`),l=i(64,128,3,`prediction_layer/conv_7`),u=r(512,12,1,`prediction_layer/box_predictor_0/box_encoding_predictor`),d=r(512,9,1,`prediction_layer/box_predictor_0/class_predictor`),f=r(1024,24,1,`prediction_layer/box_predictor_1/box_encoding_predictor`),p=r(1024,18,1,`prediction_layer/box_predictor_1/class_predictor`),m=r(512,24,1,`prediction_layer/box_predictor_2/box_encoding_predictor`),h=r(512,18,1,`prediction_layer/box_predictor_2/class_predictor`),g=r(256,24,1,`prediction_layer/box_predictor_3/box_encoding_predictor`),_=r(256,18,1,`prediction_layer/box_predictor_3/class_predictor`),v=r(256,24,1,`prediction_layer/box_predictor_4/box_encoding_predictor`),y=r(256,18,1,`prediction_layer/box_predictor_4/class_predictor`),b=r(128,24,1,`prediction_layer/box_predictor_5/box_encoding_predictor`),x=r(128,18,1,`prediction_layer/box_predictor_5/class_predictor`);return{conv_0:e,conv_1:t,conv_2:n,conv_3:a,conv_4:o,conv_5:s,conv_6:c,conv_7:l,box_predictor_0:{box_encoding_predictor:u,class_predictor:d},box_predictor_1:{box_encoding_predictor:f,class_predictor:p},box_predictor_2:{box_encoding_predictor:m,class_predictor:h},box_predictor_3:{box_encoding_predictor:g,class_predictor:_},box_predictor_4:{box_encoding_predictor:v,class_predictor:y},box_predictor_5:{box_encoding_predictor:b,class_predictor:x}}}return{extractMobilenetV1Params:o,extractPredictionLayerParams:s}}function Yh(e){var t=[],n=Ym(e),r=n.extractWeights,i=n.getRemainingWeights,a=Jh(r,t),o=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,c=o(),l=s(),u={extra_dim:Un(r(20472),[1,5118,4])};if(t.push({paramPath:`output_layer/extra_dim`}),i().length!==0)throw Error(`weights remaing after extract: `+i().length);return{params:{mobilenetv1:c,prediction_layer:l,output_layer:u},paramMappings:t}}function Xh(e,t){var n=Jm(e,t);function r(e,t,r){return{filters:n(e+`/Conv2d_`+t+`_pointwise/weights`,4,r+`/filters`),batch_norm_offset:n(e+`/Conv2d_`+t+`_pointwise/convolution_bn_offset`,1,r+`/batch_norm_offset`)}}function i(e){var t=`mobilenetv1/conv_`+e,i=`MobilenetV1/Conv2d_`+e+`_depthwise`,a=t+`/depthwise_conv`,o=t+`/pointwise_conv`;return{depthwise_conv:{filters:n(i+`/depthwise_weights`,4,a+`/filters`),batch_norm_scale:n(i+`/BatchNorm/gamma`,1,a+`/batch_norm_scale`),batch_norm_offset:n(i+`/BatchNorm/beta`,1,a+`/batch_norm_offset`),batch_norm_mean:n(i+`/BatchNorm/moving_mean`,1,a+`/batch_norm_mean`),batch_norm_variance:n(i+`/BatchNorm/moving_variance`,1,a+`/batch_norm_variance`)},pointwise_conv:r(`MobilenetV1`,e,o)}}function a(){return{conv_0:r(`MobilenetV1`,0,`mobilenetv1/conv_0`),conv_1:i(1),conv_2:i(2),conv_3:i(3),conv_4:i(4),conv_5:i(5),conv_6:i(6),conv_7:i(7),conv_8:i(8),conv_9:i(9),conv_10:i(10),conv_11:i(11),conv_12:i(12),conv_13:i(13)}}function o(e,t){return{filters:n(e+`/weights`,4,t+`/filters`),bias:n(e+`/biases`,1,t+`/bias`)}}function s(e){return{box_encoding_predictor:o(`Prediction/BoxPredictor_`+e+`/BoxEncodingPredictor`,`prediction_layer/box_predictor_`+e+`/box_encoding_predictor`),class_predictor:o(`Prediction/BoxPredictor_`+e+`/ClassPredictor`,`prediction_layer/box_predictor_`+e+`/class_predictor`)}}function c(){return{conv_0:r(`Prediction`,0,`prediction_layer/conv_0`),conv_1:r(`Prediction`,1,`prediction_layer/conv_1`),conv_2:r(`Prediction`,2,`prediction_layer/conv_2`),conv_3:r(`Prediction`,3,`prediction_layer/conv_3`),conv_4:r(`Prediction`,4,`prediction_layer/conv_4`),conv_5:r(`Prediction`,5,`prediction_layer/conv_5`),conv_6:r(`Prediction`,6,`prediction_layer/conv_6`),conv_7:r(`Prediction`,7,`prediction_layer/conv_7`),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:c}}function Zh(e){var t=[],n=Xh(e,t),r=n.extractMobilenetV1Params,i=n.extractPredictionLayerParams,a=e[`Output/extra_dim`];if(t.push({originalPath:`Output/extra_dim`,paramPath:`output_layer/extra_dim`}),!wp(a))throw Error(`expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have `+a);var o={mobilenetv1:r(),prediction_layer:i(),output_layer:{extra_dim:a}};return Hm(e,t),{params:o,paramMappings:t}}function Qh(e,t,n){return U(function(){var r=Bl(e,t.filters,n,`same`);return r=Qc(r,t.batch_norm_offset),oc(r,0,6)})}var $h=.0010000000474974513;function eg(e,t,n){return U(function(){var r=Wl(e,t.filters,n,`same`);return r=Hc(r,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,$h),oc(r,0,6)})}function tg(e){return[2,4,6,12].some(function(t){return t===e})?[2,2]:[1,1]}function ng(e,t){return U(function(){var n=null,r=Qh(e,t.conv_0,[2,2]);if([t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13].forEach(function(e,t){var i=t+1,a=tg(i);r=eg(r,e.depthwise_conv,a),r=Qh(r,e.pointwise_conv,[1,1]),i===11&&(n=r)}),n===null)throw Error(`mobileNetV1 - output of conv layer 11 is null`);return{out:r,conv11:n}})}function rg(e,t,n,r,i){var a=e.shape[0],o=Math.min(n,a),s=t.map(function(e,t){return{score:e,boxIndex:t}}).filter(function(e){return e.score>i}).sort(function(e,t){return t.score-e.score}),c=function(e){return+(e<=r)},l=[];return s.forEach(function(t){if(!(l.length>=o)){for(var n=t.score,r=l.length-1;r>=0;--r){var a=ig(e,t.boxIndex,l[r]);if(a!==0&&(t.score*=c(a),t.score<=i))break}n===t.score&&l.push(t.boxIndex)}}),l}function ig(e,t,n){var r=e.arraySync(),i=Math.min(r[t][0],r[t][2]),a=Math.min(r[t][1],r[t][3]),o=Math.max(r[t][0],r[t][2]),s=Math.max(r[t][1],r[t][3]),c=Math.min(r[n][0],r[n][2]),l=Math.min(r[n][1],r[n][3]),u=Math.max(r[n][0],r[n][2]),d=Math.max(r[n][1],r[n][3]),f=(o-i)*(s-a),p=(u-c)*(d-l);if(f<=0||p<=0)return 0;var m=Math.max(i,c),h=Math.max(a,l),g=Math.min(o,u),_=Math.min(s,d),v=Math.max(g-m,0)*Math.max(_-h,0);return v/(f+p-v)}function ag(e){var t=Gr(Pu(e,[1,0])),n=[_l(t[2],t[0]),_l(t[3],t[1])];return{sizes:n,centers:[Qc(t[0],nl(n[0],K(2))),Qc(t[1],nl(n[1],K(2)))]}}function og(e,t){var n=ag(e),r=n.sizes,i=n.centers,a=Gr(Pu(t,[1,0])),o=nl(fl(uc(nl(a[2],K(5))),r[0]),K(2)),s=Qc(fl(nl(a[0],K(10)),r[0]),i[0]),c=nl(fl(uc(nl(a[3],K(5))),r[1]),K(2)),l=Qc(fl(nl(a[1],K(10)),r[1]),i[1]);return Pu(Hr([_l(s,o),_l(l,c),Qc(s,o),Qc(l,c)]),[1,0])}function sg(e,t,n){return U(function(){var r=e.shape[0],i=og(zr(Ur(n.extra_dim,[r,1,1]),[-1,4]),zr(e,[-1,4]));i=zr(i,[r,i.shape[0]/r,4]);var a=du(bc(du(t,[0,0,1],[-1,-1,-1])),[0,0,0],[-1,-1,1]);return a=zr(a,[r,a.shape[1]]),{boxes:Gr(i),scores:Gr(a)}})}function cg(e,t){return U(function(){var n=e.shape[0];return{boxPredictionEncoding:zr(Vm(e,t.box_encoding_predictor),[n,-1,1,4]),classPrediction:zr(Vm(e,t.class_predictor),[n,-1,3])}})}function lg(e,t,n){return U(function(){var r=Qh(Qh(e,n.conv_0,[1,1]),n.conv_1,[2,2]),i=Qh(Qh(r,n.conv_2,[1,1]),n.conv_3,[2,2]),a=Qh(Qh(i,n.conv_4,[1,1]),n.conv_5,[2,2]),o=Qh(Qh(a,n.conv_6,[1,1]),n.conv_7,[2,2]),s=cg(t,n.box_predictor_0),c=cg(e,n.box_predictor_1),l=cg(r,n.box_predictor_2),u=cg(i,n.box_predictor_3),d=cg(a,n.box_predictor_4),f=cg(o,n.box_predictor_5);return{boxPredictions:tr([s.boxPredictionEncoding,c.boxPredictionEncoding,l.boxPredictionEncoding,u.boxPredictionEncoding,d.boxPredictionEncoding,f.boxPredictionEncoding],1),classPredictions:tr([s.classPrediction,c.classPrediction,l.classPrediction,u.classPrediction,d.classPrediction,f.classPrediction],1)}})}var ug=function(){function e(e){var t=e===void 0?{}:e,n=t.minConfidence,r=t.maxResults;if(this._name=`SsdMobilenetv1Options`,this._minConfidence=n||.5,this._maxResults=r||100,typeof this._minConfidence!=`number`||this._minConfidence<=0||this._minConfidence>=1)throw Error(this._name+` - expected minConfidence to be a number between 0 and 1`);if(typeof this._maxResults!=`number`)throw Error(this._name+` - expected maxResults to be a number`)}return Object.defineProperty(e.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),e}(),dg=function(e){X(t,e);function t(){return e.call(this,`SsdMobilenetv1`)||this}return t.prototype.forwardInput=function(e){var t=this.params;if(!t)throw Error(`SsdMobilenetv1 - load model before inference`);return U(function(){var n=ng(_l(fl(e.toBatchTensor(512,!1).toFloat(),K(.007843137718737125)),K(1)),t.mobilenetv1),r=lg(n.out,n.conv11,t.prediction_layer),i=r.boxPredictions,a=r.classPredictions;return sg(i,a,t.output_layer)})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=this.forwardInput,[4,Am(e)];case 1:return[2,t.apply(this,[n.sent()])]}})})},t.prototype.locateFaces=function(e,t){return t===void 0&&(t={}),Z(this,void 0,void 0,function(){var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;return Q(this,function(C){switch(C.label){case 0:return n=new ug(t),r=n.maxResults,i=n.minConfidence,[4,Am(e)];case 1:for(a=C.sent(),o=this.forwardInput(a),s=o.boxes,c=o.scores,l=s[0],u=c[0],d=1;d<s.length;d++)s[d].dispose(),c[d].dispose();return m=(p=Array).from,[4,u.data()];case 2:return f=m.apply(p,[C.sent()]),h=.5,g=rg(l,f,r,h,i),_=a.getReshapedInputDimensions(0),v=a.inputSize,y=v/_.width,b=v/_.height,x=l.arraySync(),S=g.map(function(e){var t=[Math.max(0,x[e][0]),Math.min(1,x[e][2])].map(function(e){return e*b}),n=t[0],r=t[1],i=[Math.max(0,x[e][1]),Math.min(1,x[e][3])].map(function(e){return e*y}),o=i[0],s=i[1];return new zp(f[e],new Kp(o,n,s-o,r-n),{height:a.getInputHeight(0),width:a.getInputWidth(0)})}),l.dispose(),u.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return`ssd_mobilenetv1_model`},t.prototype.extractParamsFromWeigthMap=function(e){return Zh(e)},t.prototype.extractParams=function(e){return Yh(e)},t}(Lm);(function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t})(dg);var fg=.4,pg=[new Fp(.738768,.874946),new Fp(2.42204,2.65704),new Fp(4.30971,7.04493),new Fp(10.246,4.59428),new Fp(12.6868,11.8741)],mg=[new Fp(1.603231,2.094468),new Fp(6.041143,7.080126),new Fp(2.882459,3.518061),new Fp(4.266906,5.178857),new Fp(9.041765,10.66308)],hg=[117.001,114.697,97.404],gg=`tiny_yolov2_model`,_g=`tiny_yolov2_separable_conv_model`,vg=function(e){return typeof e==`number`};function yg(e){if(!e)throw Error(`invalid config: `+e);if(typeof e.withSeparableConvs!=`boolean`)throw Error(`config.withSeparableConvs has to be a boolean, have: `+e.withSeparableConvs);if(!vg(e.iouThreshold)||e.iouThreshold<0||e.iouThreshold>1)throw Error(`config.iouThreshold has to be a number between [0, 1], have: `+e.iouThreshold);if(!Array.isArray(e.classes)||!e.classes.length||!e.classes.every(function(e){return typeof e==`string`}))throw Error(`config.classes has to be an array class names: string[], have: `+JSON.stringify(e.classes));if(!Array.isArray(e.anchors)||!e.anchors.length||!e.anchors.map(function(e){return e||{}}).every(function(e){return vg(e.x)&&vg(e.y)}))throw Error(`config.anchors has to be an array of { x: number, y: number }, have: `+JSON.stringify(e.anchors));if(e.meanRgb&&(!Array.isArray(e.meanRgb)||e.meanRgb.length!==3||!e.meanRgb.every(vg)))throw Error(`config.meanRgb has to be an array of shape [number, number, number], have: `+JSON.stringify(e.meanRgb))}function bg(e){return U(function(){var t=fl(e,K(.10000000149011612));return Qc(ju(_l(e,t)),t)})}function xg(e,t){return U(function(){var n=Ar(e,[[0,0],[1,1],[1,1],[0,0]]);return n=Bl(n,t.conv.filters,[1,1],`valid`),n=_l(n,t.bn.sub),n=fl(n,t.bn.truediv),n=Qc(n,t.conv.bias),bg(n)})}function Sg(e,t){return U(function(){var n=Ar(e,[[0,0],[1,1],[1,1],[0,0]]);return n=ql(n,t.depthwise_filter,t.pointwise_filter,[1,1],`valid`),n=Qc(n,t.bias),bg(n)})}function Cg(e,t){var n=Um(e,t);function r(n,r){var i=Vn(e(n)),a=Vn(e(n));return t.push({paramPath:r+`/sub`},{paramPath:r+`/truediv`}),{sub:i,truediv:a}}function i(e,t,i){return{conv:n(e,t,3,i+`/conv`),bn:r(t,i+`/bn`)}}return{extractConvParams:n,extractConvWithBatchNormParams:i,extractSeparableConvParams:Km(e,t)}}function wg(e,t,n,r){var i=Ym(e),a=i.extractWeights,o=i.getRemainingWeights,s=[],c=Cg(a,s),l=c.extractConvParams,u=c.extractConvWithBatchNormParams,d=c.extractSeparableConvParams,f;if(t.withSeparableConvs){var p=r[0],m=r[1],h=r[2],g=r[3],_=r[4],v=r[5],y=r[6],b=r[7],x=r[8],S=t.isFirstLayerConv2d?l(p,m,3,`conv0`):d(p,m,`conv0`),C=d(m,h,`conv1`),w=d(h,g,`conv2`),T=d(g,_,`conv3`),E=d(_,v,`conv4`),D=d(v,y,`conv5`),O=b?d(y,b,`conv6`):void 0,k=x?d(b,x,`conv7`):void 0,A=l(x||b||y,5*n,1,`conv8`);f={conv0:S,conv1:C,conv2:w,conv3:T,conv4:E,conv5:D,conv6:O,conv7:k,conv8:A}}else{var p=r[0],m=r[1],h=r[2],g=r[3],_=r[4],v=r[5],y=r[6],b=r[7],x=r[8],S=u(p,m,`conv0`),C=u(m,h,`conv1`),w=u(h,g,`conv2`),T=u(g,_,`conv3`),E=u(_,v,`conv4`),D=u(v,y,`conv5`),O=u(y,b,`conv6`),k=u(b,x,`conv7`),A=l(x,5*n,1,`conv8`);f={conv0:S,conv1:C,conv2:w,conv3:T,conv4:E,conv5:D,conv6:O,conv7:k,conv8:A}}if(o().length!==0)throw Error(`weights remaing after extract: `+o().length);return{params:f,paramMappings:s}}function Tg(e,t){var n=Jm(e,t);function r(e){return{sub:n(e+`/sub`,1),truediv:n(e+`/truediv`,1)}}function i(e){return{filters:n(e+`/filters`,4),bias:n(e+`/bias`,1)}}function a(e){return{conv:i(e+`/conv`),bn:r(e+`/bn`)}}return{extractConvParams:i,extractConvWithBatchNormParams:a,extractSeparableConvParams:qm(n)}}function Eg(e,t){var n=[],r=Tg(e,n),i=r.extractConvParams,a=r.extractConvWithBatchNormParams,o=r.extractSeparableConvParams,s;if(t.withSeparableConvs){var c=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?i(`conv0`):o(`conv0`),conv1:o(`conv1`),conv2:o(`conv2`),conv3:o(`conv3`),conv4:o(`conv4`),conv5:o(`conv5`),conv6:c>7?o(`conv6`):void 0,conv7:c>8?o(`conv7`):void 0,conv8:i(`conv8`)}}else s={conv0:a(`conv0`),conv1:a(`conv1`),conv2:a(`conv2`),conv3:a(`conv3`),conv4:a(`conv4`),conv5:a(`conv5`),conv6:a(`conv6`),conv7:a(`conv7`),conv8:i(`conv8`)};return Hm(e,n),{params:s,paramMappings:n}}var Dg;(function(e){e[e.XS=224]=`XS`,e[e.SM=320]=`SM`,e[e.MD=416]=`MD`,e[e.LG=608]=`LG`})(Dg||={});var Og=function(){function e(e){var t=e===void 0?{}:e,n=t.inputSize,r=t.scoreThreshold;if(this._name=`TinyYolov2Options`,this._inputSize=n||416,this._scoreThreshold=r||.5,typeof this._inputSize!=`number`||this._inputSize%32!=0)throw Error(this._name+` - expected inputSize to be a number divisible by 32`);if(typeof this._scoreThreshold!=`number`||this._scoreThreshold<=0||this._scoreThreshold>=1)throw Error(this._name+` - expected scoreThreshold to be a number between 0 and 1`)}return Object.defineProperty(e.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),e}(),kg=function(e){X(t,e);function t(t){var n=e.call(this,`TinyYolov2`)||this;return yg(t),n._config=t,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,t){var n=xg(e,t.conv0);return n=ou(n,[2,2],[2,2],`same`),n=xg(n,t.conv1),n=ou(n,[2,2],[2,2],`same`),n=xg(n,t.conv2),n=ou(n,[2,2],[2,2],`same`),n=xg(n,t.conv3),n=ou(n,[2,2],[2,2],`same`),n=xg(n,t.conv4),n=ou(n,[2,2],[2,2],`same`),n=xg(n,t.conv5),n=ou(n,[2,2],[1,1],`same`),n=xg(n,t.conv6),n=xg(n,t.conv7),Vm(n,t.conv8,`valid`,!1)},t.prototype.runMobilenet=function(e,t){var n=this.config.isFirstLayerConv2d?bg(Vm(e,t.conv0,`valid`,!1)):Sg(e,t.conv0);return n=ou(n,[2,2],[2,2],`same`),n=Sg(n,t.conv1),n=ou(n,[2,2],[2,2],`same`),n=Sg(n,t.conv2),n=ou(n,[2,2],[2,2],`same`),n=Sg(n,t.conv3),n=ou(n,[2,2],[2,2],`same`),n=Sg(n,t.conv4),n=ou(n,[2,2],[2,2],`same`),n=Sg(n,t.conv5),n=ou(n,[2,2],[1,1],`same`),n=t.conv6?Sg(n,t.conv6):n,n=t.conv7?Sg(n,t.conv7):n,Vm(n,t.conv8,`valid`,!1)},t.prototype.forwardInput=function(e,t){var n=this,r=this.params;if(!r)throw Error(`TinyYolov2 - load model before inference`);return U(function(){var i=e.toBatchTensor(t,!1).toFloat();return i=n.config.meanRgb?Up(i,n.config.meanRgb):i,i=i.div(K(256)),n.config.withSeparableConvs?n.runMobilenet(i,r):n.runTinyYolov2(i,r)})},t.prototype.forward=function(e,t){return Z(this,void 0,void 0,function(){var n;return Q(this,function(r){switch(r.label){case 0:return n=this.forwardInput,[4,Am(e)];case 1:return[4,n.apply(this,[r.sent(),t])];case 2:return[2,r.sent()]}})})},t.prototype.detect=function(e,t){return t===void 0&&(t={}),Z(this,void 0,void 0,function(){var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g=this;return Q(this,function(_){switch(_.label){case 0:return n=new Og(t),r=n.inputSize,i=n.scoreThreshold,[4,Am(e)];case 1:return a=_.sent(),[4,this.forwardInput(a,r)];case 2:return o=_.sent(),s=U(function(){return Gr(o)[0].expandDims()}),c={width:a.getInputWidth(0),height:a.getInputHeight(0)},[4,this.extractBoxes(s,a.getReshapedInputDimensions(0),i)];case 3:return l=_.sent(),o.dispose(),s.dispose(),u=l.map(function(e){return e.box}),d=l.map(function(e){return e.score}),f=l.map(function(e){return e.classScore}),p=l.map(function(e){return g.config.classes[e.label]}),m=Hp(u.map(function(e){return e.rescale(r)}),d,this.config.iouThreshold,!0),h=m.map(function(e){return new Rp(d[e],f[e],p[e],u[e],c)}),[2,h]}})})},t.prototype.getDefaultModelName=function(){return``},t.prototype.extractParamsFromWeigthMap=function(e){return Eg(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,r=n?n.length:void 0;if(r!==7&&r!==8&&r!==9)throw Error(`TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found `+r+` filterSizes in config`);return wg(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,t,n){return Z(this,void 0,void 0,function(){var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=this;return Q(this,function(N){switch(N.label){case 0:return r=t.width,i=t.height,a=Math.max(r,i),o=a/r,s=a/i,c=e.shape[1],l=this.config.anchors.length,u=U(function(){var t=e.reshape([c,c,l,M.boxEncodingSize]);return[t.slice([0,0,0,0],[c,c,l,4]),t.slice([0,0,0,4],[c,c,l,1]),M.withClassScores?pi(t.slice([0,0,0,5],[c,c,l,M.config.classes.length]),3):K(0)]}),d=u[0],f=u[1],p=u[2],m=[],[4,f.array()];case 1:return h=N.sent(),[4,d.array()];case 2:g=N.sent(),_=0,N.label=3;case 3:if(!(_<c))return[3,12];v=0,N.label=4;case 4:if(!(v<c))return[3,11];y=0,N.label=5;case 5:return y<l?(b=Gp(h[_][v][y][0]),!n||b>n?(x=(v+Gp(g[_][v][y][0]))/c*o,S=(_+Gp(g[_][v][y][1]))/c*s,C=Math.exp(g[_][v][y][2])*this.config.anchors[y].x/c*o,w=Math.exp(g[_][v][y][3])*this.config.anchors[y].y/c*s,T=x-C/2,E=S-w/2,D={row:_,col:v,anchor:y},this.withClassScores?[4,this.extractPredictedClass(p,D)]:[3,7]):[3,9]):[3,10];case 6:return j=N.sent(),[3,8];case 7:j={classScore:1,label:0},N.label=8;case 8:O=j,k=O.classScore,A=O.label,m.push(yp({box:new Lp(T,E,T+C,E+w),score:b,classScore:b*k,label:A},D)),N.label=9;case 9:return y++,[3,5];case 10:return v++,[3,4];case 11:return _++,[3,3];case 12:return d.dispose(),f.dispose(),p.dispose(),[2,m]}})})},t.prototype.extractPredictedClass=function(e,t){return Z(this,void 0,void 0,function(){var n,r,i,a;return Q(this,function(o){switch(o.label){case 0:return n=t.row,r=t.col,i=t.anchor,[4,e.array()];case 1:return a=o.sent(),[2,Array(this.config.classes.length).fill(0).map(function(e,t){return a[n][r][i][t]}).map(function(e,t){return{classScore:e,label:t}}).reduce(function(e,t){return e.classScore>t.classScore?e:t})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(Lm),Ag=function(e){X(t,e);function t(t){t===void 0&&(t=!0);var n=this,r=Object.assign({},{withSeparableConvs:t,iouThreshold:fg,classes:[`face`]},t?{anchors:mg,meanRgb:hg}:{anchors:pg,withClassScores:!0});return n=e.call(this,r)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,t){return Z(this,void 0,void 0,function(){var n;return Q(this,function(r){switch(r.label){case 0:return[4,this.detect(e,t)];case 1:return n=r.sent(),[2,n.map(function(e){return new zp(e.score,e.relativeBox,{width:e.imageWidth,height:e.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?_g:gg},t.prototype.extractParamsFromWeigthMap=function(t){return e.prototype.extractParamsFromWeigthMap.call(this,t)},t}(kg),jg=function(e){X(t,e);function t(){var t=e!==null&&e.apply(this,arguments)||this;return t._name=`TinyFaceDetectorOptions`,t}return t}(Og),Mg=function(){function e(){}return e.prototype.then=function(e){return Z(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return t=e,[4,this.run()];case 1:return[2,t.apply(void 0,[n.sent()])]}})})},e.prototype.run=function(){return Z(this,void 0,void 0,function(){return Q(this,function(e){throw Error(`ComposableTask - run is not implemented`)})})},e}();function Ng(e,t,n,r,i){return i===void 0&&(i=function(e){return e.alignedRect}),Z(this,void 0,void 0,function(){var a,o,s,c,l;return Q(this,function(u){switch(u.label){case 0:return a=e.map(function(e){return dh(e)?i(e):e.detection}),s=r,s?[3,5]:t instanceof Qe?[4,Mm(t,a)]:[3,2];case 1:return c=u.sent(),[3,4];case 2:return[4,jm(t,a)];case 3:c=u.sent(),u.label=4;case 4:s=c,u.label=5;case 5:return o=s,[4,n(o)];case 6:return l=u.sent(),o.forEach(function(e){return e instanceof Qe&&e.dispose()}),[2,l]}})})}function Pg(e,t,n,r,i){return Z(this,void 0,void 0,function(){var a=this;return Q(this,function(o){return[2,Ng([e],t,function(e){return Z(a,void 0,void 0,function(){return Q(this,function(t){return[2,n(e[0])]})})},r,i)]})})}function Fg(e){return U(function(){return Hr(Gr(e,3).reverse(),3)})}function Ig(e,t){var n=Um(e,t),r=Wm(e,t);function i(n,r){var i=Vn(e(n));return t.push({paramPath:r}),i}function a(e,t,r){return r===void 0&&(r=!1),{conv1:n(e[0],e[1],3,t+`/conv1`),prelu1_alpha:i(e[1],t+`/prelu1_alpha`),conv2:n(e[1],e[2],3,t+`/conv2`),prelu2_alpha:i(e[2],t+`/prelu2_alpha`),conv3:n(e[2],e[3],r?2:3,t+`/conv3`),prelu3_alpha:i(e[3],t+`/prelu3_alpha`)}}function o(){var e=a([3,10,16,32],`pnet`),t=n(32,2,1,`pnet/conv4_1`),r=n(32,4,1,`pnet/conv4_2`);return yp(yp({},e),{conv4_1:t,conv4_2:r})}function s(){var e=a([3,28,48,64],`rnet`,!0),t=r(576,128,`rnet/fc1`),n=i(128,`rnet/prelu4_alpha`),o=r(128,2,`rnet/fc2_1`),s=r(128,4,`rnet/fc2_2`);return yp(yp({},e),{fc1:t,prelu4_alpha:n,fc2_1:o,fc2_2:s})}function c(){var e=a([3,32,64,64],`onet`),t=n(64,128,2,`onet/conv4`),o=i(128,`onet/prelu4_alpha`),s=r(1152,256,`onet/fc1`),c=i(256,`onet/prelu5_alpha`),l=r(256,2,`onet/fc2_1`),u=r(256,4,`onet/fc2_2`),d=r(256,10,`onet/fc2_3`);return yp(yp({},e),{conv4:t,prelu4_alpha:o,fc1:s,prelu5_alpha:c,fc2_1:l,fc2_2:u,fc2_3:d})}return{extractPNetParams:o,extractRNetParams:s,extractONetParams:c}}function Lg(e){var t=Ym(e),n=t.extractWeights,r=t.getRemainingWeights,i=[],a=Ig(n,i),o=a.extractPNetParams,s=a.extractRNetParams,c=a.extractONetParams,l=o(),u=s(),d=c();if(r().length!==0)throw Error(`weights remaing after extract: `+r().length);return{params:{pnet:l,rnet:u,onet:d},paramMappings:i}}function Rg(e,t){var n=Jm(e,t);function r(e){return{filters:n(e+`/weights`,4,e+`/filters`),bias:n(e+`/bias`,1)}}function i(e){return{weights:n(e+`/weights`,2),bias:n(e+`/bias`,1)}}function a(e){return n(e,1)}function o(e){return{conv1:r(e+`/conv1`),prelu1_alpha:a(e+`/prelu1_alpha`),conv2:r(e+`/conv2`),prelu2_alpha:a(e+`/prelu2_alpha`),conv3:r(e+`/conv3`),prelu3_alpha:a(e+`/prelu3_alpha`)}}function s(){var e=o(`pnet`),t=r(`pnet/conv4_1`),n=r(`pnet/conv4_2`);return yp(yp({},e),{conv4_1:t,conv4_2:n})}function c(){var e=o(`rnet`),t=i(`rnet/fc1`),n=a(`rnet/prelu4_alpha`),r=i(`rnet/fc2_1`),s=i(`rnet/fc2_2`);return yp(yp({},e),{fc1:t,prelu4_alpha:n,fc2_1:r,fc2_2:s})}function l(){var e=o(`onet`),t=r(`onet/conv4`),n=a(`onet/prelu4_alpha`),s=i(`onet/fc1`),c=a(`onet/prelu5_alpha`),l=i(`onet/fc2_1`),u=i(`onet/fc2_2`),d=i(`onet/fc2_3`);return yp(yp({},e),{conv4:t,prelu4_alpha:n,fc1:s,prelu5_alpha:c,fc2_1:l,fc2_2:u,fc2_3:d})}return{extractPNetParams:s,extractRNetParams:c,extractONetParams:l}}function zg(e){var t=[],n=Rg(e,t),r=n.extractPNetParams,i=n.extractRNetParams,a=n.extractONetParams,o=r(),s=i(),c=a();return Hm(e,t),{params:{pnet:o,rnet:s,onet:c},paramMappings:t}}function Bg(e,t){var n=t[0],r=t[1];return{height:Math.floor(n*e),width:Math.floor(r*e)}}function Vg(e,t,n){for(var r=n[0],i=n[1],a=12/e,o=[],s=Math.min(r,i)*a,c=0;s>=12;)o.push(a*t**+c),s*=t,c+=1;return o}var Hg=function(e){X(t,e);function t(t,n,r,i){return e.call(this,{left:t,top:n,right:r,bottom:i},!0)||this}return t}(Ip);function Ug(e){return U(function(){return fl(_l(e,K(127.5)),K(.0078125))})}function Wg(e,t){return U(function(){return Qc(ju(e),fl(t,gc(ju(gc(e)))))})}function Gg(e,t,n){return n===void 0&&(n=!1),U(function(){var r=Vm(e,t.conv1,`valid`);return r=Wg(r,t.prelu1_alpha),r=ou(r,n?[2,2]:[3,3],[2,2],`same`),r=Vm(r,t.conv2,`valid`),r=Wg(r,t.prelu2_alpha),r=n?r:ou(r,[3,3],[2,2],`valid`),r=Vm(r,t.conv3,`valid`),r=Wg(r,t.prelu3_alpha),r})}function Kg(e,t){return U(function(){var n=Gg(e,t,!0),r=Vm(n,t.conv4_1,`valid`);return{prob:pi(_l(r,Er(Su(r,3),3)),3),regions:Vm(n,t.conv4_2,`valid`)}})}function qg(e,t){return U(function(){var n=Bg(t,e.shape.slice(1)),r=n.height,i=n.width;return Pu(Ug(kd.resizeBilinear(e,[r,i])),[0,2,1,3])})}function Jg(e,t,n,r){for(var i=[],a=e.arraySync(),o=0;o<e.shape[0];o++)for(var s=0;s<e.shape[1];s++)a[o][s]>=r&&i.push(new Fp(s,o));return i.map(function(e){var r=new Lp(Math.round((e.y*2+1)/n),Math.round((e.x*2+1)/n),Math.round((e.y*2+12)/n),Math.round((e.x*2+12)/n)),i=a[e.y][e.x],o=t.arraySync();return{cell:r,score:i,region:new Hg(o[e.y][e.x][0],o[e.y][e.x][1],o[e.y][e.x][2],o[e.y][e.x][3])}})}function Yg(e,t,n,r,i){i.stage1=[];var a=t.map(function(t){return U(function(){var n={scale:t},i=qg(e,t),a=Date.now(),o=Kg(i,r),s=o.prob,c=o.regions;return n.pnet=Date.now()-a,{scoresTensor:Gr(Gr(s,3)[1])[0],regionsTensor:Gr(c)[0],scale:t,statsForScale:n}})}).map(function(e){var t=e.scoresTensor,r=e.regionsTensor,a=e.scale,o=e.statsForScale,s=Jg(t,r,a,n);if(t.dispose(),r.dispose(),!s.length)return i.stage1.push(o),[];var c=Date.now(),l=Hp(s.map(function(e){return e.cell}),s.map(function(e){return e.score}),.5);return o.nms=Date.now()-c,o.numBoxes=l.length,i.stage1.push(o),l.map(function(e){return s[e]})}).reduce(function(e,t){return e.concat(t)},[]),o=[],s=[];if(a.length>0){var c=Date.now(),l=Hp(a.map(function(e){return e.cell}),a.map(function(e){return e.score}),.7);i.stage1_nms=Date.now()-c,s=l.map(function(e){return a[e].score}),o=l.map(function(e){return a[e]}).map(function(e){var t=e.cell,n=e.region;return new Lp(t.left+n.left*t.width,t.top+n.top*t.height,t.right+n.right*t.width,t.bottom+n.bottom*t.height).toSquare().round()})}return{boxes:o,scores:s}}function Xg(e,t,n){var r=n.width,i=n.height;return Z(this,void 0,void 0,function(){var n,a,o,s=this;return Q(this,function(c){switch(c.label){case 0:return n=gm(e),[4,Promise.all(t.map(function(t){return Z(s,void 0,void 0,function(){var r,i,a,o,s,c,l,u;return Q(this,function(d){return r=t.padAtBorders(e.height,e.width),i=r.y,a=r.ey,o=r.x,s=r.ex,c=o-1,l=i-1,u=n.getImageData(c,l,s-c,a-l),[2,mm.isNodejs()?Tm(u):createImageBitmap(u)]})})}))];case 1:return a=c.sent(),o=[],a.forEach(function(e){var t=gm(wm({width:r,height:i}));t.drawImage(e,0,0,r,i);for(var n=t.getImageData(0,0,r,i).data,a=[],s=0;s<n.length;s+=4)a.push(n[s+2]),a.push(n[s+1]),a.push(n[s]);o.push(a)}),[2,o.map(function(e){return U(function(){return Ug(Pu(Wn(e,[1,r,i,3]),[0,2,1,3]).toFloat())})})]}})})}function Zg(e,t){return U(function(){var n=Gg(e,t),r=Wg(nh(zr(n,[n.shape[0],t.fc1.weights.shape[0]]),t.fc1),t.prelu4_alpha),i=nh(r,t.fc2_1),a=pi(_l(i,Er(Su(i,1),1)),1),o=nh(r,t.fc2_2);return{scores:Gr(a,1)[1],regions:o}})}function Qg(e,t,n,r,i){return Z(this,void 0,void 0,function(){var a,o,s,c,l,u,d,f,p,m,h,g,_,v;return Q(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,Xg(e,t,{width:24,height:24})];case 1:return o=y.sent(),i.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=o.map(function(e){var t=Zg(e,r);return e.dispose(),t}),i.stage2_rnet=Date.now()-a,c=s.length>1?tr(s.map(function(e){return e.scores})):s[0].scores,d=(u=Array).from,[4,c.data()];case 2:return l=d.apply(u,[y.sent()]),c.dispose(),f=l.map(function(e,t){return{score:e,idx:t}}).filter(function(e){return e.score>n}).map(function(e){return e.idx}),p=f.map(function(e){return t[e]}),m=f.map(function(e){return l[e]}),h=[],g=[],p.length>0&&(a=Date.now(),_=Hp(p,m,.7),i.stage2_nms=Date.now()-a,v=_.map(function(e){var t=s[f[e]].regions.arraySync();return new Hg(t[0][0],t[0][1],t[0][2],t[0][3])}),g=_.map(function(e){return m[e]}),h=_.map(function(e,t){return p[e].calibrate(v[t])})),s.forEach(function(e){e.regions.dispose(),e.scores.dispose()}),[2,{boxes:h,scores:g}]}})})}function $g(e,t){return U(function(){var n=Gg(e,t);n=ou(n,[2,2],[2,2],`same`),n=Vm(n,t.conv4,`valid`),n=Wg(n,t.prelu4_alpha);var r=Wg(nh(zr(n,[n.shape[0],t.fc1.weights.shape[0]]),t.fc1),t.prelu5_alpha),i=nh(r,t.fc2_1),a=pi(_l(i,Er(Su(i,1),1)),1),o=nh(r,t.fc2_2),s=nh(r,t.fc2_3);return{scores:Gr(a,1)[1],regions:o,points:s}})}function e_(e,t,n,r,i){return Z(this,void 0,void 0,function(){var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;return Q(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,Xg(e,t,{width:48,height:48})];case 1:return o=b.sent(),i.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=o.map(function(e){var t=$g(e,r);return e.dispose(),t}),i.stage3_onet=Date.now()-a,c=s.length>1?tr(s.map(function(e){return e.scores})):s[0].scores,d=(u=Array).from,[4,c.data()];case 2:return l=d.apply(u,[b.sent()]),c.dispose(),f=l.map(function(e,t){return{score:e,idx:t}}).filter(function(e){return e.score>n}).map(function(e){return e.idx}),p=f.map(function(e){var t=s[e].regions.arraySync();return new Hg(t[0][0],t[0][1],t[0][2],t[0][3])}),m=f.map(function(e,n){return t[e].calibrate(p[n])}),h=f.map(function(e){return l[e]}),g=[],_=[],v=[],m.length>0&&(a=Date.now(),y=Hp(m,h,.7,!1),i.stage3_nms=Date.now()-a,g=y.map(function(e){return m[e]}),_=y.map(function(e){return h[e]}),v=y.map(function(e,t){return[,,,,,].fill(0).map(function(n,r){var i=s[e].points.arraySync();return new Fp(i[0][r]*(g[t].width+1)+g[t].left,i[0][r+5]*(g[t].height+1)+g[t].top)})})),s.forEach(function(e){e.regions.dispose(),e.scores.dispose(),e.points.dispose()}),[2,{boxes:g,scores:_,points:v}]}})})}var t_=function(e){X(t,e);function t(){return e.call(this,`Mtcnn`)||this}return t.prototype.load=function(t){return Z(this,void 0,void 0,function(){return Q(this,function(n){return console.warn(`mtcnn is deprecated and will be removed soon`),[2,e.prototype.load.call(this,t)]})})},t.prototype.loadFromDisk=function(t){return Z(this,void 0,void 0,function(){return Q(this,function(n){return console.warn(`mtcnn is deprecated and will be removed soon`),[2,e.prototype.loadFromDisk.call(this,t)]})})},t.prototype.forwardInput=function(e,t){return t===void 0&&(t={}),Z(this,void 0,void 0,function(){var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;return Q(this,function(C){switch(C.label){case 0:if(n=this.params,!n)throw Error(`Mtcnn - load model before inference`);if(r=e.canvases[0],!r)throw Error(`Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.`);return i={},a=Date.now(),o=U(function(){return Fg(Er($f.fromPixels(r)).toFloat())}),s=function(e){return o.dispose(),i.total=Date.now()-a,e},c=o.shape.slice(1),l=c[0],u=c[1],d=new qh(t),f=d.minFaceSize,p=d.scaleFactor,m=d.maxNumScales,h=d.scoreThresholds,g=d.scaleSteps,_=(g||Vg(f,p,[l,u])).filter(function(e){var t=Bg(e,[l,u]);return Math.min(t.width,t.height)>12}).slice(0,m),i.scales=_,i.pyramid=_.map(function(e){return Bg(e,[l,u])}),v=Date.now(),[4,Yg(o,_,h[0],n.pnet,i)];case 1:return y=C.sent(),i.total_stage1=Date.now()-v,y.boxes.length?(i.stage2_numInputBoxes=y.boxes.length,v=Date.now(),[4,Qg(r,y.boxes,h[1],n.rnet,i)]):[2,s({results:[],stats:i})];case 2:return b=C.sent(),i.total_stage2=Date.now()-v,b.boxes.length?(i.stage3_numInputBoxes=b.boxes.length,v=Date.now(),[4,e_(r,b.boxes,h[2],n.onet,i)]):[2,s({results:[],stats:i})];case 3:return x=C.sent(),i.total_stage3=Date.now()-v,S=x.boxes.map(function(e,t){return fh(rm({},new zp(x.scores[t],new Kp(e.left/u,e.top/l,e.width/u,e.height/l),{height:l,width:u})),new Zp(x.points[t].map(function(t){return t.sub(new Fp(e.left,e.top)).div(new Fp(e.width,e.height))}),{width:e.width,height:e.height}))}),[2,s({results:S,stats:i})]}})})},t.prototype.forward=function(e,t){return t===void 0&&(t={}),Z(this,void 0,void 0,function(){var n;return Q(this,function(r){switch(r.label){case 0:return n=this.forwardInput,[4,Am(e)];case 1:return[4,n.apply(this,[r.sent(),t])];case 2:return[2,r.sent().results]}})})},t.prototype.forwardWithStats=function(e,t){return t===void 0&&(t={}),Z(this,void 0,void 0,function(){var n;return Q(this,function(r){switch(r.label){case 0:return n=this.forwardInput,[4,Am(e)];case 1:return[2,n.apply(this,[r.sent(),t])]}})})},t.prototype.getDefaultModelName=function(){return`mtcnn_model`},t.prototype.extractParamsFromWeigthMap=function(e){return zg(e)},t.prototype.extractParams=function(e){return Lg(e)},t}(Lm),n_=.4,r_=[new Fp(1.603231,2.094468),new Fp(6.041143,7.080126),new Fp(2.882459,3.518061),new Fp(4.266906,5.178857),new Fp(9.041765,10.66308)],i_=[117.001,114.697,97.404],a_=function(e){X(t,e);function t(){var t=this,n={withSeparableConvs:!0,iouThreshold:n_,classes:[`face`],anchors:r_,meanRgb:i_,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return t=e.call(this,n)||this,t}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,t){return Z(this,void 0,void 0,function(){var n;return Q(this,function(r){switch(r.label){case 0:return[4,this.detect(e,t)];case 1:return n=r.sent(),[2,n.map(function(e){return new zp(e.score,e.relativeBox,{width:e.imageWidth,height:e.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return`tiny_face_detector_model`},t.prototype.extractParamsFromWeigthMap=function(t){return e.prototype.extractParamsFromWeigthMap.call(this,t)},t}(kg),o_={ssdMobilenetv1:new dg,tinyFaceDetector:new a_,tinyYolov2:new Ag,mtcnn:new t_,faceLandmark68Net:new Dh,faceLandmark68TinyNet:new jh,faceRecognitionNet:new Uh,faceExpressionNet:new lh,ageGenderNet:new Th},s_=function(e){X(t,e);function t(t,n,r){var i=e.call(this)||this;return i.parentTask=t,i.input=n,i.extractedFaces=r,i}return t}(Mg),c_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t,n=this;return Q(this,function(r){switch(r.label){case 0:return[4,this.parentTask];case 1:return e=r.sent(),[4,Ng(e,this.input,function(e){return Z(n,void 0,void 0,function(){return Q(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return o_.faceExpressionNet.predictExpressions(e)}))];case 1:return[2,t.sent()]}})})},this.extractedFaces)];case 2:return t=r.sent(),[2,e.map(function(e,n){return uh(e,t[n])})]}})})},t.prototype.withAgeAndGender=function(){return new p_(this,this.input)},t}(s_),l_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t;return Q(this,function(n){switch(n.label){case 0:return[4,this.parentTask];case 1:return e=n.sent(),e?[4,Pg(e,this.input,function(e){return o_.faceExpressionNet.predictExpressions(e)},this.extractedFaces)]:[2];case 2:return t=n.sent(),[2,uh(e,t)]}})})},t.prototype.withAgeAndGender=function(){return new m_(this,this.input)},t}(s_),u_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new h_(this,this.input)},t.prototype.withFaceDescriptors=function(){return new v_(this,this.input)},t}(c_),d_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new g_(this,this.input)},t.prototype.withFaceDescriptor=function(){return new y_(this,this.input)},t}(l_),f_=function(e){X(t,e);function t(t,n,r){var i=e.call(this)||this;return i.parentTask=t,i.input=n,i.extractedFaces=r,i}return t}(Mg),p_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t,n=this;return Q(this,function(r){switch(r.label){case 0:return[4,this.parentTask];case 1:return e=r.sent(),[4,Ng(e,this.input,function(e){return Z(n,void 0,void 0,function(){return Q(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return o_.ageGenderNet.predictAgeAndGender(e)}))];case 1:return[2,t.sent()]}})})},this.extractedFaces)];case 2:return t=r.sent(),[2,e.map(function(e,n){var r=t[n],i=r.age,a=r.gender,o=r.genderProbability;return Gh(Kh(e,a,o),i)})]}})})},t.prototype.withFaceExpressions=function(){return new c_(this,this.input)},t}(f_),m_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t,n,r,i;return Q(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),e?[4,Pg(e,this.input,function(e){return o_.ageGenderNet.predictAgeAndGender(e)},this.extractedFaces)]:[2];case 2:return t=a.sent(),n=t.age,r=t.gender,i=t.genderProbability,[2,Gh(Kh(e,r,i),n)]}})})},t.prototype.withFaceExpressions=function(){return new l_(this,this.input)},t}(f_),h_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new u_(this,this.input)},t.prototype.withFaceDescriptors=function(){return new v_(this,this.input)},t}(p_),g_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new d_(this,this.input)},t.prototype.withFaceDescriptor=function(){return new y_(this,this.input)},t}(m_),__=function(e){X(t,e);function t(t,n){var r=e.call(this)||this;return r.parentTask=t,r.input=n,r}return t}(Mg),v_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t;return Q(this,function(n){switch(n.label){case 0:return[4,this.parentTask];case 1:return e=n.sent(),[4,Ng(e,this.input,function(e){return Promise.all(e.map(function(e){return o_.faceRecognitionNet.computeFaceDescriptor(e)}))},null,function(e){return e.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return t=n.sent(),[2,t.map(function(t,n){return Wh(e[n],t)})]}})})},t.prototype.withFaceExpressions=function(){return new u_(this,this.input)},t.prototype.withAgeAndGender=function(){return new h_(this,this.input)},t}(__),y_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t;return Q(this,function(n){switch(n.label){case 0:return[4,this.parentTask];case 1:return e=n.sent(),e?[4,Pg(e,this.input,function(e){return o_.faceRecognitionNet.computeFaceDescriptor(e)},null,function(e){return e.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return t=n.sent(),[2,Wh(e,t)]}})})},t.prototype.withFaceExpressions=function(){return new d_(this,this.input)},t.prototype.withAgeAndGender=function(){return new g_(this,this.input)},t}(__),b_=function(e){X(t,e);function t(t,n,r){var i=e.call(this)||this;return i.parentTask=t,i.input=n,i.useTinyLandmarkNet=r,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?o_.faceLandmark68TinyNet:o_.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(Mg),x_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t,n,r,i,a=this;return Q(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),t=e.map(function(e){return e.detection}),this.input instanceof Qe?[4,Mm(this.input,t)]:[3,3];case 2:return r=o.sent(),[3,5];case 3:return[4,jm(this.input,t)];case 4:r=o.sent(),o.label=5;case 5:return n=r,[4,Promise.all(n.map(function(e){return a.landmarkNet.detectLandmarks(e)}))];case 6:return i=o.sent(),n.forEach(function(e){return e instanceof Qe&&e.dispose()}),[2,e.map(function(e,t){return fh(e,i[t])})]}})})},t.prototype.withFaceExpressions=function(){return new u_(this,this.input)},t.prototype.withAgeAndGender=function(){return new h_(this,this.input)},t.prototype.withFaceDescriptors=function(){return new v_(this,this.input)},t}(b_),S_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t,n,r,i;return Q(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),e?(t=e.detection,this.input instanceof Qe?[4,Mm(this.input,[t])]:[3,3]):[2];case 2:return r=a.sent(),[3,5];case 3:return[4,jm(this.input,[t])];case 4:r=a.sent(),a.label=5;case 5:return n=r,[4,this.landmarkNet.detectLandmarks(n[0])];case 6:return i=a.sent(),n.forEach(function(e){return e instanceof Qe&&e.dispose()}),[2,fh(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new d_(this,this.input)},t.prototype.withAgeAndGender=function(){return new g_(this,this.input)},t.prototype.withFaceDescriptor=function(){return new y_(this,this.input)},t}(b_),C_=function(e){X(t,e);function t(t,n){n===void 0&&(n=new ug);var r=e.call(this)||this;return r.input=t,r.options=n,r}return t}(Mg),w_=function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t,n,r;return Q(this,function(i){switch(i.label){case 0:return e=this,t=e.input,n=e.options,n instanceof qh?[4,o_.mtcnn.forward(t,n)]:[3,2];case 1:return[2,i.sent().map(function(e){return e.detection})];case 2:if(r=n instanceof jg?function(e){return o_.tinyFaceDetector.locateFaces(e,n)}:n instanceof ug?function(e){return o_.ssdMobilenetv1.locateFaces(e,n)}:n instanceof Og?function(e){return o_.tinyYolov2.locateFaces(e,n)}:null,!r)throw Error(`detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options`);return[2,r(t)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(t){return Z(e,void 0,void 0,function(){var e;return Q(this,function(n){switch(n.label){case 0:return[4,this.run()];case 1:return e=n.sent(),[2,t(e.map(function(e){return rm({},e)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new x_(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new c_(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new p_(this.runAndExtendWithFaceDetections(),this.input)},t}(C_);(function(e){X(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,t;return Q(this,function(n){switch(n.label){case 0:return[4,new w_(this.input,this.options)];case 1:return e=n.sent(),t=e[0],e.forEach(function(e){e.score>t.score&&(t=e)}),[2,t]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(t){return Z(e,void 0,void 0,function(){var e;return Q(this,function(n){switch(n.label){case 0:return[4,this.run()];case 1:return e=n.sent(),[2,t(e?rm({},e):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new S_(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new l_(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new m_(this.runAndExtendWithFaceDetection(),this.input)},t})(C_);function T_(e,t){return t===void 0&&(t=new ug),new w_(e,t)}function E_(e,t){if(e.length!==t.length)throw Error(`euclideanDistance: arr1.length !== arr2.length`);var n=Array.from(e),r=Array.from(t);return Math.sqrt(n.map(function(e,t){return e-r[t]}).reduce(function(e,t){return e+t**2},0))}(function(){function e(e,t){t===void 0&&(t=.6),this._distanceThreshold=t;var n=Array.isArray(e)?e:[e];if(!n.length)throw Error(`FaceRecognizer.constructor - expected atleast one input`);var r=1,i=function(){return`person `+r++};this._labeledDescriptors=n.map(function(e){if(e instanceof tm)return e;if(e instanceof Float32Array)return new tm(i(),[e]);if(e.descriptor&&e.descriptor instanceof Float32Array)return new tm(i(),[e.descriptor]);throw Error(`FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>`)})}return Object.defineProperty(e.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),e.prototype.computeMeanDistance=function(e,t){return t.map(function(t){return E_(t,e)}).reduce(function(e,t){return e+t},0)/(t.length||1)},e.prototype.matchDescriptor=function(e){var t=this;return this.labeledDescriptors.map(function(n){var r=n.descriptors,i=n.label;return new $p(i,t.computeMeanDistance(e,r))}).reduce(function(e,t){return e.distance<t.distance?e:t})},e.prototype.findBestMatch=function(e){var t=this.matchDescriptor(e);return t.distance<this.distanceThreshold?t:new $p(`unknown`,t.distance)},e.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(e){return e.toJSON()})}},e.fromJSON=function(t){return new e(t.labeledDescriptors.map(function(e){return tm.fromJSON(e)}),t.distanceThreshold)},e})();var D_=!1,O_=null,k_=async e=>{if(D_)return e?.(100),Promise.resolve();if(O_)return O_;O_=(async()=>{let t=`/models`;await o_.tinyFaceDetector.loadFromUri(t),e?.(35),await o_.faceLandmark68Net.loadFromUri(t),e?.(70),await o_.faceRecognitionNet.loadFromUri(t),e?.(100),D_=!0})();try{await O_}catch(e){throw O_=null,e}return O_},A_=`idle`,j_=()=>{let[e,t]=(0,y.useState)(A_),[n,r]=(0,y.useState)(``),[i,a]=(0,y.useState)(0),[o,s]=(0,y.useState)(!1),[c,l]=(0,y.useState)(null),[u,d]=(0,y.useState)(null),[f,p]=(0,y.useState)(null),[m,h]=(0,y.useState)(!1),g=(0,y.useRef)(null),_=(0,y.useRef)(null),v=(0,y.useRef)(null);(0,y.useEffect)(()=>{let e=!1;return k_(t=>{e||a(t)}).then(()=>{e||(s(!0),a(100))}).catch(()=>{e||(t(`error`),r(`Face verification could not start because the model files failed to load. Refresh the page and try again.`))}),()=>{e=!0}},[]),(0,y.useEffect)(()=>{let e=g.current;return!c||!e?void 0:(e.srcObject=c,(async()=>{try{await e.play(),h(!0)}catch{t(`error`),r(`The camera stream could not start. Please try again.`)}})(),()=>{e.onloadedmetadata=null})},[c]);let b=(0,y.useCallback)(()=>{let n=v.current;n&&(n.getTracks().forEach(e=>e.stop()),v.current=null),l(null),h(!1),g.current&&(g.current.srcObject=null),e!==`captured`&&t(`idle`)},[e]),x=(0,y.useCallback)(async()=>{if(r(``),d(null),p(null),!navigator.mediaDevices?.getUserMedia)t(`error`),r(`This browser does not expose a camera API. Use a modern browser over HTTPS or localhost.`);else{t(`starting`);try{let e=await navigator.mediaDevices.getUserMedia({video:{facingMode:`user`,width:{ideal:1280},height:{ideal:960}},audio:!1});v.current=e,l(e),t(`ready`),r(`Camera ready. Center your face inside the guide.`)}catch(e){let n=e?.name||``,i=`The camera could not be opened. Check your connection and try again.`;n===`NotAllowedError`||n===`PermissionDeniedError`?i=`Camera permission was denied. Allow camera access in your browser settings, then try again.`:n===`NotFoundError`||n===`DevicesNotFoundError`?i=`No camera was found. Connect a webcam and try again.`:(n===`NotReadableError`||n===`TrackStartError`)&&(i=`The camera is being used by another application. Close it and try again.`),t(`error`),r(i)}}},[]),S=(0,y.useCallback)(()=>{d(null),p(null),v.current?(r(`Camera ready. Center your face inside the guide.`),t(`ready`)):x()},[x]),C=(0,y.useCallback)(async()=>{if(!g.current||!v.current){t(`error`),r(`The camera is not active. Enable it and try again.`);return}if(!o){r(`Face models are still loading. Give it a moment.`);return}let e=g.current,n=_.current;if(!e.videoWidth||!n){r(`The camera is still starting. Wait a moment and try again.`);return}t(`detecting`),r(`Checking your face…`);let i=Math.min(1,720/e.videoWidth);n.width=Math.round(e.videoWidth*i),n.height=Math.round(e.videoHeight*i),n.getContext(`2d`).drawImage(e,0,0,n.width,n.height);let a=n.toDataURL(`image/jpeg`,.85);d(a);try{let n=await T_(e,new jg({inputSize:416,scoreThreshold:.5})).withFaceLandmarks().withFaceDescriptors();if(n.length===0){d(null),t(`ready`),r(`No face detected. Move closer, face the camera, and try again.`);return}if(n.length>1){d(null),t(`ready`),r(`More than one face is visible. Only one person may be in frame.`);return}if(!n[0].descriptor){d(null),t(`ready`),r(`A face was found but could not be read. Try again with better light.`);return}p(Array.from(n[0].descriptor)),t(`captured`),r(`Face captured. Review the photo, then continue.`)}catch{d(null),t(`ready`),r(`Face processing failed. Hold still and try again.`)}},[o]);return(0,y.useEffect)(()=>()=>{let e=v.current;e&&e.getTracks().forEach(e=>e.stop())},[]),{status:e,message:n,progress:i,modelsLoaded:o,stream:c,image:u,descriptor:f,videoReady:m,videoRef:g,canvasRef:_,startCamera:x,stopCamera:b,retake:S,capture:C,isBusy:e===`starting`||e===`detecting`,isCaptured:e===`captured`&&!!(f&&u)}},$=n(),M_=({onCapture:e,onCancel:t,buttonText:n=`Use this photo`,showCancelButton:r=!0,disabled:i=!1,className:o,title:g=`Face verification`})=>{let{status:v,message:y,progress:b,modelsLoaded:x,stream:S,image:C,descriptor:w,videoReady:T,videoRef:E,canvasRef:D,startCamera:O,stopCamera:k,retake:A,capture:j,isBusy:M,isCaptured:N}=j_(),P=!(!S||C),F=!S&&!C,ee=v===`error`?`danger`:N?`success`:`info`;return(0,$.jsxs)(`div`,{className:a(`space-y-4`,o),children:[(0,$.jsxs)(`div`,{className:`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-[#0b1220] shadow-card`,children:[P&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`video`,{ref:E,autoPlay:!0,muted:!0,playsInline:!0,className:`h-full w-full object-cover`,"aria-label":`Live camera preview`}),(0,$.jsx)(`div`,{className:`pointer-events-none absolute inset-6 rounded-[42%] border-2 border-dashed border-white/45 sm:inset-10`}),(0,$.jsx)(`div`,{className:`pointer-events-none absolute left-4 top-4 h-7 w-7 rounded-tl-xl border-l-2 border-t-2 border-white/80`}),(0,$.jsx)(`div`,{className:`pointer-events-none absolute right-4 top-4 h-7 w-7 rounded-tr-xl border-r-2 border-t-2 border-white/80`}),(0,$.jsx)(`div`,{className:`pointer-events-none absolute bottom-4 left-4 h-7 w-7 rounded-bl-xl border-b-2 border-l-2 border-white/80`}),(0,$.jsx)(`div`,{className:`pointer-events-none absolute bottom-4 right-4 h-7 w-7 rounded-br-xl border-b-2 border-r-2 border-white/80`}),(0,$.jsxs)(`div`,{className:`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur`,children:[(0,$.jsx)(`span`,{className:`h-1.5 w-1.5 rounded-full bg-[#47cd89]`}),`Camera live`]})]}),C&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`img`,{src:C,alt:`Captured face preview`,className:`h-full w-full object-cover`}),(0,$.jsxs)(`div`,{className:`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#067647] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white`,children:[(0,$.jsx)(s,{className:`h-3 w-3`}),`Captured`]})]}),F&&(0,$.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-3 px-6 text-center`,children:[(0,$.jsx)(`div`,{className:`grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white/80`,children:(0,$.jsx)(f,{className:`h-7 w-7`,strokeWidth:1.4})}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`p`,{className:`text-sm font-semibold text-white`,children:g}),(0,$.jsx)(`p`,{className:`mt-1 text-xs leading-relaxed text-white/60`,children:`Your camera stays off until you enable it. Only a mathematical template is stored.`})]})]}),M&&(0,$.jsx)(`div`,{className:`absolute inset-0 grid place-items-center bg-[#0b1220]/60 backdrop-blur-[2px]`,children:(0,$.jsxs)(`div`,{className:`flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white`,children:[(0,$.jsx)(d,{}),v===`detecting`?`Checking your face…`:`Starting camera…`]})}),(0,$.jsx)(`canvas`,{ref:D,className:`hidden`})]}),!x&&(0,$.jsxs)(`div`,{className:`space-y-2 rounded-xl border border-line bg-surface-2/60 p-3`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between text-xs font-medium text-muted`,children:[(0,$.jsx)(`span`,{children:`Preparing face verification…`}),(0,$.jsxs)(`span`,{className:`tabular-nums`,children:[Math.round(b),`%`]})]}),(0,$.jsx)(h,{value:b,"aria-label":`Loading face verification models`})]}),y&&(0,$.jsx)(`div`,{"aria-live":`polite`,children:(0,$.jsx)(m,{variant:ee,children:y})}),(0,$.jsxs)(`div`,{className:`flex flex-col gap-2 sm:flex-row`,children:[F&&(0,$.jsxs)(p,{type:`button`,onClick:O,disabled:!x||M,className:`w-full sm:w-auto`,children:[(0,$.jsx)(_,{className:`h-4 w-4`}),` Enable camera`]}),P&&(0,$.jsxs)(p,{type:`button`,onClick:j,disabled:!T||M||!x,className:`w-full sm:w-auto`,children:[(0,$.jsx)(_,{className:`h-4 w-4`}),` Capture photo`]}),C&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(p,{type:`button`,variant:`secondary`,onClick:A,children:[(0,$.jsx)(u,{className:`h-4 w-4`}),` Retake`]}),(0,$.jsxs)(p,{type:`button`,variant:`verify`,onClick:()=>{N&&!i&&(k(),e?.({image:C,descriptor:w}))},disabled:i,children:[(0,$.jsx)(l,{className:`h-4 w-4`}),` `,n]})]}),r&&(0,$.jsx)(p,{type:`button`,variant:`ghost`,onClick:()=>{k(),t?.()},children:`Cancel`})]}),(0,$.jsxs)(`p`,{className:`flex items-start gap-2 text-[11px] leading-relaxed text-subtle`,children:[(0,$.jsx)(c,{className:`mt-0.5 h-3.5 w-3.5 shrink-0 text-verify`}),`Your face is processed in this browser. We never store the camera image — only an encrypted 128-number template.`]})]})};export{M_ as WebcamCapture,M_ as default};