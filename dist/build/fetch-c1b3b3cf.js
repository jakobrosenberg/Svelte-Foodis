async function o(o="",t="",n=""){console.log(t),o&&(o="?"+o);const a=await fetch(`http://foodis.dataline.fi/pw/${o}`,{method:t?"POST":"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:void 0},body:t?JSON.stringify(t):null});return await a.json()}export{o as p};
//# sourceMappingURL=fetch-c1b3b3cf.js.map
