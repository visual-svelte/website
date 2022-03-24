import { c as create_ssr_component, v as validate_component, e as assign, f as now, l as loop, i as identity, a as subscribe, g as escape, h as each, j as spread, k as escape_object, b as add_attribute } from "../../chunks/index-58574f58.js";
/* empty css                                                                */import { w as writable } from "../../chunks/index-79b72b18.js";
import { p as page } from "../../chunks/stores-53fa375a.js";
import feather from "feather-icons";
import { i as innerWidth, s as scrollY } from "../../chunks/screen-47820f5b.js";
import { A as ActionButton } from "../../chunks/ActionButton-eebe3f5b.js";
import { t as tableOfContents } from "../../chunks/post-3f36dfb4.js";
var Logo_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}.logo.svelte-10evqc4{cursor:pointer;border:none;background-color:transparent;font-family:Consolas;width:150px;font-size:1.5rem;color:var(--c-gray);text-shadow:1px -1px var(--c-black);transition:color 0.3s}.logo.svelte-10evqc4:hover{color:var(--c-white)}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<button class="${"logo svelte-10evqc4"}">visualsvelte </button>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}.container.svelte-1b99y99.svelte-1b99y99{padding:0px 16px;text-align:center;display:grid;grid-template-columns:1fr 3fr 1fr;width:100%;background-color:var(--c-darkgray)}.container.svelte-1b99y99 .logo.svelte-1b99y99,.container.svelte-1b99y99 .support.svelte-1b99y99,.container.svelte-1b99y99 .writing.svelte-1b99y99{padding:30px}@media all and (max-width: 700px){.container.svelte-1b99y99 .logo.svelte-1b99y99,.container.svelte-1b99y99 .writing.svelte-1b99y99,.container.svelte-1b99y99 .support.svelte-1b99y99{grid-column:1/4;padding:15px}}.container.svelte-1b99y99 .writing p.svelte-1b99y99{color:var(--c-gray)}.container.svelte-1b99y99 .writing p.svelte-1b99y99:hover{color:var(--c-white)}.container.svelte-1b99y99 .writing p a.svelte-1b99y99{cursor:pointer !important;color:var(--c-green)}@media all and (max-width: 700px){.container.svelte-1b99y99.svelte-1b99y99{padding:10px 0px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<div class="${"container svelte-1b99y99"}"><div class="${"logo svelte-1b99y99"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
  <div class="${"writing svelte-1b99y99"}"><p class="${"svelte-1b99y99"}">thanks for visiting visualsvelte!</p>
    <p class="${"svelte-1b99y99"}">before you go, let\u2019s connect! <a rel="${"external"}" href="${"https://twitter.com/visualsvelte"}" class="${"svelte-1b99y99"}">@visualsvelte</a></p>
    <p class="${"svelte-1b99y99"}">still hungry for more? <a sveltekit:prefetch href="${"/about"}" class="${"svelte-1b99y99"}">read more</a> about
      visualsvelte,
    </p>
    <p class="${"svelte-1b99y99"}">or browse our most <a sveltekit:prefetch href="${"/popular-posts"}" class="${"svelte-1b99y99"}">popular posts</a>.
    </p></div>
  <div class="${"support svelte-1b99y99"}"></div>
</div>`;
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
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
var InThisArticle_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}.container.svelte-1re87yl.svelte-1re87yl{font-size:0.9em;height:100px;padding-left:0px}.container.svelte-1re87yl .heading.svelte-1re87yl{margin-left:0px;margin-bottom:5px}@media(min-width: 1200px){.container.svelte-1re87yl.svelte-1re87yl{position:sticky;top:20px}}.container.svelte-1re87yl svg.svelte-1re87yl{transition:all 1s;position:absolute;margin-top:2px}.container.svelte-1re87yl li.svelte-1re87yl{list-style-type:none;min-width:100px;background-color:transparent;margin-left:10px}.container.svelte-1re87yl li a.svelte-1re87yl{padding:7px 10px;cursor:pointer;font-size:1rem;height:100%;width:100%;display:block;text-decoration:none;color:var(--c-darkgray);opacity:0.7;text-align:left;background-color:transparent;border:none;font-family:"Consola"}.container.svelte-1re87yl li.current.svelte-1re87yl{cursor:default}.container.svelte-1re87yl li.current a.svelte-1re87yl{font-weight:600;opacity:1}.container.svelte-1re87yl li.current.svelte-1re87yl:hover{background-color:transparent}.container.svelte-1re87yl li.svelte-1re87yl:hover{background-color:rgba(119, 227, 35, 0.15)}.shadow.svelte-1re87yl.svelte-1re87yl{-webkit-filter:drop-shadow(2px -2px 0 var(--c-green));filter:drop-shadow(2px -2px 0 var(--c-green))}h5.svelte-1re87yl.svelte-1re87yl{font-size:1.1rem;text-transform:uppercase}',
  map: null
};
const InThisArticle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $current, $$unsubscribe_current;
  const current = tweened(0, { duration: 400, easing: cubicOut });
  $$unsubscribe_current = subscribe(current, (value) => $current = value);
  let { tableOfContents: tableOfContents2 } = $$props;
  if ($$props.tableOfContents === void 0 && $$bindings.tableOfContents && tableOfContents2 !== void 0)
    $$bindings.tableOfContents(tableOfContents2);
  $$result.css.add(css$7);
  {
    current.set(tableOfContents2.findIndex((element) => element.bool));
  }
  $$unsubscribe_current();
  return `<div class="${"container svelte-1re87yl"}"><h5 class="${"heading svelte-1re87yl"}">On this page</h5>
  <svg height="${"200"}" class="${"shadow svelte-1re87yl"}" xmlns="${"http://www.w3.org/2000/svg"}"><rect style="${"transform: translateY(" + escape($current * 32 + 5) + "px)"}" width="${"8"}" height="${"20"}" fill="${"var(--c-darkgr"}"></rect></svg>
  ${each(tableOfContents2, (toc, i) => {
    return `<li class="${["svelte-1re87yl", $current === i ? "current" : ""].join(" ").trim()}"><a href="${"#" + escape(toc.id)}" class="${"svelte-1re87yl"}">${escape(toc.title)}</a>
    </li>`;
  })}
</div>`;
});
var Icon_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "svg.svelte-1eky3f8{width:1em;height:1em;overflow:visible;transform-origin:50% 50%;transition:all 0.3s}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let rotation;
  const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  let { name } = $$props;
  let { direction = "n" } = $$props;
  let { width = "1em" } = $$props;
  let { fill } = $$props;
  let { height = "1em" } = $$props;
  let { stroke = void 0 } = $$props;
  let { strokeWidth = void 0 } = $$props;
  if ($$props.directions === void 0 && $$bindings.directions && directions !== void 0)
    $$bindings.directions(directions);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  $$result.css.add(css$6);
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
      style: "width: " + escape(width) + "; height: " + escape(height) + "; transform: rotate(" + escape(rotation) + "deg);"
    }
  ], { classes: "svelte-1eky3f8" })}><g><!-- HTML_TAG_START -->${icon.contents}<!-- HTML_TAG_END --></g></svg>` : ``}`;
});
var Tree_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}p.svelte-1hkqn79.svelte-1hkqn79{font-size:1.1em;cursor:pointer}p.current.svelte-1hkqn79.svelte-1hkqn79{font-weight:600;cursor:default}p.current.svelte-1hkqn79.svelte-1hkqn79:hover{background-color:transparent}li.svelte-1hkqn79.svelte-1hkqn79{min-width:100px;background-color:transparent;list-style-type:none;margin-left:10px}li.svelte-1hkqn79 button.svelte-1hkqn79{padding:7px 10px;cursor:pointer;font-size:1.1rem;height:100%;width:100%;display:block;text-decoration:none;opacity:0.7;text-align:left;background-color:transparent;border:none;font-family:"Consola"}li.current.svelte-1hkqn79.svelte-1hkqn79{cursor:default}li.current.svelte-1hkqn79 button.svelte-1hkqn79{cursor:default;font-weight:600;opacity:1}li.current.svelte-1hkqn79.svelte-1hkqn79:hover{background-color:transparent}li.svelte-1hkqn79.svelte-1hkqn79:hover{background-color:rgba(119, 227, 35, 0.15)}h5.svelte-1hkqn79.svelte-1hkqn79{font-size:1.2rem;text-transform:uppercase}',
  map: null
};
const Tree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { dark = false } = $$props;
  let localData = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  $$result.css.add(css$5);
  $$unsubscribe_page();
  return `<div${add_attribute("style", dark ? "color:var(--c-white)" : "color:var(--c-darkgray)", 0)}></div>
${each(localData, (l1, i) => {
    return `<h5 class="${"svelte-1hkqn79"}">${escape(l1.data)}</h5>
  ${each(l1.children, (l2, j) => {
      return `<p class="${["svelte-1hkqn79", l2 == "Full API" ? "current" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, {
        name: "triangle",
        fill: dark ? "var(--c-white)" : "var(--c-darkgray)",
        width: "8px",
        height: "8px",
        stroke: dark ? "var(--c-white)" : "var(--c-darkgray)",
        direction: localData[i].children[j].expanded ? "s" : "e"
      }, {}, {})}
      ${escape(l2.data)}</p>
    ${localData[i].children[j].expanded ? `${l2.children ? `${each(l2.children, (link) => {
        return `<li class="${["svelte-1hkqn79", link.href == $page.params.slug ? "current" : ""].join(" ").trim()}"><button class="${"svelte-1hkqn79"}">${escape(link.title)}</button>
            
          </li>`;
      })}` : `<li class="${"svelte-1hkqn79"}">Nothing yet!</li>`}` : ``}`;
    })}`;
  })}`;
});
var SideNavbar_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}.container.svelte-ytsdev.svelte-ytsdev{font-size:0.9em;overflow-x:hidden;overflow-y:scroll;line-height:0.8em;height:90vh;width:300px;position:sticky;padding:10px;top:20px}.container.svelte-ytsdev ul.svelte-ytsdev{padding-inline-start:0px;list-style-type:none}.container.svelte-ytsdev ul li.svelte-ytsdev{min-height:200px}.svelte-ytsdev.svelte-ytsdev::-webkit-scrollbar{width:10px}.svelte-ytsdev.svelte-ytsdev::-webkit-scrollbar-track{background:#f1f1f1}.svelte-ytsdev.svelte-ytsdev::-webkit-scrollbar-thumb{background:var(--c-gray)}.svelte-ytsdev.svelte-ytsdev::-webkit-scrollbar-thumb:hover{background:var(--c-darkgray)}",
  map: null
};
const SideNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let { sidebarData } = $$props;
  if ($$props.sidebarData === void 0 && $$bindings.sidebarData && sidebarData !== void 0)
    $$bindings.sidebarData(sidebarData);
  $$result.css.add(css$4);
  $$unsubscribe_innerWidth();
  return `${`<div class="${"container svelte-ytsdev"}"><ul class="${"svelte-ytsdev"}">${$innerWidth < 1200 ? `<li class="${"svelte-ytsdev"}">${slots.default ? slots.default({}) : ``}</li>` : ``}
      ${validate_component(Tree, "Tree").$$render($$result, { data: sidebarData }, {}, {})}</ul></div>`}`;
});
var Breadcrumb_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}div.svelte-104vwqd.svelte-104vwqd{font-size:0.7rem;align-content:center;color:var(--c-white);padding:10px 5px}div.svelte-104vwqd a.svelte-104vwqd{color:var(--c-white)}",
  map: null
};
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let home;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { path } = $$props;
  let { expanded } = $$props;
  let crumbs;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  $$result.css.add(css$3);
  home = $page.url.pathname !== "/";
  {
    {
      const tokens = path.split("/").filter((t) => t !== "");
      let tokenPath = "";
      crumbs = tokens.map((t) => {
        tokenPath += "/" + t;
        return { label: t, href: tokenPath };
      });
      crumbs.unshift({ label: "Home", href: "/" });
    }
  }
  $$unsubscribe_page();
  return `<div class="${"svelte-104vwqd"}">${home ? `` : ``}

  ${each(crumbs, (c, i) => {
    return `${i == crumbs.length - 1 ? `${escape(c.label)}` : `<a rel="${"interal"}"${add_attribute("href", c.href, 0)} class="${"svelte-104vwqd"}">${escape(c.label)}</a> &gt;\xA0`}`;
  })}
