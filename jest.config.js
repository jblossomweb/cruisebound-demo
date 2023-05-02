/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')
const customConfig = require('./jest.custom.json')

const createJestConfig = nextJest({
  dir: './',
})

module.exports = createJestConfig(customConfig)
