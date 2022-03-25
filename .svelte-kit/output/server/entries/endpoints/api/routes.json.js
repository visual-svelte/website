import { d as d3CMS } from "../../../chunks/cms-12574a25.js";
import "../../../chunks/index-58574f58.js";
import "d3";
import "../../../chunks/screen-47820f5b.js";
import "../../../chunks/index-79b72b18.js";
let d3Articles = d3CMS.filter((d) => d.published).map((d) => {
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
