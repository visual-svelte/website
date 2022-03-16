import d3CMS from "$data/cms.js";
let d3Articles = d3CMS.map((d) => {
  return { title: d.primary_key, href: `${d.primary_key}` };
});

let sidebarData = [
  {
    data: "D3 & SvelteKit",
    expanded: true,
    children: [
      {
        data: "Full API",
        expanded: false,
        children: d3Articles,
      },
      {
        data: "Examples/ Recipes",
        expanded: false,
        children: [
          { title: "Grand Child 1", href: "/" },
          { title: "Grand Child 1", href: "/" },
        ],
      },
    ],
  },
];

export default sidebarData;
