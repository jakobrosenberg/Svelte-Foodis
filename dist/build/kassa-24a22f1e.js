import{S as t,i as e,s as n,a as l,e as s,b as a,c as i,A as o,B as c,z as r,f as u,g as d,C as m,D as p,q as f,k as h,E as y,o as x,n as g,t as v,d as b,h as F,l as k,j as C,r as $,F as w,G as T,H,I as M,J as L,m as S,K as j}from"./main.js";import{a as q,d as K,c as z}from"./store-998211f6.js";class N extends t{constructor(t){super(),e(this,t,null,null,n,{})}}function I(t,e,n){const l=t.slice();return l[6]=e[n],l}function A(t,e,n){const l=t.slice();return l[6]=e[n],l}function B(t,e,n){const l=t.slice();return l[6]=e[n],l[18]=e,l[19]=n,l}function E(t){let e,n,a;function o(t,e){return"number"!=typeof t[3]?O:D}let c=o(t),r=c(t);return{c(){e=s("h1"),e.textContent="Kiitos tilauksesta",n=l(),r.c(),a=x()},m(t,l){i(t,e,l),i(t,n,l),r.m(t,l),i(t,a,l)},p(t,e){c===(c=o(t))&&r?r.p(t,e):(r.d(1),r=c(t),r&&(r.c(),r.m(a.parentNode,a)))},i:g,o:g,d(t){t&&u(e),t&&u(n),r.d(t),t&&u(a)}}}function J(t){let e,n,d,m,f,h,y,x,g,F,$,w,T,H,M,L,q,K,z,N,A,E,J,D,O,V,Y,G,R,Z,_,tt,et,nt,lt,st,at,it,ot,ct,rt,ut,dt,mt,pt,ft,ht,yt,xt=t[1].total.toFixed(2)+"",gt=t[5].toFixed(2)+"",vt=t[2].toFixed(2)+"",bt=t[4].body&&P(t),Ft=t[1].products,kt=[];for(let e=0;e<Ft.length;e+=1)kt[e]=X(B(t,Ft,e));let Ct=t[4].delivery&&Q(t),$t=t[0].price>0&&U(t),wt=t[8],Tt=[];for(let e=0;e<wt.length;e+=1)Tt[e]=W(I(t,wt,e));return{c(){bt&&bt.c(),e=l(),n=s("div"),d=s("div"),m=s("h2"),m.textContent="Tuotteet",f=l(),h=s("table"),y=s("thead"),y.innerHTML='<tr><th class="tl">Tuote</th> \n\t\t\t\t\t\t\t<th class="tc">Hinta</th> \n\t\t\t\t\t\t\t<th class="tc">Määrä</th> \n\t\t\t\t\t\t\t<th class="tc">Yhteensä</th> \n\t\t\t\t\t\t\t<th></th></tr>',x=l(),g=s("tbody");for(let t=0;t<kt.length;t+=1)kt[t].c();F=l(),Ct&&Ct.c(),$=l(),w=s("div"),T=s("h2"),T.textContent="Maksutiedot",H=l(),M=s("table"),L=s("tbody"),q=s("tr"),K=s("td"),K.textContent="Tuotteet yhteensä",z=l(),N=s("td"),A=v(xt),E=v(" €"),J=l(),$t&&$t.c(),D=l(),O=s("tr"),V=s("td"),V.textContent="ALV 10%",Y=l(),G=s("td"),R=v(gt),Z=v(" €"),_=l(),tt=s("tr"),et=s("td"),et.textContent="Tilaus yhteensä",nt=l(),lt=s("td"),st=v(vt),at=v(" €"),it=l(),ot=s("form"),ct=s("div"),rt=s("h2"),rt.textContent="Asiakastiedot",ut=l(),dt=s("div");for(let t=0;t<Tt.length;t+=1)Tt[t].c();mt=l(),pt=s("div"),pt.innerHTML='<button id="ready" class="end" name="ready" type="submit">Vahvista tilaus</button>',a(h,"id","productList"),a(h,"class","w100"),a(h,"rules","rows"),a(d,"class","item"),a(K,"class","label tl"),a(N,"class","value tr"),a(V,"class","label tl"),a(G,"class","value tr"),a(et,"class","label tl"),a(lt,"class","value tr"),a(M,"class","w100"),a(w,"id","paymentInfo"),a(w,"class","item"),a(n,"id","tables"),a(n,"class","grid"),a(dt,"class","grid"),a(ct,"id","client"),a(ct,"class","item"),a(pt,"id","payment"),a(pt,"class","tc"),a(ot,"class","items")},m(l,s){bt&&bt.m(l,s),i(l,e,s),i(l,n,s),b(n,d),b(d,m),b(d,f),b(d,h),b(h,y),b(h,x),b(h,g);for(let t=0;t<kt.length;t+=1)kt[t].m(g,null);b(d,F),Ct&&Ct.m(d,null),b(n,$),b(n,w),b(w,T),b(w,H),b(w,M),b(M,L),b(L,q),b(q,K),b(q,z),b(q,N),b(N,A),b(N,E),b(L,J),$t&&$t.m(L,null),b(L,D),b(L,O),b(O,V),b(O,Y),b(O,G),b(G,R),b(G,Z),b(L,_),b(L,tt),b(tt,et),b(tt,nt),b(tt,lt),b(lt,st),b(lt,at),i(l,it,s),i(l,ot,s),b(ot,ct),b(ct,rt),b(ct,ut),b(ct,dt);for(let t=0;t<Tt.length;t+=1)Tt[t].m(dt,null);b(ot,mt),b(ot,pt),ft=!0,ht||(yt=k(ot,"submit",j(t[9])),ht=!0)},p(t,n){if(t[4].body?bt?bt.p(t,n):(bt=P(t),bt.c(),bt.m(e.parentNode,e)):bt&&(bt.d(1),bt=null),130&n){let e;for(Ft=t[1].products,e=0;e<Ft.length;e+=1){const l=B(t,Ft,e);kt[e]?kt[e].p(l,n):(kt[e]=X(l),kt[e].c(),kt[e].m(g,null))}for(;e<kt.length;e+=1)kt[e].d(1);kt.length=Ft.length}if(t[4].delivery?Ct?(Ct.p(t,n),16&n&&r(Ct,1)):(Ct=Q(t),Ct.c(),r(Ct,1),Ct.m(d,null)):Ct&&(p(),o(Ct,1,1,(()=>{Ct=null})),c()),(!ft||2&n)&&xt!==(xt=t[1].total.toFixed(2)+"")&&C(A,xt),t[0].price>0?$t?$t.p(t,n):($t=U(t),$t.c(),$t.m(L,D)):$t&&($t.d(1),$t=null),(!ft||32&n)&&gt!==(gt=t[5].toFixed(2)+"")&&C(R,gt),(!ft||4&n)&&vt!==(vt=t[2].toFixed(2)+"")&&C(st,vt),256&n){let e;for(wt=t[8],e=0;e<wt.length;e+=1){const l=I(t,wt,e);Tt[e]?Tt[e].p(l,n):(Tt[e]=W(l),Tt[e].c(),Tt[e].m(dt,null))}for(;e<Tt.length;e+=1)Tt[e].d(1);Tt.length=wt.length}},i(t){ft||(r(Ct),ft=!0)},o(t){o(Ct),ft=!1},d(t){bt&&bt.d(t),t&&u(e),t&&u(n),S(kt,t),Ct&&Ct.d(),$t&&$t.d(),t&&u(it),t&&u(ot),S(Tt,t),ht=!1,yt()}}}function D(t){let e,n,l,a;return{c(){e=s("p"),n=v("Tilaus on vahvistettu ja tilaustiedot on lähetetty sähköpostiin.\n\t\t\t\tTilausnumerosi on "),l=v(t[3]),a=v(".")},m(t,s){i(t,e,s),b(e,n),b(e,l),b(e,a)},p(t,e){8&e&&C(l,t[3])},d(t){t&&u(e)}}}function O(t){let e,n;return{c(){e=s("p"),n=v(t[3])},m(t,l){i(t,e,l),b(e,n)},p(t,e){8&e&&C(n,t[3])},d(t){t&&u(e)}}}function P(t){let e,n=t[4].body+"";return{c(){e=s("div"),a(e,"class","body")},m(t,l){i(t,e,l),e.innerHTML=n},p(t,l){16&l&&n!==(n=t[4].body+"")&&(e.innerHTML=n)},d(t){t&&u(e)}}}function V(t){let e,n,o,c,r,d,m,p,f,y,x,g,w,T,H,M,L,S,j,q,K,z,N,I,A,B,E,J,D,O=t[6].title+"",P=t[6].price2.toFixed(2)+"",V=t[6].total.toFixed(2)+"",X=t[6].size&&Y(t),Q=t[6].id&&G(t);function R(){t[10].call(S,t[19])}function U(){return t[11](t[19])}return{c(){e=s("tr"),n=s("td"),o=s("strong"),c=v(O),r=l(),X&&X.c(),d=l(),m=s("br"),p=l(),Q&&Q.c(),f=l(),y=s("td"),x=s("span"),x.textContent="Hinta:",g=l(),w=v(P),T=l(),H=s("td"),M=s("span"),M.textContent="Määrä:",L=l(),S=s("input"),j=l(),q=s("td"),K=s("span"),K.textContent="Yhteensä:",z=l(),N=v(V),I=l(),A=s("td"),B=s("button"),B.textContent="X",E=l(),a(n,"class","product tl"),a(y,"class","price tc pt"),a(S,"type","number"),a(S,"name","amount"),a(H,"class","amount tc"),a(q,"class","total tc pt"),a(B,"class","del noBor"),a(A,"class","tr pt")},m(l,s){i(l,e,s),b(e,n),b(n,o),b(o,c),b(o,r),X&&X.m(o,null),b(n,d),b(n,m),b(n,p),Q&&Q.m(n,null),b(e,f),b(e,y),b(y,x),b(y,g),b(y,w),b(e,T),b(e,H),b(H,M),b(H,L),b(H,S),F(S,t[1].products[t[19]].amount),b(e,j),b(e,q),b(q,K),b(q,z),b(q,N),b(e,I),b(e,A),b(A,B),b(e,E),J||(D=[k(S,"input",R),k(B,"click",U)],J=!0)},p(e,l){t=e,2&l&&O!==(O=t[6].title+"")&&C(c,O),t[6].size?X?X.p(t,l):(X=Y(t),X.c(),X.m(o,null)):X&&(X.d(1),X=null),t[6].id?Q?Q.p(t,l):(Q=G(t),Q.c(),Q.m(n,null)):Q&&(Q.d(1),Q=null),2&l&&P!==(P=t[6].price2.toFixed(2)+"")&&C(w,P),2&l&&h(S.value)!==t[1].products[t[19]].amount&&F(S,t[1].products[t[19]].amount),2&l&&V!==(V=t[6].total.toFixed(2)+"")&&C(N,V)},d(t){t&&u(e),X&&X.d(),Q&&Q.d(),J=!1,$(D)}}}function Y(t){let e,n,l=t[6].size+"";return{c(){e=v("- "),n=v(l)},m(t,l){i(t,e,l),i(t,n,l)},p(t,e){2&e&&l!==(l=t[6].size+"")&&C(n,l)},d(t){t&&u(e),t&&u(n)}}}function G(t){let e,n,l=t[6].id+"";return{c(){e=s("small"),n=v(l)},m(t,l){i(t,e,l),b(e,n)},p(t,e){2&e&&l!==(l=t[6].id+"")&&C(n,l)},d(t){t&&u(e)}}}function X(t){let e,n=null!=t[6]&&V(t);return{c(){n&&n.c(),e=x()},m(t,l){n&&n.m(t,l),i(t,e,l)},p(t,l){null!=t[6]?n?n.p(t,l):(n=V(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&u(e)}}}function Q(t){let e,n,d,m,f,h,y,x,g=t[4].delivery,v=[];for(let e=0;e<g.length;e+=1)v[e]=R(A(t,g,e));const F=t=>o(v[t],1,1,(()=>{v[t]=null}));return{c(){e=s("div"),n=s("label"),d=s("span"),d.innerHTML="<h2>Toimitustapa</h2>",m=l(),f=s("select");for(let t=0;t<v.length;t+=1)v[t].c();a(d,"class","block"),void 0===t[6]&&w((()=>t[12].call(f))),a(e,"id","shipping")},m(l,s){i(l,e,s),b(e,n),b(n,d),b(n,m),b(n,f);for(let t=0;t<v.length;t+=1)v[t].m(f,null);T(f,t[6]),h=!0,y||(x=k(f,"change",t[12]),y=!0)},p(t,e){if(16&e){let n;for(g=t[4].delivery,n=0;n<g.length;n+=1){const l=A(t,g,n);v[n]?(v[n].p(l,e),r(v[n],1)):(v[n]=R(l),v[n].c(),r(v[n],1),v[n].m(f,null))}for(p(),n=g.length;n<v.length;n+=1)F(n);c()}64&e&&T(f,t[6])},i(t){if(!h){for(let t=0;t<g.length;t+=1)r(v[t]);h=!0}},o(t){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)o(v[t]);h=!1},d(t){t&&u(e),S(v,t),y=!1,x()}}}function R(t){let e,n;return e=new N({props:{id:t[6].id,name:t[6].name,price:t[6].price}}),{c(){H(e.$$.fragment)},m(t,l){M(e,t,l),n=!0},p(t,n){const l={};16&n&&(l.id=t[6].id),16&n&&(l.name=t[6].name),16&n&&(l.price=t[6].price),e.$set(l)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){o(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function U(t){let e,n,o,c,r,d,m=t[0].price.toFixed(2)+"";return{c(){e=s("tr"),n=s("td"),n.textContent="Kuljetus",o=l(),c=s("td"),r=v(m),d=v(" €"),a(n,"class","label tl"),a(c,"class","value tr")},m(t,l){i(t,e,l),b(e,n),b(e,o),b(e,c),b(c,r),b(c,d)},p(t,e){1&e&&m!==(m=t[0].price.toFixed(2)+"")&&C(r,m)},d(t){t&&u(e)}}}function W(t){let e,n,o,c,r,d,m,p=t[6].title+"";return{c(){e=s("div"),n=s("label"),o=s("span"),c=v(p),r=l(),d=s("input"),m=l(),a(o,"class","block"),a(d,"id",t[6].name),a(d,"class","w100"),a(d,"type",t[6].type),a(d,"name",t[6].name),a(d,"minlength",t[6].min),a(d,"maxlength",t[6].max),d.required=!0,a(e,"class","item")},m(t,l){i(t,e,l),b(e,n),b(n,o),b(o,c),b(n,r),b(n,d),b(e,m)},p:g,d(t){t&&u(e)}}}function Z(t){let e,n,d,m,f,h;document.title=e=_;const y=[J,E],x=[];function g(t,e){return 0==t[3]&&t[1].products[0]?0:1}return m=g(t),f=x[m]=y[m](t),{c(){n=l(),d=s("div"),f.c(),a(d,"id","checkout"),a(d,"class","container rel")},m(t,e){i(t,n,e),i(t,d,e),x[m].m(d,null),h=!0},p(t,[n]){(!h||0&n)&&e!==(e=_)&&(document.title=e);let l=m;m=g(t),m===l?x[m].p(t,n):(p(),o(x[l],1,1,(()=>{x[l]=null})),c(),f=x[m],f?f.p(t,n):(f=x[m]=y[m](t),f.c()),r(f,1),f.m(d,null))},i(t){h||(r(f),h=!0)},o(t){o(f),h=!1},d(t){t&&u(n),t&&u(d),x[m].d()}}}let _="Kassa";function tt(t,e,n){let l,s,a,i,o,c;d(t,q,(t=>n(13,i=t))),d(t,K,(t=>n(4,o=t))),d(t,z,(t=>n(1,c=t)));let r=0,u={price:0};function p(t){f(z,c.products=c.products.filter(((e,n)=>n!==parseInt(t)&&null!=e)).sort(),c)}m((async()=>{try{const t=await fetch(i+"?type=kassa");K.set(await t.json()),n(0,u=o.delivery.items[0])}catch(t){console.error(t)}}));let x=[{title:"Etunimi",type:"text",name:"name1",min:2,max:30,req:1},{title:"Sukunimi",type:"text",name:"name2",min:2,max:30,req:1},{title:"Puhelin",type:"text",name:"phone",min:5,max:15,req:1},{title:"Sähköposti",type:"email",name:"email",min:6,max:100,req:1},{title:"Katuosoite",type:"text",name:"street",min:5,max:50},{title:"Postinumero",type:"text",name:"postal",min:5,max:5},{title:"Kaupunki",type:"text",name:"area",min:3,max:50}];if(window.location.search){let t=window.location.search.substr(1).split("=");"id"==t[0]&&(r=parseInt(t[1]))}return t.$$.update=()=>{3&t.$$.dirty&&n(2,s=c.total+u.price),4&t.$$.dirty&&n(5,a=.1*s)},n(6,l=""),[u,c,s,r,o,a,l,p,x,async function(t){"undefined"!=typeof paymentSelected&&(f(z,c.method=paymentSelected,c),z.set(c));const e=new FormData;x.forEach((function(n){void 0!==t.target[n.name]&&e.append(n.name,t.target[n.name].value)})),e.append("cart",JSON.stringify(c.products)),e.append("delivery",JSON.stringify(u)),e.append("price",s),e.append("vat",a)},function(t){c.products[t].amount=h(this.value),z.set(c)},t=>p(t),function(){l=y(this),n(6,l)}]}export default class extends t{constructor(t){super(),e(this,t,tt,Z,n,{})}}
//# sourceMappingURL=kassa-24a22f1e.js.map
