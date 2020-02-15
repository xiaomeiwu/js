const a = {}
Object.defineProperty(a, 'x', {
  value: 'x'
})
function get() {
  return 'y'
}
Object.defineProperty(a, 'y', {
  get
})

test('', function() {
  expect(a.x).toBe('x')
  expect(Object.getOwnPropertyDescriptor(a, 'x')).toEqual({
    value: 'x',
    writable: false,
    enumerable: false,
    configurable: false
  })
  expect(a.y).toBe('y')
  expect(Object.getOwnPropertyDescriptor(a, 'y')).toEqual({
    get,
    set: undefined,
    configurable: false,
    enumerable: false
  })
})
