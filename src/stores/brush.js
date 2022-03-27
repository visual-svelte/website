import * as d3 from "d3";
import { readable, writable } from "svelte/store";
import areaDataCsv from "$data/areaData.csv";
let parseDate = d3.timeParse("%b %Y");

var data = d3.range(100).map(() => {
  let x = d3.randomUniform(0, 400)();
  let y = d3.randomNormal(300 / 2, 300 / 12)();
  return [x, y];
});

function type(d) {
  d.date = parseDate(d.date);
  d.price = +d.price;
  return d;
}

const finalData = areaDataCsv.map((d) => {
  return { date: parseDate(d.date), price: d.price };
});
export const brushData = readable(data);
export const filtered = writable(data);
export const areaData = writable(finalData);
