import type { SvelteComponentTyped } from 'svelte'
import type { TypewriterProps, TypewriterEvents, TypewriterSlots } from './typewriter'

export * from './createElement'
export * from './getElements'
export * from './getLongestTextElement'
export * from './getRandomElement'
export * from './hasSingleTextNode'
export * from './onAnimationEnd'
export * from './rng'
export * from './sleep'
export * from './typewriter'
export * from './typingInterval'
export * from './unwriteEffect'
export * from './writeEffect'

export default class Typewriter extends SvelteComponentTyped<TypewriterProps, TypewriterEvents, TypewriterSlots> {}
