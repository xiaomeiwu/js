const a = {
  x: 'this is x',
  y: 'this is y'
}

const b = [
  ['x', 'this is x'],
  ['y', 'this is y']
]

const c = new Map(Object.entries(b))

test('', function() {
  expect(Object.entries(a)).toEqual(b)
  const d = c.entries()
  const e = []
  const f = []
  for (const [key, value] of d) {
    e.push(key)
    f.push(value)
  }
  expect(e).toEqual(['0', '1'])
  expect(f).toEqual(b)
})
