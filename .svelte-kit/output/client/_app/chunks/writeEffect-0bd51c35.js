import{sleep as i}from"./sleep-b92576d7.js";import{bf as c}from"./vendor-21d61cc0.js";const o=(a,s)=>Math.floor(Math.random()*(s-a)+a),f=async a=>i(Array.isArray(a)?a[o(0,a.length)]:a),e=async({currentNode:a,text:s},r)=>{c(a,r.parentElement,n=>{const t=a===n?"typing":"finished-typing";n.classList.add(t)});for(let n=0;n<=s.length;n++)s[n]==="<"&&(n=s.indexOf(">",n)),a.innerHTML=s.slice(0,n),await f(r.interval)};export{o as r,f as t,e as w};
