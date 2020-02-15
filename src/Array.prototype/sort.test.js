let a = [1, 2, 3, 4, 5]

test("", function () {
    expect(a.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5])
})
test("", function () {
    expect(a.sort((a, b) => b - a)).toEqual([1, 2, 3, 4, 5].reverse())
})