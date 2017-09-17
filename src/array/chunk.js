// 对数组进行切割
 const chunk = (arr, size) => {
   const length = arr == null ? 0 : arr.length
   if (!length || size < 1) {
     return []
   }
   let index = 0
   let resIndex = 0
   const result = new Array(Math.ceil(length / size))

   while (index < length) {
     result[resIndex++] = arr.slice(index, (index += size))
   }
   return result
 }
 // console.log(chunk(['a', 'b', 'c', 'd'], 2))

 export default chunk
