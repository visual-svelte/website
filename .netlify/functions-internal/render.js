import { init } from '../handler.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["dataviz.gif","favicon.png","fonts/CONSOLA.TTF","fonts/CONSOLAB.TTF","fonts/consolai.ttf","fonts/Consolas.ttf","fonts/consolaz.ttf","images/favicon/android-chrome-192x192.png","images/favicon/android-chrome-512x512.png","images/favicon/apple-touch-icon.png","images/favicon/favicon-16x16.png","images/favicon/favicon-32x32.png","images/favicon/favicon.ico","images/kofi.png","images/thumbnails/animatedTransitions.PNG","images/thumbnails/brush.png","images/thumbnails/chord.png","images/thumbnails/contour.png","images/thumbnails/drag.png","images/thumbnails/flip.PNG","images/thumbnails/force.png","images/thumbnails/geo.png","images/thumbnails/graph.png","images/thumbnails/hierarchy.png","images/thumbnails/polygon.png","images/thumbnails/scrollytelling.PNG","images/thumbnails/shapes.png","images/thumbnails/zoom.png"]),
	_: {
		mime: {".gif":"image/gif",".png":"image/png",".TTF":"font/ttf",".ttf":"font/ttf",".ico":"image/vnd.microsoft.icon",".PNG":"image/png"},
		entry: {"file":"start-59112475.js","js":["start-59112475.js","chunks/vendor-95c30d18.js","chunks/singletons-d1fb5791.js"],"css":["assets/vendor-8f80d76f.css"]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js')
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
				key: "svelte",
				pattern: /^\/svelte\/?$/,
				params: null,
				path: "/svelte",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "svelte/[slug]",
				pattern: /^\/svelte\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				key: "about",
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "tags/[tag]",
				pattern: /^\/tags\/([^/]+?)\/?$/,
				params: (m) => ({ tag: m[1]}),
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/routes\.json$/,
				params: null,
				load: () => import('../server/entries/endpoints/api/routes.json.js')
			},
			{
				type: 'page',
				key: "d3",
				pattern: /^\/d3\/?$/,
				params: null,
				path: "/d3",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				key: "d3/recipes/[slug]",
				pattern: /^\/d3\/recipes\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				key: "d3/api",
				pattern: /^\/d3\/api\/?$/,
				params: null,
				path: "/d3/api",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				key: "d3/api/[slug]",
				pattern: /^\/d3\/api\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: null,
				a: [0,10],
				b: [1]
			}
		]
	}
});
