import{S as c,i as f,s as u,e as _,t as d,k as $,w as y,c as h,a as b,h as g,d as l,m as x,x as S,g as p,J as k,y as v,q as w,o as D,B as q}from"../../chunks/vendor-21d61cc0.js";import{d as A}from"../../chunks/cms-1546ab8b.js";import{P as C}from"../../chunks/PostGallery-d8410425.js";import"../../chunks/SimplePostCard-eb9a4a06.js";import"../../chunks/navigation-0e6511d1.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/stores-e6b4faaf.js";function K(i){let a,o,r,e,n;return e=new C({props:{posts:i[0]}}),{c(){a=_("h1"),o=d("All posts about D3 & SvelteKit"),r=$(),y(e.$$.fragment)},l(t){a=h(t,"H1",{});var s=b(a);o=g(s,"All posts about D3 & SvelteKit"),s.forEach(l),r=x(t),S(e.$$.fragment,t)},m(t,s){p(t,a,s),k(a,o),p(t,r,s),v(e,t,s),n=!0},p(t,[s]){const m={};s&1&&(m.posts=t[0]),e.$set(m)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){t&&l(a),t&&l(r),q(e,t)}}}function P(i,a,o){let r;return o(0,r=A.filter(e=>e.published).map(e=>({id:e.primary_key,thumbnail:e.thumbnail,title:e.post_title,keywords:e.keywords}))),[r]}class z extends c{constructor(a){super();f(this,a,P,K,u,{})}}export{z as default};
