import { scaleLinear, scaleLog } from "d3-scale";
import { interpolateHcl, hcl } from "d3";

let brandColors = {
  main: ["#B40D61", "#F7C419", "#FB3636", "#1E1D1D"],
  white: "#F3F3F3",
  dragon: [
    "#b40d61",
    "#df1077",
    "#f02c8e",
    "#f356a5",
    "#f680bb",
    "#f9abd2",
    "#fcd5e8",
  ],
  lemon: [
    "#f7c419",
    "#f8cb39",
    "#f9d45a",
    "#fadc7b",
    "#fbe59c",
    "#fdeebd",
    "#fef6de",
  ],
  berry: [
    "#fb3636",
    "#fc5454",
    "#fc7070",
    "#fd8d8d",
    "#fda9a9",
    "#fec6c6",
    "#fee2e2",
  ],
};
function colorScaleLog(color, length) {
  const colorFn = scaleLog()
    .domain([1, length])
    .interpolate(interpolateHcl)
    .range([hcl(brandColors[color][0]), hcl(brandColors[color][6])]);
  return colorFn;
}
function colorScaleLinear(color, max) {
  const colorFn = scaleLinear()
    .domain([1, max])
    .interpolate(interpolateHcl)
    .range([hcl(brandColors[color][0]), hcl(brandColors[color][6])]);
  return colorFn;
}

let colorCategorical4 = brandColors.main;
let colorCategoricalBerry = brandColors.berry;
let colorCategoricalLemon = brandColors.lemon;
let colorCategoricalDragon = brandColors.dragon;

export {
  brandColors,
  colorScaleLinear,
  colorScaleLog,
  colorCategorical4,
  colorCategoricalBerry,
  colorCategoricalLemon,
  colorCategoricalDragon,
};
