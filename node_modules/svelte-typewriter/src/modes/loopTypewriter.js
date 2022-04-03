import { writeEffect } from '../helpers/writeEffect'
import { unwriteEffect } from '../helpers/unwriteEffect'
import { getRandomElement } from '../helpers/getRandomElement'
import { runOnEveryParentUntil } from '../helpers/runOnEveryParentUntil'

/** @type {import('types').TypewriterEffectFn} */
const loopTypewriter = async ({ currentNode, text }, options) => {
	await writeEffect({ currentNode, text }, options)
	const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
	const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands
	fullyWritten && (await unwriteEffect(currentNode, options))
	runOnEveryParentUntil(currentNode, options.parentElement, element => {
		currentNode === element
			? element.classList.remove('typing')
			: element.classList.remove('finished-typing')
	})
}

/** @type {import('types').TypewriterModeFn} */
const mode = async (elements, options) => {
	while (true) {
		if (options.loop) {
			for (const element of elements) await loopTypewriter(element, options)
		} else if (options.loopRandom) {
			const element = getRandomElement(elements)
			await loopTypewriter(element, options)
		}
	}
}

export { mode }
