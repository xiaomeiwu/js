test('', function () {
    let result = []
    for (let i = 0; i < 10000; i++) {
        result.push(Math.random())
    }
    expect(result.every(item => item >= 0 && item < 1)).toBe(true)
})