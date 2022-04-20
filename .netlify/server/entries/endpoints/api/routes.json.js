import { s as sidebarData } from "../../../chunks/dynamicData-9e677b46.js";
import "../../../chunks/cms-svelte-a7c6b755.js";
import "../../../chunks/index-769cbf91.js";
import "d3";
import "d3-scale";
import "d3-selection";
import "d3-axis";
import "d3-brush";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-drag";
import "d3-force";
import "d3-shape";
import "d3-array";
import "d3-geo";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "feather-icons";
import "d3-interpolate";
const get = async () => {
  const body = {
    sidebarData
  };
  return { body };
};
export { get };
