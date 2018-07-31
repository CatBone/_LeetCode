/**
 * @description 在一个数组里面移除指定value，并且返回新的数组长度。这题唯一需要注意的地方在于 in place ，不能新建另一个数组。
 */

function removeElement(arr: number[], elm: number): number {
  let i: number = 0
  let j: number = 0
  for (; i < arr.length; i++) {
    if (arr[i] === elm) {
      continue
    }
    arr[j] = arr[i]
    j++
  }
  arr.length = j
  return j
}
