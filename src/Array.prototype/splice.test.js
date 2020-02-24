const a = [1, 2, 3, 4, 5]
test('', function() {
  expect(a.splice(3, 0, 6)).toEqual([])
  expect(a).toEqual([1, 2, 3, 6, 4, 5])
  expect(a.splice(3, 1)).toEqual([6])
  expect(a).toEqual([1, 2, 3, 4, 5])
})
