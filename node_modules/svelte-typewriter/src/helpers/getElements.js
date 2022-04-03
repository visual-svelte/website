import { hasSingleTextNode } from './hasSingleTextNode'
import { createElement } from './createElement'

const filterOutStaticElements = child => child.dataset.static === undefined

/** @type {import(types').GetElements} */
const getElements = (node, { parentElement }) => {
	if (hasSingleTextNode(parentElement)) {
		const text = parentElement.textContent
		const childNode = createElement(parentElement.textContent, 'p')
		parentElement.textContent = ''
		parentElement.appendChild(childNode)
		return [{ currentNode: childNode, text }]
	}

	if (hasSingleTextNode(node)) {
		const textWithFilteredAmpersand = node.innerHTML.replaceAll('&amp;', '&')
		return [{ currentNode: node, text: textWithFilteredAmpersand }]
	} else {
		const children = [...node.children].filter(filterOutStaticElements)
		const allChildren = children.flatMap(child => getElements(child, { parentElement }))
		return allChildren
	}
}

export { getElements }
