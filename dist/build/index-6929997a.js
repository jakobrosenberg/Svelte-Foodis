import{S as t,i as e,s,e as l,b as r,c,a as n,t as a,d as i,j as o,f as u,m,o as d,n as p,g as f,p as g}from"./main.js";import{a as h,d as b}from"./store-998211f6.js";function x(t,e,s){const l=t.slice();return l[4]=e[s],l}function j(t,e,s){const l=t.slice();return l[4]=e[s],l}function v(t){let e,s=t[0].items,n=[];for(let e=0;e<s.length;e+=1)n[e]=w(x(t,s,e));return{c(){e=l("div");for(let t=0;t<n.length;t+=1)n[t].c();r(e,"id","products"),r(e,"class","tc grid up bold")},m(t,s){c(t,e,s);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,l){if(1&l){let r;for(s=t[0].items,r=0;r<s.length;r+=1){const c=x(t,s,r);n[r]?n[r].p(c,l):(n[r]=w(c),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},d(t){t&&u(e),m(n,t)}}}function y(t){let e,s=t[4].extra,n=[];for(let e=0;e<s.length;e+=1)n[e]=$(j(t,s,e));return{c(){e=l("div");for(let t=0;t<n.length;t+=1)n[t].c();r(e,"class","extra")},m(t,s){c(t,e,s);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,l){if(1&l){let r;for(s=t[4].extra,r=0;r<s.length;r+=1){const c=j(t,s,r);n[r]?n[r].p(c,l):(n[r]=$(c),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},d(t){t&&u(e),m(n,t)}}}function $(t){let e,s,m,d,p=t[4].abbr+"";return{c(){e=l("div"),s=l("span"),m=a(p),d=n(),r(s,"class","grid cell"),r(e,"class","inl")},m(t,l){c(t,e,l),i(e,s),i(s,m),i(e,d)},p(t,e){1&e&&p!==(p=t[4].abbr+"")&&o(m,p)},d(t){t&&u(e)}}}function w(t){let e,s,m,d,p,f,g,h,b,x,j,v,$,w,k,F,N,S,q,z,A,B=t[4].title+"",C=t[4].price.toFixed(2)+"",D=t[4].extra&&y(t);return{c(){e=l("a"),s=l("picture"),m=l("source"),p=n(),f=l("source"),h=n(),b=l("img"),v=n(),$=l("div"),w=a(B),k=n(),F=l("div"),N=a(C),S=a(" €"),q=n(),D&&D.c(),z=n(),r(m,"srcset",d=t[4].img[1]),r(m,"type","image/webp"),r(f,"srcset",g=t[4].img[0]),r(f,"type","image/jpeg"),b.src!==(x=t[4].img[0])&&r(b,"src",x),r(b,"alt",j=t[4].title),r(s,"class","block"),r($,"class","title"),r(F,"class","price"),r(e,"class","block"),r(e,"href",A=t[4].path)},m(t,l){c(t,e,l),i(e,s),i(s,m),i(s,p),i(s,f),i(s,h),i(s,b),i(e,v),i(e,$),i($,w),i(e,k),i(e,F),i(F,N),i(F,S),i(e,q),D&&D.m(e,null),i(e,z)},p(t,s){1&s&&d!==(d=t[4].img[1])&&r(m,"srcset",d),1&s&&g!==(g=t[4].img[0])&&r(f,"srcset",g),1&s&&b.src!==(x=t[4].img[0])&&r(b,"src",x),1&s&&j!==(j=t[4].title)&&r(b,"alt",j),1&s&&B!==(B=t[4].title+"")&&o(w,B),1&s&&C!==(C=t[4].price.toFixed(2)+"")&&o(N,C),t[4].extra?D?D.p(t,s):(D=y(t),D.c(),D.m(e,z)):D&&(D.d(1),D=null),1&s&&A!==(A=t[4].path)&&r(e,"href",A)},d(t){t&&u(e),D&&D.d()}}}function k(t){let e,s=t[0].items&&v(t);return{c(){s&&s.c(),e=d()},m(t,l){s&&s.m(t,l),c(t,e,l)},p(t,[l]){t[0].items?s?s.p(t,l):(s=v(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:p,o:p,d(t){s&&s.d(t),t&&u(e)}}}function F(t,e,s){let l,r,c;return f(t,h,(t=>s(2,l=t))),f(t,g,(t=>s(1,r=t))),f(t,b,(t=>s(0,c=t))),t.$$.update=()=>{2&t.$$.dirty&&r.cat&&async function(t){try{let e=await fetch(l+"?path="+t);b.set(await e.json())}catch(t){console.error(t)}}(r.cat)},[c,r]}export default class extends t{constructor(t){super(),e(this,t,F,k,s,{})}}
//# sourceMappingURL=index-6929997a.js.map
