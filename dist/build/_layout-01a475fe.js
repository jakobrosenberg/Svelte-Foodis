import{S as t,i as e,s,e as a,M as l,t as n,a as i,b as c,c as o,d as r,j as u,n as m,f as d,g as h,F as p,H as g,N as f,I as v,l as $,A as w,B as b,m as y,J as k,o as T,E as x,C as z,z as M,D as j,y as O,q as B,O as H,P as L,v as N}from"./main.js";import{c as A,i as E,d as J,a as S}from"./store-de3c9fe4.js";import{p as q}from"./fetch-c1b3b3cf.js";function C(t){let e,s,h,p,g,f,v,$,w,b,y,k=t[0].amount+"";return{c(){e=a("div"),s=a("a"),h=l("svg"),p=l("title"),g=n("Jatka kassalle"),f=l("path"),v=i(),$=a("div"),w=a("div"),b=n(k),c(f,"d","M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z"),c(h,"xmlns","http://www.w3.org/2000/svg"),c(h,"width","38"),c(h,"height","38"),c(h,"viewBox","0 0 24 24"),c(w,"class",y="grid cell bold "+t[2]),c($,"id","cartBall"),c($,"class","abs svelte-hzwaq2"),c(s,"class","grid cell"),c(s,"href",t[1]),c(s,"rel","nofollow"),c(e,"id","cartIcon"),c(e,"class","abs rel")},m(t,a){o(t,e,a),r(e,s),r(s,h),r(h,p),r(p,g),r(h,f),r(s,v),r(s,$),r($,w),r(w,b)},p(t,[e]){1&e&&k!==(k=t[0].amount+"")&&u(b,k),4&e&&y!==(y="grid cell bold "+t[2])&&c(w,"class",y),2&e&&c(s,"href",t[1])},i:m,o:m,d(t){t&&d(e)}}}function I(t,e,s){let a,l,n;return h(t,A,(t=>s(0,n=t))),t.$$.update=()=>{1&t.$$.dirty&&s(1,a=n.amount>0?"/kassa":"/"),1&t.$$.dirty&&s(2,l=n.amount>0?"bgo tw":"bgw")},[n,a,l]}class P extends t{constructor(t){super(),e(this,t,I,C,s,{})}}function Y(t,e,s){const a=t.slice();return a[6]=e[s],a}function D(t){let e,s,l,n,u,m,h,p,T,x,z,M,j,O,B,H,L,N,A,E,J,S,q,C,I;function D(t,e){return t[3]?F:K}let G=D(t),Q=G(t),R=t[0].nav,U=[];for(let e=0;e<R.length;e+=1)U[e]=X(Y(t,R,e));return S=new P({}),{c(){e=a("header"),s=a("div"),l=a("a"),n=a("picture"),u=a("source"),h=i(),p=a("source"),x=i(),z=a("img"),O=i(),B=a("button"),Q.c(),H=i(),L=a("nav"),N=a("ul"),A=a("li"),A.innerHTML='<a class="nav-link block" href="/" rel="home">Etusivu</a>',E=i();for(let t=0;t<U.length;t+=1)U[t].c();J=i(),g(S.$$.fragment),c(u,"srcset",m=t[0].site.logo[1]),c(u,"type","image/webp"),c(p,"srcset",T=t[0].site.logo[0]),c(p,"type","image/jpeg"),z.src!==(M=t[0].site.logo[0])&&c(z,"src",M),c(z,"alt",j=t[0].site.title),c(n,"class","block"),c(l,"id","logo"),c(l,"class","block bgw"),c(l,"href","/"),c(l,"rel","home"),c(B,"id","menuToggle"),c(B,"class","noBor m0"),c(B,"title","Open/close main navigation"),c(A,"class","nav-item"),c(N,"class","m0"),c(L,"id","menu"),f(L,"active",t[3]),c(s,"class","content mx"),c(e,"class","block w100 bgw"),f(e,"small",t[2])},m(a,i){o(a,e,i),r(e,s),r(s,l),r(l,n),r(n,u),r(n,h),r(n,p),r(n,x),r(n,z),r(s,O),r(s,B),Q.m(B,null),r(s,H),r(s,L),r(L,N),r(N,A),r(N,E);for(let t=0;t<U.length;t+=1)U[t].m(N,null);r(s,J),v(S,s,null),q=!0,C||(I=$(B,"click",t[5]),C=!0)},p(t,s){if((!q||1&s&&m!==(m=t[0].site.logo[1]))&&c(u,"srcset",m),(!q||1&s&&T!==(T=t[0].site.logo[0]))&&c(p,"srcset",T),(!q||1&s&&z.src!==(M=t[0].site.logo[0]))&&c(z,"src",M),(!q||1&s&&j!==(j=t[0].site.title))&&c(z,"alt",j),G!==(G=D(t))&&(Q.d(1),Q=G(t),Q&&(Q.c(),Q.m(B,null))),1&s){let e;for(R=t[0].nav,e=0;e<R.length;e+=1){const a=Y(t,R,e);U[e]?U[e].p(a,s):(U[e]=X(a),U[e].c(),U[e].m(N,null))}for(;e<U.length;e+=1)U[e].d(1);U.length=R.length}8&s&&f(L,"active",t[3]),4&s&&f(e,"small",t[2])},i(t){q||(w(S.$$.fragment,t),q=!0)},o(t){b(S.$$.fragment,t),q=!1},d(t){t&&d(e),Q.d(),y(U,t),k(S),C=!1,I()}}}function F(t){let e,s;return{c(){e=l("svg"),s=l("path"),c(s,"d","M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width","24"),c(e,"height","24"),c(e,"viewBox","0 0 24 24")},m(t,a){o(t,e,a),r(e,s)},d(t){t&&d(e)}}}function K(t){let e,s,a,i,u,m;return{c(){e=l("svg"),s=l("title"),a=n("Avaa ja sulkee mobiilivalikon"),i=l("rect"),u=l("rect"),m=l("rect"),c(i,"width","100"),c(i,"height","20"),c(u,"y","30"),c(u,"width","100"),c(u,"height","20"),c(m,"y","60"),c(m,"width","100"),c(m,"height","20"),c(e,"viewBox","0 0 100 80"),c(e,"width","30"),c(e,"height","30")},m(t,l){o(t,e,l),r(e,s),r(s,a),r(e,i),r(e,u),r(e,m)},d(t){t&&d(e)}}}function X(t){let e,s,l,n,u=t[6].title+"";return{c(){e=a("li"),s=a("a"),n=i(),c(s,"class","nav-link block"),c(s,"href",l=t[6].path),c(e,"class","nav-item")},m(t,a){o(t,e,a),r(e,s),s.innerHTML=u,r(e,n)},p(t,e){1&e&&u!==(u=t[6].title+"")&&(s.innerHTML=u),1&e&&l!==(l=t[6].path)&&c(s,"href",l)},d(t){t&&d(e)}}}function G(t){let e,s,a,l,n,i=!1,c=()=>{i=!1};p(t[4]);let r=t[0]&&t[0].nav&&D(t);return{c(){r&&r.c(),s=T()},m(u,m){r&&r.m(u,m),o(u,s,m),a=!0,l||(n=$(window,"scroll",(()=>{i=!0,clearTimeout(e),e=setTimeout(c,100),t[4]()})),l=!0)},p(t,[a]){2&a&&!i&&(i=!0,clearTimeout(e),scrollTo(window.pageXOffset,t[1]),e=setTimeout(c,100)),t[0]&&t[0].nav?r?(r.p(t,a),1&a&&w(r,1)):(r=D(t),r.c(),w(r,1),r.m(s.parentNode,s)):r&&(x(),b(r,1,1,(()=>{r=null})),z())},i(t){a||(w(r),a=!0)},o(t){b(r),a=!1},d(t){r&&r.d(t),t&&d(s),l=!1,n()}}}function Q(t,e,s){let a,l,n,{data:i}=e;return t.$$set=t=>{"data"in t&&s(0,i=t.data)},t.$$.update=()=>{2&t.$$.dirty&&s(2,l=a>100||"")},[i,a,l,n,function(){s(1,a=window.pageYOffset)},()=>s(3,n=!n)]}class R extends t{constructor(t){super(),e(this,t,Q,G,s,{data:0})}}function U(t){let e,s,l,n,u,m,h,p,f,$,y;function x(t,e){return t[0].cat?W:V}e=new R({props:{data:t[1]}});let z=x(t),j=z(t);const B=t[7].default,H=O(B,t,t[6],null);let L=t[3].amount>0&&"/kassa"!=t[4].path&&Z(t);return{c(){g(e.$$.fragment),s=i(),l=a("main"),n=a("div"),j.c(),u=i(),m=a("div"),h=a("div"),H&&H.c(),f=i(),L&&L.c(),$=T(),c(n,"id","hero"),c(n,"class","grid tw up tc"),c(h,"class","container mx"),c(m,"id","content"),c(m,"class","bgw py"),c(l,"class","block"),c(l,"style",p="background-image:url("+t[1].site.hero[0]+")")},m(t,a){v(e,t,a),o(t,s,a),o(t,l,a),r(l,n),j.m(n,null),r(l,u),r(l,m),r(m,h),H&&H.m(h,null),o(t,f,a),L&&L.m(t,a),o(t,$,a),y=!0},p(t,s){const a={};2&s&&(a.data=t[1]),e.$set(a),z===(z=x(t))&&j?j.p(t,s):(j.d(1),j=z(t),j&&(j.c(),j.m(n,null))),H&&H.p&&64&s&&M(H,B,t,t[6],s,null,null),(!y||2&s&&p!==(p="background-image:url("+t[1].site.hero[0]+")"))&&c(l,"style",p),t[3].amount>0&&"/kassa"!=t[4].path?L?L.p(t,s):(L=Z(t),L.c(),L.m($.parentNode,$)):L&&(L.d(1),L=null)},i(t){y||(w(e.$$.fragment,t),w(H,t),y=!0)},o(t){b(e.$$.fragment,t),b(H,t),y=!1},d(t){k(e,t),t&&d(s),t&&d(l),j.d(),H&&H.d(t),t&&d(f),L&&L.d(t),t&&d($)}}}function V(t){let e,s,l,c,m,h,p=t[1].site.title+"",g=t[1].site.slogan+"";return{c(){e=a("div"),s=a("h1"),l=n(p),c=i(),m=a("h3"),h=n(g)},m(t,a){o(t,e,a),r(e,s),r(s,l),r(e,c),r(e,m),r(m,h)},p(t,e){2&e&&p!==(p=t[1].site.title+"")&&u(l,p),2&e&&g!==(g=t[1].site.slogan+"")&&u(h,g)},d(t){t&&d(e)}}}function W(t){let e,s=t[2].title+"";return{c(){e=a("h1")},m(t,a){o(t,e,a),e.innerHTML=s},p(t,a){4&a&&s!==(s=t[2].title+"")&&(e.innerHTML=s)},d(t){t&&d(e)}}}function Z(t){let e,s,l,m,h,p,g,f,v,$,w,b,y,k=t[3].amount+"",T=t[3].total+"";return{c(){e=a("div"),s=a("div"),l=a("div"),m=n("Tuotteita: "),h=n(k),p=n(" kpl"),g=i(),f=a("div"),v=n("Yhteensä: "),$=n(T),w=n(" €"),b=i(),y=a("a"),y.textContent="Kassalle",c(l,"id","cartAmount"),c(f,"id","cartAmount"),c(y,"class","grid"),c(y,"href","/kassa"),c(y,"rel","nofollow"),c(e,"id","cart"),c(e,"class","grid")},m(t,a){o(t,e,a),r(e,s),r(s,l),r(l,m),r(l,h),r(l,p),r(s,g),r(s,f),r(f,v),r(f,$),r(f,w),r(e,b),r(e,y)},p(t,e){8&e&&k!==(k=t[3].amount+"")&&u(h,k),8&e&&T!==(T=t[3].total+"")&&u($,T)},d(t){t&&d(e)}}}function _(t){let e,s,a=t[1]&&t[1].site&&U(t);return{c(){a&&a.c(),e=T()},m(t,l){a&&a.m(t,l),o(t,e,l),s=!0},p(t,[s]){t[1]&&t[1].site?a?(a.p(t,s),2&s&&w(a,1)):(a=U(t),a.c(),w(a,1),a.m(e.parentNode,e)):a&&(x(),b(a,1,1,(()=>{a=null})),z())},i(t){s||(w(a),s=!0)},o(t){b(a),s=!1},d(t){a&&a.d(t),t&&d(e)}}}function tt(t,e,s){let a,l,n,i,c,o;h(t,B,(t=>s(0,a=t))),h(t,E,(t=>s(1,l=t))),h(t,J,(t=>s(2,n=t))),h(t,A,(t=>s(3,i=t))),h(t,S,(t=>s(5,c=t))),h(t,H,(t=>s(4,o=t)));let{$$slots:r={},$$scope:u}=e;return j((async()=>{q().then((t=>{E.set(t)}))})),t.$$set=t=>{"$$scope"in t&&s(6,u=t.$$scope)},t.$$.update=()=>{if(15&t.$$.dirty&&a&&((l.site||n.title)&&(L.title=a.cat?n.title+" | "+l.site.title:l.site.title+" | "+l.site.slogan,(J.summary||l.site.summary)&&(L.summary=n.summary?n.summary:l.site.summary)),0==i.amount&&n.cart&&N(A,i=n.cart,i)),40&t.$$.dirty&&i.products){let t=[0,0];N(A,i.products=i.products.filter(((t,e)=>t.amount>0&&null!=t)).sort(),i),Object.values(i.products).forEach((e=>{e.discounts&&(e.price2=e.price,e.discounts.forEach((function(t){t.amount<=e.amount&&(e.price2=t.price)}))),t[0]+=e.total=e.price2*e.amount,t[1]+=e.amount})),0==t[1]||null==t[1]?N(A,i.products=[],i):(N(A,i.total=t[0],i),N(A,i.amount=t[1],i)),fetch(c+"?path=cart",{method:"POST",body:JSON.stringify(i)})}},[a,l,n,i,o,c,u,r]}export default class extends t{constructor(t){super(),e(this,t,tt,_,s,{})}}
//# sourceMappingURL=_layout-01a475fe.js.map
