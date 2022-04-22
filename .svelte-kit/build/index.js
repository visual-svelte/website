
import root from '__GENERATED__/root.svelte';
import { respond } from '/Users/PC/Documents/GitHub/visualsvelte/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Users/PC/Documents/GitHub/visualsvelte/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Users/PC/Documents/GitHub/visualsvelte/.svelte-kit/runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n    <link\r\n      rel=\"apple-touch-icon\"\r\n      sizes=\"180x180\"\r\n      href=\"images/favicon/apple-touch-icon.png\"\r\n    />\r\n    <link\r\n      rel=\"icon\"\r\n      type=\"image/png\"\r\n      sizes=\"32x32\"\r\n      href=\"images/favicon/favicon-32x32.png\"\r\n    />\r\n    <link\r\n      rel=\"icon\"\r\n      type=\"image/png\"\r\n      sizes=\"16x16\"\r\n      href=\"images/favicon/favicon-16x16.png\"\r\n    />\r\n    <link rel=\"manifest\" href=\"images/favicon/site.webmanifest\" />\r\n    <link\r\n      rel=\"mask-icon\"\r\n      href=\"images/favicon/safari-pinned-tab.svg\"\r\n      color=\"#5bbad5\"\r\n    />\r\n    <meta name=\"msapplication-TileColor\" content=\"#da532c\" />\r\n    <meta name=\"theme-color\" content=\"#ffffff\" />\r\n    " + head + "\r\n  </head>\r\n  <body style=\"margin: 0 !important\">\r\n    <div>" + body + "</div>\r\n  </body>\r\n</html>\r\n";

let read = null;

set_paths({"base":"","assets":""});

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ event, resolve }) => resolve(event)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		const hooks = get_hooks(user_hooks);

		this.options = {
			amp: false,
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/_app/',
			prerender: true,
			read,
			root,
			service_worker: null,
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}
