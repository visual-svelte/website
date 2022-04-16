import { d as d3CMS } from "./cms-ede64cff.js";
import { d as d3R } from "./cms-d3-recipes-e32f5c0e.js";
import { c as cmsSvelte } from "./cms-svelte-e7edea6c.js";
let d3Articles = d3CMS?.length ? d3CMS.filter((d) => d.published).map((d) => {
  return { title: d.primary_key, href: `${d.primary_key}` };
}) : [];
let d3Recipes = d3R?.length ? d3R.filter((d) => d.published).map((d) => {
  return {
    title: d.primary_key,
    href: `${d.primary_key}`
  };
}) : [];
let svelteArticles = cmsSvelte?.length ? cmsSvelte.filter((d) => d.published).map((d) => {
  return {
    title: d.primary_key,
    href: `${d.primary_key}`
  };
}) : [];
let sidebarData = [
  {
    data: "D3 & SvelteKit",
    expanded: true,
    children: [
      {
        data: "D3 API + Svelte",
        expanded: false,
        children: d3Articles
      },
      {
        data: "D3 + Svelte recipes ",
        expanded: false,
        children: d3Recipes
      },
      {
        data: "Svelte 4 Viz ",
        expanded: false,
        children: svelteArticles
      }
    ]
  }
];
export { sidebarData as s };
