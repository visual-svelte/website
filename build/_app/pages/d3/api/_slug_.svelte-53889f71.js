import{S as W,i as Y,s as R,e as S,t as E,k as C,c as H,a as P,h as I,d,m as L,b as B,g as k,F as v,G as ue,j as K,H as G,I as ie,D as fe,w as M,x as F,y as V,o as D,p as z,q as $,B as N,J as te,K as q,bC as ce,n as Q,R as me,a2 as he,l as U,a4 as _e}from"../../../chunks/vendor-5d0334a0.js";import{d as le}from"../../../chunks/cms-2c0d73d9.js";import{F as pe}from"../../../chunks/FormattedExample-b359715d.js";import{S as de}from"../../../chunks/CodeVisual-2a072607.js";import{M as ge}from"../../../chunks/Meta-631d494a.js";import{P as be}from"../../../chunks/PostGallery-404fcc59.js";import{p as ve}from"../../../chunks/stores-bc797ba4.js";import"../../../chunks/ActionButton.svelte_svelte_type_style_lang-19892f2a.js";import"../../../chunks/singletons-d1fb5791.js";function ke(n){n.preventDefault();const e=n.currentTarget,s=new URL(e.href).hash.replace("#",""),t=document.getElementById(s);window.scrollTo({top:t.offsetTop,behavior:"smooth"})}function re(n,e,s){const t=n.slice();return t[1]=e[s],t}function se(n){let e,s,t=n[1].title+"",l,a,r,u,h;return{c(){e=S("li"),s=S("a"),l=E(t),r=C(),this.h()},l(i){e=H(i,"LI",{class:!0});var o=P(e);s=H(o,"A",{href:!0});var c=P(s);l=I(c,t),c.forEach(d),r=L(o),o.forEach(d),this.h()},h(){B(s,"href",a="#"+n[1].id),B(e,"class","svelte-1lrdn70")},m(i,o){k(i,e,o),v(e,s),v(s,l),v(e,r),u||(h=ue(s,"click",ke),u=!0)},p(i,o){o&1&&t!==(t=i[1].title+"")&&K(l,t),o&1&&a!==(a="#"+i[1].id)&&B(s,"href",a)},d(i){i&&d(e),u=!1,h()}}}function ye(n){let e,s,t,l,a=n[0],r=[];for(let u=0;u<a.length;u+=1)r[u]=se(re(n,a,u));return{c(){e=S("div"),s=S("p"),t=E("In this post:"),l=C();for(let u=0;u<r.length;u+=1)r[u].c()},l(u){e=H(u,"DIV",{});var h=P(e);s=H(h,"P",{});var i=P(s);t=I(i,"In this post:"),i.forEach(d),l=L(h);for(let o=0;o<r.length;o+=1)r[o].l(h);h.forEach(d)},m(u,h){k(u,e,h),v(e,s),v(s,t),v(e,l);for(let i=0;i<r.length;i+=1)r[i].m(e,null)},p(u,[h]){if(h&1){a=u[0];let i;for(i=0;i<a.length;i+=1){const o=re(u,a,i);r[i]?r[i].p(o,h):(r[i]=se(o),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=a.length}},i:G,o:G,d(u){u&&d(e),ie(r,u)}}}function $e(n,e,s){let{points:t}=e;return n.$$set=l=>{"points"in l&&s(0,t=l.points)},[t]}class we extends W{constructor(e){super();Y(this,e,$e,ye,R,{points:0})}}function Ee(n){let e,s,t,l,a;return{c(){e=S("p"),s=E(`Sorry, I'm still working on this piece of content! But I'll be sure to publish\r
  it as soon as it's ready.`),t=C(),l=S("p"),a=E("Want to be informed when it is released. sign up to our mailing list."),this.h()},l(r){e=H(r,"P",{class:!0});var u=P(e);s=I(u,`Sorry, I'm still working on this piece of content! But I'll be sure to publish\r
  it as soon as it's ready.`),u.forEach(d),t=L(r),l=H(r,"P",{class:!0});var h=P(l);a=I(h,"Want to be informed when it is released. sign up to our mailing list."),h.forEach(d),this.h()},h(){B(e,"class","svelte-fyff70"),B(l,"class","svelte-fyff70")},m(r,u){k(r,e,u),v(e,s),k(r,t,u),k(r,l,u),v(l,a)},p:G,i:G,o:G,d(r){r&&d(e),r&&d(t),r&&d(l)}}}class Ie extends W{constructor(e){super();Y(this,e,null,Ee,R,{})}}function De(n){let e,s,t,l,a,r,u,h,i;return{c(){e=S("div"),s=E("Note: this page shows you how to implment the "),t=E(n[1]),l=E(` module in Svelte. For\r
  more details about the `),a=E(n[1]),r=E(` module, please consult the\r
  `),u=S("a"),h=E("docs on GitHub"),i=E("."),this.h()},l(o){e=H(o,"DIV",{class:!0});var c=P(e);s=I(c,"Note: this page shows you how to implment the "),t=I(c,n[1]),l=I(c,` module in Svelte. For\r
  more details about the `),a=I(c,n[1]),r=I(c,` module, please consult the\r
  `),u=H(c,"A",{href:!0});var g=P(u);h=I(g,"docs on GitHub"),g.forEach(d),i=I(c,"."),c.forEach(d),this.h()},h(){B(u,"href",n[0]),B(e,"class","svelte-nh07a1")},m(o,c){k(o,e,c),v(e,s),v(e,t),v(e,l),v(e,a),v(e,r),v(e,u),v(u,h),v(e,i)},p(o,[c]){c&2&&K(t,o[1]),c&2&&K(a,o[1]),c&1&&B(u,"href",o[0])},i:G,o:G,d(o){o&&d(e)}}}function Se(n,e,s){let{url:t}=e,{d3module:l}=e;return n.$$set=a=>{"url"in a&&s(0,t=a.url),"d3module"in a&&s(1,l=a.d3module)},[t,l]}class He extends W{constructor(e){super();Y(this,e,Se,De,R,{url:0,d3module:1})}}const A=fe([]);function ne(n,e,s){const t=n.slice();return t[13]=e[s],t[15]=s,t}function Pe(n){let e,s,t,l,a,r,u=n[4],h,i;function o(f){n[8](f)}let c={$$slots:{default:[Ce]},$$scope:{ctx:n}};n[3]!==void 0&&(c.value=n[3]),e=new de({props:c}),me.push(()=>he(e,"value",o));let g=ae(n);return{c(){M(e.$$.fragment),t=C(),l=S("h2"),a=E("You might also like:"),r=C(),g.c(),h=U(),this.h()},l(f){F(e.$$.fragment,f),t=L(f),l=H(f,"H2",{class:!0});var b=P(l);a=I(b,"You might also like:"),b.forEach(d),r=L(f),g.l(f),h=U(),this.h()},h(){B(l,"class","svelte-dbhb1r")},m(f,b){V(e,f,b),k(f,t,b),k(f,l,b),v(l,a),k(f,r,b),g.m(f,b),k(f,h,b),i=!0},p(f,b){const w={};b&65601&&(w.$$scope={dirty:b,ctx:f}),!s&&b&8&&(s=!0,w.value=f[3],_e(()=>s=!1)),e.$set(w),b&16&&R(u,u=f[4])?(Q(),D(g,1,1,G),z(),g=ae(f),g.c(),$(g),g.m(h.parentNode,h)):g.p(f,b)},i(f){i||($(e.$$.fragment,f),$(g),i=!0)},o(f){D(e.$$.fragment,f),D(g),i=!1},d(f){N(e,f),f&&d(t),f&&d(l),f&&d(r),f&&d(h),g.d(f)}}}function Be(n){let e,s;return e=new Ie({}),{c(){M(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p:G,i(t){s||($(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function oe(n){let e,s,t;return e=new pe({props:{comp:n[13],route:"d3/"}}),{c(){M(e.$$.fragment),s=C()},l(l){F(e.$$.fragment,l),s=L(l)},m(l,a){V(e,l,a),k(l,s,a),t=!0},p(l,a){const r={};a&64&&(r.comp=l[13]),e.$set(r)},i(l){t||($(e.$$.fragment,l),t=!0)},o(l){D(e.$$.fragment,l),t=!1},d(l){N(e,l),l&&d(s)}}}function Ce(n){var X,Z;let e,s,t=((X=n[0])==null?void 0:X.post_title)+"",l,a,r,u=((Z=n[0])==null?void 0:Z.intro_text)+"",h,i,o,c,g,f,b;i=new He({props:{d3module:n[0].primary_key,url:`https://github.com/d3/${n[0].primary_key}`}}),c=new we({props:{points:n[0].components}});let w=n[6],m=[];for(let _=0;_<w.length;_+=1)m[_]=oe(ne(n,w,_));const J=_=>D(m[_],1,1,()=>{m[_]=null});return{c(){e=S("div"),s=S("h1"),l=E(t),a=C(),r=S("p"),h=C(),M(i.$$.fragment),o=C(),M(c.$$.fragment),g=C();for(let _=0;_<m.length;_+=1)m[_].c();f=U(),this.h()},l(_){e=H(_,"DIV",{id:!0,class:!0});var p=P(e);s=H(p,"H1",{});var T=P(s);l=I(T,t),T.forEach(d),a=L(p),r=H(p,"P",{class:!0});var j=P(r);j.forEach(d),h=L(p),F(i.$$.fragment,p),o=L(p),F(c.$$.fragment,p),p.forEach(d),g=L(_);for(let O=0;O<m.length;O+=1)m[O].l(_);f=U(),this.h()},h(){B(r,"class","svelte-dbhb1r"),B(e,"id","intro"),B(e,"class","intro")},m(_,p){k(_,e,p),v(e,s),v(s,l),v(e,a),v(e,r),r.innerHTML=u,v(e,h),V(i,e,null),v(e,o),V(c,e,null),k(_,g,p);for(let T=0;T<m.length;T+=1)m[T].m(_,p);k(_,f,p),b=!0},p(_,p){var O,x;(!b||p&1)&&t!==(t=((O=_[0])==null?void 0:O.post_title)+"")&&K(l,t),(!b||p&1)&&u!==(u=((x=_[0])==null?void 0:x.intro_text)+"")&&(r.innerHTML=u);const T={};p&1&&(T.d3module=_[0].primary_key),p&1&&(T.url=`https://github.com/d3/${_[0].primary_key}`),i.$set(T);const j={};if(p&1&&(j.points=_[0].components),c.$set(j),p&64){w=_[6];let y;for(y=0;y<w.length;y+=1){const ee=ne(_,w,y);m[y]?(m[y].p(ee,p),$(m[y],1)):(m[y]=oe(ee),m[y].c(),$(m[y],1),m[y].m(f.parentNode,f))}for(Q(),y=w.length;y<m.length;y+=1)J(y);z()}},i(_){if(!b){$(i.$$.fragment,_),$(c.$$.fragment,_);for(let p=0;p<w.length;p+=1)$(m[p]);b=!0}},o(_){D(i.$$.fragment,_),D(c.$$.fragment,_),m=m.filter(Boolean);for(let p=0;p<m.length;p+=1)D(m[p]);b=!1},d(_){_&&d(e),N(i),N(c),_&&d(g),ie(m,_),_&&d(f)}}}function ae(n){let e,s;return e=new be({props:{posts:n[1],showMax:3,pathRoute:"/d3/api/"}}),{c(){M(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const a={};l&2&&(a.posts=t[1]),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function Le(n){let e,s,t,l,a,r;e=new ge({props:{metadata:n[2]}});const u=[Be,Pe],h=[];function i(o,c){return o[5]||!o[0].published?0:1}return l=i(n),a=h[l]=u[l](n),{c(){M(e.$$.fragment),s=C(),t=S("div"),a.c(),this.h()},l(o){F(e.$$.fragment,o),s=L(o),t=H(o,"DIV",{class:!0});var c=P(t);a.l(c),c.forEach(d),this.h()},h(){B(t,"class","wrapper svelte-dbhb1r")},m(o,c){V(e,o,c),k(o,s,c),k(o,t,c),h[l].m(t,null),r=!0},p(o,[c]){const g={};c&4&&(g.metadata=o[2]),e.$set(g);let f=l;l=i(o),l===f?h[l].p(o,c):(Q(),D(h[f],1,1,()=>{h[f]=null}),z(),a=h[l],a?a.p(o,c):(a=h[l]=u[l](o),a.c()),$(a,1),a.m(t,null))},i(o){r||($(e.$$.fragment,o),$(a),r=!0)},o(o){D(e.$$.fragment,o),D(a),r=!1},d(o){N(e,o),o&&d(s),o&&d(t),h[l].d()}}}async function qe(n){let e=n.url.pathname;const s=e.split("/").pop(),t=le.find(r=>r.primary_key==s);let l={t:`${t==null?void 0:t.post_title} | VisualSvelte`,d:"Tell visual stories on the internet with Svelte and other technologies.",u:e,tags:t.keywords.join()};return{props:{filteredData:le.filter(r=>r.published).map(r=>({id:r.primary_key,thumbnail:r.thumbnail,title:r.post_title,keywords:r.keywords})),content:t,metadata:l}}}function Te(n,e,s){let t,l,a;te(n,A,m=>s(10,l=m)),te(n,ve,m=>s(7,a=m));let{content:r}=e,{filteredData:u}=e,{metadata:h}=e,i=0,o=r==null?void 0:r.components.map(m=>({id:m.id,title:m.title,bool:!1}));o==null||o.unshift({id:"intro",title:"Intro",bool:!0}),r&&r.published&&q(A,l=o,l),ce(()=>{q(A,l=[],l)});let c=!1,g=0,f=0;function b(m){try{m!=null&&(q(A,l[f].bool=!1,l),q(A,l[m].bool=!0,l),f=m)}catch(J){s(5,c=!0),console.error(J)}}function w(m){g=m,s(3,g)}return n.$$set=m=>{"content"in m&&s(0,r=m.content),"filteredData"in m&&s(1,u=m.filteredData),"metadata"in m&&s(2,h=m.metadata)},n.$$.update=()=>{n.$$.dirty&144&&(a.url,s(4,i+=1)),n.$$.dirty&1&&s(6,t=r==null?void 0:r.components),n.$$.dirty&8&&b(g)},[r,u,h,g,i,c,t,a,w]}class Ke extends W{constructor(e){super();Y(this,e,Te,Le,R,{content:0,filteredData:1,metadata:2})}}export{Ke as default,qe as load};