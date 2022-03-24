import { c as create_ssr_component, g as escape, h as each, v as validate_component } from "../../../chunks/index-58574f58.js";
import { d as d3CMS } from "../../../chunks/cms-a4e52834.js";
import { S as SimplePostCard } from "../../../chunks/SimplePostCard-8d7ed45f.js";
import "d3";
import "../../../chunks/screen-47820f5b.js";
import "../../../chunks/index-79b72b18.js";
var _tag__svelte_svelte_type_style_lang = "";
const css = {
  code: ".holder.svelte-95r5kc{text-align:left}",
  map: null
};
async function load(ctx) {
  let slug = ctx.url.pathname;
  const tag_id = slug.split("/").pop();
  const content = d3CMS.filter((records) => records.published && records.keywords.includes(tag_id)).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return { props: { content, tag_id } };
}
const U5Btagu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { tag_id } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.tag_id === void 0 && $$bindings.tag_id && tag_id !== void 0)
    $$bindings.tag_id(tag_id);
  $$result.css.add(css);
  return `<div class="${"holder svelte-95r5kc"}"><p>Explore all content related to the ${escape(tag_id)} tag:
  </p>

  ${each(content, (post) => {
    return `${validate_component(SimplePostCard, "SimplePostCard").$$render($$result, { data: post }, {}, {})}`;
  })}
</div>`;
});
export { U5Btagu5D as default, load };
