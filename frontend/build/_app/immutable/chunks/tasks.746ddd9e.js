import{S as h,i as d,s as f,k as m,q as _,l as k,m as x,r as w,h as p,n as y,b as v,G as I,u as T,J as u}from"./index.607a4587.js";import{e as b}from"./strings.82d8c965.js";function S(s){var a,r;let e,n=((r=(a=s[0])==null?void 0:a.map(g))==null?void 0:r.join(""))+"",o;return{c(){e=m("pre"),o=_(n),this.h()},l(t){e=k(t,"PRE",{class:!0});var l=x(e);o=w(l,n),l.forEach(p),this.h()},h(){y(e,"class","p-4 bg-gray-300 text-black dark:bg-gray-400 break-all whitespace-pre-wrap")},m(t,l){v(t,e,l),I(e,o)},p(t,[l]){var i,c;l&1&&n!==(n=((c=(i=t[0])==null?void 0:i.map(g))==null?void 0:c.join(""))+"")&&T(o,n)},i:u,o:u,d(t){t&&p(e)}}}const g=s=>s.replaceAll("\r",`
`);function j(s,e,n){let{output:o}=e;return s.$$set=a=>{"output"in a&&n(0,o=a.output)},[o]}class P extends h{constructor(e){super(),d(this,e,j,S,f,{output:0})}}const C=500,q=(s,e)=>{let n=!1,o=setInterval(async()=>{let a=await fetch(`/api/logger/getLogEntry?id=${s}`,{method:"POST"});if(!a.ok){let l=await a.text();b(l)}let r=a.headers.get("X-Is-Done");console.log(r);let t=await a.json();if((t==null?void 0:t.length)==0)if(n){console.log("Task is done."),console.log("Cancelling polling..."),clearInterval(o);return}else{console.log("No output yet...");return}if(n=!0,e(t),a.headers.get("X-Is-Done")){console.log("Cancelling polling..."),clearInterval(o);return}console.log("Polling...")},C)};export{P as T,q as n};
