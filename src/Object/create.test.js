const sup = {
    name: 'sup'
}
test('', function () {
    const sub = Object.create(sup)
    expect(Object.getPrototypeOf(sub)).toBe(sup)
})

test('', function () {
    const sub = Object.create(null)
    expect(sub.toString).not.toBe(({}).toString)
})
test('', function () {
    const sub = Object.create({})
    expect(sub.toString).toBe(({}).toString)
})