import{S as F,i as I,s as L,w as c,k as w,e as M,x as h,m as v,c as b,a as E,d as y,b as H,y as p,g as k,F as K,o as u,p as N,q as $,B as _,n as R}from"../../../chunks/vendor-89faea81.js";import{s as U,a as V,m as j}from"../../../chunks/textUtils-151aa77b.js";import{S as x,T as z}from"../../../chunks/Thanks-d4893b83.js";import{M as A}from"../../../chunks/Meta-662787ba.js";import"../../../chunks/ActionButton.svelte_svelte_type_style_lang-19892f2a.js";import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/screen-32658ace.js";import"../../../chunks/cms-76a72be0.js";function G(m){var S;let s,o,n,i,a,e,d,f,g;s=new A({props:{metadata:m[0]}}),n=new x({props:{data:m[1]}});var l=(S=m[1])==null?void 0:S.component;function C(t){return{}}return l&&(e=new l(C())),f=new z({}),{c(){c(s.$$.fragment),o=w(),c(n.$$.fragment),i=w(),a=M("div"),e&&c(e.$$.fragment),d=w(),c(f.$$.fragment),this.h()},l(t){h(s.$$.fragment,t),o=v(t),h(n.$$.fragment,t),i=v(t),a=b(t,"DIV",{class:!0});var r=E(a);e&&h(e.$$.fragment,r),d=v(r),h(f.$$.fragment,r),r.forEach(y),this.h()},h(){H(a,"class","wrapper svelte-rsxsuo")},m(t,r){p(s,t,r),k(t,o,r),p(n,t,r),k(t,i,r),k(t,a,r),e&&p(e,a,null),K(a,d),p(f,a,null),g=!0},p(t,[r]){var q;const D={};r&1&&(D.metadata=t[0]),s.$set(D);const T={};if(r&2&&(T.data=t[1]),n.$set(T),l!==(l=(q=t[1])==null?void 0:q.component)){if(e){R();const B=e;u(B.$$.fragment,1,0,()=>{_(B,1)}),N()}l?(e=new l(C()),c(e.$$.fragment),$(e.$$.fragment,1),p(e,a,d)):e=null}},i(t){g||($(s.$$.fragment,t),$(n.$$.fragment,t),e&&$(e.$$.fragment,t),$(f.$$.fragment,t),g=!0)},o(t){u(s.$$.fragment,t),u(n.$$.fragment,t),e&&u(e.$$.fragment,t),u(f.$$.fragment,t),g=!1},d(t){_(s,t),t&&y(o),_(n,t),t&&y(i),t&&y(a),e&&_(e),_(f)}}}async function et(m){var a;const s=m.params.slug;let o=U(s);const n=(a=V)==null?void 0:a.find(e=>e.primary_key.toLowerCase()==o.toLowerCase());n?n.cat="D3 Charts (in Svelte)":console.log("");let i=j(n,m.url.pathname);return{props:{content:n,metadata:i}}}function J(m,s,o){let{metadata:n}=s,{content:i}=s;return m.$$set=a=>{"metadata"in a&&o(0,n=a.metadata),"content"in a&&o(1,i=a.content)},[n,i]}class at extends F{constructor(s){super();I(this,s,J,G,L,{metadata:0,content:1})}}export{at as default,et as load};
