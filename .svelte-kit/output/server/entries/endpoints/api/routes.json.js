import { d as d3CMS } from "../../../chunks/cms-72afd1c9.js";
import "../../../chunks/index-8f27b94e.js";
import "d3";
import "../../../chunks/index-872736db.js";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
let d3Articles = d3CMS.length ? d3CMS.filter((d) => d.published).map((d) => {
  return { title: d.primary_key, href: `${d.primary_key}` };
}) : [];
let sidebarData = [
  {
    data: "D3 & SvelteKit",
    expanded: true,
    children: [
      {
        data: "Building blocks",
        expanded: false,
        children: d3Articles
      },
      {
        data: "Examples/ Recipes",
        expanded: false,
        children: []
      }
    ]
  }
];
const get = async () => {
  const body = {
    sidebarData
  };
  return { body };
};
export { get };
