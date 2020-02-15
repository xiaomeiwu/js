function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item))
  } else if (typeof obj === 'object' && obj) {
    const res = {}
    for (const key in obj) {
      res[key] = deepClone(obj[key])
    }
    return res
  } else {
    return obj
  }
}

let input = {
  a: 1,
  b: 'b',
  c: [1, 2, 3, { a() {} }],
  d: null,
  f: undefined,
  g: {
    a() {},
    b: [1, 2, 3, 4, 5]
  }
}
test('', function() {
  const res = deepClone(input)
  expect(res).toEqual(input)
})
