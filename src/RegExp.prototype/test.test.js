let a = /abcd/;

test("", function() {
  let input = "abcd";
  expect(a.test(input)).toBe(true);
});
