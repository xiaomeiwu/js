const a = Symbol('a')
const b = Symbol('b')
const c = Symbol.for('c')
const d = Symbol.for('c')
test('', function() {
  expect(typeof a).toBe('symbol')
  expect(a == b).toBe(false)
  expect(a === b).toBe(false)
  expect(c == d).toBe(true)
  expect(c === d).toBe(true)
})