let upperRegExp = /([A-Z])([\d])/g
let str = '1AcdDD18'

test('', function() {
  expect(
    str.replace(upperRegExp, function(match, p1, p2, offset) {
      return p1 + p2
    })
  ).toBe(str)
})

test('', function() {
  expect(str.replace(upperRegExp, '$2$1')).toBe('1AcdD1D8')
})
