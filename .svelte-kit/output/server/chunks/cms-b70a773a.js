import { d as d3CMS, a as d3Charts, c as cmsSvelte, r as readable } from "./cms-svelte-89dc672e.js";
const content = d3CMS?.filter((records) => records.published).map((post) => {
  return {
    id: post.primary_key,
    desc: post.desc,
    cat: "D3 API",
    thumbnail: post.thumbnail,
    title: post.post_title,
    keywords: post.keywords,
    href: "/d3/api/" + post.primary_key
  };
});
let charts;
if (d3Charts) {
  charts = d3Charts?.filter((records) => records.published).map((post) => {
    return {
      id: post.primary_key,
      desc: post.desc,
      cat: "D3 Charts",
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords,
      href: "/d3/charts/" + post.primary_key
    };
  });
}
let svelteArticles = [];
if (cmsSvelte) {
  svelteArticles = cmsSvelte.filter((records) => records.published).map((post) => {
    return {
      id: post.primary_key,
      desc: post.desc,
      cat: "Svelte",
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords,
      href: "/svelte/" + post.primary_key
    };
  });
}
let all = [...svelteArticles, ...content, ...charts];
let light = all?.map((d) => {
  return { id: d.id, cat: d.cat, href: d.href };
});
const allArticles = readable(all);
const allLight = readable(light);
export { allArticles as a, allLight as b };
