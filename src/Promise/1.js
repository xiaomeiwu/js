const getPromise = num => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(num)
      resolve()
    }, Math.random() * 1000)
  })
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.reduce(
  (pre, num) =>
    pre.then(() => {
      return getPromise(num)
    }),
  Promise.resolve()
)
