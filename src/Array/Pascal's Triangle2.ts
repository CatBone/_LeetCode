/**
 * @description Given an index k, return the kth row of the Pascal's triangle. index 从 0 开始，只能使用O(k)的空间
 * @example given k = 3, Return [1,3,3,1].
 *
 */

function Pascal(kth: number): number[] {
  let arr: number[] = []
  for (let i = 0; i < kth + 1; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr[j] = 1
      } else {
        arr[j] = arr[j] + arr[j-1]
      }
    }
  }
  return arr
}
