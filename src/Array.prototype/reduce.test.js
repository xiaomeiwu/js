test('', function() {
  let { reduce } = []
  let total = reduce.call(
    [1, 2, 3, 4, 5],
    function(pre, item, index, array) {
      return (pre = pre + item)
    },
    0
  )
  expect(total).toBe(1 + 2 + 3 + 4 + 5)
})
