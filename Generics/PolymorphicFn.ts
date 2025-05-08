// challenge is to create a Array.prototype.filter clone

let filter = <T>(array: T[], predicate: (element: T) => boolean): T[] => {
  if (!array.length) return array

  const filteredArray: T[] = []

  array.forEach((element) => {
    const isTrue = predicate(element)

    if (isTrue) filteredArray.push(element)
  })

  return filteredArray
}

// improved version since every fn. passed into forEach will form a closure
// for loops would be more memory efficient for larger arrays

filter = <T>(array: T[], predicate: (element: T) => boolean): T[] => {
  if (!array.length) return array

  const filteredArray: T[] = []

  for (const element of array) {
    const isTrue = predicate(element)

    if (isTrue) filteredArray.push(element)
  }

  return filteredArray
}

filter = <T>(array: T[], predicate: (element: T) => boolean): T[] => {
  if (!array.length) return array

  const filteredArray: T[] = []

  for (const element of array) {
    if (predicate(element)) filteredArray.push(element)
  }

  return filteredArray
}
