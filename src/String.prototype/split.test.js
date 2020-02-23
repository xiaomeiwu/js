const a = 'hello world'

const b = a.split()
const c = a.split('')
const d = a.split(' ')
const e = a.split('  ')
const f = a.split('l')

test('', function() {
  expect(b).toEqual(['hello world'])
  expect(c).toEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'])
  expect(d).toEqual(['hello', 'world'])
  expect(e).toEqual(['hello world'])
  expect(f).toEqual(['he', '', 'o wor', 'd'])
})
