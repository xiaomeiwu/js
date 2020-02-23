test('', function() {
  try {
    new Array(Math.pow(2, 1000))
  } catch (error) {
    expect(error.constructor).toBe(RangeError)
  }
})
