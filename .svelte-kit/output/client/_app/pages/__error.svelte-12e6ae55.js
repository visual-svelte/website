import{S as p,i as v,s as g,e as u,t as x,c as d,a as m,h as y,d as c,b,g as k,J as f,M as w,j as B,K as h,k as S,w as E,m as q,x as T,y as j,q as A,o as C,B as D}from"../chunks/vendor-b96c9505.js";import{g as H}from"../chunks/navigation-0e6511d1.js";/* empty css                                                           */import"../chunks/singletons-d1fb5791.js";function I(i){let t,s,n,r;return{c(){t=u("button"),s=x(i[1]),this.h()},l(e){t=d(e,"BUTTON",{class:!0});var a=m(t);s=y(a,i[1]),a.forEach(c),this.h()},h(){b(t,"class","svelte-v785rl")},m(e,a){k(e,t,a),f(t,s),n||(r=w(t,"click",i[2]),n=!0)},p(e,[a]){a&2&&B(s,e[1])},i:h,o:h,d(e){e&&c(t),n=!1,r()}}}function J(i,t,s){let{href:n}=t,{text:r}=t;const e=()=>H(n);return i.$$set=a=>{"href"in a&&s(0,n=a.href),"text"in a&&s(1,r=a.text)},[n,r,e]}class K extends p{constructor(t){super();v(this,t,J,I,g,{href:0,text:1})}}function M(i){let t,s,n,r,e,a;return e=new K({props:{text:"Back to Home",href:"/"}}),{c(){t=u("div"),s=u("p"),n=x("Sorry, we couldn't find that address."),r=S(),E(e.$$.fragment),this.h()},l(o){t=d(o,"DIV",{class:!0});var l=m(t);s=d(l,"P",{});var _=m(s);n=y(_,"Sorry, we couldn't find that address."),_.forEach(c),r=q(l),T(e.$$.fragment,l),l.forEach(c),this.h()},h(){b(t,"class","svelte-1tbt353")},m(o,l){k(o,t,l),f(t,s),f(s,n),f(t,r),j(e,t,null),a=!0},p:h,i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){C(e.$$.fragment,o),a=!1},d(o){o&&c(t),D(e)}}}class V extends p{constructor(t){super();v(this,t,null,M,g,{})}}export{V as default};
