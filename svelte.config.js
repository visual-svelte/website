import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";
import path from "path";
import autoImport from "vite-plugin-autoimport";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@import './src/style/app.scss';`,
    },
  }),
  kit: {
    adapter: adapter(),
    vite: {
      optimizeDeps: {
        include: ["highlight.js/lib/core"],
      },

      resolve: {
        alias: {
          $assets: path.resolve("./static/assets"),
          $actions: path.resolve("./src/actions"),
          $components: path.resolve("./src/components"),
          $data: path.resolve("./src/data"),
          $routes: path.resolve("./src/routes"),
          $stores: path.resolve("./src/stores"),
          $styles: path.resolve("./src/styles"),
          $svg: path.resolve("./src/svg"),
          $utils: path.resolve("./src/utils"),
          $thumbnails: path.resolve("./thumbnails"),
        },
      },
      plugins: [
        dsv(),
        svg(),
        autoImport({
          components: [
            "./src/components",
            "./src/components/d3",
            "./src/components/d3/recipes",
          ],
          include: ["**/*.svelte"],
        }),
      ],
    },
  },
};

export default config;
