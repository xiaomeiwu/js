test('', function() {
  try {
    console.log(a)
  } catch (error) {
    expect(error.constructor).toBe(ReferenceError)
  }
})
