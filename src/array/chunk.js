// 对数组进行切割
const chunk = (arr, size) => {
  size = Math.max(size, 0) // 如果size不是数字，结果为NaN,NaN与数字比较为false
  const length = arr == null ? 0 : arr.length // 如果arr为0怎么办？
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size)) // lodash不用空数组直接PUSH的方式，先创建一个数组，然后给数组每一项赋值，不知道为什么？

  while (index < length) {
    result[resIndex++] = arr.slice(index, (index += size)) // 以size作为步长
  }
  return result
}
 // console.log(chunk(['a', 'b', 'c', 'd'], 2))

export default chunk
