const string = 'hello world'

console.log([
  string.replace(/^/g, '#'),
  string.replace(/$/g, '#'),
  string.replace(/\b/g, '#'),
  string.replace(/\B/g, '#'),
  '100000'.replace(/(?!^)(?=(\d{3})+$)/g, ',')
])
test('', function() {
  expect(string.replace(/^/g, '#')).toBe('#' + string)
  expect(string.replace(/$/g, '#')).toBe(string + '#')
  expect(string.replace(/\b/g, '#')).toBe('#hello# #world#')
  expect(string.replace(/\B/g, '#')).toBe('h#e#l#l#o w#o#r#l#d')
})
