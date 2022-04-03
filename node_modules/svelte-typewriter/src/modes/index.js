import { getElements } from '../helpers/getElements'
import { makeNestedStaticElementsVisible } from '../helpers/makeNestedStaticElementsVisible'

const getSelectedMode = async options => {
	if (options.loop || options.loopRandom) {
		return (await import('./loopTypewriter')).mode
	} else if (options.scramble) {
		return (await import('./scramble')).mode
	} else {
		return (await import('./typewriter')).mode
	}
}

/** @type {import('types').TypewriterMainFn} */
const typewriter = async (node, options) => {
	makeNestedStaticElementsVisible(node)
	const mode = await getSelectedMode(options)
	const elements = getElements(node, { parentElement: node, ...options })
	if (options.delay > 0) {
		const { sleep } = await import('../helpers/sleep')
		await sleep(options.delay)
		node.classList.remove('delay')
	}
	mode(elements, { parentElement: node, ...options })
}

export { typewriter }
