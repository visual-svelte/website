# svelte-typewriter

> A simple and reusable typewriter effect for your Svelte applications

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![npm Version](https://img.shields.io/npm/v/svelte-typewriter)](https://www.npmjs.com/package/svelte-typewriter)
[![npm Downloads](https://img.shields.io/npm/dw/svelte-typewriter)](https://www.npmjs.com/package/svelte-typewriter)
[![MadeWithSvelte.com shield](https://madewithsvelte.com/storage/repo-shields/2074-shield.svg)](https://madewithsvelte.com/p/svelte-typewriter/shield-link)

[DEMO](https://svelte.dev/repl/9dfb73bfa9b34aeea4740fa23f5cde8a)

## Summary

- [Summary](#summary)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
    - [Settings](#settings)
    - [Modes](#modes)
    - [Event listeners](#event-listeners)
    - [Child attributes](#child-attributes)
- [Used by](#used-by)
- [FAQs](#faqs)
    - [UMD and IIFE output formats are not supported for code-splitting builds](#umd-and-iife-output-formats-are-not-supported-for-code-splitting-builds)
- [Contributing](#contributing)

## Installation

```bash
# yarn
yarn add -D svelte-typewriter

# npm
npm i -D svelte-typewriter
```

## Usage

You need to import the Svelte component, and wrap your elements with the `<Typewriter>` component

```svelte
<script>
    import Typewriter from 'svelte-typewriter'
</script>

<Typewriter>
	<h1>Testing the typewriter effect</h1>
	<h2>The typewriter effect cascades by default</h2>
	<p>Lorem ipsum dolor sit amet consectetur</p>
</Typewriter>

```

## Props

The `<Typewriter>` component can receive props that allows to manipulate the behavior of the resulting animation, these props are divided into 4 groups

- **Settings:** general animation properties
- **Modes:** different styles of animation
- **Event listeners:** functions executed based on the condition of a trigger
- **Child attributes:** child elements animation properties

### Settings

| Prop                  | Type                  | Description                                                                                                                                                                     | Default                                       |                                                                                 |
| --------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------- |
| `interval`            | `number` or `array`   | The interval in milliseconds between each letter, you can also pass a array of distinct intervals to mimic human typing                                                         | `30`                                          | [DEMO](https://svelte.dev/repl/eb6caec159cf454b8f2bc98f3444fa8c)                |
| `unwriteInterval`     | `number`            | The interval in milliseconds between each letter unwrite, is valid only on loops. If not defined it uses interval                                                                | `false`                                       | TBA                                                                             |
| `cursor`              | `boolean` or `string` | Enables/disables the terminal cursor on the Typewriter animation, and also, allows you to pass any valid color name, hex code, rgb/rgba valid values to change the cursor color | `true`                                        | [DEMO](https://svelte.dev/repl/6008b5aaff6f46e5909c63e795a19f5a)                |
| `delay`               | `number`              | The interval in milliseconds before the animation starts                                                                                                                        | `0`                                           | [DEMO](https://svelte.dev/repl/2002ac9fe1e0433a88a687b3b3d4c58b?version=3.29.0) |
| `scrambleSlowdown`    | `boolean`             | Enables/disables the slowdown effect right before the scramble animation ends (only works in scramble mode)                                                                     | `true` if on scramble mode, otherwise `false` | TBA                                                                             |

### Modes

You can control the behavior of the typewriter effect by passing specific props to the `<Typewriter>` component, the table below contains information about all modes:

| Mode         | Type                  | Description                                                                                                                                                                                                                                                                      | Default |                                                                  |
| ------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `default`    |                       | Apply animation simultaneously on all elements, as opposed to the sequential animation of `cascade` mode                                                                                                                                                                         | `true`  | [DEMO](https://svelte.dev/repl/9dfb73bfa9b34aeea4740fa23f5cde8a) |
| `cascade`    | `boolean`             | Apply animation on all elements sequentially instead of simultaneously                                                                                                                                                                                                           | `false` | [DEMO](https://svelte.dev/repl/9ddb89942e954a2a90b553356952ff46) |
| `loop`       | `boolean` or `number` | Cycles the animation between the children elements of the parent `Typewriter` component, the interval (in milliseconds) between each word can be defined by passing a number as the parameter, otherwise defaults to `1500`                                                      | `false` | [DEMO](https://svelte.dev/repl/e8b82d83f6c2444b97619238404bcd4d) |
| `loopRandom` | `boolean` or `number` | It's very similar to `loop` mode, but instead of cycling the animation in a linear way, it picks a random child element to animate each time, the interval (in milliseconds) between each word can be defined by passing a number as the parameter, otherwise defaults to `1500` | `false` | [DEMO](https://svelte.dev/repl/d75f38dc86374f7ebd20e1e33d278b09) |
| `scramble`   | `boolean` or `number` | Randomize all letters in a element text for a specific amount of time, if a number is passed as argument, it's defined as the duration of the animation (defaults to `3000`)                                                                                                     | `false` | [DEMO](https://svelte.dev/repl/1c48ad0ad8d34eb7b6e561d39799ff6e) |

### Event listeners

| Event     | Trigger                                                                                                             |                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `on:done` | Is executed at the end of the animation, if used with `loop` mode, this event will be fired at the end of each loop | [DEMO](https://svelte.dev/repl/145cbf66c396497aa5338846077d53e0) |

### Child attributes

| Attribute     | Description                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `data-static` | Marks an element as static, excluding it from receiving animations from the `<Typewriter>` component |

## Used by

<div align="center">
    <a target="_blank" href="https://github.com/GeopJr/SveltePress" style="margin:0 12px">
        <img src="sveltepress-logo.png" width="128" alt="SveltePress logo">
    </a>
    <a target="_blank" href="https://github.com/ThatConference/that.us" style="margin:0 12px">
        <img src="that-us-logo.svg" width="256" height="128" alt="That.us logo">
    </a>
</div>

## FAQs

#### UMD and IIFE output formats are not supported for code-splitting builds.

From version 2.1.17 onwards, this library makes use of dynamic imports, if your Rollup configuration `output.format` is set to `iife` or `umd`, consider setting `inlineDynamicImports` to `true`, otherwise, change `output.format` to something else, like `esm` (for more details, consider checking [#21](https://github.com/henriquehbr/svelte-typewriter/issues/21))

#### Test suite failed to run: SyntaxError: Unexpected token '<'

This happens because Jest cannot parse Svelte syntax right away, it must be transpiled by Babel beforehand, therefore, we must tell Jest to ignore `node_modules` as a whole (as it can contain other Svelte components, or files that aren't recognized by Jest), this can be done by setting the `transformIgnorePatterns` property on your Jest configuration, example below:

```js
// jest.config.js
module.exports = {
    transformIgnorePatterns: ["node_modules"]
}
```

> More details on #73

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b fix/my-new-bug-fix`
3. Preview your changes with `yarn dev` (or `npm run dev`)
4. Commit your changes: `git commit -am 'fix: Fix some bug'`
5. Push to the branch: `git push origin fix/my-new-bug-fix`
6. Submit a pull request :D
