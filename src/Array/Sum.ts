/**
 * @description 给定一个数组和一个值，求出这个数组中两个值的
和等于这个给定值的坐标，假定这个数组存在且只存在一个答案。输出是有要求的，1、坐标较小的放在前面，较大的放
在后面。2、坐标是从1开始的
 * @example [2,6,7,8,9], given int: 9, return [1,3]
 */

function Sum(arr: number[], n: number): number[] | string {
  const hash: any = {}
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = i + 1
  }
  for (let k in hash) {
    if (hash[n - +k]) {
      const index1 = hash[k]
      const index2 = hash[n - +k]
      if (index1 > index2) {
        return [index2, index1]
      } else {
        return [index1, index2]
      }
    }
  }
  return 'nope'
}
