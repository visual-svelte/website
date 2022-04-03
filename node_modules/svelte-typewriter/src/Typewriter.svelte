<script>
	import { createEventDispatcher } from 'svelte'
	import { typewriter } from './modes'

	export let interval = 30
	export let cascade = false
	export let loop = false
	export let loopRandom = false
    export let scramble = false
    export let scrambleSlowdown = scramble ? true : false
	export let cursor = true
	export let delay = 0
	export let unwriteInterval = false

	const dispatch = createEventDispatcher()
  
    $: options = { interval, cascade, loop, loopRandom, scramble, scrambleSlowdown, cursor, delay, dispatch, unwriteInterval }
</script>

<style>
	@keyframes cursorFade {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}
	}

	.typewriter-container :global(*:not(.typing):not(.finished-typing):not([data-static])) {
		display: none;
	}

	.typewriter-container :global(.finished-typing::after) {
		content: none;
	}

	.cursor :global(.typing::after) {
		content: '▌';
		display: inline-block;
		color: var(--cursor-color);
		animation: cursorFade 1.25s infinite;
	}
</style>

<noscript>
    <slot />
</noscript>

<div
    use:typewriter={options}
    class="typewriter-container"
    class:cursor
	class:delay={options.delay > 0}
    style:--cursor-color={typeof cursor === 'string' ? cursor : 'black'}
>
    <slot />
</div>
