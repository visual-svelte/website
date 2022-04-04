import { c as create_ssr_component, a as add_attribute, e as escape, b as each, n as null_to_empty, d as noop, f as safe_not_equal, g as subscribe, h as set_store_value } from "./index-b8b7f0d9.js";
import * as d3 from "d3";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { zoom, zoomIdentity } from "d3-zoom";
import { schemeCategory10 } from "d3-scale-chromatic";
import { select, selectAll } from "d3-selection";
import { drag } from "d3-drag";
import { forceSimulation, forceLink, forceManyBody, forceCenter } from "d3-force";
let margin$a = 30;
let svg_height$4 = 300;
let svg_width$4 = 400;
const AxisSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let pinXAxis, pinYAxis;
  height2 = svg_height$4 - margin$a * 2;
  width2 = svg_width$4 - margin$a * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width2]);
  d3.scaleLinear().domain([100, 0]).range([0, height2]);
  return `<svg${add_attribute("width", svg_width$4, 0)}${add_attribute("height", svg_height$4, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$a) + "," + escape(margin$a + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"yAxis"}" transform="${"translate(" + escape(margin$a) + "," + escape(margin$a) + ")"}"${add_attribute("this", pinYAxis, 0)}></g></svg>`;
});
let margin$9 = 30;
let svg_height$3 = 300;
let svg_width$3 = 400;
const AxisLog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let pinXAxis, pinYAxis;
  height2 = svg_height$3 - margin$9 * 2;
  width2 = svg_width$3 - margin$9 * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width2]);
  d3.scaleLog().domain([1e4, 1]).range([0, height2]).base(10);
  return `<svg${add_attribute("width", svg_width$3, 0)}${add_attribute("height", svg_height$3, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$9) + "," + escape(margin$9 + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"yAxis"}" transform="${"translate(" + escape(margin$9) + "," + escape(margin$9) + ")"}"${add_attribute("this", pinYAxis, 0)}></g></svg>`;
});
let margin$8 = 30;
let svg_height$2 = 300;
let svg_width$2 = 400;
const AxisScalePoint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let x;
  let pinXAxis;
  let categories = ["Apple", "Banana", "Cherry", "Donut"];
  height2 = svg_height$2 - margin$8 * 2;
  width2 = svg_width$2 - margin$8 * 2;
  x = d3.scalePoint().domain(categories).range([0, width2]);
  return `<svg${add_attribute("width", svg_width$2, 0)}${add_attribute("height", svg_height$2, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$8) + ", " + escape(height2 - margin$8) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><circle${add_attribute("cx", x("Banana") + margin$8, 0)}${add_attribute("cy", height2 / 2, 0)}${add_attribute("r", 8, 0)}></circle></svg>`;
});
let margin$7 = 30;
let svg_height$1 = 300;
let svg_width$1 = 400;
const AxisScaleBand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let x;
  let pinXAxis;
  height2 = svg_height$1 - margin$7 * 2;
  width2 = svg_width$1 - margin$7 * 2;
  x = d3.scaleBand().domain(["Apple", "Banana", "Cherry", "Donut"]).range([0, width2]).padding([0.5]);
  return `<svg${add_attribute("width", svg_width$1, 0)}${add_attribute("height", svg_height$1, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$7) + "," + escape(margin$7 + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><rect${add_attribute("x", margin$7 + x("Cherry"), 0)}${add_attribute("y", height2 + margin$7 - 50, 0)}${add_attribute("height", 50, 0)}${add_attribute("width", x.bandwidth(), 0)} fill="${"#69b3a2"}" opacity="${"0.5"}"></rect><rect${add_attribute("x", margin$7 + x("Banana"), 0)}${add_attribute("y", height2 + margin$7 - 150, 0)}${add_attribute("height", 150, 0)}${add_attribute("width", x.bandwidth(), 0)} fill="${"#453234"}" opacity="${"0.5"}"></rect></svg>`;
});
var AxisLabels_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.axis-label.svelte-5x56w4{font-size:0.8rem}",
  map: null
};
let margin$6 = 50;
let svg_height = 300;
let svg_width = 400;
const AxisLabels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let pinXAxis, pinYAxis;
  $$result.css.add(css$6);
  height2 = svg_height - margin$6 * 2;
  width2 = svg_width - margin$6 * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width2]);
  d3.scaleLinear().domain([100, 0]).range([0, height2]);
  return `<svg${add_attribute("width", svg_width, 0)}${add_attribute("height", svg_height, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$6) + "," + escape(margin$6 + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"yAxis"}" transform="${"translate(" + escape(margin$6) + "," + escape(margin$6) + ")"}"${add_attribute("this", pinYAxis, 0)}></g><text class="${"axis-label svelte-5x56w4"}" fill="${"blue"}"${add_attribute("y", svg_height - 10, 0)}${add_attribute("x", width2 / 2, 0)}>X Axis Label
  </text><text class="${"axis-label svelte-5x56w4"}" fill="${"red"}"${add_attribute("y", 15, 0)}${add_attribute("x", -height2, 0)} transform="${"rotate(270)"}">Y Axis Label
  </text></svg>`;
});
var BrushXSimple_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "circle.svelte-na4awy{transition:0.3s fill}.selected.svelte-na4awy{fill:red}.not-selected.svelte-na4awy{fill:gray}.brush.svelte-na4awy{stroke:1px solid gray}",
  map: null
};
let width$e = 400;
let height$e = 300;
const BrushXSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let x;
  let rx;
  let ry;
  let data2;
  let pinBrush, circles;
  let bounds = [0, 0];
  let selectionMade = false;
  function brushed(event) {
    const selection = event.selection;
    if (selection === null) {
      circles.attr("class", "");
    } else {
      bounds = selection.map(x.invert);
      selectionMade = true;
    }
  }
  $$result.css.add(css$5);
  d3.brushX().extent([[0, 0], [width$e, height$e]]).on("start brush end", brushed);
  x = d3.scaleLinear().domain([0, 400]).range([0, width$e]);
  rx = d3.randomUniform(...x.domain());
  ry = d3.randomNormal(height$e / 2, height$e / 12);
  data2 = Float64Array.from({ length: 40 }, rx);
  return `<div><p>\u{1F447} Click and drag over a set of points below to see brush effect.</p>
  <p>Bounds: (${escape(Math.round(bounds[0]))},${escape(Math.round(bounds[1]))})</p>
  <p>Brush active: ${escape(selectionMade)}</p>
  <button>reset</button></div>
<svg${add_attribute("width", width$e, 0)}${add_attribute("height", height$e, 0)}><g class="${"points"}">${each(data2, (point) => {
    return `<circle class="${escape(null_to_empty(bounds[0] <= point && point <= bounds[1] ? "selected" : selectionMade ? "not-selected" : "")) + " svelte-na4awy"}"${add_attribute("cx", x(point), 0)}${add_attribute("cy", ry(), 0)}${add_attribute("r", 3, 0)}></circle>`;
  })}</g><g class="${"brush svelte-na4awy"}"${add_attribute("this", pinBrush, 0)}></g></svg>`;
});
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var areaDataCsv = [
  {
    date: "Jan 2000",
    price: "1394.46"
  },
  {
    date: "Feb 2000",
    price: "1366.42"
  },
  {
    date: "Mar 2000",
    price: "1498.58"
  },
  {
    date: "Apr 2000",
    price: "1452.43"
  },
  {
    date: "May 2000",
    price: "1420.6"
  },
  {
    date: "Jun 2000",
    price: "1454.6"
  },
  {
    date: "Jul 2000",
    price: "1430.83"
  },
  {
    date: "Aug 2000",
    price: "1517.68"
  },
  {
    date: "Sep 2000",
    price: "1436.51"
  },
  {
    date: "Oct 2000",
    price: "1429.4"
  },
  {
    date: "Nov 2000",
    price: "1314.95"
  },
  {
    date: "Dec 2000",
    price: "1320.28"
  },
  {
    date: "Jan 2001",
    price: "1366.01"
  },
  {
    date: "Feb 2001",
    price: "1239.94"
  },
  {
    date: "Mar 2001",
    price: "1160.33"
  },
  {
    date: "Apr 2001",
    price: "1249.46"
  },
  {
    date: "May 2001",
    price: "1255.82"
  },
  {
    date: "Jun 2001",
    price: "1224.38"
  },
  {
    date: "Jul 2001",
    price: "1211.23"
  },
  {
    date: "Aug 2001",
    price: "1133.58"
  },
  {
    date: "Sep 2001",
    price: "1040.94"
  },
  {
    date: "Oct 2001",
    price: "1059.78"
  },
  {
    date: "Nov 2001",
    price: "1139.45"
  },
  {
    date: "Dec 2001",
    price: "1148.08"
  },
  {
    date: "Jan 2002",
    price: "1130.2"
  },
  {
    date: "Feb 2002",
    price: "1106.73"
  },
  {
    date: "Mar 2002",
    price: "1147.39"
  },
  {
    date: "Apr 2002",
    price: "1076.92"
  },
  {
    date: "May 2002",
    price: "1067.14"
  },
  {
    date: "Jun 2002",
    price: "989.82"
  },
  {
    date: "Jul 2002",
    price: "911.62"
  },
  {
    date: "Aug 2002",
    price: "916.07"
  },
  {
    date: "Sep 2002",
    price: "815.28"
  },
  {
    date: "Oct 2002",
    price: "885.76"
  },
  {
    date: "Nov 2002",
    price: "936.31"
  },
  {
    date: "Dec 2002",
    price: "879.82"
  },
  {
    date: "Jan 2003",
    price: "855.7"
  },
  {
    date: "Feb 2003",
    price: "841.15"
  },
  {
    date: "Mar 2003",
    price: "848.18"
  },
  {
    date: "Apr 2003",
    price: "916.92"
  },
  {
    date: "May 2003",
    price: "963.59"
  },
  {
    date: "Jun 2003",
    price: "974.5"
  },
  {
    date: "Jul 2003",
    price: "990.31"
  },
  {
    date: "Aug 2003",
    price: "1008.01"
  },
  {
    date: "Sep 2003",
    price: "995.97"
  },
  {
    date: "Oct 2003",
    price: "1050.71"
  },
  {
    date: "Nov 2003",
    price: "1058.2"
  },
  {
    date: "Dec 2003",
    price: "1111.92"
  },
  {
    date: "Jan 2004",
    price: "1131.13"
  },
  {
    date: "Feb 2004",
    price: "1144.94"
  },
  {
    date: "Mar 2004",
    price: "1126.21"
  },
  {
    date: "Apr 2004",
    price: "1107.3"
  },
  {
    date: "May 2004",
    price: "1120.68"
  },
  {
    date: "Jun 2004",
    price: "1140.84"
  },
  {
    date: "Jul 2004",
    price: "1101.72"
  },
  {
    date: "Aug 2004",
    price: "1104.24"
  },
  {
    date: "Sep 2004",
    price: "1114.58"
  },
  {
    date: "Oct 2004",
    price: "1130.2"
  },
  {
    date: "Nov 2004",
    price: "1173.82"
  },
  {
    date: "Dec 2004",
    price: "1211.92"
  },
  {
    date: "Jan 2005",
    price: "1181.27"
  },
  {
    date: "Feb 2005",
    price: "1203.6"
  },
  {
    date: "Mar 2005",
    price: "1180.59"
  },
  {
    date: "Apr 2005",
    price: "1156.85"
  },
  {
    date: "May 2005",
    price: "1191.5"
  },
  {
    date: "Jun 2005",
    price: "1191.33"
  },
  {
    date: "Jul 2005",
    price: "1234.18"
  },
  {
    date: "Aug 2005",
    price: "1220.33"
  },
  {
    date: "Sep 2005",
    price: "1228.81"
  },
  {
    date: "Oct 2005",
    price: "1207.01"
  },
  {
    date: "Nov 2005",
    price: "1249.48"
  },
  {
    date: "Dec 2005",
    price: "1248.29"
  },
  {
    date: "Jan 2006",
    price: "1280.08"
  },
  {
    date: "Feb 2006",
    price: "1280.66"
  },
  {
    date: "Mar 2006",
    price: "1294.87"
  },
  {
    date: "Apr 2006",
    price: "1310.61"
  },
  {
    date: "May 2006",
    price: "1270.09"
  },
  {
    date: "Jun 2006",
    price: "1270.2"
  },
  {
    date: "Jul 2006",
    price: "1276.66"
  },
  {
    date: "Aug 2006",
    price: "1303.82"
  },
  {
    date: "Sep 2006",
    price: "1335.85"
  },
  {
    date: "Oct 2006",
    price: "1377.94"
  },
  {
    date: "Nov 2006",
    price: "1400.63"
  },
  {
    date: "Dec 2006",
    price: "1418.3"
  },
  {
    date: "Jan 2007",
    price: "1438.24"
  },
  {
    date: "Feb 2007",
    price: "1406.82"
  },
  {
    date: "Mar 2007",
    price: "1420.86"
  },
  {
    date: "Apr 2007",
    price: "1482.37"
  },
  {
    date: "May 2007",
    price: "1530.62"
  },
  {
    date: "Jun 2007",
    price: "1503.35"
  },
  {
    date: "Jul 2007",
    price: "1455.27"
  },
  {
    date: "Aug 2007",
    price: "1473.99"
  },
  {
    date: "Sep 2007",
    price: "1526.75"
  },
  {
    date: "Oct 2007",
    price: "1549.38"
  },
  {
    date: "Nov 2007",
    price: "1481.14"
  },
  {
    date: "Dec 2007",
    price: "1468.36"
  },
  {
    date: "Jan 2008",
    price: "1378.55"
  },
  {
    date: "Feb 2008",
    price: "1330.63"
  },
  {
    date: "Mar 2008",
    price: "1322.7"
  },
  {
    date: "Apr 2008",
    price: "1385.59"
  },
  {
    date: "May 2008",
    price: "1400.38"
  },
  {
    date: "Jun 2008",
    price: "1280"
  },
  {
    date: "Jul 2008",
    price: "1267.38"
  },
  {
    date: "Aug 2008",
    price: "1282.83"
  },
  {
    date: "Sep 2008",
    price: "1166.36"
  },
  {
    date: "Oct 2008",
    price: "968.75"
  },
  {
    date: "Nov 2008",
    price: "896.24"
  },
  {
    date: "Dec 2008",
    price: "903.25"
  },
  {
    date: "Jan 2009",
    price: "825.88"
  },
  {
    date: "Feb 2009",
    price: "735.09"
  },
  {
    date: "Mar 2009",
    price: "797.87"
  },
  {
    date: "Apr 2009",
    price: "872.81"
  },
  {
    date: "May 2009",
    price: "919.14"
  },
  {
    date: "Jun 2009",
    price: "919.32"
  },
  {
    date: "Jul 2009",
    price: "987.48"
  },
  {
    date: "Aug 2009",
    price: "1020.62"
  },
  {
    date: "Sep 2009",
    price: "1057.08"
  },
  {
    date: "Oct 2009",
    price: "1036.19"
  },
  {
    date: "Nov 2009",
    price: "1095.63"
  },
  {
    date: "Dec 2009",
    price: "1115.1"
  },
  {
    date: "Jan 2010",
    price: "1073.87"
  },
  {
    date: "Feb 2010",
    price: "1104.49"
  },
  {
    date: "Mar 2010",
    price: "1140.45"
  }
];
let parseDate = d3.timeParse("%b %Y");
var data$2 = d3.range(100).map(() => {
  let x = d3.randomUniform(0, 400)();
  let y = d3.randomNormal(300 / 2, 300 / 12)();
  return [x, y];
});
areaDataCsv.map((d) => {
  return { date: parseDate(d.date), price: d.price };
});
const brushData = readable(data$2);
const filtered = writable(data$2);
var BrushStore_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".selected.svelte-1mqzxo2{transition:0.5s all}.circle.svelte-1mqzxo2,.bar.svelte-1mqzxo2{fill:var(--c-darkgray);fill-opacity:0.7}.bar.svelte-1mqzxo2{fill:var(--c-darkgray);fill-opacity:0.3}.circles.svelte-1mqzxo2 .selected{z-index:1;fill:red}",
  map: null
};
let width$d = 400;
let height$d = 300;
const BrushStore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let x;
  let $brushData, $$unsubscribe_brushData;
  let $filtered, $$unsubscribe_filtered;
  $$unsubscribe_brushData = subscribe(brushData, (value) => $brushData = value);
  $$unsubscribe_filtered = subscribe(filtered, (value) => $filtered = value);
  let pinBrush;
  let bounds = [0, 0];
  function brushEnd(event) {
    const selection = event.selection;
    if (selection === null)
      ;
    else {
      bounds = selection.map(x.invert);
    }
  }
  $$result.css.add(css$4);
  x = d3.scaleLinear().domain([0, 400]).range([0, width$d]);
  d3.brushX().extent([[0, 0], [width$d, height$d]]).on("start brush end", brushEnd);
  set_store_value(filtered, $filtered = $brushData.filter((d) => bounds[0] <= d[0] && d[0] <= bounds[1]), $filtered);
  $$unsubscribe_brushData();
  $$unsubscribe_filtered();
  return `<p>Original: ${escape($brushData.length)}</p>
<p>Filtered: ${escape($filtered.length)}</p>
<p>Bounds: ${escape(bounds[0].toPrecision(4))}, ${escape(bounds[1].toPrecision(4))}</p>
<svg width="${"400"}" height="${"500"}"><g class="${"circles svelte-1mqzxo2"}">${each($brushData, (point) => {
    return `<circle class="${[
      "circle svelte-1mqzxo2",
      bounds[0] <= point[0] && point[0] <= bounds[1] ? "selected" : ""
    ].join(" ").trim()}"${add_attribute("cy", point[1], 0)}${add_attribute("cx", x(point[0]), 0)} r="${"5"}"></circle>`;
  })}</g><g class="${"bars"}">${each($filtered, (bar) => {
    return `<rect class="${"bar svelte-1mqzxo2"}"${add_attribute("width", width$d / $brushData.length, 0)}${add_attribute("height", bar[1] / 2, 0)} style="${"transform:translate(" + escape(bar[0]) + "px," + escape(height$d + 100 - bar[1] / 2) + "px)"}"></rect>`;
  })}</g><g class="${"brush"}"${add_attribute("this", pinBrush, 0)}></g></svg>`;
});
let width$c = 600;
let height$c = 400;
const ChordBasic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let viewBx;
  let outerRadius;
  let innerRadius;
  let chordGen;
  let arcGen;
  let ribbonGen;
  let chords;
  let svgHere;
  let colors2 = ["#fff775", "#423e42", "#9c334e", "blue"];
  let data2 = [[0, 32, 45, 22], [0, 10, 100, 0], [100, 80, 90, 2], [50, 30, 77, 2]];
  viewBx = [-width$c / 2, -height$c / 2, width$c, height$c];
  outerRadius = Math.min(width$c, height$c) * 0.5 - 60;
  innerRadius = outerRadius - 10;
  chordGen = d3.chord().padAngle(15 / innerRadius).sortSubgroups(d3.descending).sortChords(d3.descending);
  arcGen = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  ribbonGen = d3.ribbon().radius(innerRadius - 1).padAngle(1 / innerRadius);
  chords = chordGen(data2);
  return `<svg${add_attribute("viewBox", viewBx, 0)}${add_attribute("width", width$c, 0)}${add_attribute("height", height$c, 0)}${add_attribute("this", svgHere, 0)}><g class="${"outer-arcs"}">${each(chords["groups"], (chord, i) => {
    return `<g class="${"outer"}"><path${add_attribute("fill", colors2[i], 0)}${add_attribute("d", arcGen(chord), 0)}></path></g>`;
  })}</g><g class="${"ribbons"}" style="${"fill-opacity:0.4;"}">${each(chords, (chord, i) => {
    return `<path style="${"mix-blend-mode: multiply;"}"${add_attribute("fill", colors2[chord.source.index], 0)} class="${"ribbon"}"${add_attribute("d", ribbonGen(chord), 0)}></path>`;
  })}</g></svg>`;
});
const data$1 = [
  [
    0.096899,
    8859e-6,
    554e-6,
    443e-5,
    0.025471,
    0.024363,
    5537e-6,
    0.025471
  ],
  [1107e-6, 0.018272, 0, 4983e-6, 0.011074, 0.01052, 2215e-6, 4983e-6],
  [
    554e-6,
    2769e-6,
    2215e-6,
    2215e-6,
    3876e-6,
    8306e-6,
    554e-6,
    3322e-6
  ],
  [
    554e-6,
    1107e-6,
    554e-6,
    0.012182,
    0.011628,
    6645e-6,
    4983e-6,
    0.01052
  ],
  [2215e-6, 443e-5, 0, 2769e-6, 0.104097, 0.012182, 4983e-6, 0.028239],
  [0.011628, 0.026024, 0, 0.013843, 0.087486, 0.168328, 0.017165, 0.055925],
  [554e-6, 4983e-6, 0, 3322e-6, 443e-5, 8859e-6, 0.017719, 443e-5],
  [2215e-6, 7198e-6, 0, 3322e-6, 0.016611, 0.01495, 1107e-6, 0.054264]
];
let colors = [
  "#c4c4c4",
  "#69b40f",
  "#ec1d25",
  "#c8125c",
  "#008fc8",
  "#10218b",
  "#134b24",
  "#737373"
];
let names = [
  "Apple",
  "HTC",
  "Huawei",
  "LG",
  "Nokia",
  "Samsung",
  "Sony",
  "Other"
];
var ChordComplex_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".phone-title.svelte-vwo2bq{font-size:0.8rem}",
  map: null
};
let width$b = 600;
let height$b = 500;
const ChordComplex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let viewBx;
  let outerRadius;
  let innerRadius;
  let chordGen;
  let arcGen;
  let ribbonGen;
  let chords;
  let tickStep;
  let svgHere;
  let formatValue = d3.format(".1~%");
  function ticks({ startAngle, endAngle, value }) {
    const k = (endAngle - startAngle) / value;
    return d3.range(0, value, tickStep * 2).map((value2) => {
      return { value: value2, angle: value2 * k + startAngle };
    });
  }
  $$result.css.add(css$3);
  viewBx = [-width$b / 2, -height$b / 1.8, width$b * 1.1, height$b * 1.1];
  outerRadius = Math.min(width$b, height$b) * 0.5 - 60;
  innerRadius = outerRadius - 10;
  chordGen = d3.chord().padAngle(10 / innerRadius).sortSubgroups(d3.descending).sortChords(d3.descending);
  arcGen = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  ribbonGen = d3.ribbon().radius(innerRadius - 1).padAngle(1 / innerRadius);
  chords = chordGen(data$1);
  tickStep = d3.tickStep(0, d3.sum(data$1.flat()), 100);
  return `<svg${add_attribute("viewBox", viewBx, 0)}${add_attribute("width", width$b, 0)}${add_attribute("height", height$b, 0)}${add_attribute("this", svgHere, 0)}><g class="${"outer-arcs"}">${each(chords["groups"], (chord, i) => {
    return `<g class="${"group"}"><path${add_attribute("fill", colors[i], 0)}${add_attribute("d", arcGen(chord), 0)}></path><g>${each(ticks(chord), (tick, t) => {
      return `<g class="${"tick"}" style="${"transform:rotate(" + escape(tick.angle * 180 / Math.PI - 90) + "deg) translate(" + escape(outerRadius) + "px,0);"}">${t < 1 ? `<text${add_attribute("fill", colors[i], 0)} x="${"30"}" y="${"5"}" class="${"phone-title svelte-vwo2bq"}" font-weight="${"bold"}" style="${"transform:" + escape(tick.angle > Math.PI ? "rotate(180deg) translate(-95px)" : null)}">${escape(names[i])}</text>` : ``}<line${add_attribute("stroke", colors[i], 0)} x2="${"6"}"></line><text x="${"8"}" dy="${"0.35em"}" style="${"transform:" + escape(tick.angle > Math.PI ? "rotate(180deg) translate(-16px)" : null)}"${add_attribute("text-anchor", tick.angle > Math.PI ? "end" : null, 0)}>${escape(formatValue(tick.value))}</text></g>`;
    })}</g></g>`;
  })}</g><g class="${"ribbons"}" style="${"fill-opacity:0.4;"}">${each(chords, (chord, i) => {
    return `<path${add_attribute("fill", colors[chord.source.index], 0)} class="${"ribbon"}"${add_attribute("d", ribbonGen(chord), 0)}></path>`;
  })}</g></svg>`;
});
function goldsteinPrice(x, y) {
  return (1 + Math.pow(x + y + 1, 2) * (19 - 14 * x + 3 * x * x - 14 * y + 6 * x * x + 3 * y * y)) * (30 + Math.pow(2 * x - 3 * y, 2) * (18 - 32 * x + 12 * x * x + 48 * y - 36 * x * y + 27 * y * y));
}
const n = 256, m = 256, data = new Array(n * m);
for (let j = 0.5, k = 0; j < m; ++j) {
  for (let i = 0.5; i < n; ++i, ++k) {
    data[k] = goldsteinPrice(i / n * 4 - 2, 1 - j / m * 3);
  }
}
let thresholds = Array.from({ length: 19 }, (_, i) => Math.pow(2, i + 2));
let width$a = 300;
let height$a = 300;
const ContourBasic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contourGen;
  let contours;
  let color;
  let geoGen = d3.geoPath();
  contourGen = d3.contours().size([n, m]).thresholds(thresholds);
  contours = contourGen(data);
  color = d3.scaleSequentialLog(d3.extent(thresholds), d3.interpolateMagma);
  return `<svg${add_attribute("width", width$a, 0)}${add_attribute("height", height$a, 0)}>${each(contours, (contour) => {
    return `<path${add_attribute("fill", color(contour.value), 0)}${add_attribute("d", geoGen(contour), 0)}></path>`;
  })}</svg>`;
});
var DragSimple_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.frame.svelte-1pukr9r.svelte-1pukr9r{width:300px;height:300px;position:relative;border:1px solid black;background-color:pink}.frame.svelte-1pukr9r .draggable.svelte-1pukr9r{padding:20px;border:1px solid black;position:absolute;user-select:none;cursor:move;background-color:white}",
  map: null
};
const DragSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let left = 50;
  let top = 50;
  $$result.css.add(css$2);
  return `<div class="${"frame svelte-1pukr9r"}"><div style="${"left: " + escape(left) + "px; top: " + escape(top) + "px;"}" class="${"draggable svelte-1pukr9r"}">Drag me
  </div></div>
