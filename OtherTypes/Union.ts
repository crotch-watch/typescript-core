type StrNum = string | number
type StrNumUndef = StrNum | undefined
// can point to previous types

type Str = StrNumUndef | StrNum
type StrNumUndefUnion = string | number | undefined

// they have a lot of unions in common
// TS infers correctly at it's core this is
// string | number | undefined
type CheckUnion = Str | StrNumUndefUnion

// let constant: CheckUnion = {}
//       ^ error
const constant: CheckUnion = "string"
