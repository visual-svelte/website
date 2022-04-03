interface TypewriterProps {
    interval?: number | number[]
	cascade?: boolean
	loop?: boolean | number
	loopRandom?: boolean | number
    scramble?: boolean | number
    scrambleSlowdown?: boolean
	cursor?: boolean | string
	delay?: number
	unwriteInterval?: boolean | number
}

interface TypewriterEvents {
    done: CustomEvent<any>
}

interface TypewriterSlots {
    default: {}
}

interface TypewriterElement {
	currentNode: Element
	text: string
}

interface TypewriterOptions extends TypewriterProps {
	dispatch: (type: string, detail?: any) => void
}

type TypewriterEffectFn = (element: TypewriterElement, options: TypewriterOptions) => Promise<void>

type TypewriterMainFn = (node: Element, options: TypewriterOptions) => Promise<void>

type TypewriterModeFn = (elements: TypewriterElement[], options: TypewriterOptions) => Promise<void>

export {
	TypewriterElement,
	TypewriterOptions,
	TypewriterEffectFn,
	TypewriterMainFn,
	TypewriterModeFn,
    TypewriterProps,
    TypewriterEvents,
    TypewriterSlots
}
