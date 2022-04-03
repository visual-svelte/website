/** @type {import(types').CreateElement} */
const createElement = (text, elementTag) => {
	const element = document.createElement(elementTag)
	element.textContent = text
	return element
}

export { createElement }
