import{S as p,i as v,s as g,e as u,t as x,c as d,a as m,h as y,d as c,b,g as k,F as f,G as w,j as B,H as h,k as S,w as E,m as q,x as H,y as T,q as j,o as A,B as C}from"../chunks/vendor-238979f0.js";import{g as D}from"../chunks/navigation-0e6511d1.js";/* empty css                                                           */import"../chunks/singletons-d1fb5791.js";function F(i){let t,s,n,r;return{c(){t=u("button"),s=x(i[1]),this.h()},l(e){t=d(e,"BUTTON",{class:!0});var a=m(t);s=y(a,i[1]),a.forEach(c),this.h()},h(){b(t,"class","svelte-136nupb")},m(e,a){k(e,t,a),f(t,s),n||(r=w(t,"click",i[2]),n=!0)},p(e,[a]){a&2&&B(s,e[1])},i:h,o:h,d(e){e&&c(t),n=!1,r()}}}function G(i,t,s){let{href:n}=t,{text:r}=t;const e=()=>D(n);return i.$$set=a=>{"href"in a&&s(0,n=a.href),"text"in a&&s(1,r=a.text)},[n,r,e]}class I extends p{constructor(t){super();v(this,t,G,F,g,{href:0,text:1})}}function N(i){let t,s,n,r,e,a;return e=new I({props:{text:"Back to Home",href:"/"}}),{c(){t=u("div"),s=u("p"),n=x("Sorry, we couldn't find that address."),r=S(),E(e.$$.fragment),this.h()},l(o){t=d(o,"DIV",{class:!0});var l=m(t);s=d(l,"P",{});var _=m(s);n=y(_,"Sorry, we couldn't find that address."),_.forEach(c),r=q(l),H(e.$$.fragment,l),l.forEach(c),this.h()},h(){b(t,"class","svelte-1tbt353")},m(o,l){k(o,t,l),f(t,s),f(s,n),f(t,r),T(e,t,null),a=!0},p:h,i(o){a||(j(e.$$.fragment,o),a=!0)},o(o){A(e.$$.fragment,o),a=!1},d(o){o&&c(t),C(e)}}}class $ extends p{constructor(t){super();v(this,t,null,N,g,{})}}export{$ as default};