</div>`;
});
const showHideMenu = writable(false);
var SecondaryToolbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}.bread.svelte-p7edxr.svelte-p7edxr{margin-left:2%}.container.svelte-p7edxr.svelte-p7edxr{display:grid;grid-template-columns:auto 80px;border-top:1px solid rgba(223, 223, 223, 0.3)}.container.svelte-p7edxr .menu-button.svelte-p7edxr{align-self:start;font-size:0.9rem;padding:9px 0px;border:none;background:transparent;color:var(--c-white);font-family:"Consola" !important;cursor:pointer}.container.svelte-p7edxr .menu-items.svelte-p7edxr{padding-top:30px;margin:0 auto;position:relative}.container.svelte-p7edxr .menu-items .select-button.svelte-p7edxr{margin:10px 20px;z-index:20;color:var(--c-darkgray);cursor:pointer;width:100%;display:inline-block;padding:1em;grid-column:1/2;text-align:center}',
  map: null
};
const SecondaryToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let home;
  let $showHideMenu, $$unsubscribe_showHideMenu;
  let $page, $$unsubscribe_page;
  $$unsubscribe_showHideMenu = subscribe(showHideMenu, (value) => $showHideMenu = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Integrate D3 and SvelteKit",
      href: "/d3"
    },
    {
      title: "About visualsvelte",
      href: "/about"
    },
    { title: "Support", href: "/support" },
    {
      title: "Twitter",
      href: "https://twitter.com/visualsvelte"
    }
  ];
  $$result.css.add(css$2);
  home = $page.url.pathname == "/";
  $$unsubscribe_showHideMenu();
  $$unsubscribe_page();
  return `<div class="${"container svelte-p7edxr"}"><div>${!home && !$showHideMenu ? `<div class="${"bread svelte-p7edxr"}">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, {
    path: $page.url.pathname,
    expanded: $showHideMenu
  }, {}, {})}</div>` : ``}</div>

  <button class="${"menu-button svelte-p7edxr"}">${escape($showHideMenu ? "Close" : "Menu")}</button>

  ${$showHideMenu ? `<div class="${"menu-items svelte-p7edxr"}">${each(menuItems, (item, i) => {
    return `<button class="${"select-button svelte-p7edxr"}">${escape(item.title)}
        </button>`;
  })}</div>` : ``}
