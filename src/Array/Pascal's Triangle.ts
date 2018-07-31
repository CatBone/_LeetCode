/**
 * @description 帕斯卡三角, Given numRows, generate the first numRows of Pascal's triangle
 * @example given 5, return [
                              [1],
                              [1,1],
                              [1,2,1],
                              [1,3,3,1],
                              [1,4,6,4,1]
                            ]
 */

function generate(numRows: number): number[][] {
  let arr: number[][] = []
  for (let i = 0; i < numRows; i++) {
    let insetArr: number[] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        insetArr.push(1)
      } else {
        insetArr.push(arr[i - 1][j - 1] + arr[i - 1][j])
      }
    }
    arr.push(insetArr)
  }
  return arr
}
