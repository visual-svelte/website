import{S as c,i as f,s as h,e as u,t as m,c as d,a as _,h as x,d as r,b,g,F as p,G as k,j as v,H as l}from"./vendor-36416740.js";import{g as y}from"./navigation-0e6511d1.js";/* empty css                                                   */function A(i){let t,a,n,o;return{c(){t=u("button"),a=m(i[1]),this.h()},l(s){t=d(s,"BUTTON",{class:!0});var e=_(t);a=x(e,i[1]),e.forEach(r),this.h()},h(){b(t,"class","svelte-136nupb")},m(s,e){g(s,t,e),p(t,a),n||(o=k(t,"click",i[2]),n=!0)},p(s,[e]){e&2&&v(a,s[1])},i:l,o:l,d(s){s&&r(t),n=!1,o()}}}function B(i,t,a){let{href:n}=t,{text:o}=t;const s=()=>y(n);return i.$$set=e=>{"href"in e&&a(0,n=e.href),"text"in e&&a(1,o=e.text)},[n,o,s]}class q extends c{constructor(t){super();f(this,t,B,A,h,{href:0,text:1})}}export{q as A};
