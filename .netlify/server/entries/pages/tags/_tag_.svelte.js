var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Btagu5D,
  load: () => load
});
var import_index_02532eaa = require("../../../chunks/index-02532eaa.js");
var import_cms_d3e083d3 = require("../../../chunks/cms-d3e083d3.js");
var import_SimplePostCard_778ec895 = require("../../../chunks/SimplePostCard-778ec895.js");
var import_d3 = require("d3");
var import_d3_scale = require("d3-scale");
var import_d3_zoom = require("d3-zoom");
var import_d3_scale_chromatic = require("d3-scale-chromatic");
var import_d3_selection = require("d3-selection");
var import_d3_drag = require("d3-drag");
var import_d3_force = require("d3-force");
var _tag__svelte_svelte_type_style_lang = "";
const css = {
  code: ".holder.svelte-95r5kc{text-align:left}",
  map: null
};
async function load(ctx) {
  let slug = ctx.url.pathname;
  const tag_id = slug.split("/").pop();
  const content = import_cms_d3e083d3.d.filter((records) => records.published && records.keywords.includes(tag_id)).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return { props: { content, tag_id } };
}
const U5Btagu5D = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { tag_id } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.tag_id === void 0 && $$bindings.tag_id && tag_id !== void 0)
    $$bindings.tag_id(tag_id);
  $$result.css.add(css);
  return `<div class="${"holder svelte-95r5kc"}"><p>Explore all content related to the ${(0, import_index_02532eaa.e)(tag_id)} tag:
  </p>

  ${(0, import_index_02532eaa.b)(content, (post) => {
    return `${(0, import_index_02532eaa.v)(import_SimplePostCard_778ec895.S, "SimplePostCard").$$render($$result, { data: post }, {}, {})}`;
  })}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
