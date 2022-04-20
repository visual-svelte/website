import { c as create_ssr_component, a as add_attribute, e as escape, b as each, n as null_to_empty, d as noop, f as safe_not_equal, g as subscribe, h as set_store_value, v as validate_component, m as missing_component, i as identity, j as assign, k as now, l as loop, o as is_function, p as compute_rest_props, q as createEventDispatcher, r as spread, t as escape_object, u as is_promise } from "./index-769cbf91.js";
import * as d3 from "d3";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { zoom, zoomIdentity } from "d3-zoom";
import { schemeCategory10 } from "d3-scale-chromatic";
import { select, selectAll } from "d3-selection";
import { drag } from "d3-drag";
import { forceSimulation, forceLink, forceManyBody, forceCenter } from "d3-force";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css$w from "highlight.js/lib/languages/css";
/* empty css                                                     */import { range } from "d3-array";
import feather from "feather-icons";
import { interpolateLab } from "d3-interpolate";
let margin$c = 30;
let svg_height$6 = 300;
let svg_width$6 = 400;
const AxisSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let pinXAxis, pinYAxis;
  height2 = svg_height$6 - margin$c * 2;
  width2 = svg_width$6 - margin$c * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width2]);
  d3.scaleLinear().domain([100, 0]).range([0, height2]);
  return `<svg${add_attribute("width", svg_width$6, 0)}${add_attribute("height", svg_height$6, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$c) + "," + escape(margin$c + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"yAxis"}" transform="${"translate(" + escape(margin$c) + "," + escape(margin$c) + ")"}"${add_attribute("this", pinYAxis, 0)}></g></svg>`;
});
let margin$b = 30;
let svg_height$5 = 300;
let svg_width$5 = 400;
const AxisLog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let pinXAxis, pinYAxis;
  height2 = svg_height$5 - margin$b * 2;
  width2 = svg_width$5 - margin$b * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width2]);
  d3.scaleLog().domain([1e4, 1]).range([0, height2]).base(10);
  return `<svg${add_attribute("width", svg_width$5, 0)}${add_attribute("height", svg_height$5, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$b) + "," + escape(margin$b + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"yAxis"}" transform="${"translate(" + escape(margin$b) + "," + escape(margin$b) + ")"}"${add_attribute("this", pinYAxis, 0)}></g></svg>`;
});
let margin$a = 30;
let svg_height$4 = 300;
let svg_width$4 = 400;
const AxisScalePoint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let x;
  let pinXAxis;
  let categories = ["Apple", "Banana", "Cherry", "Donut"];
  height2 = svg_height$4 - margin$a * 2;
  width2 = svg_width$4 - margin$a * 2;
  x = d3.scalePoint().domain(categories).range([0, width2]);
  return `<svg${add_attribute("width", svg_width$4, 0)}${add_attribute("height", svg_height$4, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$a) + ", " + escape(height2 - margin$a) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><circle${add_attribute("cx", x("Banana") + margin$a, 0)}${add_attribute("cy", height2 / 2, 0)}${add_attribute("r", 8, 0)}></circle></svg>`;
});
let margin$9 = 30;
let svg_height$3 = 300;
let svg_width$3 = 400;
const AxisScaleBand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let x;
  let pinXAxis;
  height2 = svg_height$3 - margin$9 * 2;
  width2 = svg_width$3 - margin$9 * 2;
  x = d3.scaleBand().domain(["Apple", "Banana", "Cherry", "Donut"]).range([0, width2]).padding([0.5]);
  return `<svg${add_attribute("width", svg_width$3, 0)}${add_attribute("height", svg_height$3, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$9) + "," + escape(margin$9 + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><rect${add_attribute("x", margin$9 + x("Cherry"), 0)}${add_attribute("y", height2 + margin$9 - 50, 0)}${add_attribute("height", 50, 0)}${add_attribute("width", x.bandwidth(), 0)} fill="${"#69b3a2"}" opacity="${"0.5"}"></rect><rect${add_attribute("x", margin$9 + x("Banana"), 0)}${add_attribute("y", height2 + margin$9 - 150, 0)}${add_attribute("height", 150, 0)}${add_attribute("width", x.bandwidth(), 0)} fill="${"#453234"}" opacity="${"0.5"}"></rect></svg>`;
});
var AxisLabels_svelte_svelte_type_style_lang = "";
const css$v = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.axis-label.svelte-uhx0yq{font-size:0.8rem}",
  map: null
};
let margin$8 = 50;
let svg_height$2 = 300;
let svg_width$2 = 400;
const AxisLabels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let pinXAxis, pinYAxis;
  $$result.css.add(css$v);
  height2 = svg_height$2 - margin$8 * 2;
  width2 = svg_width$2 - margin$8 * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width2]);
  d3.scaleLinear().domain([100, 0]).range([0, height2]);
  return `<svg${add_attribute("width", svg_width$2, 0)}${add_attribute("height", svg_height$2, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin$8) + "," + escape(margin$8 + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"yAxis"}" transform="${"translate(" + escape(margin$8) + "," + escape(margin$8) + ")"}"${add_attribute("this", pinYAxis, 0)}></g><text class="${"axis-label svelte-uhx0yq"}" fill="${"blue"}"${add_attribute("y", svg_height$2 - 10, 0)}${add_attribute("x", width2 / 2, 0)}>X Axis Label
  </text><text class="${"axis-label svelte-uhx0yq"}" fill="${"red"}"${add_attribute("y", 15, 0)}${add_attribute("x", -height2, 0)} transform="${"rotate(270)"}">Y Axis Label
  </text></svg>`;
});
var BrushXSimple_svelte_svelte_type_style_lang = "";
const css$u = {
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
  $$result.css.add(css$u);
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
var data$4 = d3.range(100).map(() => {
  let x = d3.randomUniform(0, 400)();
  let y = d3.randomNormal(300 / 2, 300 / 12)();
  return [x, y];
});
areaDataCsv.map((d) => {
  return { date: parseDate(d.date), price: d.price };
});
const brushData = readable(data$4);
const filtered = writable(data$4);
var BrushStore_svelte_svelte_type_style_lang = "";
const css$t = {
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
  $$result.css.add(css$t);
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
let width$c = 500;
let height$c = 400;
const ChordBasic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let viewBx;
  let outerRadius;
  let innerRadius;
  let chordGen;
  let arcGen2;
  let ribbonGen;
  let chords;
  let svgHere;
  let colors2 = ["#fff775", "#423e42", "#9c334e", "blue"];
  let data2 = [[0, 32, 45, 22], [0, 10, 100, 0], [100, 80, 90, 2], [50, 30, 77, 2]];
  viewBx = [-width$c / 3, -height$c / 2, width$c, height$c];
  outerRadius = Math.min(width$c, height$c) * 0.5 - 60;
  innerRadius = outerRadius - 10;
  chordGen = d3.chord().padAngle(15 / innerRadius).sortSubgroups(d3.descending).sortChords(d3.descending);
  arcGen2 = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  ribbonGen = d3.ribbon().radius(innerRadius - 1).padAngle(1 / innerRadius);
  chords = chordGen(data2);
  return `<svg${add_attribute("viewBox", viewBx, 0)}${add_attribute("width", width$c, 0)}${add_attribute("height", height$c, 0)}${add_attribute("this", svgHere, 0)}><g class="${"outer-arcs"}">${each(chords["groups"], (chord, i) => {
    return `<g class="${"outer"}"><path${add_attribute("fill", colors2[i], 0)}${add_attribute("d", arcGen2(chord), 0)}></path></g>`;
  })}</g><g class="${"ribbons"}" style="${"fill-opacity:0.4;"}">${each(chords, (chord, i) => {
    return `<path style="${"mix-blend-mode: multiply;"}"${add_attribute("fill", colors2[chord.source.index], 0)} class="${"ribbon"}"${add_attribute("d", ribbonGen(chord), 0)}></path>`;
  })}</g></svg>`;
});
const data$3 = [
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
const css$s = {
  code: ".phone-title.svelte-vwo2bq{font-size:0.8rem}",
  map: null
};
let width$b = 500;
let height$b = 400;
const ChordComplex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let viewBx;
  let outerRadius;
  let innerRadius;
  let chordGen;
  let arcGen2;
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
  $$result.css.add(css$s);
  viewBx = [-width$b / 2.5, -height$b / 1.8, width$b * 1.1, height$b * 1.1];
  outerRadius = Math.min(width$b, height$b) * 0.5 - 60;
  innerRadius = outerRadius - 10;
  chordGen = d3.chord().padAngle(10 / innerRadius).sortSubgroups(d3.descending).sortChords(d3.descending);
  arcGen2 = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  ribbonGen = d3.ribbon().radius(innerRadius - 1).padAngle(1 / innerRadius);
  chords = chordGen(data$3);
  tickStep = d3.tickStep(0, d3.sum(data$3.flat()), 100);
  return `<svg${add_attribute("viewBox", viewBx, 0)}${add_attribute("width", width$b, 0)}${add_attribute("height", height$b, 0)}${add_attribute("this", svgHere, 0)}><g class="${"outer-arcs"}">${each(chords["groups"], (chord, i) => {
    return `<g class="${"group"}"><path${add_attribute("fill", colors[i], 0)}${add_attribute("d", arcGen2(chord), 0)}></path><g>${each(ticks(chord), (tick, t) => {
      return `<g class="${"tick"}" style="${"transform:rotate(" + escape(tick.angle * 180 / Math.PI - 90) + "deg) translate(" + escape(outerRadius) + "px,0);"}">${t < 1 ? `<text${add_attribute("fill", colors[i], 0)} x="${"30"}" y="${"5"}" class="${"phone-title svelte-vwo2bq"}" font-weight="${"bold"}" style="${"transform:" + escape(tick.angle > Math.PI ? "rotate(180deg) translate(-95px)" : null)}">${escape(names[i])}</text>` : ``}<line${add_attribute("stroke", colors[i], 0)} x2="${"6"}"></line><text x="${"8"}" dy="${"0.35em"}" style="${"transform:" + escape(tick.angle > Math.PI ? "rotate(180deg) translate(-16px)" : null)}"${add_attribute("text-anchor", tick.angle > Math.PI ? "end" : null, 0)}>${escape(formatValue(tick.value))}</text></g>`;
    })}</g></g>`;
  })}</g><g class="${"ribbons"}" style="${"fill-opacity:0.4;"}">${each(chords, (chord, i) => {
    return `<path${add_attribute("fill", colors[chord.source.index], 0)} class="${"ribbon"}"${add_attribute("d", ribbonGen(chord), 0)}></path>`;
  })}</g></svg>`;
});
function goldsteinPrice(x, y) {
  return (1 + Math.pow(x + y + 1, 2) * (19 - 14 * x + 3 * x * x - 14 * y + 6 * x * x + 3 * y * y)) * (30 + Math.pow(2 * x - 3 * y, 2) * (18 - 32 * x + 12 * x * x + 48 * y - 36 * x * y + 27 * y * y));
}
const n = 256, m = 256, data$2 = new Array(n * m);
for (let j = 0.5, k = 0; j < m; ++j) {
  for (let i = 0.5; i < n; ++i, ++k) {
    data$2[k] = goldsteinPrice(i / n * 4 - 2, 1 - j / m * 3);
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
  contours = contourGen(data$2);
  color = d3.scaleSequentialLog(d3.extent(thresholds), d3.interpolateMagma);
  return `<svg${add_attribute("width", width$a, 0)}${add_attribute("height", height$a, 0)}>${each(contours, (contour) => {
    return `<path${add_attribute("fill", color(contour.value), 0)}${add_attribute("d", geoGen(contour), 0)}></path>`;
  })}</svg>`;
});
var DragSimple_svelte_svelte_type_style_lang = "";
const css$r = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.frame.svelte-1ju53ht.svelte-1ju53ht{width:300px;height:300px;position:relative;border:1px solid black;background-color:pink}.frame.svelte-1ju53ht .draggable.svelte-1ju53ht{padding:20px;border:1px solid black;position:absolute;user-select:none;cursor:move;background-color:white}",
  map: null
};
const DragSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let left = 50;
  let top = 50;
  $$result.css.add(css$r);
  return `<div class="${"frame svelte-1ju53ht"}"><div style="${"left: " + escape(left) + "px; top: " + escape(top) + "px;"}" class="${"draggable svelte-1ju53ht"}">Drag me
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
var ForceSimple_svelte_svelte_type_style_lang = "";
const css$q = {
  code: ".points.svelte-g05kkw{margin:0 auto}",
  map: null
};
let width$9 = 300;
let height$9 = 300;
const ForceSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nodes;
  const colourScale = d3.scaleOrdinal(d3.schemeCategory10);
  $$result.css.add(css$q);
  nodes = [].concat(d3.range(88).map(function() {
    return { r: d3.randomInt(5, 10)() };
  }));
  return `<svg${add_attribute("width", width$9, 0)}${add_attribute("height", height$9, 0)}><g class="${"points svelte-g05kkw"}">${each(nodes, (point, i) => {
    return `<circle class="${"node"}"${add_attribute("r", point.r, 0)}${add_attribute("fill", colourScale(i), 0)}${add_attribute("cx", point.x, 0)}${add_attribute("cy", point.y, 0)}></circle>`;
  })}</g></svg>`;
});
let width$8 = 500;
let height$8 = 450;
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
const css$p = {
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
  let height2 = 400;
  const colourScale = d32.scaleOrdinal(d32.schemeCategory10);
  let transform = d32.zoomIdentity;
  $$result.css.add(css$p);
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
let margin$7 = 20;
const PolygonBasic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xScale;
  let yScale;
  let hull;
  let scaledHull;
  let data2 = [[210, 90], [110, 400], [420, 400], [490, 250]];
  xScale = d3.scaleLinear().domain([0, 500]).range([0, width$7 - 2 * margin$7]);
  yScale = d3.scaleLinear().domain([0, 500]).range([height$7 - 2 * margin$7, 0]);
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
let margin$6 = 20;
const PolygonPlus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xScale;
  let yScale;
  let hull;
  let scaledHull;
  let centroid;
  let data2 = [[210, 90], [110, 400], [420, 400], [490, 250]];
  let testPoints = [[200, 350], [50, 50]];
  xScale = d3.scaleLinear().domain([0, 500]).range([0, width$6 - 2 * margin$6]);
  yScale = d3.scaleLinear().domain([0, 500]).range([height$6 - 2 * margin$6, 0]);
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
  const arcGen2 = d3.arc();
  arcPath = arcGen2({
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
  let area2;
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
  area2 = areaGen(data2);
  return `<svg width="${"400"}" height="${"300"}"><path${add_attribute("d", area2, 0)} fill="${"pink"}" stroke="${"black"}"></path></svg>`;
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
  let arcs2;
  let pies2;
  let data2 = [2, 3, 5, 8, 13, 21];
  const arcGen2 = d3.arc();
  console.log("piesme", pies2);
  arcs2 = d3.pie()(data2);
  pies2 = arcs2.map((arc) => {
    let input = {
      innerRadius: 10,
      outerRadius: 100,
      startAngle: arc.startAngle,
      endAngle: arc.endAngle
    };
    return arcGen2(input);
  });
  return `
<svg width="${"400"}" height="${"300"}">${each(pies2, (pie, i) => {
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
let margin$5 = 40;
const ShapeStack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let series;
  let yScale;
  let xScale;
  let pinXAxis, pinYAxis;
  let keys = ["apples", "bananas", "cherries", "dates"];
  const stackGen = d3.stack().keys(keys).order(d3.stackOrderNone).offset(d3.stackOffsetNone);
  series = stackGen(fruitData);
  yScale = d3.scaleLinear().domain([0, 7500]).range([height$5 - 2 * margin$5, 0]);
  xScale = d3.scaleBand().domain(["TP1", "TP2", "TP3", "TP4"]).range([0, width$5 - margin$5 * 2]).padding([0.2]);
  d3.axisBottom(xScale).ticks(width$5 / 60);
  d3.axisLeft(yScale).ticks(width$5 / 60);
  return `<svg${add_attribute("width", width$5, 0)}${add_attribute("height", height$5, 0)}><g class="${"everything"}" style="${"transform:translate(" + escape(margin$5) + "px,0)"}"><g class="${"axis axis--x"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"axis axis--y"}"${add_attribute("this", pinYAxis, 0)}></g><g class="${"bars"}" style="${"transform:translate(0," + escape(margin$5) + "px"}">${each(series, (fruit_type, f) => {
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
let margin$4 = 30;
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
  treeGen = d3.tree().size([width$4 - 2 * margin$4, 100]);
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
let margin$3 = 30;
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
  treeGen = d3.cluster().size([width$3 - 2 * margin$3, 50]);
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
let margin$2 = 30;
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
  treeGen = d3.cluster().size([width$2 - 2 * margin$2, radius]);
  tree = treeGen(root);
  lineGen = d3.lineRadial().angle((d) => d.x * Math.PI / 180).radius((d) => d.y);
  return `<svg${add_attribute("width", width$2, 0)}${add_attribute("height", height$2, 0)}><g class="${"everything"}" transform="${"translate(290,125)"}">${each(tree.links(), (link) => {
    return `<path${add_attribute("d", lineGen([link.target, link.source]), 0)} stroke="${"black"}"></path>`;
  })}${each(tree.descendants(), (d) => {
    return `<circle${add_attribute("cx", 0, 0)}${add_attribute("cy", d.y, 0)}${add_attribute("r", 10, 0)} fill="${"lightblue"}" transform="${"rotate(" + escape(d.x + 180) + ",0,0)"}"></circle>`;
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
const css$o = {
  code: "svg.svelte-162mq73{z-index:2;position:relative}",
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
  $$result.css.add(css$o);
  data2 = getData();
  d3.zoom().scaleExtent([1, 5]).translateExtent([[0, 0], [width, height]]).on("zoom", handleZoom);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} class="${"svelte-162mq73"}"${add_attribute("this", bindInitZoom, 0)}><g class="${"points"}"${add_attribute("this", bindHandleZoom, 0)}><text${add_attribute("x", width / 2, 0)}${add_attribute("y", height / 2, 0)}>Zoom Here!</text>${each(data2, (d, i) => {
    return `<circle${add_attribute("cx", d.x, 0)}${add_attribute("cy", d.y, 0)} r="${"4"}"${add_attribute("fill", d3.interpolateBlues(30 / (i + 1)), 0)}></circle>`;
  })}</g></svg>`;
});
let d3CMS = [
  {
    primary_key: "d3-axis",
    published: "2022-03-13",
    post_title: "Implementing D3 Axis in Svelte",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["d3", "axis", "svelte", "log", "labels", "linear"],
    intro_text: "d3-axis provides a set of tools to create and customize graph axes. This article will describe how to create a number of the most useful ones, specifically in Svelte. Each axis type is similar but implemented slightly differently. The code for each is provided.<br/><br/> There are a variety of different ways to approach the D3/ Svelte integration, my method shown favours describing as much of the SVG elements as possible in Svelte HTML/ SVG markup (as opposed to creating elements programmatically with D3 code). This keeps code really clean and readable and makes it easier to apply Svelte event handlers or custom styles. ",
    components: [
      {
        id: "AxisSimple",
        title: "Basic axis - scaleLinear()",
        notes: "<span class='test'>d3.scaleLinear()</span>is the most basic axis type - it allows you to create linearly incremented axes. In Svelte, I make use of the bind:this={} syntax to select an empty SVG group element and call the axis generator function. See the full code for details.",
        component: AxisSimple
      },
      {
        id: "AxisLog",
        title: "Log scale - scaleLog()",
        notes: "To create a logarithmic axis, we need to use the <span>scaleLog()</span> generator (see code block below for full example). The rest of the implementation in Svelte is the same as the <span class='test'>d3.scaleLinear()</span> example above. <br/><br/> I have also added a <span class='test'>tickFormat()</span> to make it easy for the reader to see that a logarithmic scale is being used.",
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
    post_title: "D3-brush techniques in Svelte",
    thumbnail: "/images/thumbnails/brush.png",
    keywords: ["d3", "brush", "svelte"],
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
    post_title: "D3-Chord in Svelte ",
    thumbnail: "/images/thumbnails/chord.png",
    keywords: ["d3", "chord", "svelte"],
    intro_text: "The d3-chord api allows you to generate chord geometries. In this article, I'll describe the method I use to generate these kind of geometries, specifically within a Svelte environment.",
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
    primary_key: "d3-contour",
    published: "2022-03-28",
    post_title: "Contours with D3 and Svelte",
    thumbnail: "/images/thumbnails/contour.png",
    keywords: ["d3", "contour", "svelte", "topography"],
    intro_text: "Contours are an interesting visual type - used typically for maps, but can also be used to display continuous functions by sampling. In this article, we provide an example of how to use d3-contour within Svelte.",
    components: [
      {
        id: "ContourBasic",
        title: "Contours (basic)",
        notes: "The classic example (found in the docs and this  Basic example) is using contours to visualize the <a href='https://en.wikipedia.org/wiki/Test_functions_for_optimization' >Goldstein-Price function</a>. Here's how I implemented it in Svelte. <br/><br/>The code is relatively straightforward, once you have your data in the required format. The contour generator expects an array of length n by m where [n, m] is the contour generator's size. <br/><br/> The output is then typically passed to d3.geoPath() to convert the projection into SVG paths.",
        component: ContourBasic
      }
    ]
  },
  {
    primary_key: "d3-drag",
    published: "2022-03-28",
    post_title: "Drag interactions in Svelte with d3-drag",
    thumbnail: "/images/thumbnails/drag.png",
    keywords: ["d3", "svelte", "drag", "interaction"],
    intro_text: "Drag and drop is a pretty common use case, especially in interactive journalism! On a Svelte app, you could potentially implement drag and drop with HTML, with Svelte event hooks or with D3-drag. <br/><br/> This article looks at different scenarios and suggests when to use which technology. ",
    components: [
      {
        id: "DragSimple",
        title: "Simple Drag (mouseup/down only)",
        notes: "Firstly, I've implemented a simple drag functionality using mouseup and mousedown (from the HTML Drag and Drop Api, hence this interaction will not work on touch devices).",
        component: DragSimple
      },
      {
        id: "DragD3",
        title: "Drag with d3-drag",
        notes: "Next, I looked at implementing dragging functionality with d3-drag. The code is quite straightforward. I bounded a set of circles to the DOM from the within the onMount() hook (because I'm using SvelteKit/SSR). I then called the dragHandler() on the circles to activate dragging.<br/><br/> This serves a purpose and demonstrated that it is possible to implement drag using d3.js in Svelte. <br/><br/>",
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
    primary_key: "d3-force",
    published: "2022-04-01",
    post_title: "D3 Force Simulation and Svelte",
    thumbnail: "/images/thumbnails/force.png",
    keywords: ["d3", "svelte", "force", "collide", "simulation", "radial"],
    intro_text: "Trying to implement the d3-force in Svelte caused me the most problems of all the d3 libraries! It wasn't until I stumbled upon <a href='https://github.com/happybeing/d3-fdg-svelte'>this repo</a> on GitHub that it all clicked into place, so thanks @happybear! As a result the methods and code I use here borrow heavily from his great work.<br/><br/> Once you understand how to call the simulation, things become clear and you implement any force simulations you can see in the docs.",
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
    primary_key: "d3-geo",
    published: "2022-03-30",
    post_title: "Visualizing geo data with D3 and Svelte",
    thumbnail: "/images/thumbnails/geo.png",
    keywords: ["d3", "geo", "geoJSON", "svelte"],
    intro_text: "This article gives an example of the creation of svg path geometry with geoJSON with the d3-geo module. I then render the result in a Svelte app. <br/><br/> The d3-geo library is vast and I'll only be starting with a simple example, with the aim to expand on it over time. <br/><br/> This data use in on this page is from <a href='https://datahub.io/examples/geojson-tutorial'>DataHub</a>.",
    components: [
      {
        id: "GeoPath",
        title: "Simple GeoPath",
        notes: "In the simplest implementation of d3.geoPath(), a geoPath generator is created and fed with GeoJSON data. This outputs an svg path description that can be given to an SVG path element.",
        component: GeoPath
      }
    ]
  },
  {
    primary_key: "d3-hierarchy",
    published: "2022-03-30",
    post_title: "Visualizing hierarchies with D3 and Svelte",
    thumbnail: "/images/thumbnails/hierarchy.png",
    keywords: [
      "d3",
      "hierarchy",
      "svelte",
      "tree",
      "cluster",
      "radial",
      "pack"
    ],
    intro_text: "We can use d3 to generate lots of visual layouts from hierarchical data. Typically the process is: 1) construct a hierarchical model from the data, 2) feed the model into a layout generator such as a circle-packing generator. This gives us the 'instructions' for what to render where with SVG elements. <br/><br/> In this article, we'll look at the basic layout types and look at how we can render them specifically with Svelte. This is not a detailed tutorial on how to customize hierarchical layouts with D3 - for that I recommend the <a href='https://github.com/d3/d3-hierarchy'>D3 docs</a>. <br/><br/> Much of the data/ examples with this section was adapted from <a href='http://using-d3js.com/06_01_hierarchal.html'>using-d3js.com</a> - a great resource for learning more about d3 modules.",
    components: [
      {
        id: "HierarchyTree",
        title: "Tree Layout ",
        notes: "If you inspect the code for this first example, you can see the process unfold. First we construction the hierarchical model with d3.hierarchy(). We then feed this hierarchical model into a tree layout generator.<br/><br/>This gives us a handy set of instructions to plot our tree layout. ",
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
        notes: "Once you understand how the preceding visuals are built, the circle-packing is a simple extension - it follows the same pattern as described above. See the code for more details. ",
        component: HierarchyPack
      }
    ]
  },
  {
    primary_key: "d3-polygon",
    published: "2022-03-29",
    post_title: "Polygons with D3 and Svelte",
    thumbnail: "/images/thumbnails/polygon.png",
    keywords: ["d3", "polygon"],
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
    primary_key: "d3-shape",
    published: "2022-03-29",
    post_title: "D3 Shapes with Svelte",
    thumbnail: "/images/thumbnails/shapes.png",
    keywords: ["d3", "svelte", "arc", "pie", "line", "area", "links", "stack"],
    intro_text: "D3 Shape is really at the core of building data visuals. With it, you can produce arcs, pies, lines, areas, curves, links, and stacks. In this article, I'll make one of each of these shapes, specifically in a Svelte environment. <br/><br/>Note: the examples I show are intended to show just the basics of how to render all the standard shape types in a Svelte app. This is not meant to be a D3 tutorial, as such. Once you know how to get your D3 shape into Svelte, the possibilities are then endless, and you can add more complexity, typically to shape generator functions.",
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
        notes: "Area charts are similar to line charts, but generate a fillable area down to the X-axis (by default). We can generate them with D3 and visualize them in Svelte in the same way. ",
        component: ShapeArea
      },
      {
        id: "ShapeLinks",
        title: "D3 Links",
        notes: "The link generator can be useful for a variety of network-type diagrams, hierarchical charts and general relationship diagramming. The line generator expects an object with source and target keys to define the mapping (see code).<br/><br/> You can customize the style of the link between nodes in lots of different way. Check out the <a href='https://github.com/d3/d3-shape#line'>D3 docs</a> for inspiration. ",
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
    primary_key: "d3-zoom",
    published: "2022-03-31",
    post_title: "Zooming with D3 and Svelte",
    thumbnail: "/images/thumbnails/zoom.png",
    keywords: ["d3", "zoom"],
    intro_text: "Zooming is one of the most difficult aspects of using D3 with a front-end framework like Svelte, as it deals with UI interaction, the updating of scales and (sometimes) the redrawing of geometry dynamically. <br/><br/>We begin with a really simple example of Zooming with D3 and Svelte and hope to add more advanced configurations in the future. ",
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
const Two = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button>Split</button>
<button>Unite</button>
<div id="${"container"}"></div>`;
});
var index_svelte_svelte_type_style_lang$6 = "";
const css$n = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-g6rm6s{max-width:600px;margin:0 auto}.full-width.svelte-g6rm6s{width:90vw;position:relative;left:65%;right:50%;margin-left:-50vw;margin-right:-50vw}",
  map: null
};
const ForceAnimations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$n);
  return `<div class="${"wrapper svelte-g6rm6s"}"><h2>Motivation</h2>
  <p>This piece is inspired by two pieces: 1) the <a href="${"https://stateofapis.com/"}">State of the APIs</a>
    by Amelia Wattenberger (specifically the first bit on the demographics of the
    survey participants), and 2) this
    <a href="${"https://pudding.cool/2017/03/hamilton/index.html"}">Hamilton piece</a> on Pudding.cool by Shirley Wu.
  </p>
  <p>Both pieces feature (what I assume to be) <a rel="${"internal"}" href="${"/d3/api/d3-force"}">D3 force simulations</a> and animated them to give life to the pieces. This is a technique I wanted
    to learn, so this article is my attempt!
  </p>
  <p>I also wanted to explore how I can combine the Svelte animation toolkit with
    D3 force simulations. So let&#39;s get started!
  </p>

  <h2>The limits of just d3-force</h2>
  <p>Before getting stuck into more fancy stuff, I wanted to explore what was
    possible just with <a rel="${"internal"}" href="${"/d3/api/d3-force"}">d3-force</a>.
  </p>
  <h2>First</h2>
  <div class="${"full-width svelte-g6rm6s"}"></div>

  <h2>Second</h2>
  <div class="${"full-width svelte-g6rm6s"}">${validate_component(Two, "Two").$$render($$result, {}, {}, {})}</div>
</div>`;
});
let d3Charts = [
  {
    primary_key: "ForceAnimations",
    published: "",
    post_title: "Animating D3 Forces with Svelte",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["d3", "svelte", "force", "animation"],
    intro_text: "How to make particles dance around the page with Svelte and D3.",
    component: ForceAnimations
  }
];
const Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes?.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps?.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0)
      value = maxIndex;
    else
      value = 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index])
      intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0)
    $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
