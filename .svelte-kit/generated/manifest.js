const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\svelte\\index.svelte"),
	() => import("..\\..\\src\\routes\\svelte\\[slug].svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\tags\\[tag].svelte"),
	() => import("..\\..\\src\\routes\\d3\\charts\\index.svelte"),
	() => import("..\\..\\src\\routes\\d3\\charts\\[slug].svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\index.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/svelte/index.svelte
	[/^\/svelte\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/svelte/[slug].svelte
	[/^\/svelte\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ slug: d(m[1])})],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/tags/[tag].svelte
	[/^\/tags\/([^/]+?)\/?$/, [c[0], c[6]], [c[1]], (m) => ({ tag: d(m[1])})],

	// src/routes/d3/charts/index.svelte
	[/^\/d3\/charts\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/d3/charts/[slug].svelte
	[/^\/d3\/charts\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ slug: d(m[1])})],

	// src/routes/d3/api/index.svelte
	[/^\/d3\/api\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/d3/api/[slug].svelte
	[/^\/d3\/api\/([^/]+?)\/?$/, [c[0], c[10]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];