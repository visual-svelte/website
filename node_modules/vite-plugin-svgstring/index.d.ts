declare module 'vite-plugin-svg' {
  import { Plugin } from 'vite'
  function svg(): Plugin
  export default svg
}

declare module '*.svg' {
  const src: string
  export default src
}