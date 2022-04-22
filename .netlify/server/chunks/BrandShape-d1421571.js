import { c as create_ssr_component, e as escape } from "./index-769cbf91.js";
var square = `<svg width="100%" width="auto" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="11" width="143" height="143" fill="#B40D61"/>
<rect x="21.7416" y="0.809575" width="142" height="142" transform="rotate(8.4768 21.7416 0.809575)" stroke="white"/>
</svg>
`;
var triangle = `<svg width="130%" width="auto" viewBox="50 0 205 187" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M195 91.5L56.2499 162.947L56.2499 20.0529L195 91.5Z" fill="#FB3636"/>
<path d="M65.4321 17.9536L193.265 104.32L48.711 158.215L65.4321 17.9536Z" stroke="white"/>
</svg>
`;
var circle = `<svg width="100%" width="auto" viewBox="0 0 144 142" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="68" cy="74" r="68" fill="#F7C419"/>
<circle cx="76" cy="68" r="67" stroke="#FBFAFA" stroke-width="2"/>
</svg>
`;
const BrandShape = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { shape } = $$props;
  let { height = "150px" } = $$props;
  let logo;
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0)
    $$bindings.shape(shape);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  {
    shape == "square" ? logo = square : shape == "circle" ? logo = circle : logo = triangle;
  }
  {
    if (logo) {
      console.log(logo);
    }
  }
  return `${logo ? `<div style="${"width: " + escape(height) + "; height: " + escape(height) + ";"}"><!-- HTML_TAG_START -->${logo}<!-- HTML_TAG_END --></div>` : ``}`;
});
export { BrandShape as B };
