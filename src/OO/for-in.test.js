const a = {
  x: 'x'
}
Object.defineProperty(a, 'y', {
  value: 'y'
})
const b = Object.create(a)
b.z = 'bz'
const c = Object.create(b)
c.u = 'cu'
for (const key in b) {
  console.log(key, b[key])
}
for (const key in c) {
  console.log(key, c[key])
}
