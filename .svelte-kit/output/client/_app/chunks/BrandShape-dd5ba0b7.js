import{S as d,i as g,s as u,e as m,c as v,a as p,d as o,f as n,g as w,l as a,H as f}from"./vendor-e4e54b08.js";var _=`<svg width="100%" width="auto" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="11" width="143" height="143" fill="#B40D61"/>
<rect x="21.7416" y="0.809575" width="142" height="142" transform="rotate(8.4768 21.7416 0.809575)" stroke="white"/>
</svg>
`,y=`<svg width="130%" width="auto" viewBox="50 0 205 187" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M195 91.5L56.2499 162.947L56.2499 20.0529L195 91.5Z" fill="#FB3636"/>
<path d="M65.4321 17.9536L193.265 104.32L48.711 158.215L65.4321 17.9536Z" stroke="white"/>
</svg>
`,B=`<svg width="100%" width="auto" viewBox="0 0 144 142" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="68" cy="74" r="68" fill="#F7C419"/>
<circle cx="76" cy="68" r="67" stroke="#FBFAFA" stroke-width="2"/>
</svg>
`;function c(h){let t;return{c(){t=m("div"),this.h()},l(e){t=v(e,"DIV",{style:!0});var i=p(t);i.forEach(o),this.h()},h(){n(t,"width",h[0]),n(t,"height",h[0])},m(e,i){w(e,t,i),t.innerHTML=h[1]},p(e,i){i&2&&(t.innerHTML=e[1]),i&1&&n(t,"width",e[0]),i&1&&n(t,"height",e[0])},d(e){e&&o(t)}}}function L(h){let t,e=h[1]&&c(h);return{c(){e&&e.c(),t=a()},l(i){e&&e.l(i),t=a()},m(i,s){e&&e.m(i,s),w(i,t,s)},p(i,[s]){i[1]?e?e.p(i,s):(e=c(i),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:f,o:f,d(i){e&&e.d(i),i&&o(t)}}}function k(h,t,e){let{shape:i}=t,{height:s="150px"}=t,r;return h.$$set=l=>{"shape"in l&&e(2,i=l.shape),"height"in l&&e(0,s=l.height)},h.$$.update=()=>{h.$$.dirty&4&&(i=="square"?e(1,r=_):i=="circle"?e(1,r=B):e(1,r=y)),h.$$.dirty&2&&r&&console.log(r)},[s,r,i]}class F extends d{constructor(t){super();g(this,t,k,L,u,{shape:2,height:0})}}export{F as B};
