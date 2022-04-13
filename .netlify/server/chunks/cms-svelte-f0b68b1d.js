import { i as is_function, j as assign, k as now, l as loop, o as identity, c as create_ssr_component, d as subscribe, e as escape, a as add_attribute, b as each, v as validate_component } from "./index-72c7b4a0.js";
import { S as ScrollyWrapper } from "./ScrollyWrapper-21d5279d.js";
import * as d3 from "d3";
import { w as writable } from "./index-3ce3f00f.js";
import { F as FormattedExample } from "./FormattedExample-1cda2b50.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
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
    const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
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
      easing,
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
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
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
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
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
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
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
      store.set(value = fn(easing(elapsed / duration)));
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
let svg_width$1 = 400;
const Scrollytelling_Demo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height;
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
  let colors = ["#003b49", "#d3273e", "#dc582a", "#5d3754"];
  const progress = tweened(data2.find((d) => d[value])[value], { duration: 400, easing: cubicOut });
  $$unsubscribe_progress = subscribe(progress, (value2) => $progress = value2);
  const angleProgress = tweened(0, { duration: 400, easing: cubicOut });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  height = svg_height$1 - margin$1 * 2;
  {
    progress.set(data2.find((d) => d[value])[value]);
  }
  {
    angleProgress.set(value > 2 ? 90 : 0);
  }
  x = d3.scaleBand().domain(cats).range([0, height]).padding([0.1]);
  y = d3.scaleLinear().domain([0, 1e3]).range([height, 0]);
  $$unsubscribe_progress();
  return `<p>Monthly sales of Fruit in <span>${escape(value == 0 ? "Jan-2020" : value === 1 ? "Feb-2020" : "Mar-2020")}</span></p>

<svg${add_attribute("width", svg_width$1, 0)}${add_attribute("height", svg_height$1, 0)}><g class="${["xAxis", value > 2 ? "titled" : ""].join(" ").trim()}" transform="${"translate(" + escape(x.bandwidth()) + "," + escape(height) + ")"}"${add_attribute("this", pinXAxis, 0)}></g>${each($progress, (bar, i) => {
    return `<rect${add_attribute("x", x.bandwidth() + x(cats[i]), 0)}${add_attribute("y", height - y(bar), 0)}${add_attribute("height", y(bar), 0)}${add_attribute("width", x.bandwidth(), 0)} class="${"bar"}"${add_attribute("fill", colors[i], 0)}${add_attribute("fill-opacity", value > 2 ? i + 3 == value ? 1 : 0.2 : 1, 0)} stroke-width="${"2"}"${add_attribute("stroke", value > 2 ? i + 3 == value ? "yellow" : "transparent" : "transparent", 0)}></rect>`;
  })}</svg>`;
});
const data = [
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
var index_svelte_svelte_type_style_lang$1 = "";
const css$4 = {
  code: ".wrapper.svelte-6ch1q8{max-width:600px;margin:0 auto}",
  map: null
};
const Scrollytelling = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attentionData;
  $$result.css.add(css$4);
  attentionData = data.find((d) => d.attention)["attention"];
  data.find((d) => d.behaviour)["behaviour"];
  return `<div class="${"wrapper svelte-6ch1q8"}"><h2>Motivation</h2>
  <p>Scrollytelling is a go-to technique for visual journalists and so let&#39;s
    learn to implement it properly, using Svelte!
  </p>
  <p>By scrollytelling, I mean an interactive article that updates automatically
    as the user scrolls down (or across?) the page. You can see an example from
    my previous article on <a rel="${"internal"}" href="${"/d3/recipes/animated-transitions"}">Animated Transitions between Chart Types</a>.
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
var index_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-1yieh0i{max-width:600px;margin:0 auto}h2.svelte-1yieh0i{margin:100px 0 30px 0}",
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
  $$result.css.add(css$3);
  return `<div class="${"wrapper svelte-1yieh0i"}"><h2 class="${"svelte-1yieh0i"}">Firstly, what is FLIP and how can we use it?</h2>
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
  <h2 class="${"svelte-1yieh0i"}">Using FLIP for visual storytelling</h2>
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
const css$2 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.grid.svelte-1nzfzoz.svelte-1nzfzoz{display:grid;grid-template-columns:repeat(auto-fill, minmax(50px, 60px))}.grid.svelte-1nzfzoz .card.svelte-1nzfzoz{border:1px solid black;height:50px;width:50px;margin:10px;padding-left:5px;padding-top:5px}",
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
  $$result.css.add(css$2);
  return `<button>Sort ${escape("9->0")}</button>
<button>Shuffle </button>

${images ? `<div class="${"grid svelte-1nzfzoz"}">
    ${each(images, (post, i) => {
    return `<div><div class="${"card  svelte-1nzfzoz"}" style="${"background-color: " + escape(color(post.id))}">${escape(post.id)}</div>
      </div>`;
  })}</div>` : ``}`;
});
var FlipEntryBars_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-a464ra.svelte-a464ra{margin-right:15%}.intial-grid.svelte-a464ra.svelte-a464ra{display:grid;grid-template-columns:repeat(auto-fill, minmax(10px, 20px));gap:2px}.intial-grid.top.svelte-a464ra.svelte-a464ra{min-height:20px}.intial-grid.svelte-a464ra .block.svelte-a464ra{width:20px;background-color:pink;margin:px;display:flex;height:20px;transition:all 1s}.intial-grid.svelte-a464ra .block.lower.svelte-a464ra{position:absolute}.commentary.svelte-a464ra.svelte-a464ra{font-size:0.7rem;height:2.1rem;line-height:1rem}",
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
  let colors = {
    cherry: ["#D2042D", 50],
    apple: ["#8DB600", 100],
    banana: ["#FFE135", 150],
    pear: ["#9F6D2E", 200]
  };
  let stage = 0;
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-a464ra"}"><button>Stage 0 of reveal </button>
  <button>Stage 1 </button>
  <button>Stage 2 </button>
  <button>Stage 3 </button>
  <button>Reset</button>

  <p class="${"commentary svelte-a464ra"}">Story (stage ${escape(stage)}): <!-- HTML_TAG_START -->${commentary[stage]}<!-- HTML_TAG_END --></p>
  <div class="${"intial-grid top  svelte-a464ra"}">${each(data2.blocks, (bar) => {
    return `<div class="${"block svelte-a464ra"}" style="${"background-color:" + escape("gray")}"></div>`;
  })}</div>

  <br><br>
  <div class="${"intial-grid lower  svelte-a464ra"}">${each(["apple", "banana", "cherry", "pear"], (category, j) => {
    return `${each(data2.bars.filter((d) => d.cat == category), (bar, i) => {
      return `<div style="${"transform:translate(" + escape(50 + j * 50) + "px," + escape(120 - i * 21) + "px);background-color:" + escape(colors[bar.cat][0])}" class="${"block lower svelte-a464ra"}"></div>`;
    })}`;
  })}</div>
