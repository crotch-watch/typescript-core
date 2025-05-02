// function returns (value) {
//   return value
// }
// it'a theoretically impossible to strictly type this fn.
// since value can be anything and strict typing won't include any
// and can't type infinite combo. of types.

// unless I use generics
function returns<Type>(value: Type): Type {
  return value
}
// Type is a type parameter similar to fn. having parameter
// generic is a type equivalent of fn. construct but
// fn. deals in values and generics deal in types.
// therefore works in parallel similar to constructs which deal in values.
// value must be first declared in order to be operated upon
// similarly <Type> is declared first so thet it can be operated upon

// function type signature
const resolves: <Type>(value: Type) => Type = (value) => value

// call signature
type Rejects = {
  <Type>(value: Type): Type,
  withError: string
}

const rejects: Rejects = function (value) {
  return value
}
rejects.withError = "rejected"

let rejected = rejects<string>("value")
rejected = rejects("☹️")
