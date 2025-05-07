// challenge is to contruct a type from person
// which has all the properties of person but optional
// should only accept those property names

type Person = {
  name: string
  age: string
  address: string
}

type PersonProps = keyof Person

// type PartialPersonKeys<key> = key in  PersonProps
//                                   ^? error key is a type but used as a value

// Person exists as separate type
// key is a type parameter where is the generic <>
// 'in' is making sure it is present in personprops

// if I use key as a param in PartialPerson it isn't local
// like same two vars declared in and out of fn. scope
type PartialPerson<key> = {
  // here key is a generic
  [key in PersonProps]: Person[key]
}
