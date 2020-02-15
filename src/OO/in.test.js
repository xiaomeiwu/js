const a = {}
const b = {
  x: null
}
const c = Object.create(b)
const d = {}
Object.defineProperty(d, 'x', {
  value: null,
  enumerable: false
})
test('', function() {
  expect('x' in a).toBe(false)
  expect('x' in b).toBe(true)
  expect('x' in c).toBe(true)
  expect('x' in d).toBe(true)
})
