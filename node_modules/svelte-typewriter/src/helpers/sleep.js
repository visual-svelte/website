/** @type {import(types').Sleep} */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export { sleep }
