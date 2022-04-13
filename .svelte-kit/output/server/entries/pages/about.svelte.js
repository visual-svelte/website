import { c as create_ssr_component, v as validate_component, b as each, a as add_attribute, e as escape } from "../../chunks/index-72c7b4a0.js";
import { M as Meta } from "../../chunks/Meta-c7bef519.js";
const aboutData = [
  {
    id: 0,
    title: "About VisualSvelte",
    text: "Hey! Will here. <br/><br/> Thanks for visiting Visual Svelte - a corner of the internet I use to teach myself about the magical mystical world of web development, interactivity and data visualization. <br/><br/>Specifically, I'm interested in technologies like Svelte, D3.js, Three.js, SVG and CSS and use Visual Svelte as a way to sharpen my skills in these areas. <br/><br/>I learn best through teaching, which I why some of these articles are presented as tutorials. Others are just cool things I built. <br/><br/>In building this resource, I hope to make it easier for visual storytellers to create amazing visual stories on the web, especially those without software engineering backgrounds.<br/><br/>All the code is <a href='https://github.com/visual-svelte/website' >open-source</a>.<br/><br/> If you're feeling generous (and you are able to do so), I would love it if you supported my open source work by <a href='https://ko-fi.com/visualsvelte'>buying me a coffee</a>. <br/><br/> Thanks, <br/><br/> Will (<a href='https://twitter.com/visualsvelte'>follow me</a>) "
  }
];
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-1t1qmyl{margin:0 auto;max-width:800px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let metadata = {
    t: "About | VisualSvelte",
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: "/about",
    tags: "d3,svelte,visual,storytelling,data,journalism"
  };
  $$result.css.add(css);
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}

<div class="${"container svelte-1t1qmyl"}">${each(aboutData, (sect) => {
    return `<h1${add_attribute("id", sect.id.toString(), 0)}>${escape(sect.title)}</h1>
    <p><!-- HTML_TAG_START -->${sect.text}<!-- HTML_TAG_END --></p>`;
  })}
</div>`;
});
export { About as default };
