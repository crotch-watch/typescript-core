const add = (...numbers: number[]): number => {
  return numbers.reduce((prev, curr) => prev + curr, 0)
}
// useful for passing infinite args into a fn. at once

add(1, 2, 3)

const multiplyBy = (base: number) => {
  return (...numbers: number[]): number[] => {
    return numbers.map((number) => number * base)
  }
}

const multiplyBy2 = multiplyBy(2)
multiplyBy2(1, 2, 3, 4)
