import { writeEffect } from '../helpers/writeEffect'
import { onAnimationEnd } from '../helpers/onAnimationEnd'
import { cleanChildText } from '../helpers/cleanChildText'

/** @type {import('types').TypewriterOptions} */
const mode = async (elements, options) => {
	if (options.cascade) {
		cleanChildText(elements)
	} else {
		const { getLongestTextElement } = await import('../helpers/getLongestTextElement')
		const lastElementToFinish = getLongestTextElement(elements)
		onAnimationEnd(lastElementToFinish, () => options.dispatch('done'))
	}
	for (const element of elements) {
		if (options.cascade) {
			await writeEffect(element, options)
			element.currentNode.classList.replace('typing', 'finished-typing')
		} else {
			writeEffect(element, options).then(() => {
				element.currentNode.classList.replace('typing', 'finished-typing')
			})
		}
	}

	options.cascade && options.dispatch('done')
}

export { mode }
