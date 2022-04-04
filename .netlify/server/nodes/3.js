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
var __reExport = (target, module3, copyDefault, desc) => {
  if (module3 && typeof module3 === "object" || typeof module3 === "function") {
    for (let key of __getOwnPropNames(module3))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module3[key], enumerable: !(desc = __getOwnPropDesc(module3, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module3, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module3 != null ? __create(__getProtoOf(module3)) : {}, "default", !isNodeMode && module3 && module3.__esModule ? { get: () => module3.default, enumerable: true } : { value: module3, enumerable: true })), module3);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module3, temp) => {
    return cache && cache.get(module3) || (temp = __reExport(__markAsModule({}), module3, 1), cache && cache.set(module3, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  css: () => css,
  entry: () => entry,
  js: () => js,
  module: () => module2
});
var module2 = __toESM(require("../entries/pages/about.svelte.js"));
const entry = "pages/about.svelte-1cf243c7.js";
const js = ["pages/about.svelte-1cf243c7.js", "chunks/vendor-21d61cc0.js"];
const css = ["assets/pages/about.svelte-a84ddd0a.css", "assets/vendor-0cdc4f15.css"];
module.exports = __toCommonJS(stdin_exports);
