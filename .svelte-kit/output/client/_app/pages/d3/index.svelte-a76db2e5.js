import{S as E,i as H,s as I,e as P,t as k,k as y,w,c as b,a as D,h as R,d as o,m as d,x as S,g as f,F as g,y as v,q as x,o as q,B as A}from"../../chunks/vendor-2349d98c.js";import{d as B}from"../../chunks/stores-04a118d2.js";import{d as F}from"../../chunks/cms-d3-recipes-d356e6e2.js";import{P as C}from"../../chunks/PostGallery-086651d5.js";import"../../chunks/CodeVisual-943e65f9.js";import"../../chunks/ActionButton.svelte_svelte_type_style_lang-19892f2a.js";import"../../chunks/singletons-d1fb5791.js";function G(u){let a,m,l,r,e,p,c,_,i,$;return r=new C({props:{posts:u[1],pathRoute:"/d3/api/"}}),i=new C({props:{posts:u[0],pathRoute:"/d3/recipes/"}}),{c(){a=P("h1"),m=k("D3 API Posts"),l=y(),w(r.$$.fragment),e=y(),p=P("h1"),c=k("D3 + Svelte Recipe Posts"),_=y(),w(i.$$.fragment)},l(t){a=b(t,"H1",{});var s=D(a);m=R(s,"D3 API Posts"),s.forEach(o),l=d(t),S(r.$$.fragment,t),e=d(t),p=b(t,"H1",{});var n=D(p);c=R(n,"D3 + Svelte Recipe Posts"),n.forEach(o),_=d(t),S(i.$$.fragment,t)},m(t,s){f(t,a,s),g(a,m),f(t,l,s),v(r,t,s),f(t,e,s),f(t,p,s),g(p,c),f(t,_,s),v(i,t,s),$=!0},p(t,[s]){const n={};s&2&&(n.posts=t[1]),r.$set(n);const h={};s&1&&(h.posts=t[0]),i.$set(h)},i(t){$||(x(r.$$.fragment,t),x(i.$$.fragment,t),$=!0)},o(t){q(r.$$.fragment,t),q(i.$$.fragment,t),$=!1},d(t){t&&o(a),t&&o(l),A(r,t),t&&o(e),t&&o(p),t&&o(_),A(i,t)}}}function M(u,a,m){let l,r;return m(1,l=B.filter(e=>e.published).map(e=>({id:e.primary_key,thumbnail:e.thumbnail,title:e.post_title,keywords:e.keywords}))),m(0,r=F.filter(e=>e.published).map(e=>({id:e.primary_key,thumbnail:e.thumbnail,title:e.post_title,keywords:e.keywords}))),[r,l]}class Q extends E{constructor(a){super();H(this,a,M,G,I,{})}}export{Q as default};
