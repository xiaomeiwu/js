let param = [
  [0, 0],
  [1, 1],
  [2, 2]
];
let { toString } = Object.prototype;
let i = new Map(param);
test("", function() {
  expect(i).toEqual(new Map(param));
  console.log(typeof i, toString.call(i));
});
