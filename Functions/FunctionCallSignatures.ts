type Mobile = {
  vendor: string
  notify: (app: string) => void
}

const iphone: Mobile = {
  vendor: "apple",
  notify: (app: string) => console.log(app)
}

iphone.notify("message")

const map = (array: string[], callback: (el: string) => number) => {
  if (!array.length) return []

  const result: number[] = []

  for (const el of array) {
    result.push(callback(el))
  }

  return result
}

const number_arr = map(['1', '2', '3'], (el) => +el)
