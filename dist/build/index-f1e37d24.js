import{S as t,i as e,s as l,e as r,b as s,c,f as n,p as i,a,t as o,d,j as m,m as p,n as u,g as f,r as g,q as h}from"./main.js";import{d as b}from"./store-e4f31793.js";import{p as x}from"./fetch-d9c99915.js";function y(t,e,l){const r=t.slice();return r[4]=e[l],r}function v(t,e,l){const r=t.slice();return r[4]=e[l],r}function j(t){let e,l=t[0].body+"";return{c(){e=r("div"),s(e,"id","body")},m(t,r){c(t,e,r),e.innerHTML=l},p(t,r){1&r&&l!==(l=t[0].body+"")&&(e.innerHTML=l)},d(t){t&&n(e)}}}function $(t){let e,l=t[0].items,i=[];for(let e=0;e<l.length;e+=1)i[e]=H(y(t,l,e));return{c(){e=r("div");for(let t=0;t<i.length;t+=1)i[t].c();s(e,"id","products"),s(e,"class","tc grid bold")},m(t,l){c(t,e,l);for(let t=0;t<i.length;t+=1)i[t].m(e,null)},p(t,r){if(1&r){let s;for(l=t[0].items,s=0;s<l.length;s+=1){const c=y(t,l,s);i[s]?i[s].p(c,r):(i[s]=H(c),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=l.length}},d(t){t&&n(e),p(i,t)}}}function N(t){let e,l,i,p,u,f,g,h,b,x,y,v,j,$,N,F,H,L,M,T,q,w=t[4].title+"",S=t[4].price.toFixed(2)+"",z=t[4].extra&&k(t);return{c(){e=r("a"),l=r("picture"),i=r("source"),u=a(),f=r("source"),h=a(),b=r("img"),v=a(),j=r("div"),$=o(w),N=a(),F=r("div"),H=o(S),L=o(" €"),M=a(),z&&z.c(),T=a(),s(i,"srcset",p=t[4].img[1]),s(i,"type","image/webp"),s(f,"srcset",g=t[4].img[0]),s(f,"type","image/jpeg"),b.src!==(x=t[4].img[0])&&s(b,"src",x),s(b,"alt",y=t[4].title),s(l,"class","block"),s(j,"class","title"),s(F,"class","price"),s(e,"class","block"),s(e,"href",q=t[4].path)},m(t,r){c(t,e,r),d(e,l),d(l,i),d(l,u),d(l,f),d(l,h),d(l,b),d(e,v),d(e,j),d(j,$),d(e,N),d(e,F),d(F,H),d(F,L),d(e,M),z&&z.m(e,null),d(e,T)},p(t,l){1&l&&p!==(p=t[4].img[1])&&s(i,"srcset",p),1&l&&g!==(g=t[4].img[0])&&s(f,"srcset",g),1&l&&b.src!==(x=t[4].img[0])&&s(b,"src",x),1&l&&y!==(y=t[4].title)&&s(b,"alt",y),1&l&&w!==(w=t[4].title+"")&&m($,w),1&l&&S!==(S=t[4].price.toFixed(2)+"")&&m(H,S),t[4].extra?z?z.p(t,l):(z=k(t),z.c(),z.m(e,T)):z&&(z.d(1),z=null),1&l&&q!==(q=t[4].path)&&s(e,"href",q)},d(t){t&&n(e),z&&z.d()}}}function k(t){let e,l=t[4].extra,i=[];for(let e=0;e<l.length;e+=1)i[e]=F(v(t,l,e));return{c(){e=r("div");for(let t=0;t<i.length;t+=1)i[t].c();s(e,"class","extra")},m(t,l){c(t,e,l);for(let t=0;t<i.length;t+=1)i[t].m(e,null)},p(t,r){if(1&r){let s;for(l=t[4].extra,s=0;s<l.length;s+=1){const c=v(t,l,s);i[s]?i[s].p(c,r):(i[s]=F(c),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=l.length}},d(t){t&&n(e),p(i,t)}}}function F(t){let e,l,i,p,u=t[4].abbr+"";return{c(){e=r("div"),l=r("span"),i=o(u),p=a(),s(l,"class","grid cell"),s(e,"class","inl")},m(t,r){c(t,e,r),d(e,l),d(l,i),d(e,p)},p(t,e){1&e&&u!==(u=t[4].abbr+"")&&m(i,u)},d(t){t&&n(e)}}}function H(t){let e,l=t[4].img&&N(t);return{c(){l&&l.c(),e=i()},m(t,r){l&&l.m(t,r),c(t,e,r)},p(t,r){t[4].img?l?l.p(t,r):(l=N(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&n(e)}}}function L(t){let e,l,r=t[0].body&&j(t),s=t[0].items&&$(t);return{c(){r&&r.c(),e=a(),s&&s.c(),l=i()},m(t,n){r&&r.m(t,n),c(t,e,n),s&&s.m(t,n),c(t,l,n)},p(t,[c]){t[0].body?r?r.p(t,c):(r=j(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),t[0].items?s?s.p(t,c):(s=$(t),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},i:u,o:u,d(t){r&&r.d(t),t&&n(e),s&&s.d(t),t&&n(l)}}}function M(t,e,l){let r,s,c;return f(t,g,(t=>l(2,r=t))),f(t,h,(t=>l(1,s=t))),f(t,b,(t=>l(0,c=t))),t.$$.update=()=>{var e;2&t.$$.dirty&&s.cat&&(e="path="+s.cat,x(e).then((t=>{b.set(t),r()})).catch((t=>{console.log(t)})))},[c,s]}export default class extends t{constructor(t){super(),e(this,t,M,L,l,{})}}
//# sourceMappingURL=index-f1e37d24.js.map
