let input = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let s = new Set(input);
test("", function() {
  expect(s.size).toBe(5);
  expect(s.has(1) && s.has(2) && s.has(3) && s.has(4) && s.has(5)).toBe(true);
  s.add(6);
  expect(s.size).toBe(6);
  expect(s.has(6)).toBe(true);
  s.delete(6);
  expect(s.size).toBe(5);
  expect(s.has(6)).toBe(false);
  s.clear();
  expect(s.size).toBe(0);
  expect(s.has(1)).toBe(false);
});
