import{S as w,i as P,s as q,l as m,g as M,q as u,w as S,x,y as I,o as h,B,n as v,p as k,d as _,e as C,c as D,a as G,b as E,O as F,P as L}from"./vendor-1ca4a53e.js";import{S as N}from"./SimplePostCard-b7f41c63.js";import{p as O}from"./stores-f38da340.js";function p(a,l,r){const e=a.slice();return e[5]=l[r],e}function g(a){let l,r;return l=new N({props:{data:a[5]}}),{c(){S(l.$$.fragment)},l(e){x(l.$$.fragment,e)},m(e,t){I(l,e,t),r=!0},p(e,t){const s={};t&1&&(s.data=e[5]),l.$set(s)},i(e){r||(u(l.$$.fragment,e),r=!0)},o(e){h(l.$$.fragment,e),r=!1},d(e){B(l,e)}}}function y(a){let l,r,e=a[5].id!==a[1].params.slug&&g(a);return{c(){e&&e.c(),l=m()},l(t){e&&e.l(t),l=m()},m(t,s){e&&e.m(t,s),M(t,l,s),r=!0},p(t,s){t[5].id!==t[1].params.slug?e?(e.p(t,s),s&3&&u(e,1)):(e=g(t),e.c(),u(e,1),e.m(l.parentNode,l)):e&&(v(),h(e,1,1,()=>{e=null}),k())},i(t){r||(u(e),r=!0)},o(t){h(e),r=!1},d(t){e&&e.d(t),t&&_(l)}}}function R(a){let l,r,e=a[0],t=[];for(let o=0;o<e.length;o+=1)t[o]=y(p(a,e,o));const s=o=>h(t[o],1,1,()=>{t[o]=null});return{c(){l=C("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){l=D(o,"DIV",{class:!0});var i=G(l);for(let n=0;n<t.length;n+=1)t[n].l(i);i.forEach(_),this.h()},h(){E(l,"class","post-gallery svelte-q5qgda")},m(o,i){M(o,l,i);for(let n=0;n<t.length;n+=1)t[n].m(l,null);r=!0},p(o,[i]){if(i&3){e=o[0];let n;for(n=0;n<e.length;n+=1){const c=p(o,e,n);t[n]?(t[n].p(c,i),u(t[n],1)):(t[n]=y(c),t[n].c(),u(t[n],1),t[n].m(l,null))}for(v(),n=e.length;n<t.length;n+=1)s(n);k()}},i(o){if(!r){for(let i=0;i<e.length;i+=1)u(t[i]);r=!0}},o(o){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)h(t[i]);r=!1},d(o){o&&_(l),F(t,o)}}}function b(a,l){return a=Math.ceil(a),l=Math.floor(l),Math.floor(Math.random()*(l-a+1))+a}function V(a,l,r){let e,t;L(a,O,n=>r(1,t=n));let{posts:s}=l,{showMax:o=void 0}=l;function i(){if(typeof o=="undefined")return s;{let n=[],c=[];for(let d=0;d<o;d++){let f=b(0,(s==null?void 0:s.length)-1);c.includes(f)?(f=b(0,(s==null?void 0:s.length)-1),c.includes(f)||(n.push(s[f]),c.push(f))):(n.push(s[f]),c.push(f))}return n}}return a.$$set=n=>{"posts"in n&&r(2,s=n.posts),"showMax"in n&&r(3,o=n.showMax)},r(0,e=i()),[e,t,s,o]}class H extends w{constructor(l){super();P(this,l,V,R,q,{posts:2,showMax:3})}}export{H as P};
