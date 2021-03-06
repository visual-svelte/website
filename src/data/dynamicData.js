import d3CMS from "$data/cms.js";
import d3Charts from "$data/cms-d3-charts";
import cmsSvelte from "$data/cms-svelte";
import { keyToSentence } from "$utils/textUtils";
let d3Articles = d3CMS?.length
  ? d3CMS
      .filter((d) => d.published)
      .map((d) => {
        return { title: d.primary_key, href: `${d.primary_key}` };
      })
  : [];
let charts = d3Charts?.length
  ? d3Charts
      .filter((d) => d.published)
      .map((d) => {
        return {
          title: d.primary_key,
          href: `${d.primary_key}`,
        };
      })
  : [];
let svelteArticles = cmsSvelte?.length
  ? cmsSvelte
      .filter((d) => d.published)
      .map((d) => {
        return {
          title: d.primary_key,
          href: `${d.primary_key}`,
        };
      })
  : [];

let sidebarData = [
  {
    data: "D3 & SvelteKit",
    expanded: true,
    children: [
      {
        data: "D3 API + Svelte",
        expanded: false,
        children: d3Articles,
      },
      {
        data: "D3 Charts in Svelte",
        expanded: false,
        children: charts,
      },
      {
        data: "Svelte 4 Viz ",
        expanded: false,
        children: svelteArticles,
      },
    ],
  },
];

export default sidebarData;
