const { extname } = require('path')
const fs = require('fs').promises

module.exports = function svg () {
  return {
    enforce: 'pre',
    name: 'svg-loader',
    async load (id) {
      const path = id.split('?')[0]

      if (!extname(path).startsWith('.svg')) {
        return null
      }

      const svg = await fs.readFile(path, 'utf-8')

      // eslint-disable-next-line no-useless-concat
      return 'export default ' + '`' + svg + '`'
    }
  }
}