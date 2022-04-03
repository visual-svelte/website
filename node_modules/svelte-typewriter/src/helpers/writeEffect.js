import { typingInterval } from './typingInterval'
import { runOnEveryParentUntil } from '../helpers/runOnEveryParentUntil'

/** @type {import(types').TypewriterEffectFn} */
const writeEffect = async ({ currentNode, text }, options) => {
	runOnEveryParentUntil(currentNode, options.parentElement, element => {
		const classToAdd = currentNode === element ? 'typing' : 'finished-typing'
		element.classList.add(classToAdd)
	})
	for (let index = 0; index <= text.length; index++) {
		const char = text[index]
		char === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
}

export { writeEffect }
