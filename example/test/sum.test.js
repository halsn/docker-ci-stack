const sum = require('../lib/sum.js')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(2, 3)).toBe(5)
})
