// tupples are arrays of fixed shape and structure
// this will allow  strings to be appended
const not_tupple: string[] = ["john", "doe"]

// this won't allow strings to be appended
// at the time of declaration
const tupple: [string, string] = ["john", "doe"]

// TS doesn't disallow mutations after declarations
tupple.push("defeats the purpose but is allowed")
tupple.pop()
tupple.splice(0)

const tupple_with_optional_elements: [string, string, number, string?] = [
  "john",
  "doe",
  12
]

// rest values are optional when typed at last index
const tupple_with_rest_optional: [string, boolean, ...number[]] = [
  "logged",
  true
]

// once structure has been fixed with ...rest not at last
// it's madatory to declare with boolean at the end
const tupple_with_rest_fixed: [string, ...number[], boolean] = [
  "logged",
  1,
  2,
  true
]
