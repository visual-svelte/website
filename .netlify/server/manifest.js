var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["dataviz.gif", "favicon.png", "fonts/CONSOLA.TTF", "fonts/CONSOLAB.TTF", "fonts/consolai.ttf", "fonts/Consolas.ttf", "fonts/consolaz.ttf", "images/thumbnails/brush.PNG", "images/thumbnails/chord.png", "images/thumbnails/contour.PNG", "images/thumbnails/drag.png", "images/thumbnails/force.PNG", "images/thumbnails/geo.PNG", "images/thumbnails/graph.png", "images/thumbnails/hierarchy.png", "images/thumbnails/polygon.png", "images/thumbnails/shapes.PNG", "images/thumbnails/zoom.PNG"]),
  _: {
    mime: { ".gif": "image/gif", ".png": "image/png", ".TTF": "font/ttf", ".ttf": "font/ttf", ".PNG": "image/png" },
    entry: { "file": "start-c0704714.js", "js": ["start-c0704714.js", "chunks/vendor-b96c9505.js", "chunks/singletons-d1fb5791.js"], "css": ["assets/vendor-0cdc4f15.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js")))
    ],
    routes: [
      {
        type: "page",
        key: "",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        key: "about",
        pattern: /^\/about\/?$/,
        params: null,
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        key: "tags/[tag]",
        pattern: /^\/tags\/([^/]+?)\/?$/,
        params: (m) => ({ tag: m[1] }),
        path: null,
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/api\/routes\.json$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/routes.json.js")))
      },
      {
        type: "page",
        key: "d3",
        pattern: /^\/d3\/?$/,
        params: null,
        path: "/d3",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        key: "d3/api",
        pattern: /^\/d3\/api\/?$/,
        params: null,
        path: "/d3/api",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        key: "d3/api/[slug]",
        pattern: /^\/d3\/api\/([^/]+?)\/?$/,
        params: (m) => ({ slug: m[1] }),
        path: null,
        shadow: null,
        a: [0, 7],
        b: [1]
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