`;
});
const DragD3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bindSvgHere;
  let circle;
  function started(event) {
    circle = d3.select(this);
    circle.attr("cx", event.x).attr("cy", event.y);
  }
  d3.drag().on("drag", started);
  return `<svg height="${"300"}" width="${"500"}"${add_attribute("this", bindSvgHere, 0)}></svg>`;
});
const DragD3Svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bindSvgHere, circle;
  let data2 = [[50, 50], [100, 100], [150, 150]];
  let colors2 = ["blue", "pink", "brown"];
  function started(event) {
    circle = d3.select(this);
    circle.attr("cx", event.x).attr("cy", event.y);
  }
  d3.drag().on("drag", started);
  return `<svg height="${"300"}" width="${"500"}"${add_attribute("this", bindSvgHere, 0)}>${each(data2, (point, i) => {
    return `<circle class="${"myPoint"}"${add_attribute("cx", point[0], 0)}${add_attribute("cy", point[1], 0)} r="${"15"}"${add_attribute("fill", colors2[i], 0)}></circle>`;
  })}</svg>`;
});
let width$9 = 300;
let height$9 = 400;
const ForceSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nodes;
  const colourScale = d3.scaleOrdinal(d3.schemeCategory10);
  nodes = [].concat(d3.range(88).map(function() {
    return { r: d3.randomInt(5, 10)() };
  }));
  return `<svg${add_attribute("width", width$9, 0)}${add_attribute("height", height$9, 0)}><g class="${"points"}">${each(nodes, (point, i) => {
    return `<circle class="${"node"}"${add_attribute("r", point.r, 0)}${add_attribute("fill", colourScale(i), 0)}${add_attribute("cx", point.x, 0)}${add_attribute("cy", point.y, 0)}></circle>`;
  })}</g></svg>`;
});
let width$8 = 500;
let height$8 = 600;
const ForceRadial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nodes;
  let svg;
  nodes = [].concat(d3.range(88).map(function() {
    return { type: "a" };
  }), d3.range(45).map(function() {
    return { type: "b" };
  }));
  return `<svg${add_attribute("width", width$8, 0)}${add_attribute("height", height$8, 0)}${add_attribute("this", svg, 0)}>${each(nodes, (point) => {
    return `<circle class="${"node"}"${add_attribute("r", 5, 0)}${add_attribute("fill", point.type == "a" ? "brown" : "steelblue", 0)}${add_attribute("cx", point.x, 0)}${add_attribute("cy", point.y, 0)}><title>${escape(point.id)}</title></circle>`;
  })}</svg>`;
});
var graph = {
  nodes: [
    { id: "Myriel", group: 1 },
    { id: "Napoleon", group: 1 },
    { id: "Mlle.Baptistine", group: 1 },
    { id: "Mme.Magloire", group: 1 },
    { id: "CountessdeLo", group: 1 },
    { id: "Geborand", group: 1 },
    { id: "Champtercier", group: 1 },
    { id: "Cravatte", group: 1 },
    { id: "Count", group: 1 },
    { id: "OldMan", group: 1 },
    { id: "Labarre", group: 2 },
    { id: "Valjean", group: 2 },
    { id: "Marguerite", group: 3 },
    { id: "Mme.deR", group: 2 },
    { id: "Isabeau", group: 2 },
    { id: "Gervais", group: 2 },
    { id: "Tholomyes", group: 3 },
    { id: "Listolier", group: 3 },
    { id: "Fameuil", group: 3 },
    { id: "Blacheville", group: 3 },
    { id: "Favourite", group: 3 },
    { id: "Dahlia", group: 3 },
    { id: "Zephine", group: 3 },
    { id: "Fantine", group: 3 },
    { id: "Mme.Thenardier", group: 4 },
    { id: "Thenardier", group: 4 },
    { id: "Cosette", group: 5 },
    { id: "Javert", group: 4 },
    { id: "Fauchelevent", group: 0 },
    { id: "Bamatabois", group: 2 },
    { id: "Perpetue", group: 3 },
    { id: "Simplice", group: 2 },
    { id: "Scaufflaire", group: 2 },
    { id: "Woman1", group: 2 },
    { id: "Judge", group: 2 },
    { id: "Champmathieu", group: 2 },
    { id: "Brevet", group: 2 },
    { id: "Chenildieu", group: 2 },
    { id: "Cochepaille", group: 2 },
    { id: "Pontmercy", group: 4 },
    { id: "Boulatruelle", group: 6 },
    { id: "Eponine", group: 4 },
    { id: "Anzelma", group: 4 },
    { id: "Woman2", group: 5 },
    { id: "MotherInnocent", group: 0 },
    { id: "Gribier", group: 0 },
    { id: "Jondrette", group: 7 },
    { id: "Mme.Burgon", group: 7 },
    { id: "Gavroche", group: 8 },
    { id: "Gillenormand", group: 5 },
    { id: "Magnon", group: 5 },
    { id: "Mlle.Gillenormand", group: 5 },
    { id: "Mme.Pontmercy", group: 5 },
    { id: "Mlle.Vaubois", group: 5 },
    { id: "Lt.Gillenormand", group: 5 },
    { id: "Marius", group: 8 },
    { id: "BaronessT", group: 5 },
    { id: "Mabeuf", group: 8 },
    { id: "Enjolras", group: 8 },
    { id: "Combeferre", group: 8 },
    { id: "Prouvaire", group: 8 },
    { id: "Feuilly", group: 8 },
    { id: "Courfeyrac", group: 8 },
    { id: "Bahorel", group: 8 },
    { id: "Bossuet", group: 8 },
    { id: "Joly", group: 8 },
    { id: "Grantaire", group: 8 },
    { id: "MotherPlutarch", group: 9 },
    { id: "Gueulemer", group: 4 },
    { id: "Babet", group: 4 },
    { id: "Claquesous", group: 4 },
    { id: "Montparnasse", group: 4 },
    { id: "Toussaint", group: 5 },
    { id: "Child1", group: 10 },
    { id: "Child2", group: 10 },
    { id: "Brujon", group: 4 },
    { id: "Mme.Hucheloup", group: 8 }
  ],
  links: [
    { source: "Napoleon", target: "Myriel", value: 1 },
    { source: "Mlle.Baptistine", target: "Myriel", value: 8 },
    { source: "Mme.Magloire", target: "Myriel", value: 10 },
    { source: "Mme.Magloire", target: "Mlle.Baptistine", value: 6 },
    { source: "CountessdeLo", target: "Myriel", value: 1 },
    { source: "Geborand", target: "Myriel", value: 1 },
    { source: "Champtercier", target: "Myriel", value: 1 },
    { source: "Cravatte", target: "Myriel", value: 1 },
    { source: "Count", target: "Myriel", value: 2 },
    { source: "OldMan", target: "Myriel", value: 1 },
    { source: "Valjean", target: "Labarre", value: 1 },
    { source: "Valjean", target: "Mme.Magloire", value: 3 },
    { source: "Valjean", target: "Mlle.Baptistine", value: 3 },
    { source: "Valjean", target: "Myriel", value: 5 },
    { source: "Marguerite", target: "Valjean", value: 1 },
    { source: "Mme.deR", target: "Valjean", value: 1 },
    { source: "Isabeau", target: "Valjean", value: 1 },
    { source: "Gervais", target: "Valjean", value: 1 },
    { source: "Listolier", target: "Tholomyes", value: 4 },
    { source: "Fameuil", target: "Tholomyes", value: 4 },
    { source: "Fameuil", target: "Listolier", value: 4 },
    { source: "Blacheville", target: "Tholomyes", value: 4 },
    { source: "Blacheville", target: "Listolier", value: 4 },
    { source: "Blacheville", target: "Fameuil", value: 4 },
    { source: "Favourite", target: "Tholomyes", value: 3 },
    { source: "Favourite", target: "Listolier", value: 3 },
    { source: "Favourite", target: "Fameuil", value: 3 },
    { source: "Favourite", target: "Blacheville", value: 4 },
    { source: "Dahlia", target: "Tholomyes", value: 3 },
    { source: "Dahlia", target: "Listolier", value: 3 },
    { source: "Dahlia", target: "Fameuil", value: 3 },
    { source: "Dahlia", target: "Blacheville", value: 3 },
    { source: "Dahlia", target: "Favourite", value: 5 },
    { source: "Zephine", target: "Tholomyes", value: 3 },
    { source: "Zephine", target: "Listolier", value: 3 },
    { source: "Zephine", target: "Fameuil", value: 3 },
    { source: "Zephine", target: "Blacheville", value: 3 },
    { source: "Zephine", target: "Favourite", value: 4 },
    { source: "Zephine", target: "Dahlia", value: 4 },
    { source: "Fantine", target: "Tholomyes", value: 3 },
    { source: "Fantine", target: "Listolier", value: 3 },
    { source: "Fantine", target: "Fameuil", value: 3 },
    { source: "Fantine", target: "Blacheville", value: 3 },
    { source: "Fantine", target: "Favourite", value: 4 },
    { source: "Fantine", target: "Dahlia", value: 4 },
    { source: "Fantine", target: "Zephine", value: 4 },
    { source: "Fantine", target: "Marguerite", value: 2 },
    { source: "Fantine", target: "Valjean", value: 9 },
    { source: "Mme.Thenardier", target: "Fantine", value: 2 },
    { source: "Mme.Thenardier", target: "Valjean", value: 7 },
    { source: "Thenardier", target: "Mme.Thenardier", value: 13 },
    { source: "Thenardier", target: "Fantine", value: 1 },
    { source: "Thenardier", target: "Valjean", value: 12 },
    { source: "Cosette", target: "Mme.Thenardier", value: 4 },
    { source: "Cosette", target: "Valjean", value: 31 },
    { source: "Cosette", target: "Tholomyes", value: 1 },
    { source: "Cosette", target: "Thenardier", value: 1 },
    { source: "Javert", target: "Valjean", value: 17 },
    { source: "Javert", target: "Fantine", value: 5 },
    { source: "Javert", target: "Thenardier", value: 5 },
    { source: "Javert", target: "Mme.Thenardier", value: 1 },
    { source: "Javert", target: "Cosette", value: 1 },
    { source: "Fauchelevent", target: "Valjean", value: 8 },
    { source: "Fauchelevent", target: "Javert", value: 1 },
    { source: "Bamatabois", target: "Fantine", value: 1 },
    { source: "Bamatabois", target: "Javert", value: 1 },
    { source: "Bamatabois", target: "Valjean", value: 2 },
    { source: "Perpetue", target: "Fantine", value: 1 },
    { source: "Simplice", target: "Perpetue", value: 2 },
    { source: "Simplice", target: "Valjean", value: 3 },
    { source: "Simplice", target: "Fantine", value: 2 },
    { source: "Simplice", target: "Javert", value: 1 },
    { source: "Scaufflaire", target: "Valjean", value: 1 },
    { source: "Woman1", target: "Valjean", value: 2 },
    { source: "Woman1", target: "Javert", value: 1 },
    { source: "Judge", target: "Valjean", value: 3 },
    { source: "Judge", target: "Bamatabois", value: 2 },
    { source: "Champmathieu", target: "Valjean", value: 3 },
    { source: "Champmathieu", target: "Judge", value: 3 },
    { source: "Champmathieu", target: "Bamatabois", value: 2 },
    { source: "Brevet", target: "Judge", value: 2 },
    { source: "Brevet", target: "Champmathieu", value: 2 },
    { source: "Brevet", target: "Valjean", value: 2 },
    { source: "Brevet", target: "Bamatabois", value: 1 },
    { source: "Chenildieu", target: "Judge", value: 2 },
    { source: "Chenildieu", target: "Champmathieu", value: 2 },
    { source: "Chenildieu", target: "Brevet", value: 2 },
    { source: "Chenildieu", target: "Valjean", value: 2 },
    { source: "Chenildieu", target: "Bamatabois", value: 1 },
    { source: "Cochepaille", target: "Judge", value: 2 },
    { source: "Cochepaille", target: "Champmathieu", value: 2 },
    { source: "Cochepaille", target: "Brevet", value: 2 },
    { source: "Cochepaille", target: "Chenildieu", value: 2 },
    { source: "Cochepaille", target: "Valjean", value: 2 },
    { source: "Cochepaille", target: "Bamatabois", value: 1 },
    { source: "Pontmercy", target: "Thenardier", value: 1 },
    { source: "Boulatruelle", target: "Thenardier", value: 1 },
    { source: "Eponine", target: "Mme.Thenardier", value: 2 },
    { source: "Eponine", target: "Thenardier", value: 3 },
    { source: "Anzelma", target: "Eponine", value: 2 },
    { source: "Anzelma", target: "Thenardier", value: 2 },
    { source: "Anzelma", target: "Mme.Thenardier", value: 1 },
    { source: "Woman2", target: "Valjean", value: 3 },
    { source: "Woman2", target: "Cosette", value: 1 },
    { source: "Woman2", target: "Javert", value: 1 },
    { source: "MotherInnocent", target: "Fauchelevent", value: 3 },
    { source: "MotherInnocent", target: "Valjean", value: 1 },
    { source: "Gribier", target: "Fauchelevent", value: 2 },
    { source: "Mme.Burgon", target: "Jondrette", value: 1 },
    { source: "Gavroche", target: "Mme.Burgon", value: 2 },
    { source: "Gavroche", target: "Thenardier", value: 1 },
    { source: "Gavroche", target: "Javert", value: 1 },
    { source: "Gavroche", target: "Valjean", value: 1 },
    { source: "Gillenormand", target: "Cosette", value: 3 },
    { source: "Gillenormand", target: "Valjean", value: 2 },
    { source: "Magnon", target: "Gillenormand", value: 1 },
    { source: "Magnon", target: "Mme.Thenardier", value: 1 },
    { source: "Mlle.Gillenormand", target: "Gillenormand", value: 9 },
    { source: "Mlle.Gillenormand", target: "Cosette", value: 2 },
    { source: "Mlle.Gillenormand", target: "Valjean", value: 2 },
    { source: "Mme.Pontmercy", target: "Mlle.Gillenormand", value: 1 },
    { source: "Mme.Pontmercy", target: "Pontmercy", value: 1 },
    { source: "Mlle.Vaubois", target: "Mlle.Gillenormand", value: 1 },
    { source: "Lt.Gillenormand", target: "Mlle.Gillenormand", value: 2 },
    { source: "Lt.Gillenormand", target: "Gillenormand", value: 1 },
    { source: "Lt.Gillenormand", target: "Cosette", value: 1 },
    { source: "Marius", target: "Mlle.Gillenormand", value: 6 },
    { source: "Marius", target: "Gillenormand", value: 12 },
    { source: "Marius", target: "Pontmercy", value: 1 },
    { source: "Marius", target: "Lt.Gillenormand", value: 1 },
    { source: "Marius", target: "Cosette", value: 21 },
    { source: "Marius", target: "Valjean", value: 19 },
    { source: "Marius", target: "Tholomyes", value: 1 },
    { source: "Marius", target: "Thenardier", value: 2 },
    { source: "Marius", target: "Eponine", value: 5 },
    { source: "Marius", target: "Gavroche", value: 4 },
    { source: "BaronessT", target: "Gillenormand", value: 1 },
    { source: "BaronessT", target: "Marius", value: 1 },
    { source: "Mabeuf", target: "Marius", value: 1 },
    { source: "Mabeuf", target: "Eponine", value: 1 },
    { source: "Mabeuf", target: "Gavroche", value: 1 },
    { source: "Enjolras", target: "Marius", value: 7 },
    { source: "Enjolras", target: "Gavroche", value: 7 },
    { source: "Enjolras", target: "Javert", value: 6 },
    { source: "Enjolras", target: "Mabeuf", value: 1 },
    { source: "Enjolras", target: "Valjean", value: 4 },
    { source: "Combeferre", target: "Enjolras", value: 15 },
    { source: "Combeferre", target: "Marius", value: 5 },
    { source: "Combeferre", target: "Gavroche", value: 6 },
    { source: "Combeferre", target: "Mabeuf", value: 2 },
    { source: "Prouvaire", target: "Gavroche", value: 1 },
    { source: "Prouvaire", target: "Enjolras", value: 4 },
    { source: "Prouvaire", target: "Combeferre", value: 2 },
    { source: "Feuilly", target: "Gavroche", value: 2 },
    { source: "Feuilly", target: "Enjolras", value: 6 },
    { source: "Feuilly", target: "Prouvaire", value: 2 },
    { source: "Feuilly", target: "Combeferre", value: 5 },
    { source: "Feuilly", target: "Mabeuf", value: 1 },
    { source: "Feuilly", target: "Marius", value: 1 },
    { source: "Courfeyrac", target: "Marius", value: 9 },
    { source: "Courfeyrac", target: "Enjolras", value: 17 },
    { source: "Courfeyrac", target: "Combeferre", value: 13 },
    { source: "Courfeyrac", target: "Gavroche", value: 7 },
    { source: "Courfeyrac", target: "Mabeuf", value: 2 },
    { source: "Courfeyrac", target: "Eponine", value: 1 },
    { source: "Courfeyrac", target: "Feuilly", value: 6 },
    { source: "Courfeyrac", target: "Prouvaire", value: 3 },
    { source: "Bahorel", target: "Combeferre", value: 5 },
    { source: "Bahorel", target: "Gavroche", value: 5 },
    { source: "Bahorel", target: "Courfeyrac", value: 6 },
    { source: "Bahorel", target: "Mabeuf", value: 2 },
    { source: "Bahorel", target: "Enjolras", value: 4 },
    { source: "Bahorel", target: "Feuilly", value: 3 },
    { source: "Bahorel", target: "Prouvaire", value: 2 },
    { source: "Bahorel", target: "Marius", value: 1 },
    { source: "Bossuet", target: "Marius", value: 5 },
    { source: "Bossuet", target: "Courfeyrac", value: 12 },
    { source: "Bossuet", target: "Gavroche", value: 5 },
    { source: "Bossuet", target: "Bahorel", value: 4 },
    { source: "Bossuet", target: "Enjolras", value: 10 },
    { source: "Bossuet", target: "Feuilly", value: 6 },
    { source: "Bossuet", target: "Prouvaire", value: 2 },
    { source: "Bossuet", target: "Combeferre", value: 9 },
    { source: "Bossuet", target: "Mabeuf", value: 1 },
    { source: "Bossuet", target: "Valjean", value: 1 },
    { source: "Joly", target: "Bahorel", value: 5 },
    { source: "Joly", target: "Bossuet", value: 7 },
    { source: "Joly", target: "Gavroche", value: 3 },
    { source: "Joly", target: "Courfeyrac", value: 5 },
    { source: "Joly", target: "Enjolras", value: 5 },
    { source: "Joly", target: "Feuilly", value: 5 },
    { source: "Joly", target: "Prouvaire", value: 2 },
    { source: "Joly", target: "Combeferre", value: 5 },
    { source: "Joly", target: "Mabeuf", value: 1 },
    { source: "Joly", target: "Marius", value: 2 },
    { source: "Grantaire", target: "Bossuet", value: 3 },
    { source: "Grantaire", target: "Enjolras", value: 3 },
    { source: "Grantaire", target: "Combeferre", value: 1 },
    { source: "Grantaire", target: "Courfeyrac", value: 2 },
    { source: "Grantaire", target: "Joly", value: 2 },
    { source: "Grantaire", target: "Gavroche", value: 1 },
    { source: "Grantaire", target: "Bahorel", value: 1 },
    { source: "Grantaire", target: "Feuilly", value: 1 },
    { source: "Grantaire", target: "Prouvaire", value: 1 },
    { source: "MotherPlutarch", target: "Mabeuf", value: 3 },
    { source: "Gueulemer", target: "Thenardier", value: 5 },
    { source: "Gueulemer", target: "Valjean", value: 1 },
    { source: "Gueulemer", target: "Mme.Thenardier", value: 1 },
    { source: "Gueulemer", target: "Javert", value: 1 },
    { source: "Gueulemer", target: "Gavroche", value: 1 },
    { source: "Gueulemer", target: "Eponine", value: 1 },
    { source: "Babet", target: "Thenardier", value: 6 },
    { source: "Babet", target: "Gueulemer", value: 6 },
    { source: "Babet", target: "Valjean", value: 1 },
    { source: "Babet", target: "Mme.Thenardier", value: 1 },
    { source: "Babet", target: "Javert", value: 2 },
    { source: "Babet", target: "Gavroche", value: 1 },
    { source: "Babet", target: "Eponine", value: 1 },
    { source: "Claquesous", target: "Thenardier", value: 4 },
    { source: "Claquesous", target: "Babet", value: 4 },
    { source: "Claquesous", target: "Gueulemer", value: 4 },
    { source: "Claquesous", target: "Valjean", value: 1 },
    { source: "Claquesous", target: "Mme.Thenardier", value: 1 },
    { source: "Claquesous", target: "Javert", value: 1 },
    { source: "Claquesous", target: "Eponine", value: 1 },
    { source: "Claquesous", target: "Enjolras", value: 1 },
    { source: "Montparnasse", target: "Javert", value: 1 },
    { source: "Montparnasse", target: "Babet", value: 2 },
    { source: "Montparnasse", target: "Gueulemer", value: 2 },
    { source: "Montparnasse", target: "Claquesous", value: 2 },
    { source: "Montparnasse", target: "Valjean", value: 1 },
    { source: "Montparnasse", target: "Gavroche", value: 1 },
    { source: "Montparnasse", target: "Eponine", value: 1 },
    { source: "Montparnasse", target: "Thenardier", value: 1 },
    { source: "Toussaint", target: "Cosette", value: 2 },
    { source: "Toussaint", target: "Javert", value: 1 },
    { source: "Toussaint", target: "Valjean", value: 1 },
    { source: "Child1", target: "Gavroche", value: 2 },
    { source: "Child2", target: "Gavroche", value: 2 },
    { source: "Child2", target: "Child1", value: 3 },
    { source: "Brujon", target: "Babet", value: 3 },
    { source: "Brujon", target: "Gueulemer", value: 3 },
    { source: "Brujon", target: "Thenardier", value: 3 },
    { source: "Brujon", target: "Gavroche", value: 1 },
    { source: "Brujon", target: "Eponine", value: 1 },
    { source: "Brujon", target: "Claquesous", value: 1 },
    { source: "Brujon", target: "Montparnasse", value: 1 },
    { source: "Mme.Hucheloup", target: "Bossuet", value: 1 },
    { source: "Mme.Hucheloup", target: "Joly", value: 1 },
    { source: "Mme.Hucheloup", target: "Grantaire", value: 1 },
    { source: "Mme.Hucheloup", target: "Bahorel", value: 1 },
    { source: "Mme.Hucheloup", target: "Courfeyrac", value: 1 },
    { source: "Mme.Hucheloup", target: "Gavroche", value: 1 },
    { source: "Mme.Hucheloup", target: "Enjolras", value: 1 }
  ]
};
var ForceFull_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svg.svelte-gf1wo9{float:left}circle.svelte-gf1wo9{stroke:#fff;stroke-width:1.5}",
  map: null
};
const ForceFull = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links;
  let nodes;
  let d32 = {
    zoom,
    zoomIdentity,
    scaleLinear,
    scaleOrdinal,
    schemeCategory10,
    select,
    selectAll,
    drag,
    forceSimulation,
    forceLink,
    forceManyBody,
    forceCenter
  };
  let svg;
  let width2 = 500;
  let height2 = 600;
  const colourScale = d32.scaleOrdinal(d32.schemeCategory10);
  let transform = d32.zoomIdentity;
  $$result.css.add(css$1);
  links = graph.links.map((d) => Object.create(d));
  nodes = graph.nodes.map((d) => Object.create(d));
  {
    console.log(transform);
  }
  return `


