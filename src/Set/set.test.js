let input = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

test("", function() {
  let a = new Set(input);
  expect([...a]).toEqual([1, 2, 3, 4, 5]);
});
test("", function() {
  let a = new Set(input);
  expect(Array.from(a)).toEqual([1, 2, 3, 4, 5]);
});

test("", function() {
  let keys = [
    "constructor",
    "has",
    "add",
    "delete",
    "clear",
    "entries",
    "forEach",
    "size",
    "values",
    "keys"
  ];
  let name = "sshhuuwwaanngg";
  expect([...new Set(name)].join("")).toBe("shuwang");
});
