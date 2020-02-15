const a = {
  x: 'x'
}
const b = Object.create(a, {
  y: {
    value: 'y',
    enumerable: true
  }
})
Object.defineProperty(b, 'z', {
  value: 'z'
})
b.u = 'u'

test('', function() {
  expect(b.x).toBe('x')
  expect(b.y).toBe('y')
  expect(Object.keys(b)).toEqual(['y', 'u'])
  expect(getKeys(b)).toEqual(['y', 'u'])
})

function getKeys(obj) {
  const keys = []
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
  }
  return keys
}
