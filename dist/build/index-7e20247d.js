import{S as t,i as e,s,e as c,b as a,c as r,a as i,t as l,d as n,h as o,f as p,k as m,j as u,n as d,g as f,p as g}from"./main.js";import{a as h}from"./store-4ceb92bb.js";function b(t,e,s){const c=t.slice();return c[4]=e[s],c}function j(t){let e,s=t[0].items,i=[];for(let e=0;e<s.length;e+=1)i[e]=y(b(t,s,e));return{c(){e=c("div");for(let t=0;t<i.length;t+=1)i[t].c();a(e,"id","products"),a(e,"class","tc grid up bold")},m(t,s){r(t,e,s);for(let t=0;t<i.length;t+=1)i[t].m(e,null)},p(t,c){if(1&c){let a;for(s=t[0].items,a=0;a<s.length;a+=1){const r=b(t,s,a);i[a]?i[a].p(r,c):(i[a]=y(r),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}},d(t){t&&p(e),m(i,t)}}}function y(t){let e,s,m,u,d,f,g,h,b,j,y,$,k,v,w,x,N,S,q,z,A=t[4].title+"",B=t[4].price+"";return{c(){e=c("a"),s=c("picture"),m=c("source"),d=i(),f=c("source"),h=i(),b=c("img"),$=i(),k=c("div"),v=l(A),w=i(),x=c("div"),N=l(B),S=l(" €"),q=i(),a(m,"srcset",u=t[4].img[1]),a(m,"type","image/webp"),a(f,"srcset",g=t[4].img[0]),a(f,"type","image/jpeg"),b.src!==(j=t[4].img[0])&&a(b,"src",j),a(b,"alt",y=t[4].title),a(s,"class","block"),a(k,"class","title"),a(x,"class","price"),a(e,"class","block"),a(e,"href",z=t[4].path)},m(t,c){r(t,e,c),n(e,s),n(s,m),n(s,d),n(s,f),n(s,h),n(s,b),n(e,$),n(e,k),n(k,v),n(e,w),n(e,x),n(x,N),n(x,S),n(e,q)},p(t,s){1&s&&u!==(u=t[4].img[1])&&a(m,"srcset",u),1&s&&g!==(g=t[4].img[0])&&a(f,"srcset",g),1&s&&b.src!==(j=t[4].img[0])&&a(b,"src",j),1&s&&y!==(y=t[4].title)&&a(b,"alt",y),1&s&&A!==(A=t[4].title+"")&&o(v,A),1&s&&B!==(B=t[4].price+"")&&o(N,B),1&s&&z!==(z=t[4].path)&&a(e,"href",z)},d(t){t&&p(e)}}}function $(t){let e,s=t[0]&&j(t);return{c(){s&&s.c(),e=u()},m(t,c){s&&s.m(t,c),r(t,e,c)},p(t,[c]){t[0]?s?s.p(t,c):(s=j(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:d,o:d,d(t){s&&s.d(t),t&&p(e)}}}function k(t,e,s){let c,a,r;return f(t,h,(t=>s(2,c=t))),f(t,g,(t=>s(1,a=t))),t.$$.update=()=>{2&t.$$.dirty&&a.cat&&async function(t){let e=await fetch(c+"?path="+t);s(0,r=await e.json())}(a.cat)},[r,a]}export default class extends t{constructor(t){super(),e(this,t,k,$,s,{})}}
//# sourceMappingURL=index-7e20247d.js.map
