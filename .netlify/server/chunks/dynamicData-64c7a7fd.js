import { d as d3CMS } from "./cms-bd84078b.js";
import { d as d3R } from "./cms-d3-recipes-84d0d2bb.js";
let d3Articles = d3CMS.length ? d3CMS.filter((d) => d.published).map((d) => {
  return { title: d.primary_key, href: `${d.primary_key}` };
}) : [];
let d3Recipes = d3R.length ? d3R.filter((d) => d.published).map((d) => {
  return { title: d.primary_key, href: `${d.primary_key}` };
}) : [];
let sidebarData = [
  {
    data: "D3 & SvelteKit",
    expanded: true,
    children: [
      {
        data: "D3 API + Svelte",
        expanded: true,
        children: d3Articles
      },
      {
        data: "D3 + Svelte recipes ",
        expanded: true,
        children: d3Recipes
      }
    ]
  }
];
export { sidebarData as s };
