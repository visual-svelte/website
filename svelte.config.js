import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@import './src/style/app.scss';`,
    },
  }),
  kit: {
    adapter: adapter(),
  },
};

export default config;
