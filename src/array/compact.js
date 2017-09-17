// 去掉数组中为false的值
const compact = (arr) => {
  let resIndex = 0
  const result = []

  if (arr == null) {
    return result
  }
  for (let i of arr) {
    if (i) {
      result[resIndex++] = i
    }
  }
  return result
}

console.log(compact([false, '', 1, 0, null, undefined, 2, 'a']))

export default compact
