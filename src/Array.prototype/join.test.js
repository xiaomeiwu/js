const input = ['s', 'w']
test('', function() {
  expect(input.join()).toBe(input.join(','))
})
