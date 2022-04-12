import d3CMS from "$data/cms.js";
import d3R from "$data/cms-d3-recipes";
let d3Articles = d3CMS?.length
  ? d3CMS
      .filter((d) => d.published)
      .map((d) => {
        return { title: d.primary_key, href: `${d.primary_key}` };
      })
  : [];
let d3Recipes = d3R?.length
  ? d3R
      .filter((d) => d.published)
      .map((d) => {
        return { title: d.primary_key, href: `${d.primary_key}` };
      })
  : [];

let sidebarData = [
  {
    data: "D3 & SvelteKit",
    expanded: true,
    children: [
      {
        data: "D3 API + Svelte",
        expanded: true,
        children: d3Articles,
      },
      {
        data: "D3 + Svelte recipes ",
        expanded: true,
        children: d3Recipes,
      },
    ],
  },
];

export default sidebarData;
