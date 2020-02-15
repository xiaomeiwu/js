let a = [1, 2, 3, 4];
test("", function() {
  let temp = a.slice();
  expect(temp).toEqual([1, 2, 3, 4]);
  expect(temp).not.toBe(a);
});
let b = [1, 2, 3, 4];
test("", function() {
  let temp = b.slice(2, -1);
  expect(temp).toEqual([3]);
});
test("", function() {
  let b = [];
  for (let index = 0; index < 4; index++) {
    b[index] = index + 1;
  }
  let { slice } = Array.prototype;
  let result = slice.call(b, 1);
  expect(result).toEqual([2, 3, 4]);
});
