import { sleep } from './sleep'
import { rng } from './rng'

/** @type {import(types').TypingInterval} */
const typingInterval = async interval =>
	sleep(Array.isArray(interval) ? interval[rng(0, interval.length)] : interval)

export { typingInterval }
