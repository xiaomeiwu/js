const nums = ['100', '1000', '10000', '100000', '1000000']
const reg = /(?!^)(?=(\d{3})+$)/g
nums.forEach(num => console.log(num.replace(reg, ',')))
