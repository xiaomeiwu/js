let inputs = ["#ffffff", "#00f", "#112233"];
let failInputs = ["f00", "#ggg", "#fffffff"];
let reg = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;
test("", function() {
  for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
    expect(reg.test(element)).toBe(true);
  }
});
test("", function() {
  for (let index = 0; index < failInputs.length; index++) {
    const element = failInputs[index];
    expect(reg.test(element)).toBe(false);
  }
});