var ScrollyWrapper_svelte_svelte_type_style_lang = "";
const css$m = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.chart.svelte-11z2787.svelte-11z2787{position:sticky;position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;margin-right:0px !important;padding:10px;background-color:white !important;width:80vw;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;min-width:300px;top:30vh;height:50vh}.text-wrapper.svelte-11z2787.svelte-11z2787{margin-right:0;padding-right:0;min-width:300px !important;width:70vw;position:relative;z-index:2;padding-bottom:100px}.text-wrapper.svelte-11z2787 .text.svelte-11z2787{margin:60vh 0 !important;padding:20px;border:none;background-color:rgba(255, 255, 255, 0.6)}@media all and (min-width: 700px){.chart.svelte-11z2787.svelte-11z2787{height:80vh;top:20px;width:600px}.chart.left.svelte-11z2787.svelte-11z2787{left:10%}.chart.center.svelte-11z2787.svelte-11z2787{margin:0 auto !important;left:25%}.chart.right.svelte-11z2787.svelte-11z2787{left:90%}.text-wrapper.svelte-11z2787.svelte-11z2787{margin:0 auto;width:35vw}.text-wrapper.left.svelte-11z2787.svelte-11z2787{margin:0}.text-wrapper.center.svelte-11z2787.svelte-11z2787{margin:0 auto !important}.text-wrapper.right.svelte-11z2787.svelte-11z2787{left:55%;margin:0}.text-wrapper.svelte-11z2787 .text.svelte-11z2787{background-color:white;border:1px gray solid}}.chart-wrap.svelte-11z2787.svelte-11z2787{margin-bottom:100px}.full-width.svelte-11z2787.svelte-11z2787{width:90vw;position:relative}",
  map: null
};
const ScrollyWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let { data: data2 } = $$props;
  let { snap = false } = $$props;
  let { fixedComp } = $$props;
  let { fixPosition } = $$props;
  let value = 0;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.snap === void 0 && $$bindings.snap && snap !== void 0)
    $$bindings.snap(snap);
  if ($$props.fixedComp === void 0 && $$bindings.fixedComp && fixedComp !== void 0)
    $$bindings.fixedComp(fixedComp);
  if ($$props.fixPosition === void 0 && $$bindings.fixPosition && fixPosition !== void 0)
    $$bindings.fixPosition(fixPosition);
  $$result.css.add(css$m);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    props = { value };
    $$rendered = `${snap ? `<h2>You can navigate this next section with your keyboard.</h2>` : ``}

<div class="${"full-width chart-wrap svelte-11z2787"}"><div class="${[
      "chart svelte-11z2787",
      (fixPosition === "left" ? "left" : "") + " " + (fixPosition === "center" ? "center" : "") + " " + (fixPosition === "right" ? "right" : "")
    ].join(" ").trim()}">
    ${validate_component(fixedComp || missing_component, "svelte:component").$$render($$result, Object.assign(props), {}, {})}</div>
  <div class="${[
      "text-wrapper svelte-11z2787",
      (fixPosition === "right" ? "left" : "") + " " + (fixPosition === "center" ? "center" : "") + " " + (fixPosition === "left" ? "right" : "")
    ].join(" ").trim()}">${validate_component(Scrolly, "Scrolly").$$render($$result, { value }, {
      value: ($$value) => {
        value = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${each(data2, (d, i) => {
          return `<div class="${["text step svelte-11z2787", value === i ? "active" : ""].join(" ").trim()}"><!-- HTML_TAG_START -->${d}<!-- HTML_TAG_END -->
        </div>`;
        })}`;
      }
    })}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
function backInOut(t) {
  const s = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function backIn(t) {
  const s = 1.70158;
  return t * t * ((s + 1) * t - s);
}
function backOut(t) {
  const s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1;
}
function bounceOut(t) {
  const a = 4 / 11;
  const b = 8 / 11;
  const c = 9 / 10;
  const ca = 4356 / 361;
  const cb = 35442 / 1805;
  const cc = 16061 / 1805;
  const t2 = t * t;
  return t < a ? 7.5625 * t2 : t < b ? 9.075 * t2 - 9.9 * t + 3.4 : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
}
function bounceInOut(t) {
  return t < 0.5 ? 0.5 * (1 - bounceOut(1 - t * 2)) : 0.5 * bounceOut(t * 2 - 1) + 0.5;
}
function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}
function circInOut(t) {
  if ((t *= 2) < 1)
    return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function circIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function circOut(t) {
  return Math.sqrt(1 - --t * t);
}
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function elasticInOut(t) {
  return t < 0.5 ? 0.5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : 0.5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1;
}
function elasticIn(t) {
  return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1));
}
function elasticOut(t) {
  return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1;
}
function expoInOut(t) {
  return t === 0 || t === 1 ? t : t < 0.5 ? 0.5 * Math.pow(2, 20 * t - 10) : -0.5 * Math.pow(2, 10 - t * 20) + 1;
}
function expoIn(t) {
  return t === 0 ? t : Math.pow(2, 10 * (t - 1));
}
function expoOut(t) {
  return t === 1 ? t : 1 - Math.pow(2, -10 * t);
}
function quadInOut(t) {
  t /= 0.5;
  if (t < 1)
    return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}
function quadIn(t) {
  return t * t;
}
function quadOut(t) {
  return -t * (t - 2);
}
function quartInOut(t) {
  return t < 0.5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
}
function quartIn(t) {
  return Math.pow(t, 4);
}
function quartOut(t) {
  return Math.pow(t - 1, 3) * (1 - t) + 1;
}
function quintInOut(t) {
  if ((t *= 2) < 1)
    return 0.5 * t * t * t * t * t;
  return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function quintIn(t) {
  return t * t * t * t * t;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}
var easing = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  backIn,
  backInOut,
  backOut,
  bounceIn,
  bounceInOut,
  bounceOut,
  circIn,
  circInOut,
  circOut,
  cubicIn,
  cubicInOut,
  cubicOut,
  elasticIn,
  elasticInOut,
  elasticOut,
  expoIn,
  expoInOut,
  expoOut,
  quadIn,
  quadInOut,
  quadOut,
  quartIn,
  quartInOut,
  quartOut,
  quintIn,
  quintInOut,
  quintOut,
  sineIn,
  sineInOut,
  sineOut,
  linear: identity
}, Symbol.toStringTag, { value: "Module" }));
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type2 = typeof a;
  if (type2 !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type2 === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type2 === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type2} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing: easing2 = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing2(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
let margin$1 = 30;
let svg_height$1 = 300;
let svg_width$1 = 300;
const Scrollytelling_Demo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let x;
  let y;
  let $progress, $$unsubscribe_progress;
  let { value } = $$props;
  let pinXAxis;
  let data2 = [
    { 0: [700, 39, 340, 600] },
    { 1: [200, 400, 600, 800] },
    { 2: [300, 200, 900, 20] },
    { 3: [300, 200, 900, 20] },
    { 4: [300, 200, 900, 20] },
    { 5: [300, 200, 900, 20] },
    { 6: [300, 200, 900, 20] }
  ];
  let cats = ["Apple", "Banana", "Cherry", "Donut"];
  let colors2 = ["#003b49", "#d3273e", "#dc582a", "#5d3754"];
  const progress = tweened(data2.find((d) => d[value])[value], { duration: 400, easing: cubicOut });
  $$unsubscribe_progress = subscribe(progress, (value2) => $progress = value2);
  const angleProgress = tweened(0, { duration: 400, easing: cubicOut });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  height2 = svg_height$1 - margin$1 * 2;
  {
    progress.set(data2.find((d) => d[value])[value]);
  }
  {
    angleProgress.set(value > 2 ? 90 : 0);
  }
  x = d3.scaleBand().domain(cats).range([0, height2]).padding([0.1]);
  y = d3.scaleLinear().domain([0, 1e3]).range([height2, 0]);
  $$unsubscribe_progress();
  return `<p>Monthly sales of Fruit in <span>${escape(value == 0 ? "Jan-2020" : value === 1 ? "Feb-2020" : "Mar-2020")}</span></p>

<svg${add_attribute("width", svg_width$1, 0)}${add_attribute("height", svg_height$1, 0)}><g class="${["xAxis", value > 2 ? "titled" : ""].join(" ").trim()}" transform="${"translate(" + escape(x.bandwidth()) + "," + escape(height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g>${each($progress, (bar, i) => {
    return `<rect${add_attribute("x", x.bandwidth() + x(cats[i]), 0)}${add_attribute("y", height2 - y(bar), 0)}${add_attribute("height", y(bar), 0)}${add_attribute("width", x.bandwidth(), 0)} class="${"bar"}"${add_attribute("fill", colors2[i], 0)}${add_attribute("fill-opacity", value > 2 ? i + 3 == value ? 1 : 0.2 : 1, 0)} stroke-width="${"2"}"${add_attribute("stroke", value > 2 ? i + 3 == value ? "yellow" : "transparent" : "transparent", 0)}></rect>`;
  })}</svg>`;
});
const data$1 = [
  {
    attention: [
      "VISUALIZING DATA CHANGES: we start with a simple bar chart (minimal styling on this one to focus on the functionality!). We're visualizing the data for Jan-2020 currently, but what if we next wanted to show the data for Feb-2020? ",
      "The animation is triggered by the Scrolly 'value'. On the data change, a simple Svelte tween tweens between the old and the new values (for each bar).",
      "To bring a closer connection between the bars and the textual descriptions scrolling past, you can add some custom styling to the categories. For example, we can see the <span style='background-color:#5d3754;padding:2px 5px;border-radius:5px; color: white'>Donut</span> sales here far outweighed those of the humble <span style='background-color:#dc582a;padding:2px 5px;border-radius:5px; color: white' class='cat cherry'>cherry</span>.",
      "We can also go one step further to really focus on just one of the bars and explain in in the must greater depth. ",
      "This is achieved through use of the ternary operator on the Rect styling. "
    ]
  },
  {
    behaviour: [
      "This is number one",
      "This is number one",
      "This is number one",
      "This is number one",
      "This is number one",
      "This is number one"
    ]
  }
];
var index_svelte_svelte_type_style_lang$5 = "";
const css$l = {
  code: ".wrapper.svelte-6ch1q8{max-width:600px;margin:0 auto}",
  map: null
};
const Scrollytelling = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attentionData;
  $$result.css.add(css$l);
  attentionData = data$1.find((d) => d.attention)["attention"];
  data$1.find((d) => d.behaviour)["behaviour"];
  return `<div class="${"wrapper svelte-6ch1q8"}"><h2>Motivation</h2>
  <p>Scrollytelling is a go-to technique for visual journalists and so let&#39;s
    learn to implement it properly, using Svelte!
  </p>
  <p>By scrollytelling, I mean an interactive article that updates automatically
    as the user scrolls down (or across?) the page. You can see an example from
    my previous article on <a rel="${"internal"}" href="${"/svelte/animated-transitions"}">Animated Transitions between Chart Types</a>.
  </p>

  <h2>The good news</h2>
  <p>Good news, part 1: Implmenting Scrollytelling in Svelte is a piece of cake
    (or Pudding?), thanks to the team at <a rel="${"external"}" href="${"https://pudding.cool"}">Pudding.cool</a>
    who have made a simple implementation available through their
    <a rel="${"external"}" href="${"https://github.com/the-pudding/svelte-starter/blob/main/src/components/helpers/Scrolly.svelte"}">Svelte project starter kit</a>. Thanks Pudding team!
  </p>
  <p>Good news part 2: Connor Rothschild has already posted <a rel="${"external"}" href="${"https://www.connorrothschild.com/post/svelte-scrollytelling"}">this great post</a> detailing how to implement the Pudding Scrolly component.
  </p>
  <p>If you haven&#39;t already, now is probably a good time to read those two
    resources to get a good understanding of how it works. In this article, I
    will instead be providing many creative examples of how to extend the basic
    usage of the Scrolly component. Let&#39;s dive into it!
  </p>

  <h2>First Demo - data changes and focusing</h2>
  <p></p>
  ${validate_component(ScrollyWrapper, "ScrollyWrapper").$$render($$result, {
    fixPosition: "left",
    data: attentionData,
    fixedComp: Scrollytelling_Demo
  }, {}, {})}
  <h2>Future additions</h2>
  <p>I hope you found a few of those techniques useful. I will now publish the
    article, but in the future I hope to add the following features: zooming
    around a map, customing scroll behaviour (e.g. scroll snap, or horizontal
    scrolling), and much more on accessible scrollytelling.
  </p>
  
  
</div>`;
});
var Tabs_svelte_svelte_type_style_lang = "";
const css$k = {
  code: ".box.svelte-bm9546.svelte-bm9546{margin-bottom:10px;max-width:90%;min-height:300px;background-color:white;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;padding:10px;border:1px solid #dee2e6;border-radius:0 0 0.5rem 0.5rem;border-top:0}ul.svelte-bm9546.svelte-bm9546{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;border-bottom:1px solid #dee2e6}li.svelte-bm9546.svelte-bm9546{margin-bottom:-1px}span.svelte-bm9546.svelte-bm9546{border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;display:block;padding:0.5rem 1rem;cursor:pointer}span.svelte-bm9546.svelte-bm9546:hover{border-color:#e9ecef #e9ecef #dee2e6}li.active.svelte-bm9546>span.svelte-bm9546{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}",
  map: null
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [{ label: "Visual", value: 1 }, { label: "Code", value: 2 }];
  let activeTabValue = 1;
  $$result.css.add(css$k);
  return `<ul class="${"svelte-bm9546"}">${each(items, (item) => {
    return `<li class="${escape(null_to_empty(activeTabValue === item.value ? "active" : "")) + " svelte-bm9546"}"><span class="${"svelte-bm9546"}">${escape(item.label)}</span>
    </li>`;
  })}</ul>
${each(items, (item) => {
    return `${activeTabValue == item.value ? `<div class="${"box svelte-bm9546"}">${`${slots.tab1 ? slots.tab1({}) : ``}`}
      

      
    </div>` : ``}`;
  })}`;
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function crossfade(_a) {
  var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from, node, params) {
    const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing: easing2 = cubicOut } = assign(assign({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing: easing2,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect()
      });
      return () => {
        if (counterparts.has(params.key)) {
          const { rect } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(rect, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true)
  ];
}
var Highlight_svelte_svelte_type_style_lang = "";
var HighlightAuto_svelte_svelte_type_style_lang = "";
var HighlightSvelte_svelte_svelte_type_style_lang = "";
const css$1$1 = {
  code: "pre.langtag.svelte-1xjucv4{position:relative}pre.langtag.svelte-1xjucv4::after{content:attr(data-language);position:absolute;top:0;right:0;padding:1em;display:flex;align-items:center;justify-content:center;background:inherit;color:inherit;background:var(--hljs-background);color:var(--hljs-foreground);border-radius:var(--hljs-radius)}",
  map: null
};
const HighlightSvelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let highlighted;
  let $$restProps = compute_rest_props($$props, ["code", "langtag"]);
  let { code = void 0 } = $$props;
  let { langtag = false } = $$props;
  createEventDispatcher();
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("css", css$w);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  $$result.css.add(css$1$1);
  highlighted = hljs.highlightAuto(code).value;
  return `${slots.default ? slots.default({ highlighted }) : `
  
  <pre${spread([{ "data-language": "svelte" }, escape_object($$restProps)], {
    classes: (langtag ? "langtag" : "") + " svelte-1xjucv4"
  })}><code class="${"hljs"}"><!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END --></code></pre>
`}`;
});
const github = `<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}</style>`;
var github$1 = github;
var Copy2Clipboard_svelte_svelte_type_style_lang = "";
const css$j = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.donation.svelte-bdkflq{z-index:2;padding-left:20px}button.svelte-bdkflq{z-index:20;float:left;border:1px solid var(--c-gray);align-self:center;width:200px;box-shadow:2px -2px 0 0 var(--c-green);border:none;background-color:var(--c-white);padding:10px 20px;opacity:0.9;margin-right:20px;transition:all 0.5s;cursor:pointer}button.svelte-bdkflq:hover{opacity:1;box-shadow:4px -4px 0 0 var(--c-green)}",
  map: null
};
const Copy2Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { string = false } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.string === void 0 && $$bindings.string && string !== void 0)
    $$bindings.string(string);
  $$result.css.add(css$j);
  return `<button class="${"svelte-bdkflq"}">${escape("Copy to Clipboard")}</button>
<div style="${"min-height:25px"}">${``}
</div>`;
});
const CodeVisual = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { compid } = $$props;
  let { route } = $$props;
  let promise = Promise.resolve([]);
  if ($$props.compid === void 0 && $$bindings.compid && compid !== void 0)
    $$bindings.compid(compid);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
  Loading ...
`;
    }
    return function(code) {
      return `
  ${validate_component(Copy2Clipboard, "Copy2Clipboard").$$render($$result, { content: code.content }, {}, {})}
  <div>${validate_component(HighlightSvelte, "HighlightSvelte").$$render($$result, { code: atob(code.content) }, {}, {})}</div>
  ${validate_component(Copy2Clipboard, "Copy2Clipboard").$$render($$result, { content: code.content }, {}, {})}
`;
    }(__value);
  }(promise)}

${$$result.head += `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`, ""}`;
});
var FormattedExample_svelte_svelte_type_style_lang = "";
const css$i = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.comp-description.svelte-se3uwo span{color:blue;font-style:italic;padding:3px 5px;border-radius:10px;font-family:monospace}.svg-container.svelte-se3uwo{overflow-y:scroll}.svg-container.svelte-se3uwo::-webkit-scrollbar{width:0.5em;height:0.5em}.svg-container.svelte-se3uwo::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.1);border-radius:3px}.svg-container.svelte-se3uwo::-webkit-scrollbar-thumb:hover{background:rgba(255, 255, 255, 0.2)}",
  map: null
};
const FormattedExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comp } = $$props;
  let { route } = $$props;
  if ($$props.comp === void 0 && $$bindings.comp && comp !== void 0)
    $$bindings.comp(comp);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  $$result.css.add(css$i);
  return `<div${add_attribute("id", comp.id, 0)} class="${"container step"}"><h2 class="${"subheading"}"><!-- HTML_TAG_START -->${comp.title}<!-- HTML_TAG_END --></h2>
  <p class="${"comp-description svelte-se3uwo"}"><!-- HTML_TAG_START -->${comp.notes}<!-- HTML_TAG_END --></p>

  ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    tab2: () => {
      return `<div slot="${"tab2"}">${validate_component(CodeVisual, "CodeVisual").$$render($$result, { route, compid: comp.id }, {}, {})}</div>`;
    },
    tab1: () => {
      return `<div slot="${"tab1"}"><div class="${"svg-container svelte-se3uwo"}">${validate_component(comp.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })}
