import{S as t,i as s,s as e,e as l,a as c,b as i,c as r,d as a,f as n,n as o,m as g,g as m}from"./main.js";import{i as u,d as f}from"./store-c14ac07e.js";function p(t,s,e){const l=t.slice();return l[1]=s[e],l}function d(t){let s,e,o,g,m,u,f,p,d,h,b,k,j,v,x,y,H=t[1].title+"";return{c(){s=l("a"),e=l("figure"),o=l("picture"),g=l("source"),u=c(),f=l("source"),d=c(),h=l("img"),j=c(),v=l("figcaption"),x=c(),i(g,"srcset",m=t[1].img[0][1]),i(g,"type","image/webp"),i(f,"srcset",p=t[1].img[0][0]),i(f,"type","image/jpeg"),h.src!==(b=t[1].img[0][0])&&i(h,"src",b),i(h,"alt",k=t[1].title),i(o,"class","block"),i(v,"class","block"),i(e,"class","block"),i(s,"class","block"),i(s,"href",y=t[1].path)},m(t,l){r(t,s,l),a(s,e),a(e,o),a(o,g),a(o,u),a(o,f),a(o,d),a(o,h),a(e,j),a(e,v),v.innerHTML=H,a(s,x)},p(t,e){1&e&&m!==(m=t[1].img[0][1])&&i(g,"srcset",m),1&e&&p!==(p=t[1].img[0][0])&&i(f,"srcset",p),1&e&&h.src!==(b=t[1].img[0][0])&&i(h,"src",b),1&e&&k!==(k=t[1].title)&&i(h,"alt",k),1&e&&H!==(H=t[1].title+"")&&(v.innerHTML=H),1&e&&y!==(y=t[1].path)&&i(s,"href",y)},d(t){t&&n(s)}}}function h(t){let s,e=t[0].nav,c=[];for(let s=0;s<e.length;s+=1)c[s]=d(p(t,e,s));return{c(){s=l("div");for(let t=0;t<c.length;t+=1)c[t].c();i(s,"id","products"),i(s,"class","tc grid up bold")},m(t,e){r(t,s,e);for(let t=0;t<c.length;t+=1)c[t].m(s,null)},p(t,[l]){if(1&l){let i;for(e=t[0].nav,i=0;i<e.length;i+=1){const r=p(t,e,i);c[i]?c[i].p(r,l):(c[i]=d(r),c[i].c(),c[i].m(s,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=e.length}},i:o,o:o,d(t){t&&n(s),g(c,t)}}}function b(t,s,e){let l;return m(t,u,(t=>e(0,l=t))),l.site&&f.set({title:l.site.title,slogan:l.site.slogan}),[l]}export default class extends t{constructor(t){super(),s(this,t,b,h,e,{})}}
//# sourceMappingURL=index-ef6e7ecf.js.map