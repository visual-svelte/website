import * as d3 from "d3";
import { readable, writable } from "svelte/store";
import { areaDataCsv } from "$data/areaData.csv";

var data = d3.range(100).map(() => {
  let x = d3.randomUniform(0, 400)();
  let y = d3.randomNormal(300 / 2, 300 / 12)();
  return [x, y];
});

export const brushData = readable(data);
export const filtered = writable(data);
export const areaData = writable(areaDataCsv);
