/** @type {import(types').RandomNumberGenerator} */
const rng = (min, max) => Math.floor(Math.random() * (max - min) + min)

export { rng }
