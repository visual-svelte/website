import{S as q,i as F,s as K,e as E,t as H,k as L,c as C,a as I,h as D,d as h,m as S,b as $,g,F as m,G as R,j as U,H as V,M as Q,ag as ne,ah as Ce,l as j,ai as Ie,aj as Ve,ak as He,al as De,q as b,o as k,v as Le,am as Se,w as N,x as O,y as P,U as Te,V as oe,a0 as se,B as G,an as re,n as J,p as X,_ as $e,X as ke,Y as ye,Z as we,O as Be,a1 as z,af as Ne,a8 as Pe,ad as Ge,ae as Me,J as ie}from"../../../chunks/vendor-238979f0.js";import{d as Oe}from"../../../chunks/cms-18cd08dd.js";import{h as je}from"../../../chunks/handleAnchorClick-2b455aeb.js";import"../../../chunks/navigation-0e6511d1.js";/* empty css                                                                 */import{S as Ae}from"../../../chunks/Scrolly-848af64f.js";import{t as Z}from"../../../chunks/post-a7bba538.js";import"../../../chunks/screen-ee914574.js";import"../../../chunks/singletons-d1fb5791.js";function ae(r,e,l){const t=r.slice();return t[1]=e[l],t}function ce(r){let e,l,t=r[1].title+"",n,c,o,s,f;return{c(){e=E("li"),l=E("a"),n=H(t),o=L(),this.h()},l(i){e=C(i,"LI",{});var a=I(e);l=C(a,"A",{href:!0});var _=I(l);n=D(_,t),_.forEach(h),o=S(a),a.forEach(h),this.h()},h(){$(l,"href",c="#"+r[1].id)},m(i,a){g(i,e,a),m(e,l),m(l,n),m(e,o),s||(f=R(l,"click",je),s=!0)},p(i,a){a&1&&t!==(t=i[1].title+"")&&U(n,t),a&1&&c!==(c="#"+i[1].id)&&$(l,"href",c)},d(i){i&&h(e),s=!1,f()}}}function Ue(r){let e,l,t,n,c=r[0],o=[];for(let s=0;s<c.length;s+=1)o[s]=ce(ae(r,c,s));return{c(){e=E("div"),l=E("p"),t=H("In this post:"),n=L();for(let s=0;s<o.length;s+=1)o[s].c()},l(s){e=C(s,"DIV",{});var f=I(e);l=C(f,"P",{});var i=I(l);t=D(i,"In this post:"),i.forEach(h),n=S(f);for(let a=0;a<o.length;a+=1)o[a].l(f);f.forEach(h)},m(s,f){g(s,e,f),m(e,l),m(l,t),m(e,n);for(let i=0;i<o.length;i+=1)o[i].m(e,null)},p(s,[f]){if(f&1){c=s[0];let i;for(i=0;i<c.length;i+=1){const a=ae(s,c,i);o[i]?o[i].p(a,f):(o[i]=ce(a),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=c.length}},i:V,o:V,d(s){s&&h(e),Q(o,s)}}}function qe(r,e,l){let{points:t}=e;return r.$$set=n=>{"points"in n&&l(0,t=n.points)},[t]}class Fe extends q{constructor(e){super();F(this,e,qe,Ue,K,{points:0})}}function Ke(r){let e,l,t,n,c;return{c(){e=E("p"),l=H(`Sorry, I'm still working on this piece of content! But I'll be sure to publish\r
  it as soon as it's ready.`),t=L(),n=E("p"),c=H("Want to be informed when it is released. sign up to our mailing list."),this.h()},l(o){e=C(o,"P",{class:!0});var s=I(e);l=D(s,`Sorry, I'm still working on this piece of content! But I'll be sure to publish\r
  it as soon as it's ready.`),s.forEach(h),t=S(o),n=C(o,"P",{class:!0});var f=I(n);c=D(f,"Want to be informed when it is released. sign up to our mailing list."),f.forEach(h),this.h()},h(){$(e,"class","svelte-fyff70"),$(n,"class","svelte-fyff70")},m(o,s){g(o,e,s),m(e,l),g(o,t,s),g(o,n,s),m(n,c)},p:V,i:V,o:V,d(o){o&&h(e),o&&h(t),o&&h(n)}}}class We extends q{constructor(e){super();F(this,e,null,Ke,K,{})}}function Je(r){let e,l=r[1]?"\u2714\uFE0F Copied!":"Copy to Clipboard",t,n,c;return{c(){e=E("button"),t=H(l),this.h()},l(o){e=C(o,"BUTTON",{class:!0});var s=I(e);t=D(s,l),s.forEach(h),this.h()},h(){$(e,"class","svelte-1j0swci")},m(o,s){g(o,e,s),m(e,t),n||(c=R(e,"click",r[3]),n=!0)},p(o,[s]){s&2&&l!==(l=o[1]?"\u2714\uFE0F Copied!":"Copy to Clipboard")&&U(t,l)},i:V,o:V,d(o){o&&h(e),n=!1,c()}}}function Xe(r,e,l){let{content:t}=e,n=!1;function c(s){navigator.clipboard.writeText(s),l(1,n=!0)}const o=()=>c(atob(t));return r.$$set=s=>{"content"in s&&l(0,t=s.content)},[t,n,c,o]}class fe extends q{constructor(e){super();F(this,e,Xe,Je,K,{content:0})}}function Ye(r){return{c:V,l:V,m:V,p:V,i:V,o:V,d:V}}function Ze(r){let e,l,t,n,c,o,s,f;return e=new fe({props:{content:r[4].content}}),n=new Se({props:{code:atob(r[4].content)}}),s=new fe({props:{content:r[4].content}}),{c(){N(e.$$.fragment),l=L(),t=E("div"),N(n.$$.fragment),o=L(),N(s.$$.fragment)},l(i){O(e.$$.fragment,i),l=S(i),t=C(i,"DIV",{});var a=I(t);O(n.$$.fragment,a),a.forEach(h),o=S(i),O(s.$$.fragment,i)},m(i,a){P(e,i,a),g(i,l,a),g(i,t,a),P(n,t,null),g(i,o,a),P(s,i,a),f=!0},p(i,a){const _={};a&1&&(_.content=i[4].content),e.$set(_);const u={};a&1&&(u.code=atob(i[4].content)),n.$set(u);const d={};a&1&&(d.content=i[4].content),s.$set(d)},i(i){f||(b(e.$$.fragment,i),b(n.$$.fragment,i),Te(()=>{c||(c=oe(t,se,{x:-50,duration:300},!0)),c.run(1)}),b(s.$$.fragment,i),f=!0)},o(i){k(e.$$.fragment,i),k(n.$$.fragment,i),c||(c=oe(t,se,{x:-50,duration:300},!1)),c.run(0),k(s.$$.fragment,i),f=!1},d(i){G(e,i),i&&h(l),i&&h(t),G(n),i&&c&&c.end(),i&&h(o),G(s,i)}}}function ze(r){let e;return{c(){e=H("Loading ...")},l(l){e=D(l,"Loading ...")},m(l,t){g(l,e,t)},p:V,i:V,o:V,d(l){l&&h(e)}}}function Qe(r){let e,l,t,n,c,o={ctx:r,current:null,token:null,hasCatch:!1,pending:ze,then:Ze,catch:Ye,value:4,blocks:[,,,]};return ne(e=r[0],o),{c(){o.block.c(),l=L(),t=new Ce,n=j(),this.h()},l(s){o.block.l(s),l=S(s);const f=Ie('[data-svelte="svelte-32u38c"]',document.head);t=Ve(f),n=j(),f.forEach(h),this.h()},h(){t.a=n},m(s,f){o.block.m(s,o.anchor=f),o.mount=()=>l.parentNode,o.anchor=l,g(s,l,f),t.m(He,document.head),m(document.head,n),c=!0},p(s,[f]){r=s,o.ctx=r,f&1&&e!==(e=r[0])&&ne(e,o)||De(o,r,f)},i(s){c||(b(o.block),c=!0)},o(s){for(let f=0;f<3;f+=1){const i=o.blocks[f];k(i)}c=!1},d(s){o.block.d(s),o.token=null,o=null,s&&h(l),h(n),s&&t.d()}}}function Re(r,e,l){let t,{compid:n}=e;async function c(){const s=await self.fetch(t);if(s.ok)return s.json();throw new Error}let o=Promise.resolve([]);return Le(async()=>{l(0,o=c())}),r.$$set=s=>{"compid"in s&&l(1,n=s.compid)},r.$$.update=()=>{r.$$.dirty&2&&(t=`https://api.github.com/repos/visual-svelte/website/contents/src/components/d3/${n}.svelte`)},[o,n]}class xe extends q{constructor(e){super();F(this,e,Re,Qe,K,{compid:1})}}function et(r){let e,l,t,n,c,o,s,f,i;return{c(){e=E("div"),l=H("Note: this page shows you how to implment the "),t=H(r[1]),n=H(` module in SvelteKit. For\r
  more details about the `),c=H(r[1]),o=H(` module, please consult the\r
  `),s=E("a"),f=H("docs on GitHub"),i=H("."),this.h()},l(a){e=C(a,"DIV",{class:!0});var _=I(e);l=D(_,"Note: this page shows you how to implment the "),t=D(_,r[1]),n=D(_,` module in SvelteKit. For\r
  more details about the `),c=D(_,r[1]),o=D(_,` module, please consult the\r
  `),s=C(_,"A",{href:!0});var u=I(s);f=D(u,"docs on GitHub"),u.forEach(h),i=D(_,"."),_.forEach(h),this.h()},h(){$(s,"href",r[0]),$(e,"class","svelte-nh07a1")},m(a,_){g(a,e,_),m(e,l),m(e,t),m(e,n),m(e,c),m(e,o),m(e,s),m(s,f),m(e,i)},p(a,[_]){_&2&&U(t,a[1]),_&2&&U(c,a[1]),_&1&&$(s,"href",a[0])},i:V,o:V,d(a){a&&h(e)}}}function tt(r,e,l){let{url:t}=e,{d3module:n}=e;return r.$$set=c=>{"url"in c&&l(0,t=c.url),"d3module"in c&&l(1,n=c.d3module)},[t,n]}class lt extends q{constructor(e){super();F(this,e,tt,et,K,{url:0,d3module:1})}}function ue(r,e,l){const t=r.slice();return t[5]=e[l],t}const nt=r=>({}),_e=r=>({}),ot=r=>({}),he=r=>({});function pe(r,e,l){const t=r.slice();return t[5]=e[l],t}function me(r){let e,l,t=r[5].label+"",n,c,o,s,f;return{c(){e=E("li"),l=E("span"),n=H(t),c=L(),this.h()},l(i){e=C(i,"LI",{class:!0});var a=I(e);l=C(a,"SPAN",{class:!0});var _=I(l);n=D(_,t),_.forEach(h),c=S(a),a.forEach(h),this.h()},h(){$(l,"class","svelte-bakiw6"),$(e,"class",o=re(r[0]===r[5].value?"active":"")+" svelte-bakiw6")},m(i,a){g(i,e,a),m(e,l),m(l,n),m(e,c),s||(f=R(l,"click",r[2](r[5].value)),s=!0)},p(i,a){r=i,a&1&&o!==(o=re(r[0]===r[5].value?"active":"")+" svelte-bakiw6")&&$(e,"class",o)},d(i){i&&h(e),s=!1,f()}}}function de(r){let e,l,t,n,c;const o=[rt,st],s=[];function f(i,a){return i[0]==1?0:1}return l=f(r),t=s[l]=o[l](r),{c(){e=E("div"),t.c(),n=L(),this.h()},l(i){e=C(i,"DIV",{class:!0});var a=I(e);t.l(a),n=S(a),a.forEach(h),this.h()},h(){$(e,"class","box svelte-bakiw6")},m(i,a){g(i,e,a),s[l].m(e,null),m(e,n),c=!0},p(i,a){let _=l;l=f(i),l===_?s[l].p(i,a):(J(),k(s[_],1,1,()=>{s[_]=null}),X(),t=s[l],t?t.p(i,a):(t=s[l]=o[l](i),t.c()),b(t,1),t.m(e,n))},i(i){c||(b(t),c=!0)},o(i){k(t),c=!1},d(i){i&&h(e),s[l].d()}}}function st(r){let e;const l=r[4].tab2,t=$e(l,r,r[3],_e);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,c){t&&t.m(n,c),e=!0},p(n,c){t&&t.p&&(!e||c&8)&&ke(t,l,n,n[3],e?we(l,n[3],c,nt):ye(n[3]),_e)},i(n){e||(b(t,n),e=!0)},o(n){k(t,n),e=!1},d(n){t&&t.d(n)}}}function rt(r){let e;const l=r[4].tab1,t=$e(l,r,r[3],he);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,c){t&&t.m(n,c),e=!0},p(n,c){t&&t.p&&(!e||c&8)&&ke(t,l,n,n[3],e?we(l,n[3],c,ot):ye(n[3]),he)},i(n){e||(b(t,n),e=!0)},o(n){k(t,n),e=!1},d(n){t&&t.d(n)}}}function ve(r){let e,l,t=r[0]==r[5].value&&de(r);return{c(){t&&t.c(),e=j()},l(n){t&&t.l(n),e=j()},m(n,c){t&&t.m(n,c),g(n,e,c),l=!0},p(n,c){n[0]==n[5].value?t?(t.p(n,c),c&1&&b(t,1)):(t=de(n),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(J(),k(t,1,1,()=>{t=null}),X())},i(n){l||(b(t),l=!0)},o(n){k(t),l=!1},d(n){t&&t.d(n),n&&h(e)}}}function it(r){let e,l,t,n,c=r[1],o=[];for(let a=0;a<c.length;a+=1)o[a]=me(pe(r,c,a));let s=r[1],f=[];for(let a=0;a<s.length;a+=1)f[a]=ve(ue(r,s,a));const i=a=>k(f[a],1,1,()=>{f[a]=null});return{c(){e=E("ul");for(let a=0;a<o.length;a+=1)o[a].c();l=L();for(let a=0;a<f.length;a+=1)f[a].c();t=j(),this.h()},l(a){e=C(a,"UL",{class:!0});var _=I(e);for(let u=0;u<o.length;u+=1)o[u].l(_);_.forEach(h),l=S(a);for(let u=0;u<f.length;u+=1)f[u].l(a);t=j(),this.h()},h(){$(e,"class","svelte-bakiw6")},m(a,_){g(a,e,_);for(let u=0;u<o.length;u+=1)o[u].m(e,null);g(a,l,_);for(let u=0;u<f.length;u+=1)f[u].m(a,_);g(a,t,_),n=!0},p(a,[_]){if(_&7){c=a[1];let u;for(u=0;u<c.length;u+=1){const d=pe(a,c,u);o[u]?o[u].p(d,_):(o[u]=me(d),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=c.length}if(_&11){s=a[1];let u;for(u=0;u<s.length;u+=1){const d=ue(a,s,u);f[u]?(f[u].p(d,_),b(f[u],1)):(f[u]=ve(d),f[u].c(),b(f[u],1),f[u].m(t.parentNode,t))}for(J(),u=s.length;u<f.length;u+=1)i(u);X()}},i(a){if(!n){for(let _=0;_<s.length;_+=1)b(f[_]);n=!0}},o(a){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)k(f[_]);n=!1},d(a){a&&h(e),Q(o,a),a&&h(l),Q(f,a),a&&h(t)}}}function at(r,e,l){let{$$slots:t={},$$scope:n}=e,c=[{label:"Visual",value:1},{label:"Code",value:2}],o=1;const s=f=>()=>l(0,o=f);return r.$$set=f=>{"$$scope"in f&&l(3,n=f.$$scope)},[o,c,s,n,t]}class ct extends q{constructor(e){super();F(this,e,at,it,K,{})}}function be(r,e,l){const t=r.slice();return t[9]=e[l],t[11]=l,t}function ft(r){let e,l,t;function n(o){r[4](o)}let c={$$slots:{default:[pt]},$$scope:{ctx:r}};return r[1]!==void 0&&(c.value=r[1]),e=new Ae({props:c}),Pe.push(()=>Ge(e,"value",n)),{c(){N(e.$$.fragment)},l(o){O(e.$$.fragment,o)},m(o,s){P(e,o,s),t=!0},p(o,s){const f={};s&4107&&(f.$$scope={dirty:s,ctx:o}),!l&&s&2&&(l=!0,f.value=o[1],Me(()=>l=!1)),e.$set(f)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){G(e,o)}}}function ut(r){let e,l;return e=new We({}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){P(e,t,n),l=!0},p:V,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function _t(r){let e,l,t,n;var c=r[9].component;function o(s){return{}}return c&&(t=new c(o())),{c(){e=E("div"),l=E("div"),t&&N(t.$$.fragment),this.h()},l(s){e=C(s,"DIV",{slot:!0});var f=I(e);l=C(f,"DIV",{class:!0});var i=I(l);t&&O(t.$$.fragment,i),i.forEach(h),f.forEach(h),this.h()},h(){$(l,"class","svg-container svelte-xv2oya"),$(e,"slot","tab1")},m(s,f){g(s,e,f),m(e,l),t&&P(t,l,null),n=!0},p(s,f){if(c!==(c=s[9].component)){if(t){J();const i=t;k(i.$$.fragment,1,0,()=>{G(i,1)}),X()}c?(t=new c(o()),N(t.$$.fragment),b(t.$$.fragment,1),P(t,l,null)):t=null}},i(s){n||(t&&b(t.$$.fragment,s),n=!0)},o(s){t&&k(t.$$.fragment,s),n=!1},d(s){s&&h(e),t&&G(t)}}}function ht(r){let e,l,t;return l=new xe({props:{compid:r[9].id}}),{c(){e=E("div"),N(l.$$.fragment),this.h()},l(n){e=C(n,"DIV",{slot:!0});var c=I(e);O(l.$$.fragment,c),c.forEach(h),this.h()},h(){$(e,"slot","tab2")},m(n,c){g(n,e,c),P(l,e,null),t=!0},p(n,c){const o={};c&8&&(o.compid=n[9].id),l.$set(o)},i(n){t||(b(l.$$.fragment,n),t=!0)},o(n){k(l.$$.fragment,n),t=!1},d(n){n&&h(e),G(l)}}}function ge(r){let e,l,t=r[9].title+"",n,c,o,s=r[9].notes+"",f,i,a,_,u;return i=new ct({props:{$$slots:{tab2:[ht],tab1:[_t]},$$scope:{ctx:r}}}),{c(){e=E("div"),l=E("h2"),n=H(t),c=L(),o=E("p"),f=L(),N(i.$$.fragment),a=L(),this.h()},l(d){e=C(d,"DIV",{id:!0,class:!0});var y=I(e);l=C(y,"H2",{class:!0});var B=I(l);n=D(B,t),B.forEach(h),c=S(y),o=C(y,"P",{class:!0});var A=I(o);A.forEach(h),f=S(y),O(i.$$.fragment,y),a=S(y),y.forEach(h),this.h()},h(){$(l,"class","subheading svelte-xv2oya"),$(o,"class","comp-description svelte-xv2oya"),$(e,"id",_=r[9].id),$(e,"class","container step"),ie(e,"active",r[1]===r[11])},m(d,y){g(d,e,y),m(e,l),m(l,n),m(e,c),m(e,o),o.innerHTML=s,m(e,f),P(i,e,null),m(e,a),u=!0},p(d,y){(!u||y&8)&&t!==(t=d[9].title+"")&&U(n,t),(!u||y&8)&&s!==(s=d[9].notes+"")&&(o.innerHTML=s);const B={};y&4104&&(B.$$scope={dirty:y,ctx:d}),i.$set(B),(!u||y&8&&_!==(_=d[9].id))&&$(e,"id",_),y&2&&ie(e,"active",d[1]===d[11])},i(d){u||(b(i.$$.fragment,d),u=!0)},o(d){k(i.$$.fragment,d),u=!1},d(d){d&&h(e),G(i)}}}function pt(r){var x,ee;let e,l,t=((x=r[0])==null?void 0:x.post_title)+"",n,c,o,s=((ee=r[0])==null?void 0:ee.intro_text)+"",f,i,a,_,u,d,y,B;a=new lt({props:{d3module:r[0].primary_key,url:`https://github.com/d3/${r[0].primary_key}`}}),u=new Fe({props:{points:r[0].components}});let A=r[3],w=[];for(let p=0;p<A.length;p+=1)w[p]=ge(be(r,A,p));const Ee=p=>k(w[p],1,1,()=>{w[p]=null});return{c(){e=E("div"),l=E("h1"),n=H(t),c=L(),o=E("p"),f=H(s),i=L(),N(a.$$.fragment),_=L(),N(u.$$.fragment),d=L();for(let p=0;p<w.length;p+=1)w[p].c();y=j(),this.h()},l(p){e=C(p,"DIV",{id:!0,class:!0});var v=I(e);l=C(v,"H1",{});var M=I(l);n=D(M,t),M.forEach(h),c=S(v),o=C(v,"P",{class:!0});var Y=I(o);f=D(Y,s),Y.forEach(h),i=S(v),O(a.$$.fragment,v),_=S(v),O(u.$$.fragment,v),v.forEach(h),d=S(p);for(let W=0;W<w.length;W+=1)w[W].l(p);y=j(),this.h()},h(){$(o,"class","svelte-xv2oya"),$(e,"id","intro"),$(e,"class","intro")},m(p,v){g(p,e,v),m(e,l),m(l,n),m(e,c),m(e,o),m(o,f),m(e,i),P(a,e,null),m(e,_),P(u,e,null),g(p,d,v);for(let M=0;M<w.length;M+=1)w[M].m(p,v);g(p,y,v),B=!0},p(p,v){var W,te;(!B||v&1)&&t!==(t=((W=p[0])==null?void 0:W.post_title)+"")&&U(n,t),(!B||v&1)&&s!==(s=((te=p[0])==null?void 0:te.intro_text)+"")&&U(f,s);const M={};v&1&&(M.d3module=p[0].primary_key),v&1&&(M.url=`https://github.com/d3/${p[0].primary_key}`),a.$set(M);const Y={};if(v&1&&(Y.points=p[0].components),u.$set(Y),v&10){A=p[3];let T;for(T=0;T<A.length;T+=1){const le=be(p,A,T);w[T]?(w[T].p(le,v),b(w[T],1)):(w[T]=ge(le),w[T].c(),b(w[T],1),w[T].m(y.parentNode,y))}for(J(),T=A.length;T<w.length;T+=1)Ee(T);X()}},i(p){if(!B){b(a.$$.fragment,p),b(u.$$.fragment,p);for(let v=0;v<A.length;v+=1)b(w[v]);B=!0}},o(p){k(a.$$.fragment,p),k(u.$$.fragment,p),w=w.filter(Boolean);for(let v=0;v<w.length;v+=1)k(w[v]);B=!1},d(p){p&&h(e),G(a),G(u),p&&h(d),Q(w,p),p&&h(y)}}}function mt(r){let e,l,t,n;const c=[ut,ft],o=[];function s(f,i){return f[2]||!f[0].published?0:1}return e=s(r),l=o[e]=c[e](r),{c(){l.c(),t=j()},l(f){l.l(f),t=j()},m(f,i){o[e].m(f,i),g(f,t,i),n=!0},p(f,[i]){let a=e;e=s(f),e===a?o[e].p(f,i):(J(),k(o[a],1,1,()=>{o[a]=null}),X(),l=o[e],l?l.p(f,i):(l=o[e]=c[e](f),l.c()),b(l,1),l.m(t.parentNode,t))},i(f){n||(b(l),n=!0)},o(f){k(l),n=!1},d(f){o[e].d(f),f&&h(t)}}}async function It(r){const l=r.url.pathname.split("/").pop();return{props:{content:Oe.find(n=>n.primary_key==l)}}}function dt(r,e,l){let t,n;Be(r,Z,u=>l(6,n=u));let{content:c}=e,o=c.components.map(u=>({id:u.id,title:u.title,bool:!1}));o.unshift({id:"intro",title:"Intro",bool:!0}),c.published&&z(Z,n=o,n),Ne(()=>{z(Z,n=[],n)});let s=!1,f=0,i=0;function a(u){try{u!=null&&(z(Z,n[i].bool=!1,n),z(Z,n[u].bool=!0,n),i=u)}catch(d){l(2,s=!0),console.error(d)}}function _(u){f=u,l(1,f)}return r.$$set=u=>{"content"in u&&l(0,c=u.content)},r.$$.update=()=>{r.$$.dirty&1&&l(3,t=c.components),r.$$.dirty&2&&a(f)},[c,f,s,t,_]}class Vt extends q{constructor(e){super();F(this,e,dt,mt,K,{content:0})}}export{Vt as default,It as load};