/**
 * @description 给一个有序列表去除重复元素，并返回新数组的长度。注意不能创建新数组
 * @example given [1, 1, 2, 2, 3] return 3 ([1, 2, 3])
 * @param arr
 */
function removeDuplicates(arr: number[]): number {
  if (arr.length === 0) return 0
  let j = 0
  let i = 1
  for (; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      arr[++j] = arr[i]
    }
  }
  arr.length = j + 1
  return arr.length
}
