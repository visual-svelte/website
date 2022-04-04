import { d as d3CMS } from "./cms-c1824dde.js";
let d3Articles = d3CMS.length ? d3CMS.filter((d) => d.published).map((d) => {
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
        expanded: false,
        children: []
      }
    ]
  }
];
export { sidebarData as s };