</div>`;
});
var index_svelte_svelte_type_style_lang$4 = "";
const css$h = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-13lgxt{max-width:600px;margin:0 auto}",
  map: null
};
const Flip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const content = cmsSvelte?.find((record) => record.primary_key == "Flip");
  console.log("content", content);
  ({
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.intro_text,
    u: "/svelte/flip",
    tags: content?.keywords.join()
  });
  $$result.css.add(css$h);
  return `<div class="${"wrapper svelte-13lgxt"}"><h2>Firstly, what is FLIP and how can we use it?</h2>
  <p>FLIP is an animation technique which allows us to smoothly animate between
    the X and Y positions of DOM elements as there position changes (normally as
    a result of filtering or sorting operations).
  </p>
  <p>It&#39;s an anagram; and if we remember the anagram it helps us understand how
    it works:
  </p>
  <ul><li>First: the initial state of an element,</li>
    <li>Last: the final state of an element (after some UI change),</li>
    <li>Invert: calculates the transformation required to get from initial to
      final state,
    </li>
    <li>Play: run the transformation animation(s).</li></ul>
  <h2>Using FLIP for visual storytelling</h2>
  <p>There are many articles about the fundamentals of how FLIP works in Svelte.
    The purpose of this article, however, is to think about some innovative uses
    of FLIP to help with visual storytelling.
  </p>
  <p>I&#39;ve made 3 example components that might inspire you to use FLIP for your
    next visual essay.
  </p>

  ${each(content.components, (ex) => {
    return `${validate_component(FormattedExample, "FormattedExample").$$render($$result, { comp: ex, route: "svelte/flip/" }, {}, {})}`;
  })}
</div>`;
});
var FlipGrid_svelte_svelte_type_style_lang = "";
const css$g = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.grid.svelte-zlatt1.svelte-zlatt1{display:grid;grid-template-columns:repeat(auto-fill, minmax(50px, 60px))}.grid.svelte-zlatt1 .card.svelte-zlatt1{border:1px solid black;height:50px;width:50px;margin:10px;padding-left:5px;padding-top:5px}",
  map: null
};
const FlipGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 }
  ];
  let color = d3.scaleSequential(d3.interpolatePuBuGn).domain([0, 10]);
  $$result.css.add(css$g);
  return `<button>Sort ${escape("9->0")}</button>
<button>Shuffle </button>

${images ? `<div class="${"grid svelte-zlatt1"}">
    ${each(images, (post, i) => {
    return `<div><div class="${"card  svelte-zlatt1"}" style="${"background-color: " + escape(color(post.id))}">${escape(post.id)}</div>
      </div>`;
  })}</div>` : ``}`;
});
var FlipEntryBars_svelte_svelte_type_style_lang = "";
const css$f = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-11itum8.svelte-11itum8{margin-right:15%}.intial-grid.svelte-11itum8.svelte-11itum8{display:grid;grid-template-columns:repeat(auto-fill, minmax(10px, 20px));gap:2px}.intial-grid.top.svelte-11itum8.svelte-11itum8{min-height:20px}.intial-grid.svelte-11itum8 .block.svelte-11itum8{width:20px;background-color:pink;margin:px;display:flex;height:20px;transition:all 1s}.intial-grid.svelte-11itum8 .block.lower.svelte-11itum8{position:absolute}.commentary.svelte-11itum8.svelte-11itum8{font-size:0.7rem;height:2.1rem;line-height:1rem}",
  map: null
};
const FlipEntryBars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  crossfade({});
  let commentary = {
    0: "'16 students were asked what their favourite fruit is, each square represents a student'",
    1: "Here is how they voted for either <span style='color:#8DB600'>apple</span>, <span style='color:#FFE135'>banana</span>, <span style='color:#D2042D'>cherry</span>, or <span style='color:#9F6D2E'>pear</span>.",
    2: "We can re-arrange the data to spot patterns, but would it be nicer in a chart?",
    3: "Smooth transition into the barchart"
  };
  let data2 = {
    blocks: [
      { id: 0, cat: "apple" },
      { id: 3, cat: "apple" },
      { id: 13, cat: "cherry" },
      { id: 4, cat: "apple" },
      { id: 5, cat: "banana" },
      { id: 6, cat: "pear" },
      { id: 12, cat: "cherry" },
      { id: 7, cat: "pear" },
      { id: 2, cat: "apple" },
      { id: 9, cat: "cherry" },
      { id: 10, cat: "cherry" },
      { id: 11, cat: "banana" },
      { id: 1, cat: "apple" },
      { id: 14, cat: "cherry" },
      { id: 8, cat: "pear" },
      { id: 15, cat: "cherry" }
    ],
    bars: []
  };
  let colors2 = {
    cherry: ["#D2042D", 50],
    apple: ["#8DB600", 100],
    banana: ["#FFE135", 150],
    pear: ["#9F6D2E", 200]
  };
  let stage = 0;
  $$result.css.add(css$f);
  return `<div class="${"wrapper svelte-11itum8"}"><button>Stage 0 of reveal </button>
  <button>Stage 1 </button>
  <button>Stage 2 </button>
  <button>Stage 3 </button>
  <button>Reset</button>

  <p class="${"commentary svelte-11itum8"}">Story (stage ${escape(stage)}): <!-- HTML_TAG_START -->${commentary[stage]}<!-- HTML_TAG_END --></p>
  <div class="${"intial-grid top  svelte-11itum8"}">${each(data2.blocks, (bar) => {
    return `<div class="${"block svelte-11itum8"}" style="${"background-color:" + escape("gray")}"></div>`;
  })}</div>

  <br><br>
  <div class="${"intial-grid lower  svelte-11itum8"}">${each(["apple", "banana", "cherry", "pear"], (category, j) => {
    return `${each(data2.bars.filter((d) => d.cat == category), (bar, i) => {
      return `<div style="${"transform:translate(" + escape(50 + j * 50) + "px," + escape(120 - i * 21) + "px);background-color:" + escape(colors2[bar.cat][0])}" class="${"block lower svelte-11itum8"}"></div>`;
    })}`;
  })}</div>
</div>`;
});
var FlipSortAxes_svelte_svelte_type_style_lang = "";
const css$e = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.axis-label.svelte-rhgjht{font-size:0.7rem}",
  map: null
};
let margin = 40;
let svg_height = 300;
let svg_width = 400;
const FlipSortAxes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height2;
  let width2;
  let categories;
  let x;
  let y;
  let pinXAxis, pinYAxis;
  let data2 = [
    {
      cat: "Apple",
      value: 50,
      color: "#8DB600"
    },
    {
      cat: "Banana",
      value: 100,
      color: "#FFE135"
    },
    {
      cat: "Cherry",
      value: 150,
      color: "#D2042D"
    },
    { cat: "Pear", value: 40, color: "#9F6D2E" }
  ];
  $$result.css.add(css$e);
  height2 = svg_height - margin * 2;
  width2 = svg_width - margin * 2;
  categories = data2.map(function(value) {
    return value.cat;
  });
  x = d3.scaleBand().domain(categories).range([0, width2]).padding([0.5]);
  y = d3.scaleLinear().domain([0, 200]).range([height2, 0]);
  {
    if (data2) {
      d3.select(pinXAxis).call(d3.axisBottom(x).ticks(width2 / 60));
      d3.select(pinYAxis).call(d3.axisLeft(y).ticks(height2 / 60));
    }
  }
  return `<button>Sort ${escape("Z->A")}</button>
<button>Sort by Count ${escape("(Desc)")}</button>
<button ${""}>Add data </button>
<button>Reset </button>

<svg${add_attribute("width", svg_width, 0)}${add_attribute("height", svg_height, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin) + "," + escape(margin + height2) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"yAxis"}" transform="${"translate(" + escape(margin) + "," + escape(margin) + ")"}"${add_attribute("this", pinYAxis, 0)}></g><text class="${"axis-label svelte-rhgjht"}"${add_attribute("y", 12, 0)}${add_attribute("x", -height2 * 0.9, 0)} transform="${"rotate(270)"}">Fruit sold items)
  </text>${each(data2, (bar, i) => {
    return `<rect${add_attribute("x", margin + x(bar.cat), 0)}${add_attribute("y", height2 + margin - bar.value, 0)}${add_attribute("height", bar.value, 0)}${add_attribute("width", x.bandwidth(), 0)}${add_attribute("fill", bar.color, 0)} opacity="${"0.5"}"></rect>`;
  })}</svg>`;
});
var index_svelte_svelte_type_style_lang$3 = "";
const css$d = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-13lgxt{max-width:600px;margin:0 auto}",
  map: null
};
const Motion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const content = cmsSvelte?.find((record) => record.primary_key == "Motion");
  console.log("content", content);
  ({
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.intro_text,
    u: "/svelte/flip",
    tags: content?.keywords.join()
  });
  $$result.css.add(css$d);
  return `<div class="${"wrapper svelte-13lgxt"}"><h2>What is Svelte Motion and how can we use it?</h2>
  <p>Adding life to visual essays is what it&#39;s all about, right? <br><br>Well, luckily with Svelte you get given two really simple methods for
    animating things on your page. <br> <br> Introducing Svelte Motion or
    Spring and Tweened to be precise.
    <br> <br> They&#39;re both quite similar, but to define them:
  </p>
  <ul><li>Spring: animates between states in a spring-like fashion. Controllable by
      stiffness and damping parameters.
    </li>
    <li>Tweened: animates between states over a given duration, with a specific
      easing function.
    </li></ul>
  <p>A picture (or interactive visual) paints a thousand words, so let&#39;s see how
    they work visually.
  </p>

  ${each(content.components, (ex) => {
    return `${validate_component(FormattedExample, "FormattedExample").$$render($$result, { comp: ex, route: "svelte/motion/" }, {}, {})}`;
  })}
</div>`;
});
var Select_svelte_svelte_type_style_lang = "";
const css$c = {
  code: '.select.svelte-11u87c8{position:relative}label.svelte-11u87c8{display:inline-block;font-family:inherit;font-weight:inherit;font-size:1em;margin-bottom:0.25em}option.svelte-11u87c8{color:black}select.svelte-11u87c8{border:1px solid white;width:100%;height:30px;font-family:inherit;font-size:0.7rem;cursor:pointer;background:var(--color-white);color:var(--color-gray-900) !important;border-radius:4px;padding:0.5em;appearance:none;line-height:1.4}select.svelte-11u87c8::-ms-expand{color:black;display:none}.select.svelte-11u87c8::after{display:block;content:"";position:absolute;bottom:1.25em;right:0.75em;width:1em;height:1em;z-index:1;background:var(--color-gray-900);clip-path:polygon(0% 0%, 100% 100%, 0% 100%);border-radius:4px;transform-origin:center center;transform:rotate(-45deg);pointer-events:none}select.svelte-11u87c8:hover{background:var(--color-gray-100);color:black}select.svelte-11u87c8:focus{color:black;box-shadow:0 0 4px 0 var(--color-focus)}.select.svelte-11u87c8:disabled{cursor:not-allowed;background-color:var(--color-gray-300)}',
  map: null
};
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [] } = $$props;
  let { label = "Easing:" } = $$props;
  let { disabled = false } = $$props;
  let { value = options.length ? options[0].value : "" } = $$props;
  const id = `select-${Math.floor(Math.random() * 1e6)}`;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$c);
  return `<div class="${"select svelte-11u87c8"}">${label ? `<label${add_attribute("for", id, 0)} class="${"svelte-11u87c8"}">${escape(label)}</label>` : ``}
  <select${add_attribute("id", id, 0)} ${disabled ? "disabled" : ""} class="${"svelte-11u87c8"}">${each(options, (option) => {
    return `<option${add_attribute("value", option.label || option.value, 0)} class="${"svelte-11u87c8"}">${escape(option.label || option.value)}</option>`;
  })}</select>
