import { readable } from "svelte/store";
let d;
import d3CMS from "$data/cms";
import d3Charts from "$data/cms-d3-charts";
import cmsSvelte from "$data/cms-svelte";
import { urlToText, keyToSentence } from "$utils/textUtils";

const content = d3CMS
  .filter((records) => records.published)
  .map((post) => {
    return {
      id: post.primary_key,
      cat: "D3 API",
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords,
      href: "/d3/api/" + post.primary_key,
    };
  });
const charts = d3Charts
  .filter((records) => records.published)
  .map((post) => {
    return {
      id: post.primary_key,
      cat: "D3 Charts",
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords,
      href: "/d3/charts/" + post.primary_key,
    };
  });
const svelteArticles = cmsSvelte
  .filter((records) => records.published)
  .map((post) => {
    return {
      id: post.primary_key,
      cat: "Svelte",
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords,
      href: "/svelte/" + post.primary_key,
    };
  });

let all = [...svelteArticles, ...content, ...charts];

let light = all.map((d) => {
  return { id: d.id, cat: d.cat, href: d.href };
});

export const allArticles = readable(all);
export const allLight = readable(light);
