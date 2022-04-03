import type { TypewriterElement } from './typewriter'

type GetLongestTextElement = (elements: TypewriterElement[]) => Element

type DescendingSortFunction = (
	firstElement: TypewriterElement,
	secondElement: TypewriterElement
) => number

export { GetLongestTextElement, DescendingSortFunction }
