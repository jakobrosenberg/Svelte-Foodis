function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(t){let e;return a(t,(t=>e=t))(),e}function l(t,e,n){t.$$.on_destroy.push(a(e,n))}function u(t,e,n,o){if(t){const r=p(t,e,n,o);return t[0](r)}}function p(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,e,n,o,r,s,i){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(a){const r=p(e,n,o,i);t.p(r,a)}}function d(t,e,n=e){return t.set(n),e}function h(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function _(){return w(" ")}function x(){return w("")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function P(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t){return""===t?null:+t}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function O(t,e){t.value=null==e?"":e}function L(t,e,n){t.classList[n?"add":"remove"](e)}let I;function S(t){I=t}function N(){if(!I)throw new Error("Function called outside component initialization");return I}function T(t){N().$$.on_mount.push(t)}function F(t,e){N().$$.context.set(t,e)}function A(t){return N().$$.context.get(t)}const R=[],M=[],C=[],q=[],B=Promise.resolve();let U=!1;function D(){U||(U=!0,B.then(W))}function H(){return D(),B}function K(t){C.push(t)}let J=!1;const z=new Set;function W(){if(!J){J=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];S(e),G(e.$$)}for(S(null),R.length=0;M.length;)M.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];z.has(e)||(z.add(e),e())}C.length=0}while(R.length);for(;q.length;)q.pop()();U=!1,J=!1,z.clear()}}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const Q=new Set;let V;function Z(){V={r:0,c:[],p:V}}function X(){V.r||r(V.c),V=V.p}function Y(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function tt(t,e,n,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),V.c.push((()=>{Q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function et(t,e){t.d(1),e.delete(t.key)}function nt(t,e){tt(t,1,1,(()=>{e.delete(t.key)}))}function ot(t,e,n,o,r,s,i,a,c,l,u,p){let f=t.length,d=s.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=d;h--;){const t=p(r,s,h),a=n(t);let c=i.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,g[h]=c),a in m&&$.set(a,Math.abs(h-m[a]))}const b=new Set,w=new Set;function _(t){Y(t,1),t.m(a,u),i.set(t.key,t),u=t.first,d--}for(;f&&d;){const e=g[d-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,d--):y.has(r)?!i.has(o)||b.has(o)?_(e):w.has(r)?f--:$.get(o)>$.get(r)?(w.add(o),_(e)):(b.add(r),f--):(c(n,i),f--)}for(;f--;){const e=t[f];y.has(e.key)||c(e,i)}for(;d;)_(g[d-1]);return g}function rt(t){t&&t.c()}function st(t,e,o,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,o),i||K((()=>{const e=c.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(K)}function it(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(e,n,s,i,a,c,l=[-1]){const u=I;S(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:l,skip_bound:!1};let f=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),f&&function(t,e){-1===t.$$.dirty[0]&&(R.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),f=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&Y(e.$$.fragment),st(e,n.target,n.anchor,n.customElement),W()}S(u)}class ct{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var lt={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce(((t,[e,n])=>(t[e]=n,t)),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()},urlTransform:{apply:t=>t,remove:t=>t},useHash:!1};const ut=RegExp(/\:([^/()]+)/g);function pt(t,e){if(navigator.userAgent.includes("jsdom"))return!1;e&&ft(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(t.substring(1))){const e=document.querySelector(t);e&&e.scrollIntoView()}}}()}function ft(t){t&&t.scrollTo&&"scroll-lock"!==t.dataset.routify&&"lock"!==t.dataset["routify-scroll"]&&(t.style["scroll-behavior"]="auto",t.scrollTo({top:0,behavior:"auto"}),t.style["scroll-behavior"]="",ft(t.parentElement))}const dt=t=>{const e=[];let n;for(;n=ut.exec(t);)e.push(n[1]);return e};function ht(t,e){ht._console=ht._console||{log:console.log,warn:console.warn};const{_console:n}=ht,o=t.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,t.component.shortPath.split("/").pop()).replace(/^./,(t=>t.toUpperCase())).replace(/\:(.+)/,"U5B$1u5D"),r=[`<${o}> received an unexpected slot "default".`,`<${o}> was created with unknown prop 'scoped'`,`<${o}> was created with unknown prop 'scopedSync'`];for(const t of["log","warn"])console[t]=(...e)=>{r.includes(e[0])||n[t](...e)},e().then((()=>{console[t]=n[t]}))}function mt(){let t=window.location.pathname+window.location.search+window.location.hash;const{url:e,options:n}=function(t){const[e,n]=t.split("__[[routify_url_options]]__"),o=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=o.prefetch,{url:e,options:o}}(t);return{...gt(e),options:n}}function gt(t){lt.useHash&&(t=t.replace(/.*#(.+)/,"$1"));const e=t.startsWith("/")?window.location.origin:void 0,n=new URL(t,e);return{url:n,fullpath:n.pathname+n.search+n.hash}}function yt(t,e,n){const o=lt.useHash?"#":"";let r;return r=function(t,e,n){const o=Object.assign({},n,e),r=function(t,e){if(!lt.queryHandler)return"";const n=dt(t),o={};e&&Object.entries(e).forEach((([t,e])=>{n.includes(t)||(o[t]=e)}));return lt.queryHandler.stringify(o).replace(/\?$/,"")}(t,e);for(const[e,n]of Object.entries(o))t=t.replace(`:${e}`,n);return`${t}${r}`}(t,e,n),r=lt.urlTransform.apply(r),r=o+r,r}function $t(t){let e;const n=t[2].default,o=u(n,t,t[1],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[e]){o&&o.p&&2&e&&f(o,n,t,t[1],e,null,null)},i(t){e||(Y(o,t),e=!0)},o(t){tt(o,t),e=!1},d(t){o&&o.d(t)}}}function bt(t,e,n){let{$$slots:o={},$$scope:r}=e,{scoped:s={}}=e;return t.$$set=t=>{"scoped"in t&&n(0,s=t.scoped),"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o]}class wt extends ct{constructor(t){super(),at(this,t,bt,$t,i,{scoped:0})}}const _t=[];function xt(t,e){return{subscribe:vt(t,e).subscribe}}function vt(e,n=t){let o;const r=[];function s(t){if(i(e,t)&&(e=t,o)){const t=!_t.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),_t.push(n,e)}if(t){for(let t=0;t<_t.length;t+=2)_t[t][0](_t[t+1]);_t.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.push(c),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Pt(e,n,o){const i=!Array.isArray(e),c=i?[e]:e,l=n.length<2;return xt(o,(e=>{let o=!1;const u=[];let p=0,f=t;const d=()=>{if(p)return;f();const o=n(i?u[0]:u,e);l?e(o):f=s(o)?o:t},h=c.map(((t,e)=>a(t,(t=>{u[e]=t,p&=~(1<<e),o&&d()}),(()=>{p|=1<<e}))));return o=!0,d(),function(){r(h),f()}}))}window.routify=window.routify||{};const kt=vt(null),jt=vt([]);jt.subscribe((t=>window.routify.routes=t));let Et=vt({component:{params:{}}});const Ot=vt(null),Lt=vt(!0);async function It({page:t,metatags:e,afterPageLoad:n,parentNode:o}){const r=t.last!==t;setTimeout((()=>pt(o,r)));const{path:s}=t,{options:i}=mt(),a=i.prefetch;for(const e of n._hooks)e&&await e(t.api);e.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:s,prefetchId:a},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}function St(t,e=!1){t=lt.urlTransform.remove(t);let{pathname:n,search:o}=gt(t).url;const r=c(jt),s=r.find((t=>n===t.meta.name))||r.find((t=>n.match(t.regex)));if(!s)throw new Error(`Route could not be found for "${n}".`);const i=e?Object.create(s):s,{route:a,redirectPath:l,rewritePath:u}=Nt(i,r);return u&&(({pathname:n,search:o}=gt(yt(u,a.params)).url),l&&(a.redirectTo=yt(l,a.params||{}))),lt.queryHandler&&(a.params=Object.assign({},lt.queryHandler.parse(o))),function(t,e){if(t.paramKeys){const n=function(t){const e=[];return t.forEach((t=>{e[t.path.split("/").filter(Boolean).length-1]=t})),e}(t.layouts),o=e.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map((t=>t.match(/\:(.+)/))).map((t=>t&&t[1]))})(t.path).forEach(((e,r)=>{e&&(t.params[e]=o[r],n[r]?n[r].param={[e]:o[r]}:t.param={[e]:o[r]})}))}}(a,n),a.leftover=t.replace(new RegExp(a.regex),""),a}function Nt(t,e,n,o){const{redirect:r,rewrite:s}=t.meta;if(r||s){n=r?r.path||r:n,o=s?s.path||s:n;const i=r&&r.params,a=s&&s.params,c=e.find((t=>t.path===o));return c===t&&console.error(`${o} is redirecting to itself`),c||console.error(`${t.path} is redirecting to non-existent path: ${o}`),(i||a)&&(c.params=Object.assign({},c.params,i,a)),Nt(c,e,n,o)}return{route:t,redirectPath:n,rewritePath:o}}function Tt(t,e,n){const o=t.slice();return o[1]=e[n],o}function Ft(t,e){let n,o;return{key:t,first:null,c(){n=$("iframe"),n.src!==(o=e[1].url)&&k(n,"src",o),k(n,"frameborder","0"),k(n,"title","routify prefetcher"),this.first=n},m(t,e){m(t,n,e)},p(t,r){e=t,1&r&&n.src!==(o=e[1].url)&&k(n,"src",o)},d(t){t&&g(n)}}}function At(e){let n,o=[],r=new Map,s=e[0];const i=t=>t[1].options.prefetch;for(let t=0;t<s.length;t+=1){let n=Tt(e,s,t),a=i(n);r.set(a,o[t]=Ft(a,n))}return{c(){n=$("div");for(let t=0;t<o.length;t+=1)o[t].c();var t,e,r;k(n,"id","__routify_iframes"),t="display",e="none",n.style.setProperty(t,e,r?"important":"")},m(t,e){m(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){1&e&&(s=t[0],o=ot(o,e,i,1,t,s,r,n,et,Ft,null,Tt))},i:t,o:t,d(t){t&&g(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}const Rt=vt([]),Mt=Pt(Rt,(t=>t.slice(0,2)));function Ct(t){const e=t.data?t.data.prefetchId:t;if(!e)return null;const n=c(Rt).find((t=>t&&t.options.prefetch==e));if(n){const{gracePeriod:t}=n.options,o=new Promise((e=>setTimeout(e,t))),r=new Promise((e=>{window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,t+1e3)}));Promise.all([o,r]).then((()=>{Rt.update((t=>t.filter((t=>t.options.prefetch!=e))))}))}}function qt(t,e,n){let o;return l(t,Mt,(t=>n(0,o=t))),[o]}Mt.subscribe((t=>t.forEach((({options:t})=>{setTimeout((()=>Ct(t.prefetch)),t.timeout)})))),addEventListener("message",Ct,!1);class Bt extends ct{constructor(t){super(),at(this,t,qt,At,i,{})}}function Ut(){return A("routify")||Et}const Dt={subscribe:t=>Pt(kt,(t=>t.api)).subscribe(t)},Ht={subscribe:t=>(window.routify.stopAutoReady=!0,t((async function(){await H(),await It({page:c(kt),metatags:Vt,afterPageLoad:Kt})})),()=>{})},Kt={_hooks:[t=>Lt.set(!1)],subscribe:zt},Jt={_hooks:[],subscribe:zt};function zt(t){const e=this._hooks,n=e.length;return t((t=>{e[n]=t})),()=>delete e[n]}const Wt={subscribe:t=>Pt(Ut(),(t=>t.route.params)).subscribe(t)},Gt={subscribe(t){const e=Ut(),{route:n,routes:o}=c(e);return Pt(e,(t=>{return e=t,r=n,s=o,function(t,n={},o){const{component:i}=e,a=Object.assign({},r.params,i.params);let c=t&&t.nodeType&&t;c&&(t=t.getAttribute("href")),t=t?p(t):i.shortPath;const l=s.find((e=>[e.shortPath||"/",e.path].includes(t)));if(l&&"proximity"===l.meta.preload&&window.requestIdleCallback){const t=routify.appLoaded?0:1500;setTimeout((()=>{window.requestIdleCallback((()=>l.api.preload()))}),t)}o&&!1!==o.strict||(t=t.replace(/index$/,""));let u=yt(t,n,a);return c?(c.href=u,{update(e){c.href=yt(t,e,a)}}):u;function p(t){if(t.match(/^\.\.?\//)){let[,e,n]=t.match(/^([\.\/]+)(.*)/),o=i.path.replace(/\/$/,"");const r=e.match(/\.\.\//g)||[];i.isPage&&r.push(null),r.forEach((()=>o=o.replace(/\/[^\/]+\/?$/,""))),t=(t=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(t.match(/^\//));else{const e=s.find((e=>e.meta.name===t));e&&(t=e.shortPath)}return t}};var e,r,s})).subscribe(t)}};const Qt={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(Qt.getLongest(Qt.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){Qt.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){Qt.writeMeta(`og:${t}`,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=c(kt).path;return n[Object.keys(t[e]).filter((t=>o.includes(t))).sort(((t,e)=>e.length-t.length))[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:s,valueField:i}=Vt.services[r]||Vt.services.plain,a=document.querySelector(`meta[${s}='${t}']`);a&&a.remove();const c=document.createElement("meta");c.setAttribute(s,t),c.setAttribute(i,e),c.setAttribute("data-origin","routify"),n.appendChild(c)},set(t,e){Qt.plugins.forEach((n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])}))},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=Qt.getOrigin();Qt.templates[t]=Qt.templates[t]||{},Qt.templates[t][n]=e},update(){Object.keys(Qt.props).forEach((t=>{let e=Qt.getLongest(Qt.props,t);Qt.plugins.forEach((n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])}))}))},batchedUpdate(){Qt._pendingUpdate||(Qt._pendingUpdate=!0,setTimeout((()=>{Qt._pendingUpdate=!1,this.update()})))},_updateQueued:!1,getOrigin(){const t=Ut();return t&&c(t).path||"/"},_pendingUpdate:!1},Vt=new Proxy(Qt,{set(t,e,n,o){const{props:r,getOrigin:s}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][s()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});function Zt(t,e,n){const o=t.slice();return o[21]=e[n].component,o[22]=e[n].componentFile,o[2]=e[n].decorator,o[1]=e[n].nodes,o}function Xt(t){let e,n,o=[],r=new Map,s=[t[4]];const i=t=>t[6];for(let e=0;e<1;e+=1){let n=Zt(t,s,e),a=i(n);r.set(a,o[e]=ne(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=x()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);m(t,e,r),n=!0},p(t,n){33554557&n&&(s=[t[4]],Z(),o=ot(o,n,i,1,t,s,r,e.parentNode,nt,ne,e,Zt),X())},i(t){if(!n){for(let t=0;t<1;t+=1)Y(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)tt(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&g(e)}}}function Yt(t){let e,n;return e=new se({props:{decorator:t[2],nodes:t[1],scoped:{...t[0],...t[25]}}}),{c(){rt(e.$$.fragment)},m(t,o){st(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.decorator=t[2]),16&n&&(o.nodes=t[1]),33554433&n&&(o.scoped={...t[0],...t[25]}),e.$set(o)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){tt(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function te(t){let e,n,o=t[21]&&t[1].length&&Yt(t);return{c(){o&&o.c(),e=x()},m(t,r){o&&o.m(t,r),m(t,e,r),n=!0},p(t,n){t[21]&&t[1].length?o?(o.p(t,n),16&n&&Y(o,1)):(o=Yt(t),o.c(),Y(o,1),o.m(e.parentNode,e)):o&&(Z(),tt(o,1,1,(()=>{o=null})),X())},i(t){n||(Y(o),n=!0)},o(t){tt(o),n=!1},d(t){o&&o.d(t),t&&g(e)}}}function ee(t){let n,o,r;const s=[{scoped:t[0]},{scopedSync:t[5]},t[3].param||{}];var i=t[22];function a(t){let n={$$slots:{default:[te,({scoped:t,decorator:e})=>({25:t,2:e}),({scoped:t,decorator:e})=>(t?33554432:0)|(e?4:0)]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(a(t))),{c(){n&&rt(n.$$.fragment),o=_()},m(t,e){n&&st(n,t,e),m(t,o,e),r=!0},p(t,e){const r=41&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],a=e[s];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(s,[1&e&&{scoped:t[0]},32&e&&{scopedSync:t[5]},8&e&&(c=t[3].param||{},"object"==typeof c&&null!==c?c:{})]):{};var c;if(100663317&e&&(r.$$scope={dirty:e,ctx:t}),i!==(i=t[22])){if(n){Z();const t=n;tt(t.$$.fragment,1,0,(()=>{it(t,1)})),X()}i?(n=new i(a(t)),rt(n.$$.fragment),Y(n.$$.fragment,1),st(n,o.parentNode,o)):n=null}else i&&n.$set(r)},i(t){r||(n&&Y(n.$$.fragment,t),r=!0)},o(t){n&&tt(n.$$.fragment,t),r=!1},d(t){n&&it(n,t),t&&g(o)}}}function ne(t,e){let n,o,r,s;var i=e[2];function a(t){return{props:{scoped:t[0],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return i&&(o=new i(a(e))),{key:t,first:null,c(){n=x(),o&&rt(o.$$.fragment),r=x(),this.first=n},m(t,e){m(t,n,e),o&&st(o,t,e),m(t,r,e),s=!0},p(t,n){e=t;const s={};if(1&n&&(s.scoped=e[0]),67108925&n&&(s.$$scope={dirty:n,ctx:e}),i!==(i=e[2])){if(o){Z();const t=o;tt(t.$$.fragment,1,0,(()=>{it(t,1)})),X()}i?(o=new i(a(e)),rt(o.$$.fragment),Y(o.$$.fragment,1),st(o,r.parentNode,r)):o=null}else i&&o.$set(s)},i(t){s||(o&&Y(o.$$.fragment,t),s=!0)},o(t){o&&tt(o.$$.fragment,t),s=!1},d(t){t&&g(n),t&&g(r),o&&it(o,t)}}}function oe(e){let n,o,r,i,a,c=e[4]&&Xt(e);return{c(){c&&c.c(),n=_(),o=$("span")},m(l,u){var p;c&&c.m(l,u),m(l,n,u),m(l,o,u),r=!0,i||(p=e[9].call(null,o),a=p&&s(p.destroy)?p.destroy:t,i=!0)},p(t,[e]){t[4]?c?(c.p(t,e),16&e&&Y(c,1)):(c=Xt(t),c.c(),Y(c,1),c.m(n.parentNode,n)):c&&(Z(),tt(c,1,1,(()=>{c=null})),X())},i(t){r||(Y(c),r=!0)},o(t){tt(c),r=!1},d(t){c&&c.d(t),t&&g(n),t&&g(o),i=!1,a()}}}function re(t,e,n){let o,r,s,i,a;l(t,kt,(t=>n(15,i=t))),l(t,jt,(t=>n(16,a=t)));let c,{nodes:u=[]}=e,{scoped:p={}}=e,{decorator:f}=e,h=null,m=null,g={},y=1;const $=vt(null);l(t,$,(t=>n(4,r=t)));const b=A("routify")||Et;l(t,b,(t=>n(14,s=t)));F("routify",$);let w=[];function _(t){n(5,g={...p});const e={...r,nodes:m,decorator:f||wt,layout:h.isLayout?h:s.layout,component:h,route:i,routes:a,componentFile:t,parentNode:c||s.parentNode};$.set(e),d(b,s.child=h,s),0===m.length&&async function(){await new Promise((t=>setTimeout(t)));const t=r.component.path===i.path;!window.routify.stopAutoReady&&t&&It({page:r.component,metatags:Vt,afterPageLoad:Kt,parentNode:c})}()}return t.$$set=t=>{"nodes"in t&&n(1,u=t.nodes),"scoped"in t&&n(0,p=t.scoped),"decorator"in t&&n(2,f=t.decorator)},t.$$.update=()=>{3074&t.$$.dirty&&w!==u&&(n(11,w=u),n(3,[h,...m]=[...u],h),n(3,h.api.reset=()=>n(10,y++,y),h)),8&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then(_):_(e)}(h),1040&t.$$.dirty&&n(6,o=r&&y&&function({meta:t,path:e,param:n,params:o}){return JSON.stringify({path:e,invalidate:y,param:(t["param-is-page"]||t["slug-is-page"])&&n,queryParams:t["query-params-is-page"]&&o})}(r.component)),16&t.$$.dirty&&r&&ht(r,H)},[p,u,f,h,r,g,o,$,b,t=>c=t.parentNode,y,w]}class se extends ct{constructor(t){super(),at(this,t,re,oe,i,{nodes:1,scoped:0,decorator:2})}}function ie(t,e){let n=!1;function o(o,r){const s=St(o||mt().fullpath);s.redirectTo&&(history.replaceStateNative({},null,s.redirectTo),delete s.redirectTo);const i=[...(r&&St(mt().fullpath,t)||s).layouts,s];n&&delete n.last,s.last=n,n=s,o||Ot.set(s),kt.set(s),s.api.preload().then((()=>{Lt.set(!0),e(i)}))}const r=function(t){["pushState","replaceState"].forEach((t=>{history[t+"Native"]||(history[t+"Native"]=history[t]),history[t]=async function(e={},n,o){if(o===location.pathname+location.search+location.hash)return!1;const{id:r,path:s,params:i}=c(kt);e={id:r,path:s,params:i,...e};const a=new Event(t.toLowerCase());Object.assign(a,{state:e,title:n,url:o});return await ce(a,o)?(history[t+"Native"].apply(this,[e,n,o]),dispatchEvent(a)):void 0}}));let e=!1;const n={click:ae,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await ce(n,mt().fullpath)?t():(e=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach((t=>addEventListener(...t)));return()=>{Object.entries(n).forEach((t=>removeEventListener(...t)))}}(o);return{updatePage:o,destroy:r}}function ae(t){const e=t.target.closest("a"),n=e&&e.href;if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented)return;if(!n||e.target||e.host!==location.host)return;const o=new URL(n),r=o.pathname+o.search+o.hash;t.preventDefault(),history.pushState({},"",r)}async function ce(t,e){const n=St(e).api;for(const o of Jt._hooks.filter(Boolean)){if(!await o(t,n,{url:e}))return!1}return!0}function le(t){let e,n;return e=new se({props:{nodes:t[0]}}),{c(){rt(e.$$.fragment)},m(t,o){st(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.nodes=t[0]),e.$set(o)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){tt(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function ue(t){let e,n,o,r=t[0]&&null!==t[1]&&le(t);return n=new Bt({}),{c(){r&&r.c(),e=_(),rt(n.$$.fragment)},m(t,s){r&&r.m(t,s),m(t,e,s),st(n,t,s),o=!0},p(t,[n]){t[0]&&null!==t[1]?r?(r.p(t,n),3&n&&Y(r,1)):(r=le(t),r.c(),Y(r,1),r.m(e.parentNode,e)):r&&(Z(),tt(r,1,1,(()=>{r=null})),X())},i(t){o||(Y(r),Y(n.$$.fragment,t),o=!0)},o(t){tt(r),tt(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&g(e),it(n,t)}}}function pe(t,e,n){let o;l(t,kt,(t=>n(1,o=t)));let r,s,{routes:i}=e,{config:a={}}=e;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(lt,a);F("routifyupdatepage",((...t)=>s&&s.updatePage(...t)));const c=t=>n(0,r=t),u=()=>{s&&(s.destroy(),s=null)};let p=null;var f;return f=u,N().$$.on_destroy.push(f),t.$$set=t=>{"routes"in t&&n(2,i=t.routes),"config"in t&&n(3,a=t.config)},t.$$.update=()=>{4&t.$$.dirty&&i&&(clearTimeout(p),p=setTimeout((()=>{u(),s=ie(i,c),jt.set(i),s.updatePage()})))},[r,o,i,a]}class fe extends ct{constructor(t){super(),at(this,t,pe,ue,i,{routes:2,config:3})}}function de(t){const e=async function(e){return await he(t,{file:e.tree,state:{treePayload:e},scope:{}})};return e.sync=function(e){return me(t,{file:e.tree,state:{treePayload:e},scope:{}})},e}async function he(t,e){const n=await t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=await Promise.all(o.children.map((async n=>he(t,{state:e.state,scope:ge(e.scope||{}),parent:e.file,file:await n}))));o.children=n.filter(Boolean)}return o}function me(t,e){const n=t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=o.children.map((n=>me(t,{state:e.state,scope:ge(e.scope||{}),parent:e.file,file:n})));o.children=n.filter(Boolean)}return o}function ge(t){return JSON.parse(JSON.stringify(t))}const ye=de((({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return`^${t=(t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(ut,"([^/]+)")+n}`})(t.path,t.isFallback))})),$e=de((({file:t})=>{t.paramKeys=dt(t.path)})),be=de((({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path})),we=de((({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map((t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C")).join(""))(t)})),_e=de((({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map((t=>({isMeta:!0,...t,meta:t})))))})),xe=de((t=>{const{file:e}=t,{isFallback:n,meta:o}=e,r=e.path.match("/:"),s=e.path.endsWith("/index"),i=o.index||0===o.index,a=!1===o.index;e.isIndexable=i||!n&&!r&&!s&&!a,e.isNonIndexable=!e.isIndexable})),ve=de((({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>ke(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>ke(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>Pe(e)})}));function Pe(t,e=[]){return t&&(e.unshift(t),Pe(t.parent,e)),e}function ke(t,e){if(!t.root){const n=t.parent.children.filter((t=>t.isIndexable)),o=n.indexOf(t);return n[o+e]}}const je=de((({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t})})),Ee=de((({file:t,scope:e})=>{function n(t){if(!t.isLayout&&t.meta.reset)return[];const{parent:e}=t,o=e&&e.component&&e,r=o&&(o.isReset||o.meta.reset),s=e&&!r&&n(e)||[];return o&&s.push(o),s}Object.defineProperty(t,"layouts",{get:()=>n(t)})})),Oe=de((({file:t})=>{const e=t.root?function(){}:t.children?(t.isPage,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)}));var Le=Object.freeze({__proto__:null,setRegex:ye,setParamKeys:$e,setShortPath:be,setRank:we,addMetaChildren:_e,setIsIndexable:xe,assignRelations:ve,assignIndex:je,assignLayout:Ee,createFlatList:t=>{de((t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)})).sync(t),t.routes.sort(((t,e)=>t.ranking>=e.ranking?-1:1))},setPrototype:Oe});const Ie={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function Se(t){return Object.entries(Ie).forEach((([e,n])=>{void 0===t[e]&&(t[e]=n)})),t.children&&(t.children=t.children.map(Se)),t}const Ne=de((({file:t})=>{t.api=new Te(t)}));class Te{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter((t=>!t.isNonIndexable)).sort(((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"})))).map((({api:t})=>t))}get next(){return Fe(this,1)}get prev(){return Fe(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file,this.index&&this.index.__file].filter(Boolean).map((t=>t.component()));await Promise.all(t)}get component(){return this.__file.component?this.__file.component():!!this.__file.index&&this.__file.index.component()}get componentWithIndex(){return new Promise((t=>Promise.all([this.component,this.index&&this.index.component]).then((e=>t(e)))))}get index(){const t=this.__file.children&&this.__file.children.find((t=>t.isIndex));return t&&t.api}}function Fe(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const Ae={...Le,restoreDefaults:({tree:t})=>Se(t),assignAPI:Ne};const Re={root:!0,children:[{isFallback:!0,path:"/_fallback",component:()=>import("./_fallback-99f01b66.js").then((t=>t.default))},{isDir:!0,children:[{isDir:!0,ext:"",children:[{isIndex:!0,isPage:!0,path:"/:cat/:slug/index",id:"__cat__slug_index",component:()=>import("./index-12124a5b.js").then((t=>t.default))}],path:"/:cat/:slug"},{isIndex:!0,isPage:!0,path:"/:cat/index",id:"__cat_index",component:()=>import("./index-ff6772a6.js").then((t=>t.default))}],isLayout:!0,path:"/:cat",id:"__cat__layout",component:()=>import("./_layout-7af0807e.js").then((t=>t.default))},{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>import("./index-23bcef4b.js").then((t=>t.default))},{isPage:!0,path:"/kassa",id:"_kassa",component:()=>import("./kassa-45d3bfb5.js").then((t=>t.default))}],isLayout:!0,path:"/",id:"__layout",component:()=>import("./_layout-ceb9b603.js").then((t=>t.default))},{tree:Me,routes:Ce}=function(t){const e=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(Ae[t].sync||Ae[t])(n)}return n}(Re);function qe(e){let n,o;return n=new fe({props:{routes:Ce}}),{c(){rt(n.$$.fragment)},m(t,e){st(n,t,e),o=!0},p:t,i(t){o||(Y(n.$$.fragment,t),o=!0)},o(t){tt(n.$$.fragment,t),o=!1},d(t){it(n,t)}}}!function(t,e={target:document.body},n="hmr",o="app-loaded"){const r=document.getElementById(n),s=document.createElement("div");function i(){removeEventListener(o,i),r&&r.remove(),s.style.visibility=null,s.setAttribute("id",n)}s.style.visibility="hidden",e.target.appendChild(s),r?addEventListener(o,i):i(),new t({...e,target:s})}(class extends ct{constructor(t){super(),at(this,t,null,qe,i,{})}},{target:document.body},"routify-app");export{Y as A,tt as B,T as C,P as D,b as E,K as F,rt as G,L as H,st as I,it as J,Z as K,X as L,Dt as M,Vt as N,ct as S,_ as a,k as b,m as c,h as d,$ as e,g as f,l as g,O as h,at as i,E as j,j as k,v as l,y as m,t as n,r as o,x as p,Wt as q,Ht as r,i as s,w as t,Gt as u,d as v,vt as w,xt as x,u as y,f as z};
//# sourceMappingURL=main.js.map