</div>`;
});
var Thumb_svelte_svelte_type_style_lang = "";
const css$b = {
  code: '.thumb.svelte-8w8x88{position:absolute;top:50%;width:0;height:0}.thumb-content.svelte-8w8x88{position:relative;width:fit-content;height:fit-content;transform:translate(-50%, -50%)}.thumb-content.svelte-8w8x88::before{content:"";position:absolute;width:200%;height:200%;transform:translate(-25%, -25%) scale(0);border-radius:100vh;background:var(--thumb-bg, #5784fd);opacity:30%;transition:transform 100ms ease-in-out}.thumb-content.active.svelte-8w8x88::before{transform:translate(-25%, -25%) scale(1)}',
  map: null
};
const Thumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { pos } = $$props;
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  $$result.css.add(css$b);
  return `<div class="${"thumb svelte-8w8x88"}"${add_attribute("style", `left: ${pos * 100}%;`, 0)}><div class="${["thumb-content svelte-8w8x88", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var Slider_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "input.svelte-1wpcy4t{display:none}.track.svelte-1wpcy4t{margin:10px 8px;position:relative;height:4px;width:calc(100% - 16px);border-radius:100vh;background:var(--track-bg, #ebebeb)}.progress.svelte-1wpcy4t{position:absolute;left:0;right:0;top:0;bottom:0;border-radius:100vh;background:var(--progress-bg, #8abdff)}.thumb.svelte-1wpcy4t{width:16px;height:16px;border-radius:100vh;background:var(--thumb-bg, #5784fd)}",
  map: null
};
function checkPos(pos) {
  return [Math.min(...pos), Math.max(...pos)];
}
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progress;
  const dispatch = createEventDispatcher();
  let { name = [] } = $$props;
  let { range: range2 = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { value = [min, max] } = $$props;
  let pos;
  let active = false;
  let { order = false } = $$props;
  function setValue(pos2) {
    const offset = min % step;
    const width2 = max - min;
    value = pos2.map((v) => min + v * width2).map((v) => Math.round((v - offset) / step) * step + offset);
    dispatch("input", value);
  }
  function setPos(value2) {
    pos = value2.map((v) => Math.min(Math.max(v, min), max)).map((v) => (v - min) / (max - min));
  }
  function clamp() {
    setPos(value);
    setValue(pos);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.range === void 0 && $$bindings.range && range2 !== void 0)
    $$bindings.range(range2);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  $$result.css.add(css$a);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (range2 && order && active)
        pos = checkPos(pos);
    }
    {
      setPos(value);
    }
    {
      clamp();
    }
    progress = `
    left: ${range2 ? Math.min(pos[0], pos[1]) * 100 : 0}%;
    right: ${100 - Math.max(pos[0], range2 ? pos[1] : pos[0]) * 100}%;
  `;
    $$rendered = `<input type="${"number"}"${add_attribute("value", value[0], 0)}${add_attribute("name", name[0], 0)} class="${"svelte-1wpcy4t"}">
${range2 ? `<input type="${"number"}"${add_attribute("value", value[1], 0)}${add_attribute("name", name[1], 0)} class="${"svelte-1wpcy4t"}">` : ``}
<div class="${"track svelte-1wpcy4t"}"><div class="${"progress svelte-1wpcy4t"}"${add_attribute("style", progress, 0)}></div>
  ${validate_component(Thumb, "Thumb").$$render($$result, { pos: pos[0] }, {
      pos: ($$value) => {
        pos[0] = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.left ? slots.left({}) : `
      ${slots.default ? slots.default({}) : `
        <div class="${"thumb svelte-1wpcy4t"}"></div>
      `}
    `}`;
      }
    })}
  ${range2 ? `${validate_component(Thumb, "Thumb").$$render($$result, { pos: pos[1] }, {
      pos: ($$value) => {
        pos[1] = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.right ? slots.right({}) : `
        ${slots.default ? slots.default({}) : `
          <div class="${"thumb svelte-1wpcy4t"}"></div>
        `}
      `}`;
      }
    })}` : ``}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
var Icon_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "svg.svelte-1eky3f8{width:1em;height:1em;overflow:visible;transform-origin:50% 50%;transition:all 0.3s}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let rotation;
  const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  let { name } = $$props;
  let { direction = "n" } = $$props;
  let { width: width2 = "1em" } = $$props;
  let { fill } = $$props;
  let { height: height2 = "1em" } = $$props;
  let { stroke = void 0 } = $$props;
  let { strokeWidth = void 0 } = $$props;
  if ($$props.directions === void 0 && $$bindings.directions && directions !== void 0)
    $$bindings.directions(directions);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.width === void 0 && $$bindings.width && width2 !== void 0)
    $$bindings.width(width2);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.height === void 0 && $$bindings.height && height2 !== void 0)
    $$bindings.height(height2);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  $$result.css.add(css$9);
  icon = feather.icons[name];
  rotation = directions.indexOf(direction) * 45;
  {
    if (icon) {
      if (stroke)
        icon.attrs["stroke"] = stroke;
      if (fill)
        icon.attrs["fill"] = fill;
      if (strokeWidth)
        icon.attrs["stroke-width"] = strokeWidth;
    }
  }
  return `${icon ? `<svg${spread([
    escape_object(icon.attrs),
    {
      style: "width: " + escape(width2) + "; height: " + escape(height2) + "; transform: rotate(" + escape(rotation) + "deg);"
    }
  ], { classes: "svelte-1eky3f8" })}><g><!-- HTML_TAG_START -->${icon.contents}<!-- HTML_TAG_END --></g></svg>` : ``}`;
});
var SpringTweenComp_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-auyw14.svelte-auyw14{position:relative;height:290px}.container.svelte-auyw14 .animate-button.svelte-auyw14{background-color:white;border-radius:100%;z-index:100;cursor:pointer;position:absolute;padding:5px 10px;top:100px;left:110px}.container.svelte-auyw14 .ctrl-title.svelte-auyw14{border-bottom:1px solid white;font-weight:600;text-align:center;padding:1px 0px 3px 0px;margin-bottom:5px}.container.svelte-auyw14 .controls.svelte-auyw14{font-size:0.7rem;height:100px;width:300px;position:relative}.container.svelte-auyw14 .controls .spring.svelte-auyw14{max-width:140px;min-width:140px;height:105px;left:150px;position:absolute;background-color:darkmagenta;color:white;padding:5px}.container.svelte-auyw14 .controls .tween.svelte-auyw14{position:absolute;background-color:darkblue;color:white;width:140px;height:105px;padding:5px}.container.svelte-auyw14 .axis.svelte-auyw14{margin-top:15px;position:absolute;border-top:1px solid black;height:100px;width:300px;overflow:hidden}.container.svelte-auyw14 .bar-wrapper.svelte-auyw14{position:relative;margin-top:40px;width:300px;height:150px}.container.svelte-auyw14 .bar-wrapper .tweens.svelte-auyw14{position:absolute;border-left:1px solid gray;left:100px}.container.svelte-auyw14 .bar-wrapper .springs.svelte-auyw14{position:absolute;right:160px;border-left:1px solid gray}.container.svelte-auyw14 .bar-wrapper .bar.svelte-auyw14{position:absolute;display:flex}.container.svelte-auyw14 .bar-wrapper .bar.tween.svelte-auyw14{right:0px}",
  map: null
};
const SpringTweenComp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tween;
  let springer;
  let $tween, $$unsubscribe_tween = noop, $$subscribe_tween = () => ($$unsubscribe_tween(), $$unsubscribe_tween = subscribe(tween, ($$value) => $tween = $$value), tween);
  let $springer, $$unsubscribe_springer = noop, $$subscribe_springer = () => ($$unsubscribe_springer(), $$unsubscribe_springer = subscribe(springer, ($$value) => $springer = $$value), springer);
  let selectedTween = "elasticOut";
  let zeros = new Array(16);
  for (let i = 0; i < 16; ++i)
    zeros[i] = 0;
  let data2 = {
    initial: zeros,
    final: range(16).reverse()
  };
  let duration = [300, 3e3];
  let stiffness = [0.15, 1];
  let damping = [0.8, 1];
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_tween(tween = tweened(data2.initial, {
      duration: duration[0],
      easing: easing[selectedTween]
    }));
    $$subscribe_springer(springer = spring(data2.initial, {
      stiffness: stiffness[0],
      damping: damping[0]
    }));
    $$rendered = `<div class="${"container svelte-auyw14"}"><button class="${"animate-button  svelte-auyw14"}">Animate! </button>

  <div class="${"controls svelte-auyw14"}"><div class="${"spring svelte-auyw14"}"><div class="${"ctrl-title svelte-auyw14"}">SPRING</div>
      Spring Stiffness: ${escape((Math.round(stiffness[0] * 100) / 100).toFixed(2))}
      ${validate_component(Slider, "Slider").$$render($$result, { max: 1, step: 0.05, value: stiffness }, {
      value: ($$value) => {
        stiffness = $$value;
        $$settled = false;
      }
    }, {})}
      Damping: ${escape((Math.round(damping[0] * 100) / 100).toFixed(2))}
      ${validate_component(Slider, "Slider").$$render($$result, { max: 1, step: 0.05, value: damping }, {
      value: ($$value) => {
        damping = $$value;
        $$settled = false;
      }
    }, {})}</div>
    <div class="${"tween svelte-auyw14"}"><div class="${"ctrl-title svelte-auyw14"}">TWEENED</div>
      Tween Duration: ${escape(duration[0])}
      ${validate_component(Slider, "Slider").$$render($$result, { max: 3e3, step: 100, value: duration }, {
      value: ($$value) => {
        duration = $$value;
        $$settled = false;
      }
    }, {})}
      ${validate_component(Select, "Select").$$render($$result, {
      label: "Easing:",
      options: Object.keys(easing).map((d) => {
        return { value: d };
      }),
      value: selectedTween
    }, {
      value: ($$value) => {
        selectedTween = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render($$result, {
          name: "triangle",
          fill: "white",
          width: "8px",
          height: "8px",
          direction: "s"
        }, {}, {})}`;
      }
    })}</div></div>
  <div class="${"axis svelte-auyw14"}"></div>
  <div class="${"bar-wrapper svelte-auyw14"}"><div class="${"tweens svelte-auyw14"}">${each($tween, (bar, i) => {
      return `<div class="${"bar tween svelte-auyw14"}" style="${"height:" + escape(8) + "px; width:" + escape(bar * 6) + "px; clear:both;background-color:darkblue;opacity:" + escape(1 - i / 20) + "; transform:translate(30px," + escape(10 * i) + "px);"}"></div>`;
    })}</div>
    <div class="${"springs svelte-auyw14"}">${each($springer, (bar, i) => {
      return `<div class="${"bar svelte-auyw14"}" style="${"height:" + escape(8) + "px; width:" + escape(bar * 6) + "px; clear:both;background-color:darkmagenta;opacity:" + escape(1 - i / 20) + ";transform:translate(30px," + escape(10 * i) + "px);"}"></div>`;
    })}</div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_tween();
  $$unsubscribe_springer();
  return $$rendered;
});
var Springy100Bars_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.buttons.svelte-7w8ku6.svelte-7w8ku6{width:350px;margin:0 auto}.buttons.svelte-7w8ku6 button.svelte-7w8ku6{width:150px;height:50px;background-color:white;padding:10px;border:none;cursor:pointer}.buttons.svelte-7w8ku6 button.selected.svelte-7w8ku6{border:black 3px solid}.container.svelte-7w8ku6.svelte-7w8ku6{height:400px}.container.svelte-7w8ku6 h3.svelte-7w8ku6{text-align:center}.container.svelte-7w8ku6 .bar.svelte-7w8ku6{position:absolute;display:flex}.container.svelte-7w8ku6 .key.svelte-7w8ku6{font-size:0.7rem;text-align:center}.container.svelte-7w8ku6 .chart-wrapper.svelte-7w8ku6{margin:0 auto;overflow:hidden;position:relative;width:300px;height:250px}.container.svelte-7w8ku6 .labels.svelte-7w8ku6{position:absolute}.container.svelte-7w8ku6 .labels .cat-label.svelte-7w8ku6{transform:translateX(100px);font-size:0.8rem;text-align:right}",
  map: null
};
let xStretch = 3;
function getWidth(i, group) {
  if (i == 2) {
    return (100 - group[i]) * xStretch;
  } else {
    return (group[i + 1] - group[i]) * xStretch;
  }
}
function getXOffset(i, group) {
  return group[i] * xStretch;
}
function getYOffset(group_index) {
  return 50 + group_index * 50;
}
const Springy100Bars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $values, $$unsubscribe_values;
  let data2 = {
    primary: [[0, 23, 35], [0, 30, 50], [0, 75, 90], [0, 45, 90]],
    main: [[0, 45, 78], [0, 10, 90], [0, 50, 70], [0, 90, 95]]
  };
  const values = tweened(data2.primary, { duration: 800, easing: elasticOut });
  $$unsubscribe_values = subscribe(values, (value) => $values = value);
  let colors2 = ["lightblue", "#423e42", "#9c334e"];
  $$result.css.add(css$7);
  $$unsubscribe_values();
  return `<div class="${"container svelte-7w8ku6"}"><h3 class="${"svelte-7w8ku6"}">Breakdown of how voters in different age groups voted at a Primary and Main
    Election
  </h3>
  <div class="${"buttons svelte-7w8ku6"}"><button class="${["svelte-7w8ku6", "selected"].join(" ").trim()}">Primary election
    </button>
    <button class="${["svelte-7w8ku6", ""].join(" ").trim()}">Main election
    </button></div>
  <div class="${"labels svelte-7w8ku6"}">${each(["18-30", "30-50", "50-65", "65+"], (label, j) => {
    return `<div class="${"cat-label svelte-7w8ku6"}" style="${"transform:translate(4vw," + escape(getYOffset(j) * 0.7 + 20) + "px)"}">${escape(label)}
      </div>`;
  })}</div>
  <div class="${"chart-wrapper svelte-7w8ku6"}">${each($values, (group, j) => {
    return `${each(group, (bar, i) => {
      return `<div class="${"bar svelte-7w8ku6"}" style="${"height:" + escape(30) + "px; width:" + escape(getWidth(i, group)) + "px; clear:both;background-color:" + escape(colors2[i]) + ";transform:translate(" + escape(getXOffset(i, group)) + "px," + escape(getYOffset(j)) + "px);"}"></div>`;
    })}`;
  })}</div>
  <div class="${"key svelte-7w8ku6"}">Key : <span style="${"color:" + escape(colors2[0])}">Blue Party</span> |
    <span style="${"color:" + escape(colors2[1])}">Centrists </span>
    | <span style="${"color:" + escape(colors2[2])}">Red Party</span></div>
</div>`;
});
var TweeningColor_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".svg-container.svelte-k9qkh1{padding:20px}button.svelte-k9qkh1{padding:10px;margin:0px 10px 10px 0px}",
  map: null
};
const TweeningColor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $color, $$unsubscribe_color;
  const colors2 = [
    { text: "red", c: "rgb(255, 62, 0)" },
    { text: "blue", c: "rgb(64, 179, 255)" },
    { text: "gray", c: "rgb(103, 103, 120)" }
  ];
  const color = tweened(colors2[0].c, {
    duration: 800,
    interpolate: interpolateLab
  });
  $$unsubscribe_color = subscribe(color, (value) => $color = value);
  $$result.css.add(css$6);
  $$unsubscribe_color();
  return `${each(colors2, (c) => {
    return `<button style="${"background-color: " + escape(c.c) + "; color: white; border: none;"}" class="${"svelte-k9qkh1"}">Make it ${escape(c.text)}</button>`;
  })}

<div class="${"svg-container svelte-k9qkh1"}"><svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" width="${"100px"}" viewBox="${"0 0 98.1 118"}" style="${"enable-background:new 0 0 98.1 118;"}" xml:space="${"preserve"}"><path class="${"st0"}"${add_attribute("fill", $color, 0)} d="${"M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3\r\n   c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1\r\n   c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"}"></path><path class="${"st1"}" fill="${"white"}" d="${"M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1\r\n   c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72\r\n   c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7\r\n   c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5\r\n   c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1\r\n   c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1\r\n   c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5\r\n   c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"}"></path></svg>
</div>`;
});
var index_svelte_svelte_type_style_lang$2 = "";
const css$5 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-1mc8lq0.svelte-1mc8lq0{max-width:600px;margin:0 auto;padding:10px}figure.svelte-1mc8lq0.svelte-1mc8lq0{margin:0px auto;width:90vw;max-width:550px;position:relative}figure.svelte-1mc8lq0 img.svelte-1mc8lq0{width:90vw;max-width:550px;margin:0 auto}figure.svelte-1mc8lq0 figcaption.svelte-1mc8lq0{margin-top:5px;text-align:end}li.svelte-1mc8lq0.svelte-1mc8lq0{margin:20px 0px}.subheading.svelte-1mc8lq0.svelte-1mc8lq0{margin-top:5rem;padding-top:20px;border-top:1px solid rgba(119, 227, 35, 0.55)}",
  map: null
};
const Transitions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const content = cmsSvelte?.find((record) => record.primary_key == "Transitions");
  ({
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.intro_text,
    u: "/svelte/transitions",
    tags: content?.keywords.join()
  });
  $$result.css.add(css$5);
  return `<div class="${"wrapper svelte-1mc8lq0"}"><h2>Motivation</h2>
  <p>Previously, we&#39;ve explored the individual components of Svelte&#39;s animation
    capabilities - like <a rel="${"internal"}" href="${"/svelte/FLIP"}">FLIP</a>,
    <a rel="${"internal"}" href="${"/svelte/Motion"}">Motion</a>, and some other
    <a rel="${"internal"}" href="${"/svelte/FLIP"}">cool stuff</a>.
  </p>
  <p>In this article, I&#39;ll be using the &quot;svelte/transition&quot; module to re-create a
    sequenced animation I came across recently on Twitter:
  </p>
  <figure class="${"svelte-1mc8lq0"}"><img src="${"/images/migrants/migrant.gif"}" alt="${"bbc newsnight gif showing the data visualisation"}" class="${"svelte-1mc8lq0"}">
    <figcaption class="${"svelte-1mc8lq0"}">Source: <a href="${"https://twitter.com/BBCNewsnight/status/1514361598156099584"}">BBC Newsnight Twitter</a></figcaption></figure>
  <p>I challenged myself to re-create this chart and animation with Svelte and
    I&#39;ve documented what I learnt below.
  </p>
  <p>New to Svelte transitions? A good place to start is the <a href="${"https://svelte.dev/docs#run-time-svelte-transition"}" rel="${"external"}">official documentation
    </a> to get a basic understanding of how it works.
  </p>
  ${each(content.components, (ex) => {
    return `${validate_component(FormattedExample, "FormattedExample").$$render($$result, { comp: ex, route: "svelte/spring/" }, {}, {})}`;
  })}
  <h2 class="${"subheading svelte-1mc8lq0"}">Key features:</h2>
  <p></p>

  <ul><li class="${"svelte-1mc8lq0"}"><strong>Y Axis</strong>: Fly transition; the delay and y delay properties
      increase as the labels get closer to the x-axis (as in the original).
    </li>
    <li class="${"svelte-1mc8lq0"}"><strong>X Axis</strong>: A custom transition was made to animate the white
      X Axis horizontal line. The transition animates the width property of the
      &#39;bottom-axis&#39;.
    </li>
    <li class="${"svelte-1mc8lq0"}"><strong>Bars</strong>: Fly transition with cubinInOut easing. I had to
      create a bars- div with overflow:hidden to hide the bars below the x-axis.
    </li>
    <li class="${"svelte-1mc8lq0"}"><strong>Bar labels</strong>: I converted the bar labels to a string, then
      transitioned each letter individually.
    </li>
    <li class="${"svelte-1mc8lq0"}"><strong>Chart title</strong>: Simple slide transition just to try
      something different! Nothing fancy here.
    </li></ul>
</div>`;
});
var ChartEntry_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-1bxeliz.svelte-1bxeliz{height:300px;width:400px;position:relative;background-image:url("/images/migrants/migrants.jpg");background-size:cover;background-blend-mode:saturation}.container.svelte-1bxeliz .title.svelte-1bxeliz{height:40px;text-align:center;color:white}.container.svelte-1bxeliz .title h4.svelte-1bxeliz,.container.svelte-1bxeliz .title p.svelte-1bxeliz{padding:2px 10px;margin:10px 0px 0px 0px;background-color:purple;display:inline-block}.container.svelte-1bxeliz .title h4.svelte-1bxeliz{max-height:16px;overflow:hidden}.container.svelte-1bxeliz .title p.svelte-1bxeliz{font-size:0.7rem;line-height:0.7rem}.container.svelte-1bxeliz .chart-area.svelte-1bxeliz{background-color:rgba(255, 255, 255, 0.05);height:150px;width:200px;margin:50px 100px;position:relative}.container.svelte-1bxeliz .chart-area .bottom-axis.svelte-1bxeliz{border-bottom:1px solid white;height:150px;width:100%;position:absolute}.container.svelte-1bxeliz .chart-area .bar-container.svelte-1bxeliz{height:160px;width:200px;top:-10px;position:absolute;overflow-y:hidden}.container.svelte-1bxeliz .chart-area .bar-container .bar.svelte-1bxeliz{background-color:#107ddb;opacity:0.8;width:30px;bottom:0px;position:absolute}.container.svelte-1bxeliz .chart-area .bar-container .bar .barLabel.svelte-1bxeliz{position:absolute;top:-30px;width:30px;text-align:center;font-size:0.6rem;color:white}.container.svelte-1bxeliz .chart-area .grid-line.svelte-1bxeliz{position:absolute;width:100%;border-top:1px dashed rgba(255, 255, 255, 0.3)}.container.svelte-1bxeliz .chart-area .grid-line .yAxisLabel.svelte-1bxeliz{position:absolute;color:white;font-size:0.6rem;width:30px;left:-35px;top:-22px;text-align:end}.container.svelte-1bxeliz .xLabels.svelte-1bxeliz{position:absolute;color:white;top:150px;display:flex;font-size:0.6rem}.container.svelte-1bxeliz .xLabels .xAxisLabel.svelte-1bxeliz{padding:5px 15px 5px 16px}.container.svelte-1bxeliz .toggle-button.svelte-1bxeliz{background-color:rgba(255, 255, 255, 0);color:white;bottom:0px;width:80px;margin:10px;cursor:pointer;border:1px solid white;border-radius:30px;padding:10px 10px;position:absolute;transition:background-color 0.4s}.container.svelte-1bxeliz .toggle-button.svelte-1bxeliz:hover{background-color:rgba(255, 255, 255, 0.2)}',
  map: null
};
const ChartEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"container svelte-1bxeliz"}"><button class="${"toggle-button svelte-1bxeliz"}">Play </button>
  ${``}
</div>`;
});
var index_svelte_svelte_type_style_lang$1 = "";
const css$3 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-13lgxt{max-width:600px;margin:0 auto}",
  map: null
};
const SelfExplainingCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const content = cmsSvelte?.find((record) => record.primary_key == "SelfExplainingCharts");
  console.log("content", content);
  ({
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.intro_text,
    u: "/svelte/flip",
    tags: content?.keywords.join()
  });
  $$result.css.add(css$3);
  return `<div class="${"wrapper svelte-13lgxt"}"><h2>Motiviation</h2>
  <p>A successful data visualisation, in my view, will:</p>
  <ul><li>minimise the amount of thinking the user has to do to understand what is
      being presented,
    </li>
    <li>minimise the amount of time it takes for the user to draw accurate
      conclusions from the visualisation.
    </li></ul>
  <p>In this article, I look at one way way to achieve that; by slowly revealing
    more information about the chart before they see the data.
  </p>
  <h2>Psychology and understanding</h2>
  <p>If we want to minimise thinking and minimise time-to-draw-valid-conclusions,
    we need to understand what goes wrong in traditional data visualizations.
  </p>
  <p>I haven&#39;t looked at relevant academic literature on this topic, but I
    believe the natural human instinct, upon being confronted by a graph is to
    look first at the colour, the bars/ dots example, then they will look for
    the key for the colours, if they cannot still find the meaning of the chart,
    only then will they look at the Chart Title/ subtitle and finally they will
    look at the axes.
  </p>
  <p>If you are a producer of .png static data visualisations, it&#39;s very
    difficult to control this human instinct through your design decisions.
  </p>
  <p>As interactive designers, we have the ability to control when users see the
    Axes, the Title and the Chart Shapes (bars, points etc). So let&#39;s take
    advantage of that.
  </p>
  <p>In an ideal world, in my opinion, we would want the user to understand what
    the chart is showing them, before you even show them a single data point.
    Then when you finally reveal the data to them, they are in a state whereby
    they can quickly understand what is going on.
  </p>
  <p>Now, let&#39;s see what this might look like in practice, with a few examples
    (with code).
  </p>
  ${each(content.components, (ex) => {
    return `${validate_component(FormattedExample, "FormattedExample").$$render($$result, {
      comp: ex,
      route: "svelte/SelfExplainingCharts/"
    }, {}, {})}`;
  })}
</div>`;
});
var ChartExplainers_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-u7no1a.svelte-u7no1a{height:300px;width:400px;position:relative}.container.svelte-u7no1a .title.svelte-u7no1a{position:relative;height:40px;transition:transform 0.3s ease-in-out}.container.svelte-u7no1a .title .svelte-u7no1a{margin:0px}.container.svelte-u7no1a .title p.svelte-u7no1a{font-size:0.6rem;font-style:italic}.container.svelte-u7no1a .chart-area.svelte-u7no1a{background-color:rgba(255, 255, 255, 0.05);height:150px;width:200px;top:50px;left:0px;margin:50px 100px;position:absolute}.container.svelte-u7no1a .chart-area .bar-container.svelte-u7no1a{height:160px;width:200px;top:-160px;position:absolute;overflow:hidden}.container.svelte-u7no1a .chart-area .bar-container .bar.svelte-u7no1a{background-color:#107ddb;opacity:0.8;bottom:0px;border-radius:100%;position:absolute}.container.svelte-u7no1a .chart-area .grid-line.svelte-u7no1a{position:absolute;width:100%;background-color:rgba(225, 0, 255, 0.393);border-top:1px dashed rgba(255, 255, 255, 0.6)}.container.svelte-u7no1a .chart-area .grid-line .yAxisLabel.svelte-u7no1a{position:absolute;color:gray;font-size:0.6rem;width:30px;left:-35px;top:-22px;text-align:end}.container.svelte-u7no1a .xLabels.svelte-u7no1a{position:absolute;color:gray;top:150px;display:flex;font-size:0.6rem}.container.svelte-u7no1a .xLabels .xAxisLabel.svelte-u7no1a{padding:5px 20px 5px 18px}.container.svelte-u7no1a .toggle-button.svelte-u7no1a{background-color:rgba(0, 0, 0, 0);color:black;bottom:0px;width:80px;margin:0px;cursor:pointer;border:1px solid gray;border-radius:30px;padding:10px 10px;position:absolute;transition:background-color 0.4s}.container.svelte-u7no1a .toggle-button.svelte-u7no1a:hover{background-color:rgba(0, 0, 0, 0.2)}.container.svelte-u7no1a .all.svelte-u7no1a{text-align:center;width:250px;margin:0 auto;position:absolute}.container.svelte-u7no1a .top-text.svelte-u7no1a{top:0px;font-size:0.7rem;color:gray}.container.svelte-u7no1a .y-title.svelte-u7no1a{transition:all 1s;top:30px}.container.svelte-u7no1a .middle-text.svelte-u7no1a{color:gray;top:60px;font-size:0.7rem}.container.svelte-u7no1a .x-title.svelte-u7no1a{transition:all 1s;transition-delay:2s;top:90px}",
  map: null
};
const ChartExplainers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"container svelte-u7no1a"}"><button class="${"toggle-button svelte-u7no1a"}">Play </button>
  
    ${``}
    ${``}
