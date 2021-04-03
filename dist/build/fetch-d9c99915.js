async function o(o="",t="",a=""){o&&(o="?"+o);const n=await fetch(`http://foodis.dataline.fi/pw/${o}`,{method:t?"POST":"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:void 0},body:t?JSON.stringify(t):null});return await n.json()}export{o as p};
//# sourceMappingURL=fetch-d9c99915.js.map
