import { s as sidebarData } from "../../../chunks/dynamicData-64c7a7fd.js";
import "../../../chunks/cms-bd84078b.js";
import "../../../chunks/index-0bcf38cf.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../chunks/cms-d3-recipes-84d0d2bb.js";
import "../../../chunks/CodeVisual-c88bf6c4.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "feather-icons";
const get = async () => {
  const body = {
    sidebarData
  };
  return { body };
};
export { get };
