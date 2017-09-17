// 数组联结
const concat = (arr) => {
  let resIndex = 0
  const result = []

  if (arr == null) {
    return result
  }
  for (let i of arr) { // for of i为数组的值而不是下标
    if (i) {
      result[resIndex++] = i
    }
  }
  return result
}

// console.log(concat([false, '', 1, 0, null, undefined, 2, 'a']))

export default concat
