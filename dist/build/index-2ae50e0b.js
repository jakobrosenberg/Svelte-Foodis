import{S as t,i as e,s,e as l,b as r,c,a as n,t as a,d as i,j as o,f as m,m as d,o as p,n as u,g as f,p as g,q as h}from"./main.js";import{d as b}from"./store-75c3a32f.js";import{p as x}from"./fetch-d9c99915.js";function v(t,e,s){const l=t.slice();return l[4]=e[s],l}function j(t,e,s){const l=t.slice();return l[4]=e[s],l}function $(t){let e,s=t[0].items,n=[];for(let e=0;e<s.length;e+=1)n[e]=F(v(t,s,e));return{c(){e=l("div");for(let t=0;t<n.length;t+=1)n[t].c();r(e,"id","products"),r(e,"class","tc grid bold")},m(t,s){c(t,e,s);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,l){if(1&l){let r;for(s=t[0].items,r=0;r<s.length;r+=1){const c=v(t,s,r);n[r]?n[r].p(c,l):(n[r]=F(c),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},d(t){t&&m(e),d(n,t)}}}function y(t){let e,s=t[4].extra,n=[];for(let e=0;e<s.length;e+=1)n[e]=k(j(t,s,e));return{c(){e=l("div");for(let t=0;t<n.length;t+=1)n[t].c();r(e,"class","extra")},m(t,s){c(t,e,s);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,l){if(1&l){let r;for(s=t[4].extra,r=0;r<s.length;r+=1){const c=j(t,s,r);n[r]?n[r].p(c,l):(n[r]=k(c),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},d(t){t&&m(e),d(n,t)}}}function k(t){let e,s,d,p,u=t[4].abbr+"";return{c(){e=l("div"),s=l("span"),d=a(u),p=n(),r(s,"class","grid cell"),r(e,"class","inl")},m(t,l){c(t,e,l),i(e,s),i(s,d),i(e,p)},p(t,e){1&e&&u!==(u=t[4].abbr+"")&&o(d,u)},d(t){t&&m(e)}}}function F(t){let e,s,d,p,u,f,g,h,b,x,v,j,$,k,F,q,w,N,S,z,A,B=t[4].title+"",C=t[4].price.toFixed(2)+"",D=t[4].extra&&y(t);return{c(){e=l("a"),s=l("picture"),d=l("source"),u=n(),f=l("source"),h=n(),b=l("img"),j=n(),$=l("div"),k=a(B),F=n(),q=l("div"),w=a(C),N=a(" €"),S=n(),D&&D.c(),z=n(),r(d,"srcset",p=t[4].img[0][1]),r(d,"type","image/webp"),r(f,"srcset",g=t[4].img[0][0]),r(f,"type","image/jpeg"),b.src!==(x=t[4].img[0][0])&&r(b,"src",x),r(b,"alt",v=t[4].title),r(s,"class","block"),r($,"class","title"),r(q,"class","price"),r(e,"class","block"),r(e,"href",A=t[4].path)},m(t,l){c(t,e,l),i(e,s),i(s,d),i(s,u),i(s,f),i(s,h),i(s,b),i(e,j),i(e,$),i($,k),i(e,F),i(e,q),i(q,w),i(q,N),i(e,S),D&&D.m(e,null),i(e,z)},p(t,s){1&s&&p!==(p=t[4].img[0][1])&&r(d,"srcset",p),1&s&&g!==(g=t[4].img[0][0])&&r(f,"srcset",g),1&s&&b.src!==(x=t[4].img[0][0])&&r(b,"src",x),1&s&&v!==(v=t[4].title)&&r(b,"alt",v),1&s&&B!==(B=t[4].title+"")&&o(k,B),1&s&&C!==(C=t[4].price.toFixed(2)+"")&&o(w,C),t[4].extra?D?D.p(t,s):(D=y(t),D.c(),D.m(e,z)):D&&(D.d(1),D=null),1&s&&A!==(A=t[4].path)&&r(e,"href",A)},d(t){t&&m(e),D&&D.d()}}}function q(t){let e,s=t[0].items&&$(t);return{c(){s&&s.c(),e=p()},m(t,l){s&&s.m(t,l),c(t,e,l)},p(t,[l]){t[0].items?s?s.p(t,l):(s=$(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:u,o:u,d(t){s&&s.d(t),t&&m(e)}}}function w(t,e,s){let l,r,c;return f(t,g,(t=>s(2,l=t))),f(t,h,(t=>s(1,r=t))),f(t,b,(t=>s(0,c=t))),t.$$.update=()=>{var e;2&t.$$.dirty&&r.cat&&(e="path="+r.cat,x(e).then((t=>{b.set(t),l()})))},[c,r]}export default class extends t{constructor(t){super(),e(this,t,w,q,s,{})}}
//# sourceMappingURL=index-2ae50e0b.js.map
