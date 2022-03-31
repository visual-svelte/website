import d3CMS from "$data/cms.js";
let d3Articles = d3CMS.length
  ? d3CMS
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
        data: "Building blocks",
        expanded: false,
        children: d3Articles,
      },
      {
        data: "Examples/ Recipes",
        expanded: false,
        children: [],
      },
    ],
  },
];

export default sidebarData;
