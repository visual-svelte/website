import{S as Z,i as ee,s as te,e as h,t as i,k as v,w as ae,c as p,a as u,h as n,d as s,m as _,x as re,b as G,g,F as t,y as se,q as oe,o as le,B as ie,O as ne}from"../chunks/vendor-a43dc3a5.js";import{d as he}from"../chunks/cms-d557feeb.js";import{P as pe}from"../chunks/PostGallery-95cd3be1.js";import{p as ue}from"../chunks/stores-e5b797a6.js";import"../chunks/SimplePostCard-0aae011d.js";import"../chunks/navigation-0e6511d1.js";import"../chunks/singletons-d1fb5791.js";function fe(x){let f,w,c,a,r,k,y,H,q,A,I,C,M,E,R,z,d,J,S,L,V,Y,$,B,D,b,F,P,m,j;return m=new pe({props:{posts:x[0]}}),{c(){f=h("h1"),w=i("Techniques for powerful, visual storytelling with Svelte"),c=v(),a=h("div"),r=h("p"),k=i(`An educational site providing code and examples of great data visualizations\r
    and visual journalism with `),y=h("a"),H=i("SvelteKit"),q=i("."),A=v(),I=h("p"),C=i(`This site was born out of my own frustrations on the learning curve of both\r
    D3.js and Javascript/ CSS/ HTML.`),M=v(),E=h("p"),R=i("I'm creating the resource I wish I had to learn faster."),z=v(),d=h("p"),J=i("You can read more about how and why I'm doing that, "),S=h("a"),L=i("here"),V=i("."),Y=v(),$=h("p"),B=i(`Intially, the focus focus will be on the legendary D3.js and how to\r
    implement the whole library in SvelteKit.`),D=v(),b=h("h2"),F=i("Recent D3 & SvelteKit Series:"),P=v(),ae(m.$$.fragment),this.h()},l(e){f=p(e,"H1",{});var l=u(f);w=n(l,"Techniques for powerful, visual storytelling with Svelte"),l.forEach(s),c=_(e),a=p(e,"DIV",{class:!0});var o=u(a);r=p(o,"P",{});var K=u(r);k=n(K,`An educational site providing code and examples of great data visualizations\r
    and visual journalism with `),y=p(K,"A",{href:!0});var O=u(y);H=n(O,"SvelteKit"),O.forEach(s),q=n(K,"."),K.forEach(s),A=_(o),I=p(o,"P",{});var N=u(I);C=n(N,`This site was born out of my own frustrations on the learning curve of both\r
    D3.js and Javascript/ CSS/ HTML.`),N.forEach(s),M=_(o),E=p(o,"P",{});var Q=u(E);R=n(Q,"I'm creating the resource I wish I had to learn faster."),Q.forEach(s),z=_(o),d=p(o,"P",{});var T=u(d);J=n(T,"You can read more about how and why I'm doing that, "),S=p(T,"A",{href:!0});var U=u(S);L=n(U,"here"),U.forEach(s),V=n(T,"."),T.forEach(s),Y=_(o),$=p(o,"P",{});var W=u($);B=n(W,`Intially, the focus focus will be on the legendary D3.js and how to\r
    implement the whole library in SvelteKit.`),W.forEach(s),o.forEach(s),D=_(e),b=p(e,"H2",{});var X=u(b);F=n(X,"Recent D3 & SvelteKit Series:"),X.forEach(s),P=_(e),re(m.$$.fragment,e),this.h()},h(){G(y,"href","https://kit.svelte.dev/"),G(S,"href","/about"),G(a,"class","svelte-13thy5r")},m(e,l){g(e,f,l),t(f,w),g(e,c,l),g(e,a,l),t(a,r),t(r,k),t(r,y),t(y,H),t(r,q),t(a,A),t(a,I),t(I,C),t(a,M),t(a,E),t(E,R),t(a,z),t(a,d),t(d,J),t(d,S),t(S,L),t(d,V),t(a,Y),t(a,$),t($,B),g(e,D,l),g(e,b,l),t(b,F),g(e,P,l),se(m,e,l),j=!0},p(e,[l]){const o={};l&1&&(o.posts=e[0]),m.$set(o)},i(e){j||(oe(m.$$.fragment,e),j=!0)},o(e){le(m.$$.fragment,e),j=!1},d(e){e&&s(f),e&&s(c),e&&s(a),e&&s(D),e&&s(b),e&&s(P),ie(m,e)}}}function me(x,f,w){let c,a;return ne(x,ue,r=>w(1,a=r)),a.url.pathname,w(0,c=he.filter(r=>r.published).map(r=>({id:r.primary_key,thumbnail:r.thumbnail,title:r.post_title,keywords:r.keywords}))),[c]}class be extends Z{constructor(f){super();ee(this,f,me,fe,te,{})}}export{be as default};
