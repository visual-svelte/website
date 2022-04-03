import { sleep } from '../helpers/sleep'
import { runOnEveryParentUntil } from '../helpers/runOnEveryParentUntil'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min

const getRandomLetter = () => {
	const possibleLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
		''
	)
	const letterIndexLimit = possibleLetters.length
	const randomLetterIndex = getRandomNumber(0, letterIndexLimit)
	const randomLetter = possibleLetters[randomLetterIndex]
	return randomLetter
}

// returns a array with a timeout (in ms) for each letter of the word
const getLettersTimeout = (textLetters, timeout) => {
	const minimumTimeoutPossible = timeout / 3
	// TODO: find a better way to deal with this instead of explicitly reducing the maximum timeout
	// otherwise, at the end of the animation, one or two characters remain scrambled
	const lettersTimeout = textLetters.map(() =>
		getRandomNumber(minimumTimeoutPossible, timeout - 100)
	)
	return lettersTimeout
}

/** @type {TypewriterModeFn} */
export const mode = async (elements, options) => {
	const timeout = typeof options.scramble == 'number' ? options.scramble : 3000
	await new Promise(resolve => {
		elements.forEach(async ({ currentNode, text }) => {
			let wordLetters = text.split('')
			const lettersTimeout = getLettersTimeout(wordLetters, timeout)
			const startingTime = Date.now()

			runOnEveryParentUntil(currentNode, options.parentElement, element => {
				element.classList.add('finished-typing')
			})

			while (Date.now() - startingTime < timeout) {
				const randomLetterIndex = getRandomNumber(0, wordLetters.length)
				const randomLetterTimeout = lettersTimeout[randomLetterIndex]
				const isRandomLetterWhitespace = wordLetters[randomLetterIndex] === ' '
				const timeEllapsed = () => Date.now() - startingTime
				const didRandomLetterReachTimeout = () => timeEllapsed() >= randomLetterTimeout

				if (didRandomLetterReachTimeout() || isRandomLetterWhitespace) {
					const letterFinishedAnimation =
						wordLetters[randomLetterIndex] === text[randomLetterIndex]

					if (!letterFinishedAnimation)
						wordLetters[randomLetterIndex] = text[randomLetterIndex]
					else continue
				} else {
					wordLetters[randomLetterIndex] = getRandomLetter()
				}

				const scrambledText = wordLetters.join('')
				currentNode.innerHTML = scrambledText

				const finishedScrambling = scrambledText === text

				const letterInterval = options.scrambleSlowdown
					? Math.round(timeEllapsed() / 100)
					: 1

				await sleep(letterInterval)

				if (finishedScrambling) {
					resolve()
					break
				}
			}

			currentNode.innerHTML = text
		})
	})
	options.dispatch('done')
}
