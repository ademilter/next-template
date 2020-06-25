const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [],
  presets: [path.resolve(__dirname, './next-preset.js')]
}