<svg${add_attribute("width", width2, 0)}${add_attribute("height", height2, 0)} class="${"svelte-gf1wo9"}"${add_attribute("this", svg, 0)}>${each(links, (link) => {
    return `<g stroke="${"#999"}" stroke-opacity="${"0.6"}"><line${add_attribute("x1", link.source.x, 0)}${add_attribute("y1", link.source.y, 0)}${add_attribute("x2", link.target.x, 0)}${add_attribute("y2", link.target.y, 0)} transform="${"translate(" + escape(transform.x) + " " + escape(transform.y) + ") scale(" + escape(transform.k) + " " + escape(transform.k) + ")"}"><title>${escape(link.source.id)}</title></line></g>`;
  })}${each(nodes, (point) => {
    return `<circle class="${"node svelte-gf1wo9"}" r="${"5"}"${add_attribute("fill", colourScale(point.group), 0)}${add_attribute("cx", point.x, 0)}${add_attribute("cy", point.y, 0)} transform="${"translate(" + escape(transform.x) + " " + escape(transform.y) + ") scale(" + escape(transform.k) + " " + escape(transform.k) + ")"}"><title>${escape(point.id)}</title></circle>`;
  })}</svg>`;
});
let width$7 = 400;
let height$7 = 300;
let margin$5 = 20;
const PolygonBasic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xScale;
  let yScale;
  let hull;
  let scaledHull;
  let data2 = [[210, 90], [110, 400], [420, 400], [490, 250]];
  xScale = d3.scaleLinear().domain([0, 500]).range([0, width$7 - 2 * margin$5]);
  yScale = d3.scaleLinear().domain([0, 500]).range([height$7 - 2 * margin$5, 0]);
  hull = d3.polygonHull(data2);
  scaledHull = hull.map((p) => {
    return [xScale(p[0]), yScale(p[1])];
  });
  return `<svg${add_attribute("width", width$7, 0)}${add_attribute("height", height$7, 0)}>${each(data2, (point) => {
    return `<circle${add_attribute("cx", xScale(point[0]), 0)}${add_attribute("cy", yScale(point[1]), 0)}${add_attribute("r", 5, 0)}></circle>`;
  })}<path fill="${"pink"}" fill-opacity="${"0.5"}"${add_attribute("d", `M${scaledHull.join("L")}Z`, 0)}></path></svg>`;
});
let width$6 = 400;
let height$6 = 300;
let margin$4 = 20;
const PolygonPlus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xScale;
  let yScale;
  let hull;
  let scaledHull;
  let centroid;
  let data2 = [[210, 90], [110, 400], [420, 400], [490, 250]];
  let testPoints = [[200, 350], [50, 50]];
  xScale = d3.scaleLinear().domain([0, 500]).range([0, width$6 - 2 * margin$4]);
  yScale = d3.scaleLinear().domain([0, 500]).range([height$6 - 2 * margin$4, 0]);
  hull = d3.polygonHull(data2);
  scaledHull = hull.map((p) => {
    return [xScale(p[0]), yScale(p[1])];
  });
  centroid = d3.polygonCentroid(hull);
  return `<p>Polygon area: ${escape(d3.polygonArea(data2))}</p>
