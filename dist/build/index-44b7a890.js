import{S as t,i as e,s,e as l,b as c,c as r,a as n,t as a,d as i,j as o,f as d,m as u,o as m,n as p,g as f,p as g}from"./main.js";import{a as h,d as b}from"./store-dcd02ba1.js";function v(t,e,s){const l=t.slice();return l[4]=e[s],l}function x(t,e,s){const l=t.slice();return l[4]=e[s],l}function j(t){let e,s=t[0].items,n=[];for(let e=0;e<s.length;e+=1)n[e]=w(v(t,s,e));return{c(){e=l("div");for(let t=0;t<n.length;t+=1)n[t].c();c(e,"id","products"),c(e,"class","tc grid up bold svelte-dss212")},m(t,s){r(t,e,s);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,l){if(1&l){let c;for(s=t[0].items,c=0;c<s.length;c+=1){const r=v(t,s,c);n[c]?n[c].p(r,l):(n[c]=w(r),n[c].c(),n[c].m(e,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=s.length}},d(t){t&&d(e),u(n,t)}}}function y(t){let e,s=t[4].extra,n=[];for(let e=0;e<s.length;e+=1)n[e]=$(x(t,s,e));return{c(){e=l("div");for(let t=0;t<n.length;t+=1)n[t].c();c(e,"class","extra svelte-dss212")},m(t,s){r(t,e,s);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,l){if(1&l){let c;for(s=t[4].extra,c=0;c<s.length;c+=1){const r=x(t,s,c);n[c]?n[c].p(r,l):(n[c]=$(r),n[c].c(),n[c].m(e,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=s.length}},d(t){t&&d(e),u(n,t)}}}function $(t){let e,s,u,m,p=t[4].abbr+"";return{c(){e=l("div"),s=l("span"),u=a(p),m=n(),c(s,"class","grid cell svelte-dss212"),c(e,"class","inl svelte-dss212")},m(t,l){r(t,e,l),i(e,s),i(s,u),i(e,m)},p(t,e){1&e&&p!==(p=t[4].abbr+"")&&o(u,p)},d(t){t&&d(e)}}}function w(t){let e,s,u,m,p,f,g,h,b,v,x,j,$,w,k,F,N,S,q,z,A,B=t[4].title+"",C=t[4].price.toFixed(2)+"",D=t[4].extra&&y(t);return{c(){e=l("a"),s=l("picture"),u=l("source"),p=n(),f=l("source"),h=n(),b=l("img"),j=n(),$=l("div"),w=a(B),k=n(),F=l("div"),N=a(C),S=a(" €"),q=n(),D&&D.c(),z=n(),c(u,"srcset",m=t[4].img[1]),c(u,"type","image/webp"),c(f,"srcset",g=t[4].img[0]),c(f,"type","image/jpeg"),b.src!==(v=t[4].img[0])&&c(b,"src",v),c(b,"alt",x=t[4].title),c(s,"class","block"),c($,"class","title svelte-dss212"),c(F,"class","price"),c(e,"class","block"),c(e,"href",A=t[4].path)},m(t,l){r(t,e,l),i(e,s),i(s,u),i(s,p),i(s,f),i(s,h),i(s,b),i(e,j),i(e,$),i($,w),i(e,k),i(e,F),i(F,N),i(F,S),i(e,q),D&&D.m(e,null),i(e,z)},p(t,s){1&s&&m!==(m=t[4].img[1])&&c(u,"srcset",m),1&s&&g!==(g=t[4].img[0])&&c(f,"srcset",g),1&s&&b.src!==(v=t[4].img[0])&&c(b,"src",v),1&s&&x!==(x=t[4].title)&&c(b,"alt",x),1&s&&B!==(B=t[4].title+"")&&o(w,B),1&s&&C!==(C=t[4].price.toFixed(2)+"")&&o(N,C),t[4].extra?D?D.p(t,s):(D=y(t),D.c(),D.m(e,z)):D&&(D.d(1),D=null),1&s&&A!==(A=t[4].path)&&c(e,"href",A)},d(t){t&&d(e),D&&D.d()}}}function k(t){let e,s=t[0].items&&j(t);return{c(){s&&s.c(),e=m()},m(t,l){s&&s.m(t,l),r(t,e,l)},p(t,[l]){t[0].items?s?s.p(t,l):(s=j(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:p,o:p,d(t){s&&s.d(t),t&&d(e)}}}function F(t,e,s){let l,c,r;return f(t,h,(t=>s(2,l=t))),f(t,g,(t=>s(1,c=t))),f(t,b,(t=>s(0,r=t))),t.$$.update=()=>{2&t.$$.dirty&&c.cat&&async function(t){try{let e=await fetch(l+"?path="+t);b.set(await e.json())}catch(t){console.error(t)}}(c.cat)},[r,c]}export default class extends t{constructor(t){super(),e(this,t,F,k,s,{})}}
//# sourceMappingURL=index-44b7a890.js.map