</div>`;
});
const scrollyData = [
  "In the starting position, we have a simple bar  with six categoric variables along the x-axis. But what if the user wanted to explore how the categories looked as a pie chart (said no-one ever)? ",
  "At this point, I should make it clear that this was a technical challenge to see what was possible in terms of SVG path manipulation, not what might be best practice in terms of data visualization. Also the axes have been removed to make the code and animations easier to follow. ",
  "The theory goes that by morphing between the different chart types, the user can follow a category and as such make better inferences. Any way.... keep scrolling to see the first animation... ",
  "From the user perspective, each bar magically morphs into an arc in the pie chart. Under the hood, in fact, everything is an SVG path (not SVG rect for the bars).",
  "In the original video, they showed that by staggering the animations with a slight delay between the categories, the user could follow with categories went where better, so I implemented that too.",
  "I used the flubber npm package to perform the interpolation. I tried and tested a number of different interpolation methods (see the implementation tips below). ",
  "Guess what, they may look like circles, but they are actually SVG paths too. ",
  "And finally, we morph back to the starting position. "
];
let data = [2, 13, 5, 10, 3, 14];
function barsFromData(data2) {
  let width2 = 50;
  let padding = 20;
  let startY = 200;
  let startX = 0;
  let paths2 = [];
  data2.map((d, i) => {
    let localX = (startX + width2 + padding) * i;
    let height2 = d * 15;
    let combined = `M${localX},${startY},  ${localX + width2},${startY},  ${localX + width2},${startY - height2}, ${localX},${startY - height2}Z`;
    paths2.push(combined);
  });
  return paths2;
}
const paths = barsFromData(data);
const arcs = d3.pie()(data);
const arcGen = d3.arc();
const pies = arcs.map((arc) => {
  let input = {
    innerRadius: 50,
    outerRadius: 100,
    startAngle: arc.startAngle,
    endAngle: arc.endAngle
  };
  return arcGen(input);
});
function constructPointPathList(data2) {
  const ellipseAttrsToPath = (rx, cx, ry, cy) => `M${cx - rx},${cy}a${rx},${ry} 0 1,0 ${rx * 2},0a${rx},${ry} 0 1,0 -${rx * 2},0 Z`;
  let pointsList2 = [];
  data2.map((d, i) => {
    let cx = i * 70 + 25;
    let cy = 200 - d * 15;
    let r = 10;
    pointsList2.push(ellipseAttrsToPath(r, cx, r, cy));
  });
  return pointsList2;
}
const pointsList = constructPointPathList(data);
function polygonArea(polygon) {
  var i = -1, n2 = polygon.length, a, b = polygon[n2 - 1], area2 = 0;
  while (++i < n2) {
    a = b;
    b = polygon[i];
    area2 += a[1] * b[0] - a[0] * b[1];
  }
  return area2 / 2;
}
function d3Centroid(polygon) {
  var i = -1, n2 = polygon.length, x = 0, y = 0, a, b = polygon[n2 - 1], c, k = 0;
  while (++i < n2) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }
  return k *= 3, [x / k, y / k];
}
function polygonLength(polygon) {
  var i = -1, n2 = polygon.length, b = polygon[n2 - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
  while (++i < n2) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }
  return perimeter;
}
var paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 };
var SPECIAL_SPACES = [
  5760,
  6158,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8239,
  8287,
  12288,
  65279
];
function isSpace(ch) {
  return ch === 10 || ch === 13 || ch === 8232 || ch === 8233 || ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch >= 5760 && SPECIAL_SPACES.indexOf(ch) >= 0;
}
function isCommand(code) {
  switch (code | 32) {
    case 109:
    case 122:
    case 108:
    case 104:
    case 118:
    case 99:
    case 115:
    case 113:
    case 116:
    case 97:
    case 114:
      return true;
  }
  return false;
}
function isArc(code) {
  return (code | 32) === 97;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isDigitStart(code) {
  return code >= 48 && code <= 57 || code === 43 || code === 45 || code === 46;
}
function State(path) {
  this.index = 0;
  this.path = path;
  this.max = path.length;
  this.result = [];
  this.param = 0;
  this.err = "";
  this.segmentStart = 0;
  this.data = [];
}
function skipSpaces(state) {
  while (state.index < state.max && isSpace(state.path.charCodeAt(state.index))) {
    state.index++;
  }
}
function scanFlag(state) {
  var ch = state.path.charCodeAt(state.index);
  if (ch === 48) {
    state.param = 0;
    state.index++;
    return;
  }
  if (ch === 49) {
    state.param = 1;
    state.index++;
    return;
  }
  state.err = "SvgPath: arc flag can be 0 or 1 only (at pos " + state.index + ")";
}
function scanParam(state) {
  var start = state.index, index = start, max = state.max, zeroFirst = false, hasCeiling = false, hasDecimal = false, hasDot = false, ch;
  if (index >= max) {
    state.err = "SvgPath: missed param (at pos " + index + ")";
    return;
  }
  ch = state.path.charCodeAt(index);
  if (ch === 43 || ch === 45) {
    index++;
    ch = index < max ? state.path.charCodeAt(index) : 0;
  }
  if (!isDigit(ch) && ch !== 46) {
    state.err = "SvgPath: param should start with 0..9 or `.` (at pos " + index + ")";
    return;
  }
  if (ch !== 46) {
    zeroFirst = ch === 48;
    index++;
    ch = index < max ? state.path.charCodeAt(index) : 0;
    if (zeroFirst && index < max) {
      if (ch && isDigit(ch)) {
        state.err = "SvgPath: numbers started with `0` such as `09` are illegal (at pos " + start + ")";
        return;
      }
    }
    while (index < max && isDigit(state.path.charCodeAt(index))) {
      index++;
      hasCeiling = true;
    }
    ch = index < max ? state.path.charCodeAt(index) : 0;
  }
  if (ch === 46) {
    hasDot = true;
    index++;
    while (isDigit(state.path.charCodeAt(index))) {
      index++;
      hasDecimal = true;
    }
    ch = index < max ? state.path.charCodeAt(index) : 0;
  }
  if (ch === 101 || ch === 69) {
    if (hasDot && !hasCeiling && !hasDecimal) {
      state.err = "SvgPath: invalid float exponent (at pos " + index + ")";
      return;
    }
    index++;
    ch = index < max ? state.path.charCodeAt(index) : 0;
    if (ch === 43 || ch === 45) {
      index++;
    }
    if (index < max && isDigit(state.path.charCodeAt(index))) {
      while (index < max && isDigit(state.path.charCodeAt(index))) {
        index++;
      }
    } else {
      state.err = "SvgPath: invalid float exponent (at pos " + index + ")";
      return;
    }
  }
  state.index = index;
  state.param = parseFloat(state.path.slice(start, index)) + 0;
}
function finalizeSegment(state) {
  var cmd, cmdLC;
  cmd = state.path[state.segmentStart];
  cmdLC = cmd.toLowerCase();
  var params = state.data;
  if (cmdLC === "m" && params.length > 2) {
    state.result.push([cmd, params[0], params[1]]);
    params = params.slice(2);
    cmdLC = "l";
    cmd = cmd === "m" ? "l" : "L";
  }
  if (cmdLC === "r") {
    state.result.push([cmd].concat(params));
  } else {
    while (params.length >= paramCounts[cmdLC]) {
      state.result.push([cmd].concat(params.splice(0, paramCounts[cmdLC])));
      if (!paramCounts[cmdLC]) {
        break;
      }
    }
  }
}
function scanSegment(state) {
  var max = state.max, cmdCode, is_arc, comma_found, need_params, i;
  state.segmentStart = state.index;
  cmdCode = state.path.charCodeAt(state.index);
  is_arc = isArc(cmdCode);
  if (!isCommand(cmdCode)) {
    state.err = "SvgPath: bad command " + state.path[state.index] + " (at pos " + state.index + ")";
    return;
  }
  need_params = paramCounts[state.path[state.index].toLowerCase()];
  state.index++;
  skipSpaces(state);
  state.data = [];
  if (!need_params) {
    finalizeSegment(state);
    return;
  }
  comma_found = false;
  for (; ; ) {
    for (i = need_params; i > 0; i--) {
      if (is_arc && (i === 3 || i === 4))
        scanFlag(state);
      else
        scanParam(state);
      if (state.err.length) {
        return;
      }
      state.data.push(state.param);
      skipSpaces(state);
      comma_found = false;
      if (state.index < max && state.path.charCodeAt(state.index) === 44) {
        state.index++;
        skipSpaces(state);
        comma_found = true;
      }
    }
    if (comma_found) {
      continue;
    }
    if (state.index >= state.max) {
      break;
    }
    if (!isDigitStart(state.path.charCodeAt(state.index))) {
      break;
    }
  }
  finalizeSegment(state);
}
var path_parse = function pathParse(svgPath) {
  var state = new State(svgPath);
  var max = state.max;
  skipSpaces(state);
  while (state.index < max && !state.err.length) {
    scanSegment(state);
  }
  if (state.err.length) {
    state.result = [];
  } else if (state.result.length) {
    if ("mM".indexOf(state.result[0][0]) < 0) {
      state.err = "SvgPath: string should start with `M` or `m`";
      state.result = [];
    } else {
      state.result[0][0] = "M";
    }
  }
  return {
    err: state.err,
    segments: state.result
  };
};
function combine(m1, m2) {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
  ];
}
function Matrix$1() {
  if (!(this instanceof Matrix$1)) {
    return new Matrix$1();
  }
  this.queue = [];
  this.cache = null;
}
Matrix$1.prototype.matrix = function(m2) {
  if (m2[0] === 1 && m2[1] === 0 && m2[2] === 0 && m2[3] === 1 && m2[4] === 0 && m2[5] === 0) {
    return this;
  }
  this.cache = null;
  this.queue.push(m2);
  return this;
};
Matrix$1.prototype.translate = function(tx, ty) {
  if (tx !== 0 || ty !== 0) {
    this.cache = null;
    this.queue.push([1, 0, 0, 1, tx, ty]);
  }
  return this;
};
Matrix$1.prototype.scale = function(sx, sy) {
  if (sx !== 1 || sy !== 1) {
    this.cache = null;
    this.queue.push([sx, 0, 0, sy, 0, 0]);
  }
  return this;
};
Matrix$1.prototype.rotate = function(angle, rx, ry) {
  var rad, cos, sin;
  if (angle !== 0) {
    this.translate(rx, ry);
    rad = angle * Math.PI / 180;
    cos = Math.cos(rad);
    sin = Math.sin(rad);
    this.queue.push([cos, sin, -sin, cos, 0, 0]);
    this.cache = null;
    this.translate(-rx, -ry);
  }
  return this;
};
Matrix$1.prototype.skewX = function(angle) {
  if (angle !== 0) {
    this.cache = null;
    this.queue.push([1, 0, Math.tan(angle * Math.PI / 180), 1, 0, 0]);
  }
  return this;
};
Matrix$1.prototype.skewY = function(angle) {
  if (angle !== 0) {
    this.cache = null;
    this.queue.push([1, Math.tan(angle * Math.PI / 180), 0, 1, 0, 0]);
  }
  return this;
};
Matrix$1.prototype.toArray = function() {
  if (this.cache) {
    return this.cache;
  }
  if (!this.queue.length) {
    this.cache = [1, 0, 0, 1, 0, 0];
    return this.cache;
  }
  this.cache = this.queue[0];
  if (this.queue.length === 1) {
    return this.cache;
  }
  for (var i = 1; i < this.queue.length; i++) {
    this.cache = combine(this.cache, this.queue[i]);
  }
  return this.cache;
};
Matrix$1.prototype.calc = function(x, y, isRelative) {
  var m2;
  if (!this.queue.length) {
    return [x, y];
  }
  if (!this.cache) {
    this.cache = this.toArray();
  }
  m2 = this.cache;
  return [
    x * m2[0] + y * m2[2] + (isRelative ? 0 : m2[4]),
    x * m2[1] + y * m2[3] + (isRelative ? 0 : m2[5])
  ];
};
var matrix$1 = Matrix$1;
var Matrix = matrix$1;
var operations = {
  matrix: true,
  scale: true,
  rotate: true,
  translate: true,
  skewX: true,
  skewY: true
};
var CMD_SPLIT_RE = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/;
var PARAMS_SPLIT_RE = /[\s,]+/;
var transform_parse = function transformParse(transformString) {
  var matrix2 = new Matrix();
  var cmd, params;
  transformString.split(CMD_SPLIT_RE).forEach(function(item) {
    if (!item.length) {
      return;
    }
    if (typeof operations[item] !== "undefined") {
      cmd = item;
      return;
    }
    params = item.split(PARAMS_SPLIT_RE).map(function(i) {
      return +i || 0;
    });
    switch (cmd) {
      case "matrix":
        if (params.length === 6) {
          matrix2.matrix(params);
        }
        return;
      case "scale":
        if (params.length === 1) {
          matrix2.scale(params[0], params[0]);
        } else if (params.length === 2) {
          matrix2.scale(params[0], params[1]);
        }
        return;
      case "rotate":
        if (params.length === 1) {
          matrix2.rotate(params[0], 0, 0);
        } else if (params.length === 3) {
          matrix2.rotate(params[0], params[1], params[2]);
        }
        return;
      case "translate":
        if (params.length === 1) {
          matrix2.translate(params[0], 0);
        } else if (params.length === 2) {
          matrix2.translate(params[0], params[1]);
        }
        return;
      case "skewX":
        if (params.length === 1) {
          matrix2.skewX(params[0]);
        }
        return;
      case "skewY":
        if (params.length === 1) {
          matrix2.skewY(params[0]);
        }
        return;
    }
  });
  return matrix2;
};
var TAU$1 = Math.PI * 2;
function unit_vector_angle$1(ux, uy, vx, vy) {
  var sign2 = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy;
  if (dot > 1) {
    dot = 1;
  }
  if (dot < -1) {
    dot = -1;
  }
  return sign2 * Math.acos(dot);
}
function get_arc_center$1(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  var rx_sq = rx * rx;
  var ry_sq = ry * ry;
  var x1p_sq = x1p * x1p;
  var y1p_sq = y1p * y1p;
  var radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;
  if (radicant < 0) {
    radicant = 0;
  }
  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);
  var cxp = radicant * rx / ry * y1p;
  var cyp = radicant * -ry / rx * x1p;
  var cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  var cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2;
  var v1x = (x1p - cxp) / rx;
  var v1y = (y1p - cyp) / ry;
  var v2x = (-x1p - cxp) / rx;
  var v2y = (-y1p - cyp) / ry;
  var theta1 = unit_vector_angle$1(1, 0, v1x, v1y);
  var delta_theta = unit_vector_angle$1(v1x, v1y, v2x, v2y);
  if (fs === 0 && delta_theta > 0) {
    delta_theta -= TAU$1;
  }
  if (fs === 1 && delta_theta < 0) {
    delta_theta += TAU$1;
  }
  return [cx, cy, theta1, delta_theta];
}
function approximate_unit_arc$1(theta1, delta_theta) {
  var alpha = 4 / 3 * Math.tan(delta_theta / 4);
  var x1 = Math.cos(theta1);
  var y1 = Math.sin(theta1);
  var x2 = Math.cos(theta1 + delta_theta);
  var y2 = Math.sin(theta1 + delta_theta);
  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}
var a2c$2 = function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  var sin_phi = Math.sin(phi * TAU$1 / 360);
  var cos_phi = Math.cos(phi * TAU$1 / 360);
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  if (x1p === 0 && y1p === 0) {
    return [];
  }
  if (rx === 0 || ry === 0) {
    return [];
  }
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }
  var cc = get_arc_center$1(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);
  var result = [];
  var theta1 = cc[2];
  var delta_theta = cc[3];
  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU$1 / 4)), 1);
  delta_theta /= segments;
  for (var i = 0; i < segments; i++) {
    result.push(approximate_unit_arc$1(theta1, delta_theta));
    theta1 += delta_theta;
  }
  return result.map(function(curve) {
    for (var i2 = 0; i2 < curve.length; i2 += 2) {
      var x = curve[i2 + 0];
      var y = curve[i2 + 1];
      x *= rx;
      y *= ry;
      var xp = cos_phi * x - sin_phi * y;
      var yp = sin_phi * x + cos_phi * y;
      curve[i2 + 0] = xp + cc[0];
      curve[i2 + 1] = yp + cc[1];
    }
    return curve;
  });
};
var epsilon = 1e-10;
var torad = Math.PI / 180;
function Ellipse(rx, ry, ax) {
  if (!(this instanceof Ellipse)) {
    return new Ellipse(rx, ry, ax);
  }
  this.rx = rx;
  this.ry = ry;
  this.ax = ax;
}
Ellipse.prototype.transform = function(m2) {
  var c = Math.cos(this.ax * torad), s = Math.sin(this.ax * torad);
  var ma = [
    this.rx * (m2[0] * c + m2[2] * s),
    this.rx * (m2[1] * c + m2[3] * s),
    this.ry * (-m2[0] * s + m2[2] * c),
    this.ry * (-m2[1] * s + m2[3] * c)
  ];
  var J = ma[0] * ma[0] + ma[2] * ma[2], K = ma[1] * ma[1] + ma[3] * ma[3];
  var D = ((ma[0] - ma[3]) * (ma[0] - ma[3]) + (ma[2] + ma[1]) * (ma[2] + ma[1])) * ((ma[0] + ma[3]) * (ma[0] + ma[3]) + (ma[2] - ma[1]) * (ma[2] - ma[1]));
  var JK = (J + K) / 2;
  if (D < epsilon * JK) {
    this.rx = this.ry = Math.sqrt(JK);
    this.ax = 0;
    return this;
  }
  var L = ma[0] * ma[1] + ma[2] * ma[3];
  D = Math.sqrt(D);
  var l1 = JK + D / 2, l2 = JK - D / 2;
  this.ax = Math.abs(L) < epsilon && Math.abs(l1 - K) < epsilon ? 90 : Math.atan(Math.abs(L) > Math.abs(l1 - K) ? (l1 - J) / L : L / (l1 - K)) * 180 / Math.PI;
  if (this.ax >= 0) {
    this.rx = Math.sqrt(l1);
    this.ry = Math.sqrt(l2);
  } else {
    this.ax += 90;
    this.rx = Math.sqrt(l2);
    this.ry = Math.sqrt(l1);
  }
  return this;
};
Ellipse.prototype.isDegenerate = function() {
  return this.rx < epsilon * this.ry || this.ry < epsilon * this.rx;
};
var ellipse$1 = Ellipse;
var pathParse2 = path_parse;
var transformParse2 = transform_parse;
var matrix = matrix$1;
var a2c$1 = a2c$2;
var ellipse = ellipse$1;
function SvgPath(path) {
  if (!(this instanceof SvgPath)) {
    return new SvgPath(path);
  }
  var pstate = pathParse2(path);
  this.segments = pstate.segments;
  this.err = pstate.err;
  this.__stack = [];
}
SvgPath.from = function(src) {
  if (typeof src === "string")
    return new SvgPath(src);
  if (src instanceof SvgPath) {
    var s = new SvgPath("");
    s.err = src.err;
    s.segments = src.segments.map(function(sgm) {
      return sgm.slice();
    });
    s.__stack = src.__stack.map(function(m2) {
      return matrix().matrix(m2.toArray());
    });
    return s;
  }
  throw new Error("SvgPath.from: invalid param type " + src);
};
SvgPath.prototype.__matrix = function(m2) {
  var self = this, i;
  if (!m2.queue.length) {
    return;
  }
  this.iterate(function(s, index, x, y) {
    var p, result, name, isRelative;
    switch (s[0]) {
      case "v":
        p = m2.calc(0, s[1], true);
        result = p[0] === 0 ? ["v", p[1]] : ["l", p[0], p[1]];
        break;
      case "V":
        p = m2.calc(x, s[1], false);
        result = p[0] === m2.calc(x, y, false)[0] ? ["V", p[1]] : ["L", p[0], p[1]];
        break;
      case "h":
        p = m2.calc(s[1], 0, true);
        result = p[1] === 0 ? ["h", p[0]] : ["l", p[0], p[1]];
        break;
      case "H":
        p = m2.calc(s[1], y, false);
        result = p[1] === m2.calc(x, y, false)[1] ? ["H", p[0]] : ["L", p[0], p[1]];
        break;
      case "a":
      case "A":
        var ma = m2.toArray();
        var e = ellipse(s[1], s[2], s[3]).transform(ma);
        if (ma[0] * ma[3] - ma[1] * ma[2] < 0) {
          s[5] = s[5] ? "0" : "1";
        }
        p = m2.calc(s[6], s[7], s[0] === "a");
        if (s[0] === "A" && s[6] === x && s[7] === y || s[0] === "a" && s[6] === 0 && s[7] === 0) {
          result = [s[0] === "a" ? "l" : "L", p[0], p[1]];
          break;
        }
        if (e.isDegenerate()) {
          result = [s[0] === "a" ? "l" : "L", p[0], p[1]];
        } else {
          result = [s[0], e.rx, e.ry, e.ax, s[4], s[5], p[0], p[1]];
        }
        break;
      case "m":
        isRelative = index > 0;
        p = m2.calc(s[1], s[2], isRelative);
        result = ["m", p[0], p[1]];
        break;
      default:
        name = s[0];
        result = [name];
        isRelative = name.toLowerCase() === name;
        for (i = 1; i < s.length; i += 2) {
          p = m2.calc(s[i], s[i + 1], isRelative);
          result.push(p[0], p[1]);
        }
    }
    self.segments[index] = result;
  }, true);
};
SvgPath.prototype.__evaluateStack = function() {
  var m2, i;
  if (!this.__stack.length) {
    return;
  }
  if (this.__stack.length === 1) {
    this.__matrix(this.__stack[0]);
    this.__stack = [];
    return;
  }
  m2 = matrix();
  i = this.__stack.length;
  while (--i >= 0) {
    m2.matrix(this.__stack[i].toArray());
  }
  this.__matrix(m2);
  this.__stack = [];
};
SvgPath.prototype.toString = function() {
  var result = "", prevCmd = "", cmdSkipped = false;
  this.__evaluateStack();
  for (var i = 0, len = this.segments.length; i < len; i++) {
    var segment2 = this.segments[i];
    var cmd = segment2[0];
    if (cmd !== prevCmd || cmd === "m" || cmd === "M") {
      if (cmd === "m" && prevCmd === "z")
        result += " ";
      result += cmd;
      cmdSkipped = false;
    } else {
      cmdSkipped = true;
    }
    for (var pos = 1; pos < segment2.length; pos++) {
      var val = segment2[pos];
      if (pos === 1) {
        if (cmdSkipped && val >= 0)
          result += " ";
      } else if (val >= 0)
        result += " ";
      result += val;
    }
    prevCmd = cmd;
  }
  return result;
};
SvgPath.prototype.translate = function(x, y) {
  this.__stack.push(matrix().translate(x, y || 0));
  return this;
};
SvgPath.prototype.scale = function(sx, sy) {
  this.__stack.push(matrix().scale(sx, !sy && sy !== 0 ? sx : sy));
  return this;
};
SvgPath.prototype.rotate = function(angle, rx, ry) {
  this.__stack.push(matrix().rotate(angle, rx || 0, ry || 0));
  return this;
};
SvgPath.prototype.skewX = function(degrees) {
  this.__stack.push(matrix().skewX(degrees));
  return this;
};
SvgPath.prototype.skewY = function(degrees) {
  this.__stack.push(matrix().skewY(degrees));
  return this;
};
SvgPath.prototype.matrix = function(m2) {
  this.__stack.push(matrix().matrix(m2));
  return this;
};
SvgPath.prototype.transform = function(transformString) {
  if (!transformString.trim()) {
    return this;
  }
  this.__stack.push(transformParse2(transformString));
  return this;
};
SvgPath.prototype.round = function(d) {
  var contourStartDeltaX = 0, contourStartDeltaY = 0, deltaX = 0, deltaY = 0, l;
  d = d || 0;
  this.__evaluateStack();
  this.segments.forEach(function(s) {
    var isRelative = s[0].toLowerCase() === s[0];
    switch (s[0]) {
      case "H":
      case "h":
        if (isRelative) {
          s[1] += deltaX;
        }
        deltaX = s[1] - s[1].toFixed(d);
        s[1] = +s[1].toFixed(d);
        return;
      case "V":
      case "v":
        if (isRelative) {
          s[1] += deltaY;
        }
        deltaY = s[1] - s[1].toFixed(d);
        s[1] = +s[1].toFixed(d);
        return;
      case "Z":
      case "z":
        deltaX = contourStartDeltaX;
        deltaY = contourStartDeltaY;
        return;
      case "M":
      case "m":
        if (isRelative) {
          s[1] += deltaX;
          s[2] += deltaY;
        }
        deltaX = s[1] - s[1].toFixed(d);
        deltaY = s[2] - s[2].toFixed(d);
        contourStartDeltaX = deltaX;
        contourStartDeltaY = deltaY;
        s[1] = +s[1].toFixed(d);
        s[2] = +s[2].toFixed(d);
        return;
      case "A":
      case "a":
        if (isRelative) {
          s[6] += deltaX;
          s[7] += deltaY;
        }
        deltaX = s[6] - s[6].toFixed(d);
        deltaY = s[7] - s[7].toFixed(d);
        s[1] = +s[1].toFixed(d);
        s[2] = +s[2].toFixed(d);
        s[3] = +s[3].toFixed(d + 2);
        s[6] = +s[6].toFixed(d);
        s[7] = +s[7].toFixed(d);
        return;
      default:
        l = s.length;
        if (isRelative) {
          s[l - 2] += deltaX;
          s[l - 1] += deltaY;
        }
        deltaX = s[l - 2] - s[l - 2].toFixed(d);
        deltaY = s[l - 1] - s[l - 1].toFixed(d);
        s.forEach(function(val, i) {
          if (!i) {
            return;
          }
          s[i] = +s[i].toFixed(d);
        });
        return;
    }
  });
  return this;
};
SvgPath.prototype.iterate = function(iterator, keepLazyStack) {
  var segments = this.segments, replacements = {}, needReplace = false, lastX = 0, lastY = 0, countourStartX = 0, countourStartY = 0;
  var i, j, newSegments;
  if (!keepLazyStack) {
    this.__evaluateStack();
  }
  segments.forEach(function(s, index) {
    var res = iterator(s, index, lastX, lastY);
    if (Array.isArray(res)) {
      replacements[index] = res;
      needReplace = true;
    }
    var isRelative = s[0] === s[0].toLowerCase();
    switch (s[0]) {
      case "m":
      case "M":
        lastX = s[1] + (isRelative ? lastX : 0);
        lastY = s[2] + (isRelative ? lastY : 0);
        countourStartX = lastX;
        countourStartY = lastY;
        return;
      case "h":
      case "H":
        lastX = s[1] + (isRelative ? lastX : 0);
        return;
      case "v":
      case "V":
        lastY = s[1] + (isRelative ? lastY : 0);
        return;
      case "z":
      case "Z":
        lastX = countourStartX;
        lastY = countourStartY;
        return;
      default:
        lastX = s[s.length - 2] + (isRelative ? lastX : 0);
        lastY = s[s.length - 1] + (isRelative ? lastY : 0);
    }
  });
  if (!needReplace) {
    return this;
  }
  newSegments = [];
  for (i = 0; i < segments.length; i++) {
    if (typeof replacements[i] !== "undefined") {
      for (j = 0; j < replacements[i].length; j++) {
        newSegments.push(replacements[i][j]);
      }
    } else {
      newSegments.push(segments[i]);
    }
  }
  this.segments = newSegments;
  return this;
};
SvgPath.prototype.abs = function() {
  this.iterate(function(s, index, x, y) {
    var name = s[0], nameUC = name.toUpperCase(), i;
    if (name === nameUC) {
      return;
    }
    s[0] = nameUC;
    switch (name) {
      case "v":
        s[1] += y;
        return;
      case "a":
        s[6] += x;
        s[7] += y;
        return;
      default:
        for (i = 1; i < s.length; i++) {
          s[i] += i % 2 ? x : y;
        }
    }
  }, true);
  return this;
};
SvgPath.prototype.rel = function() {
  this.iterate(function(s, index, x, y) {
    var name = s[0], nameLC = name.toLowerCase(), i;
    if (name === nameLC) {
      return;
    }
    if (index === 0 && name === "M") {
      return;
    }
    s[0] = nameLC;
    switch (name) {
      case "V":
        s[1] -= y;
        return;
      case "A":
        s[6] -= x;
        s[7] -= y;
        return;
      default:
        for (i = 1; i < s.length; i++) {
          s[i] -= i % 2 ? x : y;
        }
    }
  }, true);
  return this;
};
SvgPath.prototype.unarc = function() {
  this.iterate(function(s, index, x, y) {
    var new_segments, nextX, nextY, result = [], name = s[0];
    if (name !== "A" && name !== "a") {
      return null;
    }
    if (name === "a") {
      nextX = x + s[6];
      nextY = y + s[7];
    } else {
      nextX = s[6];
      nextY = s[7];
    }
    new_segments = a2c$1(x, y, nextX, nextY, s[4], s[5], s[1], s[2], s[3]);
    if (new_segments.length === 0) {
      return [[s[0] === "a" ? "l" : "L", s[6], s[7]]];
    }
    new_segments.forEach(function(s2) {
      result.push(["C", s2[2], s2[3], s2[4], s2[5], s2[6], s2[7]]);
    });
    return result;
  });
  return this;
};
SvgPath.prototype.unshort = function() {
  var segments = this.segments;
  var prevControlX, prevControlY, prevSegment;
  var curControlX, curControlY;
  this.iterate(function(s, idx, x, y) {
    var name = s[0], nameUC = name.toUpperCase(), isRelative;
    if (!idx) {
      return;
    }
    if (nameUC === "T") {
      isRelative = name === "t";
      prevSegment = segments[idx - 1];
      if (prevSegment[0] === "Q") {
        prevControlX = prevSegment[1] - x;
        prevControlY = prevSegment[2] - y;
      } else if (prevSegment[0] === "q") {
        prevControlX = prevSegment[1] - prevSegment[3];
        prevControlY = prevSegment[2] - prevSegment[4];
      } else {
        prevControlX = 0;
        prevControlY = 0;
      }
      curControlX = -prevControlX;
      curControlY = -prevControlY;
      if (!isRelative) {
        curControlX += x;
        curControlY += y;
      }
      segments[idx] = [
        isRelative ? "q" : "Q",
        curControlX,
        curControlY,
        s[1],
        s[2]
      ];
    } else if (nameUC === "S") {
      isRelative = name === "s";
      prevSegment = segments[idx - 1];
      if (prevSegment[0] === "C") {
        prevControlX = prevSegment[3] - x;
        prevControlY = prevSegment[4] - y;
      } else if (prevSegment[0] === "c") {
        prevControlX = prevSegment[3] - prevSegment[5];
        prevControlY = prevSegment[4] - prevSegment[6];
      } else {
        prevControlX = 0;
        prevControlY = 0;
      }
      curControlX = -prevControlX;
      curControlY = -prevControlY;
      if (!isRelative) {
        curControlX += x;
        curControlY += y;
      }
      segments[idx] = [
        isRelative ? "c" : "C",
        curControlX,
        curControlY,
        s[1],
        s[2],
        s[3],
        s[4]
      ];
    }
  });
  return this;
};
var svgpath$1 = SvgPath;
var svgpath = svgpath$1;
var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 };
var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
function parse$1(path) {
  var data2 = [];
  path.replace(segment, function(_, command, args) {
    var type2 = command.toLowerCase();
    args = parseValues(args);
    if (type2 === "m" && args.length > 2) {
      data2.push([command].concat(args.splice(0, 2)));
      type2 = "l";
      command = command === "m" ? "l" : "L";
    }
    while (args.length >= 0) {
      if (args.length === length[type2]) {
        args.unshift(command);
        return data2.push(args);
      }
      if (args.length < length[type2]) {
        throw new Error("malformed path data");
      }
      data2.push([command].concat(args.splice(0, length[type2])));
    }
  });
  return data2;
}
var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
function parseValues(args) {
  var numbers = args.match(number);
  return numbers ? numbers.map(Number) : [];
}
function Bezier(ax, ay, bx, by, cx, cy, dx, dy) {
  return new Bezier$1(ax, ay, bx, by, cx, cy, dx, dy);
}
function Bezier$1(ax, ay, bx, by, cx, cy, dx, dy) {
  this.a = { x: ax, y: ay };
  this.b = { x: bx, y: by };
  this.c = { x: cx, y: cy };
  this.d = { x: dx, y: dy };
  if (dx !== null && dx !== void 0 && dy !== null && dy !== void 0) {
    this.getArcLength = getCubicArcLength;
    this.getPoint = cubicPoint;
    this.getDerivative = cubicDerivative;
  } else {
    this.getArcLength = getQuadraticArcLength;
    this.getPoint = quadraticPoint;
    this.getDerivative = quadraticDerivative;
  }
  this.init();
}
Bezier$1.prototype = {
  constructor: Bezier$1,
  init: function() {
    this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
  },
  getTotalLength: function() {
    return this.length;
  },
  getPointAtLength: function(length2) {
    var t = t2length(length2, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
    return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
  },
  getTangentAtLength: function(length2) {
    var t = t2length(length2, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
    var derivative = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
    var mdl = Math.sqrt(derivative.x * derivative.x + derivative.y * derivative.y);
    var tangent;
    if (mdl > 0) {
      tangent = { x: derivative.x / mdl, y: derivative.y / mdl };
    } else {
      tangent = { x: 0, y: 0 };
    }
    return tangent;
  },
  getPropertiesAtLength: function(length2) {
    var t = t2length(length2, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
    var derivative = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
    var mdl = Math.sqrt(derivative.x * derivative.x + derivative.y * derivative.y);
    var tangent;
    if (mdl > 0) {
      tangent = { x: derivative.x / mdl, y: derivative.y / mdl };
    } else {
      tangent = { x: 0, y: 0 };
    }
    var point = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
    return { x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y };
  }
};
function quadraticDerivative(xs, ys, t) {
  return {
    x: (1 - t) * 2 * (xs[1] - xs[0]) + t * 2 * (xs[2] - xs[1]),
    y: (1 - t) * 2 * (ys[1] - ys[0]) + t * 2 * (ys[2] - ys[1])
  };
}
function cubicDerivative(xs, ys, t) {
  var derivative = quadraticPoint([3 * (xs[1] - xs[0]), 3 * (xs[2] - xs[1]), 3 * (xs[3] - xs[2])], [3 * (ys[1] - ys[0]), 3 * (ys[2] - ys[1]), 3 * (ys[3] - ys[2])], t);
  return derivative;
}
function t2length(length2, total_length, func, xs, ys) {
  var error = 1;
  var t = length2 / total_length;
  var step = (length2 - func(xs, ys, t)) / total_length;
  while (error > 1e-3) {
    var increasedTLength = func(xs, ys, t + step);
    var decreasedTLength = func(xs, ys, t - step);
    var increasedTError = Math.abs(length2 - increasedTLength) / total_length;
    var decreasedTError = Math.abs(length2 - decreasedTLength) / total_length;
    if (increasedTError < error) {
      error = increasedTError;
      t += step;
    } else if (decreasedTError < error) {
      error = decreasedTError;
      t -= step;
    } else {
      step /= 2;
    }
  }
  return t;
}
function quadraticPoint(xs, ys, t) {
  var x = (1 - t) * (1 - t) * xs[0] + 2 * (1 - t) * t * xs[1] + t * t * xs[2];
  var y = (1 - t) * (1 - t) * ys[0] + 2 * (1 - t) * t * ys[1] + t * t * ys[2];
  return { x, y };
}
function cubicPoint(xs, ys, t) {
  var x = (1 - t) * (1 - t) * (1 - t) * xs[0] + 3 * (1 - t) * (1 - t) * t * xs[1] + 3 * (1 - t) * t * t * xs[2] + t * t * t * xs[3];
  var y = (1 - t) * (1 - t) * (1 - t) * ys[0] + 3 * (1 - t) * (1 - t) * t * ys[1] + 3 * (1 - t) * t * t * ys[2] + t * t * t * ys[3];
  return { x, y };
}
function getQuadraticArcLength(xs, ys, t) {
  if (t === void 0) {
    t = 1;
  }
  var ax = xs[0] - 2 * xs[1] + xs[2];
  var ay = ys[0] - 2 * ys[1] + ys[2];
  var bx = 2 * xs[1] - 2 * xs[0];
  var by = 2 * ys[1] - 2 * ys[0];
  var A = 4 * (ax * ax + ay * ay);
  var B2 = 4 * (ax * bx + ay * by);
  var C = bx * bx + by * by;
  if (A === 0) {
    return t * Math.sqrt(Math.pow(xs[2] - xs[0], 2) + Math.pow(ys[2] - ys[0], 2));
  }
  var b = B2 / (2 * A);
  var c = C / A;
  var u = t + b;
  var k = c - b * b;
  return Math.sqrt(A) / 2 * (u * Math.sqrt(u * u + k) - b * Math.sqrt(b * b + k) + k * Math.log(Math.abs((u + Math.sqrt(u * u + k)) / (b + Math.sqrt(b * b + k)))));
}
var tValues = [
  [],
  [],
  [-0.5773502691896257, 0.5773502691896257],
  [0, -0.7745966692414834, 0.7745966692414834],
  [-0.33998104358485626, 0.33998104358485626, -0.8611363115940526, 0.8611363115940526],
  [0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664, 0.906179845938664],
  [0.6612093864662645, -0.6612093864662645, -0.2386191860831969, 0.2386191860831969, -0.932469514203152, 0.932469514203152],
  [0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945, 0.7415311855993945, -0.9491079123427585, 0.9491079123427585],
  [-0.1834346424956498, 0.1834346424956498, -0.525532409916329, 0.525532409916329, -0.7966664774136267, 0.7966664774136267, -0.9602898564975363, 0.9602898564975363],
  [0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261, 0.9681602395076261, -0.3242534234038089, 0.3242534234038089, -0.6133714327005904, 0.6133714327005904],
  [-0.14887433898163122, 0.14887433898163122, -0.4333953941292472, 0.4333953941292472, -0.6794095682990244, 0.6794095682990244, -0.8650633666889845, 0.8650633666889845, -0.9739065285171717, 0.9739065285171717],
  [0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118, 0.5190961292068118, -0.7301520055740494, 0.7301520055740494, -0.8870625997680953, 0.8870625997680953, -0.978228658146057, 0.978228658146057],
  [-0.1252334085114689, 0.1252334085114689, -0.3678314989981802, 0.3678314989981802, -0.5873179542866175, 0.5873179542866175, -0.7699026741943047, 0.7699026741943047, -0.9041172563704749, 0.9041172563704749, -0.9815606342467192, 0.9815606342467192],
  [0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687, 0.44849275103644687, -0.6423493394403402, 0.6423493394403402, -0.8015780907333099, 0.8015780907333099, -0.9175983992229779, 0.9175983992229779, -0.9841830547185881, 0.9841830547185881],
  [-0.10805494870734367, 0.10805494870734367, -0.31911236892788974, 0.31911236892788974, -0.5152486363581541, 0.5152486363581541, -0.6872929048116855, 0.6872929048116855, -0.827201315069765, 0.827201315069765, -0.9284348836635735, 0.9284348836635735, -0.9862838086968123, 0.9862838086968123],
  [0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634, 0.3941513470775634, -0.5709721726085388, 0.5709721726085388, -0.7244177313601701, 0.7244177313601701, -0.8482065834104272, 0.8482065834104272, -0.937273392400706, 0.937273392400706, -0.9879925180204854, 0.9879925180204854],
  [-0.09501250983763744, 0.09501250983763744, -0.2816035507792589, 0.2816035507792589, -0.45801677765722737, 0.45801677765722737, -0.6178762444026438, 0.6178762444026438, -0.755404408355003, 0.755404408355003, -0.8656312023878318, 0.8656312023878318, -0.9445750230732326, 0.9445750230732326, -0.9894009349916499, 0.9894009349916499],
  [0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763, 0.3512317634538763, -0.5126905370864769, 0.5126905370864769, -0.6576711592166907, 0.6576711592166907, -0.7815140038968014, 0.7815140038968014, -0.8802391537269859, 0.8802391537269859, -0.9506755217687678, 0.9506755217687678, -0.9905754753144174, 0.9905754753144174],
  [-0.0847750130417353, 0.0847750130417353, -0.2518862256915055, 0.2518862256915055, -0.41175116146284263, 0.41175116146284263, -0.5597708310739475, 0.5597708310739475, -0.6916870430603532, 0.6916870430603532, -0.8037049589725231, 0.8037049589725231, -0.8926024664975557, 0.8926024664975557, -0.9558239495713977, 0.9558239495713977, -0.9915651684209309, 0.9915651684209309],
  [0, -0.16035864564022537, 0.16035864564022537, -0.31656409996362983, 0.31656409996362983, -0.46457074137596094, 0.46457074137596094, -0.600545304661681, 0.600545304661681, -0.7209661773352294, 0.7209661773352294, -0.8227146565371428, 0.8227146565371428, -0.9031559036148179, 0.9031559036148179, -0.96020815213483, 0.96020815213483, -0.9924068438435844, 0.9924068438435844],
  [-0.07652652113349734, 0.07652652113349734, -0.22778585114164507, 0.22778585114164507, -0.37370608871541955, 0.37370608871541955, -0.5108670019508271, 0.5108670019508271, -0.636053680726515, 0.636053680726515, -0.7463319064601508, 0.7463319064601508, -0.8391169718222188, 0.8391169718222188, -0.912234428251326, 0.912234428251326, -0.9639719272779138, 0.9639719272779138, -0.9931285991850949, 0.9931285991850949],
  [0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011, 0.2880213168024011, -0.4243421202074388, 0.4243421202074388, -0.5516188358872198, 0.5516188358872198, -0.6671388041974123, 0.6671388041974123, -0.7684399634756779, 0.7684399634756779, -0.8533633645833173, 0.8533633645833173, -0.9200993341504008, 0.9200993341504008, -0.9672268385663063, 0.9672268385663063, -0.9937521706203895, 0.9937521706203895],
  [-0.06973927331972223, 0.06973927331972223, -0.20786042668822127, 0.20786042668822127, -0.34193582089208424, 0.34193582089208424, -0.469355837986757, 0.469355837986757, -0.5876404035069116, 0.5876404035069116, -0.6944872631866827, 0.6944872631866827, -0.7878168059792081, 0.7878168059792081, -0.8658125777203002, 0.8658125777203002, -0.926956772187174, 0.926956772187174, -0.9700604978354287, 0.9700604978354287, -0.9942945854823992, 0.9942945854823992],
  [0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495, 0.26413568097034495, -0.3903010380302908, 0.3903010380302908, -0.5095014778460075, 0.5095014778460075, -0.6196098757636461, 0.6196098757636461, -0.7186613631319502, 0.7186613631319502, -0.8048884016188399, 0.8048884016188399, -0.8767523582704416, 0.8767523582704416, -0.9329710868260161, 0.9329710868260161, -0.9725424712181152, 0.9725424712181152, -0.9947693349975522, 0.9947693349975522],
  [-0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163, -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451, -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755, -0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903, -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328, -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213]
];
var cValues = [
  [],
  [],
  [1, 1],
  [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
  [0.6521451548625461, 0.6521451548625461, 0.34785484513745385, 0.34785484513745385],
  [0.5688888888888889, 0.47862867049936647, 0.47862867049936647, 0.23692688505618908, 0.23692688505618908],
  [0.3607615730481386, 0.3607615730481386, 0.46791393457269104, 0.46791393457269104, 0.17132449237917036, 0.17132449237917036],
  [0.4179591836734694, 0.3818300505051189, 0.3818300505051189, 0.27970539148927664, 0.27970539148927664, 0.1294849661688697, 0.1294849661688697],
  [0.362683783378362, 0.362683783378362, 0.31370664587788727, 0.31370664587788727, 0.22238103445337448, 0.22238103445337448, 0.10122853629037626, 0.10122853629037626],
  [0.3302393550012598, 0.1806481606948574, 0.1806481606948574, 0.08127438836157441, 0.08127438836157441, 0.31234707704000286, 0.31234707704000286, 0.26061069640293544, 0.26061069640293544],
  [0.29552422471475287, 0.29552422471475287, 0.26926671930999635, 0.26926671930999635, 0.21908636251598204, 0.21908636251598204, 0.1494513491505806, 0.1494513491505806, 0.06667134430868814, 0.06667134430868814],
  [0.2729250867779006, 0.26280454451024665, 0.26280454451024665, 0.23319376459199048, 0.23319376459199048, 0.18629021092773426, 0.18629021092773426, 0.1255803694649046, 0.1255803694649046, 0.05566856711617366, 0.05566856711617366],
  [0.24914704581340277, 0.24914704581340277, 0.2334925365383548, 0.2334925365383548, 0.20316742672306592, 0.20316742672306592, 0.16007832854334622, 0.16007832854334622, 0.10693932599531843, 0.10693932599531843, 0.04717533638651183, 0.04717533638651183],
  [0.2325515532308739, 0.22628318026289723, 0.22628318026289723, 0.2078160475368885, 0.2078160475368885, 0.17814598076194574, 0.17814598076194574, 0.13887351021978725, 0.13887351021978725, 0.09212149983772845, 0.09212149983772845, 0.04048400476531588, 0.04048400476531588],
  [0.2152638534631578, 0.2152638534631578, 0.2051984637212956, 0.2051984637212956, 0.18553839747793782, 0.18553839747793782, 0.15720316715819355, 0.15720316715819355, 0.12151857068790319, 0.12151857068790319, 0.08015808715976021, 0.08015808715976021, 0.03511946033175186, 0.03511946033175186],
  [0.2025782419255613, 0.19843148532711158, 0.19843148532711158, 0.1861610000155622, 0.1861610000155622, 0.16626920581699392, 0.16626920581699392, 0.13957067792615432, 0.13957067792615432, 0.10715922046717194, 0.10715922046717194, 0.07036604748810812, 0.07036604748810812, 0.03075324199611727, 0.03075324199611727],
  [0.1894506104550685, 0.1894506104550685, 0.18260341504492358, 0.18260341504492358, 0.16915651939500254, 0.16915651939500254, 0.14959598881657674, 0.14959598881657674, 0.12462897125553388, 0.12462897125553388, 0.09515851168249279, 0.09515851168249279, 0.062253523938647894, 0.062253523938647894, 0.027152459411754096, 0.027152459411754096],
  [0.17944647035620653, 0.17656270536699264, 0.17656270536699264, 0.16800410215645004, 0.16800410215645004, 0.15404576107681028, 0.15404576107681028, 0.13513636846852548, 0.13513636846852548, 0.11188384719340397, 0.11188384719340397, 0.08503614831717918, 0.08503614831717918, 0.0554595293739872, 0.0554595293739872, 0.02414830286854793, 0.02414830286854793],
  [0.1691423829631436, 0.1691423829631436, 0.16427648374583273, 0.16427648374583273, 0.15468467512626524, 0.15468467512626524, 0.14064291467065065, 0.14064291467065065, 0.12255520671147846, 0.12255520671147846, 0.10094204410628717, 0.10094204410628717, 0.07642573025488905, 0.07642573025488905, 0.0497145488949698, 0.0497145488949698, 0.02161601352648331, 0.02161601352648331],
  [0.1610544498487837, 0.15896884339395434, 0.15896884339395434, 0.15276604206585967, 0.15276604206585967, 0.1426067021736066, 0.1426067021736066, 0.12875396253933621, 0.12875396253933621, 0.11156664554733399, 0.11156664554733399, 0.09149002162245, 0.09149002162245, 0.06904454273764123, 0.06904454273764123, 0.0448142267656996, 0.0448142267656996, 0.019461788229726478, 0.019461788229726478],
  [0.15275338713072584, 0.15275338713072584, 0.14917298647260374, 0.14917298647260374, 0.14209610931838204, 0.14209610931838204, 0.13168863844917664, 0.13168863844917664, 0.11819453196151841, 0.11819453196151841, 0.10193011981724044, 0.10193011981724044, 0.08327674157670475, 0.08327674157670475, 0.06267204833410907, 0.06267204833410907, 0.04060142980038694, 0.04060142980038694, 0.017614007139152118, 0.017614007139152118],
  [0.14608113364969041, 0.14452440398997005, 0.14452440398997005, 0.13988739479107315, 0.13988739479107315, 0.13226893863333747, 0.13226893863333747, 0.12183141605372853, 0.12183141605372853, 0.10879729916714838, 0.10879729916714838, 0.09344442345603386, 0.09344442345603386, 0.0761001136283793, 0.0761001136283793, 0.057134425426857205, 0.057134425426857205, 0.036953789770852494, 0.036953789770852494, 0.016017228257774335, 0.016017228257774335],
  [0.13925187285563198, 0.13925187285563198, 0.13654149834601517, 0.13654149834601517, 0.13117350478706238, 0.13117350478706238, 0.12325237681051242, 0.12325237681051242, 0.11293229608053922, 0.11293229608053922, 0.10041414444288096, 0.10041414444288096, 0.08594160621706773, 0.08594160621706773, 0.06979646842452049, 0.06979646842452049, 0.052293335152683286, 0.052293335152683286, 0.03377490158481415, 0.03377490158481415, 0.0146279952982722, 0.0146279952982722],
  [0.13365457218610619, 0.1324620394046966, 0.1324620394046966, 0.12890572218808216, 0.12890572218808216, 0.12304908430672953, 0.12304908430672953, 0.11499664022241136, 0.11499664022241136, 0.10489209146454141, 0.10489209146454141, 0.09291576606003515, 0.09291576606003515, 0.07928141177671895, 0.07928141177671895, 0.06423242140852585, 0.06423242140852585, 0.04803767173108467, 0.04803767173108467, 0.030988005856979445, 0.030988005856979445, 0.013411859487141771, 0.013411859487141771],
  [0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283, 0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256, 0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388, 0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803, 0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981, 0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872]
];
var binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
function binomials(n2, k) {
  return binomialCoefficients[n2][k];
}
function getDerivative(derivative, t, vs) {
  var n2 = vs.length - 1, _vs, value, k;
  if (n2 === 0) {
    return 0;
  }
  if (derivative === 0) {
    value = 0;
    for (k = 0; k <= n2; k++) {
      value += binomials(n2, k) * Math.pow(1 - t, n2 - k) * Math.pow(t, k) * vs[k];
    }
    return value;
  } else {
    _vs = new Array(n2);
    for (k = 0; k < n2; k++) {
      _vs[k] = n2 * (vs[k + 1] - vs[k]);
    }
    return getDerivative(derivative - 1, t, _vs);
  }
}
function B(xs, ys, t) {
  var xbase = getDerivative(1, t, xs);
  var ybase = getDerivative(1, t, ys);
  var combined = xbase * xbase + ybase * ybase;
  return Math.sqrt(combined);
}
function getCubicArcLength(xs, ys, t) {
  var z, sum, i, correctedT;
  if (t === void 0) {
    t = 1;
  }
  var n2 = 20;
  z = t / 2;
  sum = 0;
  for (i = 0; i < n2; i++) {
    correctedT = z * tValues[n2][i] + z;
    sum += cValues[n2][i] * B(xs, ys, correctedT);
  }
  return z * sum;
}
var TAU = Math.PI * 2;
function unit_vector_angle(ux, uy, vx, vy) {
  var sign2 = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy;
  if (dot > 1) {
    dot = 1;
  }
  if (dot < -1) {
    dot = -1;
  }
  return sign2 * Math.acos(dot);
}
function get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  var rx_sq = rx * rx;
  var ry_sq = ry * ry;
  var x1p_sq = x1p * x1p;
  var y1p_sq = y1p * y1p;
  var radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;
  if (radicant < 0) {
    radicant = 0;
  }
  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);
  var cxp = radicant * rx / ry * y1p;
  var cyp = radicant * -ry / rx * x1p;
  var cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  var cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2;
  var v1x = (x1p - cxp) / rx;
  var v1y = (y1p - cyp) / ry;
  var v2x = (-x1p - cxp) / rx;
  var v2y = (-y1p - cyp) / ry;
  var theta1 = unit_vector_angle(1, 0, v1x, v1y);
  var delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);
  if (fs === 0 && delta_theta > 0) {
    delta_theta -= TAU;
  }
  if (fs === 1 && delta_theta < 0) {
    delta_theta += TAU;
  }
  return [cx, cy, theta1, delta_theta];
}
function approximate_unit_arc(theta1, delta_theta) {
  var alpha = 4 / 3 * Math.tan(delta_theta / 4);
  var x1 = Math.cos(theta1);
  var y1 = Math.sin(theta1);
  var x2 = Math.cos(theta1 + delta_theta);
  var y2 = Math.sin(theta1 + delta_theta);
  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}
function a2c2(x1, y1, rx, ry, phi, fa, fs, x2, y2) {
  var sin_phi = Math.sin(phi * TAU / 360);
  var cos_phi = Math.cos(phi * TAU / 360);
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  if (x1p === 0 && y1p === 0) {
    return [];
  }
  if (rx === 0 || ry === 0) {
    return [];
  }
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }
  var cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);
  var result = [];
  var theta1 = cc[2];
  var delta_theta = cc[3];
  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;
  for (var i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  }
  return result.map(function(curve) {
    for (var i2 = 0; i2 < curve.length; i2 += 2) {
      var x = curve[i2 + 0];
      var y = curve[i2 + 1];
      x *= rx;
      y *= ry;
      var xp = cos_phi * x - sin_phi * y;
      var yp = sin_phi * x + cos_phi * y;
      curve[i2 + 0] = xp + cc[0];
      curve[i2 + 1] = yp + cc[1];
    }
    return curve;
  });
}
function Arc(x0, y0, rx, ry, xAxisRotate, LargeArcFlag, SweepFlag, x, y) {
  return new Arc$1(x0, y0, rx, ry, xAxisRotate, LargeArcFlag, SweepFlag, x, y);
}
function Arc$1(x0, y0, rx, ry, xAxisRotate, LargeArcFlag, SweepFlag, x, y) {
  var length2 = 0;
  var partialLengths = [];
  var curves = [];
  var res = a2c2(x0, y0, rx, ry, xAxisRotate, LargeArcFlag, SweepFlag, x, y);
  res.forEach(function(d) {
    var curve = new Bezier(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
    var curveLength = curve.getTotalLength();
    length2 += curveLength;
    partialLengths.push(curveLength);
    curves.push(curve);
  });
  this.length = length2;
  this.partialLengths = partialLengths;
  this.curves = curves;
}
Arc$1.prototype = {
  constructor: Arc$1,
  init: function() {
  },
  getTotalLength: function() {
    return this.length;
  },
  getPointAtLength: function(fractionLength) {
    if (fractionLength < 0) {
      fractionLength = 0;
    } else if (fractionLength > this.length) {
      fractionLength = this.length;
    }
    var i = this.partialLengths.length - 1;
    while (this.partialLengths[i] >= fractionLength && this.partialLengths[i] > 0) {
      i--;
    }
    if (i < this.partialLengths.length - 1) {
      i++;
    }
    var lengthOffset = 0;
    for (var j = 0; j < i; j++) {
      lengthOffset += this.partialLengths[j];
    }
    return this.curves[i].getPointAtLength(fractionLength - lengthOffset);
  },
  getTangentAtLength: function(fractionLength) {
    if (fractionLength < 0) {
      fractionLength = 0;
    } else if (fractionLength > this.length) {
      fractionLength = this.length;
    }
    var i = this.partialLengths.length - 1;
    while (this.partialLengths[i] >= fractionLength && this.partialLengths[i] > 0) {
      i--;
    }
    if (i < this.partialLengths.length - 1) {
      i++;
    }
    var lengthOffset = 0;
    for (var j = 0; j < i; j++) {
      lengthOffset += this.partialLengths[j];
    }
    return this.curves[i].getTangentAtLength(fractionLength - lengthOffset);
  },
  getPropertiesAtLength: function(fractionLength) {
    var tangent = this.getTangentAtLength(fractionLength);
    var point = this.getPointAtLength(fractionLength);
    return { x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y };
  }
};
function LinearPosition(x0, x1, y0, y1) {
  return new LinearPosition$1(x0, x1, y0, y1);
}
function LinearPosition$1(x0, x1, y0, y1) {
  this.x0 = x0;
  this.x1 = x1;
  this.y0 = y0;
  this.y1 = y1;
}
LinearPosition$1.prototype.getTotalLength = function() {
  return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2));
};
LinearPosition$1.prototype.getPointAtLength = function(pos) {
  var fraction = pos / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2));
  var newDeltaX = (this.x1 - this.x0) * fraction;
  var newDeltaY = (this.y1 - this.y0) * fraction;
  return { x: this.x0 + newDeltaX, y: this.y0 + newDeltaY };
};
LinearPosition$1.prototype.getTangentAtLength = function() {
  var module = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
  return { x: (this.x1 - this.x0) / module, y: (this.y1 - this.y0) / module };
};
LinearPosition$1.prototype.getPropertiesAtLength = function(pos) {
  var point = this.getPointAtLength(pos);
  var tangent = this.getTangentAtLength();
  return { x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y };
};
function svgPathProperties(svgString) {
  var length2 = 0;
  var partial_lengths = [];
  var functions = [];
  function svgProperties(string) {
    if (!string) {
      return null;
    }
    var parsed = parse$1(string);
    var cur = [0, 0];
    var prev_point = [0, 0];
    var curve;
    var ringStart;
    for (var i = 0; i < parsed.length; i++) {
      if (parsed[i][0] === "M") {
        cur = [parsed[i][1], parsed[i][2]];
        ringStart = [cur[0], cur[1]];
        functions.push(null);
      } else if (parsed[i][0] === "m") {
        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[1]];
        ringStart = [cur[0], cur[1]];
        functions.push(null);
      } else if (parsed[i][0] === "L") {
        length2 = length2 + Math.sqrt(Math.pow(cur[0] - parsed[i][1], 2) + Math.pow(cur[1] - parsed[i][2], 2));
        functions.push(new LinearPosition(cur[0], parsed[i][1], cur[1], parsed[i][2]));
        cur = [parsed[i][1], parsed[i][2]];
      } else if (parsed[i][0] === "l") {
        length2 = length2 + Math.sqrt(Math.pow(parsed[i][1], 2) + Math.pow(parsed[i][2], 2));
        functions.push(new LinearPosition(cur[0], parsed[i][1] + cur[0], cur[1], parsed[i][2] + cur[1]));
        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[1]];
      } else if (parsed[i][0] === "H") {
        length2 = length2 + Math.abs(cur[0] - parsed[i][1]);
        functions.push(new LinearPosition(cur[0], parsed[i][1], cur[1], cur[1]));
        cur[0] = parsed[i][1];
      } else if (parsed[i][0] === "h") {
        length2 = length2 + Math.abs(parsed[i][1]);
        functions.push(new LinearPosition(cur[0], cur[0] + parsed[i][1], cur[1], cur[1]));
        cur[0] = parsed[i][1] + cur[0];
      } else if (parsed[i][0] === "V") {
        length2 = length2 + Math.abs(cur[1] - parsed[i][1]);
        functions.push(new LinearPosition(cur[0], cur[0], cur[1], parsed[i][1]));
        cur[1] = parsed[i][1];
      } else if (parsed[i][0] === "v") {
        length2 = length2 + Math.abs(parsed[i][1]);
        functions.push(new LinearPosition(cur[0], cur[0], cur[1], cur[1] + parsed[i][1]));
        cur[1] = parsed[i][1] + cur[1];
      } else if (parsed[i][0] === "z" || parsed[i][0] === "Z") {
        length2 = length2 + Math.sqrt(Math.pow(ringStart[0] - cur[0], 2) + Math.pow(ringStart[1] - cur[1], 2));
        functions.push(new LinearPosition(cur[0], ringStart[0], cur[1], ringStart[1]));
        cur = [ringStart[0], ringStart[1]];
      } else if (parsed[i][0] === "C") {
        curve = new Bezier(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], parsed[i][6]);
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][5], parsed[i][6]];
        functions.push(curve);
      } else if (parsed[i][0] === "c") {
        curve = new Bezier(cur[0], cur[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2], cur[0] + parsed[i][3], cur[1] + parsed[i][4], cur[0] + parsed[i][5], cur[1] + parsed[i][6]);
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][5] + cur[0], parsed[i][6] + cur[1]];
        functions.push(curve);
      } else if (parsed[i][0] === "S") {
        if (i > 0 && ["C", "c", "S", "s"].indexOf(parsed[i - 1][0]) > -1) {
          curve = new Bezier(cur[0], cur[1], 2 * cur[0] - parsed[i - 1][parsed[i - 1].length - 4], 2 * cur[1] - parsed[i - 1][parsed[i - 1].length - 3], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4]);
        } else {
          curve = new Bezier(cur[0], cur[1], cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4]);
        }
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][3], parsed[i][4]];
        functions.push(curve);
      } else if (parsed[i][0] === "s") {
        if (i > 0 && ["C", "c", "S", "s"].indexOf(parsed[i - 1][0]) > -1) {
          curve = new Bezier(cur[0], cur[1], cur[0] + curve.d.x - curve.c.x, cur[1] + curve.d.y - curve.c.y, cur[0] + parsed[i][1], cur[1] + parsed[i][2], cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
        } else {
          curve = new Bezier(cur[0], cur[1], cur[0], cur[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2], cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
        }
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][3] + cur[0], parsed[i][4] + cur[1]];
        functions.push(curve);
      } else if (parsed[i][0] === "Q") {
        if (cur[0] != parsed[i][1] && cur[1] != parsed[i][2]) {
          curve = new Bezier(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4]);
        } else {
          curve = new LinearPosition(parsed[i][1], parsed[i][3], parsed[i][2], parsed[i][4]);
        }
        length2 = length2 + curve.getTotalLength();
        functions.push(curve);
        cur = [parsed[i][3], parsed[i][4]];
        prev_point = [parsed[i][1], parsed[i][2]];
      } else if (parsed[i][0] === "q") {
        if (!(parsed[i][1] == 0 && parsed[i][2] == 0)) {
          curve = new Bezier(cur[0], cur[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2], cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
        } else {
          curve = new LinearPosition(cur[0] + parsed[i][1], cur[0] + parsed[i][3], cur[1] + parsed[i][2], cur[1] + parsed[i][4]);
        }
        length2 = length2 + curve.getTotalLength();
        prev_point = [cur[0] + parsed[i][1], cur[1] + parsed[i][2]];
        cur = [parsed[i][3] + cur[0], parsed[i][4] + cur[1]];
        functions.push(curve);
      } else if (parsed[i][0] === "T") {
        if (i > 0 && ["Q", "q", "T", "t"].indexOf(parsed[i - 1][0]) > -1) {
          curve = new Bezier(cur[0], cur[1], 2 * cur[0] - prev_point[0], 2 * cur[1] - prev_point[1], parsed[i][1], parsed[i][2]);
        } else {
          curve = new LinearPosition(cur[0], parsed[i][1], cur[1], parsed[i][2]);
        }
        functions.push(curve);
        length2 = length2 + curve.getTotalLength();
        prev_point = [2 * cur[0] - prev_point[0], 2 * cur[1] - prev_point[1]];
        cur = [parsed[i][1], parsed[i][2]];
      } else if (parsed[i][0] === "t") {
        if (i > 0 && ["Q", "q", "T", "t"].indexOf(parsed[i - 1][0]) > -1) {
          curve = new Bezier(cur[0], cur[1], 2 * cur[0] - prev_point[0], 2 * cur[1] - prev_point[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2]);
        } else {
          curve = new LinearPosition(cur[0], cur[0] + parsed[i][1], cur[1], cur[1] + parsed[i][2]);
        }
        length2 = length2 + curve.getTotalLength();
        prev_point = [2 * cur[0] - prev_point[0], 2 * cur[1] - prev_point[1]];
        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[0]];
        functions.push(curve);
      } else if (parsed[i][0] === "A") {
        curve = new Arc(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], parsed[i][6], parsed[i][7]);
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][6], parsed[i][7]];
        functions.push(curve);
      } else if (parsed[i][0] === "a") {
        curve = new Arc(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], cur[0] + parsed[i][6], cur[1] + parsed[i][7]);
        length2 = length2 + curve.getTotalLength();
        cur = [cur[0] + parsed[i][6], cur[1] + parsed[i][7]];
        functions.push(curve);
      }
      partial_lengths.push(length2);
    }
    return svgProperties;
  }
  svgProperties.getTotalLength = function() {
    return length2;
  };
  svgProperties.getPointAtLength = function(fractionLength) {
    var fractionPart = getPartAtLength(fractionLength);
    return functions[fractionPart.i].getPointAtLength(fractionPart.fraction);
  };
  svgProperties.getTangentAtLength = function(fractionLength) {
    var fractionPart = getPartAtLength(fractionLength);
    return functions[fractionPart.i].getTangentAtLength(fractionPart.fraction);
  };
  svgProperties.getPropertiesAtLength = function(fractionLength) {
    var fractionPart = getPartAtLength(fractionLength);
    return functions[fractionPart.i].getPropertiesAtLength(fractionPart.fraction);
  };
  var getPartAtLength = function(fractionLength) {
    if (fractionLength < 0) {
      fractionLength = 0;
    } else if (fractionLength > length2) {
      fractionLength = length2;
    }
    var i = partial_lengths.length - 1;
    while (partial_lengths[i] >= fractionLength && partial_lengths[i] > 0) {
      i--;
    }
    i++;
    return { fraction: fractionLength - partial_lengths[i - 1], i };
  };
  return svgProperties(svgString);
}
function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
}
function pointAlong(a, b, pct) {
  return [a[0] + (b[0] - a[0]) * pct, a[1] + (b[1] - a[1]) * pct];
}
function samePoint(a, b) {
  return distance(a, b) < 1e-9;
}
function interpolatePoints(a, b, string) {
  let interpolators = a.map((d, i) => interpolatePoint(d, b[i]));
  return function(t) {
    let values = interpolators.map((fn) => fn(t));
    return string ? toPathString(values) : values;
  };
}
function interpolatePoint(a, b) {
  return function(t) {
    return a.map((d, i) => d + t * (b[i] - d));
  };
}
function isFiniteNumber(number2) {
  return typeof number2 === "number" && isFinite(number2);
}
function polygonCentroid(polygon) {
  return nonZeroArea(polygon) ? d3Centroid(polygon) : [
    (polygon[0][0] + polygon[polygon.length - 1][0]) / 2,
    (polygon[0][1] + polygon[polygon.length - 1][1]) / 2
  ];
}
function nonZeroArea(polygon) {
  for (let i = 0; i < polygon.length - 2; i++) {
    let a = polygon[i], b = polygon[i + 1], c = polygon[i + 2];
    if (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) {
      return true;
    }
  }
  return false;
}
const INVALID_INPUT = `All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).
Example valid ways of supplying a shape would be:
[[0, 0], [10, 0], [10, 10]]
"M0,0 L10,0 L10,10Z"
`;
const INVALID_INPUT_ALL = `flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).`;
function parse(str) {
  return new svgpath(str).abs();
}
function split(parsed) {
  return parsed.toString().split("M").map((d, i) => {
    d = d.trim();
    return i && d ? "M" + d : d;
  }).filter((d) => d);
}
function toPathString(ring) {
  return "M" + ring.join("L") + "Z";
}
function pathStringToRing(str, maxSegmentLength) {
  let parsed = parse(str);
  return exactRing(parsed) || approximateRing(parsed, maxSegmentLength);
}
function exactRing(parsed) {
  let segments = parsed.segments || [], ring = [];
  if (!segments.length || segments[0][0] !== "M") {
    return false;
  }
  for (let i = 0; i < segments.length; i++) {
    let [command, x, y] = segments[i];
    if (command === "M" && i || command === "Z") {
      break;
    } else if (command === "M" || command === "L") {
      ring.push([x, y]);
    } else if (command === "H") {
      ring.push([x, ring[ring.length - 1][1]]);
    } else if (command === "V") {
      ring.push([ring[ring.length - 1][0], x]);
    } else {
      return false;
    }
  }
  return ring.length ? { ring } : false;
}
function approximateRing(parsed, maxSegmentLength) {
  let ringPath = split(parsed)[0], ring = [], len, m2, numPoints2 = 3;
  if (!ringPath) {
    throw new TypeError(INVALID_INPUT);
  }
  m2 = measure(ringPath);
  len = m2.getTotalLength();
  if (maxSegmentLength && isFiniteNumber(maxSegmentLength) && maxSegmentLength > 0) {
    numPoints2 = Math.max(numPoints2, Math.ceil(len / maxSegmentLength));
  }
  for (let i = 0; i < numPoints2; i++) {
    let p = m2.getPointAtLength(len * i / numPoints2);
    ring.push([p.x, p.y]);
  }
  return {
    ring,
    skipBisect: true
  };
}
function measure(d) {
  if (typeof window !== "undefined" && window && window.document) {
    try {
      let path = window.document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttributeNS(null, "d", d);
      return path;
    } catch (e) {
    }
  }
  return svgPathProperties(d);
}
function addPoints(ring, numPoints2) {
  const desiredLength = ring.length + numPoints2, step = polygonLength(ring) / numPoints2;
  let i = 0, cursor = 0, insertAt = step / 2;
  while (ring.length < desiredLength) {
    let a = ring[i], b = ring[(i + 1) % ring.length], segment2 = distance(a, b);
    if (insertAt <= cursor + segment2) {
      ring.splice(i + 1, 0, segment2 ? pointAlong(a, b, (insertAt - cursor) / segment2) : a.slice(0));
      insertAt += step;
      continue;
    }
    cursor += segment2;
    i++;
  }
}
function bisect(ring, maxSegmentLength = Infinity) {
  for (let i = 0; i < ring.length; i++) {
    let a = ring[i], b = i === ring.length - 1 ? ring[0] : ring[i + 1];
    while (distance(a, b) > maxSegmentLength) {
      b = pointAlong(a, b, 0.5);
      ring.splice(i + 1, 0, b);
    }
  }
}
function normalizeRing(ring, maxSegmentLength) {
  let points, area2, skipBisect;
  if (typeof ring === "string") {
    let converted = pathStringToRing(ring, maxSegmentLength);
    ring = converted.ring;
    skipBisect = converted.skipBisect;
  } else if (!Array.isArray(ring)) {
    throw new TypeError(INVALID_INPUT);
  }
  points = ring.slice(0);
  if (!validRing(points)) {
    throw new TypeError(INVALID_INPUT);
  }
  if (points.length > 1 && samePoint(points[0], points[points.length - 1])) {
    points.pop();
  }
  area2 = polygonArea(points);
  if (area2 > 0) {
    points.reverse();
  }
  if (!skipBisect && maxSegmentLength && isFiniteNumber(maxSegmentLength) && maxSegmentLength > 0) {
    bisect(points, maxSegmentLength);
  }
  return points;
}
function validRing(ring) {
  return ring.every(function(point) {
    return Array.isArray(point) && point.length >= 2 && isFiniteNumber(point[0]) && isFiniteNumber(point[1]);
  });
}
function rotate(ring, vs) {
  let len = ring.length, min = Infinity, bestOffset, sumOfSquares, spliced;
  for (let offset = 0; offset < len; offset++) {
    sumOfSquares = 0;
    vs.forEach(function(p, i) {
      let d = distance(ring[(offset + i) % len], p);
      sumOfSquares += d * d;
    });
    if (sumOfSquares < min) {
      min = sumOfSquares;
      bestOffset = offset;
    }
  }
  if (bestOffset) {
    spliced = ring.splice(0, bestOffset);
    ring.splice(ring.length, 0, ...spliced);
  }
}
function interpolateRing(fromRing, toRing, string) {
  let diff;
  diff = fromRing.length - toRing.length;
  addPoints(fromRing, diff < 0 ? diff * -1 : 0);
  addPoints(toRing, diff > 0 ? diff : 0);
  rotate(fromRing, toRing);
  return interpolatePoints(fromRing, toRing, string);
}
var earcut$1 = { exports: {} };
earcut$1.exports = earcut;
earcut$1.exports.default = earcut;
function earcut(data2, holeIndices, dim) {
  dim = dim || 2;
  var hasHoles = holeIndices && holeIndices.length, outerLen = hasHoles ? holeIndices[0] * dim : data2.length, outerNode = linkedList(data2, 0, outerLen, dim, true), triangles = [];
  if (!outerNode || outerNode.next === outerNode.prev)
    return triangles;
  var minX, minY, maxX, maxY, x, y, invSize;
  if (hasHoles)
    outerNode = eliminateHoles(data2, holeIndices, outerNode, dim);
  if (data2.length > 80 * dim) {
    minX = maxX = data2[0];
    minY = maxY = data2[1];
    for (var i = dim; i < outerLen; i += dim) {
      x = data2[i];
      y = data2[i + 1];
      if (x < minX)
        minX = x;
      if (y < minY)
        minY = y;
      if (x > maxX)
        maxX = x;
      if (y > maxY)
        maxY = y;
    }
    invSize = Math.max(maxX - minX, maxY - minY);
    invSize = invSize !== 0 ? 1 / invSize : 0;
  }
  earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
  return triangles;
}
function linkedList(data2, start, end, dim, clockwise) {
  var i, last;
  if (clockwise === signedArea(data2, start, end, dim) > 0) {
    for (i = start; i < end; i += dim)
      last = insertNode(i, data2[i], data2[i + 1], last);
  } else {
    for (i = end - dim; i >= start; i -= dim)
      last = insertNode(i, data2[i], data2[i + 1], last);
  }
  if (last && equals(last, last.next)) {
    removeNode(last);
    last = last.next;
  }
  return last;
}
function filterPoints(start, end) {
  if (!start)
    return start;
  if (!end)
    end = start;
  var p = start, again;
  do {
    again = false;
    if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
      removeNode(p);
      p = end = p.prev;
      if (p === p.next)
        break;
      again = true;
    } else {
      p = p.next;
    }
  } while (again || p !== end);
  return end;
}
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear)
    return;
  if (!pass && invSize)
    indexCurve(ear, minX, minY, invSize);
  var stop = ear, prev, next;
  while (ear.prev !== ear.next) {
    prev = ear.prev;
    next = ear.next;
    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      triangles.push(prev.i / dim);
      triangles.push(ear.i / dim);
      triangles.push(next.i / dim);
      removeNode(ear);
      ear = next.next;
      stop = next.next;
      continue;
    }
    ear = next;
    if (ear === stop) {
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }
      break;
    }
  }
}
function isEar(ear) {
  var a = ear.prev, b = ear, c = ear.next;
  if (area(a, b, c) >= 0)
    return false;
  var p = ear.next.next;
  while (p !== ear.prev) {
    if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.next;
  }
  return true;
}
function isEarHashed(ear, minX, minY, invSize) {
  var a = ear.prev, b = ear, c = ear.next;
  if (area(a, b, c) >= 0)
    return false;
  var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x, minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y, maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x, maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;
  var minZ = zOrder(minTX, minTY, minX, minY, invSize), maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
  var p = ear.prevZ, n2 = ear.nextZ;
  while (p && p.z >= minZ && n2 && n2.z <= maxZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.prevZ;
    if (n2 !== ear.prev && n2 !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n2.x, n2.y) && area(n2.prev, n2, n2.next) >= 0)
      return false;
    n2 = n2.nextZ;
  }
  while (p && p.z >= minZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.prevZ;
  }
  while (n2 && n2.z <= maxZ) {
    if (n2 !== ear.prev && n2 !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n2.x, n2.y) && area(n2.prev, n2, n2.next) >= 0)
      return false;
    n2 = n2.nextZ;
  }
  return true;
}
function cureLocalIntersections(start, triangles, dim) {
  var p = start;
  do {
    var a = p.prev, b = p.next.next;
    if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
      triangles.push(a.i / dim);
      triangles.push(p.i / dim);
      triangles.push(b.i / dim);
      removeNode(p);
      removeNode(p.next);
      p = start = b;
    }
    p = p.next;
  } while (p !== start);
  return filterPoints(p);
}
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  var a = start;
  do {
    var b = a.next.next;
    while (b !== a.prev) {
      if (a.i !== b.i && isValidDiagonal(a, b)) {
        var c = splitPolygon(a, b);
        a = filterPoints(a, a.next);
        c = filterPoints(c, c.next);
        earcutLinked(a, triangles, dim, minX, minY, invSize);
        earcutLinked(c, triangles, dim, minX, minY, invSize);
        return;
      }
      b = b.next;
    }
    a = a.next;
  } while (a !== start);
}
function eliminateHoles(data2, holeIndices, outerNode, dim) {
  var queue = [], i, len, start, end, list;
  for (i = 0, len = holeIndices.length; i < len; i++) {
    start = holeIndices[i] * dim;
    end = i < len - 1 ? holeIndices[i + 1] * dim : data2.length;
    list = linkedList(data2, start, end, dim, false);
    if (list === list.next)
      list.steiner = true;
    queue.push(getLeftmost(list));
  }
  queue.sort(compareX);
  for (i = 0; i < queue.length; i++) {
    outerNode = eliminateHole(queue[i], outerNode);
    outerNode = filterPoints(outerNode, outerNode.next);
  }
  return outerNode;
}
function compareX(a, b) {
  return a.x - b.x;
}
function eliminateHole(hole, outerNode) {
  var bridge = findHoleBridge(hole, outerNode);
  if (!bridge) {
    return outerNode;
  }
  var bridgeReverse = splitPolygon(bridge, hole);
  var filteredBridge = filterPoints(bridge, bridge.next);
  filterPoints(bridgeReverse, bridgeReverse.next);
  return outerNode === bridge ? filteredBridge : outerNode;
}
function findHoleBridge(hole, outerNode) {
  var p = outerNode, hx = hole.x, hy = hole.y, qx = -Infinity, m2;
  do {
    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
      var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
      if (x <= hx && x > qx) {
        qx = x;
        if (x === hx) {
          if (hy === p.y)
            return p;
          if (hy === p.next.y)
            return p.next;
        }
        m2 = p.x < p.next.x ? p : p.next;
      }
    }
    p = p.next;
  } while (p !== outerNode);
  if (!m2)
    return null;
  if (hx === qx)
    return m2;
  var stop = m2, mx = m2.x, my = m2.y, tanMin = Infinity, tan;
  p = m2;
  do {
    if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
      tan = Math.abs(hy - p.y) / (hx - p.x);
      if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m2.x || p.x === m2.x && sectorContainsSector(m2, p)))) {
        m2 = p;
        tanMin = tan;
      }
    }
    p = p.next;
  } while (p !== stop);
  return m2;
}
function sectorContainsSector(m2, p) {
  return area(m2.prev, m2, p.prev) < 0 && area(p.next, m2, m2.next) < 0;
}
function indexCurve(start, minX, minY, invSize) {
  var p = start;
  do {
    if (p.z === null)
      p.z = zOrder(p.x, p.y, minX, minY, invSize);
    p.prevZ = p.prev;
    p.nextZ = p.next;
    p = p.next;
  } while (p !== start);
  p.prevZ.nextZ = null;
  p.prevZ = null;
  sortLinked(p);
}
function sortLinked(list) {
  var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
  do {
    p = list;
    list = null;
    tail = null;
    numMerges = 0;
    while (p) {
      numMerges++;
      q = p;
      pSize = 0;
      for (i = 0; i < inSize; i++) {
        pSize++;
        q = q.nextZ;
        if (!q)
          break;
      }
      qSize = inSize;
      while (pSize > 0 || qSize > 0 && q) {
        if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
          e = p;
          p = p.nextZ;
          pSize--;
        } else {
          e = q;
          q = q.nextZ;
          qSize--;
        }
        if (tail)
          tail.nextZ = e;
        else
          list = e;
        e.prevZ = tail;
        tail = e;
      }
      p = q;
    }
    tail.nextZ = null;
    inSize *= 2;
  } while (numMerges > 1);
  return list;
}
function zOrder(x, y, minX, minY, invSize) {
  x = 32767 * (x - minX) * invSize;
  y = 32767 * (y - minY) * invSize;
  x = (x | x << 8) & 16711935;
  x = (x | x << 4) & 252645135;
  x = (x | x << 2) & 858993459;
  x = (x | x << 1) & 1431655765;
  y = (y | y << 8) & 16711935;
  y = (y | y << 4) & 252645135;
  y = (y | y << 2) & 858993459;
  y = (y | y << 1) & 1431655765;
  return x | y << 1;
}
function getLeftmost(start) {
  var p = start, leftmost = start;
  do {
    if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y)
      leftmost = p;
    p = p.next;
  } while (p !== start);
  return leftmost;
}
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
  return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}
function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && (area(a.prev, a, b.prev) || area(a, b.prev, b)) || equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
}
function area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}
function equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
function intersects(p1, q1, p2, q2) {
  var o1 = sign(area(p1, q1, p2));
  var o2 = sign(area(p1, q1, q2));
  var o3 = sign(area(p2, q2, p1));
  var o4 = sign(area(p2, q2, q1));
  if (o1 !== o2 && o3 !== o4)
    return true;
  if (o1 === 0 && onSegment(p1, p2, q1))
    return true;
  if (o2 === 0 && onSegment(p1, q2, q1))
    return true;
  if (o3 === 0 && onSegment(p2, p1, q2))
    return true;
  if (o4 === 0 && onSegment(p2, q1, q2))
    return true;
  return false;
}
function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}
function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}
function intersectsPolygon(a, b) {
  var p = a;
  do {
    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b))
      return true;
    p = p.next;
  } while (p !== a);
  return false;
}
function locallyInside(a, b) {
  return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}
function middleInside(a, b) {
  var p = a, inside = false, px = (a.x + b.x) / 2, py = (a.y + b.y) / 2;
  do {
    if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x)
      inside = !inside;
    p = p.next;
  } while (p !== a);
  return inside;
}
function splitPolygon(a, b) {
  var a2 = new Node(a.i, a.x, a.y), b2 = new Node(b.i, b.x, b.y), an = a.next, bp = b.prev;
  a.next = b;
  b.prev = a;
  a2.next = an;
  an.prev = a2;
  b2.next = a2;
  a2.prev = b2;
  bp.next = b2;
  b2.prev = bp;
  return b2;
}
function insertNode(i, x, y, last) {
  var p = new Node(i, x, y);
  if (!last) {
    p.prev = p;
    p.next = p;
  } else {
    p.next = last.next;
    p.prev = last;
    last.next.prev = p;
    last.next = p;
  }
  return p;
}
function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;
  if (p.prevZ)
    p.prevZ.nextZ = p.nextZ;
  if (p.nextZ)
    p.nextZ.prevZ = p.prevZ;
}
function Node(i, x, y) {
  this.i = i;
  this.x = x;
  this.y = y;
  this.prev = null;
  this.next = null;
  this.z = null;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
earcut.deviation = function(data2, holeIndices, dim, triangles) {
  var hasHoles = holeIndices && holeIndices.length;
  var outerLen = hasHoles ? holeIndices[0] * dim : data2.length;
  var polygonArea2 = Math.abs(signedArea(data2, 0, outerLen, dim));
  if (hasHoles) {
    for (var i = 0, len = holeIndices.length; i < len; i++) {
      var start = holeIndices[i] * dim;
      var end = i < len - 1 ? holeIndices[i + 1] * dim : data2.length;
      polygonArea2 -= Math.abs(signedArea(data2, start, end, dim));
    }
  }
  var trianglesArea = 0;
  for (i = 0; i < triangles.length; i += 3) {
    var a = triangles[i] * dim;
    var b = triangles[i + 1] * dim;
    var c = triangles[i + 2] * dim;
    trianglesArea += Math.abs((data2[a] - data2[c]) * (data2[b + 1] - data2[a + 1]) - (data2[a] - data2[b]) * (data2[c + 1] - data2[a + 1]));
  }
  return polygonArea2 === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea2) / polygonArea2);
};
function signedArea(data2, start, end, dim) {
  var sum = 0;
  for (var i = start, j = end - dim; i < end; i += dim) {
    sum += (data2[j] - data2[i]) * (data2[i + 1] + data2[j + 1]);
    j = i;
  }
  return sum;
}
earcut.flatten = function(data2) {
  var dim = data2[0][0].length, result = { vertices: [], holes: [], dimensions: dim }, holeIndex = 0;
  for (var i = 0; i < data2.length; i++) {
    for (var j = 0; j < data2[i].length; j++) {
      for (var d = 0; d < dim; d++)
        result.vertices.push(data2[i][j][d]);
    }
    if (i > 0) {
      holeIndex += data2[i - 1].length;
      result.holes.push(holeIndex);
    }
  }
  return result;
};
function pieceOrder(start, end) {
  if (start.length > 8) {
    return start.map((d, i) => i);
  }
  let distances = start.map((p1) => end.map((p2) => squaredDistance(p1, p2)));
  return bestOrder(start, end, distances);
}
function bestOrder(start, end, distances) {
  let min = Infinity, best = start.map((d, i) => i);
  function permute(arr, order = [], sum = 0) {
    for (let i = 0; i < arr.length; i++) {
      let cur = arr.splice(i, 1), dist = distances[cur[0]][order.length];
      if (sum + dist < min) {
        if (arr.length) {
          permute(arr.slice(), order.concat(cur), sum + dist);
        } else {
          min = sum + dist;
          best = order.concat(cur);
        }
      }
      if (arr.length) {
        arr.splice(i, 0, cur[0]);
      }
    }
  }
  permute(best);
  return best;
}
function squaredDistance(p1, p2) {
  let d = distance(polygonCentroid(p1), polygonCentroid(p2));
  return d * d;
}
function interpolateAll(fromShapes, toShapes, { maxSegmentLength = 10, string = true, single = false } = {}) {
  if (!Array.isArray(fromShapes) || !Array.isArray(toShapes) || fromShapes.length !== toShapes.length || !fromShapes.length) {
    throw new TypeError(INVALID_INPUT_ALL);
  }
  let normalize = (s) => normalizeRing(s, maxSegmentLength), fromRings = fromShapes.map(normalize), toRings = toShapes.map(normalize), t0, t1;
  if (single) {
    if (fromShapes.every((s) => typeof s === "string")) {
      t0 = fromShapes.slice(0);
    }
    if (toShapes.every((s) => typeof s === "string")) {
      t1 = toShapes.slice(0);
    }
  } else {
    t0 = fromShapes.slice(0);
    t1 = toShapes.slice(0);
  }
  return interpolateSets(fromRings, toRings, { string, single, t0, t1, match: false });
}
function interpolateSets(fromRings, toRings, { string, single, t0, t1, match } = {}) {
  let order = match ? pieceOrder(fromRings, toRings) : fromRings.map((d, i) => i), interpolators = order.map((d, i) => interpolateRing(fromRings[d], toRings[i], string));
  if (match && Array.isArray(t0)) {
    t0 = order.map((d) => t0[d]);
  }
  if (single && string) {
    if (Array.isArray(t0)) {
      t0 = t0.join(" ");
    }
    if (Array.isArray(t1)) {
      t1 = t1.join(" ");
    }
  }
  if (single) {
    let multiInterpolator = string ? (t) => interpolators.map((fn) => fn(t)).join(" ") : (t) => interpolators.map((fn) => fn(t));
    if (string && (t0 || t1)) {
      return (t) => t < 1e-4 && t0 || 1 - t < 1e-4 && t1 || multiInterpolator(t);
    }
    return multiInterpolator;
  } else if (string) {
    t0 = Array.isArray(t0) ? t0.map((d) => typeof d === "string" && d) : [];
    t1 = Array.isArray(t1) ? t1.map((d) => typeof d === "string" && d) : [];
    return interpolators.map((fn, i) => {
      if (t0[i] || t1[i]) {
        return (t) => t < 1e-4 && t0[i] || 1 - t < 1e-4 && t1[i] || fn(t);
      }
      return fn;
    });
  }
  return interpolators;
}
const Chart2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  var interpolatorPaPi = interpolateAll(paths, pies, { maxSegmentLength: 4 });
  var interpolatorPiPa = interpolateAll(pies, paths, { maxSegmentLength: 4 });
  var interpolatorPiPo = interpolateAll(pies, pointsList, { maxSegmentLength: 4 });
  var interpolatorPoPi = interpolateAll(pointsList, pies, { maxSegmentLength: 4 });
  var interpolatorPoPa = interpolateAll(pointsList, paths, { maxSegmentLength: 4 });
  var interpolatorPaPo = interpolateAll(paths, pointsList, { maxSegmentLength: 4 });
  let currentInterpolator;
  let previousValue = 0;
  let firstAnimationComplete = false;
  function updateAnimationProgress() {
    if (value == 3 && previousValue == 2) {
      firstAnimationComplete = true;
      currentInterpolator = interpolatorPaPi;
    } else if (value == 2 && previousValue == 3) {
      currentInterpolator = interpolatorPiPa;
    } else if (value == 6 && previousValue == 5) {
      currentInterpolator = interpolatorPiPo;
    } else if (value == 5 && previousValue == 6) {
      currentInterpolator = interpolatorPoPi;
    } else if (value == 7 && previousValue == 6) {
      currentInterpolator = interpolatorPoPa;
    } else if (value == 6 && previousValue == 7) {
      currentInterpolator = interpolatorPaPo;
    }
    setTimeout(() => previousValue = value, 200);
  }
  let allPaths;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    updateAnimationProgress();
  }
  {
    if (firstAnimationComplete) {
      allPaths.data(currentInterpolator).transition().delay(function(d, i) {
        return 100 * i;
      }).duration(1e3).attrTween("d", function(d) {
        return d;
      });
    }
  }
  return `<svg viewBox="${"-200 -200 680 400"}">${each(paths, (path, i) => {
    return `<path${add_attribute("fill", d3.schemeCategory10[i], 0)} stroke-width="${"3"}" stroke-linecap="${"round"}"${add_attribute("d", path, 0)}></path>`;
  })}</svg>`;
});
var YouTube_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.video-container.svelte-1b3oixz.svelte-1b3oixz{overflow:hidden;position:relative;width:100%}.video-container.svelte-1b3oixz.svelte-1b3oixz::after{padding-top:56.25%;display:block;content:""}.video-container.svelte-1b3oixz iframe.svelte-1b3oixz{position:absolute;top:0;left:0;width:100%;height:100%}',
  map: null
};
const YouTube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { video_id } = $$props;
  if ($$props.video_id === void 0 && $$bindings.video_id && video_id !== void 0)
    $$bindings.video_id(video_id);
  $$result.css.add(css$1);
  return `<div class="${"video-container svelte-1b3oixz"}"><iframe src="${"https://www.youtube.com/embed/" + escape(video_id)}" frameborder="${"0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1b3oixz"}"></iframe>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-1geuf86.svelte-1geuf86{max-width:600px;margin:0 auto}.code-box.svelte-1geuf86.svelte-1geuf86{box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px}ul.svelte-1geuf86 li.svelte-1geuf86{margin:10px}.box.svelte-1geuf86.svelte-1geuf86{align-self:flex-end;animation-duration:2s;animation-iteration-count:infinite;margin:0 auto;transform-origin:bottom}.bounce-5.svelte-1geuf86.svelte-1geuf86{animation-name:svelte-1geuf86-bounce-5;animation-timing-function:ease}@keyframes svelte-1geuf86-bounce-5{0%{transform:scale(1, 1) translateY(0)}10%{transform:scale(1, 1) translateY(0)}30%{transform:scale(1, 1) translateY(-10px)}50%{transform:scale(1, 1) translateY(0)}57%{transform:scale(1, 1) translateY(-7px)}64%{transform:scale(1, 1) translateY(0)}100%{transform:scale(1, 1) translateY(0)}}",
  map: null
};
const ChartMorphing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-1geuf86"}"><h2>The goal</h2>
  <p class="${"r"}">In this article, I try to re-create some of the animated transitions between
    different types of charts originally found in the following YouTube video.
  </p>
  ${validate_component(YouTube, "YouTube").$$render($$result, { video_id: "vLk7mlAtEXI" }, {}, {})}

  <p>This presented the following challenges to be overcome:</p>
  <ul class="${"svelte-1geuf86"}"><li class="${"svelte-1geuf86"}">How to tween smoothly between different SVG elements (i.e. from Rect to
      Circle)?
    </li>
    <li class="${"svelte-1geuf86"}">How to coordinate this across multiple bars/ circles?</li></ul>
  <p class="${"r"}">Obviously the tools I will be using will be Svelte and D3 (and I also used a
    third-party library called Flubber for SVG path manipulation. <br><br>I
    chose Flubber after a number of unsuccessful attempts (for this specific use
    case) with: polymorph-js, d3 string interpolator and a custom Svelte
    interpolator/tween; more on these failed attempts towards the end of this
    article.
  </p>

  <h2>Demo:</h2>
  <p class="${"r"}">Before we get to the code and implementation tips, let&#39;s check out the demo:
  </p>
  <div class="${"box bounce-5 svelte-1geuf86"}">${validate_component(Icon, "Icon").$$render($$result, {
    name: "chevrons-down",
    fill: "gray",
    width: "20px",
    height: "20px"
  }, {}, {})}
    <span>Scroll </span></div>
  ${validate_component(ScrollyWrapper, "ScrollyWrapper").$$render($$result, {
    data: scrollyData,
    fixedComp: Chart2,
    fixPosition: "center"
  }, {}, {})}

  <h2>Data</h2>
  <p>As is often the case with D3/ Animation code, how we format our data ready
    for visualization is all-important. You can find the source data (and path
    creation logic) I created for this piece <a href="${"https://github.com/visual-svelte/website/blob/main/src/data/animatedTransitions.js"}">here</a>.
  </p>
  <p>In the piece, it was actually the SVG morphing library, <a href="${"https://github.com/veltman/flubber"}">Flubber</a>, that dictated the shape of the input data. <br><br>I wanted to use
    the interpolateAll() function which takes as input two lists of paths (for
    example, a list of paths for bars and a list of paths for pies), and creates
    interpolators for each transformation. This meant writing functions for the
    creation of SVG paths that look like Rects and Circles (the Pies are already
    SVG Paths from D3)
  </p>
  <h2>Tried and failed/ gotchas</h2>
  <ul class="${"svelte-1geuf86"}"><li class="${"svelte-1geuf86"}">I initially used polymorph-js, and created a custom interpolator,
      similarly to how it is described in <a href="${"https://gist.github.com/Cleecanth/342eaa59c7738fc687043eb224814c02"}">this code</a>. Whilst this worked well for one SVG element, I found it difficult to
      efficiently apply it across multiple SVG elements (e.g. 100 bars in a bar
      chart)
    </li>
    <li class="${"svelte-1geuf86"}">I also tried the <a href="${"https://observablehq.com/@d3/d3-interpolatestring"}">d3.interpolateString</a> method, but this fails when you go beyond anything but the simplest of SVG
      paths.
    </li>
    <li class="${"svelte-1geuf86"}">Finally, I tried something similar to <a href="${"https://svelte.dev/repl/a6268cfc4685416998c6e64516546acd?version=3"}">this example</a>. It basically converts paths to points, tweens the raw values with
      Svelte tweening, then converts the points back to paths. This works well
      for simple icons, but when you have Arcs and other SVG path descriptors,
      things get messy, fast.
    </li></ul>
  <h2>Svelte code</h2>
  <div class="${"code-box svelte-1geuf86"}">${validate_component(CodeVisual, "CodeVisual").$$render($$result, {
    route: "d3/",
    compid: "svelte/ChartMorphing/Chart2"
  }, {}, {})}</div>
</div>`;
});
let cmsSvelte = [
  {
    primary_key: "Scrollytelling",
    published: "2022-04-11",
    post_title: "Scrollytelling with Svelte",
    thumbnail: "/images/thumbnails/scrollytelling.png",
    keywords: ["svelte", "scrollytelling", "animation"],
    intro_text: "A few interesting techniques to liven up your Svelte Scrollytelling pieces. ",
    component: Scrollytelling
  },
  {
    primary_key: "Motion",
    published: "2022-04-13",
    post_title: "Adding life to stories with Svelte Motion",
    thumbnail: "/images/thumbnails/animatedTransitions.png",
    keywords: ["tweened", "spring", "svelte", "animation"],
    intro_text: "How to use Svelte Spring and Tweened animations to breath life into visual essays.",
    component: Motion,
    components: [
      {
        id: "SpringTweenComp",
        title: "Spring vs Tweened",
        notes: "In this visual, you can animate using both the Spring and Tweened functions to compare how they look and feel. <br/><br/>Adjust the slider parameters and change the easing function and then hit the Animate! button to observe the animations side-by-side. <br/><br/> Personally, I prefer tweened as you can control the duration, have 31 different <a href='https://svelte.dev/repl/6904f0306d6f4985b55f5f9673f762ef?version=3.4.1'>easing profiles</a> to choose from and you can even specific a custom interpolator (see the color example below!)",
        component: SpringTweenComp
      },
      {
        id: "Springy100Bars",
        title: "Eased tweening on 100% stacked bars",
        notes: "Building on the core concepts, here I've built a 100% Stacked Bar Chart that tweens between two states (Primary and Main Election results) with an ElasticOut easing. <br/><br/> Annoyingly, Svelte Tweened does not allow you to easily add a delay for each item in your array. A typical use case in data viz would be to stagger the animations, such that each bar starts it's animation 100ms after the previous bar's animation begins. If you're looking to implement that kind of effect, see Amelia Wattenberger's post <a href='https://svelte.recipes/components/tweened-staggered/'>here</a>.  ",
        component: Springy100Bars
      },
      {
        id: "TweeningColor",
        title: "Tweening Color",
        notes: "One good thing about tweening is that it can be applied to single numbers, arrays of numbers or even objects (with numbers as values),assuming your array length/ object structure is consistent between states. <br/><br/> In this example, we use d3-interpolate from D3.js as a custom interpolator on our Tween. <br/><br/> Essentially, this takes as input an rgb(r,g,b) color --> converts it to numbers, tweens it, and converts it back to rgb(r,g,b). <br/><br/> The result is a smooth fade between colors. ",
        component: TweeningColor
      }
    ]
  },
  {
    primary_key: "Flip",
    published: "2022-04-12",
    post_title: "Using Svelte FLIP for Visual Storytelling",
    thumbnail: "/images/thumbnails/flip.png",
    keywords: ["svelte", "FLIP", "animation"],
    intro_text: "FLIP (First, Last, Invert, Play) is a cool feature of Svelte, let's explore cool ways to use it for visual storytelling and journalism.",
    component: Flip,
    components: [
      {
        id: "FlipGrid",
        title: "Grid manipulation with FLIP",
        notes: "This is the classic use case for FLIP. In the visual journalism space, sometimes we want to give the user the option to search through individual data points. With FLIP we can add a little bit cool to that process. <br/><br/> We add the animate:flip directive to the element in a Svelte {#each} block. <br/><br/>Then, when we sort or shuffle the source data, our cards (or whatever you are showing) are animated from their initial state to their end state.  ",
        component: FlipGrid
      },
      {
        id: "FlipEntryBars",
        title: "Blocks to Bar Chart Animation with FLIP and Crossfade",
        notes: "Now things are getting interesting! In this example, I wanted to show how you could lead the user through a series of 'reveal' points. <br/><br/>The 'main event' transition is the one at stage 3; by combining FLIP and Crossfade (from 'svelte/transition'), we can 'send' and 'receive' data points to and from two lists. <br/> <br/> These two lists can be displayed in different ways: the 'blocks' list is displayed as simple blocks, and my 'bars' list is formatted to appear like a bar chart. <br/><br/>Note: things like axes/ labels/ keys have been removed to focus just on the FLIP animations. ",
        component: FlipEntryBars
      },
      {
        id: "FlipSortAxes",
        title: "Sorting Axes of a Chart",
        notes: "Here, we've given the user the ability to sort the X-axis, alphabetically, or by the values of the Y-axis. <br/><br/> The principles are the same. The key points are that we need to re-draw the axis upon data changes.<br/><br/> Note: a key design consideration here is whether you want the X-axis ticks to move with the bar, I chose not to in this instance as it could look a bit messy. To have the ticks and axis labels move with the bar you would need to re-draw the axis with HTML elements (rather than D3/ SVG). This would make it easier to animate (and style).",
        component: FlipSortAxes
      }
    ]
  },
  {
    primary_key: "Transitions",
    published: "2022-04-13",
    post_title: "Svelte transitions for visual storytelling",
    thumbnail: "/images/thumbnails/flip.png",
    keywords: ["svelte", "animation", "transition"],
    intro_text: "How to implement a variety of Svelte transitions to animate the entrance of UI elements (and tell a story).",
    component: Transitions,
    components: [
      {
        id: "ChartEntry",
        title: "The result",
        notes: "It's not 100% identical to the original shown above but I made a few changes to try and explore more of the 'svelte/transition' module.<br/><br/> <strong>Click play below</strong> to see the animation. I've documented interesting observations/ implementation notes below the visual.",
        component: ChartEntry
      }
    ]
  },
  {
    primary_key: "SelfExplainingCharts",
    published: "2022-04-16",
    post_title: "Techniques for explaining charts to a user in Svelte",
    thumbnail: "/images/thumbnails/flip.png",
    keywords: ["svelte", "animation", "transition"],
    intro_text: "",
    component: SelfExplainingCharts,
    components: [
      {
        id: "ChartExplainers",
        title: "Self-explaining chart",
        notes: "In this chart, the user is given information slowly about what the problem is and what each axis represents BEFORE they are given data to analyze. <br/> <br/> In doing so, you reduce dramatically the likelihood that the user will misunderstand what they are looking at. I also believe you will minimise the amount of time it takes for the user to understand the chart. <br/> <br/> Implementing this vision was a little hacky, but I hope you find the concept interesting! With a bit more time to polish the transitions, I do believe this could be a powerful technique for interactive storytelling. <br/> <br/> ",
        component: ChartExplainers
      }
    ]
  },
  {
    primary_key: "ChartMorphing",
    published: "2022-04-05",
    post_title: "Morphing smoothly between chart types Svelte, D3 & Flubber",
    thumbnail: "/images/thumbnails/animatedTransitions.png",
    keywords: ["d3", "svelte", "animation", "flubber"],
    intro_text: "How to make really smooth transitions between different chart types, inspired by <a href='https://www.youtube.com/watch?v=vLk7mlAtEXI'>this YouTube video</a>.",
    component: ChartMorphing
  }
];
export { FormattedExample as F, Icon as I, d3Charts as a, cmsSvelte as c, d3CMS as d, readable as r, writable as w };
