type Dog = {
  name: string
  barks: boolean
  wags: boolean
}

type Cat = {
  name: string
  purrs: boolean
  meows: boolean
}

type DogCatUnion = Dog | Cat

const labra: DogCatUnion = {
  name: "Doge",
  barks: true,
  wags: true
}

const persian: DogCatUnion = {
  name: "Kittu",
  meows: true,
  purrs: true
}

// Unions must exhaust one type completely
// other types which share union can be partials

const hybrid: DogCatUnion = {
  name: "Dittu",
  barks: true,
  wags: true,
  meows: true
}

// it differs from discriminating unions as
// there is no property which can be used to narrow it down
// string accepts all and others are different in both
