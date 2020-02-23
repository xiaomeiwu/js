test('', function() {
  let result = []
  for (let i = 0; i < 10000; i++) {
    result.push(Math.random())
  }
  expect(result.every(item => item >= 0 && item < 1)).toBe(true)
  console.log(getNumber(10))
})

function getNumber(num) {
  const res = []
  function getRandom() {
    return Math.ceil(Math.random() * num)
  }
  for (let i = 0; i < num; i++) {
    let random = getRandom()
    while (res.indexOf(random) > -1) {
      random = getRandom()
    }
    res.push(random)
  }
  return res
}
