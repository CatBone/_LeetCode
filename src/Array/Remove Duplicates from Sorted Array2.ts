/**
 * @description 给定一个排序数组，删除重复元素后返回新数组的长度。要求：元素可以重复2次，不能创建新数组
 * @example given a sort array [1,1,1,2,2,3] return [1,1,2,2,3]
 */

function removeDuplicates2(arr: number[]): number {
  if (arr.length === 0) return 0
  let j = 0
  let i = 1
  let num = 0
  for (; i < arr.length; i++) {
    if (arr[j] === arr[i]) {
      num++
      if (num < 2) {
        arr[++j] = arr[i]
      }
    } else {
      arr[++j] = arr[i]
      num = 0
    }
  }
  arr.length = j + 1
  return arr.length
}