<p>Length of the perimeter: ${escape(Math.round(d3.polygonLength(data2)))}</p>

<svg${add_attribute("width", width$6, 0)}${add_attribute("height", height$6, 0)}>${each(data2, (point) => {
    return `<circle${add_attribute("cx", xScale(point[0]), 0)}${add_attribute("cy", yScale(point[1]), 0)}${add_attribute("r", 5, 0)}></circle>`;
  })}<path fill="${"pink"}" fill-opacity="${"0.5"}"${add_attribute("d", `M${scaledHull.join("L")}Z`, 0)}></path>${each(testPoints, (tp) => {
    return `<circle${add_attribute("cx", xScale(tp[0]), 0)}${add_attribute("cy", yScale(tp[1]), 0)}${add_attribute("r", 5, 0)}${add_attribute("fill", d3.polygonContains(hull, tp) ? "green" : "red", 0)}></circle>
    <text${add_attribute("x", xScale(tp[0]) + 8, 0)}${add_attribute("y", yScale(tp[1]), 0)}>${escape(d3.polygonContains(hull, tp) ? "IN" : "OUT")}</text>`;
  })}<circle${add_attribute("cx", xScale(centroid[0]), 0)}${add_attribute("cy", yScale(centroid[1]), 0)}${add_attribute("r", 5, 0)} fill="${"blue"}"></circle><text${add_attribute("x", xScale(centroid[0]) + 8, 0)}${add_attribute("y", yScale(centroid[1]), 0)}>Centroid </text></svg>`;
});
const ShapeArc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let arcPath;
  const arcGen = d3.arc();
  arcPath = arcGen({
    innerRadius: 0,
    outerRadius: 100,
    startAngle: 0,
    endAngle: Math.PI / 4
  });
  return `<svg width="${"400"}" height="${"300"}" style="${"padding:30px"}"><path${add_attribute("d", arcPath, 0)} fill="${"brown"}" style="${"transform:translate(120px,120px)"}"></path></svg>`;
});
const ShapeArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yScale;
  let xScale;
  let area;
  const data2 = [
    { date: new Date(2007, 3, 24), value: 91 },
    { date: new Date(2007, 3, 25), value: 98 },
    { date: new Date(2007, 3, 26), value: 93 },
    { date: new Date(2007, 3, 27), value: 91 },
    { date: new Date(2007, 3, 30), value: 99 },
    { date: new Date(2007, 4, 1), value: 95 }
  ];
  const areaGen = d3.area().x((d) => xScale(d.date)).y1((d) => yScale(d.value)).y0((d) => yScale(0));
  yScale = d3.scaleLinear().domain([90, 105]).range([300, 0]);
  xScale = d3.scaleTime().domain(d3.extent(data2.map((d) => {
    return d.date;
  }))).range([0, 400]);
  area = areaGen(data2);
  return `<svg width="${"400"}" height="${"300"}"><path${add_attribute("d", area, 0)} fill="${"pink"}" stroke="${"black"}"></path></svg>`;
});
const ShapeLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yScale;
  let xScale;
  let line;
  let curve;
  const data2 = [
    { date: new Date(2007, 3, 24), value: 91 },
    { date: new Date(2007, 3, 25), value: 98 },
    { date: new Date(2007, 3, 26), value: 93 },
    { date: new Date(2007, 3, 27), value: 91 },
    { date: new Date(2007, 3, 30), value: 99 },
    { date: new Date(2007, 4, 1), value: 95 }
  ];
  const lineGen = d3.line().x((d) => xScale(d.date)).y((d) => yScale(d.value));
  const curveGen = d3.line().x((d) => xScale(d.date)).y((d) => yScale(d.value)).curve(d3.curveBundle.beta(1.2));
  yScale = d3.scaleLinear().domain([90, 105]).range([300, 0]);
  xScale = d3.scaleTime().domain(d3.extent(data2.map((d) => {
    return d.date;
  }))).range([0, 400]);
  line = lineGen(data2);
  curve = curveGen(data2);
  return `<svg width="${"400"}" height="${"300"}"><path${add_attribute("d", line, 0)} fill="${"none"}" stroke="${"black"}"></path><path${add_attribute("d", curve, 0)} fill="${"none"}" stroke="${"blue"}"></path></svg>`;
});
const ShapeLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links;
  let linkGen = d3.linkHorizontal();
  let data2 = { source: [30, 30], target: [70, 70] };
  let data22 = [
    { source: [40, 40], target: [150, 30] },
    { source: [40, 40], target: [150, 55] },
    { source: [40, 40], target: [150, 80] }
  ];
  links = linkGen(data2);
  return `
