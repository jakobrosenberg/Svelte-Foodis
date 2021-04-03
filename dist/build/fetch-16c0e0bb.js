async function o(o="",t="",e=""){o&&(o="?"+o);const n=await fetch(`http://foodis.dataline.fi/pw/${o}`,{method:t?"POST":"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",...e?{Authorization:`Bearer ${e}`}:void 0},body:t?JSON.stringify(t):null});let a=await n.json();if(a)return a;throw new Error(a)}export{o as p};
//# sourceMappingURL=fetch-16c0e0bb.js.map
