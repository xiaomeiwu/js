const a = 'hello,world 1.2.3.4.5'

const reg = /,(world \d(\.\d)+)/

console.log(a.match(reg))
test('', function() {
  expect(a.match(reg)).toEqual(
    Object.assign([',world 1.2.3.4.5', 'world 1.2.3.4.5', '.5'], {
      index: 5,
      input: 'hello,world 1.2.3.4.5',
      groups: undefined
    })
  )
})
