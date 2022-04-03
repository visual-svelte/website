/** @type {import(types').DescendingSortFunction} */
const descendingSortFunction = (firstElement, secondElement) =>
	secondElement.text.length - firstElement.text.length

/** @type {import(types').GetLongestTextElement} */
const getLongestTextElement = elements => {
	const descendingTextLengthOrder = elements.sort(descendingSortFunction)
	const longestTextElement = descendingTextLengthOrder[0].currentNode
	return longestTextElement
}

export { getLongestTextElement }
