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
  P: () => PostGallery
});
var import_index_02532eaa = require("./index-02532eaa.js");
var import_SimplePostCard_778ec895 = require("./SimplePostCard-778ec895.js");
var import_stores_9fa16f27 = require("./stores-9fa16f27.js");
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.post-gallery.svelte-1vfdyqd{display:grid;position:relative;margin:0 auto;grid-template-columns:repeat(auto-fill, minmax(180px, 2fr))}",
  map: null
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const PostGallery = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let filtered;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_02532eaa.g)(import_stores_9fa16f27.p, (value) => $page = value);
  let { posts } = $$props;
  let { showMax = void 0 } = $$props;
  console.log("path", $page);
  function getFilteredData() {
    if (typeof showMax == "undefined") {
      return posts;
    } else {
      let postList = [];
      let oldIndexes = [];
      console.log("showMax", showMax);
      for (let i = 0; i < showMax; i++) {
        let index = getRandomInt(0, (posts == null ? void 0 : posts.length) - 1);
        if (!oldIndexes.includes(index)) {
          postList.push(posts[index]);
          oldIndexes.push(index);
        } else {
          index = getRandomInt(0, (posts == null ? void 0 : posts.length) - 1);
          if (!oldIndexes.includes(index)) {
            postList.push(posts[index]);
            oldIndexes.push(index);
          }
        }
      }
      return postList;
    }
  }
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.showMax === void 0 && $$bindings.showMax && showMax !== void 0)
    $$bindings.showMax(showMax);
  $$result.css.add(css);
  filtered = getFilteredData();
  $$unsubscribe_page();
  return `<div class="${"post-gallery svelte-1vfdyqd"}">${(0, import_index_02532eaa.b)(filtered, (post) => {
    return `${post.id !== $page.params.slug ? `${(0, import_index_02532eaa.v)(import_SimplePostCard_778ec895.S, "SimplePostCard").$$render($$result, { data: post }, {}, {})}` : ``}`;
  })}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);