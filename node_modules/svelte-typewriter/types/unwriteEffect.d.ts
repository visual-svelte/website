import type { TypewriterOptions } from './typewriter'

type UnwriteEffect = (currentNode: Element, options: TypewriterOptions) => Promise<void>

export { UnwriteEffect }
