import { runOnEveryParentUntil } from '../helpers/runOnEveryParentUntil'

export const makeNestedStaticElementsVisible = parentElement => {
	const staticElements = [...parentElement.querySelectorAll('[data-static]')]
	for (const staticElement of staticElements) {
		runOnEveryParentUntil(staticElement, parentElement, currentStaticElement => {
			const isParentElement = currentStaticElement !== staticElement
			isParentElement && currentStaticElement.classList.add('finished-typing')
		})
	}
}
