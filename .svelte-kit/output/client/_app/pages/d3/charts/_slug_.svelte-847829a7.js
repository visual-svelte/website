import{S as I,i as L,s as M,w as u,k as w,e as V,x as h,m as v,c as b,a as j,d as y,b as x,y as p,g as k,F as E,o as $,p as F,q as _,B as c,n as H}from"../../../chunks/vendor-9a29ee41.js";import{s as K,a as N}from"../../../chunks/textUtils-a41d0805.js";import{S as U,T as z}from"../../../chunks/Thanks-b0adcfca.js";import{M as A}from"../../../chunks/Meta-9a6dfa37.js";import"../../../chunks/ActionButton.svelte_svelte_type_style_lang-19892f2a.js";import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/screen-f62d616e.js";import"../../../chunks/cms-e6cfc795.js";function G(m){var C;let n,o,e,i,s,a,d,f,g;n=new A({props:{metadata:m[0]}}),e=new U({props:{data:m[1]}});var l=(C=m[1])==null?void 0:C.component;function S(t){return{}}return l&&(a=new l(S())),f=new z({}),{c(){u(n.$$.fragment),o=w(),u(e.$$.fragment),i=w(),s=V("div"),a&&u(a.$$.fragment),d=w(),u(f.$$.fragment),this.h()},l(t){h(n.$$.fragment,t),o=v(t),h(e.$$.fragment,t),i=v(t),s=b(t,"DIV",{class:!0});var r=j(s);a&&h(a.$$.fragment,r),d=v(r),h(f.$$.fragment,r),r.forEach(y),this.h()},h(){x(s,"class","wrapper svelte-rsxsuo")},m(t,r){p(n,t,r),k(t,o,r),p(e,t,r),k(t,i,r),k(t,s,r),a&&p(a,s,null),E(s,d),p(f,s,null),g=!0},p(t,[r]){var q;const D={};r&1&&(D.metadata=t[0]),n.$set(D);const T={};if(r&2&&(T.data=t[1]),e.$set(T),l!==(l=(q=t[1])==null?void 0:q.component)){if(a){H();const B=a;$(B.$$.fragment,1,0,()=>{c(B,1)}),F()}l?(a=new l(S()),u(a.$$.fragment),_(a.$$.fragment,1),p(a,s,d)):a=null}},i(t){g||(_(n.$$.fragment,t),_(e.$$.fragment,t),a&&_(a.$$.fragment,t),_(f.$$.fragment,t),g=!0)},o(t){$(n.$$.fragment,t),$(e.$$.fragment,t),a&&$(a.$$.fragment,t),$(f.$$.fragment,t),g=!1},d(t){c(n,t),t&&y(o),c(e,t),t&&y(i),t&&y(s),a&&c(a),c(f)}}}async function tt(m){var s;const n=m.params.slug;let o=K(n);const e=(s=N)==null?void 0:s.find(a=>a.primary_key.toLowerCase()==o.toLowerCase());e?e.cat="D3 Charts (in Svelte)":console.log("");let i={t:`${e==null?void 0:e.post_title} | VisualSvelte`,d:e==null?void 0:e.intro_text,u:m.url.pathname,tags:e==null?void 0:e.keywords.join()};return{props:{content:e,metadata:i}}}function J(m,n,o){let{metadata:e}=n,{content:i}=n;return m.$$set=s=>{"metadata"in s&&o(0,e=s.metadata),"content"in s&&o(1,i=s.content)},[e,i]}class et extends I{constructor(n){super();L(this,n,J,G,M,{metadata:0,content:1})}}export{et as default,tt as load};