</div>`;
});
var MobileMenu_svelte_svelte_type_style_lang = "";
var TopNav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}.container.svelte-xqktp5.svelte-xqktp5{z-index:16;height:90px;width:100%}.container.svelte-xqktp5 .header-grid.svelte-xqktp5{display:grid;background-color:var(--c-darkgray);grid-template-areas:"hl hc hr" "tb tb tb";height:90px;grid-template-rows:60px auto;display:intital}@media(max-width: 800px){.container.svelte-xqktp5 .header-grid.svelte-xqktp5{grid-template-columns:minmax(120px, 200px) auto minmax(120px, 200px)}}@media(min-width: 800px){.container.svelte-xqktp5 .header-grid.svelte-xqktp5{grid-template-columns:minmax(240px, 280px) auto minmax(200px, 300px);grid-template-areas:"hl hc hr";grid-template-rows:60px;height:60px}}@media(min-width: 1000px){.container.svelte-xqktp5 .header-grid.svelte-xqktp5{grid-template-columns:250px auto 300px;height:60px}}.container.svelte-xqktp5 .header-grid .toolbar.svelte-xqktp5{height:40px;align-self:start;position:relative;top:0px;z-index:10;grid-area:tb;background-color:var(--c-darkgray);width:100%;transition:all 0.3s}.container.svelte-xqktp5 .header-grid .toolbar.fixed.svelte-xqktp5{position:fixed}.container.svelte-xqktp5 .header-grid .toolbar.expanded.svelte-xqktp5{height:80vh;border-bottom:3px solid var(--c-green)}.container.svelte-xqktp5 .header-grid .header-left.svelte-xqktp5{grid-area:"hl";align-content:center;padding-left:10px;display:flex}.container.svelte-xqktp5 .header-grid .header-centre.svelte-xqktp5{grid-area:"hc"}.container.svelte-xqktp5 .header-grid .header-right.svelte-xqktp5{grid-area:"hr";align-content:center;display:flex;justify-content:end;padding-right:20px}',
  map: null
};
const TopNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $innerWidth, $$unsubscribe_innerWidth;
  let $page, $$unsubscribe_page;
  let $showHideMenu, $$unsubscribe_showHideMenu;
  let $scrollY, $$unsubscribe_scrollY;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showHideMenu = subscribe(showHideMenu, (value) => $showHideMenu = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  let loadSecondary = false;
  let { sidebarData } = $$props;
  if ($$props.sidebarData === void 0 && $$bindings.sidebarData && sidebarData !== void 0)
    $$bindings.sidebarData(sidebarData);
  $$result.css.add(css$1);
  $page.url.pathname !== "/";
  {
    $innerWidth < 800 ? loadSecondary = true : loadSecondary = false;
  }
  $$unsubscribe_innerWidth();
  $$unsubscribe_page();
  $$unsubscribe_showHideMenu();
  $$unsubscribe_scrollY();
  return `<div class="${"container svelte-xqktp5"}"><div class="${"header-grid svelte-xqktp5"}"><div class="${"header-left svelte-xqktp5"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
    <div class="${"header-centre svelte-xqktp5"}"></div>
    <div class="${"header-right svelte-xqktp5"}">${validate_component(ActionButton, "ActionButton").$$render($$result, { text: "Support", href: "/support" }, {}, {})}</div>

    ${loadSecondary ? `<div class="${[
    "toolbar svelte-xqktp5",
    ($showHideMenu ? "expanded" : "") + " " + ($scrollY > 60 ? "fixed" : "")
  ].join(" ").trim()}">${validate_component(SecondaryToolbar, "SecondaryToolbar").$$render($$result, {}, {}, {})}</div>` : ``}</div></div>

