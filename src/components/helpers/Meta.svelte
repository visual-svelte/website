<script>
  export let metadata;
  // export let title = "Visual S";
  // export let description = "Informed";
  // export let url = "https://visualsvelte.com";
</script>

<svelte:head>
  <title>{metadata.t}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content={metadata.d} />
  <meta name="author" content="VisualSvelte" />
  <meta name="keywords" content={metadata.tags} />

  <meta property="og:title" content={metadata.t} />
  <meta property="og:site_name" content="VisualSvelte" />
  <meta property="og:url" content="https://visualsvelte.com{metadata.u}" />
  <meta property="og:description" content={metadata.d} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="en_US" />

  <meta
    property="og:image"
    content="/assets/images/thumbnails/d3-{metadata.u}.png"
  />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="600" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="https://visualsvelte.com" />
  <meta name="twitter:creator" content="@visualsvelte" />
  <meta name="twitter:title" content={metadata.t} />
  <meta name="twitter:description" content={metadata.d} />
  <meta
    name="twitter:image:src"
    content={`images/twitter/d3-${metadata.u}.png`
      ? `images/twitter/d3-${metadata.u}.png`
      : `images/thumbnail/d3-${metadata.u}.png`}
  />

  <meta name="robots" content="max-image-preview:large" />

  <link rel="canonical" href="{metadata.u}/" />
</svelte:head>
