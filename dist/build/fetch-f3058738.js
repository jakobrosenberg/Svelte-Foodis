async function o(o="",t="",a=""){const n=await fetch(`http://foodis.dataline.fi/pw/${o}`,{method:t?"POST":"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:void 0},body:t?JSON.stringify(t):null});return await n.json()}export{o as p};
//# sourceMappingURL=fetch-f3058738.js.map
