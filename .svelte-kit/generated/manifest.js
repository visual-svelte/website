const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\d3\\index.svelte"),
	() => import("..\\..\\src\\routes\\d3\\other\\gotchas.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\index.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-scale-chromatic.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-axis-retired.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-interpolate.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-time-format.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-transition.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-hierarchy.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-selection.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-delaunay.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-dispatch.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-quadtree.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-contour.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-polygon.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-format.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-random.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-array.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-brush.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-chord.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-color.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-fetch.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-force.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-scale.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-shape.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-timer.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-drag.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-ease.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-path.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-time.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-zoom.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-dsv.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\d3-geo.svelte"),
	() => import("..\\..\\src\\routes\\d3\\api\\[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/d3/index.svelte
	[/^\/d3\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/d3/other/gotchas.svelte
	[/^\/d3\/other\/gotchas\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/d3/api/index.svelte
	[/^\/d3\/api\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/d3/api/d3-scale-chromatic.svelte
	[/^\/d3\/api\/d3-scale-chromatic\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/d3/api/d3-axis-retired.svelte
	[/^\/d3\/api\/d3-axis-retired\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/d3/api/d3-interpolate.svelte
	[/^\/d3\/api\/d3-interpolate\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/d3/api/d3-time-format.svelte
	[/^\/d3\/api\/d3-time-format\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/d3/api/d3-transition.svelte
	[/^\/d3\/api\/d3-transition\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/d3/api/d3-hierarchy.svelte
	[/^\/d3\/api\/d3-hierarchy\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/d3/api/d3-selection.svelte
	[/^\/d3\/api\/d3-selection\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/d3/api/d3-delaunay.svelte
	[/^\/d3\/api\/d3-delaunay\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/d3/api/d3-dispatch.svelte
	[/^\/d3\/api\/d3-dispatch\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/d3/api/d3-quadtree.svelte
	[/^\/d3\/api\/d3-quadtree\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/d3/api/d3-contour.svelte
	[/^\/d3\/api\/d3-contour\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/d3/api/d3-polygon.svelte
	[/^\/d3\/api\/d3-polygon\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/d3/api/d3-format.svelte
	[/^\/d3\/api\/d3-format\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/d3/api/d3-random.svelte
	[/^\/d3\/api\/d3-random\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/d3/api/d3-array.svelte
	[/^\/d3\/api\/d3-array\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/d3/api/d3-brush.svelte
	[/^\/d3\/api\/d3-brush\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/d3/api/d3-chord.svelte
	[/^\/d3\/api\/d3-chord\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/d3/api/d3-color.svelte
	[/^\/d3\/api\/d3-color\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/d3/api/d3-fetch.svelte
	[/^\/d3\/api\/d3-fetch\/?$/, [c[0], c[24]], [c[1]]],

	// src/routes/d3/api/d3-force.svelte
	[/^\/d3\/api\/d3-force\/?$/, [c[0], c[25]], [c[1]]],

	// src/routes/d3/api/d3-scale.svelte
	[/^\/d3\/api\/d3-scale\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/d3/api/d3-shape.svelte
	[/^\/d3\/api\/d3-shape\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/d3/api/d3-timer.svelte
	[/^\/d3\/api\/d3-timer\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/d3/api/d3-drag.svelte
	[/^\/d3\/api\/d3-drag\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/d3/api/d3-ease.svelte
	[/^\/d3\/api\/d3-ease\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/d3/api/d3-path.svelte
	[/^\/d3\/api\/d3-path\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/d3/api/d3-time.svelte
	[/^\/d3\/api\/d3-time\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/d3/api/d3-zoom.svelte
	[/^\/d3\/api\/d3-zoom\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/d3/api/d3-dsv.svelte
	[/^\/d3\/api\/d3-dsv\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/d3/api/d3-geo.svelte
	[/^\/d3\/api\/d3-geo\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/d3/api/[slug].svelte
	[/^\/d3\/api\/([^/]+?)\/?$/, [c[0], c[36]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];