export const manifest = {
	appDir: "_app",
	assets: new Set(["dataviz.gif","favicon.png","fonts/CONSOLA.TTF","fonts/CONSOLAB.TTF","fonts/consolai.ttf","fonts/Consolas.ttf","fonts/consolaz.ttf","images/thumbnails/brush.PNG","images/thumbnails/chord.png","images/thumbnails/contour.PNG","images/thumbnails/drag.png","images/thumbnails/force.PNG","images/thumbnails/geo.PNG","images/thumbnails/graph.png","images/thumbnails/hierarchy.png","images/thumbnails/polygon.png","images/thumbnails/shapes.PNG","images/thumbnails/zoom.PNG"]),
	_: {
		mime: {".gif":"image/gif",".png":"image/png",".TTF":"font/ttf",".ttf":"font/ttf",".PNG":"image/png"},
		entry: {"file":"start-c0704714.js","js":["start-c0704714.js","chunks/vendor-b96c9505.js","chunks/singletons-d1fb5791.js"],"css":["assets/vendor-0cdc4f15.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "about",
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "tags/[tag]",
				pattern: /^\/tags\/([^/]+?)\/?$/,
				params: (m) => ({ tag: m[1]}),
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/routes\.json$/,
				params: null,
				load: () => import('./entries/endpoints/api/routes.json.js')
			},
			{
				type: 'page',
				key: "d3",
				pattern: /^\/d3\/?$/,
				params: null,
				path: "/d3",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "d3/api",
				pattern: /^\/d3\/api\/?$/,
				params: null,
				path: "/d3/api",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				key: "d3/api/[slug]",
				pattern: /^\/d3\/api\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			}
		]
	}
};
