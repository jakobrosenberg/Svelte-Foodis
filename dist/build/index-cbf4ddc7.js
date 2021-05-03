import{S as t,i as n,s as e,e as l,a as i,b as c,c as r,d as o,h as s,l as u,f as d,t as a,j as m,k as p,m as f,o as g,p as h,n as v,g as b,q as y,v as $}from"./main.js";import{d as x,c as D,p as H}from"./store-9d38801d.js";function L(t,n,e){const l=t.slice();return l[12]=n[e],l}function j(t,n,e){const l=t.slice();return l[12]=n[e],l}function k(t){let n,e,a,m,f,h,v,b,y,$,x,D,H,L,j,k,T,I,E=t[2].img&&F(t),N=t[2].price&&M(t),S=t[2].body&&w(t),Y=t[2].docs&&q(t),z=t[2].extra&&C(t);return{c(){n=l("div"),e=l("div"),E&&E.c(),a=i(),m=l("div"),N&&N.c(),f=i(),h=l("div"),v=l("div"),b=l("div"),y=l("input"),$=i(),x=l("div"),D=l("button"),D.textContent="Lisää ostoskoriin",H=i(),L=l("div"),S&&S.c(),j=i(),Y&&Y.c(),k=i(),z&&z.c(),c(e,"id","img"),c(y,"name","amount"),c(y,"type","number"),c(y,"min",t[3]),c(y,"step","1"),y.required=!0,c(D,"class","w100"),c(v,"id","cartIt"),c(v,"class","border grid"),c(h,"id","inputs"),c(L,"class","content"),c(m,"id","productInfo"),c(n,"id","product"),c(n,"class","container double grid")},m(l,i){r(l,n,i),o(n,e),E&&E.m(e,null),o(n,a),o(n,m),N&&N.m(m,null),o(m,f),o(m,h),o(h,v),o(v,b),o(b,y),s(y,t[0]),o(v,$),o(v,x),o(x,D),o(m,H),o(m,L),S&&S.m(L,null),o(L,j),Y&&Y.m(L,null),o(L,k),z&&z.m(L,null),T||(I=[u(y,"input",t[10]),u(D,"click",t[5])],T=!0)},p(t,n){t[2].img?E?E.p(t,n):(E=F(t),E.c(),E.m(e,null)):E&&(E.d(1),E=null),t[2].price?N?N.p(t,n):(N=M(t),N.c(),N.m(m,f)):N&&(N.d(1),N=null),8&n&&c(y,"min",t[3]),1&n&&p(y.value)!==t[0]&&s(y,t[0]),t[2].body?S?S.p(t,n):(S=w(t),S.c(),S.m(L,j)):S&&(S.d(1),S=null),t[2].docs?Y?Y.p(t,n):(Y=q(t),Y.c(),Y.m(L,k)):Y&&(Y.d(1),Y=null),t[2].extra?z?z.p(t,n):(z=C(t),z.c(),z.m(L,null)):z&&(z.d(1),z=null)},d(t){t&&d(n),E&&E.d(),N&&N.d(),S&&S.d(),Y&&Y.d(),z&&z.d(),T=!1,g(I)}}}function F(t){let n,e,s,u,a,m,p,f,g,h;return{c(){n=l("picture"),e=l("source"),u=i(),a=l("source"),p=i(),f=l("img"),c(e,"srcset",s=t[2].img[0][1]),c(e,"type","image/webp"),c(a,"srcset",m=t[2].img[0][0]),c(a,"type","image/jpeg"),f.src!==(g=t[2].img[0][0])&&c(f,"src",g),c(f,"alt",h=t[2].title),c(n,"class","block")},m(t,l){r(t,n,l),o(n,e),o(n,u),o(n,a),o(n,p),o(n,f)},p(t,n){4&n&&s!==(s=t[2].img[0][1])&&c(e,"srcset",s),4&n&&m!==(m=t[2].img[0][0])&&c(a,"srcset",m),4&n&&f.src!==(g=t[2].img[0][0])&&c(f,"src",g),4&n&&h!==(h=t[2].title)&&c(f,"alt",h)},d(t){t&&d(n)}}}function M(t){let n,e,s,u,p,f,g=t[1].toFixed(2)+"",h=t[0]>1&&T(t);return{c(){n=l("div"),e=a("Hinta: "),s=l("strong"),u=a(g),p=a(" €"),f=i(),h&&h.c(),c(n,"id","price")},m(t,l){r(t,n,l),o(n,e),o(n,s),o(s,u),o(s,p),o(n,f),h&&h.m(n,null)},p(t,e){2&e&&g!==(g=t[1].toFixed(2)+"")&&m(u,g),t[0]>1?h?h.p(t,e):(h=T(t),h.c(),h.m(n,null)):h&&(h.d(1),h=null)},d(t){t&&d(n),h&&h.d()}}}function T(t){let n,e,c,s,u,p,f,g=t[4].toFixed(2)+"";return{c(){n=l("br"),e=i(),c=l("small"),s=a("Yhteensä: "),u=l("strong"),p=a(g),f=a(" €")},m(t,l){r(t,n,l),r(t,e,l),r(t,c,l),o(c,s),o(c,u),o(u,p),o(u,f)},p(t,n){16&n&&g!==(g=t[4].toFixed(2)+"")&&m(p,g)},d(t){t&&d(n),t&&d(e),t&&d(c)}}}function w(t){let n,e=t[2].body+"";return{c(){n=l("div"),c(n,"id","body")},m(t,l){r(t,n,l),n.innerHTML=e},p(t,l){4&l&&e!==(e=t[2].body+"")&&(n.innerHTML=e)},d(t){t&&d(n)}}}function q(t){let n,e,i=t[2].docs,s=[];for(let n=0;n<i.length;n+=1)s[n]=I(j(t,i,n));return{c(){n=l("div"),e=l("ul");for(let t=0;t<s.length;t+=1)s[t].c();c(n,"id","docs")},m(t,l){r(t,n,l),o(n,e);for(let t=0;t<s.length;t+=1)s[t].m(e,null)},p(t,n){if(4&n){let l;for(i=t[2].docs,l=0;l<i.length;l+=1){const c=j(t,i,l);s[l]?s[l].p(c,n):(s[l]=I(c),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}},d(t){t&&d(n),f(s,t)}}}function I(t){let n,e,s,u,p,f,g=t[12].label+"";return{c(){n=l("li"),e=l("a"),s=a(g),u=a(" →"),f=i(),c(e,"href",p=t[12].value),c(e,"rel","nofollow")},m(t,l){r(t,n,l),o(n,e),o(e,s),o(e,u),o(n,f)},p(t,n){4&n&&g!==(g=t[12].label+"")&&m(s,g),4&n&&p!==(p=t[12].value)&&c(e,"href",p)},d(t){t&&d(n)}}}function C(t){let n,e,i=t[2].extra,s=[];for(let n=0;n<i.length;n+=1)s[n]=E(L(t,i,n));return{c(){n=l("div"),e=l("ul");for(let t=0;t<s.length;t+=1)s[t].c();c(n,"id","extra")},m(t,l){r(t,n,l),o(n,e);for(let t=0;t<s.length;t+=1)s[t].m(e,null)},p(t,n){if(4&n){let l;for(i=t[2].extra,l=0;l<i.length;l+=1){const c=L(t,i,l);s[l]?s[l].p(c,n):(s[l]=E(c),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}},d(t){t&&d(n),f(s,t)}}}function E(t){let n,e=t[12].name+"";return{c(){n=l("li")},m(t,l){r(t,n,l),n.innerHTML=e},p(t,l){4&l&&e!==(e=t[12].name+"")&&(n.innerHTML=e)},d(t){t&&d(n)}}}function N(t){let n,e=t[2]&&k(t);return{c(){e&&e.c(),n=h()},m(t,l){e&&e.m(t,l),r(t,n,l)},p(t,[l]){t[2]?e?e.p(t,l):(e=k(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i:v,o:v,d(t){e&&e.d(t),t&&d(n)}}}function S(t,n,e){let l,i,c,r,o,s,u,d,a,m;return b(t,x,(t=>e(2,s=t))),b(t,D,(t=>e(11,u=t))),b(t,y,(t=>e(8,d=t))),b(t,H,(t=>e(9,a=t))),t.$$.update=()=>{4&t.$$.dirty&&e(1,c=s.price),256&t.$$.dirty&&e(7,o=d.slug.replace(/<\/?[^>]+(>|$)/g,"")),708&t.$$.dirty&&o!=m&&(e(6,m=o),a(o).then((function(t){x.set(t),s.amountDiscounts&&s.amountDiscounts[0]&&e(0,l=e(3,i=s.amountDiscounts[0].amount))}))),7&t.$$.dirty&&s&&l&&(s.amountDiscounts&&(e(1,c=s.price),s.amountDiscounts.forEach((function(t){t.amount<=l&&e(1,c=t.price)}))),e(4,r=c*l)),3&t.$$.dirty&&e(4,r=l*c)},e(0,l=1),e(3,i=1),[l,c,s,i,r,function(){let t={id:s.id,title:s.title,price:s.price,current:c,amount:l,vat:14,total:r};s.amountDiscounts,$(D,u.total+=r,u),$(D,u.amount+=l,u),u.products.push(t)},m,o,d,a,function(){l=p(this.value),e(0,l),e(7,o),e(6,m),e(9,a),e(2,s),e(8,d)}]}export default class extends t{constructor(t){super(),n(this,t,S,N,e,{})}}
//# sourceMappingURL=index-cbf4ddc7.js.map