</div>`;
});
var FlipSortAxes_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.axis-label.svelte-bjdikv{font-size:0.7rem}",
  map: null
};
let margin = 40;
let svg_height = 300;
let svg_width = 400;
const FlipSortAxes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height;
  let width;
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
  $$result.css.add(css);
  height = svg_height - margin * 2;
  width = svg_width - margin * 2;
  categories = data2.map(function(value) {
    return value.cat;
  });
  x = d3.scaleBand().domain(categories).range([0, width]).padding([0.5]);
  y = d3.scaleLinear().domain([0, 200]).range([height, 0]);
  {
    if (data2) {
      d3.select(pinXAxis).call(d3.axisBottom(x).ticks(width / 60));
      d3.select(pinYAxis).call(d3.axisLeft(y).ticks(height / 60));
    }
  }
  return `<button>Sort ${escape("Z->A")}</button>
<button>Sort by Count ${escape("(Desc)")}</button>
<button ${""}>Add data </button>
<button>Reset </button>

<svg${add_attribute("width", svg_width, 0)}${add_attribute("height", svg_height, 0)}><g class="${"xAxis"}" transform="${"translate(" + escape(margin) + "," + escape(margin + height) + ")"}"${add_attribute("this", pinXAxis, 0)}></g><g class="${"yAxis"}" transform="${"translate(" + escape(margin) + "," + escape(margin) + ")"}"${add_attribute("this", pinYAxis, 0)}></g><text class="${"axis-label svelte-bjdikv"}"${add_attribute("y", 12, 0)}${add_attribute("x", -height * 0.9, 0)} transform="${"rotate(270)"}">Fruit sold items)
  </text>${each(data2, (bar, i) => {
    return `<rect${add_attribute("x", margin + x(bar.cat), 0)}${add_attribute("y", height + margin - bar.value, 0)}${add_attribute("height", bar.value, 0)}${add_attribute("width", x.bandwidth(), 0)}${add_attribute("fill", bar.color, 0)} opacity="${"0.5"}"></rect>`;
  })}</svg>`;
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
  }
];
export { cmsSvelte as c };
