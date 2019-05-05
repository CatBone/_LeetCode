/**
 * @description 计算组合数C(m, n)
 * @example C(5, 2) return 10
 */

function factorial(n: number): number {
  if (n === 1) return 1
  else return n * factorial(n - 1)
}

function C(m: number, n: number): number {
  return factorial(m) / (factorial(n) * factorial(m - n))
}

// C(15, 2) return 105