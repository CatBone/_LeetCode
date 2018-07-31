/**
 * @description Given two sorted integer arrays A and B, merge B into A as one sorted array.
Note: You may assume that A has enough space (size that is greater or equal
to m + n) to hold additional elements from B. The number of elements
initialized in A and B are m and n respectively.
 * @example given [1,3,8,10], [2,4,6,7], return [1,2,3,4,6,7,8,10]
 */

function merge(A: number[], B: number[]): number[] {
  let i = A.length - 1
  let j = B.length - 1
  let m = A.length + B.length - 1
  for (; m > 0; m--) {
    if (i > 0 && j > 0) {
      if (A[i] > B[j]) {
        A[m] = A[i]
        i--
      } else {
        A[m] = B[j]
        j--
      }
    } else if (i > 0) {
      A[m] = A[i]
      i--
    } else {
      A[m] = B[j]
      j--
    }
  }
  return A
}