<svg width="${"400"}" height="${"100"}"><path${add_attribute("d", links, 0)} fill="${"none"}" stroke="${"black"}" stroke-width="${"2"}"></path>${each(Object.values(data2), (p) => {
    return `<circle${add_attribute("cx", p[0], 0)}${add_attribute("cy", p[1], 0)} r="${"10"}" fill="${"lightblue"}"></circle>`;
  })}</svg>


<svg width="${"400"}" height="${"100"}">${each(data22, (dict) => {
    return `${each(Object.values(dict), (p) => {
      return `<path${add_attribute("d", linkGen(dict), 0)} fill="${"none"}" stroke="${"black"}" stroke-width="${"2"}"></path>
      <circle${add_attribute("cx", p[0], 0)}${add_attribute("cy", p[1], 0)} r="${"10"}" fill="${"lightblue"}" stroke="${"transparent"}"></circle>`;
    })}`;
  })}</svg>`;
});
const ShapePie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let arcs;
  let pies;
  let data2 = [2, 3, 5, 8, 13, 21];
  const arcGen = d3.arc();
  arcs = d3.pie()(data2);
  pies = arcs.map((arc) => {
    let input = {
      innerRadius: 10,
      outerRadius: 100,
      startAngle: arc.startAngle,
      endAngle: arc.endAngle
    };
    return arcGen(input);
  });
  return `
