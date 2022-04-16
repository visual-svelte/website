import { i as identity, g as is_function, h as assign, j as now, l as loop, c as create_ssr_component, d as subscribe, e as escape, a as add_attribute, b as each, v as validate_component, k as createEventDispatcher, o as noop } from "./index-1116a07c.js";
import { S as ScrollyWrapper, I as Icon } from "./ScrollyWrapper-db835c0e.js";
import * as d3 from "d3";
import { w as writable } from "./index-46acc537.js";
import { F as FormattedExample } from "./FormattedExample-af8cc064.js";
import { range } from "d3-array";
import { interpolateLab } from "d3-interpolate";
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
var index_svelte_svelte_type_style_lang$3 = "";
const css$d = {
  code: ".wrapper.svelte-6ch1q8{max-width:600px;margin:0 auto}",
  map: null
};
const Scrollytelling = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attentionData;
  $$result.css.add(css$d);
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
var index_svelte_svelte_type_style_lang$2 = "";
const css$c = {
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
  $$result.css.add(css$c);
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
const css$b = {
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
  $$result.css.add(css$b);
  return `<button>Sort ${escape("9->0")}</button>
<button>Shuffle </button>

${images ? `<div class="${"grid svelte-1nzfzoz"}">
    ${each(images, (post, i) => {
    return `<div><div class="${"card  svelte-1nzfzoz"}" style="${"background-color: " + escape(color(post.id))}">${escape(post.id)}</div>
      </div>`;
  })}</div>` : ``}`;
});
var FlipEntryBars_svelte_svelte_type_style_lang = "";
const css$a = {
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
  $$result.css.add(css$a);
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
const css$9 = {
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
  $$result.css.add(css$9);
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
var index_svelte_svelte_type_style_lang$1 = "";
const css$8 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-18y4um7{max-width:600px;margin:0 auto}",
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
  $$result.css.add(css$8);
  return `<div class="${"wrapper svelte-18y4um7"}"><h2>What is Svelte Motion and how can we use it?</h2>
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
    return `${validate_component(FormattedExample, "FormattedExample").$$render($$result, { comp: ex, route: "svelte/spring/" }, {}, {})}`;
  })}
</div>`;
});
var Select_svelte_svelte_type_style_lang = "";
const css$7 = {
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
  $$result.css.add(css$7);
  return `<div class="${"select svelte-11u87c8"}">${label ? `<label${add_attribute("for", id, 0)} class="${"svelte-11u87c8"}">${escape(label)}</label>` : ``}
  <select${add_attribute("id", id, 0)} ${disabled ? "disabled" : ""} class="${"svelte-11u87c8"}">${each(options, (option) => {
    return `<option${add_attribute("value", option.label || option.value, 0)} class="${"svelte-11u87c8"}">${escape(option.label || option.value)}</option>`;
  })}</select>
</div>`;
});
var Thumb_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '.thumb.svelte-8w8x88{position:absolute;top:50%;width:0;height:0}.thumb-content.svelte-8w8x88{position:relative;width:fit-content;height:fit-content;transform:translate(-50%, -50%)}.thumb-content.svelte-8w8x88::before{content:"";position:absolute;width:200%;height:200%;transform:translate(-25%, -25%) scale(0);border-radius:100vh;background:var(--thumb-bg, #5784fd);opacity:30%;transition:transform 100ms ease-in-out}.thumb-content.active.svelte-8w8x88::before{transform:translate(-25%, -25%) scale(1)}',
  map: null
};
const Thumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { pos } = $$props;
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  $$result.css.add(css$6);
  return `<div class="${"thumb svelte-8w8x88"}"${add_attribute("style", `left: ${pos * 100}%;`, 0)}><div class="${["thumb-content svelte-8w8x88", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var Slider_svelte_svelte_type_style_lang = "";
const css$5 = {
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
    const width = max - min;
    value = pos2.map((v) => min + v * width).map((v) => Math.round((v - offset) / step) * step + offset);
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
  $$result.css.add(css$5);
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
var SpringTweenComp_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-1mfjhda.svelte-1mfjhda{position:relative;height:290px}.container.svelte-1mfjhda .animate-button.svelte-1mfjhda{background-color:white;border-radius:100%;z-index:100;cursor:pointer;position:absolute;padding:5px 10px;top:100px;left:110px}.container.svelte-1mfjhda .ctrl-title.svelte-1mfjhda{border-bottom:1px solid white;font-weight:600;text-align:center;padding:1px 0px 3px 0px;margin-bottom:5px}.container.svelte-1mfjhda .controls.svelte-1mfjhda{font-size:0.7rem;height:100px;width:300px;position:relative}.container.svelte-1mfjhda .controls .spring.svelte-1mfjhda{max-width:140px;min-width:140px;height:105px;left:150px;position:absolute;background-color:darkmagenta;color:white;padding:5px}.container.svelte-1mfjhda .controls .tween.svelte-1mfjhda{position:absolute;background-color:darkblue;color:white;width:140px;height:105px;padding:5px}.container.svelte-1mfjhda .axis.svelte-1mfjhda{margin-top:15px;position:absolute;border-top:1px solid black;height:100px;width:300px;overflow:hidden}.container.svelte-1mfjhda .bar-wrapper.svelte-1mfjhda{position:relative;margin-top:40px;width:300px;height:150px}.container.svelte-1mfjhda .bar-wrapper .tweens.svelte-1mfjhda{position:absolute;border-left:1px solid gray;left:100px}.container.svelte-1mfjhda .bar-wrapper .springs.svelte-1mfjhda{position:absolute;right:160px;border-left:1px solid gray}.container.svelte-1mfjhda .bar-wrapper .bar.svelte-1mfjhda{position:absolute;display:flex}.container.svelte-1mfjhda .bar-wrapper .bar.tween.svelte-1mfjhda{right:0px}",
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
  $$result.css.add(css$4);
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
    $$rendered = `<div class="${"container svelte-1mfjhda"}"><button class="${"animate-button  svelte-1mfjhda"}">Animate! </button>

  <div class="${"controls svelte-1mfjhda"}"><div class="${"spring svelte-1mfjhda"}"><div class="${"ctrl-title svelte-1mfjhda"}">SPRING</div>
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
    <div class="${"tween svelte-1mfjhda"}"><div class="${"ctrl-title svelte-1mfjhda"}">TWEENED</div>
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
  <div class="${"axis svelte-1mfjhda"}"></div>
  <div class="${"bar-wrapper svelte-1mfjhda"}"><div class="${"tweens svelte-1mfjhda"}">${each($tween, (bar, i) => {
      return `<div class="${"bar tween svelte-1mfjhda"}" style="${"height:" + escape(8) + "px; width:" + escape(bar * 6) + "px; clear:both;background-color:darkblue;opacity:" + escape(1 - i / 20) + "; transform:translate(30px," + escape(10 * i) + "px);"}"></div>`;
    })}</div>
    <div class="${"springs svelte-1mfjhda"}">${each($springer, (bar, i) => {
      return `<div class="${"bar svelte-1mfjhda"}" style="${"height:" + escape(8) + "px; width:" + escape(bar * 6) + "px; clear:both;background-color:darkmagenta;opacity:" + escape(1 - i / 20) + ";transform:translate(30px," + escape(10 * i) + "px);"}"></div>`;
    })}</div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_tween();
  $$unsubscribe_springer();
  return $$rendered;
});
var Springy100Bars_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.buttons.svelte-otzls.svelte-otzls{width:350px;margin:0 auto}.buttons.svelte-otzls button.svelte-otzls{width:150px;height:50px;background-color:white;padding:10px;border:none;cursor:pointer}.buttons.svelte-otzls button.selected.svelte-otzls{border:black 3px solid}.container.svelte-otzls.svelte-otzls{height:400px}.container.svelte-otzls h3.svelte-otzls{text-align:center}.container.svelte-otzls .bar.svelte-otzls{position:absolute;display:flex}.container.svelte-otzls .key.svelte-otzls{font-size:0.7rem;text-align:center}.container.svelte-otzls .chart-wrapper.svelte-otzls{margin:0 auto;overflow:hidden;position:relative;width:300px;height:250px}.container.svelte-otzls .labels.svelte-otzls{position:absolute}.container.svelte-otzls .labels .cat-label.svelte-otzls{transform:translateX(100px);font-size:0.8rem;text-align:right}",
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
  let colors = ["lightblue", "#423e42", "#9c334e"];
  $$result.css.add(css$3);
  $$unsubscribe_values();
  return `<div class="${"container svelte-otzls"}"><h3 class="${"svelte-otzls"}">Breakdown of how voters in different age groups voted at a Primary and Main
    Election
  </h3>
  <div class="${"buttons svelte-otzls"}"><button class="${["svelte-otzls", "selected"].join(" ").trim()}">Primary election
    </button>
    <button class="${["svelte-otzls", ""].join(" ").trim()}">Main election
    </button></div>
  <div class="${"labels svelte-otzls"}">${each(["18-30", "30-50", "50-65", "65+"], (label, j) => {
    return `<div class="${"cat-label svelte-otzls"}" style="${"transform:translate(4vw," + escape(getYOffset(j) * 0.7 + 20) + "px)"}">${escape(label)}
      </div>`;
  })}</div>
  <div class="${"chart-wrapper svelte-otzls"}">${each($values, (group, j) => {
    return `${each(group, (bar, i) => {
      return `<div class="${"bar svelte-otzls"}" style="${"height:" + escape(30) + "px; width:" + escape(getWidth(i, group)) + "px; clear:both;background-color:" + escape(colors[i]) + ";transform:translate(" + escape(getXOffset(i, group)) + "px," + escape(getYOffset(j)) + "px);"}"></div>`;
    })}`;
  })}</div>
  <div class="${"key svelte-otzls"}">Key : <span style="${"color:" + escape(colors[0])}">Blue Party</span> |
    <span style="${"color:" + escape(colors[1])}">Centrists </span>
    | <span style="${"color:" + escape(colors[2])}">Red Party</span></div>
</div>`;
});
var TweeningColor_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".svg-container.svelte-k9qkh1{padding:20px}button.svelte-k9qkh1{padding:10px;margin:0px 10px 10px 0px}",
  map: null
};
const TweeningColor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $color, $$unsubscribe_color;
  const colors = [
    { text: "red", c: "rgb(255, 62, 0)" },
    { text: "blue", c: "rgb(64, 179, 255)" },
    { text: "gray", c: "rgb(103, 103, 120)" }
  ];
  const color = tweened(colors[0].c, {
    duration: 800,
    interpolate: interpolateLab
  });
  $$unsubscribe_color = subscribe(color, (value) => $color = value);
  $$result.css.add(css$2);
  $$unsubscribe_color();
  return `${each(colors, (c) => {
    return `<button style="${"background-color: " + escape(c.c) + "; color: white; border: none;"}" class="${"svelte-k9qkh1"}">Make it ${escape(c.text)}</button>`;
  })}

<div class="${"svg-container svelte-k9qkh1"}"><svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" width="${"100px"}" viewBox="${"0 0 98.1 118"}" style="${"enable-background:new 0 0 98.1 118;"}" xml:space="${"preserve"}"><path class="${"st0"}"${add_attribute("fill", $color, 0)} d="${"M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3\r\n   c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1\r\n   c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"}"></path><path class="${"st1"}" fill="${"white"}" d="${"M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1\r\n   c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72\r\n   c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7\r\n   c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5\r\n   c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1\r\n   c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1\r\n   c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5\r\n   c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"}"></path></svg>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-1g1iyuh.svelte-1g1iyuh{max-width:600px;margin:0 auto}figure.svelte-1g1iyuh.svelte-1g1iyuh{margin:0px;max-width:600px}figure.svelte-1g1iyuh figcaption.svelte-1g1iyuh{margin-top:5px;text-align:end}li.svelte-1g1iyuh.svelte-1g1iyuh{margin:20px 0px}.subheading.svelte-1g1iyuh.svelte-1g1iyuh{margin-top:5rem;padding-top:20px;border-top:1px solid rgba(119, 227, 35, 0.55)}",
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
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-1g1iyuh"}"><h2>Motivation</h2>
  <p>Previously, we&#39;ve explored the individual components of Svelte&#39;s animation
    capabilities - like <a rel="${"internal"}" href="${"/svelte/FLIP"}">FLIP</a>,
    <a rel="${"internal"}" href="${"/svelte/Motion"}">Motion</a>, and some other
    <a rel="${"internal"}" href="${"/svelte/FLIP"}">cool stuff</a>.
  </p>
  <p>In this article, I&#39;ll be using the &quot;svelte/transition&quot; module to re-create a
    sequenced animation I came across recently on Twitter:
  </p>
  <figure class="${"svelte-1g1iyuh"}"><img src="${"/images/migrants/migrant.gif"}" alt="${"bbc newsnight gif showing the data visualisation"}">
    <figcaption class="${"svelte-1g1iyuh"}">Source: <a href="${"https://twitter.com/BBCNewsnight/status/1514361598156099584"}">BBC Newsnight Twitter</a></figcaption></figure>
  <p>I challenged myself to re-create this chart and animation with Svelte and
    I&#39;ve documented what I learnt below.
  </p>
  <p>New to Svelte transitions? A good place to start is the <a href="${"https://svelte.dev/docs#run-time-svelte-transition"}" rel="${"external"}">official documentation
    </a> to get a basic understanding of how it works.
  </p>
  ${each(content.components, (ex) => {
    return `${validate_component(FormattedExample, "FormattedExample").$$render($$result, { comp: ex, route: "svelte/spring/" }, {}, {})}`;
  })}
  <h2 class="${"subheading svelte-1g1iyuh"}">Key features:</h2>
  <p></p>

  <ul><li class="${"svelte-1g1iyuh"}"><strong>Y Axis</strong>: Fly transition; the delay and y delay properties
      increase as the labels get closer to the x-axis (as in the original).
    </li>
    <li class="${"svelte-1g1iyuh"}"><strong>X Axis</strong>: A custom transition was made to animate the white
      X Axis horizontal line. The transition animates the width property of the
      &#39;bottom-axis&#39;.
    </li>
    <li class="${"svelte-1g1iyuh"}"><strong>Bars</strong>: Fly transition with cubinInOut easing. I had to
      create a bars- div with overflow:hidden to hide the bars below the x-axis.
    </li>
    <li class="${"svelte-1g1iyuh"}"><strong>Bar labels</strong>: I converted the bar labels to a string, then
      transitioned each letter individually.
    </li>
    <li class="${"svelte-1g1iyuh"}"><strong>Chart title</strong>: Simple slide transition just to try
      something different! Nothing fancy here.
    </li></ul>
</div>`;
});
var ChartEntry_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-16adlf1.svelte-16adlf1{height:300px;width:400px;position:relative;background-image:url("/images/migrants/migrants.jpg");background-size:cover;background-blend-mode:saturation}.container.svelte-16adlf1 .title.svelte-16adlf1{height:40px;text-align:center;color:white}.container.svelte-16adlf1 .title h4.svelte-16adlf1,.container.svelte-16adlf1 .title p.svelte-16adlf1{padding:2px 10px;margin:10px 0px 0px 0px;background-color:purple;display:inline-block}.container.svelte-16adlf1 .title h4.svelte-16adlf1{max-height:16px;overflow:hidden}.container.svelte-16adlf1 .title p.svelte-16adlf1{font-size:0.7rem;line-height:0.7rem}.container.svelte-16adlf1 .chart-area.svelte-16adlf1{background-color:rgba(255, 255, 255, 0.05);height:150px;width:200px;margin:50px 100px;position:relative}.container.svelte-16adlf1 .chart-area .bottom-axis.svelte-16adlf1{border-bottom:1px solid white;height:150px;width:100%;position:absolute}.container.svelte-16adlf1 .chart-area .bar-container.svelte-16adlf1{height:160px;width:200px;top:-10px;position:absolute;overflow-y:hidden}.container.svelte-16adlf1 .chart-area .bar-container .bar.svelte-16adlf1{background-color:#107ddb;opacity:0.8;width:30px;bottom:0px;position:absolute}.container.svelte-16adlf1 .chart-area .bar-container .bar .barLabel.svelte-16adlf1{position:absolute;top:-30px;width:30px;text-align:center;font-size:0.6rem;color:white}.container.svelte-16adlf1 .chart-area .grid-line.svelte-16adlf1{position:absolute;width:100%;border-top:1px dashed rgba(255, 255, 255, 0.3)}.container.svelte-16adlf1 .chart-area .grid-line .yAxisLabel.svelte-16adlf1{position:absolute;color:white;font-size:0.6rem;width:30px;left:-35px;top:-22px;text-align:end}.container.svelte-16adlf1 .xLabels.svelte-16adlf1{position:absolute;color:white;top:150px;display:flex;font-size:0.6rem}.container.svelte-16adlf1 .xLabels .xAxisLabel.svelte-16adlf1{padding:5px 15px 5px 16px}.container.svelte-16adlf1 .toggle-button.svelte-16adlf1{background-color:rgba(255, 255, 255, 0);color:white;bottom:0px;width:80px;margin:10px;cursor:pointer;border:1px solid white;border-radius:30px;padding:10px 10px;position:absolute;transition:background-color 0.4s}.container.svelte-16adlf1 .toggle-button.svelte-16adlf1:hover{background-color:rgba(255, 255, 255, 0.2)}',
  map: null
};
const ChartEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-16adlf1"}"><button class="${"toggle-button svelte-16adlf1"}">Play </button>
  ${``}
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
  }
];
export { cmsSvelte as c };