`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}@font-face{font-family:"Consola";font-style:normal;font-weight:400;src:local(""), url("/fonts/CONSOLA.ttf") format("truetype")}.svelte-193a5ic.svelte-193a5ic{font-family:"Consola"}.grid.svelte-193a5ic.svelte-193a5ic{max-width:1200px;margin:0 auto;display:grid;background-size:20px 20px;background-image:linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)}@media(min-width: 800px){.grid.svelte-193a5ic.svelte-193a5ic{grid-template-columns:minmax(240px, 280px) minmax(600px, 700px) 1px}}@media(min-width: 1000px){.grid.svelte-193a5ic.svelte-193a5ic{grid-template-columns:250px 700px 300px}}@media(max-width: 600px){.grid.svelte-193a5ic.svelte-193a5ic{grid-template-columns:1px auto 1px}}.grid.svelte-193a5ic .sidebar-left.svelte-193a5ic{background:linear-gradient(to top right, rgba(255, 255, 255, 0.2) 80%, rgba(0, 0, 0, 0.05))}.grid.svelte-193a5ic .sidebar-right.svelte-193a5ic{background:linear-gradient(to top left, rgba(255, 255, 255, 0.2) 80%, rgba(0, 0, 0, 0.05))}.grid.svelte-193a5ic header.svelte-193a5ic{width:100%;height:90px}header.svelte-193a5ic.svelte-193a5ic,footer.svelte-193a5ic.svelte-193a5ic{grid-column:1/4}@media all and (max-width: 600px){aside.svelte-193a5ic.svelte-193a5ic,article.svelte-193a5ic.svelte-193a5ic{grid-column:1/4}}header.svelte-193a5ic.svelte-193a5ic,aside.svelte-193a5ic.svelte-193a5ic,article.svelte-193a5ic.svelte-193a5ic,footer.svelte-193a5ic.svelte-193a5ic{display:flex;justify-content:center}article.svelte-193a5ic.svelte-193a5ic{padding:10px 20px}#content.svelte-193a5ic.svelte-193a5ic{position:relative;max-width:90vw}',
  map: null
};
async function load({ fetch }) {
  const url = "/api/routes.json";
  const res = await fetch(url);
  if (res.ok) {
    const { sidebarData } = await res.json();
    return { props: { sidebarData } };
  }
  return {
    status: res.status,
    error: new Error(`Could not load data`)
  };
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $innerWidth, $$unsubscribe_innerWidth;
  let $$unsubscribe_scrollY;
  let $tableOfContents, $$unsubscribe_tableOfContents;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => value);
  $$unsubscribe_tableOfContents = subscribe(tableOfContents, (value) => $tableOfContents = value);
  let { sidebarData } = $$props;
  if ($$props.sidebarData === void 0 && $$bindings.sidebarData && sidebarData !== void 0)
    $$bindings.sidebarData(sidebarData);
  $$result.css.add(css);
  $$unsubscribe_innerWidth();
  $$unsubscribe_scrollY();
  $$unsubscribe_tableOfContents();
  return `

<div class="${"grid svelte-193a5ic"}"><header class="${"svelte-193a5ic"}">${validate_component(TopNav, "TopNav").$$render($$result, { sidebarData }, {}, {})}</header>

  ${$innerWidth > 800 ? `<aside class="${"sidebar-left svelte-193a5ic"}">${$tableOfContents.length ? `${validate_component(SideNavbar, "SideNavbar").$$render($$result, { sidebarData }, {}, {
    default: () => {
      return `${validate_component(InThisArticle, "InThisArticle").$$render($$result, { tableOfContents: $tableOfContents }, {}, {})}`;
    }
  })}` : ``}</aside>` : `<div class="${"svelte-193a5ic"}"></div>`}

  <article class="${"svelte-193a5ic"}"><main id="${"content"}" class="${"svelte-193a5ic"}">${slots.default ? slots.default({}) : ``}</main></article>

  <aside class="${"sidebar-right svelte-193a5ic"}">${$tableOfContents.length && $innerWidth >= 1200 ? `${validate_component(InThisArticle, "InThisArticle").$$render($$result, { tableOfContents: $tableOfContents }, {}, {})}
      ` : ``}</aside>
  <footer class="${"svelte-193a5ic"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer>
</div>`;
});
export { _layout as default, load };