<svg width="${"400"}" height="${"300"}">${each(pies, (pie, i) => {
    return `<path${add_attribute("d", pie, 0)} style="${"transform:translate(150px, 150px)"}"${add_attribute("fill", d3.schemeCategory10[i], 0)}></path>`;
  })}</svg>`;
});
const fruitData = [
  {
    month: new Date(2015, 0, 1),
    apples: 3840,
    bananas: 1920,
    cherries: 960,
    dates: 400
  },
  {
    month: new Date(2015, 1, 1),
    apples: 1600,
    bananas: 1440,
    cherries: 960,
    dates: 400
  },
  {
    month: new Date(2015, 2, 1),
    apples: 640,
    bananas: 960,
    cherries: 640,
    dates: 400
  },
  {
    month: new Date(2015, 3, 1),
    apples: 320,
    bananas: 480,
    cherries: 640,
    dates: 400
  }
];
let height$5 = 300;
let width$5 = 400;
let margin$3 = 40;
const ShapeStack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let series;
  let yScale;
  let xScale;
  let pinXAxis, pinYAxis;
  let keys = ["apples", "bananas", "cherries", "dates"];
  const stackGen = d3.stack().keys(keys).order(d3.stackOrderNone).offset(d3.stackOffsetNone);
  series = stackGen(fruitData);
  yScale = d3.scaleLinear().domain([0, 7500]).range([height$5 - 2 * margin$3, 0]);
  xScale = d3.scaleBand().domain(["TP1", "TP2", "TP3", "TP4"]).range([0, width$5 - margin$3 * 2]).padding([0.2]);
  d3.axisBottom(xScale).ticks(width$5 / 60);
  d3.axisLeft(yScale).ticks(width$5 / 60);
  return `<svg${add_attribute("width", width$5, 0)}${add_attribute("height", height$5, 0)}><g class="${"everything"}" style="${"transform:translate(" + escape(margin$3) + "px,0)"}"><g class="${"axis axis--x"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"axis axis--y"}"${add_attribute("this", pinYAxis, 0)}></g><g class="${"bars"}" style="${"transform:translate(0," + escape(margin$3) + "px"}">${each(series, (fruit_type, f) => {
    return `<g class="${"ft_" + escape(fruit_type.key)}">${each(fruit_type, (time_period, i) => {
      return `<rect${add_attribute("x", xScale(`TP${i + 1}`), 0)}${add_attribute("y", yScale(time_period[1]), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", yScale(time_period[0]) - yScale(time_period[1]), 0)}${add_attribute("fill", d3.schemeCategory10[f], 0)}></rect>`;
    })}</g>`;
  })}</g></g></svg>`;
});
const HierarchyPack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let root;
  let partitionGen;
  let partition;
  let data2 = {
    children: [
      {
        children: [{ stat: 1 }, { stat: 1 }, { stat: 1 }]
      },
      {
        children: [{ stat: 1 }, { stat: 1 }, { stat: 2 }, { stat: 3 }]
      },
      {
        children: [
          { stat: 1 },
          { stat: 1 },
          { stat: 1 },
          { stat: 1 },
          { stat: 2 },
          { stat: 2 },
          { stat: 2 },
          { stat: 4 },
          { stat: 4 },
          { stat: 8 }
        ]
      }
    ]
  };
  root = d3.hierarchy(data2).sum((d) => d.hasOwnProperty("stat") ? d.stat : 0).sort((a, b) => b.value - a.value);
  partitionGen = d3.pack().size([250, 250]).padding(10);
  partition = partitionGen(root);
  return `<svg width="${"260"}" height="${"260"}"><g transform="${"translate(5,5)"}">${each(partition.descendants(), (d, i) => {
    return `<circle${add_attribute("cx", d.x, 0)}${add_attribute("cy", d.y, 0)}${add_attribute("r", d.r, 0)} fill="${"green"}"${add_attribute("fill-opacity", 0.4, 0)}></circle>`;
  })}</g></svg>`;
});
let width$4 = 400;
let height$4 = 300;
let margin$2 = 30;
const HierarchyTree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let root;
  let treeGen;
  let tree;
  let data2 = {
    name: "A",
    children: [
      { name: "D" },
      {
        name: "C",
        children: [{ name: "F" }, { name: "E" }]
      },
      { name: "B" }
    ]
  };
  root = d3.hierarchy(data2).sort((a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name));
  treeGen = d3.tree().size([width$4 - 2 * margin$2, 100]);
  tree = treeGen(root);
  return `<svg${add_attribute("width", width$4, 0)}${add_attribute("height", height$4, 0)}><g class="${"everything"}" style="${"transform:translate(0px, 30px"}">${each(tree.links(), (link) => {
    return `<line${add_attribute("x1", link.source.x, 0)}${add_attribute("x2", link.target.x, 0)}${add_attribute("y1", link.source.y, 0)}${add_attribute("y2", link.target.y, 0)} stroke="${"black"}"></line>`;
  })}${each(tree.descendants(), (d) => {
    return `<circle${add_attribute("cx", d.x, 0)}${add_attribute("cy", d.y, 0)}${add_attribute("r", 10, 0)} fill="${"lightblue"}"></circle>
      <text${add_attribute("x", d.x - 5, 0)}${add_attribute("y", d.y + 5, 0)} fill="${"black"}">${escape(d.data.name)}</text>`;
  })}</g></svg>`;
});
let width$3 = 400;
let height$3 = 300;
let margin$1 = 30;
const HierarchyCluster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let root;
  let treeGen;
  let tree;
  let data2 = {
    name: "A",
    children: [
      { name: "D" },
      {
        name: "C",
        children: [{ name: "F" }, { name: "E" }]
      },
      { name: "B" }
    ]
  };
  root = d3.hierarchy(data2).sort((a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name));
  treeGen = d3.cluster().size([width$3 - 2 * margin$1, 50]);
  tree = treeGen(root);
  return `<svg${add_attribute("width", width$3, 0)}${add_attribute("height", height$3, 0)}><g class="${"everything"}" style="${"transform:translate(0px, 30px"}">${each(tree.links(), (link) => {
    return `<line${add_attribute("x1", link.source.x, 0)}${add_attribute("x2", link.target.x, 0)}${add_attribute("y1", link.source.y, 0)}${add_attribute("y2", link.target.y, 0)} stroke="${"black"}"></line>`;
  })}${each(tree.descendants(), (d) => {
    return `<circle${add_attribute("cx", d.x, 0)}${add_attribute("cy", d.y, 0)}${add_attribute("r", 10, 0)} fill="${"lightblue"}"></circle>
      <text${add_attribute("x", d.x - 5, 0)}${add_attribute("y", d.y + 5, 0)} fill="${"black"}">${escape(d.data.name)}</text>`;
  })}</g></svg>`;
});
let width$2 = 400;
let height$2 = 300;
let margin = 30;
let radius = 100;
const HierarchyRadial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let root;
  let treeGen;
  let tree;
  let lineGen;
  let data2 = {
    name: "A",
    children: [
      { name: "B" },
      {
        name: "C",
        children: [{ name: "E" }, { name: "F" }]
      },
      { name: "D" },
      { name: "G" },
      {
        name: "H",
        children: [{ name: "I" }, { name: "J" }]
      },
      { name: "K" },
      { name: "L" },
      {
        name: "M",
        children: [{ name: "M" }, { name: "N" }]
      },
      { name: "O" }
    ]
  };
  root = d3.hierarchy(data2).sort((a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name));
  treeGen = d3.cluster().size([width$2 - 2 * margin, radius]);
  tree = treeGen(root);
  lineGen = d3.lineRadial().angle((d) => d.x * Math.PI / 180).radius((d) => d.y);
  return `<svg${add_attribute("width", width$2, 0)}${add_attribute("height", height$2, 0)}><g class="${"everything"}" transform="${"translate(290,125)"}">${each(tree.links(), (link) => {
    return `<path${add_attribute("d", lineGen([link.target, link.source]), 0)} stroke="${"black"}"></path>`;
  })}${each(tree.descendants(), (d) => {
    return `<circle${add_attribute("cx", 0, 0)}${add_attribute("cy", d.y, 0)}${add_attribute("r", 10, 0)} fill="${"lightblue"}" transform="${"rotate(" + escape(372 - d.x) + ",0,0)"}"></circle>`;
  })}</g></svg>`;
});
const type = "FeatureCollection";
const features = [
  {
    type: "Feature",
    properties: {
      scalerank: 1,
      featurecla: "Admin-0 country",
      labelrank: 2,
      sovereignt: "United Kingdom",
      sov_a3: "GB1",
      adm0_dif: 1,
      level: 2,
      type: "Country",
      admin: "United Kingdom",
      adm0_a3: "GBR",
      geou_dif: 0,
      geounit: "United Kingdom",
      gu_a3: "GBR",
      su_dif: 0,
      subunit: "United Kingdom",
      su_a3: "GBR",
      brk_diff: 0,
      name: "United Kingdom",
      name_long: "United Kingdom",
      brk_a3: "GBR",
      brk_name: "United Kingdom",
      brk_group: null,
      abbrev: "U.K.",
      postal: "GB",
      formal_en: "United Kingdom of Great Britain and Northern Ireland",
      formal_fr: null,
      note_adm0: null,
      note_brk: null,
      name_sort: "United Kingdom",
      name_alt: null,
      mapcolor7: 6,
      mapcolor8: 6,
      mapcolor9: 6,
      mapcolor13: 3,
      pop_est: 62262e3,
      gdp_md_est: 1977704,
      pop_year: 0,
      lastcensus: 2011,
      gdp_year: 2009,
      economy: "1. Developed region: G7",
      income_grp: "1. High income: OECD",
      wikipedia: -99,
      fips_10: null,
      iso_a2: "GB",
      iso_a3: "GBR",
      iso_n3: "826",
      un_a3: "826",
      wb_a2: "GB",
      wb_a3: "GBR",
      woe_id: -99,
      adm0_a3_is: "GBR",
      adm0_a3_us: "GBR",
      adm0_a3_un: -99,
      adm0_a3_wb: -99,
      continent: "Europe",
      region_un: "Europe",
      subregion: "Northern Europe",
      region_wb: "Europe & Central Asia",
      name_len: 14,
      long_len: 14,
      abbrev_len: 4,
      tiny: -99,
      homepart: 1
    },
    geometry: {
      type: "MultiPolygon",
      coordinates: [
        [
          [
            [
              -5.661948614921897,
              54.55460317648385
            ],
            [
              -6.197884894220977,
              53.86756500916334
            ],
            [
              -6.953730231137996,
              54.073702297575636
            ],
            [
              -7.572167934591079,
              54.05995636658599
            ],
            [
              -7.366030646178785,
              54.595840969452695
            ],
            [
              -7.572167934591079,
              55.1316222194549
            ],
            [
              -6.733847011736145,
              55.1728600124238
            ],
            [
              -5.661948614921897,
              54.55460317648385
            ]
          ]
        ],
        [
          [
            [
              -3.005004848635281,
              58.63500010846633
            ],
            [
              -4.073828497728016,
              57.55302480735526
            ],
            [
              -3.055001796877661,
              57.69001902936094
            ],
            [
              -1.959280564776918,
              57.68479970969952
            ],
            [
              -2.219988165689301,
              56.87001740175353
            ],
            [
              -3.119003058271119,
              55.973793036515474
            ],
            [
              -2.085009324543023,
              55.90999848085127
            ],
            [
              -2.005675679673857,
              55.80490285035023
            ],
            [
              -1.11499101399221,
              54.624986477265395
            ],
            [
              -0.4304849918542,
              54.46437612570216
            ],
            [
              0.184981316742039,
              53.32501414653103
            ],
            [
              0.469976840831777,
              52.92999949809197
            ],
            [
              1.681530795914739,
              52.739520168664
            ],
            [
              1.559987827164377,
              52.09999848083601
            ],
            [
              1.050561557630914,
              51.806760565795685
            ],
            [
              1.449865349950301,
              51.28942780212196
            ],
            [
              0.550333693045502,
              50.765738837275876
            ],
            [
              -0.78751746255864,
              50.77498891865622
            ],
            [
              -2.489997524414377,
              50.50001862243124
            ],
            [
              -2.956273972984036,
              50.696879991247016
            ],
            [
              -3.617448085942328,
              50.22835561787272
            ],
            [
              -4.542507900399244,
              50.341837063185665
            ],
            [
              -5.245023159191135,
              49.95999990498109
            ],
            [
              -5.776566941745301,
              50.15967763935683
            ],
            [
              -4.309989793301838,
              51.21000112568916
            ],
            [
              -3.414850633142123,
              51.42600861266925
            ],
            [
              -3.422719467108323,
              51.42684816740609
            ],
            [
              -4.984367234710874,
              51.593466091510976
            ],
            [
              -5.267295701508885,
              51.991400458374585
            ],
            [
              -4.222346564134853,
              52.301355699261364
            ],
            [
              -4.770013393564113,
              52.840004991255626
            ],
            [
              -4.579999152026915,
              53.49500377055517
            ],
            [
              -3.093830673788659,
              53.404547400669685
            ],
            [
              -3.092079637047107,
              53.40444082296355
            ],
            [
              -2.945008510744344,
              53.984999701546684
            ],
            [
              -3.614700825433033,
              54.600936773292574
            ],
            [
              -3.630005458989331,
              54.615012925833014
            ],
            [
              -4.844169073903004,
              54.790971177786844
            ],
            [
              -5.082526617849226,
              55.06160065369937
            ],
            [
              -4.719112107756644,
              55.50847260194348
            ],
            [
              -5.047980922862109,
              55.78398550070753
            ],
            [
              -5.58639767091114,
              55.31114614523682
            ],
            [
              -5.644998745130181,
              56.275014960344805
            ],
            [
              -6.149980841486354,
              56.78500967063354
            ],
            [
              -5.786824713555291,
              57.81884837506465
            ],
            [
              -5.009998745127575,
              58.63001333275005
            ],
            [
              -4.211494513353557,
              58.55084503847917
            ],
            [
              -3.005004848635281,
              58.63500010846633
            ]
          ]
        ]
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      scalerank: 1,
      featurecla: "Admin-0 country",
      labelrank: 2,
      sovereignt: "United Kingdom",
      sov_a3: "GB1",
      adm0_dif: 1,
      level: 2,
      type: "Country",
      admin: "United Kingdom",
      adm0_a3: "GBR",
      geou_dif: 0,
      geounit: "United Kingdom",
      gu_a3: "GBR",
      su_dif: 0,
      subunit: "United Kingdom",
      su_a3: "GBR",
      brk_diff: 0,
      name: "United Kingdom",
      name_long: "United Kingdom",
      brk_a3: "GBR",
      brk_name: "United Kingdom",
      brk_group: null,
      abbrev: "U.K.",
      postal: "GB",
      formal_en: "United Kingdom of Great Britain and Northern Ireland",
      formal_fr: null,
      note_adm0: null,
      note_brk: null,
      name_sort: "United Kingdom",
      name_alt: null,
      mapcolor7: 6,
      mapcolor8: 6,
      mapcolor9: 6,
      mapcolor13: 3,
      pop_est: 62262e3,
      gdp_md_est: 1977704,
      pop_year: 0,
      lastcensus: 2011,
      gdp_year: 2009,
      economy: "1. Developed region: G7",
      income_grp: "1. High income: OECD",
      wikipedia: -99,
      fips_10: null,
      iso_a2: "GB",
      iso_a3: "GBR",
      iso_n3: "826",
      un_a3: "826",
      wb_a2: "GB",
      wb_a3: "GBR",
      woe_id: -99,
      adm0_a3_is: "GBR",
      adm0_a3_us: "GBR",
      adm0_a3_un: -99,
      adm0_a3_wb: -99,
      continent: "Europe",
      region_un: "Europe",
      subregion: "Northern Europe",
      region_wb: "Europe & Central Asia",
      name_len: 14,
      long_len: 14,
      abbrev_len: 4,
      tiny: -99,
      homepart: 1
    },
    geometry: {
      type: "MultiPolygon",
      coordinates: [
        [
          [
            [
              -5.661948614921897,
              54.55460317648385
            ],
            [
              -6.197884894220977,
              53.86756500916334
            ],
            [
              -6.953730231137996,
              54.073702297575636
            ],
            [
              -7.572167934591079,
              54.05995636658599
            ],
            [
              -7.366030646178785,
              54.595840969452695
            ],
            [
              -7.572167934591079,
              55.1316222194549
            ],
            [
              -6.733847011736145,
              55.1728600124238
            ],
            [
              -5.661948614921897,
              54.55460317648385
            ]
          ]
        ],
        [
          [
            [
              -3.005004848635281,
              58.63500010846633
            ],
            [
              -4.073828497728016,
              57.55302480735526
            ],
            [
              -3.055001796877661,
              57.69001902936094
            ],
            [
              -1.959280564776918,
              57.68479970969952
            ],
            [
              -2.219988165689301,
              56.87001740175353
            ],
            [
              -3.119003058271119,
              55.973793036515474
            ],
            [
              -2.085009324543023,
              55.90999848085127
            ],
            [
              -2.005675679673857,
              55.80490285035023
            ],
            [
              -1.11499101399221,
              54.624986477265395
            ],
            [
              -0.4304849918542,
              54.46437612570216
            ],
            [
              0.184981316742039,
              53.32501414653103
            ],
            [
              0.469976840831777,
              52.92999949809197
            ],
            [
              1.681530795914739,
              52.739520168664
            ],
            [
              1.559987827164377,
              52.09999848083601
            ],
            [
              1.050561557630914,
              51.806760565795685
            ],
            [
              1.449865349950301,
              51.28942780212196
            ],
            [
              0.550333693045502,
              50.765738837275876
            ],
            [
              -0.78751746255864,
              50.77498891865622
            ],
            [
              -2.489997524414377,
              50.50001862243124
            ],
            [
              -2.956273972984036,
              50.696879991247016
            ],
            [
              -3.617448085942328,
              50.22835561787272
            ],
            [
              -4.542507900399244,
              50.341837063185665
            ],
            [
              -5.245023159191135,
              49.95999990498109
            ],
            [
              -5.776566941745301,
              50.15967763935683
            ],
            [
              -4.309989793301838,
              51.21000112568916
            ],
            [
              -3.414850633142123,
              51.42600861266925
            ],
            [
              -3.422719467108323,
              51.42684816740609
            ],
            [
              -4.984367234710874,
              51.593466091510976
            ],
            [
              -5.267295701508885,
              51.991400458374585
            ],
            [
              -4.222346564134853,
              52.301355699261364
            ],
            [
              -4.770013393564113,
              52.840004991255626
            ],
            [
              -4.579999152026915,
              53.49500377055517
            ],
            [
              -3.093830673788659,
              53.404547400669685
            ],
            [
              -3.092079637047107,
              53.40444082296355
            ],
            [
              -2.945008510744344,
              53.984999701546684
            ],
            [
              -3.614700825433033,
              54.600936773292574
            ],
            [
              -3.630005458989331,
              54.615012925833014
            ],
            [
              -4.844169073903004,
              54.790971177786844
            ],
            [
              -5.082526617849226,
              55.06160065369937
            ],
            [
              -4.719112107756644,
              55.50847260194348
            ],
            [
              -5.047980922862109,
              55.78398550070753
            ],
            [
              -5.58639767091114,
              55.31114614523682
            ],
            [
              -5.644998745130181,
              56.275014960344805
            ],
            [
              -6.149980841486354,
              56.78500967063354
            ],
            [
              -5.786824713555291,
              57.81884837506465
            ],
            [
              -5.009998745127575,
              58.63001333275005
            ],
            [
              -4.211494513353557,
              58.55084503847917
            ],
            [
              -3.005004848635281,
              58.63500010846633
            ]
          ]
        ]
      ]
    }
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [
        20.522875,
        51.070292
      ]
    },
    properties: {
      id: 1,
      "marker-size": "small",
      "marker-color": "#f5a91a",
      "marker-symbol": "b"
    }
  }
];
var walesData = {
  type,
  features
};
let width$1 = 400;
let height$1 = 300;
const GeoPath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathGen;
  let path;
  pathGen = d3.geoPath();
  path = pathGen(walesData);
  return `<svg viewBox="${"93,149,10,12"}"${add_attribute("width", width$1, 0)}${add_attribute("height", height$1, 0)}><path${add_attribute("d", path, 0)} transform="${"translate(100,100)"}" fill="${"lightblue"}" stroke="${"darkgray"}" stroke-width="${"0.05"}"></path></svg>`;
});
var ZoomBasic_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-ndpz51{position:absolute;left:150px;margin-top:150px;z-index:1}svg.svelte-ndpz51{z-index:2;position:relative}",
  map: null
};
let width = 400;
let height = 300;
let numPoints = 100;
const ZoomBasic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data2;
  let bindHandleZoom, bindInitZoom;
  function handleZoom(e) {
    console.log("ev", e.transform);
    d3.select(bindHandleZoom).attr("transform", e.transform);
  }
  function getData() {
    let data3 = [];
    for (let i = 0; i < numPoints; i++) {
      data3.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height
      });
    }
    return data3;
  }
  $$result.css.add(css);
  data2 = getData();
  d3.zoom().scaleExtent([1, 5]).translateExtent([[0, 0], [width, height]]).on("zoom", handleZoom);
  return `<div class="${"svelte-ndpz51"}">Zoom Here!</div>
<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} class="${"svelte-ndpz51"}"${add_attribute("this", bindInitZoom, 0)}><g class="${"points"}"${add_attribute("this", bindHandleZoom, 0)}>${each(data2, (d, i) => {
    return `<circle${add_attribute("cx", d.x, 0)}${add_attribute("cy", d.y, 0)} r="${"4"}"${add_attribute("fill", d3.interpolateBlues(30 / (i + 1)), 0)}></circle>`;
  })}</g></svg>`;
});
var ZoomScales_svelte_svelte_type_style_lang = "";
let d3CMS = [
  {
    primary_key: "d3-axis",
    published: "2022-03-13",
    post_title: "Implementing D3 Axis in SvelteKit",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["d3", "axis"],
    intro_text: "d3-axis provides a set of tools to create and customize graph axes. This article will describe how to create a number of the most useful ones, specifically in SvelteKit. Each axis type is similar but implemented slightly differently. The code for each is provided.<br/><br/> There is a variety of different ways to approach the D3/ SvelteKit integration, my method shown favours describing as much of the SVG elements as possible in Svelte HTML/ SVG markup (as opposed to creating elements programmatically with D3 code). This keeps code really clean and readable and makes it easier to apply Svelte event handlers or custom styles. ",
    components: [
      {
        id: "AxisSimple",
        title: "Basic axis - scaleLinear()",
        notes: "<span class='test'>d3.scaleLinear()</span>is the most basic axis type - it allows you to create linearly incremented axes. In SvelteKit, I make use of the bind:this={} syntax to select an empty SVG group element and call the axis generator function. See the full code for details.",
        component: AxisSimple
      },
      {
        id: "AxisLog",
        title: "Log scale - scaleLog()",
        notes: "To create a logarithmic axis, we need to use the <span>scaleLog()</span> generator (see code block below for full example). The rest of the implementation in SvelteKit is the same as the <span class='test'>d3.scaleLinear()</span> example above. <br/><br/> I have also added a <span class='test'>tickFormat()</span> to make it easy for the reader to see that a logarithmic scale is being used.",
        component: AxisLog
      },
      {
        id: "AxisScalePoint",
        title: "Categorical axis - scalePoint()",
        notes: "Axes for categorical data can be created using either the <span>scalePoint()</span> or the <span>scaleBand()</span> functions. <span>scalePoint()</span> is typically used with points and scatter plots; when the data/visual marker you are plotting does not have a width.<br/><br/><span>scaleBand()</span>(as we see in the next example below) is typically used with bar charts and histograms.",
        component: AxisScalePoint
      },
      {
        id: "AxisScaleBand",
        title: "Categorical (bars) - scaleBand()",
        notes: "The <span>scaleBand()</span> scale is implemented similarly to the previous <span>scalePoint()</span> but we add <span>.padding([0.5])</span> to the end of the construction chain. <br/><br/> This tells D3 to generate an axis with a bandwidth (retrievable using <span>x.bandwith()</span> where x is what you named your scaleBand(). This can then be passed to the svg rect to dictate the width of the 'bar').",
        component: AxisScaleBand
      },
      {
        id: "AxisLabels",
        title: "Axis Labels",
        notes: "Axis labels can be added simply with a 'text' element in the SVG markup. Sometimes you will have to manually adjust the positioning to fit margin constraints.<br/><br/>Custom styling can be added either inline to the Text element or in the Svelte style tags.",
        component: AxisLabels
      }
    ]
  },
  {
    primary_key: "d3-brush",
    published: "2022-03-25",
    post_title: "D3-brush techniques in SvelteKit",
    thumbnail: "/images/thumbnails/brush.png",
    keywords: ["d3"],
    intro_text: "Brushing is a technique used frequently in data visualization. It allows the user to interact with one or more visual, to identify patterns and relationships between them.<br/><br/> In this article, I'll be walking through a number of examples of implementing different brushing techniques (using d3-brush). ",
    components: [
      {
        id: "BrushXSimple",
        title: "Simple Brush",
        notes: "In our first brush example, the simplest of brush functionality is shown. If you dig into the code, you will see I plotted a few points, set the brush area, and update the class of the circles that fall within the brushX selection range. <br/><br/> On its own this example is quite pointless but does help us understand a little better the underlying mechanics of setting up a brush. Next, we add more complexity, and utility.",
        component: BrushXSimple
      },
      {
        id: "BrushStore",
        title: "Brush with Svelte Store",
        notes: "In the previous toy example I generated a simple dataset to show basic brush functionality. In reality, we would use brushing as a technique typically as a filter across a set of visuals. For example, I might want to brush a date timeline and look at the effect on a scatter plot. <br/><br/> Luckily Svelte provides us with Stores to pass data between components.<br/><br/> In this example, you will see that the brush updates a dataset ($filtered) which is saved to a Svelte store and then read by the Bar visual below. <br/><br/> If you dive into the code for this visual, you will also note that I am creating the SVG elements using a Svelte {#each} tag rather than with svg.selectAll(circle).append() etc. This is because as the complexity increases (here with two visuals interacting), I find it easier to write as much Svelte HTML as possible, rather than generating elements with D3/ JS code.  ",
        component: BrushStore
      }
    ]
  },
  {
    primary_key: "d3-chord",
    published: "2022-03-27",
    post_title: "D3-Chord in SvelteKit ",
    thumbnail: "/images/thumbnails/chord.png",
    keywords: ["d3"],
    intro_text: "The d3-chord api allows you to generate chord geometries. In this article, I'll describe the method I use to generate these kind of gemoetries, specifically within a SvelteKit environment.",
    components: [
      {
        id: "ChordBasic",
        title: "Chord (Basic)",
        notes: "We start with a basic Chord visual. The input is a 4x4 matrix of values which represent the strength of the connection between the X-Y pairs. <br/><br/> We start by specifying reactive generator functions for d3.chord(), d3.arc() and d3.ribbon(). The chord generator creates the data that is passed to the outer arcs and the inner ribbons (between arcs). <br/> <br/>Then, I frame out the SVG elements I need in the Svelte template area. I have a group for the outer arcs, and a group for the ribbons.",
        component: ChordBasic
      },
      {
        id: "ChordComplex",
        title: "Chord (Complex) ",
        notes: "This chord visual is adapted from <a href='https://observablehq.com/@d3/chord-diagram'>this</a> Mike Bostock example on Observable, with original data from Nadieh Bremer (thanks Mike and Nadieh!). The outer arcs represent phone ownership, the inner ribbons show the brand of their previous phone. Hence, this chart shows how the consumers shift between brands. <br/><br/>Not too much has changed in the underlying mechanics from the previous simpler example. The complexity come from: more data, more annotations/ labeling. These can sometimes be a bit fiddly with Chord diagrams. <br/><br/> The principles are still the same: layout all HTML elements and then position them using the D3 helper functions. ",
        component: ChordComplex
      }
    ]
  },
  {
    primary_key: "d3-color",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-contour",
    published: "2022-03-28",
    post_title: "Contours with D3 and SvelteKit",
    thumbnail: "/images/thumbnails/contour.png",
    keywords: ["d3"],
    intro_text: "Contours are an interesting visual type - used typically for maps, but can also be used to display continuous functions by sampling. In this article, we provide an example of how to use d3-contour within SvelteKit.",
    components: [
      {
        id: "ContourBasic",
        title: "Contours (basic)",
        notes: "The classic example (found in the docs and this  Basic example) is using contours to visualize the <a href='https://en.wikipedia.org/wiki/Test_functions_for_optimization' >Goldstein-Price function</a>. Here's how I implmented it in SvelteKit. <br/><br/>The code is relatively straightforward, once you have your data in the required format. The contour generator expects an array of length n by m where [n, m] is the contour generator's size. <br/><br/> The output is then typically passed to d3.geoPath() to convert the projection into SVG paths.",
        component: ContourBasic
      }
    ]
  },
  {
    primary_key: "d3-delaunay",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "Voronoi",
        title: "Voronoi ",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      },
      {
        id: "",
        title: "delaunay.find ",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-drag",
    published: "2022-03-28",
    post_title: "Drag interactions in SvelteKit with d3-drag",
    thumbnail: "/images/thumbnails/drag.png",
    keywords: ["d3"],
    intro_text: "Drag and drop is a pretty common use case, especially in interactive journalism! On a SvelteKit app, you could potentially implement drag and drop with HTML, with Svelte event hooks or with D3-drag. <br/><br/> This article looks at different scenarios and suggests when to use which technology. ",
    components: [
      {
        id: "DragSimple",
        title: "Simple Drag (mouseup/down only)",
        notes: "Firstly, I've implemented a simple drag functionality using mouseup and mousedown (from the HTML Drag and Drop Api) Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        component: DragSimple
      },
      {
        id: "DragD3",
        title: "Drag with d3-drag",
        notes: "Next, I looked at implementing dragging functionality with d3-drag. The code is quite straightforward. I bounded a set of circles to the DOM from the within the onMount() hook (because I'm using SvelteKit/SSR). I then called the dragHandler() on the circles to activate dragging.<br/><br/> This serves a purpose and demostrated that it is possible to implement drag using d3.js in SvelteKit. <br/><br/>",
        component: DragD3
      },
      {
        id: "DragD3Svelte",
        title: "d3-drag on Svelte/HTML elements",
        notes: "Finally, I prefer writing SVG elements in HTML, rather than programmatically with D3, so in this example I show how to add dragHandlers to svg elements creating in as HTML/ SVG (not with d3 code).<br/><br/> The benefits of this method are that (to me) it's more readable, less error prone, and you can add other Svelte event listeners/ animations to the SVG elements.",
        component: DragD3Svelte
      }
    ]
  },
  {
    primary_key: "d3-ease",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-fetch",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-force",
    published: "2022-04-01",
    post_title: "D3 Force Simulation and Svelte",
    thumbnail: "/images/thumbnails/force.png",
    keywords: ["d3"],
    intro_text: "Trying to implment the d3-force in Svelte caused me the most problems of all the d3 libraries! It wasn't until I stumbled upon <a href='https://github.com/happybeing/d3-fdg-svelte'>this repo</a> on GitHub that it all clicked into place, so thanks @happybear! As a result the methods and code I use here borrow heavily from his great work.<br/><br/> Once you understand how to call the simulation, things become clear and you implement any force simulations you can see in the docs.",
    components: [
      {
        id: "ForceSimple",
        title: "Simple Force Simulation",
        notes: "Starting off with a simple force x, force y, and force collide. The simulation is initialized within the onMount() hook. The collide simulation prevents nodes from overlapping, the force x and force y simulations spread the nodes across an x and y axis.<br/><br/> All other interactions have been stripped away from this example to keep it as simple as possible.",
        component: ForceSimple
      },
      {
        id: "ForceRadial",
        title: "Radial Force Simulation",
        notes: "Typically, simulations come into their own upon interaction; through drag, zoom, data updates or animations. Drag and zoom interactions have been added in this example and a different type of simulation has been applied - d3.forceRadial(). ",
        component: ForceRadial
      },
      {
        id: "ForceFull",
        title: "Network graph simulation",
        notes: "In this example (mostly from this <a href='https://github.com/happybeing/d3-fdg-svelte'>awesome repo</a> - thanks Mark!), nodes and links are visualized with interacting simulations. ",
        component: ForceFull
      }
    ]
  },
  {
    primary_key: "d3-format",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-geo",
    published: "2022-03-30",
    post_title: "Visualizing geo data with D3 and Svelte",
    thumbnail: "/images/thumbnails/geo.png",
    keywords: ["d3"],
    intro_text: "This article gives an example of the creation of svg path geomtry with geoJSON with the d3-geo module. I then render the result in a Svelte app. <br/><br/> The d3-geo library is vast and I'll only be starting with a simple example, with the aim to expand on it over time. <br/><br/> This data use in on this page is from <a href='https://datahub.io/examples/geojson-tutorial'>DataHub</a>.",
    components: [
      {
        id: "GeoPath",
        title: "Simple GeoPath",
        notes: "In the simplest implmentation of d3.geoPath(), a geoPath generator is created and fed with GeoJSON data. This outputs an svg path description that can be given to an SVG path element.",
        component: GeoPath
      }
    ]
  },
  {
    primary_key: "d3-hierarchy",
    published: "2022-03-30",
    post_title: "Visualizing hierarchies with D3 and Svelte",
    thumbnail: "/images/thumbnails/hierarchy.png",
    keywords: ["d3"],
    intro_text: "We can use d3 to generate lots of visual layouts from hierarchichal data. Typically the process is: 1) construct a hierarchichal model from the data, 2) feed the model into a layout generator such as a circle-packing generator. This gives us the 'instructions' for what to render where with SVG elements. <br/><br/> In this article, we'll look at the basic layout types and look at how we can render them specifically with SvelteKit. This is not a detailed tutorial on how to customize hierarchichal layouts with D3 - for that I recommend the <a href='https://github.com/d3/d3-hierarchy'>D3 docs</a>. <br/><br/> Much of the data/ examples with this section was adapted from <a href='http://using-d3js.com/06_01_hierarchal.html'>using-d3js.com</a> - a great resource for learning more about d3 modules.",
    components: [
      {
        id: "HierarchyTree",
        title: "Tree Layout ",
        notes: "If you inspect the code for this first example, you can see the process unfold. First we construction the hierarchichal model with d3.hierarchy(). We then feed this hierarchichal model into a tree layout generator.<br/><br/>This gives us a handy set of instructions to plot our tree layout. ",
        component: HierarchyTree
      },
      {
        id: "HierarchyCluster",
        title: "Cluster Layout",
        notes: "The cluster layout is nearly the same as the tree layout, but instead of passing in an X/Y to the .size() function of the generator, we give it a radius.",
        component: HierarchyCluster
      },
      {
        id: "HierarchyRadial",
        title: "Radial Layout",
        notes: "The radial layout is an extension of the cluster layout. We create a d3.lineRadial() generator function for our radial links and create a path for each of the tree.links(), passing in the source and the target coordinates. To plot our circles, we need to change the cx position to 0 and rotate all points by d.x.",
        component: HierarchyRadial
      },
      {
        id: "HierarchyPack",
        title: "Circle Packing Layout",
        notes: "Once you understand how the preceeding visuals are built, the circle-packing is a simple extension - it follows the same pattern as described above. See the code for more details. ",
        component: HierarchyPack
      }
    ]
  },
  {
    primary_key: "d3-polygon",
    published: "2022-03-29",
    post_title: "Polygons with D3 and SvelteKit",
    thumbnail: "/images/thumbnails/polygon.png",
    keywords: ["d3"],
    intro_text: "The d3-polygon module is relatively simple library for generating 2D polygon geometries from a set of points. ",
    components: [
      {
        id: "PolygonBasic",
        title: "Basic Polygon",
        notes: "Starting with the simplest example, I compute the convex hull (read more <a href='https://en.wikipedia.org/wiki/Convex_hull'>here</a>) and then plot the points and the resultant path.",
        component: PolygonBasic
      },
      {
        id: "PolygonPlus",
        title: "Polygon utilities",
        notes: "Now we have seen how to generate then polygons and hulls, we can take advantage of the utility functions that come with it. polygonArea(), polygonCentroid(), polygonLength() and polygonContains() are the functions demonstrated in this example. ",
        component: PolygonPlus
      }
    ]
  },
  {
    primary_key: "d3-quadtree",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-scale",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-shape",
    published: "2022-03-29",
    post_title: "D3 Shapes with SvelteKit",
    thumbnail: "/images/thumbnails/shapes.png",
    keywords: ["d3"],
    intro_text: "D3 Shape is really at the core of building data visuals. With it, you can produce arcs, pies, lines, areas, curves, links, and stacks. In this article, I'll make one of each of these shapes, specifically in a SvelteKit environment. <br/><br/>Note: the examples I show are intended to show just the basics of how to render all the standard shape types in a Svelte app. This is not meant to be a D3 tutorial, as such. Once you know how to get your D3 shape into Svelte, the possibilities are then endless, and you can add more complexity, typically to shape generator functions.",
    components: [
      {
        id: "ShapeArc",
        title: "D3 Arc",
        notes: "D3 Arc on it's own is not too useful but it a good building block for pie charts and chord charts. An arc generator expects an object with the keys: innerRadius, outerRadius, startAngle and endAngle. From this you will get an SVG path, which we can display in our app.",
        component: ShapeArc
      },
      {
        id: "ShapePie",
        title: "D3 Pie",
        notes: "The pie generator takes as input an array of data, and calculates the arc startAngle and endAngle, which we can then feed into our arc generator (seen above).",
        component: ShapePie
      },
      {
        id: "ShapeLine",
        title: "D3 Line and D3 Curve",
        notes: "Given an x-array and a y-array of data, we can also generate line (and then curve) geometry. In this example, the black line represents a simple line generated from from date/value data. <br/><br/> To make this line curved (blue), we can supply the line generator with a number of different curves (see <a href='https://github.com/d3/d3-shape#curves'>d3 docs</a> for more info on this).",
        component: ShapeLine
      },
      {
        id: "ShapeArea",
        title: "D3 Area",
        notes: "Area charts are similar to line charts, but generate a fillable area down to the X-axis (by default). We can generate them with D3 and visualize them in SvelteKit in the same way. ",
        component: ShapeArea
      },
      {
        id: "ShapeLinks",
        title: "D3 Links",
        notes: "The link generator can be useful for a variery of network-type diagrams, hierarchichal charts and general relationship diagramming. The line generator expects an object with source and target keys to define the mapping (see code).<br/><br/> You can customize the style of the link between nodes in lots of different way. Check out the <a href='https://github.com/d3/d3-shape#line'>D3 docs</a> for inspiration. ",
        component: ShapeLinks
      },
      {
        id: "ShapeStack",
        title: "D3 Stack",
        notes: "Stack charts can be made using d3-stack. From the output of the stack generator, you have the choice to render either a stacked bar chart or a stacked area chart. In this example, I chose a bar chart! ",
        component: ShapeStack
      }
    ]
  },
  {
    primary_key: "d3-timer",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-transition",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-zoom",
    published: "2022-03-31",
    post_title: "Zooming with D3 and Svelte",
    thumbnail: "/images/thumbnails/zoom.png",
    keywords: ["d3"],
    intro_text: "Zooming is one of the most difficult aspects of using D3 with a front-end framework like SvelteKit, as it deals with UI interaction, the updating of scales and (sometimes) the redrawing of geometry dynamically. <br/><br/>We begin with a really simple example of Zooming with D3 and SvelteKit and hope to add more advanced configurations in the future. ",
    components: [
      {
        id: "ZoomBasic",
        title: "Simple Zoom",
        notes: "We start with a simple zoom implementation adapted from the great site <a href='https://www.d3indepth.com/zoom-and-pan/'>D3 in Depth</a>. More examples will be added to the site as it grows! ",
        component: ZoomBasic
      }
    ]
  }
];
export { d3CMS as d, writable as w };
