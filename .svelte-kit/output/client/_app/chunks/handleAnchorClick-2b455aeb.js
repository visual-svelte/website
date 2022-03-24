function c(o){o.preventDefault();const e=o.currentTarget,n=new URL(e.href).hash.replace("#",""),t=document.getElementById(n);window.scrollTo({top:t.offsetTop,behavior:"smooth"})}export{c as h};
