import { c as create_ssr_component, e as escape, a as add_attribute } from "./index-b8b7f0d9.js";
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metadata } = $$props;
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  return `${$$result.head += `${$$result.title = `<title>${escape(metadata.t)}</title>`, ""}<meta charset="${"utf-8"}" data-svelte="svelte-62bz6a"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1.0"}" data-svelte="svelte-62bz6a"><meta http-equiv="${"Content-Type"}" content="${"text/html; charset=utf-8"}" data-svelte="svelte-62bz6a"><meta name="${"description"}"${add_attribute("content", metadata.d, 0)} data-svelte="svelte-62bz6a"><meta name="${"author"}" content="${"VisualSvelte"}" data-svelte="svelte-62bz6a"><meta name="${"keywords"}"${add_attribute("content", metadata.tags, 0)} data-svelte="svelte-62bz6a"><meta property="${"og:title"}"${add_attribute("content", metadata.t, 0)} data-svelte="svelte-62bz6a"><meta property="${"og:site_name"}" content="${"VisualSvelte"}" data-svelte="svelte-62bz6a"><meta property="${"og:url"}" content="${"https://visualsvelte.com" + escape(metadata.u)}" data-svelte="svelte-62bz6a"><meta property="${"og:description"}"${add_attribute("content", metadata.d, 0)} data-svelte="svelte-62bz6a"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-62bz6a"><meta property="${"og:locale"}" content="${"en_US"}" data-svelte="svelte-62bz6a"><meta property="${"og:image"}" content="${"/assets/images/thumbnails/d3-" + escape(metadata.u) + ".png"}" data-svelte="svelte-62bz6a"><meta property="${"og:image:type"}" content="${"image/jpeg"}" data-svelte="svelte-62bz6a"><meta property="${"og:image:width"}" content="${"1200"}" data-svelte="svelte-62bz6a"><meta property="${"og:image:height"}" content="${"600"}" data-svelte="svelte-62bz6a"><meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-62bz6a"><meta name="${"twitter:site"}" content="${"https://visualsvelte.com"}" data-svelte="svelte-62bz6a"><meta name="${"twitter:creator"}" content="${"@visualsvelte"}" data-svelte="svelte-62bz6a"><meta name="${"twitter:title"}"${add_attribute("content", metadata.t, 0)} data-svelte="svelte-62bz6a"><meta name="${"twitter:description"}"${add_attribute("content", metadata.d, 0)} data-svelte="svelte-62bz6a"><meta name="${"twitter:image:src"}"${add_attribute("content", `images/twitter/d3-${metadata.u}.png` ? `images/twitter/d3-${metadata.u}.png` : `images/thumbnail/d3-${metadata.u}.png`, 0)} data-svelte="svelte-62bz6a"><meta name="${"robots"}" content="${"max-image-preview:large"}" data-svelte="svelte-62bz6a"><link rel="${"canonical"}" href="${escape(metadata.u) + "/"}" data-svelte="svelte-62bz6a">`, ""}`;
});
export { Meta as M };
