import { typingInterval } from './typingInterval'

/** @type {import(types').UnwriteEffect} */
const unwriteEffect = async (currentNode, options) => {
	options.dispatch('done')
	await typingInterval(typeof options.loop === 'number' ? options.loop : 1500)
	const text = currentNode.innerHTML.replaceAll('&amp;', '&')
	for (let index = text.length - 1; index >= 0; index--) {
		const letter = text[index]
		letter === '>' && (index = text.lastIndexOf('<', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.unwriteInterval ? options.unwriteInterval : options.interval)
	}
}

export { unwriteEffect }
