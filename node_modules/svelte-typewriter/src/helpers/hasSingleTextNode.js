/** @type {import(types').HasSingleTextNode} */
const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

export { hasSingleTextNode }
