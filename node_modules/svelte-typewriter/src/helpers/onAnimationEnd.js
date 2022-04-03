/** @type {import(types').OnAnimationEnd} */
const onAnimationEnd = (element, callback) => {
	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
			const elementAttributeChanged = mutation.type === 'attributes'
			const elementFinishedTyping = mutation.target.classList.contains('typing')
			if (elementAttributeChanged && elementFinishedTyping) callback()
		})
	})

	observer.observe(element, {
		attributes: true,
		childList: true,
		subtree: true
	})
}

export { onAnimationEnd }
