import{S as C,i as K,s as q,e as y,t as P,c as k,a as w,h as j,d as g,b as D,g as x,F as d,j as Y,k as E,m as I,H as N,I as F,w as H,x as V,y as T,q as S,o as M,B as z,p as G,n as J}from"../../../chunks/vendor-2349d98c.js";import{d as O}from"../../../chunks/stores-04a118d2.js";import{d as Q}from"../../../chunks/cms-d3-recipes-d356e6e2.js";import{P as W}from"../../../chunks/PostGallery-086651d5.js";import{K as X}from"../../../chunks/Kofi-9bb23c4f.js";import{M as Z}from"../../../chunks/Meta-469e3d72.js";import"../../../chunks/CodeVisual-943e65f9.js";import"../../../chunks/ActionButton.svelte_svelte_type_style_lang-19892f2a.js";import"../../../chunks/singletons-d1fb5791.js";function R(o,t,r){const s=o.slice();return s[1]=t[r],s}function U(o){let t,r=o[1]+"",s,l;return{c(){t=y("a"),s=P(r),this.h()},l(a){t=k(a,"A",{class:!0,href:!0,rel:!0});var n=w(t);s=j(n,r),n.forEach(g),this.h()},h(){D(t,"class","tag svelte-gv4z45"),D(t,"href",l="/tags/"+o[1]),D(t,"rel","interal")},m(a,n){x(a,t,n),d(t,s)},p(a,n){n&1&&r!==(r=a[1]+"")&&Y(s,r),n&1&&l!==(l="/tags/"+a[1])&&D(t,"href",l)},d(a){a&&g(t)}}}function tt(o){let t,r,s=o[0].post_title+"",l,a,n,c=o[0].intro_text+"",v,p,$,e=o[0].keywords,i=[];for(let f=0;f<e.length;f+=1)i[f]=U(R(o,e,f));return{c(){t=y("div"),r=y("h1"),l=P(s),a=E(),n=y("p"),v=E(),p=y("div"),$=P(`Tags:\r
    `);for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){t=k(f,"DIV",{class:!0});var u=w(t);r=k(u,"H1",{});var m=w(r);l=j(m,s),m.forEach(g),a=I(u),n=k(u,"P",{class:!0});var h=w(n);h.forEach(g),v=I(u),p=k(u,"DIV",{class:!0});var _=w(p);$=j(_,`Tags:\r
    `);for(let b=0;b<i.length;b+=1)i[b].l(_);_.forEach(g),u.forEach(g),this.h()},h(){D(n,"class","sub svelte-gv4z45"),D(p,"class","tags svelte-gv4z45"),D(t,"class","header svelte-gv4z45")},m(f,u){x(f,t,u),d(t,r),d(r,l),d(t,a),d(t,n),n.innerHTML=c,d(t,v),d(t,p),d(p,$);for(let m=0;m<i.length;m+=1)i[m].m(p,null)},p(f,[u]){if(u&1&&s!==(s=f[0].post_title+"")&&Y(l,s),u&1&&c!==(c=f[0].intro_text+"")&&(n.innerHTML=c),u&1){e=f[0].keywords;let m;for(m=0;m<e.length;m+=1){const h=R(f,e,m);i[m]?i[m].p(h,u):(i[m]=U(h),i[m].c(),i[m].m(p,null))}for(;m<i.length;m+=1)i[m].d(1);i.length=e.length}},i:N,o:N,d(f){f&&g(t),F(i,f)}}}function et(o,t,r){let{data:s}=t;return o.$$set=l=>{"data"in l&&r(0,s=l.data)},[s]}class at extends C{constructor(t){super();K(this,t,et,tt,q,{data:0})}}function st(o){let t,r,s,l,a,n,c,v,p,$,e,i,f,u,m;return p=new X({}),u=new W({props:{posts:o[0],showMax:3,pathRoute:"/d3/api/"}}),{c(){t=y("div"),r=y("h2"),s=P("Thanks for viewing!"),l=E(),a=y("p"),n=P(`If you found any of my ramblings or code examples useful, please consider\r
    supporting this blog so I can make more tutorials:`),c=E(),v=y("div"),H(p.$$.fragment),$=E(),e=y("h2"),i=P("You might also like:"),f=E(),H(u.$$.fragment),this.h()},l(h){t=k(h,"DIV",{class:!0});var _=w(t);r=k(_,"H2",{});var b=w(r);s=j(b,"Thanks for viewing!"),b.forEach(g),l=I(_),a=k(_,"P",{});var A=w(a);n=j(A,`If you found any of my ramblings or code examples useful, please consider\r
    supporting this blog so I can make more tutorials:`),A.forEach(g),c=I(_),v=k(_,"DIV",{class:!0});var B=w(v);V(p.$$.fragment,B),B.forEach(g),$=I(_),e=k(_,"H2",{});var L=w(e);i=j(L,"You might also like:"),L.forEach(g),f=I(_),V(u.$$.fragment,_),_.forEach(g),this.h()},h(){D(v,"class","kofi-cup svelte-1pv7oei"),D(t,"class","wrapper svelte-1pv7oei")},m(h,_){x(h,t,_),d(t,r),d(r,s),d(t,l),d(t,a),d(a,n),d(t,c),d(t,v),T(p,v,null),d(t,$),d(t,e),d(e,i),d(t,f),T(u,t,null),m=!0},p(h,[_]){const b={};_&1&&(b.posts=h[0]),u.$set(b)},i(h){m||(S(p.$$.fragment,h),S(u.$$.fragment,h),m=!0)},o(h){M(p.$$.fragment,h),M(u.$$.fragment,h),m=!1},d(h){h&&g(t),z(p),z(u)}}}function nt(o,t,r){let{data:s}=t;return o.$$set=l=>{"data"in l&&r(0,s=l.data)},[s]}class rt extends C{constructor(t){super();K(this,t,nt,st,q,{data:0})}}function lt(o){let t,r,s,l,a,n,c,v;t=new Z({props:{metadata:o[0]}}),s=new at({props:{data:o[2]}});var p=o[2].component;function $(e){return{}}return p&&(a=new p($())),c=new rt({props:{data:o[1]}}),{c(){H(t.$$.fragment),r=E(),H(s.$$.fragment),l=E(),a&&H(a.$$.fragment),n=E(),H(c.$$.fragment)},l(e){V(t.$$.fragment,e),r=I(e),V(s.$$.fragment,e),l=I(e),a&&V(a.$$.fragment,e),n=I(e),V(c.$$.fragment,e)},m(e,i){T(t,e,i),x(e,r,i),T(s,e,i),x(e,l,i),a&&T(a,e,i),x(e,n,i),T(c,e,i),v=!0},p(e,[i]){const f={};i&1&&(f.metadata=e[0]),t.$set(f);const u={};if(i&4&&(u.data=e[2]),s.$set(u),p!==(p=e[2].component)){if(a){J();const h=a;M(h.$$.fragment,1,0,()=>{z(h,1)}),G()}p?(a=new p($()),H(a.$$.fragment),S(a.$$.fragment,1),T(a,n.parentNode,n)):a=null}const m={};i&2&&(m.data=e[1]),c.$set(m)},i(e){v||(S(t.$$.fragment,e),S(s.$$.fragment,e),a&&S(a.$$.fragment,e),S(c.$$.fragment,e),v=!0)},o(e){M(t.$$.fragment,e),M(s.$$.fragment,e),a&&M(a.$$.fragment,e),M(c.$$.fragment,e),v=!1},d(e){z(t,e),e&&g(r),z(s,e),e&&g(l),a&&z(a,e),e&&g(n),z(c,e)}}}function it(o){return o.split("-").map(s=>{var n;return((n=s.charAt(0))==null?void 0:n.toUpperCase()).concat(s.slice(1))}).join("")}async function vt(o){let t=o.url.pathname;const r=t.split("/").pop();let s=it(r);const l=Q.find(c=>c.primary_key==s);let a=O.filter(c=>c.published).map(c=>({id:c.primary_key,thumbnail:c.thumbnail,title:c.post_title,keywords:c.keywords})),n={t:`${l==null?void 0:l.post_title} | VisualSvelte`,d:l.intro_text,u:t,tags:l.keywords.join()};return{props:{filteredData:a,content:l,metadata:n}}}function ot(o,t,r){let{metadata:s}=t,{filteredData:l}=t,{content:a}=t;return o.$$set=n=>{"metadata"in n&&r(0,s=n.metadata),"filteredData"in n&&r(1,l=n.filteredData),"content"in n&&r(2,a=n.content)},[s,l,a]}class $t extends C{constructor(t){super();K(this,t,ot,lt,q,{metadata:0,filteredData:1,content:2})}}export{$t as default,vt as load};