import{w as t}from"./main.js";const s=t({}),a=t({}),e=((s,a)=>{const{subscribe:e,set:o,update:r}=t(a);return{subscribe:e,set:o,update:r,useLocalStorage:()=>{const t=localStorage.getItem(s);t&&o(JSON.parse(t)),e((t=>{localStorage.setItem(s,JSON.stringify(t))}))}}})("cart",{total:0,amount:0,products:[]});export{e as c,a as d,s as i};
//# sourceMappingURL=store-800f579f.js.map
