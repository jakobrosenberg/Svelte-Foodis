import{w as t,r as a,x as s,y as e}from"./main.js";const o=e("http://foodis.dataline.fi/pw/"),n=s({}),r=s({}),i=((t,a)=>{const{subscribe:e,set:o,update:n}=s(a);return{subscribe:e,set:o,update:n,useLocalStorage:()=>{const a=localStorage.getItem(t);a&&o(JSON.parse(a)),e((a=>{localStorage.setItem(t,JSON.stringify(a))}))}}})("cart",{total:0,amount:0,products:[]});let c=0,l=0,p=t(a,(t=>async function(a="",s=null,e=null){c++;let o=s?"POST":"GET";const n=await fetch(`http://foodis.dataline.fi/pw/${a}`,{method:o,mode:"cors",headers:{"Content-Type":"application/json",...e?{Authorization:`Bearer ${e}`}:void 0},body:s?JSON.stringify(s):null}).then((t=>t.json()));return l++,l===c&&t(),n}));export{o as a,i as c,r as d,n as i,p};
//# sourceMappingURL=store-9d38801d.js.map
