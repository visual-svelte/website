const cleanChildText = elements =>
	elements.forEach(element => (element.currentNode.textContent = ''))

export { cleanChildText }
