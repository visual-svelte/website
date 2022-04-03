export const runOnEveryParentUntil = async (element, parent, callback) => {
	if (!parent) {
		console.error('The specified parent element does not exists!')
		return
	}

	let currentElement = element
	do {
		if (currentElement === parent) return

		callback(currentElement)

		currentElement = currentElement.parentElement || currentElement.parentNode
	} while (currentElement !== null && currentElement.nodeType === 1)
}
