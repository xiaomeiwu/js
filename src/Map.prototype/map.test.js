const a = [
  ['x', 'this is x'],
  ['y', 'this is y']
]
const b = new Map(a)
const keys = [
  'constructor',
  'get',
  'set',
  'has',
  'delete',
  'clear',
  'entries',
  'forEach',
  'keys',
  'size',
  'values'
]
test('', function() {
  expect(Object.keys(Object.getOwnPropertyDescriptors(Map.prototype))).toEqual(
    keys
  )
  expect(b.has('x') && b.has('y')).toBe(true)
  expect([b.get('x'), b.get('y')]).toEqual(['this is x', 'this is y'])
  expect(b.size).toBe(2)
  b.clear()
  expect(b.size).toBe(0)
})
const c = new Map()
c.set('x', 'this is x')
c.set(function() {}, 'this is y')
console.log([...c], Array.from(c))
