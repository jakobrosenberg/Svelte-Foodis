import{S as t,i as e,s as n,e as s,b as a,c as i,f as c,a as l,o,d as r,n as u,g as d,v as m,C as p,t as h,h as f,l as x,j as y,k as v,r as b,D as g,m as k}from"./main.js";import{c as T,d as C}from"./store-75c3a32f.js";import{p as w}from"./fetch-d9c99915.js";function F(t,e,n){const s=t.slice();return s[15]=e[n],s[16]=e,s[17]=n,s}function N(t,e,n){const s=t.slice();return s[15]=e[n],s[18]=e,s[19]=n,s}function $(t){let e;function n(t,e){return 0==t[3]?L:j}let l=n(t),o=l(t);return{c(){e=s("div"),o.c(),a(e,"id","checkout"),a(e,"class","container rel")},m(t,n){i(t,e,n),o.m(e,null)},p(t,s){l===(l=n(t))&&o?o.p(t,s):(o.d(1),o=l(t),o&&(o.c(),o.m(e,null)))},d(t){t&&c(e),o.d()}}}function j(t){let e,n,a;function r(t,e){return"number"!=typeof t[3]?q:M}let u=r(t),d=u(t);return{c(){e=s("h1"),e.textContent="Kiitos tilauksesta",n=l(),d.c(),a=o()},m(t,s){i(t,e,s),i(t,n,s),d.m(t,s),i(t,a,s)},p(t,e){u===(u=r(t))&&d?d.p(t,e):(d.d(1),d=u(t),d&&(d.c(),d.m(a.parentNode,a)))},d(t){t&&c(e),t&&c(n),d.d(t),t&&c(a)}}}function L(t){let e,n,u,d,m,p,f,v,b,T,C,w,$,j,L,M,q,S,z,A,P,V,Y,B,D,E,X,G,Q,R,U,W,Z,_,tt,et,nt,st,at,it,ct,lt,ot,rt,ut,dt,mt=t[1].total.toFixed(2)+"",pt=t[5].toFixed(2)+"",ht=t[2].toFixed(2)+"",ft=t[4].body&&H(t),xt=t[1].products,yt=[];for(let e=0;e<xt.length;e+=1)yt[e]=K(N(t,xt,e));let vt=t[0].distance&&I(t),bt=t[8],gt=[];for(let e=0;e<bt.length;e+=1)gt[e]=J(F(t,bt,e));let kt=t[1].customer.street&&t[1].customer.postal&&t[1].customer.area&&O(t);return{c(){ft&&ft.c(),e=l(),n=s("div"),u=s("div"),d=s("h2"),d.textContent="Tuotteet",m=l(),p=s("table"),f=s("thead"),f.innerHTML='<tr><th class="tl">Tuote</th> \n\t\t\t\t\t\t\t\t<th class="tc">Hinta</th> \n\t\t\t\t\t\t\t\t<th class="tc">Määrä</th> \n\t\t\t\t\t\t\t\t<th class="tc">Yhteensä</th> \n\t\t\t\t\t\t\t\t<th></th></tr>',v=l(),b=s("tbody");for(let t=0;t<yt.length;t+=1)yt[t].c();T=l(),C=s("div"),w=s("h2"),w.textContent="Maksutiedot",$=l(),j=s("table"),L=s("tbody"),M=s("tr"),q=s("td"),q.textContent="Tuotteet yhteensä",S=l(),z=s("td"),A=h(mt),P=h(" €"),V=l(),vt&&vt.c(),Y=l(),B=s("tr"),D=s("td"),D.textContent="ALV 10%",E=l(),X=s("td"),G=h(pt),Q=h(" €"),R=l(),U=s("tr"),W=s("td"),W.textContent="Tilaus yhteensä",Z=l(),_=s("td"),tt=h(ht),et=h(" €"),nt=l(),st=s("form"),at=s("div"),it=s("h2"),it.textContent="Asiakastiedot",ct=l(),lt=s("div");for(let t=0;t<gt.length;t+=1)gt[t].c();ot=l(),kt&&kt.c(),rt=o(),a(p,"id","productList"),a(p,"class","w100"),a(p,"rules","rows"),a(u,"class","item"),a(q,"class","label tl"),a(z,"class","value tr"),a(D,"class","label tl"),a(X,"class","value tr"),a(W,"class","label tl"),a(_,"class","value tr"),a(j,"class","w100"),a(C,"id","paymentInfo"),a(C,"class","item"),a(n,"id","tables"),a(n,"class","grid"),a(lt,"class","grid"),a(at,"id","client"),a(at,"class","item"),a(st,"class","items")},m(s,a){ft&&ft.m(s,a),i(s,e,a),i(s,n,a),r(n,u),r(u,d),r(u,m),r(u,p),r(p,f),r(p,v),r(p,b);for(let t=0;t<yt.length;t+=1)yt[t].m(b,null);r(n,T),r(n,C),r(C,w),r(C,$),r(C,j),r(j,L),r(L,M),r(M,q),r(M,S),r(M,z),r(z,A),r(z,P),r(L,V),vt&&vt.m(L,null),r(L,Y),r(L,B),r(B,D),r(B,E),r(B,X),r(X,G),r(X,Q),r(L,R),r(L,U),r(U,W),r(U,Z),r(U,_),r(_,tt),r(_,et),i(s,nt,a),i(s,st,a),r(st,at),r(at,it),r(at,ct),r(at,lt);for(let t=0;t<gt.length;t+=1)gt[t].m(lt,null);i(s,ot,a),kt&&kt.m(s,a),i(s,rt,a),ut||(dt=x(st,"submit",g(t[9])),ut=!0)},p(t,n){if(t[4].body?ft?ft.p(t,n):(ft=H(t),ft.c(),ft.m(e.parentNode,e)):ft&&(ft.d(1),ft=null),130&n){let e;for(xt=t[1].products,e=0;e<xt.length;e+=1){const s=N(t,xt,e);yt[e]?yt[e].p(s,n):(yt[e]=K(s),yt[e].c(),yt[e].m(b,null))}for(;e<yt.length;e+=1)yt[e].d(1);yt.length=xt.length}if(2&n&&mt!==(mt=t[1].total.toFixed(2)+"")&&y(A,mt),t[0].distance?vt?vt.p(t,n):(vt=I(t),vt.c(),vt.m(L,Y)):vt&&(vt.d(1),vt=null),32&n&&pt!==(pt=t[5].toFixed(2)+"")&&y(G,pt),4&n&&ht!==(ht=t[2].toFixed(2)+"")&&y(tt,ht),258&n){let e;for(bt=t[8],e=0;e<bt.length;e+=1){const s=F(t,bt,e);gt[e]?gt[e].p(s,n):(gt[e]=J(s),gt[e].c(),gt[e].m(lt,null))}for(;e<gt.length;e+=1)gt[e].d(1);gt.length=bt.length}t[1].customer.street&&t[1].customer.postal&&t[1].customer.area?kt?kt.p(t,n):(kt=O(t),kt.c(),kt.m(rt.parentNode,rt)):kt&&(kt.d(1),kt=null)},d(t){ft&&ft.d(t),t&&c(e),t&&c(n),k(yt,t),vt&&vt.d(),t&&c(nt),t&&c(st),k(gt,t),t&&c(ot),kt&&kt.d(t),t&&c(rt),ut=!1,dt()}}}function M(t){let e,n,a,l,o,u;return{c(){e=s("p"),n=h("Tilaus on vahvistettu ja tilaustiedot on lähetetty\n\t\t\t\t\tsähköpostiin.\n\t\t\t\t\t"),a=s("br"),l=h("\n\t\t\t\t\tTilausnumerosi on "),o=h(t[3]),u=h(".")},m(t,s){i(t,e,s),r(e,n),r(e,a),r(e,l),r(e,o),r(e,u)},p(t,e){8&e&&y(o,t[3])},d(t){t&&c(e)}}}function q(t){let e,n;return{c(){e=s("p"),n=h(t[3])},m(t,s){i(t,e,s),r(e,n)},p(t,e){8&e&&y(n,t[3])},d(t){t&&c(e)}}}function H(t){let e,n=t[4].body+"";return{c(){e=s("div"),a(e,"class","body")},m(t,s){i(t,e,s),e.innerHTML=n},p(t,s){16&s&&n!==(n=t[4].body+"")&&(e.innerHTML=n)},d(t){t&&c(e)}}}function S(t){let e,n,o,u,d,m,p,g,k,T,C,w,F,N,$,j,L,M,q,H,S,K,I,J,O,P,V,Y,B,D=t[15].title+"",E=t[15].price2.toFixed(2)+"",X=t[15].total.toFixed(2)+"",G=t[15].size&&z(t),Q=t[15].id&&A(t);function R(){t[10].call(M,t[19])}function U(){return t[11](t[19])}return{c(){e=s("tr"),n=s("td"),o=s("strong"),u=h(D),d=l(),G&&G.c(),m=l(),p=s("br"),g=l(),Q&&Q.c(),k=l(),T=s("td"),C=s("span"),C.textContent="Hinta:",w=l(),F=h(E),N=l(),$=s("td"),j=s("span"),j.textContent="Määrä:",L=l(),M=s("input"),q=l(),H=s("td"),S=s("span"),S.textContent="Yhteensä:",K=l(),I=h(X),J=l(),O=s("td"),P=s("button"),P.textContent="X",V=l(),a(n,"class","product tl"),a(T,"class","price tc pt"),a(M,"type","number"),a(M,"name","amount"),a($,"class","amount tc"),a(H,"class","total tc pt"),a(P,"class","del noBor"),a(O,"class","tr pt")},m(s,a){i(s,e,a),r(e,n),r(n,o),r(o,u),r(o,d),G&&G.m(o,null),r(n,m),r(n,p),r(n,g),Q&&Q.m(n,null),r(e,k),r(e,T),r(T,C),r(T,w),r(T,F),r(e,N),r(e,$),r($,j),r($,L),r($,M),f(M,t[1].products[t[19]].amount),r(e,q),r(e,H),r(H,S),r(H,K),r(H,I),r(e,J),r(e,O),r(O,P),r(e,V),Y||(B=[x(M,"input",R),x(P,"click",U)],Y=!0)},p(e,s){t=e,2&s&&D!==(D=t[15].title+"")&&y(u,D),t[15].size?G?G.p(t,s):(G=z(t),G.c(),G.m(o,null)):G&&(G.d(1),G=null),t[15].id?Q?Q.p(t,s):(Q=A(t),Q.c(),Q.m(n,null)):Q&&(Q.d(1),Q=null),2&s&&E!==(E=t[15].price2.toFixed(2)+"")&&y(F,E),2&s&&v(M.value)!==t[1].products[t[19]].amount&&f(M,t[1].products[t[19]].amount),2&s&&X!==(X=t[15].total.toFixed(2)+"")&&y(I,X)},d(t){t&&c(e),G&&G.d(),Q&&Q.d(),Y=!1,b(B)}}}function z(t){let e,n,s=t[15].size+"";return{c(){e=h("- "),n=h(s)},m(t,s){i(t,e,s),i(t,n,s)},p(t,e){2&e&&s!==(s=t[15].size+"")&&y(n,s)},d(t){t&&c(e),t&&c(n)}}}function A(t){let e,n,a=t[15].id+"";return{c(){e=s("small"),n=h(a)},m(t,s){i(t,e,s),r(e,n)},p(t,e){2&e&&a!==(a=t[15].id+"")&&y(n,a)},d(t){t&&c(e)}}}function K(t){let e,n=null!=t[15]&&S(t);return{c(){n&&n.c(),e=o()},m(t,s){n&&n.m(t,s),i(t,e,s)},p(t,s){null!=t[15]?n?n.p(t,s):(n=S(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&c(e)}}}function I(t){let e,n,o,u,d,m,p,f,x=t[0].distance.text+"",v=t[0].price.toFixed(2)+"";return{c(){e=s("tr"),n=s("td"),o=h("Toimitus, "),u=h(x),d=l(),m=s("td"),p=h(v),f=h(" €"),a(n,"class","label tl"),a(m,"class","value tr")},m(t,s){i(t,e,s),r(e,n),r(n,o),r(n,u),r(e,d),r(e,m),r(m,p),r(m,f)},p(t,e){1&e&&x!==(x=t[0].distance.text+"")&&y(u,x),1&e&&v!==(v=t[0].price.toFixed(2)+"")&&y(p,v)},d(t){t&&c(e)}}}function J(t){let e,n,o,u,d,m,p,y,v,b=t[15].title+"";function g(){t[12].call(m,t[15])}return{c(){e=s("div"),n=s("label"),o=s("span"),u=h(b),d=l(),m=s("input"),p=l(),a(o,"class","block"),a(m,"id",t[15].name),a(m,"class","w100"),a(m,"name",t[15].name),m.required=!0,a(e,"class","item")},m(s,a){i(s,e,a),r(e,n),r(n,o),r(o,u),r(n,d),r(n,m),f(m,t[1].customer[t[15].name]),r(e,p),y||(v=x(m,"input",g),y=!0)},p(e,n){t=e,258&n&&m.value!==t[1].customer[t[15].name]&&f(m,t[1].customer[t[15].name])},d(t){t&&c(e),y=!1,v()}}}function O(t){let e;function n(t,e){return t[0].distance?V:P}let l=n(t),o=l(t);return{c(){e=s("div"),o.c(),a(e,"id","payment"),a(e,"class","tc")},m(t,n){i(t,e,n),o.m(e,null)},p(t,s){l===(l=n(t))&&o?o.p(t,s):(o.d(1),o=l(t),o&&(o.c(),o.m(e,null)))},d(t){t&&c(e),o.d()}}}function P(t){let e,n,l;return{c(){e=s("button"),e.textContent="Laske tomituskulut",a(e,"id","ready"),a(e,"class","end"),a(e,"name","shipping")},m(s,a){i(s,e,a),n||(l=x(e,"click",t[13]),n=!0)},p:u,d(t){t&&c(e),n=!1,l()}}}function V(t){let e;return{c(){e=s("button"),e.textContent="Vahvista tilaus",a(e,"id","ready"),a(e,"class","end"),a(e,"name","ready"),a(e,"type","submit")},m(t,n){i(t,e,n)},p:u,d(t){t&&c(e)}}}function Y(t){let e,n,d,m=t[1].products[0]&&$(t);return{c(){e=s("meta"),n=l(),m&&m.c(),d=o(),document.title="Kassa - Tervetuloa maksamaan",a(e,"name","googlebot"),a(e,"content","noindex")},m(t,s){r(document.head,e),i(t,n,s),m&&m.m(t,s),i(t,d,s)},p(t,[e]){t[1].products[0]?m?m.p(t,e):(m=$(t),m.c(),m.m(d.parentNode,d)):m&&(m.d(1),m=null)},i:u,o:u,d(t){c(e),t&&c(n),m&&m.d(t),t&&c(d)}}}function B(t,e,n){let s,a,i,c;d(t,T,(t=>n(1,i=t))),d(t,C,(t=>n(4,c=t))),i.products[0]||window.location.replace("/"),m(T,i.customer={name1:"Timo",name2:"Anttila",street:"Testikuja 8",postal:37130,area:"Nokia",phone:"0407746121",email:"timo@tuspe.com"},i),i.customer||m(T,i.customer={name1:"Timo",name2:"Anttila",street:"Testikuja 8",postal:37130,area:"Nokia",phone:"0407746121",email:"timo@tuspe.com",distance:{},shipping:""},i);let l={price:[{distance:5,price:4.9},{distance:10,price:8.9},{distance:20,price:12.9}],pcs:[{amount:5,discount:0},{amount:7,discount:1},{amount:10,discount:2},{amount:14,discount:3}]};m(C,c={},c);let o=0,r={price:0};function u(t,e){w(t,e).then((t=>{t.redirect||t.message?void 0!==t.redirect?window.location.replace(t.redirect):t.message&&n(3,o=t.message):t.distance?n(0,r.distance={text:t.distance.text,value:t.distance.value/1e3},r):C.set(t)}))}function h(t){m(T,i.products=i.products.filter(((e,n)=>n!==parseInt(t)&&null!=e)).sort(),i)}p((async()=>{u("path=kassa")}));let f=[{title:"Etunimi",type:"text",name:"name1",min:2,max:30,req:1},{title:"Sukunimi",type:"text",name:"name2",min:2,max:30,req:1},{title:"Puhelin",type:"text",name:"phone",min:5,max:15,req:1},{title:"Sähköposti",type:"email",name:"email",min:6,max:100,req:1},{title:"Katuosoite",type:"text",name:"street",min:5,max:50},{title:"Postinumero",type:"text",name:"postal",min:5,max:5},{title:"Kaupunki",type:"text",name:"area",min:3,max:50}];if(window.location.search){let t=window.location.search.substr(1).split("=");o="id"==t[0]?parseInt(t[1]):0}return t.$$.update=()=>{3&t.$$.dirty&&r.distance&&(r.distance.value>20?n(0,r.price=50,r):(l.price.every((t=>!(r.distance.value>t.distance)&&(n(0,r.price=t.price,r),!0))),l.pcs.every((t=>!(i.amount>t.amount)&&(n(0,r.price=r.price-t.discount,r),!0))))),3&t.$$.dirty&&n(2,s=i.total+r.price),4&t.$$.dirty&&n(5,a=.1*s)},[r,i,s,o,c,a,u,h,f,async function(t){u("path=kassa&payment=1",{cart:JSON.stringify(i.products),delivery:JSON.stringify(r),price:s,vat:a})},function(t){i.products[t].amount=v(this.value),T.set(i)},t=>h(t),function(t){i.customer[t.name]=this.value,T.set(i),n(8,f)},()=>u("path=matka",{address:i.customer.street+"+"+i.customer.postal+"+"+i.customer.area})]}export default class extends t{constructor(t){super(),e(this,t,B,Y,n,{})}}
//# sourceMappingURL=kassa-9472c17c.js.map
