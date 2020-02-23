function getType(o) {
  return Object.prototype.toString
    .call(o)
    .toLowerCase()
    .slice(8, -1)
}

const v = {
  a: undefined,
  b: null,
  c: true,
  d: 'x',
  e: 1,
  f: function() {},
  g: [],
  h: {},
  i: new Date(),
  j: /hello/g,
  k: (function() {
    function Dog() {}
    return new Dog()
  })()
}

test('', function() {
  const types = Object.keys(v).map(key => getType(v[key]))
  expect(types).toEqual([
    'undefined',
    'null',
    'boolean',
    'string',
    'number',
    'function',
    'array',
    'object',
    'date',
    'regexp',
    'object'
  ])
})
