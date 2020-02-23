const a = [1, 1.1, 1.6, 2]
test('', function() {
  expect(a.map(item => Math.floor(item))).toEqual([1, 1, 1, 2])
  expect(a.map(item => Math.ceil(item))).toEqual([1, 2, 2, 2])
  expect(a.map(item => Math.round(item))).toEqual([1, 1, 2, 2])
})
