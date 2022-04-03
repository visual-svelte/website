import { rng } from './rng'

/** @type {any[]} */
let alreadyChoosenTexts = []

/** @type {import(types').GetRandomText} */
const getRandomElement = elements => {
	while (true) {
		const randomIndex = rng(0, elements.length)
		// After each iteration, avoid repeating the last text from the last iteration
		const isTextDifferentFromPrevious =
			typeof alreadyChoosenTexts === 'number' && randomIndex !== alreadyChoosenTexts
		const isTextFirstTime =
			Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex)
		const hasSingleChildElement = elements.length === 1
		const shouldAnimate =
			hasSingleChildElement || isTextFirstTime || isTextDifferentFromPrevious
		if (shouldAnimate) {
			isTextDifferentFromPrevious && (alreadyChoosenTexts = [])
			alreadyChoosenTexts.push(randomIndex)
			const randomText = elements[randomIndex]
			return randomText
		}
		const restartRandomizationCycle = alreadyChoosenTexts.length === elements.length
		restartRandomizationCycle && (alreadyChoosenTexts = alreadyChoosenTexts.pop())
	}
}

export { getRandomElement }
