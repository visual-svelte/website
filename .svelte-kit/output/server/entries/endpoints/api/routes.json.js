import { s as sidebarData } from "../../../chunks/dynamicData-0ed09738.js";
import "../../../chunks/cms-d3e083d3.js";
import "../../../chunks/index-02532eaa.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
const get = async () => {
  const body = {
    sidebarData
  };
  return { body };
};
export { get };
