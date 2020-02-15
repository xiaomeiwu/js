let inputs = ["127.0.0.1"];
let reg = /^([0-9]|[0-9]{2}|1[0-9]{2}|2[0-5]{2})\.([0-9]|[0-9]{2}|1[0-9]{2}|2[0-5]{2})\.([0-9]|[0-9]{2}|1[0-9]{2}|2[0-5]{2})\.([0-9]|[0-9]{2}|1[0-9]{2}|2[0-5]{2})$/;
test("", function() {
  for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
    expect(reg.test(element)).toBe(true);
  }
});
